import React, { useEffect, useState } from "react";
import { ButtonX, DateLocationContainer } from "../components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import getDataModule from "../Constants/API";

type homeModel = {
  id: string;
  confId: string;
  confName: string;
  confStartDate: string;
  confEndDate: string;
  logo: string;
  shortName: string;
  aboutConf: string;
  aboutIns: string;
  youtubeLink: string;
  instaLink: string;
  facebookLink: string;
  twitterLink: string;
  createdAt: string;
  updatedAt: string;
}

const HeroSection: React.FC = () => {
  const [homeData, setHomeData] = useState< homeModel | null>(null);

  useEffect(() => {
    getDataModule("home").then((data) => setHomeData(data));
  }, []);

  if (!homeData) return <></>;

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 justify-center pl-32">
        <h5 className="text-custom-orange text-lg font-medium">
          {homeData.shortName}
        </h5>
        <h1 className="text-ascentColor4 zona text-6xl max-w-[50rem] font-semibold">
          {homeData.confName}
        </h1>
        <DateLocationContainer />
        <ButtonX variant={2} title="Register" />
        {/* <button className="bg-ascentColor4 py-5 flex-none w-48 text-ascentColor3">
          Register
        </button> */}
        <div className="flex gap-8 mt-16">
          <FacebookIcon className="scale-150 " />
          <InstagramIcon className="scale-150 " />
          <LinkedInIcon className="scale-150" />
          <TwitterIcon className="scale-150" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
