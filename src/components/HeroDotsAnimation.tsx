import React from 'react'
import Lottie from "lottie-react";


const HeroDotsAnimation:React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default HeroDotsAnimation
