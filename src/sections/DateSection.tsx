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
    <div className="bg-custom-dark text-ascentColor3 flex flex-col py-32 items-center justify-center">
      <div className="zona text-5xl pb-32 text-ascentColor3">
        Important Dates
      </div>
      {data.map((event: any, index: number) => (
        <div key={index} className="flex  my-12 justify-center items-center w-[60rem]">
          <div className="text-ascentColor4 bg-ascentColor3 w-[10rem] h-[5rem] flex flex-col justify-center items-center">

          <h4 >{new Date(event.date).getDay()} {new Date(event.date).toLocaleString("default",{month:"long"})}</h4>
          <h4>{new Date(event.date).getFullYear()}</h4>
          </div>
          <h2 className="text-2xl w-[25rem] h-[5rem] flex justify-center items-center border-[3px] border-ascentColor3">{event.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default DateSection;
