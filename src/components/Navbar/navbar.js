import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div class="deskTopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        class="desktopMenuButton"
        onClick={() => {
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <img src={contactImg} alt="contactImg" class="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
