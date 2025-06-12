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
            Open Source contributor to 
            <a href="https://github.com/backstage/backstage"
            target="_blank"
            rel="noopener noreferrer">
            Backstage OSS.
            </a>
            </p>

            <li>Experienced developing software products in Javascript, Typescript, Java and Ruby.</li>

            <li>Experienced with frameworks: Rails, React, SpringBoot.</li>

            <li>Skilled with using the following tools: Containerization using Docker, Kubernetes, and cloud 
            application deployments using AWS ECS and EKS, Azure AKS with ADD, and Google GKE.</li> 
        </div>
        </>
    )
  } 
}