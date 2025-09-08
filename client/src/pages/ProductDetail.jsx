// pages/ProductDetail.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RefreshCw,
  Crown,
  Sparkles,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("White");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Enhanced product data with multiple images and variants
  const product = {
    id: parseInt(id) || 1,
    name: "Premium Cotton Blend T-Shirt",
    price: 49.99,
    originalPrice: 69.99,
    description:
      "Experience ultimate comfort with our premium cotton blend t-shirt. Crafted from 100% organic cotton with a perfect fit that moves with you. Designed for the modern lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=700&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=center&auto=format&q=80",
    ],
    rating: 4.8,
    reviewCount: 324,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray", "Navy"],
    features: [
      {
        icon: Truck,
        title: "Free Shipping",
        desc: "Free delivery on orders over $50",
      },
      {
        icon: RefreshCw,
        title: "Easy Returns",
        desc: "30-day hassle-free returns",
      },
      {
        icon: Shield,
        title: "Quality Guarantee",
        desc: "Premium materials guaranteed",
      },
    ],
    details: [
      "100% organic cotton blend",
      "Pre-shrunk for perfect fit",
      "Machine washable",
      "Reinforced seams for durability",
      "Sustainable and eco-friendly",
      "Designed for all-day comfort",
    ],
  };

  const colors = {
    bg: "bg-orange-600",
    hover: "hover:bg-orange-700",
    shadow: "hover:shadow-orange-500/30",
    text: "text-orange-600",
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-amber-50/30 to-white",
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    };
    addItem(cartItem);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.bgGradient}  max-w-6xl mx-auto`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative group bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100/50">
              <div className="h-[28rem] bg-gradient-to-br from-orange-50 to-amber-50">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Discount Badge */}
                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    -{discountPercentage}% OFF
                  </div>
                )}

                {/* Premium Badge */}
                <div
                  className={`absolute top-4 right-4 ${colors.bg} text-white px-3 py-1 rounded-full shadow-lg backdrop-blur-sm`}
                >
                  <div className="flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span className="font-semibold text-sm">Premium</span>
                  </div>
                </div>

                {/* Action Buttons - Wishlist & Share */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 ${
                      isWishlisted
                        ? "bg-red-500 text-white"
                        : "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                  </button>
                  
                  <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-orange-500 hover:text-white shadow-lg transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-20 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    activeImage === index
                      ? "border-orange-500 shadow-lg"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center mb-3">
                <Sparkles className={`w-5 h-5 ${colors.text} mr-2`} />
                <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
                  Premium Collection
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                    Save {discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              {/* Size Selection */}
              {/* <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Size
                </h3>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 rounded-xl border-2 font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? "border-orange-500 bg-orange-500 text-white shadow-lg"
                          : "border-gray-300 text-gray-700 hover:border-orange-300 hover:bg-orange-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Color Selection */}
              {/* <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Color: <span className="text-orange-600">{selectedColor}</span>
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-xl border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? "border-orange-500 shadow-lg scale-110"
                          : "border-gray-300 hover:border-orange-300"
                      }`}
                      style={{
                        backgroundColor:
                          color === "White"
                            ? "#ffffff"
                            : color === "Black"
                            ? "#000000"
                            : color === "Gray"
                            ? "#6b7280"
                            : "#1e3a8a",
                      }}
                    >
                      {selectedColor === color && (
                        <div className="w-full h-full rounded-lg border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 rounded-xl border-2 border-gray-300 hover:border-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-white"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2 bg-white rounded-xl border-2 border-gray-200 font-semibold text-lg min-w-[80px] text-center shadow-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 rounded-xl border-2 border-gray-300 hover:border-orange-300 transition-all duration-300 bg-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className={`w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:scale-[1.02] flex items-center justify-center space-x-2`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex items-center justify-center space-x-2 py-3 rounded-xl border-2 font-semibold transition-all duration-300 ${
                    isWishlisted
                      ? "border-red-500 bg-red-500 text-white shadow-lg"
                      : "border-gray-300 text-gray-700 hover:border-red-300 hover:bg-red-50 bg-white"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
                  />
                  <span>{isWishlisted ? "Wishlisted" : "Wishlist"}</span>
                </button>

                <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 bg-white">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Crown className={`w-5 h-5 ${colors.text} mr-2`} />
                Product Details
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${colors.bg}`}
                      ></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
                You Might Also Like
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Related{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-orange-100/50"
              >
                <div className="relative h-48 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      151757 + item * 100000
                    }?w=300&h=400&fit=crop&crop=center&auto=format&q=80`}
                    alt="Related Product"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    Premium Style #{item}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      $39.99
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;