import React from 'react';
// import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
        <>
        <nav className="nav">
            <Link to="/" className="nav-name-initials">
                <span>RV</span>
                <span id="period">.</span>
            </Link>
            <ul className="nav-routes">
                <li>
                    <Link to="/projects">Work</Link>
                </li>
                <li>
                    <Link to="/about">Story</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </>
    )
  } 
}