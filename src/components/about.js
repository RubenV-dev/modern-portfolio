import React from 'react';
import Nav from './nav'

export default class About extends React.Component {
  render() {
    return (
        <>
        <Nav/>
        <div className="about">
            <p className="description">
              Full Stack Web Developer with 3 years experience creating and testing product features and deployments.
              I also have years of experience in the healthcare/research sector and bring strong analytical 
              skills to technical projects along with strong customer support experience obtained from working 
              directly with patients.
            </p>

            <p>
              Open source contributor to &nbsp;
              <a href="https://github.com/backstage/backstage"
              target="_blank"
              rel="noopener noreferrer">
              Backstage OSS.
              </a>
            </p>

            <ul>
              <li>
                <span style={{color: "red"}}>Experienced Languages</span>: Javascript, Typescript, Java, Ruby</li>

              <li>
                <span style={{color: "red"}}>Experienced Frameworks</span>: Rails, React, SpringBoot</li>

              <li>
                <span style={{color: "red"}}>Experienced Tools</span>: Docker, Kubernetes, AWS ECS and EKS, 
                Azure AKS with AD, Google GKE</li> 
            </ul>

        </div>
        </>
    )
  } 
}