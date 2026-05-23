import { useState, useEffect } from "react";
import Nav from "./nav";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ossContributions = [
    {
      title: "Pinniped Auth Provider",
      desc: "Authentication Supervisor Integration with backstage",
      tech: "Typescript, React",
      link: "https://github.com/backstage/backstage/pull/19846",
    },
    {
      title: "Metadata cache",
      desc: "Add a metadata cache for the Pinniped Authentication Provider",
      tech: "Typescript, React",
      link: "https://github.com/backstage/backstage/pull/20909",
    },
    {
      title: "Seperate OIDC module migration",
      desc: "Migrate OIDC authentication provider to seperate module for auth-backend plugin in backstage",
      tech: "Typescript, React",
      link: "https://github.com/backstage/backstage/pull/20282",
    },
    {
      title: "Enable Server Side Authentication",
      desc: "Utilized Kubernetes Auth Proxy on backstage to allow for generalized request handling",
      tech: "Typescript, React",
      link: "https://github.com/backstage/backstage/pull/16649",
    },
    {
      title: "Kubernetes-backend proxy client plugin",
      desc: "Add a reusable kubernetes-backend proxy client to allow plugins to make generalized requests",
      tech: "Typescript, React",
      link: "https://github.com/backstage/backstage/pull/17121",
    },
    {
      title: "PermissionPolicy toggle for Kubernetes Proxy",
      desc: "Add a permission policy toggle for proxy endpoint to disable use",
      tech: "Typescript, React",
      link: "https://github.com/backstage/backstage/pull/16237",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ossContributions.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ossContributions.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [ossContributions.length]);

  return (
    <>
      <Nav />
      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-yellow-500 bg-slate-900">
        Open Source Contributions:
      </h3>
      <div className="w-full max-w-2xl mx-auto mt-16 px-12 relative">
        <div className="relative h-64 w-full overflow-hidden bg-slate-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
          <div className="relative w-full h-full">
            {ossContributions.map((proj, index) => {
              const offset = index - currentIndex;

              return (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full flex flex-col justify-between transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${offset * 100}%)`,
                    opacity: currentIndex === index ? 1 : 0,
                    visibility: currentIndex === index ? "visible" : "hidden",
                  }}
                >
                  <div>
                    <h3 className="font-copperplate text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                      {proj.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed max-w-md">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-end border-t border-zinc-800/60 pt-4 mt-4">
                    <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-medium">
                      Built with:{" "}
                      <span className="text-yellow-500 font-semibold">
                        {proj.tech}
                      </span>
                    </p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-yellow-500 hover:scale-105 transition active:scale-95"
                    >
                      Merged PR
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-[128px] -translate-y-1/2 bg-white hover:bg-yellow-500 text-black p-2.5 rounded-full transition-all duration-300 shadow-xl border border-zinc-200 z-20 focus:outline-none hover:scale-110 active:scale-95"
          aria-label="Previous Project"
        >
          <FiChevronLeft size="1.5rem" strokeWidth="3" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-[128px] -translate-y-1/2 bg-white hover:bg-yellow-500 text-black p-2.5 rounded-full transition-all duration-300 shadow-xl border border-zinc-200 z-20 focus:outline-none hover:scale-110 active:scale-95"
          aria-label="Next Project"
        >
          <FiChevronRight size="1.5rem" strokeWidth="3" />
        </button>

        <div className="flex justify-center gap-2 my-6">
          {ossContributions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-yellow-500"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-yellow-500 bg-slate-900">
        Projects:
      </h3>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl mx-auto mt-16 px-12 relative">
        <div className="flex flex-col justify-between w-full max-w-sm min-h-[280px] bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl transition-all duration-300">
          {/* Top Section: Title & Description */}
          <div>
            <h3 className="text-2xl font-bold tracking-wide text-white mb-3">
              Intake
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nutrition tracker app with bmi calculator, food diary, workout
              suggestion feature and visual data analysis. Users are allowed to
              log in or create a new profile and add foods to their profiles
              that correspond to the foods they ate that day. Users will then be
              able to see total caloric, protein, carb and fat intake from the
              meals entered. Useful to keep track of this info when you are
              trying to reach your fitness goals.
            </p>
          </div>

          {/* Bottom Section: Stack & Link */}
          <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Built with:{" "}
              <span className="text-yellow-500 font-medium normal-case ml-1">
                React, Redux, Hooks, React-vis, Ruby on Rails
              </span>
            </p>

            <div className="flex justify-end gap-2 lg:gap-4">
              <a
                href="https://github.com/RubenV-dev/intake-front-end"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold tracking-wider text-red-500 hover:text-yellow-500 transition-colors duration-300 group"
              >
                Frontend{" "}
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
                  &rarr;
                </span>
              </a>
              <a
                href="https://github.com/RubenV-dev/intake-back-end"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold tracking-wider text-red-500 hover:text-yellow-500 transition-colors duration-300 group"
              >
                Backend{" "}
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
                  &rarr;
                </span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=xaSPlHhiK6s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold tracking-wider text-red-500 hover:text-yellow-500 transition-colors duration-300 group"
              >
                Demo{" "}
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full max-w-sm min-h-[280px] bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl transition-all duration-300">
          <div>
            <h3 className="text-2xl font-bold tracking-wide text-white mb-3">
              K9 Strollers
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Javascript maze game with character selection where users must
              reach the end of the maze using the arrow keys before time runs
              out. Moving throughout the maze increases the user`s score. After
              time runs out, your total score is added to the high score list.
              Play to have the highest score.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Built with:{" "}
              <span className="text-yellow-500 font-medium normal-case ml-1">
                Javascript, Ruby on Rails, HTML Canvas
              </span>
            </p>

            <div className="flex justify-end gap-2 lg:gap-4">
              <a
                href="https://github.com/RubenV-dev/k9-stroller-js-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold tracking-wider text-red-500 hover:text-yellow-500 transition-colors duration-300 group"
              >
                Frontend{" "}
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
                  &rarr;
                </span>
              </a>
              <a
                href="https://github.com/RubenV-dev/k9_stroller_api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold tracking-wider text-red-500 hover:text-yellow-500 transition-colors duration-300 group"
              >
                Backend{" "}
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
                  &rarr;
                </span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=YYJeTjUx9Og&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold tracking-wider text-red-500 hover:text-yellow-500 transition-colors duration-300 group"
              >
                Demo{" "}
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
