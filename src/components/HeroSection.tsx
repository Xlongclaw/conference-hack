import React from "react";
import { Button, DateLocationContainer } from "../components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import useSWR from "swr";

// type homeModel = {
//   id: string;
//   confId: string;
//   confName: string;
//   confStartDate: string;
//   confEndDate: string;
//   logo: string;
//   shortName: string;
//   aboutConf: string;
//   aboutIns: string;
//   youtubeLink: string;
//   instaLink: string;
//   facebookLink: string;
//   twitterLink: string;
//   createdAt: string;
//   updatedAt: string;
// };

const HeroSection: React.FC<{confId:string}> = (props) => {
  const CONF_ID1 = "647f315f62cdb3a26174fc38"
  const CONF_ID2 = "6492f77d1cc9629afd1c7008"
  const {data,isLoading,error} = useSWR(`https://conference.cyclic.app/home/conf/${props.confId}`)
  console.log(data);
  
  if (error) return <div>ERROR</div>;
  if (isLoading) return <>.....Loading !</>;
  
  const homeData = data;

  return (
    <div className="flex justify-between mt-[-2rem] sm:mt-[5rem]">
      <div className="flex flex-col sm:items-start items-center gap-4 justify-center px-10 sm:px-16 md:px-32">
        <h5 className="text-custom-orange text-base md:text-lg font-medium">
          {homeData.shortName}
        </h5>
        <h1 className="text-ascentColor3 text-center sm:text-start zona text-[2.6rem] leading-[3rem] sm:text-6xl max-w-[50rem] font-semibold">
          {homeData.confName}
        </h1>
        <DateLocationContainer />
        <div className=" flex gap-4">
          <Button title="Register" />

        </div>

        <div className="flex gap-8 mt-16 text-white ">
          <motion.a href={homeData.facebookLink} target="_blank" whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <FacebookIcon className="scale-150 cursor-pointer" />
          </motion.a>
          <motion.a href={homeData.instaLink} target="_blank"  whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <InstagramIcon className="scale-150 cursor-pointer" />
          </motion.a>
          <motion.a href={homeData.facebookLink} target="_blank"  whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <LinkedInIcon className="scale-150 cursor-pointer" />
          </motion.a>
          <motion.a href={homeData.twitterLink} target="_blank"  whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <TwitterIcon className="scale-150 cursor-pointer" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
