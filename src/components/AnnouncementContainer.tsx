import React, { useState } from "react";
import { motion } from "framer-motion";

const AnnouncementContainer: React.FC<{key:number;announcement:any}> = (props) => {
  const [expand,setExpand] =useState(false)
  return (
    <div className=" shadow1 p-6 text-ascentColor4 border-[3px] border-ascentColor3 w-[73vw] md:w-[35rem] shadow-2xl shadow-white">
      <h3 className="text-custom-orange mb-2">{props.announcement.createdAt}</h3>
      <h2 className="text-2xl font-semibold text-ascentColor6">{props.announcement.title}</h2>
      <h4 className="text-sm mb-2 text-ascentColor3">{props.announcement.metaDescription}</h4>
      <motion.p
       animate={{height:expand?"auto":"2rem",textOverflow:expand?"unset":"ellipsis",whiteSpace:expand?"unset":"nowrap"}}
       transition={{type:"spring", stiffness:30}}
        className={`text-ascentColor3 text-ellipsis overflow-hidden `}>
      {props.announcement.description}
      </motion.p>
      <motion.h6 whileHover={{fontWeight:700}} onClick={()=>{setExpand(!expand)}} className="text-custom-orange mt-4 flex justify-end cursor-pointer">show more</motion.h6>
    </div>
  );
};

export default AnnouncementContainer;
