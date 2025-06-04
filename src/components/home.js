import React from 'react';
import Nav from './nav'
import { IoLogoJavascript } from 'react-icons/io'
import { DiRuby } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { DiPostgresql } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineMedium } from 'react-icons/ai'

export default class Home extends React.Component {
  render() {
    const croppedImgUrl = "https://i.imgur.com/d62ZeTH.png"
    const profileImgUrl = "https://i.imgur.com/d62ZeTH.png"
    return (
        <div className="home-page">
            <Nav />
            <div className="home-left-split">
                <h2 id="first-name">Ruben</h2>
                <h2 id="last-name"> Vallejo</h2>
                <img 
                className="sml-profile-pic" 
                src={croppedImgUrl}
                alt="profile pic"
                referrerPolicy="no-referrer"    
                />
                <p id="home-intro">Hello. Im a Full Stack Software Engineer currently based 
                    in New York City. 
                </p>
                <ul className="icon-links">
                    <li>
                        <a href="https://github.com/RubenV-dev"
                        target="_blank"
                        rel="noopener noreferrer" >
                            <FiGithub size="2rem" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                        target="_blank"
                        rel="noopener noreferrer" >
                            <AiOutlineLinkedin size="2rem"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@rv.results"
                        target="_blank"
                        rel="noopener noreferrer" >
                            <AiOutlineMedium size="2rem"/>
                        </a>
                    </li>
                </ul>
                <ul className="skills">
                    <li>
                        <DiRuby size="4.2rem"/>
                        <p>Ruby</p>
                    </li>
                    <li>
                        <IoLogoJavascript size="4.2rem"/>
                        <p>Javascript</p>
                    </li>
                    <li>
                        <FaReact size="4.2rem"/>
                        <p>React</p>
                    </li>
                    <li>
                        <AiOutlineHtml5 size="4.2rem"/>
                        <p>HTML5</p>
                    </li>
                    <li>
                        <DiPostgresql size="4.2rem"/>
                        <p>PostgreSQL</p>
                    </li>
                </ul>
            </div>
            <div className="home-right-split">
                <img 
                className="profile-pic" 
                src={profileImgUrl}
                alt="profile pic"
                referrerPolicy="no-referrer"    
                />
            </div>
        </div>
    )
  } 
}