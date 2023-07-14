import React from "react";
import { HeroSection, ImageSlider01, NavBar } from "../components";
import Lottie from "lottie-react";
import "@dotlottie/player-component";

const HomeSection: React.FC = () => {
  return (
    <div className="relative bg-black z-10 overflow-x-hidden">
      <div className="bg-black bg-opacity-60 h-[63rem]">
        <div className="w-full flex justify-start items-center shadow2 sm:items-end h-[63rem] absolute top-0 overflow-hidden -z-10 ">
          <img className="mb-[10rem] sm:mb-0" src="images/hero9.jpg" alt="" />
          {/* 8 start 9 end,center 13 center,end 16 end 24  26 center */}
        </div>
        <NavBar />
        <div className="flex lg:flex-row flex-col justify-center sm:justify-start items-center h-[45rem]">
          <HeroSection />
          {/* <ImageSlider01 /> */}
        </div>
      </div>
      <Lottie
      
        className=" absolute w-1/2 bottom-0 -z-10"
        animationData={require("../animations/Comp 1(2).json")}
      />
      <Lottie
        className=" absolute w-1/2 bottom-0 left-1/3 -z-10"
        animationData={require("../animations/Comp 1(2).json")}
      />
      <Lottie
        className=" absolute w-1/2 bottom-0 left-2/3 -z-10"
        animationData={require("../animations/Comp 1(2).json")}
      />
      {/* <dotlottie-player
        src="https://assets2.lottiefiles.com/dotlotties/dlf10_l12sw9oo.lottie"
        autoplay
        loop
        style={{ height: '100%', width: '100%' }}
      /> */}
      <div className="w-full absolute bottom-0 h-[5rem] bg-custom-dark shadow2"></div>
    </div>
  );
};

export default HomeSection;
