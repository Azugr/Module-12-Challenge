import React from 'react';
import logoClassM8 from '../assets/images/logo classm8.png';
import sherlock from '../assets/images/sherlock.png';
import sqldb from '../assets/images/sqldb.png';
import weather from '../assets/images/weather.png';
import engineer from '../assets/images/engineer.png';
import readme from '../assets/images/readme.png';

import '../styles/portfolio.css'; 

export default function Portfolio() {
  const projects = [
    {
      title: "Sherlock Numerical",
      imageSrc: sherlock,
      appLink: "https://alessandrojuleo.github.io/Sherlock-Numerical/",
      repoLink: "https://github.com/AlessandroJuleo/Sherlock-Numerical"
    },
    {
      title: "Classm8",
      imageSrc: logoClassM8,
      appLink: "https://classm8.onrender.com/",
      repoLink: "https://github.com/sieke13/project2"
    },
    {
      title: "Employee Tracker",
      imageSrc: sqldb,
      appLink: "Coming Soon",
      repoLink: "https://github.com/Azugr/Module-10-Challenge"
    },
    {
      title: "Weather Dashboard",
      imageSrc: weather,
      appLink: "https://module-9-challenge-yvco.onrender.com/",
      repoLink: "https://github.com/Azugr/Module-9-Challenge"
    },
    {
      title: "Vehicle Builder",
      imageSrc: engineer,
      appLink: "Coming Soon",
      repoLink: "https://github.com/Azugr/Module-8-Challenge"
    },
    {
      title: "Professional README Generator",
      imageSrc: readme, // Corrected variable name
      appLink: "Coming Soon",
      repoLink: "https://github.com/Azugr/Module-7-Challenge"
    }
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            {project.appLink !== "Coming Soon" ? (
              <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                <img src={project.imageSrc} alt={project.title} className="portfolio-image" />
              </a>
            ) : (
              <img src={project.imageSrc} alt="Placeholder" className="portfolio-image" />
            )}
            <p>
              {project.appLink.toLowerCase() !== "coming soon" ? (
                <a href={project.appLink} target="_blank" rel="noopener noreferrer">Live App</a>
              ) : (
                <span className="coming-soon-text">Live App Coming Soon</span>
              )}
              <br />
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}