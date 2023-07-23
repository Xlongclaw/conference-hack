import React, { useState,useEffect } from "react";
import {
  AnnouncementSection,
  AwardsPrizesSection,
  ConferenceSection,
  ContactUsSecion,
  DateSection,
  HomeSection,
  SponsorsSection,
} from "../sections";
import { Error, Footer, Loading } from "../components";
import useSWR from "swr";

const HomePage: React.FC = () => {
  let [confIndex, setConfIndex] = useState(0);
  const confIds = ["647f315f62cdb3a26174fc38", "6492f77d1cc9629afd1c7008"];
  const [currentConfId, setCurrentConfId] = useState(confIds[0]);
  const nextConf = () => {
    if (confIndex!==confIds.length-1) setConfIndex(confIndex + 1);
    else setConfIndex(0);
  };
  useEffect(()=>{
    setCurrentConfId(confIds[confIndex]);
  },[confIndex])
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/conf/`
  );
  if (error) return <Error />;
  if (isLoading) return <Loading />;

  return (
    <div className="relative parallax">
      <div className={`overflow-x-hidden `}>
        <HomeSection confId={currentConfId} nextConf={nextConf} />
        <AnnouncementSection confId={currentConfId} />
        <ConferenceSection />
        <DateSection confId={currentConfId}/>
        <SponsorsSection confId={currentConfId}/>
        <AwardsPrizesSection confId={currentConfId}/>
        <ContactUsSecion />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
