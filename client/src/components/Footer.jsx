// components/Footer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Crown,
  Sparkles,
  Heart,
  ArrowRight,
  Shield,
  Truck,
  RefreshCw,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Gradient Overlay */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    StyleShop
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your premium destination for curated fashion. We bring you the
                  finest collection of clothing and accessories designed for the
                  modern lifestyle.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Sparkles className="w-4 h-4 text-orange-500 mr-2" />
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Youtube, label: "YouTube" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-110 group"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <ArrowRight className="w-4 h-4 text-orange-500 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Our Story", href: "/story" },
                  { name: "Careers", href: "/careers" },
                  { name: "Press", href: "/press" },
                  { name: "Blog", href: "/blog" },
                  { name: "Size Guide", href: "/size-guide" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Heart className="w-4 h-4 text-orange-500 mr-2" />
                Customer Care
              </h4>
              <ul className="space-y-3 mb-6">
                {[
                  { name: "Contact Us", href: "/contact" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Shipping Info", href: "/shipping" },
                  { name: "Returns", href: "/returns" },
                  { name: "Track Order", href: "/track" },
                  { name: "Support", href: "/support" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">hello@styleshop.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">New York, NY</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Mail className="w-4 h-4 text-orange-500 mr-2" />
                Stay Updated
              </h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Subscribe to our newsletter and be the first to know about new
                arrivals, exclusive offers, and fashion tips.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  {isSubscribed ? (
                    <>
                      <Heart className="w-4 h-4 fill-current" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-6 space-y-3">
                <h5 className="text-sm font-semibold text-gray-400 mb-3">
                  Why Choose Us?
                </h5>
                <div className="space-y-2">
                  {[
                    { icon: Truck, text: "Free Shipping Over $50" },
                    { icon: RefreshCw, text: "30-Day Returns" },
                    { icon: Shield, text: "Secure Payments" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <Icon className="w-4 h-4 text-orange-500" />
                      <span className="text-xs">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Simplified */}
        <div className="border-t border-gray-700 mt-12 py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
              <p className="text-gray-400 text-base text-center">
                &copy; {new Date().getFullYear()} StyleShop. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
