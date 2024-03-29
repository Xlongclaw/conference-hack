import React from "react";
import { Button, DateLocationContainer, SocialLinks } from "../components";
import useSWR from "swr";

const HeroSection: React.FC<{confId:string}> = (props) => {
  const {data,isLoading,error} = useSWR(`https://conference.cyclic.app/home/conf/${props.confId}`)
  
  if (error) return <div>ERROR</div>;
  if (isLoading) return <div className="">.....Loading !</div>;
  
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
        <SocialLinks instaLink={homeData.instaLink} facebookLink={homeData.facebookLink} twitterLink={homeData.twitterLink} youtubeLink={homeData.youtubeLink}/>
      </div>
    </div>
  );
};

export default HeroSection;
