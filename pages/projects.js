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
      <main className="flex justify-center py-6">
        <h1 className="text-2xl font-bold">Projects</h1>
      </main>
    </div>
  );
};

export default Projects;
