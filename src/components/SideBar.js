import React from "react";
import { useState } from "react/cjs/react.development";
import SideBarAcc from "./SideBarAcc";
import SideBarMenu from "./SideBarMenu";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="app__sidebar">
      <div className="app__sidebar--logo">
        <div className="d-none">
          <h1>hh</h1>
        </div>
        <h2 className="fw-light fs-4 text-uppercase d-flex align-items-center text-center m-0">
          THE
          <span className="text-primary fw-bold">dashboard</span>
        </h2>
        <div className="d-block d-sm-none">
          {isOpen ? (
            <IoMdClose
              color="white"
              className="icon"
              size={24}
              onClick={handleClose}
            />
          ) : (
            <BiMenu
              color="white"
              className="icon"
              size={24}
              onClick={handleOpen}
            />
          )}
        </div>
      </div>
      <div
        className={`app__sidebar--body ${
          isOpen ? "d-flex" : "d-none"
        } d-sm-flex`}
      >
        <div className="mb-5">
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
