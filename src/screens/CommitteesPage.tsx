import React from "react";
import { Error, Footer, Loading, NavBar } from "../components";
import useSWR from "swr";

const CommitteesPage: React.FC = () => {
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/committees`
  );
  if (error) return <Error />;
  if (isLoading) return <Loading />;
  console.log(data);

  return (
    <div>
      <NavBar solid />
      <div className="mb-[4rem]">
        <h4 className=" text-3xl text-center mt-[3rem] mb-16">
          Organising Committee
        </h4>
        <div className="flex-wrap flex gap-10 justify-center items-center text-white">
          {data.map((member: any, index: number) => (
            <div className="w-[25rem] bg-custom-dark shadow2">
              <div className="h-[30rem] w-[25rem] overflow-hidden flex justify-center">
                <img className="object-cover" src={member.ImgLink} alt="" />
              </div>
              <div className="p-[2rem]">
                <h2 className=" text-2xl">{member.Name}</h2>
                <h3 className="text-sm">{member.Designation}</h3>
                <h3>{member.Institute}</h3>
                <a href={member.ProfileLink}>View Profile</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommitteesPage;
