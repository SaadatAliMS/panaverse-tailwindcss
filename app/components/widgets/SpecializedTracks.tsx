import React from "react";
import Wrapper from "../shared/Wrapper";

export const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl sm:text-3xl font-bold whitespace-pre-line ">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-500">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>
        <div className="mt-10">
          {/* content left */}
          <div className="shadow-xl rounded-xl border border-slate-300 py-8 px-8">
            <h4 className="text-teal-700 text-lg ">Specialized Program</h4>
            <h3 className="text-2xl font-semibold ">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-4">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-teal-700 text-lg mt-4 underline flex gap-2 items-end">
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
          </div>

          {/* content right */}
        </div>
      </Wrapper>
    </section>
  );
};
