import React from "react";
import { Error, Loading, SpeakerWrapper } from "../components";
import { motion } from "framer-motion";
import useSWR from "swr";

const SpeakersPanel: React.FC = () => {
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/speakers/conference/647f315f62cdb3a26174fc38`
  );
  if (error) return <Error/>;
  if (isLoading) return <Loading/>;
  return (
    <motion.div>
      <div className="mx-48 mt-12 flex flex-col gap-10 mb-[5rem]">
        {
          data.map((speaker:any,index:number)=>(
            <SpeakerWrapper key={index} data={speaker}/>
          ))
        }
        
      </div>
    </motion.div>
  );
};

export default SpeakersPanel;
