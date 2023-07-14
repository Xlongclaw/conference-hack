import React, { useState } from "react";
import NavLinksData from "../Constants/NavLinksData";
import { NavLink } from "react-router-dom";
import { DropDown } from "../components";
import { motion } from "framer-motion";

const NavBarLinks: React.FC = () => {
  const [dropDownVisibility,setDropDownVisibility] = useState<null|number>(null)
  return (
    <div className="lg:flex gap-[2vw] xl:gap-[3vw] hidden text-sm font-medium text-ascentColor3/90">
      {NavLinksData.map((link,index) => (
        <motion.div key={link.title} className="py-8" onHoverStart={()=>{setDropDownVisibility(index)}} onHoverEnd={()=>{setDropDownVisibility(null)}}>
          <NavLink className="relative pb-2" to={link.link}>
            {link.title}
            <DropDown visibility={dropDownVisibility===index} DropDownData={link.dropdown} />
          </NavLink>
        </motion.div>
      ))}
    </div>
  );
};

export default NavBarLinks;
