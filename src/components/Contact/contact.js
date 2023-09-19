import React, { useRef } from "react";
import "./contact.css";
import LinkedIn from "../../assets/facebook-icon.png";
import GitHub from "../../assets/twitter.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_poxtixq",
        "template_nqlvy9h",
        form.current,
        "PG2ZPBqxErFa9vWg8"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span class="contactDesc">
          Having 2 Years Working Experience in Java Backend and 1 Year Working
          Experience in React.js!!
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            class="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            class="email"
            placeholder="Your Email"
            name="from_email"
          />
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
