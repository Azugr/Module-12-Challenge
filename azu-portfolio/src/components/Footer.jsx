import React from "react";
import "../styles/Footer.css";
import giticon from "../assets/images/giticon.png";
import linkedinicon from "../assets/images/linkedinicon.png";
import twittericon from "../assets/images/twittericon.png";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a2b4c", color: "white", textAlign: "center", padding: "1.5em 0" }}>
      <div className="icon-container">
        <a href="https://github.com/Azugr" target="_blank" rel="noopener noreferrer">
          <img src={giticon} className="icon" alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/draazucenagarcia" target="_blank" rel="noopener noreferrer">
          <img src={linkedinicon} className="icon" alt="LinkedIn Icon" />
        </a>
        <a href="https://x.com/AyudaRenal" target="_blank" rel="noopener noreferrer">
          <img src={twittericon} className="icon" alt="Twitter Icon" />
        </a>
      </div>
      <p>© 2025 Azugr. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


