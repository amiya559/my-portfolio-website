import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import LinkedIn from "../../assets/facebook-icon.png";
import GitHub from "../../assets/twitter.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 class="contactPageTitle">My Clients</h1>
        <p class="clientDesc">
          Having 2 Years Working Experience in Java Backend and 1 Year Working
          Experience in React.js!!
        </p>
        <div class="clientImgs">
          <img src={Walmart} alt="Walmart" class="clientImg" />
          <img src={Microsoft} alt="Microsoft" class="clientImg" />
          <img src={Adobe} alt="Adobe" class="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span class="contactDesc">
          Having 2 Years Working Experience in Java Backend and 1 Year Working
          Experience in React.js!!
        </span>
        <form className="contactForm">
          <input type="text" class="name" placeholder="Your Name" />
          <input type="email" class="email" placeholder="Your Email" />
          <textarea
            className="message"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" class="submitBtn">
            Submit
          </button>
          <div class="iconLinks">
            <img src={LinkedIn} alt="LinkedIn" class="iconLink" />
            <img src={GitHub} alt="GitHub" class="iconLink" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
