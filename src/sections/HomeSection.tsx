import React from "react";
import { HeroSection, ImageSlider01, NavBar } from "../components";

const HomeSection: React.FC = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex justify-between items-center h-[45rem]">
        <HeroSection />
        <ImageSlider01 />
      </div>
    </div>
  );
};

export default HomeSection;
