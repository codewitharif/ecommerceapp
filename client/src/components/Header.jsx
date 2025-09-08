// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Home, Package, Sparkles } from "lucide-react";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-orange-100 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Premium Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 sm:space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              StyleShop
            </span>
          </Link>

          {/* Mobile & Desktop Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-1">
              <Link
                to="/"
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 group backdrop-blur-sm"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Home</span>
              </Link>
              
              <Link
                to="/products"
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 group backdrop-blur-sm"
              >
                <Package className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Products</span>
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex sm:hidden items-center space-x-2">
              <Link
                to="/"
                className="p-2 rounded-xl text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
              </Link>
              
              <Link
                to="/products"
                className="p-2 rounded-xl text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
              >
                <Package className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Cart - Always Visible */}
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 px-3 py-2 rounded-xl text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                {itemCount > 0 && (
                  <>
                    {/* Animated badge */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">
                        {itemCount > 99 ? '99+' : itemCount}
                      </span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                  </>
                )}
              </div>
              <span className="hidden sm:inline font-medium">Cart</span>
              {itemCount > 0 && (
                <span className="hidden sm:inline ml-1 text-xs bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                  ({itemCount})
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
    </header>
  );
};

export default Header;