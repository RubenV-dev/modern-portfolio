import React from 'react';
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
        <>
        <nav className="nav">
            <Link to="/modern-portfolio" className="nav-name-initials">
                <span>RV</span>
                <span id="period">.</span>
            </Link>
            <ul className="nav-routes">
                <li>
                    <Link to="/modern-portfolio/projects">Work</Link>
                </li>
                <li>
                    <Link to="/modern-portfolio/about">Story</Link>
                </li>
                <li>
                    <Link to="/modern-portfolio/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </>
    )
  } 
}