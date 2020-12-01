import Head from "next/head";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center">
        {" "}
        <a
          href="https://www.linkedin.com/in/daniel-osornio-837547188/"
          target="_blank"
        >
          <Card />
        </a>
      </main>
      <div className="flex justify-center mx-auto pt-6"></div>
    </div>
  );
}
