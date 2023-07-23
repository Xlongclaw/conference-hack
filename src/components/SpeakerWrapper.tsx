import React from "react";

const SpeakerWrapper: React.FC<{ data: any }> = (props) => {
  return (
    <div className="flex gap-[7rem] border-[1px] bg-custom-dark text-white p-16 shadow1 overflow-hidden">
      <img
        className="h-[27rem] shadow2 rounded-2xl"
        src={props.data.ImgLink}
        alt=""
      />
      <div className="">
        <h2 className="text-4xl">{props.data.Name}</h2>
        <h4 className="mb-7">{props.data.Institute}</h4>

        <p className="max-h-[22rem] overflow-auto pr-8">{props.data.Bio}</p>

        <div className="mt-8 border-white border-[2px] w-[10rem] h-[3rem] flex justify-center items-center hover:bg-white hover:text-black cursor-pointer hover:transition-all hover:duration-300 transition-all duration-300">
          <a href={`${props.data.ProfileLink}`}>View Profile</a>
        </div>
      </div>
    </div>
  );
};

export default SpeakerWrapper;
