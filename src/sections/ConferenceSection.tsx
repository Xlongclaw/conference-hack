import React from "react";
import useSWR from "swr";

const ConferenceSection: React.FC = () => {
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/home`
  );
  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div className="bg-zinc-950 text-ascentColor3 ">
        <div className="custom-font1 text-5xl pl-32 pb-32">Conferences</div>
        <div className="flex justify-center items-center"></div>
      
    </div>
  );
};

export default ConferenceSection;
