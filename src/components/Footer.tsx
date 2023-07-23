import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <div className="h-[20rem] bg-custom-lightDark flex flex-col items-center justify-between pt-16 gap-16 shadow2 rounded-t-[3rem]">
      <div className="flex text-white items-center gap-16">
        <Logo heading="Home" subHeading="conf" />
        <div>
          <h3 className="text-sm">
            DESIGNED BY <span className="text-2xl">THE SYSTUM</span>
          </h3>
        </div>
          <h3 className="text-sm">
            DESIGNED FOR <span className="text-2xl">THE SYSTUM</span>
          </h3>
      </div>
      <div className="flex justify-center items-center bg-custom-dark w-full pb-10 ">
        <SocialLinks
          facebookLink=""
          instaLink=""
          twitterLink=""
          youtubeLink=""
        />
      </div>
    </div>
  );
};

export default Footer;
