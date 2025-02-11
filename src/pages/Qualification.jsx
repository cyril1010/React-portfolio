import React from 'react';
import backgroundImg from '../assets/images/img5.jpg';
import './Qualification.css';

function Qualification() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: "100px",
        paddingBottom: "100px",
        minHeight: '100vh',
        width: '100%',
        color: "white"
      }}
      id="Qualification"
    >
      <div className="container">
        <div className="row g-4 justify-content-center">

          {/* Education Card */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card glassmorphism">
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <p className="card-text">
                  <strong>2020 - 2024</strong><br />
                  <p>Bachelors in Computer Science and Engineering</p>
                  <p className="italic-text">APJ Abdul Kalam Technological University</p>
                </p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card glassmorphism">
              <div className="card-body">
                <h5 className="card-title">Experience</h5>
                <p className="card-text">
                  <strong>2024 - 2025</strong><br />
                  <p>Python Developer Intern</p>
                  <p className="italic-text">Luminar Technolab, Kakkanad</p>
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Card */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card glassmorphism">
              <div className="card-body">
                <h5 className="card-title">Technologies</h5>
                <p className="card-text">
                  <strong>Frontend</strong>
                  <ul>
                    <li>HTML - CSS - JS</li>
                    <li>Bootstrap 5</li>
                    <li>React</li>
                  </ul>
                  <strong>Backend</strong>
                  <ul>
                    <li>Python Django</li>
                    <li>Django REST Framework</li>
                    <li>Postman</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Qualification;
