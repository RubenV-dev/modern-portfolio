import React from 'react';
// import { FiMail, FiPhone } from 'react-icons/fi'
import Nav from './nav'
import { IoLogoJavascript } from 'react-icons/io'
import { DiRuby } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { DiPostgresql } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMedium } from 'react-icons/ai'

export default class Home extends React.Component {
  render() {
    const profileImgUrl = "https://i.imgur.com/IufJfiJ.jpg"
    return (
        <div className="home-page">
            <div className="home-left-split">
                <Nav />
                <h2 id="first-name">Ruben</h2>
                <h2 id="last-name"> Vallejo.</h2>
                <img 
                className="sml-profile-pic" 
                src={profileImgUrl}
                alt="profile pic"
                referrerPolicy="no-referrer"    
                />
                <p id="home-intro">Hello. Im a Full Stack Software Engineer currently based 
                    in New York City. 
                </p>
                <ul className="icon-links">
                    <li id="hello-button"> 
                        <a href="mailto:RubenVallejo101@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Say Hello
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ruben_will/"
                        target="_blank" >
                            <AiOutlineInstagram size="2rem"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/RubenV-dev"
                        target="_blank" >
                            <FiGithub size="2rem" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                        target="_blank" >
                            <AiOutlineLinkedin size="2rem"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@rv.results"
                        target="_blank" >
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