import React from "react";
import useSWR from "swr";

const AwardsPrizesSection: React.FC = () => {
  const CONF_ID1 = "647f315f62cdb3a26174fc38";
  // const CONF_ID2 = "6492f77d1cc9629afd1c7008"
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/awards/conference/${CONF_ID1}`
  );

  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div>
      <div className="custom-font1 text-5xl pb-32">
        Awards
      </div>
      {data.map((award: any, index: number) => (
        <div key={index} className="my-[4rem]">
          <div>{award.title1}</div>
          <div>{award.title2}</div>
          <div>{award.description}</div>
        </div>
      ))}
    </div>
  );
};

export default AwardsPrizesSection;
