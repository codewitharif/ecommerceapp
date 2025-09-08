import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowLeft,
  Search,
  Sparkles,
  Star,
  ChevronDown,
  Bell,
} from "lucide-react";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Premium Cotton Blend T-Shirt",
      price: 49.99,
      originalPrice: 69.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 2,
      name: "Designer Casual Hoodie",
      price: 89.99,
      originalPrice: 119.99,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 3,
      name: "Luxury Denim Jacket",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      inStock: false,
    },
    {
      id: 4,
      name: "Sports Performance Shorts",
      price: 39.99,
      originalPrice: 49.99,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      inStock: true,
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const moveToCart = (id) => {
    // Logic to move item to cart
    console.log("Moving item to cart:", id);
  };

  return (
    <div className="min-h-screen bg-white">
   
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Your Wishlist</h1>
            <p className="text-gray-600 mt-2">
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1 ? "item" : "items"} saved for later
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2.5 border border-orange-200 text-orange-600 rounded-xl hover:bg-orange-50 transition-colors">
              Share Wishlist
            </button>
            <button className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-orange-500/30">
              Move All to Cart
            </button>
          </div>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-orange-100/50">
            <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Save your favorite items here to easily find them later
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-orange-500/30">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-orange-100/50"
              >
                {/* Product Image */}
                <div className="relative h-60 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-3 left-3 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Out of Stock
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => moveToCart(product.id)}
                      disabled={!product.inStock}
                      className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                        product.inStock
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md hover:shadow-orange-500/30"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recently Viewed Section */}
        {wishlistItems.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recently Viewed
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl p-3 shadow-sm border border-orange-100/50"
                >
                  <div className="h-32 bg-orange-100 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium text-gray-800 line-clamp-1">
                    Product Name {item}
                  </p>
                  <p className="text-xs text-gray-500">$49.99</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
