import React from "react";

const ContactWrapper:React.FC<{contact:any}> = (props) => {
  return (
    <div className=" bg-custom-dark text-white flex flex-col">
      <img className="w-[25rem]" src={props.contact.imgLink} alt="" />
      <div className="p-10">

      <h3>{props.contact.name}</h3>
      <h3>{props.contact.designation}</h3>
      <h3>{props.contact.institute}</h3>
      <a href={props.contact.profileLink}>View Profile</a>
      <h3>{props.contact.phone}</h3>
      <h3>{props.contact.email}</h3>
      <h3>{props.contact.fax}</h3>
      </div>
    </div>
  );
};

export default ContactWrapper;
