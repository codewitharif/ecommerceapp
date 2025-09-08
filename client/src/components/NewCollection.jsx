import React from "react";

const CategoryBanners = () => {
  const categories = [
    {
      id: 1,
      title: "2024 Fashion",
      subtitle: "Locomotive Men Blue T-shirt",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      link: "/products/men-tshirt",
    },
    {
      id: 2,
      title: "Stylish Shoes",
      subtitle: "Solethreads Women Sneakers Shoes",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
      link: "/products/women-sneakers",
    },
    {
      id: 3,
      title: "Lookout Fashion",
      subtitle: "Sisterhood Beige Small Bag",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      link: "/products/small-bag",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.subtitle}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex flex-col justify-center items-start p-6">
                <span className="text-sm tracking-wide font-medium text-gray-100">
                  {item.title}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4 leading-snug">
                  {item.subtitle}
                </h3>
                <a
                  href={item.link}
                  className="text-sm font-semibold text-white underline hover:text-orange-300 transition"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanners;
