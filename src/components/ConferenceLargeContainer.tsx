import React from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const ConferenceLargeContainer: React.FC = () => {
  const { data, isLoading, error } = useSWR(
    "https://conference.cyclic.app/home"
  );
  if (error) return <></>;
  if (isLoading) return <></>;

  return (
    <>
      <div className="flex justify-center h-[40rem]">
        <div className="relative w-[40rem]">
          <div className=" absolute left-[0rem] top-[7rem] w-[30rem] h-[25rem] overflow-hidden  flex justify-center items-center bg-black/90">
            <img src="images/hero13.jpg" alt="" />
          </div>
          <div className=" absolute left-[2rem] top-[3rem] w-[30rem] h-[30rem] overflow-hidden  flex justify-center items-center">
            <img src="images/hero14.jpg" alt="" />
          </div>
          <div className=" absolute left-[4rem] top-[0rem] w-[30rem] h-[35rem] overflow-hidden  flex justify-center items-center">
            <img src="images/hero7.jpg" alt="" />
          </div>
        </div>
        <div className="max-w-[40rem]">
          <h6 className="">{data[0].confStartDate}</h6>
          <h1 className="text-5xl my-4 font-semibold text-custom-orange">
            {data[0].confName}
          </h1>
          <h3>{data[0].aboutConf}</h3>
          <div className="flex gap-8 mt-16 text-white ">
            <motion.a
              href={data[0].facebookLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <FacebookIcon className="scale-150 cursor-pointer" />
            </motion.a>
            <motion.a
              href={data[0].instaLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <InstagramIcon className="scale-150 cursor-pointer" />
            </motion.a>
            <motion.a
              href={data[0].facebookLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <LinkedInIcon className="scale-150 cursor-pointer" />
            </motion.a>
            <motion.a
              href={data[0].twitterLink}
              target="_blank"
              whileHover={{ scale: 1.4, translateY: -10, color: "#5db7de" }}
            >
              <TwitterIcon className="scale-150 cursor-pointer" />
            </motion.a>
          </div>
        </div>
      </div>
      {/* <AboutInstituteContainer data={data[0].aboutIns}/> */}
    </>
  );
};

export default ConferenceLargeContainer;
