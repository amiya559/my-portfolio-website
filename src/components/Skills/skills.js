import React from "react";
import "./skills.css";
import javaIcon from "../../assets/java.png";
import reactIcon from "../../assets/react.png";
import otherIcon from "../../assets/other.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do?</span>
      <span className="skillDesc">
        I am having 2 YoE in
        <span className="introName"> Java Backend</span> and 1 YoE in
        <span className="introName"> React.js</span>. Currently working in one
        of the<span className="introName"> Big 4</span> firm
        <span className="introName"> Ernst & Young (EY)</span> as
        <span className="introName"> Java Consultant</span>.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={javaIcon}
            alt="Java Backend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Java Backend Development</h2>
            <p>
              Java, Spring Boot, Microservices, Spring Cloud, JUnit & Mockito
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={reactIcon}
            alt="React Frontend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>React Frontend Development</h2>
            <p>React, Javascript, React Hooks, React Redux, HTML, CSS</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={otherIcon} alt="Other" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Other</h2>
            <p>AWS, Apache Kafka, SQL, Camunda, Technical Writing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
