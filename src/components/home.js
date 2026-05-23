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

export default class Home extends React.Component {
  render() {
    const profileImgUrl = "https://i.imgur.com/6zRtywb.png";
    const backgroundImg = "https://i.imgur.com/dbpOZ8z.jpeg";

    return (
      <main className="relative z-10 min-h-screen">
        <Nav />

        <section className="flex flex-col lg:flex-row h-screen overflow-hidden">
          {/* Left Container */}
          <div className="w-full lg:w-1/2 h-full overflow-y-auto px-8 lg:px-24 pt-10 lg:pt-0 pb-16">
            <img
              className="block lg:hidden w-64 h-64 rounded-full mb-6 mx-auto object-cover"
              src={profileImgUrl}
              alt="profile pic"
              referrerPolicy="no-referrer"
            />

            <div className="flex items-center justify-center p-6">
              <div className="bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 p-6 rounded-2xl shadow-inner border-2 border-amber-300/50 w-full text-center">
                <h2
                  className="font-copperplate font-black tracking-wider text-amber-950 uppercase select-none leading-none
                       text-2xl sm:text-3xl md:text-4xl min-[375px]:text-[7vw]"
                  style={{
                    textShadow:
                      "0 1px 0 rgba(255,240,200,0.6), 0 -1px 0 rgba(120,60,0,0.5)",
                  }}
                >
                  Ruben Vallejo
                </h2>

                <p className="font-serif text-sm italic text-amber-900/80 mt-2 tracking-wide">
                  Full Stack Software Engineer
                </p>
              </div>
            </div>

            <p className="bg-black/75 mt-10 text-lg md:text-2xl text-yellow-500 text-center">
              Hello. Im a Full Stack Software Engineer currently based in New
              York City.
            </p>

            <div className="mt-12 w-full border-2 border-white rounded-full bg-black py-6 px-12 flex items-center justify-around text-4xl">
              <a
                href="https://github.com/RubenV-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fa-brands fa-github hover:scale-110 transition">
                  <FiGithub size="2rem" />
                </i>
              </a>

              <a
                href="https://medium.com/@rv.results"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fa-brands fa-medium hover:scale-110 transition">
                  <AiOutlineMedium size="2rem" />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077B5] hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fa-brands fa-linkedin hover:scale-110 transition">
                  <AiOutlineLinkedin size="2rem" />
                </i>
              </a>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 mt-16 text-center justify-items-center max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <i className="fa-brands fa-js text-5xl lg:text-6xl text-yellow-500">
                  <IoLogoJavascript size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Javascript
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="text-5xl lg:text-6xl text-blue-500">
                  <TbBrandTypescript size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Typescript
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-regular fa-gem text-5xl lg:text-6xl text-red-500">
                  <DiRuby size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Ruby
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-brands fa-java text-5xl lg:text-6xl text-orange-500">
                  <AiOutlineJava size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Java
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-brands fa-kubernetes text-5xl lg:text-6xl text-blue-600">
                  <AiOutlineKubernetes size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Kubernetes
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-brands fa-react text-5xl lg:text-6xl text-cyan-400">
                  <FaReact size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  React
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-gauge-high text-5xl lg:text-6xl text-red-700">
                  <SiRubyonrails size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Rails
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-leaf text-5xl lg:text-6xl text-green-500">
                  <BiLogoSpringBoot size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Spring
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-database text-5xl lg:text-6xl text-blue-800">
                  <SiMysql size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  MySQL
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-database text-5xl lg:text-6xl text-sky-700">
                  <DiPostgresql size="3rem" />
                </i>
                <p className="mt-3 tracking-wider uppercase text-xs sm:text-sm font-medium">
                  Postgres
                </p>
              </div>
            </div>
          </div>
          {/* Right container */}
          <div className="hidden lg:block lg:w-1/2 h-screen relative bg-black">
            <img
              src={profileImgUrl}
              alt="Ruben Vallejo"
              className="absolute top-0 left-0 w-full h-full object-cover object-top"
            />
          </div>
        </section>
      </main>
    );
  }
}
