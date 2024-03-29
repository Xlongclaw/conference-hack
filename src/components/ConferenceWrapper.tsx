import React, { useState } from "react";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const ConferenceWrapper: React.FC<{
  heading: string;
  year: string;
  imglink: string;
  color: string;
  description: string;
  confStartDate: Date;
  confEndDate: Date;
  instaLink: string;
  facebookLink: string;
  twitterLink: string;
  youtubeLink: string;
  confName:string;
}> = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      layout
      animate={showMore ? { width: "52rem" } : { width: "30rem" }}
      className="flex shadow2 justify-center relative items-center h-[30rem] sm:h-[38rem] overflow-hidden rounded-3xl"
    >
      <img className="object-cover w-full sm:w-auto sm:h-auto" src={props.imglink} alt="" />
      <motion.div
        className={`absolute w-full h-full ${
          showMore ? "bg-black/50" : "bg-black/30 transition-all duration-1000"
        }`}
      ></motion.div>
      <div
        className={`absolute text-7xl md:text-9xl bottom-8 left-8 ${props.color} font-semibold`}
      >
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}
          className="border-[2px] mb-6 top-[-5rem] md:top-[-3rem] absolute border-ascentColor3 hover:transition-all hover:duration-300 transition-all 
          duration-300 hover:bg-ascentColor3 hover:text-ascentColor4 cursor-pointer font-normal custom-font1 px-4 md:px-8 py-2 rounded-2xl
           text-ascentColor3 md:mx-4 text-xl"
        >
          {showMore ? "Show Less" : "Discover more"}
        </button>
        <h1>{props.heading}</h1>
        <h3 className=" text-3xl md:text-6xl font font-medium ml-4 leading-6 tracking-[10px] md:tracking-[1.4rem]">
          {props.year}
        </h3>
      </div>
      {showMore ? (
        <div className="w-[30rem] h-[20rem] absolute top-10 right-10">
          <h1 className={`text-custom-orange text-3xl font-medium mb-4`}>{props.confName}</h1>
          <h4>
            {props.description}
          </h4>
          <div className="flex gap-8 mt-16 text-white ">
            <motion.a
              href={props.facebookLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <FacebookIcon className="scale-150 cursor-pointer" />
            </motion.a>
            <motion.a
              href={props.instaLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <InstagramIcon className="scale-150 cursor-pointer" />
            </motion.a>
            <motion.a
              href={props.facebookLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <LinkedInIcon className="scale-150 cursor-pointer" />
            </motion.a>
            <motion.a
              href={props.twitterLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <TwitterIcon className="scale-150 cursor-pointer" />
            </motion.a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default ConferenceWrapper;
