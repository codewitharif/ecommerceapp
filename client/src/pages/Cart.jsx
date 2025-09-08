// pages/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  Sparkles, 
  Crown,
  Heart,
  Tag,
  CreditCard
} from 'lucide-react';
import useCartStore from '../store/useCartStore';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white relative mx-auto">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-2xl mx-auto text-center">
            {/* Empty Cart Icon */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-16 h-16 text-orange-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">0</span>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
                Shopping Cart
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Your Cart is <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Empty</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Discover our amazing collection of premium fashion items and start building your perfect wardrobe
            </p>
            
            {/* CTA Button */}
            <div className="inline-flex items-center justify-center p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
              <Link 
                to="/products" 
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 group"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Start Shopping</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium">Continue Shopping</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBag className="w-6 h-6 text-orange-500 mr-2" />
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
              Shopping Cart
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Your <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Cart</span>
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-lg text-gray-600">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
            <button 
              onClick={clearCart} 
              className="text-red-500 hover:text-red-700 transition-colors duration-300 flex items-center space-x-1 group"
            >
              <Trash2 className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm">Clear All</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-orange-100/50 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img 
                        src={item.images?.[0] || `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop&crop=center&auto=format&q=80`}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-grow space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-3 text-sm text-gray-600">
                            {item.selectedSize && (
                              <span className="bg-gray-100 px-2 py-1 rounded-md">Size: {item.selectedSize}</span>
                            )}
                            {item.selectedColor && (
                              <span className="bg-gray-100 px-2 py-1 rounded-md">Color: {item.selectedColor}</span>
                            )}
                          </div>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)} 
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {/* Price */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-2 rounded-xl border-2 border-gray-300 hover:border-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-white"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 font-semibold min-w-[60px] text-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 rounded-xl border-2 border-gray-300 hover:border-orange-300 transition-all duration-300 bg-white"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-800">
                          Subtotal: ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100/50 overflow-hidden sticky top-8">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="w-5 h-5" />
                  <span className="font-semibold">Order Summary</span>
                </div>
                <p className="text-orange-100 text-sm">Review your items before checkout</p>
              </div>
              
              {/* Summary Content */}
              <div className="p-6 space-y-4">
                {/* Items Count */}
                <div className="flex items-center justify-between text-gray-600">
                  <span>Items ({items.length})</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                
                {/* Shipping */}
                <div className="flex items-center justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                
                {/* Discount */}
                <div className="flex items-center justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-green-600">-$0.00</span>
                </div>
                
                <hr className="border-gray-200" />
                
                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    ${getTotal().toFixed(2)}
                  </span>
                </div>
                
                {/* Savings Badge */}
                {items.some(item => item.originalPrice) && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Tag className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-800">You're Saving!</span>
                    </div>
                    <span className="text-green-600 font-bold">
                      ${items.reduce((acc, item) => {
                        return acc + (item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0);
                      }, 0).toFixed(2)} off your order
                    </span>
                  </div>
                )}
                
                {/* Checkout Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>
                
                {/* Security Badge */}
                <div className="text-center text-xs text-gray-500 flex items-center justify-center space-x-1">
                  <Crown className="w-3 h-3" />
                  <span>Secure Checkout Guaranteed</span>
                </div>
              </div>
            </div>
            
            {/* Promo Code Section */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg border border-orange-100/50 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Tag className="w-4 h-4 text-orange-600 mr-2" />
                Promo Code
              </h3>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Enter code"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
                  Apply
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Save for Later</span>
              </button>
              <Link 
                to="/products"
                className="bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;