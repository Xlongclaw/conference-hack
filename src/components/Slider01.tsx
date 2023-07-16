import React, { useRef } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const Slider01:React.FC = () => {
  const previousArrow = useRef();
  const nextArrow = useRef();
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 2.6 }}
      className="relative transition-all"
    >
      <div className="flex gap-0 absolute top-[22rem] justify-center items-center left-[10rem] ">
        {/* <Lottie
          className="w-[4rem] bg-custom-orange hover:scale-125 hover:transition-all transition-all"
          animationData={require("../assets/animations/left-arrow.json")}
          loop={false}
          lottieRef={previousArrow}
          onClick={() => {
            previousArrow.current.playSegments([0, 50]);
          }}
        />
        <Lottie
          className="w-[4rem] hover:scale-125 hover:transition-all transition-all"
          animationData={require("../assets/animations/right-arrow.json")}
          loop={false}
          lottieRef={nextArrow}
          onClick={() => {
            nextArrow.current.playSegments([0, 50]);
          }}
        /> */}
      </div>
      <div className=" absolute right-[21rem] bottom-[-34rem] w-[60rem] h-[18rem] overflow-hidden  flex justify-center items-center">
        <img src={require("../assets/images/sliderimg1.jpg")} alt="" />
      </div>
      <div className=" absolute right-[17rem] bottom-[-37rem] w-[60rem] h-[24rem] overflow-hidden  flex justify-center items-center">
        <img src={require("../assets/images/sliderimg4.jpg")} alt="" />
      </div>
      <div className=" absolute right-[12rem] bottom-[-41rem] w-[60rem] h-[30rem] overflow-hidden  flex justify-center items-center">
        <img src={require("../assets/images/sliderimg3.jpg")} alt="" />
      </div>
    </motion.div>
  );
};

export default Slider01;
