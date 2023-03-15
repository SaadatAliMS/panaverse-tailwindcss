import React from "react";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-sm ">
          <h4 className="text-teal-800 font-semibold text-md">
            Program of Studies
          </h4>
          <h2 className="text-4xl sm:text-3xl font-bold whitespace-pre-line ">
            {header}
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-4">
            <Button text={"Learn More"} />
          </div>
        </div>
        {/* boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6  mx-auto ">
          {CoreTrackData.map((item, i) => {
            return (
              <div className="border rounded-md flex-1  relative justify-center  flex flex-col sm:p-10 ">
                <h4 className="font-bold text-lg">{item.header}</h4>
                <p className="mt-2 text-slate-600 z-0">{item.description} </p>
                <div className="text-gray-200 absolute top-0 right-10 text-9xl font-bold -z-10">
                  {i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
