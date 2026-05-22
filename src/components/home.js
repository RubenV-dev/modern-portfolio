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
      <main className="relative z-10 min-h-screen">
        <Nav />

        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-8 lg:px-24 pt-10">
          <img
            className="block md:hidden w-full h-full rounded-full"
            src={profileImgUrl}
            alt="profile pic"
            referrerPolicy="no-referrer"
          />
          <div>
            <h1 className="font-copperplate text-4xl lg:text-8xl font-black uppercase leading-none tracking-wide text-center">
              Ruben
              <br />
              Vallejo
            </h1>

            <p className="mt-10 text-lg md:text-2xl text-gray-200 max-w-2xl">
              Hello. Im a Full Stack Software Engineer currently based in New
              York City.
            </p>

            <div className="mt-12 w-full max-w-2xl border-2 border-white rounded-full bg-black py-6 px-12 flex items-center justify-around text-4xl">
              <a
                href="https://github.com/RubenV-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fa-brands fa-github hover:scale-110 transition">
                  <FiGithub size="2rem" />
                </i>
              </a>

              <a
                href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fa-brands fa-linkedin hover:scale-110 transition">
                  <AiOutlineLinkedin size="2rem" />
                </i>
              </a>

              <a
                href="https://medium.com/@rv.results"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                <i className="fa-brands fa-medium hover:scale-110 transition">
                  <AiOutlineMedium size="2rem" />
                </i>
              </a>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-10 mt-20 text-center justify-items-center">
              <div>
                <i className="fa-brands fa-js text-6xl">
                  <IoLogoJavascript size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">
                  Javascript
                </p>
              </div>

              <div>
                <i className="text-2xl">
                  <TbBrandTypescript size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">
                  Typescript
                </p>
              </div>

              <div>
                <i className="fa-regular fa-gem text-6xl">
                  <DiRuby size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">Ruby</p>
              </div>

              <div>
                <i className="fa-brands fa-java text-6xl">
                  <AiOutlineJava size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">Java</p>
              </div>

              <div>
                <i className="fa-brands fa-kubernetes text-6xl">
                  <AiOutlineKubernetes size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">
                  Kubernetes
                </p>
              </div>

              <div>
                <i className="fa-brands fa-react text-6xl">
                  <FaReact size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">React</p>
              </div>

              <div>
                <i className="fa-solid fa-gauge-high text-6xl">
                  <SiRubyonrails size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">
                  Ruby on Rails
                </p>
              </div>

              <div>
                <i className="fa-solid fa-leaf text-6xl">
                  <BiLogoSpringBoot size="3rem" />
                </i>
                <p className="mt-4 tracking-widest uppercase text-lg">
                  SpringBoot
                </p>
              </div>

              <div>
                <i className="fa-solid fa-database text-6xl">
                  <SiMysql size="3rem" />
                </i>
                <p className="mt-4 text-2xl">MySQL</p>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-database text-6xl">
                <DiPostgresql size="3rem" />
              </i>
              <p className="mt-4 text-2xl">PostgresSql</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-1/2 md:w-full max-w-[700px] overflow-hidden shadow-2xl">
              <img
                src={profileImgUrl}
                alt="Ruben Vallejo"
                className="hidden md:block w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}
