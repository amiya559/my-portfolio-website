import React from "react";
import "./intro.css";
import imageBg from "../../assets/image.png";
import btnImage from "../../assets/hireme.png";
import imgAmiya from "../../assets/Amiya.jpg";
import imgAmiyaWhiteBg from "../../assets/Amiya Passport Size.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div class="introContent">
        <span class="hello">Hello,</span>
        <span class="introText">
          I'm <span class="introName">Amiya Rout</span>
          <br />
          Java Full Stack Developer
        </span>
        <p class="introPara">
          Having 2 Years Working Experience in Java Backend and <br /> 1 Year
          Working Experience in React.js!!
        </p>
        <Link>
          <button class="btn">
            <img src={btnImage} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={imageBg} alt="Profile" class="bgImg" />
    </section>
  );
};

export default Intro;
