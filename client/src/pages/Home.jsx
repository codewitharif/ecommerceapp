// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Eye, Heart } from "lucide-react";
import HeroSection from "../components/HeroSection";
import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import NewCollection from "../components/NewCollection";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50/30 to-white">
      <HeroSection />
      <Categories />
      {/* <NewCollection /> */}

      {/* <Banner /> */}
      <FeaturedProducts />
      <NewArrivals />

      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
