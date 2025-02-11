import React from 'react';
import backgroundImg from '../assets/images/img1.jpg';
import './Services.css';

function Services() {
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
        color: "white",
      }}
      id="Services"
    >
      <div className="container" style={{
                borderRadius:"30px",
                border:"3px solid black",
                backdropFilter:"blur(10px)",
                padding:"30px",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop:"200px",
                paddingBottom: "100px",
                color: "white",
              }}>
        <h2 className="text-center mb-5">My Services</h2>
        <div className="row justify-content-center">

          {/* Web Development Card */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card service-card">
              <div className="card-body text-center">
                <h5 className="card-title">Web Development</h5>
                <hr className="divider" />
                <p className="card-text">
                  Build fast and responsive websites using React, Django, and modern web technologies.
                </p>
              </div>
            </div>
          </div>

          {/* API Development Card */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card service-card">
              <div className="card-body text-center">
                <h5 className="card-title">API Development</h5>
                <hr className="divider" />
                <p className="card-text">
                  Create secure and scalable REST APIs using Django REST Framework.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card service-card">
              <div className="card-body text-center">
                <h5 className="card-title">Tech Consultation</h5>
                <hr className="divider" />
                <p className="card-text">
                  Get guidance on software architecture, deployment, and best coding practices.
                </p>
              </div>
            </div>
          </div>

        </div>

      

      </div>
    </div>
  );
}

export default Services;
