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
    <div className=" parallax bg-white py-32">
      <div className="zona  mx-32 text-5xl text-custom-lightDark w-[25rem] text-center py-4 shadow2 rounded-3xl bg-ascentColor3">Awards</div>
      <div className="flex justify-center items-start gap-8 py-[4rem] mx-4 flex-wrap">
        {data.map((award: any, index: number) => (
          <div key={index} className={` w-[23rem] relative overflow-hidden shadow2 bg-custom-lightDark rounded-2xl`}>
            <img className="h-[20rem] object-cover" src={`images/award${index}.jpg`} alt="" />
            <div className="p-8">
              <div className="text-custom-orange text-2xl">{award.title1}</div>
              <div className="text-sm mb-4 text-red-500">{award.title2}</div>
              <div className="text-white">{award.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPrizesSection;
