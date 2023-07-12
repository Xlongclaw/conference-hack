import React, { useEffect, useState } from "react";
import { Button, HamburgerMenu, Logo, NavBarLinks } from "../components";
import getDataModule from "../Constants/API";

const NavBar: React.FC = () => {
  const [navBarData, setNavBarData] = useState<any>(null);

  useEffect(() => {
    getDataModule("navbar").then((data) => setNavBarData(data));
  }, []);
  if(!navBarData) return <></>

  return (
    <div className="flex justify-between items-center md:px-32 sm:px-12 px-8  w-full">
      <Logo heading={navBarData.heading} subHeading={navBarData.subHeading}/>
      <NavBarLinks />
      <HamburgerMenu />
      <Button title="Contact Us" />
    </div>
  );
};

export default NavBar;
