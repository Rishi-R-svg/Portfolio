import React, { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
import "./Media.css";
import "./Navbar.css";
import sun from "../assets/sun.svg";

import { ChangeContext } from "../App";

const Navbar = () => {
  let { isimgtrue, setbool } = useContext(ChangeContext);
  const [isOpened, settOpened] = useState(true);

  const closingtag = "/>";
  const opening = "<";

  function handleimg() {
    setbool((prevtheme) => !prevtheme);
  }

  function handlehamclick() {
    console.log("loged");
    if (isOpened === true) {
      settOpened(false);
    } else {
      settOpened(true);
    }
  }

  return (
    <nav
      className="nav"
      style={{ backgroundColor: isimgtrue ? "Black" : "black" }}
    >
      <div className="logo">
        <span>{opening}</span>Portfolio <span>{closingtag}</span>
      </div>

      <ul className={isOpened ? "nonemenu" : "navactive anieff"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "Active-Nav" : " ")}
            onClick={()=>settOpened(true)}
          >
            Who am I?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Skills"
            className={({ isActive }) => (isActive ? "Active-Nav" : " ")}
            onClick={()=>settOpened(true)}
          >
            Tools I Wield{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            
            className={({ isActive }) => (isActive ? "Active-Nav" : " ")}
            onClick={()=>settOpened(true)}
          >
            {" "}
            What I Make{" "}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "Active-Nav" : " ")}
            onClick={()=>settOpened(true)}
          >
            Let's Talk
          </NavLink>
        </li>
      </ul>

      <div className={isimgtrue ? "theme-box active" : "theme-box"}>
        <div
          className={isimgtrue ? "toggle-circle active" : "toggle-circle"}
          onClick={handleimg}
        >
          <img src={sun} alt="" className={isimgtrue ? " img active" : "img"} />
        </div>
      </div>

      <div
        className={isOpened ? "hamburger-menu" : "hamburger-menu active"}
        onClick={handlehamclick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </nav>
  );
};

export default Navbar;
