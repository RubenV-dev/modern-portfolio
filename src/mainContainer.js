import React from 'react';
// import About from './components/about'
// import Contact from './components/contact'
// import Projects from './components/projects'
// import Home from './components/home'
import { Outlet } from "react-router-dom";

export default class MainContainer extends React.Component {
  render() {
    return (
        <div className="main-container">
            <Outlet/>
        </div>
    )
  } 
}