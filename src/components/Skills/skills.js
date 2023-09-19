import React from "react";
import "./skills.css";
import javaIcon from "../../assets/java.png";
import reactIcon from "../../assets/react.png";
import otherIcon from "../../assets/other.png";

const Skills = () => {
  return (
    <section id="skills">
      <span class="skillTitle">What I Do?</span>
      <span class="skillDesc">
        I am having 2 YoE in
        <span class="introName"> Java Backend</span> and 1 YoE in
        <span class="introName"> React.js</span>. Currently working in one of
        the<span class="introName"> Big 4</span> firm
        <span class="introName"> Ernst & Young (EY)</span> as
        <span class="introName"> Java Consultant</span>.
      </span>
      <div class="skillBars">
        <div class="skillBar">
          <img
            src={javaIcon}
            alt="Java Backend Development"
            class="skillBarImg"
          />
          <div class="skillBarText">
            <h2>Java Backend Development</h2>
            <p>
              Java, Spring Boot, Microservices, Spring Cloud, JUnit & Mockito
            </p>
          </div>
        </div>
        <div class="skillBar">
          <img
            src={reactIcon}
            alt="React Frontend Development"
            class="skillBarImg"
          />
          <div class="skillBarText">
            <h2>React Frontend Development</h2>
            <p>React, Javascript, React Hooks, React Redux, HTML, CSS</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={otherIcon} alt="Other" class="skillBarImg" />
          <div class="skillBarText">
            <h2>Other</h2>
            <p>AWS, Apache Kafka, SQL, Camunda, Technical Writing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
