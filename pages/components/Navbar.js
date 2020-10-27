import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <p className="text-4xl font-bold text-white">Daniel Osornio</p>
      <div className="flex">
        <Link href="/">
          <a className="rounded-lg bg-black text-white py-2 px-6 hover:bg-indigo-300 shadow-lg">
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className="rounded-lg bg-black text-white py-2 px-6 hover:bg-indigo-300 shadow-lg">
            Projects
          </a>
        </Link>
      </div>
    </nav>
  );
}
