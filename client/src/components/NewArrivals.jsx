import React from "react";
import { ArrowRight, Star, Zap, Eye, Heart, Clock } from "lucide-react";

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 4,
      name: "Modern Slim Fit Blazer",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
      rating: 4.9,
      isNew: true,
      addedDays: 2,
    },
    {
      id: 5,
      name: "Vintage Leather Boots",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
      rating: 4.8,
      isNew: true,
      addedDays: 1,
    },
    {
      id: 12,
      name: "Elegant Formal Dress",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
      rating: 4.9,
      isNew: true,
      addedDays: 3,
    },
    {
      id: 7,
      name: "Athletic Performance Joggers",
      price: 69.99,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
      rating: 4.6,
      isNew: true,
      addedDays: 1,
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative bg-white">
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

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
              Fresh & Trending
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            New{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Arrivals
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be the first to discover our latest fashion additions
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-orange-100/50"
            >
              <a href={`/product/${product.id}`} className="block">
                {/* Image Container */}
                <div className="relative h-44 lg:h-64 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-md flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>NEW</span>
                    </div>
                  )}

                  {/* Days Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium shadow-sm flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{product.addedDays}d ago</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-red-500 hover:text-white shadow-md transition-all duration-300">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-orange-500 hover:text-white shadow-md transition-all duration-300">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
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
                    <span className="text-xs text-gray-500 ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </a>

              {/* Add to Cart */}
              <div className="px-4 pb-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Added to cart:", product.name);
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-orange-500/30"
                >
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
