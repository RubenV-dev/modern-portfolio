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

    return (
      <main className="relative z-10 min-h-svh">
        <Nav />

        <section className="flex flex-col lg:flex-row h-svh overflow-hidden">
          <div className="w-full lg:w-[60%] h-full overflow-y-auto px-8 lg:px-24 pt-10 lg:pt-0 pb-16">
            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-yellow-500/20 hover:shadow-yellow-500/5">
              <div className="relative bg-slate-950 border border-slate-900 ring-4 ring-slate-900/50 rounded-xl p-6 sm:p-8 shadow-inner overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div className="flex flex-col items-center justify-center text-center pb-6 border-b border-slate-900/60">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 select-none leading-none">
                    Ruben Vallejo
                  </h2>

                  <p className="font-mono text-xs sm:text-sm tracking-widest text-red-500 uppercase mt-3 font-semibold">
                    Full Stack Software Engineer
                  </p>
                </div>

                <img
                  className="block lg:hidden w-64 h-64 rounded-full mb-6 mx-auto object-cover"
                  src={profileImgUrl}
                  alt="profile pic"
                  referrerPolicy="no-referrer"
                />

                <div className="my-8 px-4 sm:px-8 py-6 rounded-xl max-w-2xl mx-auto">
                  <p className="text-base sm:text-lg md:text-xl text-yellow-500 text-center font-semibold leading-relaxed tracking-wide">
                    "Hello. I'm a Full Stack Software Engineer currently based
                    in New York City."
                  </p>
                </div>

                <div className="w-full max-w-md mx-auto border border-slate-800 rounded-xl bg-slate-900/60 p-4 flex items-center justify-around shadow-lg">
                  <a
                    href="https://github.com/RubenV-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-yellow-500 active:scale-95 transition-all duration-300 group"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub className="w-6 h-6 sm:w-7 sm:h-7 transform group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://medium.com/@rv.results"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-yellow-500 active:scale-95 transition-all duration-300 group"
                    aria-label="Medium Blog"
                  >
                    <AiOutlineMedium className="w-6 h-6 sm:w-7 sm:h-7 transform group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-yellow-500 active:scale-95 transition-all duration-300 group"
                    aria-label="LinkedIn Profile"
                  >
                    <AiOutlineLinkedin className="w-6 h-6 sm:w-7 sm:h-7 transform group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4 bg-slate-950 rounded-t-xl pl-4 pt-4 border-t-4 border-l-4 border-r-4 border-slate-900">
              <h3 className="text-2xl font-extrabold tracking-wide text-white">
                Experience
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-10 text-center justify-items-center mx-auto bg-slate-950 border-l-4 border-r-4 border-b-4 border-slate-900 rounded-b-xl p-8 shadow-inner overflow-hidden">
              <div className="flex flex-col items-center text-center ">
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

          <div className="hidden lg:block lg:w-[40%] h-svh relative bg-black">
            <img
              src={profileImgUrl}
              alt="profile image"
              className="absolute top-0 left-0 w-full h-full object-cover object-top"
            />
          </div>
        </section>
      </main>
    );
  }
}
