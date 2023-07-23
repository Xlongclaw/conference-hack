import React from "react";
import useSWR from "swr";

const SponsorsSection: React.FC<{confId:string}> = (props) => {
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/sponsors/conference/${props.confId}`
  );

  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div className=" bg-custom-lightDark  md:px-16 lg:px-32 py-[6rem] flex flex-col rounded-[3rem]">
      <div className="zona flex text-white justify-center md:justify-start text-3xl md:text-5xl pb-16">
        <h3 className="bg-white text-custom-dark py-2 px-8 rounded-2xl">
        Sponsors

        </h3>
        </div>
      <div className="grid md:grid-flow-col grid-flow-row md:overflow-x-auto hidescroll py-8 px-2 md:gap-16">
      {data.map((sponsor: any, index: number) => (
        <div key={index} className=" flex flex-col justify-center items-center h-[15rem] md:w-[30rem] text-white">
          <div className="md:mb-4 w-[18rem] md:w-auto shadow2 rounded-2xl py-8 flex justify-center items-center bg-white">

          <img className="h-full" src={sponsor.logo} alt="" />
          </div>
          <h4 className="text-xl font-medium">{sponsor.name}</h4>
          <h6>{sponsor.type}</h6>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
