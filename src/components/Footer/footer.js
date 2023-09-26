import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} All Rights Reserved | Made with ❤️ by Amiya
      Rout
    </footer>
  );
};

export default Footer;
