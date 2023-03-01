import React from "react";

export default function Header() {
  return (
    <header className="flex  justify-between max-w-screen-xl mx-auto bg-red-700">
      {/* logo */}
      <div>
        <h2 className="text-xl font-bold">Panaverse Dao</h2>
      </div>
      {/* Navigation bar */}
      <ul className="flex">
        <li>Home</li>
        <li>Courses</li>
      </ul>
    </header>
  );
}
