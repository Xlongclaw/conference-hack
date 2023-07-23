import React from "react";
import useSWR from "swr";

const DateSection: React.FC<{confId:string}> = (props) => {

  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/eventDates/conference/${props.confId}`
  );
  
  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div className="parallax bg-custom-dark text-ascentColor3 flex flex-col py-32 items-center justify-center">
      <div className="zona text-3xl md:text-5xl pb-8 text-ascentColor3">
        Important Dates
      </div>
      {data.map((event: any, index: number) => (
        <div key={index} className="flex flex-col sm:flex-row my-12 justify-center items-center w-[60rem]">
          <div className="text-ascentColor4 bg-ascentColor3 w-[18rem] sm:w-[10rem] h-[5rem] flex flex-col justify-center items-center">

          <h4 >{new Date(event.date).getDay()} {new Date(event.date).toLocaleString("default",{month:"long"})}</h4>
          <h4>{new Date(event.date).getFullYear()}</h4>
          </div>
          <h2 className="text-lg sm:text-2xl w-[18rem] sm:w-[25rem] h-[5rem] flex justify-center items-center border-[3px] border-ascentColor3">{event.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default DateSection;
