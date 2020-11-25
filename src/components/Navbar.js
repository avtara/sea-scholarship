import React from "react";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu />
      </label>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <a href="#roadmap">home</a>
        </li>
        <li>
          <a href="wad">program</a>
        </li>
        <li>
          <a href="wad">apply here</a>
        </li>
        <li>
          <a href="wad">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
