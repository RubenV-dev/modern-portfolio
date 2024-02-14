import React from 'react';
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