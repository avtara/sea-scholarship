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
          <a href="#">home</a>
        </li>
        <li>
          <a href="#program">program</a>
        </li>
        <li>
          <a href="#faculty-section">partner universities</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
