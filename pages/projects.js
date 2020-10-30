import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="flex justify-center text-2xl font-bold">Projects</h1>

      <main id="grid" className="py-8">
        <p className="p-2 text-center">Project 1</p>
        <p2 className="p-2 text-center">Project2</p2>
        <p3 className="p-2 text-center">Project 3</p3>
        <p4 className="p-2 text-center">Project 4</p4>
      </main>
    </div>
  );
};

export default Projects;
