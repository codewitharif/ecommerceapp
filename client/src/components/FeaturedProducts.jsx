import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Eye, Heart } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Blend T-Shirt",
      price: 49.99,
      originalPrice: 69.99,
      image:
        "https://imgs.search.brave.com/NubXlmZ2nTHBea6Nyy0yjBmNSOCpab_gwaSko6u0FBY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/LmxsYmVhbi5uZXQv/aXMvaW1hZ2Uvd2lt/LzUyMjIzM181NjQ5/M180ND93aWQ9MzAy/JmhlaT0zNTImZGVm/YXVsdEltYWdlPWxs/YnByb2QvNTIyMjMz/XzU2NDkzXzQx",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Designer Casual Hoodie",
      price: 89.99,
      originalPrice: 119.99,
      image:
        "https://imgs.search.brave.com/Vl_5uOMEYnixq06mx_poG9ufWmucMnRY1YD7VmCR4Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGVlLmNvbS9p/cy9pbWFnZS9MZWUv/MTEyMzU3OTM4LUhF/Uk8_JEtEUC1MQVJH/RTIk",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Luxury Denim Jacket",
      price: 129.99,
      image:
        "https://imgs.search.brave.com/YBzZ8jw5WTCu0R3LX2I83bBFzB_qElvhtU2cumqlbjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFQSEFCRVpSNkwu/anBn",
      rating: 4.7,
    },
    {
      id: 39,
      name: "Luxury Denim Jacket",
      price: 129.99,
      image:
        "https://imgs.search.brave.com/rgGeXcOB7AtjtLwFrgrs2EihIHiKWLST2_sLbA79fQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/OTY4MDM4NS8yMDE5/LzgvMTkvOWE3MWVm/ZmMtNWNhOC00ZjU2/LTk0YzAtMmM3MTA1/NDEwMjEwMTU2NjIx/ODM3Nzc4OS1Sb2Fk/c3Rlci1NZW4tU2hp/cnRzLTgwMjE1NjYy/MTgzNzYzMzMtMS5q/cGc",
      rating: 4.7,
    },
  ];
  return (
    <section className="py-10 lg:py-10 relative">
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
            <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
              Curated Collection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium fashion pieces that
            define modern style
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-orange-100/50"
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image Container */}
                <div className="relative h-44 lg:h-64 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
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
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

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

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 space-x-2 text-sm"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
