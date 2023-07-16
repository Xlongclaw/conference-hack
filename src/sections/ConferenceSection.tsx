import React from "react";
import { ConferenceLargeContainer, ConferenceWrapper } from "../components";

const ConferenceSection: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-ascentColor3 py-32">
      <div className="zona text-5xl pl-32 pb-32">Conferences</div>
      <div className="mx-32">
        {/* <ConferenceLargeContainer /> */}
        <div className="flex gap-32 justify-center flex-wrap">
          <ConferenceWrapper color="text-pink-700" heading={"WIE"} year={"2023"} imglink={"images/hero14.jpg"}/>          
          <ConferenceWrapper color="text-red-500" heading={"NSPC"} year={"2023"} imglink={"images/hero12.jpg"}/>          
        </div>
      </div>
    </div>
  );
};

export default ConferenceSection;
