import React from "react";

const ImageSlider01: React.FC = () => {
  return (
    <div>
      <div className="overflow-hidden  w-[25rem] mr-10 flex items-center justify-center relative rounded-3xl">
        <img className="" src="images/hero8.jpg" alt="" />
        <h3 className="absolute text-ascentColor6 bottom-0 py-[3rem] shadow4 flex items-center justify-center text-lg bg-gradient-to-t from-ascentColor4 to-transparent w-full">
        </h3>
      </div>
    </div>
  );
};

export default ImageSlider01;
