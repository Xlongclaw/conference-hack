import React from "react";
import { ButtonX, HamburgerMenu, Logo, NavBarLinks } from "../components";

import useSWR from "swr";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC<{ solid?: boolean }> = (props) => {
  const navigate = useNavigate()
  const {
    data: NavBarData,
    isLoading,
    error,
  } = useSWR(`https://conference.cyclic.app/navbar`);

  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div
      className={`flex justify-between items-center md:px-32 sm:px-12 px-8 ${
        props.solid ? "bg-custom-dark" : ""
      } w-full`}
    >
      <Logo
        heading={NavBarData[0].heading}
        subHeading={NavBarData[0].subHeading}
      />
      <NavBarLinks />
      <HamburgerMenu />
      <div onClick={()=>{navigate("/contactus")}}>
        <ButtonX variant={1} title="Contact Us" />
      </div>
    </div>
  );
};

export default NavBar;
