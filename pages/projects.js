import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>Projects page</main>
    </div>
  );
}
