import React, { useState } from "react";
import { HeroDotsAnimation, HeroSection, NavBar } from "../components";
import { motion } from "framer-motion";

const HomeSection: React.FC<{confId:string;nextConf:any}> = (props) => {
  const [slide,setSlide] = useState(false)
  const [image, setImage] = useState(9);
  const changeImage = (num: number) => {
    setImage(num);
    setSlide(!slide)
    props.nextConf()
  };
  return (
    <div className="relative bg-black z-10 overflow-x-hidden rounded-b-[5rem] shadow2">
      <div className="bg-black bg-opacity-50 h-[63rem]">
        <NavBar />
        <div className="w-full flex justify-start items-center shadow2 sm:items-end h-[63rem] absolute top-0 overflow-hidden -z-10 ">
          <img
            className="mb-[10rem] sm:mb-0"
            src={`images/hero${image}.jpg`}
            alt=""
          />
        </div>
        <button
          onClick={() => {
            image === 12 ? changeImage(9) : changeImage(12);
          }}
          className="border-[3px]  text-white hover:text-black transition-all hover:transition-all w-[5rem] rounded-full absolute right-1/2 bottom-64"
        >
          <motion.div animate={slide?{x:40}:{x:0}} className="w-4 h-2 my-2 mx-2 rounded-full bg-white"></motion.div>
        </button>

        <div className="flex lg:flex-row flex-col justify-center sm:justify-start items-center h-[45rem]">
          <HeroSection confId={props.confId} />
        </div>
      </div>
      <HeroDotsAnimation />
    </div>
  );
};

export default HomeSection;
