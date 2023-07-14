import React from "react";

const ButtonX: React.FC<{ variant: number; title: string }> = (props) => {
  const style0 = `flex justify-center text-ascentColor3 items-center px-10 py-6 rounded-3xl border-custom-orange border-[2px] h-[2rem] font-semibold hover:bg-custom-orange cursor-pointer hover:text-custom-white hover:transition-all transition-all`;
  const style1 = `flex justify-center text-custom-orange items-center px-10 py-6 rounded-3xl border-custom-orange border-[2px] h-[2rem] font-semibold hover:bg-custom-orange cursor-pointer hover:text-custom-white hover:transition-all transition-all`;
  const style2 = `bg-custom-lightDark h-[4rem] w-[15rem] rounded-[2rem] flex border-custom-lightDark border-[2px] justify-center items-center text-custom-white poppins font-semibold hover:bg-custom-white cursor-pointer hover:text-custom-dark hover:transition-all transition-all`;
  const style3 = `flex justify-center items-center px-10 py-6 rounded-3xl border-custom-lightDark border-[2px] h-[2rem] font-semibold hover:bg-custom-lightDark cursor-pointer hover:text-custom-white hover:transition-all transition-all`;
  return (
    <div
      className={`lg:flex hidden ${
        props.variant === 1
          ? style1
          : props.variant === 2
          ? style2
          : props.variant === 3
          ? style3
          : style0
      }`}
    >
      {props.title}
    </div>
  );
};

export default ButtonX;
