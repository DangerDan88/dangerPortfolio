import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-center"></div>
      <main className="flex justify-center"></main>
      <div className="flex justify-center mx-auto pt-6"></div>
    </div>
  );
}
