import React from "react";
import { FaFilePdf } from 'react-icons/fa'; 
import resumePDF from "../assets/resume/Maria_Azucena_Garcia_Resume.pdf"; 
import "../styles/resume.css";

const Resume = () => {
  return (
    <section className="container py-5 text-center">
      <h2 className="mb-4">Resume</h2>
      <p className="text-muted">Download my resume and check out my technical skills.</p>

      {/* Resume Download Button */}
      <a href={resumePDF} download="Maria_Azucena_Garcia_Resume.pdf" className="btn btn-danger btn-lg my-3">
        <FaFilePdf className="me-2" />
        Download Resume
      </a>

      {/* Proficiencies */}
      <h4 className="mt-4">Technical Proficiencies</h4>
      <ul className="list-group list-group-flush text-start mx-auto" style={{ maxWidth: "500px" }}>
        <li className="list-group-item">HTML5 & CSS3</li>
        <li className="list-group-item">JavaScript (ES6+)</li>
        <li className="list-group-item">React & Redux</li>
        <li className="list-group-item">Node.js & Express</li>
        <li className="list-group-item">PostgreSQL & MongoDB</li>
        <li className="list-group-item">Bootstrap & Tailwind CSS</li>
        <li className="list-group-item">RESTful APIs</li>
        <li className="list-group-item">Git & GitHub</li>
      </ul>
    </section>
  );
};

export default Resume;


