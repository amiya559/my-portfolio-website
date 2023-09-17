import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span class="skillTitle">What I Do?</span>
      <span class="skillDesc">
        Having 2 Years Working Experience in Java Backend and 1 Year Working
        Experience in React.js!!
      </span>
      <div class="skillBars">
        <div class="skillBar">
          <img src={UIDesign} alt="UIDesign" class="skillBarImg" />
          <div class="skillBarText">
            <h2>Java</h2>
            <p>Demo Content</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={WebDesign} alt="WebDesign" class="skillBarImg" />
          <div class="skillBarText">
            <h2>Spring Boot</h2>
            <p>Demo Content</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={AppDesign} alt="AppDesign" class="skillBarImg" />
          <div class="skillBarText">
            <h2>Microservices</h2>
            <p>Demo Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
