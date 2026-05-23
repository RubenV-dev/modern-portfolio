import React from "react";
import { Outlet } from "react-router-dom";

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-container text-white w-full h-full bg-[url('https://i.imgur.com/dbpOZ8z.jpeg')] bg-cover bg-center bg-no-repeat">
        <Outlet />
      </div>
    );
  }
}
