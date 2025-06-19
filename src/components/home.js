import React from 'react';
import Nav from './nav'
import { IoLogoJavascript } from 'react-icons/io'
import { DiRuby, DiPostgresql } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineMedium, AiOutlineJava, AiOutlineKubernetes } from 'react-icons/ai'
import { TbBrandTypescript } from 'react-icons/tb'
import { SiMysql, SiRubyonrails } from "react-icons/si"
import { BiLogoSpringBoot } from "react-icons/bi"

export default class Home extends React.Component {
  render() {
    const profileImgUrl = "https://i.imgur.com/dOIUmth.jpeg"
    const croppedProfileImgUrl = "https://i.imgur.com/cl4M6ge.jpeg"
    return (
        <div className="home-page">
            <Nav />
            <div className="home-left-split">
                <h2 id="first-name">Ruben</h2>
                <h2 id="last-name"> Vallejo</h2>
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
                        <IoLogoJavascript size="4.2rem"/>
                        <p>Javascript</p>
                    </li>
                    <li>
                        <TbBrandTypescript size="4.2rem"/>
                        <p>Typescript</p>
                    </li>
                    <li>
                        <DiRuby size="4.2rem"/>
                        <p>Ruby</p>
                    </li>
                    <li>
                        <AiOutlineJava size="4.2rem"/>
                        <p>Java</p>
                    </li>
                    <li>
                        <FaReact size="4.2rem"/>
                        <p>React</p>
                    </li>
                    <li>
                        <AiOutlineKubernetes size="4.2rem" />
                        <p>Kubernetes</p>
                    </li>
                    <li>
                        <SiRubyonrails size="4.2rem"/>
                        <p>Ruby on Rails</p>
                    </li>
                    <li>
                        <BiLogoSpringBoot size="4.2rem"/>
                        <p>SpringBoot</p>
                    </li>
                    <li>
                        <SiMysql size="4.2rem"/>
                        <p>MySql</p>
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
                src={croppedProfileImgUrl}
                alt="profile pic"
                referrerPolicy="no-referrer"    
                />
            </div>
        </div>
    )
  } 
}