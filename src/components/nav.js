import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="flex items-center justify-center md:justify-between px-6 md:px-10 lg:px-24 py-3 gap-8 md:gap-0">
          <Link
            to="/"
            className="text-3xl font-black tracking-widest hover:text-yellow-500 transition-colors duration-300"
          >
            <span>RV</span>
            <span className="text-red-500">.</span>
          </Link>
          <ul className="flex items-center gap-4 md:gap-8 lg:gap-12 text-xl font-semibold tracking-widest">
            <li className="hover:text-yellow-500 transition-colors duration-300">
              <Link to="/projects">Work</Link>
            </li>
            <li className="hover:text-yellow-500 transition-colors duration-300">
              <Link to="/about">Story</Link>
            </li>
            <li className="hover:text-yellow-500 transition-colors duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
