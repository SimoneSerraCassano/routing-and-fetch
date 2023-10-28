import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";

function Main() {
  return (
    <div className="Main">
      <NavBar />

      <div className="content">
        <Outlet />
      </div>

      <TabBar />
    </div>
  );
}

export default Main;
