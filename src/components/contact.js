import React from "react";
import { FiMail } from "react-icons/fi";
import Nav from "./nav";
import { AiOutlineLinkedin } from "react-icons/ai";

export default class Icon extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="contacts min-h-svh w-full flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-yellow-500/30 hover:shadow-yellow-500/5">
            {/* Header Area */}
            <div className="border-b border-slate-800/80 pb-6 mb-8">
              <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">
                Get In Touch
              </h2>
              <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
                Open to discussing any work opportunities
              </h1>
            </div>

            {/* Interaction Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card Component */}
              <a
                href="mailto:RubenVallejo101@gmail.com"
                className="flex items-center gap-4 bg-slate-950 border border-slate-800/60 p-4 rounded-xl transition-all duration-300 hover:border-yellow-500/40 hover:bg-slate-900/40 group"
              >
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-red-500 group-hover:text-yellow-500 transition-colors duration-300 text-xl shrink-0">
                  <FiMail />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-0.5">
                    Email Me
                  </p>
                  <p className="text-sm font-medium text-slate-300 truncate">
                    RubenVallejo101@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn Card Component */}
              <a
                href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-950 border border-slate-800/60 p-4 rounded-xl transition-all duration-300 hover:border-yellow-500/40 hover:bg-slate-900/40 group"
              >
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-red-500 group-hover:text-yellow-500 transition-colors duration-300 text-xl shrink-0">
                  <AiOutlineLinkedin />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-0.5">
                    Connect
                  </p>
                  <p className="text-sm font-medium text-slate-300 truncate">
                    linkedin.com/in/ruben-vallejo...
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
