// components/HeroSection.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Crown } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Limited Edition For Queen Styles Fashion",
      subtitle: "THIS WEEK'S HIGHLIGHTS",
      description: "Awesome products for the dynamic urban lifestyle",
      buttonText: "SHOP NOW",
      buttonLink: "/products/queen-collection",
      image:
        "https://imgs.search.brave.com/irBcbTpnE2BP6DC8_Jg19YEn8kEdfa2STmcM5qwMW1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODIy/NTcyOTQ4L3Bob3Rv/L3dvbWFuLWluLW9y/YW5nZS1kcmVzcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/N0hmbWNHa3FGNk5C/SWRyQUpYNl9KaDNO/RHVTUlE3Vi1tV2tK/YWZHbEpaST0",
      bgColor: "from-amber-50 to-orange-100",
    },

    {
      id: 3,
      title: "Premium Business Attire",
      subtitle: "EXECUTIVE SERIES",
      description: "Sophisticated elegance for the modern professional",
      buttonText: "DISCOVER",
      buttonLink: "/products/business",
      image:
        "https://imgs.search.brave.com/WL1ob0K7psNYivPEqYLI_fHHXMHYjzJDvyXPw-5uJuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdWl0/c2hvcC5jb20vX25l/eHQvaW1hZ2UvP3Vy/bD1odHRwczovL3Jl/cy5jbG91ZGluYXJ5/LmNvbS90aGUtZ3Jv/b21zbWFuLXN1aXQv/aW1hZ2UvdXBsb2Fk/L3FfYXV0bzplY28s/d183NTAsaF8xMTcz/LGZfYXV0by92MTcy/MTQ5OTQ4Ny9nYXRz/YnktY2xvdWRpbmFy/eS9wYWdlcy9pbmRl/eC9mZWF0dXJlZC1i/cm93bi5qcGcmdz0x/NjIwJnE9OTA",
      bgColor: "from-amber-50 to-orange-100",
    },
    {
      id: 4,
      title: "Casual Weekend Vibes",
      subtitle: "COMFORT COLLECTION",
      description: "Relaxed fits and premium comfort for your downtime",
      buttonText: "SHOP CASUAL",
      buttonLink: "/products/casual",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=faces",
      bgColor: "from-amber-50 to-orange-100",
    },
        {
      id: 2,
      title: "Urban Streetwear Collection",
      subtitle: "NEW ARRIVALS",
      description: "Bold designs that define your unique street style",
      buttonText: "EXPLORE",
      buttonLink: "/products/streetwear",
      image:
        "https://imgs.search.brave.com/ijGgp-qKfqsZKe9H_OAINJc6Q9tcbZVgb0JDzT11w14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZkLzMx/L2NkLzZkMzFjZGVm/NGVhZWIyMDM2NTRj/YThmNTk3YWQwZTdm/LmpwZw",
      bgColor: "from-amber-50 to-orange-100",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  // Using orange color scheme consistently
  const colors = {
    bg: "bg-orange-600",
    hover: "hover:bg-orange-700",
    shadow: "hover:shadow-orange-500/30",
    text: "text-orange-600",
    gradient: "from-orange-600 to-red-600",
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${currentSlideData.bgColor} transition-all duration-1000 ease-in-out`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <section className="relative min-h-[500px] max-h-[90vh] flex items-center">
        <div className="w-full h-full">
          <div className="grid lg:grid-cols-2 h-full min-h-[500px]">
            {/* Left Content - Full Height */}
            <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12 order-2 lg:order-1">
              <div className="w-full max-w-lg text-center lg:text-left">
                {/* Subtitle with icon */}
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <Crown className={`w-4 h-4 ${colors.text} mr-2`} />
                  <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
                    {currentSlideData.subtitle}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {currentSlideData.title.split(" ").map((word, index) => {
                    if (
                      word === "Queen" ||
                      word === "Urban" ||
                      word === "Premium" ||
                      word === "Weekend"
                    ) {
                      return (
                        <span
                          key={index}
                          className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
                        >
                          {word}{" "}
                        </span>
                      );
                    }
                    return word + " ";
                  })}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  {currentSlideData.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                  <Link
                    to={currentSlideData.buttonLink}
                    className={`group inline-flex items-center justify-center rounded-xl ${colors.bg} ${colors.hover} px-8 py-4 font-semibold text-white transition-all duration-300 ${colors.shadow} shadow-lg transform hover:scale-105`}
                  >
                    <span>{currentSlideData.buttonText}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/collections"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:shadow-lg hover:bg-white"
                  >
                    View All
                  </Link>
                </div>

                {/* Social Proof */}
                {/* <div className="flex items-center justify-center lg:justify-start">
                  <div className="flex -space-x-3 mr-4">
                    <img className="w-10 h-10 rounded-full border-3 border-white shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Customer" />
                    <img className="w-10 h-10 rounded-full border-3 border-white shadow-md" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face" alt="Customer" />
                    <div className={`w-10 h-10 ${colors.bg} rounded-full border-3 border-white shadow-md flex items-center justify-center text-white font-bold text-sm`}>
                      +5K
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold text-gray-900">4.9/5</span>
                    </div>
                    <div className="text-sm text-gray-600">From 5,000+ customers</div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right Image - Full Height on Desktop, Small Centered on Mobile */}
            <div className="relative order-1 lg:order-2 h-[280px] lg:h-full min-h-[280px] lg:min-h-[300px] flex lg:block items-center justify-center lg:justify-start pt-10 lg:pt-0">
              <div className="relative w-48 h-72 lg:w-full lg:h-full group lg:rounded-none rounded-2xl overflow-hidden">
                {/* Main Image - Centered Small on Mobile, Full on Desktop */}
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 lg:rounded-none rounded-2xl shadow-lg lg:shadow-none"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:rounded-none rounded-2xl"></div>

                {/* Floating Badge */}
                <div
                  className={`absolute top-3 right-3 lg:top-6 lg:right-6 ${colors.bg} text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full shadow-lg backdrop-blur-sm`}
                >
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span className="font-semibold text-xs lg:text-sm">
                      Premium
                    </span>
                  </div>
                </div>

                {/* Decorative Elements - Only on Desktop */}
                <div
                  className={`hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${colors.gradient} rounded-full opacity-20 blur-xl`}
                ></div>
                <div
                  className={`hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr ${colors.gradient} rounded-full opacity-10 blur-2xl`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
