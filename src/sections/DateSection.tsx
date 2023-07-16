import React from "react";
import useSWR from "swr";

const DateSection: React.FC = () => {
  const CONF_ID1 = "647f315f62cdb3a26174fc38";
  // const CONF_ID2 = "6492f77d1cc9629afd1c7008"
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/eventDates/conference/${CONF_ID1}`
  );
  
  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div className="bg-custom-dark text-ascentColor3 flex flex-col items-center justify-center">
      <div className="custom-font1 text-5xl pb-32 text-ascentColor3">
        Important Dates
      </div>
      {data.map((event: any, index: number) => (
        <div key={index} className="flex gap-32 my-12 w-[40rem]">
          <h4>{event.date}</h4>
          <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default DateSection;
