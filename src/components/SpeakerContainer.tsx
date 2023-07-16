import React from "react";
import { motion } from "framer-motion";

const SpeakerContainer:React.FC<{ImgLink:string;Designation:string;Name:string}> = (props) => {
  const animVariant = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: "30",
      },
    },
  };
  return (
    <motion.div
      variants={animVariant}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      className=" w-[24rem] relative overflow-hidden cursor-pointer"
    >
      <motion.img
        whileHover={{
          scale: 1.1,
          filter: "grayscale(1)",
          transition: {
            type: "spring",
            stiffness: "50",
          },
        }}
        initial={{scale:1}}
        className="w-[120%] "
        src={props.ImgLink}
        alt=""
      />
      <div className="absolute text-3xl bottom-[4rem] pl-[2rem] left-[0rem] py-[10px]  text-customblue font-medium px-[8px] gilroy bg-black/60">
        {props.Name}
      </div>
      <div className=" bottom-[2.5rem] left-[2rem] heebo absolute text-sm text-white px-[8px] bg-black/60">
        {props.Designation}
      </div>
    </motion.div>
  );
};

export default SpeakerContainer;
