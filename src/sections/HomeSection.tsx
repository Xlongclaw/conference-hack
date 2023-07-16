import React, { useState } from "react";
import { HeroDotsAnimation, HeroSection, NavBar } from "../components";
import {ChevronRight} from "@mui/icons-material"
import { motion } from "framer-motion";

const HomeSection: React.FC = () => {
  const [slide,setSlide] = useState(false)
  const [ascentColor,setAscentColor] = useState("")
  const [confNo, setConfNo] = useState(0);
  const confIds = ["647f315f62cdb3a26174fc38", "6492f77d1cc9629afd1c7008"];
  const [confId, setConfId] = useState(confIds[confNo]);
  const [image, setImage] = useState(9);
  const changeImage = (num: number) => {
    setImage(num);
    setSlide(!slide)
    if (confNo === 0) {
      setConfId(confIds[1]);
      setConfNo(1);
    }
    if (confNo === 1) {
      setConfId(confIds[0]);
      setConfNo(0);
    }
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
          {/* 8 start 9 end,center 13 center,end 16 end 24  26 center */}
        </div>
        <button
          onClick={() => {
            image === 12 ? changeImage(9) : changeImage(12);
          }}
          className="border-[3px]  text-white hover:text-black transition-all hover:transition-all w-[5rem] rounded-full absolute right-1/2 bottom-64"
        >
          <motion.div animate={slide?{x:40}:{x:0}} className="w-4 h-2 my-2 mx-2 rounded-full bg-white"></motion.div>
        </button>
        {/* <button
          onClick={() => {
            image === 12 ? changeImage(9) : changeImage(12);
          }}
          className="border-[3px] border-r-0 text-white hover:bg-white hover:text-black transition-all hover:transition-all p-4 sm:p-8 md:p-12 absolute right-0 bottom-64"
        >
          <ChevronRight className="scale-150 "/>
        </button> */}
        <div className="flex lg:flex-row flex-col justify-center sm:justify-start items-center h-[45rem]">
          <HeroSection confId={confId} />
        </div>
      </div>
      <HeroDotsAnimation />
      {/* <div className="w-full absolute bottom-0 h-[5rem] bg-custom-dark shadow2" /> */}
    </div>
  );
};

export default HomeSection;
