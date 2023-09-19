import React from "react";
import "./intro.css";
import btnImage from "../../assets/hireme.png";
import imgAmiya from "../../assets/Amiya-Image.png";

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
          Having in-depth knowledge of <span class="introName">Java</span> and{" "}
          <span class="introName">React.js</span> Technology <br /> and total
          experience of <span class="introName">2 Years</span> in the software
          industry. <br /> Please click on the below "Hire Me" button to find
          out <br /> how I might contribute and add value to your next project.
        </p>
        <a href={`mailto:arrout29@gmail.com`}>
          <button class="btn">
            <img src={btnImage} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </a>
      </div>
      <img src={imgAmiya} alt="Profile" class="bgImg" />
    </section>
  );
};

export default Intro;
