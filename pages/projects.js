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
        <div className="gridBox bg-white rounded-lg flex justify-center"></div>
        <div className="gridBox  bg-white rounded-lg flex justify-center">
          LearnBuildType
        </div>
        <div className="gridBox bg-white rounded-lg flex justify-center">
          Food Memory
        </div>
      </main>
    </div>
  );
};

export default Projects;
