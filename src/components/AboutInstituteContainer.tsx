import React from "react";

const AboutInstituteContainer: React.FC<{ data: string }> = (props) => {
  return (
    <div className="flex">
      <div className="flex flex-col p-16 justify-center items-center text-ascentColor4 bg-ascentColor3">
        <h3>About</h3>
        <h3>Institute</h3>
      </div>
      <div className="border-[3px] border-ascentColor3 p-3">{props.data}</div>
    </div>
  );
};

export default AboutInstituteContainer;
