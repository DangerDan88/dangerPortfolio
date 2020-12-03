import Head from "next/head";
//import Navbar from "./components/Navbar";
import Card from "./components/Card";
import GitCard from "./components/GitCard";
import MailCard from "./components/MailCard";
import AnimatedHeader from "./components/AnimatedHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <AnimatedHeader />
      </div>
      <main id="grid" className="py-8">
        {" "}
        <a
          href="https://www.linkedin.com/in/daniel-osornio-837547188/"
          target="_blank"
        >
          <Card />
        </a>
        <a href="https://github.com/DangerDan88" target="_blank">
          {" "}
          <GitCard />
        </a>
        <MailCard />
      </main>
    </div>
  );
}
