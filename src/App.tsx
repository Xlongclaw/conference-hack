import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage,SpeakersPage,CommitteesPage,ContactUsPage} from "./screens";


const App: React.FC = () => {
  return (
    <div className="text-ascentColor2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/speakers" element={<SpeakersPage/>} />
          <Route path="/committees" element={<CommitteesPage/>} />
          <Route path="/contactus" element={<ContactUsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
