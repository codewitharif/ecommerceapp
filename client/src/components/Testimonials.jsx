import React from "react";
import { Star, Quote, Heart, Sparkles } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Fashion Blogger",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "Amazing quality and style! I've ordered multiple times and each piece exceeds my expectations. The delivery is always on time.",
    },
    {
      id: 2,
      name: "Rahul Gupta",
      role: "Business Professional",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "Best collection for office wear! The blazers and shirts are perfectly tailored and the material quality is outstanding.",
    },
    {
      id: 3,
      name: "Ananya Singh",
      role: "College Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "Love the trendy designs and affordable prices! Perfect for students like me who want to look stylish without breaking the bank.",
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "The sportswear collection is fantastic! Comfortable, durable, and perfect for my workout sessions. Highly recommended!",
    }
  ];

  return (
    <section className="py-16 lg:py-10 relative max-w-6xl mx-auto">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who love our fashion collections
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-orange-100/50 p-6"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2 shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-4 mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 text-center">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="text-center">
                <div className="relative mx-auto mb-3 w-16 h-16">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border-2 border-orange-200 group-hover:border-orange-400 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300"></div>
                </div>
                <h4 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">
              Join 10,000+ happy customers who trust our quality
            </span>
            <Sparkles className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;