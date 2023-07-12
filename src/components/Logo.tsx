import React from "react";

const Logo: React.FC<{heading:string;subHeading:string}> = (props = {heading:"WEC",subHeading:"2023"}) => {
  return (
    <div className="">
      <div className="custom-font1 text-ascentColor4 text-3xl">{props.heading}</div>
      <div className="custom-font1 text-ascentColor4 text-sm tracking-[8px]">{props.subHeading}</div>
    </div>
  );
};

export default Logo;
