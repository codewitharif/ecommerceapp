// pages/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  Grid, 
  List, 
  Star, 
  Heart, 
  Eye, 
  ShoppingBag,
  Sparkles,
  ArrowLeft,
  SlidersHorizontal
} from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Enhanced mock data with better images and details
const products = [
  { 
    id: 1, 
    name: 'Premium Cotton Blend T-Shirt', 
    price: 49.99, 
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.8,
    category: 'clothing'
  },
  { 
    id: 2, 
    name: 'Designer Casual Hoodie', 
    price: 89.99, 
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.9,
    category: 'clothing'
  },
  { 
    id: 3, 
    name: 'Luxury Denim Jacket', 
    price: 129.99, 
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.7,
    category: 'clothing'
  },
  { 
    id: 4, 
    name: 'Premium Leather Sneakers', 
    price: 149.99, 
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.6,
    category: 'accessories'
  },
  { 
    id: 5, 
    name: 'Minimalist Watch', 
    price: 199.99, 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.8,
    category: 'accessories'
  },
  { 
    id: 6, 
    name: 'Designer Sunglasses', 
    price: 89.99, 
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.5,
    category: 'accessories'
  },
  { 
    id: 7, 
    name: 'Canvas Backpack', 
    price: 79.99, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.7,
    category: 'accessories'
  },
  { 
    id: 8, 
    name: 'Wool Winter Beanie', 
    price: 34.99, 
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    rating: 4.4,
    category: 'accessories'
  },
];

const ProductList = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white relative max-w-6xl mx-auto">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
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

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
              Premium Collection
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium fashion pieces designed for the modern lifestyle
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition-all duration-300"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-600 mr-2" />
              <button 
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filter === 'all' 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filter === 'clothing' 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
                onClick={() => setFilter('clothing')}
              >
                Clothing
              </button>
              <button 
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filter === 'accessories' 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
                onClick={() => setFilter('accessories')}
              >
                Accessories
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition-all duration-300 bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-white shadow-md text-orange-600' 
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-white shadow-md text-orange-600' 
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-orange-600">{sortedProducts.length}</span> of {products.length} products
          </p>
          {searchTerm && (
            <p className="text-sm text-gray-500">
              Search results for: <span className="font-semibold">"{searchTerm}"</span>
            </p>
          )}
        </div>

        {/* Product Grid - Updated with smaller cards */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4" 
          : "space-y-4"
        }>
          {sortedProducts.map(product => (
            viewMode === 'grid' ? (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-orange-100/50"
              >
                <Link to={`/product/${product.id}`} className="block">
                  {/* Image Container - Smaller */}
                  <div className="relative h-44 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Discount Badge - Smaller */}
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}

                    {/* Action Buttons - Smaller */}
                    <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                      <button className="p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-red-500 hover:text-white shadow-md transition-all duration-300">
                        <Heart className="w-3 h-3" />
                      </button>
                      
                      <button className="p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-orange-500 hover:text-white shadow-md transition-all duration-300">
                        <Eye className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Content - Compact */}
                  <div className="p-3">
                    {/* Product Name - Smaller text */}
                    <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Rating - Smaller */}
                    <div className="flex items-center mb-2">
                      <div className="flex items-center space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                    </div>

                    {/* Price - Compact */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
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
                  </div>
                </Link>

                {/* Add to Cart Button - Compact */}
                <div className="px-3 pb-3">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Added to cart:', product.name);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-1 shadow-md hover:shadow-orange-500/30 transform hover:scale-[1.02]"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ) : (
              // List View - Compact
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md border border-orange-100/50 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <Link to={`/product/${product.id}`} className="flex-shrink-0">
                    <div className="relative w-full sm:w-32 h-32 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="flex-grow p-4 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-orange-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex items-center space-x-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mt-3">
                      <button 
                        onClick={() => console.log('Added to cart:', product.name)}
                        className="flex-grow bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-1 shadow-md hover:shadow-orange-500/30"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add to Cart</span>
                      </button>
                      
                      <button className="p-2 border border-gray-300 rounded-lg hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                        <Heart className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No Products Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button (if needed) */}
        {sortedProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-orange-300 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto">
              <Sparkles className="w-5 h-5" />
              <span>Load More Products</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;