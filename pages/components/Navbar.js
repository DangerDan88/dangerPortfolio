import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <p className="text-4xl font-bold text-black">Daniel Osornio</p>
      <div className="flex">
        <Link href="/">
          <a className="rounded-lg bg-white text-black font-bold py-2 px-6 hover:bg-indigo-300 shadow-xl border-b-4 border-blue-700 hover:border-blue-500">
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className="rounded-lg bg-white text-black font-bold py-2 px-6 hover:bg-indigo-300 shadow-xl border-b-4 border-blue-700 hover:border-blue-500">
            Projects
          </a>
        </Link>
      </div>
    </nav>
  );
}
