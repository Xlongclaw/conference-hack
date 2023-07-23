import React from "react";

const Logo: React.FC<{heading:string;subHeading:string}> = (props = {heading:"WEC",subHeading:"2023"}) => {
  return (
    <div className="hover:cursor-pointer">
      <div className="custom-font1 text-ascentColor3 text-3xl">{props.heading}</div>
      <div className="custom-font1 text-ascentColor3 text-sm tracking-[8px]">{props.subHeading}</div>
    </div>
  );
};

export default Logo;
