import React from 'react';
import azugr from '../assets/images/azugr.png';

export default function AboutPage() {
  return (
    <div className="container pt-5">
      <div className="card shadow-lg p-4">
        <div className="row align-items-center">
          {/* Profile Image - Centered, No Circle */}
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img
              src={azugr}
              className="img-fluid rounded mx-auto d-block border border-primary shadow-sm"
              alt="Azucena Garcia"
            />
          </div>

          {/* About Me Text */}
          <div className="col-md-9">
            <h2 className="fw-bold">About Me</h2>
            <p className="lead text-justify">
              I am a dedicated Nephrologist with over 20 years of experience in the medical field. I hold a master's degree in health administration and have extensive experience in healthcare project management and strategic planning. My passion lies in improving patient care through innovative digital solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-icons bg-light text-center mt-5 p-4 rounded shadow-sm">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto">
              <i className="bi bi-window text-primary display-4"></i>
              <h3 className="fw-bold mt-2">Medical Expertise & Leadership</h3>
              <p className="text-muted">
                20+ years as a Nephrologist with a master's in health administration. Experience in healthcare project management & strategic planning. 
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto">
              <i className="bi bi-layers text-primary display-4"></i>
              <h3 className="fw-bold mt-2">Tech Transition & Development</h3>
              <p className="text-muted">
              Developing expertise to merge healthcare and technology into innovative digital solutions: 
                  JavaScript
                  React 
                  Node.js
                  Git 
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto">
              <i className="bi bi-terminal text-primary display-4"></i>
              <h3 className="fw-bold mt-2">Vision & Future Goals</h3>
              <p className="text-muted">
              Passionate about improving patient care and healthcare accessibility through digital transformation and software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
