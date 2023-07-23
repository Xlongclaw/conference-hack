import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage,SpeakersPage,CommitteesPage,ContactUsPage, SponsorshipPage, AwardsPage} from "./screens";
import { SWRConfig } from "swr";


const App: React.FC = () => {
  return (
    <div className="text-ascentColor2">
      <SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, {...init,headers:new Headers({"Authorization": "D9kN4A"})}).then(res => res.json())
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/speakers" element={<SpeakersPage/>} />
          <Route path="/committee" element={<CommitteesPage/>} />
          <Route path="/committee" element={<CommitteesPage/>} />
          <Route path="/sponsorship" element={<SponsorshipPage/>} />
          <Route path="/awards" element={<AwardsPage/>} />
          <Route path="/contactus" element={<ContactUsPage/>} />
        </Routes>
      </BrowserRouter>
    </SWRConfig>
    </div>
  );
};

export default App;
