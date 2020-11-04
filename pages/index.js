import Head from "next/head";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-center">
        <Image
          src="/images/profilepic.jpeg"
          alt="me"
          className="rounded-full"
          height="225"
          width="225"
        />
      </div>
      <main className="flex justify-center text-white">
        <p className="py-6 text-lg text-black">
          I'm Daniel I am a freelance full stack web developer. I am currently
          available for work please contact me if interested below or take a
          look at my current completed projects.
        </p>
      </main>
      <div className="flex justify-center mx-auto pt-6">
        <form
          className="w-full max-w-lg"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="flex flex-wrap -mx-3 mb-6 pt-8">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <input
                  className="appearance-none block w-full bg-gray-200 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="name"
                  placeholder="Jane"
                />
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
                <input
                  className="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
                <input
                  className="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="rounded-lg bg-white text-black font-bold py-2 px-6 hover:bg-indigo-300 shadow-xl border-b-4 border-blue-700 hover:border-blue-500"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
