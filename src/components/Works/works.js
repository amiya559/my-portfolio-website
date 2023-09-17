import React from "react";
import "./works.css";
import PortFolio1 from "../../assets/portfolio-1.png";
import PortFolio2 from "../../assets/portfolio-2.png";
import PortFolio3 from "../../assets/portfolio-3.png";

const Works = () => {
  return (
    <section id="works">
      <h2 class="worksTitle">My Portfolio</h2>
      <span class="worksDesc">
        Having 2 Years Working Experience in Java Backend and 1 Year Working
        Experience in React.js!!
      </span>
      <div class="worksImgs">
        <img src={PortFolio1} alt="PortFolio1" class="worksImg" />
        <img src={PortFolio2} alt="PortFolio2" class="worksImg" />
        <img src={PortFolio3} alt="PortFolio3" class="worksImg" />
      </div>
      <button class="workBtn">See More</button>
    </section>
  );
};

export default Works;
