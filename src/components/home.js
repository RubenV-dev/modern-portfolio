import React from "react";
import Nav from "./nav";
import { IoLogoJavascript } from "react-icons/io";
import { DiRuby, DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  AiOutlineLinkedin,
  AiOutlineMedium,
  AiOutlineJava,
  AiOutlineKubernetes,
} from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMysql, SiRubyonrails } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const profileImgUrl = "https://i.imgur.com/ALR42NT.jpeg";
  const croppedProfileImgUrl = "https://i.imgur.com/ALR42NT.jpeg";
  const landingPageImgUrl = "https://i.imgur.com/dbpOZ8z.jpeg";

  useEffect(() => {
    const phrase = "Ruben Vallejo's Portfolio";
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(phrase.slice(0, index++));
      if (index > phrase.length) {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-700 ease-in-out ${
          showLanding ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: `url(${landingPageImgUrl})`,
        }}
      >
        <h1 className="text-5xl font-bold tracking-wide bg-black/60 px-6 py-4 rounded-2xl shadow-xl transition-transform duration-700 ease-in-out transform ${showLanding ? 'translate-y-0' : '-translate-y-10'}">
          {typedText}
          {showCursor && (
            <span className="inline-block w-1 h-8 ml-1 bg-white animate-pulse align-middle" />
          )}
        </h1>

        <div className="absolute bottom-12">
          <button
            className="px-6 py-3 text-lg rounded-xl bg-purple-600 hover:bg-purple-700 shadow-xl"
            onClick={() => setShowLanding(false)}
          >
            Enter
          </button>
        </div>
      </div>
      {/* {Second main page} */}
      <div
        className={`absolute inset-0 w-full h-full p-10 grid place-items-center bg-gray-900 overflow-y-auto transition-opacity duration-700 ease-in-out ${
          !showLanding ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Nav />
        {/* Container for left and right splits */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* left split */}
          <div className="text-left max-w-xl mx-auto transition-transform duration-700 ease-in-out transform ${!showLanding ? 'translate-y-0' : 'translate-y-10'}">
            <h2 className="font-mono text-center text-8xl font-bold mb-4 mt-2">
              Ruben
            </h2>
            <h2 className="font-mono text-center text-8xl font-bold mb-4">
              Vallejo
            </h2>
            <img
              className="rounded-full lg:hidden"
              src={profileImgUrl}
              alt="profile pic"
              referrerPolicy="no-referrer"
            />
            <p className="text-3xl text-gray-300 mb-8 mt-8">
              Hello. Im a Full Stack Software Engineer currently based in New
              York City.
            </p>
            <ul className="icon-links">
              <li>
                <a
                  href="https://github.com/RubenV-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size="2rem" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin size="2rem" />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@rv.results"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMedium size="2rem" />
                </a>
              </li>
            </ul>
            <ul className="grid grid-cols-5 gap-6 mb-8 mt-4">
              <li className="flex flex-col items-center">
                <IoLogoJavascript size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Javascript</p>
              </li>
              <li className="flex flex-col items-center">
                <TbBrandTypescript size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Typescript</p>
              </li>
              <li className="flex flex-col items-center">
                <DiRuby size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Ruby</p>
              </li>
              <li className="flex flex-col items-center">
                <AiOutlineJava size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Java</p>
              </li>
              <li className="flex flex-col items-center">
                <AiOutlineKubernetes size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Kubernetes</p>
              </li>
              <li className="flex flex-col items-center">
                <FaReact size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">React</p>
              </li>
              <li className="flex flex-col items-center">
                <SiRubyonrails size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Ruby on Rails</p>
              </li>
              <li className="flex flex-col items-center">
                <BiLogoSpringBoot size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">SpringBoot</p>
              </li>
              <li className="flex flex-col items-center">
                <SiMysql size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">MySql</p>
              </li>
              <li className="flex flex-col items-center">
                <DiPostgresql size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">PostgreSQL</p>
              </li>
            </ul>
          </div>
          {/* right split */}
          <div className="flex justify-center items-start hidden lg:block">
            <img
              className="profile-pic"
              src={croppedProfileImgUrl}
              alt="profile pic"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
