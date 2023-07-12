import React from "react";

const Button:React.FC<{title:string}> = (props) => {
  const style1 = `flex justify-center text-sm items-center poppins px-10 py-6 rounded-3xl border-custom-lightDark border-[2px] h-[2rem] font-medium hover:bg-custom-lightDark cursor-pointer hover:text-custom-white hover:transition-all transition-all`;
  return <div className={style1}>{props.title}</div>;
};

export default Button;
