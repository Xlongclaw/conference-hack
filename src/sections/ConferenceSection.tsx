import React from "react";
import {ConferenceWrapper } from "../components";
import { motion } from "framer-motion";
import useSWR from "swr";

const ConferenceSection: React.FC = () => {
  const { data, isLoading, error } = useSWR(
    "https://conference.cyclic.app/home"
  );
  if (error) return <></>;
  if (isLoading) return <></>;

  return (
    <div className=" text-ascentColor3 py-32 parallax2  rounded-[3rem]">
      <div className="zona text-3xl md:text-5xl md:pl-32 mb-16 flex justify-center md:justify-start">
        <div className="bg-white  text-black py-2 px-4 shadow2 rounded-2xl">

        Conferences
        </div>
        </div>
      <div className=" mx-8 md:mx-32">
        <motion.div layout className="flex gap-24 flex-wrap justify-center xl:justify-start">
          <ConferenceWrapper
            instaLink={data[0].instaLink}
            facebookLink={data[0].facebookLink}
            twitterLink={data[0].twitterLink}
            youtubeLink={data[0].youtubeLink}
            confStartDate={new Date(data[0].confStartDate)}
            confEndDate={data[0].confEndDate}
            description={data[0].aboutConf}
            color="text-pink-700"
            heading={"WIE"}
            year={"2023"}
            imglink={"images/hero14.jpg"}
            confName={data[0].confName}

          />
          <ConferenceWrapper
            instaLink={data[1].instaLink}
            facebookLink={data[1].facebookLink}
            twitterLink={data[1].twitterLink}
            youtubeLink={data[1].youtubeLink}
            confStartDate={new Date(data[1].confStartDate)}
            confEndDate={data[1].confEndDate}
            description={data[1].aboutConf}
            color="text-red-500"
            heading={"NSPC"}
            year={"2023"}
            imglink={"images/hero12.jpg"}
            confName={data[1].confName}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ConferenceSection;
