import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-100 py-16 mt-10 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Updated!
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter and never miss out on our latest arrivals, 
          exclusive deals, and special offers.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;