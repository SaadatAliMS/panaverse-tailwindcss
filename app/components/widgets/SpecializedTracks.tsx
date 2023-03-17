"use client";
import React, { useState } from "react";
import { QuarterBox } from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";
import web3 from "../../../public/web3.webp";
import ai from "../../../public/ai.webp";
import Image from "next/image";
import genomics from "../../../public/genomics.webp";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: web3,
    quarters: [
      {
        header: "Quarter IV ",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V ",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: ai,
    quarters: [
      {
        header: "Quarter IV ",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps.",
        number: 4,
      },
      {
        header: "Quarter V ",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "genom",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: genomics,

    quarters: [
      {
        header: "Quarter IV ",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V ",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
];

export const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemData = programsData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl sm:text-3xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-500 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* content left */}
          <div className=" sticky top-28 self-start shadow-xl flex-1 rounded-xl basis-8/12 border border-slate-300 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-semibold ">
              {selectedItemData?.header}
            </h3>
            <p className="text-lg text-slate-600 mt-4">
              {selectedItemData?.description}
            </p>
            <button className="text-primary text-lg mt-4 underline flex gap-2 items-end">
              Learn More
              <svg
                className="mb-1.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex gap-4 mt-8 flex-col sm:flex-row">
              {selectedItemData?.quarters.map((item) => (
                <QuarterBox
                  key={item.number}
                  description={item.description}
                  header={item.header}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* content right */}
          <div className="shadow-xl rounded-xl px-4 py-6 space-y-4 bg-slate-200  flex-1 basis-4/12">
            {programsData.map((item, i) => (
              <div
                key={item.slug}
                onClick={() => setSelectedItem(item.slug)}
                className="flex items-center gap-x-4 cursor-pointer"
              >
                <div className="flex-shrink-0 h-24 w-36">
                  {/* <div className="w-20 h-16 rounded bg-red-500"></div> */}
                  <Image
                    src={item.image}
                    alt={item.header}
                    className={"h-24 object-cover rounded-md"}
                  />
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-semibold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
