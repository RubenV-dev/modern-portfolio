import React from 'react';
import Nav from './nav'

export default class About extends React.Component {
  render() {
    return (
        <>
        <Nav/>
        <div className="about">
            <p className="description">Full Stack Web Developer with experience creating, maintaining, and testing software deployments at scale. Skilled in React, 
            JavaScript, Ruby/Rails, SQL, Java, Spring Boot, Docker, Kubernetes, and deploying applications to AWS EKS, Azure AKS with ADD, and Google GKE. Active open 
            source contributor with an interest in feature creation and optimization. With 3 years experience at a large tech company, I bring strong analytical skills 
            to technical projects with a compelling desire to build products and features that create an impact.
            </p>
        </div>
        </>
    )
  } 
}