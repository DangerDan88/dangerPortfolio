import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Image from "next/image";

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
        <div className="max-w-sm lg:max-w-full rounded bg-white overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">LearnBuildType</div>
            <Image
              className="w-full"
              src="/images/learnbuild.png"
              alt="LBT game"
              width="400"
              height="400"
            ></Image>
            <p className="text-gray-700 text-base">Info here</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #serverless
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Auth0
            </span>
          </div>
        </div>{" "}
        <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">GPH Equestrian</div>
            <img
              className="w-full"
              src="/images/learnbuild.png"
              alt="LBT game"
            />
            <p className="text-gray-700 text-base">Info here</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #serverless
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Auth0
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">GPH Eq</div>
            <img
              className="w-full"
              src="/images/learnbuild.png"
              alt="LBT game"
            />
            <p className="text-gray-700 text-base">Info here</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #serverless
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Auth0
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
