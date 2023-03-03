import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

export default function Header() {
  return (
    <Wrapper>
      <header className="flex justify-between  bg-white py-6  sticky top-0 items-center">
        {/* logo */}
        <div>
          {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
          <Image src={logo} alt="panaverse logo" />
        </div>
        {/* Navigation bar */}
        <ul className="flex space-x-8  font-semibold ">
          <li>
            <Link href="/courses"> Courses </Link>
          </li>

          <li>
            <Link href={"/"}> Home </Link>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
}
