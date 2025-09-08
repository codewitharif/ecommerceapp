const adminDB = require("../../models/admin/adminModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.ADMIN_SECRET_KEY;

const adminauthenticate = async (req, res, next) => {
  try {
    // const token = req.headers.token; ye v work krta hai
    let token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null;

    console.log("yeah i got the token my boy in middleware", token);

    if (!token) {
      console.log("sorry no token found");
    }

    const verifyToken = jwt.verify(token, SECRET_KEY);

    const rootUser = await adminDB.findOne({ _id: verifyToken._id });

    if (!rootUser) {
      throw new Error("user not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(400).json({ error: "Unauthorized No token Provide" });
  }
};

module.exports = adminauthenticate;
