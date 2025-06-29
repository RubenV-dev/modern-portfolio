import React from 'react';
import Iframe from 'react-iframe'
import Nav from './nav'

export default class Projects extends React.Component {
  render() {
    return (
        <>
        <Nav/>
        <h3>Work Samples:</h3>
        <div className="card-container">
            <div className="proj-card">
                <h3>Pinniped Auth Provider</h3>
                <p>Authentication Supervisor Integration with backstage</p>
                <p>Built with: <span class="yellow-text">Typescript, React</span></p>
                <a href="https://github.com/backstage/backstage/pull/19846"
                    target="_blank"
                    rel="noopener noreferrer"> 
                Merged PR </a>
            </div>
            <div className="proj-card">
                <h3>Metadata cache</h3>
                <p>Add a metadata cache for the Pinniped Authentication Provider</p>
                <p>Built with: <span class="yellow-text">Typescript, React</span></p>
                <a href="https://github.com/backstage/backstage/pull/20909" target="_blank" rel="noopener noreferrer"> Merged PR</a>
            </div>
            <div className="proj-card">
                <h3>Seperate OIDC module migration</h3>
                <p>Migrate OIDC authentication provider to seperate module for auth-backend plugin in backstage</p>
                <p>Built with: <span class="yellow-text">Typescript, React</span></p>
                <a href="https://github.com/backstage/backstage/pull/20282" target="_blank" rel="noopener noreferrer"> Merged PR</a>
            </div>
            <div className="proj-card">
                <h3>Enable Server Side Authentication</h3>
                <p>Utilized Kubernetes Auth Proxy on backstage to allow for generalized request handling</p>
                <p>Built with: <span class="yellow-text">Typescript, React</span></p>
                <a href="https://github.com/backstage/backstage/pull/16649" target="_blank" rel="noopener noreferrer"> Merged PR</a>
            </div>
            <div className="proj-card">
                <h3>Kubernetes-backend proxy client plugin</h3>
                <p>Add a reusable kubernetes-backend proxy client to allow plugins to make generalized requests</p>
                <p>Built with: <span class="yellow-text">Typescript, React</span></p>
                <a href="https://github.com/backstage/backstage/pull/17121" target="_blank" rel="noopener noreferrer"> Merged PR</a>
            </div>
            <div className="proj-card">
                <h3>PermissionPolicy toggle for Kubernetes Proxy</h3>
                <p>Add a permission policy toggle for proxy endpoint to disable use</p>
                <p>Built with: <span class="yellow-text">Typescript, React</span></p>
                <a href="https://github.com/backstage/backstage/pull/16237" target="_blank" rel="noopener noreferrer"> Merged PR</a>
            </div>
            
        </div>

        <h3>Projects:</h3>
        <div className="card-container">
            <div className="proj-card">
                    <h3>Intake</h3>
                    <p>
                        Nutrition tracker app with bmi calculator, food diary, workout suggestion feature and visual data analysis. 
                        Users are allowed to log in or create a new profile and add foods to their profiles that correspond to the 
                        foods they ate that day. Users will then be able to see total caloric, protein, carb and fat intake from the meals entered.
                        Useful to keep track of this info when you are trying to reach your fitness goals.
                    </p>
                    <p>Built with: <span class="yellow-text">React, Redux, Hooks, React-vis, Ruby on Rails</span>.</p>

                    <a href="https://github.com/RubenV-dev/intake-front-end" target="_blank" rel="noopener noreferrer">
                        Front-End
                    </a>
                    <a href="https://github.com/RubenV-dev/intake-back-end" target="_blank" rel="noopener noreferrer">
                        Back-End
                    </a>
                    <a href="https://www.youtube.com/watch?v=xaSPlHhiK6s" target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                </div>

            <div className="proj-card">
                <h3>K9 Strollers</h3>
                <p>
                Javascript maze game with character selection where users must reach the end of the maze using the arrow keys before 
                time runs out. Moving throughout the maze increases the user`s score. After time runs out, your total score is added 
                to the high score list. Play to have the highest score.
                </p>
                <p>
                    Built with: <span class="yellow-text">Javascript, Ruby on Rails, HTML Canvas</span>.
                </p>
                <a href="https://github.com/RubenV-dev/k9-stroller-js-app" target="_blank" rel="noopener noreferrer">
                    Front - End
                </a>
                <a href="https://github.com/RubenV-dev/k9_stroller_api" target="_blank" rel="noopener noreferrer">
                    Back - End
                </a>
                <a href="https://www.youtube.com/watch?v=YYJeTjUx9Og&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                    Demo
                </a>
                </div>

        </div>
        </>
    )
  } 
}