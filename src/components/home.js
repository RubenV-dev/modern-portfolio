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
  const backgroundImg = "https://i.imgur.com/qgPbb4N.jpeg";

  useEffect(() => {
    const words = ["Welcome", "To", "Ruben", "Vallejo's", "Portfolio"];
    let wordIndex = 0;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (wordIndex >= words.length) {
        clearInterval(typeInterval);
        setShowCursor(false);
        return;
      }
      charIndex++;

      const fullyTypedWords = words.slice(0, wordIndex).join("\n");
      const currentPartial = words[wordIndex].slice(0, charIndex);

      const newText = fullyTypedWords
        ? `${fullyTypedWords}\n${currentPartial}`
        : currentPartial;

      setTypedText(newText);

      if (charIndex === words[wordIndex].length) {
        wordIndex++;
        charIndex = 0;
      }
    }, 120);

    return () => clearInterval(typeInterval);
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
        <h1 className="text-5xl font-bold tracking-wide bg-black/60 px-6 py-4 rounded-2xl shadow-xl transition-transform duration-700 ease-in-out transform whitespace-pre-line ${showLanding ? 'translate-y-0' : '-translate-y-10'}">
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

      <div
        className={`absolute inset-0 w-full h-full p-10 grid place-items-center bg-cover bg-center overflow-y-auto transition-opacity duration-700 ease-in-out ${
          !showLanding ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <Nav />
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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

            <ul className="grid grid-cols-3 gap-6 mb-8 mt-4 bg-black rounded-3xl p-4 border-4 border-white">
              <li className="flex flex-col items-center list-none">
                <a
                  href="https://github.com/RubenV-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline transition-all duration-400 hover:text-yellow-400"
                >
                  <FiGithub size="2rem" />
                </a>
              </li>
              <li className="flex flex-col items-center list-none">
                <a
                  href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline transition-all duration-400 hover:text-yellow-400"
                >
                  <AiOutlineLinkedin size="2rem" />
                </a>
              </li>
              <li className="flex flex-col items-center list-none">
                <a
                  href="https://medium.com/@rv.results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline transition-all duration-400 hover:text-yellow-400"
                >
                  <AiOutlineMedium size="2rem" />
                </a>
              </li>
            </ul>
            <ul className="grid grid-cols-5 gap-6 mb-8 mt-4">
              <li className="flex flex-col items-center list-none">
                <IoLogoJavascript size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Javascript</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <TbBrandTypescript size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Typescript</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <DiRuby size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Ruby</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <AiOutlineJava size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Java</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <AiOutlineKubernetes size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Kubernetes</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <FaReact size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">React</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <SiRubyonrails size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">Ruby on Rails</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <BiLogoSpringBoot size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">SpringBoot</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <SiMysql size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">MySql</p>
              </li>
              <li className="flex flex-col items-center list-none">
                <DiPostgresql size="4.2rem" />
                <p className="mt-2 text-sm text-gray-300">PostgreSQL</p>
              </li>
            </ul>
          </div>
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
