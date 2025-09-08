// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Dashboard from "./pages/admin/Dashboard";
import AuthPages from "./pages/AuthPage";
import WishlistPage from "./pages/WishList";
import MyOrdersPage from "./pages/MyOrders";

function Layout() {
  const location = useLocation();

  // Agar route admin hai to header/footer hide kar de
  const hideLayout = location.pathname.startsWith("/admin")|| location.pathname.startsWith("/login");

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/login" element={<AuthPages/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
          <Route path="/myorders" element={<MyOrdersPage/>} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
