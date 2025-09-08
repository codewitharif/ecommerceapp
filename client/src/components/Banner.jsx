import React from "react";
import { Truck, Shield, RefreshCw } from "lucide-react";

const Banner = () => {
  const features = [
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
  ];
  const colors = {
    bg: "bg-orange-600",
    hover: "hover:bg-orange-700",
    shadow: "hover:shadow-orange-500/30",
    text: "text-orange-600",
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-amber-50/30 to-white",
  };
  return (
    <div className=" py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-lg border border-orange-100/50 hover:shadow-xl transition-all duration-300"
            >
              <feature.icon className={`w-6 h-6 ${colors.text} mx-auto mb-2`} />
              <h4 className="font-semibold text-gray-800 text-sm">
                {feature.title}
              </h4>
              <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
