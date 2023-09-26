import React from "react";
import "./intro.css";
import btnImage from "../../assets/hireme.png";
import imgAmiya from "../../assets/Amiya-Image.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Amiya Rout</span>
          <br />
          Java Full Stack Developer
        </span>
        <p className="introPara">
          Having in-depth knowledge of <span className="introName">Java</span> and{" "}
          <span className="introName">React.js</span> Technology <br /> and total
          experience of <span className="introName">2 Years</span> in the software
          industry. <br /> Please click on the below "Hire Me" button to find
          out <br /> how I might contribute and add value to your next project.
        </p>
        <a href={process.env.EMAIL}>
          <button className="btn">
            <img src={btnImage} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </a>
      </div>
      <img src={imgAmiya} alt="Profile" className="bgImg" />
    </section>
  );
};

export default Intro;
