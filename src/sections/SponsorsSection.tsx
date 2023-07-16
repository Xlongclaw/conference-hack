import React from "react";
import useSWR from "swr";

const SponsorsSection: React.FC = () => {
  const CONF_ID1 = "647f315f62cdb3a26174fc38";
  // const CONF_ID2 = "6492f77d1cc9629afd1c7008"
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/sponsors/conference/${CONF_ID1}`
  );

  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div className=" bg-white  md:px-16 lg:px-32 py-[6rem] flex flex-col">
      <div className="zona flex justify-center md:justify-start text-3xl md:text-5xl pb-32">Sponsors</div>
      <div className="grid md:grid-flow-col grid-flow-row md:overflow-x-auto hidescroll py-8 px-2 md:gap-16">
      {data.map((sponsor: any, index: number) => (
        <div key={index} className=" flex flex-col justify-center items-center h-[15rem] md:w-[30rem] ">
          <img className="md:mb-4 w-[18rem] md:w-auto shadow1 rounded-2xl py-8" src={sponsor.logo} alt="" />
          <h4 className="text-xl font-medium">{sponsor.name}</h4>
          <h6>{sponsor.type}</h6>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
