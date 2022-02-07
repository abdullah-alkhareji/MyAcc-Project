import React from "react";
import SideBarAcc from "./SideBarAcc";
import SideBarMenu from "./SideBarMenu";

const SideBar = () => {
  return (
    <div className="app__sidebar h-100">
      <div className="app__sidebar--logo">
        <h2 className="fw-light fs-4 text-uppercase d-flex align-items-center">
          THE
          <span className="text-primary fw-bold">"dashboard</span>
        </h2>
      </div>
      <div className="app__sidebar--body">
        <div className="">
          <SideBarMenu />
        </div>
        <div className="">
          <SideBarAcc />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
