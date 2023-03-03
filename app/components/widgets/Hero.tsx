import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import poster from "../../../public/poster.png";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left side content.classname flex-1 gives equal width to right and left component*/}
          <div className="flex-1">
            <h4 className="text-teal-800 font-semibold text-md">
              {" "}
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            {/* there must be only one h1 tag on a page for  seo purposes */}
            <h1 className="text-4xl sm:text-3xl font-bold ">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-3 text-lg text-slate-500">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-5">
              <Button text={"Enrol Now"} />
            </div>
          </div>
          {/* right side image */}
          <div className="flex-1">
            <Image src={poster} alt="student" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
