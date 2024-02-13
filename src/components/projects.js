import React from 'react';
import Iframe from 'react-iframe'
import Nav from './nav'

export default class Projects extends React.Component {
  render() {
    return (
        <>
        <Nav/>
        <div className="projects">
        <div className="proj-1">
            <div className="proj-des">
                <h3>Intake</h3>
                <p>
                    Nutrition tracker app with bmi calculator, food diary, workout suggestion feature and visual data analysis. 
                    Users are allowed to log in or create a new profile and add foods to their profiles that correspond to the 
                    foods they ate that day. Users will then be able to see total caloric, protein, carb and fat intake from the meals entered.
                    Useful to keep track of this info when you are trying to reach your fitness goals.
                </p>
                <p>Built with React, Redux, Hooks, React-vis, Ruby on Rails, Custom CSS. </p>
                <a href="https://github.com/RubenV-dev/intake-front-end">
                    Github Front - End
                </a>
                <a href="https://github.com/RubenV-dev/intake-back-end">
                    Github Back - End
                </a>
                <a href="https://www.youtube.com/watch?v=xaSPlHhiK6s">
                    Demo
                </a>
            <div className="proj-visual-small">
                <Iframe url="https://www.youtube.com/embed/xaSPlHhiK6s?rel=0"
                    width="100%"
                    height="100%"
                    display="initial"
                    SameSite="none"
                    position="relative"/>
            </div>
            </div>
            <div className="proj-visual">
                <Iframe url="https://www.youtube.com/embed/xaSPlHhiK6s?rel=0"
                    width="100%"
                    height="100%"
                    display="initial"
                    SameSite="none"
                    position="relative"/>
            </div>
        </div>

        <div className="proj-2">
            <div className="proj-des">
            <h3>K9 Strollers</h3>
            <p>
            Javascript maze game with character selection where users must reach the end of the maze using the arrow keys before 
            time runs out. Moving throughout the maze increases the user`s score. After time runs out, your total score is added 
            to the high score list. Play to have the highest score.
            </p>
            <p>
                Built with Javascript, Ruby on Rails, HTML Canvas, Custom CSS 
            </p>
            <a href="https://github.com/RubenV-dev/k9-stroller-js-app">
                Github Front - End
            </a>
            <a href="https://github.com/RubenV-dev/k9_stroller_api">
                Github Back - End
            </a>
            <a href="https://www.youtube.com/watch?v=YYJeTjUx9Og&feature=youtu.be">
                Demo
            </a>
            <div className="proj-visual-small">
                <Iframe url="https://www.youtube.com/embed/YYJeTjUx9Og?rel=0"
                    width="100%"
                    height="100%"
                    display="initial"
                    SameSite="none"
                    position="relative"/>
            </div>
            </div>
            <div className="proj-visual">
                <Iframe url="https://www.youtube.com/embed/YYJeTjUx9Og?rel=0"
                    width="100%"
                    height="100%"
                    display="initial"
                    SameSite="none"
                    position="relative"/>
            </div>
        </div>
        </div>
        </>
    )
  } 
}