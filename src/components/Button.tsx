import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Button:React.FC<{link?:string;styles?:string;title:string}> = (props) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  return (
    <motion.div
    onClick={()=>{props.link && navigate(`${props.link}`)
    }}
      animate={hover ? { color: "#000", scale: 1.1 } : ""}
      transition={{ type: "spring", stiffness: 70 }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      className={`${props.styles} relative border-custom-orange cursor-pointer border-[2px] inter font-medium text-custom-orange w-[11rem] h-[3.5rem] flex justify-center items-center overflow-hidden`}
    >
      <motion.div
        animate={hover ? { width: "100%" } : ""}
        transition={{ type: "spring", stiffness: 40 }}
        className="h-full w-[0rem] bg-custom-orange absolute left-0"
      ></motion.div>
      <div className="z-10">{props.title}</div>
    </motion.div>
  );
};

export default Button;
