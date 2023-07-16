import React from "react";
import { ButtonX, HamburgerMenu, Logo, NavBarLinks } from "../components";

import useSWR from "swr";

const NavBar: React.FC = () => {
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/navbar`
  );

  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div className="flex justify-between items-center md:px-32 sm:px-12 px-8  w-full">
      <Logo heading={data[0].heading} subHeading={data[0].subHeading}/>
      <NavBarLinks />
      <HamburgerMenu />
      {/* <button className="bg-custom-orange py-5 flex-none w-48 text-ascentColor3">
          Contact us
        </button> */}
      <ButtonX variant={1} title="Contact Us" />
    </div>
  );
};

export default NavBar;
