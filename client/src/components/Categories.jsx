import React from "react";
import { Link } from "react-router-dom";
import {
  Shirt,
  Watch,
  ShoppingBag,
  Gem,
  Footprints,
  Glasses,
} from "lucide-react";

const categories = [
  {
    name: "Clothing",
    icon: <Shirt className="w-8 h-8" />,
    link: "/category/clothing",
  },
  {
    name: "Accessories",
    icon: <Watch className="w-8 h-8" />,
    link: "/category/accessories",
  },
  {
    name: "Bags",
    icon: <ShoppingBag className="w-8 h-8" />,
    link: "/category/bags",
  },
  {
    name: "Jewelry",
    icon: <Gem className="w-8 h-8" />,
    link: "/category/jewelry",
  },
  {
    name: "Footwear",
    icon: <Footprints className="w-8 h-8" />,
    link: "/category/footwear",
  },
  {
    name: "Eyewear",
    icon: <Glasses className="w-8 h-8" />,
    link: "/category/eyewear",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <span className="text-gray-800 font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;