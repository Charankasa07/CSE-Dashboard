import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from '../Assets/Logonew.png'
import "./Header.css";

function Header() {
  const [active, setactive] = useState("nav-menu");
  const [toggleIcon, settoggleIcon] = useState("nav-toggler");
  const navtoggle = () => {
    active === "nav-menu"
      ? setactive("nav-menu nav-active")
      : setactive("nav-menu");
    toggleIcon === "nav-toggler"
      ? settoggleIcon("nav-toggler toggle")
      : settoggleIcon("nav-toggler");
  };
  return (
    <nav className="nav">
      <p className="title">CSE Placements</p>
      <ul className={active}>
        <li className="nav-item">
          <Link to="/"> Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/update"> Update</Link>
        </li>
        <li className="nav-item">
          <Link to="/get-details">Student's Information</Link>
        </li>
      </ul>
      <div onClick={navtoggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
