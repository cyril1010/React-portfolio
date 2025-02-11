import React from 'react';
import backgroundImg from '../assets/images/img4.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css';  

function Skills() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        color: "white",
        padding: "50px 0"
      }}
      id="Skills"
    >
      <div className="container">
        <h1 className="text-center mb-4">Skills</h1>
        
        <div className="glass-container p-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              
              {/* Python */}
              <h5>Python</h5>
              <ProgressBar animated striped variant="success" now={90} className="progress-bar-custom mb-3" />

              {/* Django */}
              <h5>Django</h5>
              <ProgressBar animated striped variant="info" now={80} className="progress-bar-custom mb-3" />

              {/* React */}
              <h5>React</h5>
              <ProgressBar animated striped variant="warning" now={60} className="progress-bar-custom mb-3" />

              {/* HTML - CSS  */}
              <h5>HTML - CSS </h5>
              <ProgressBar animated striped variant="success" now={85} className="progress-bar-custom mb-3" />

               {/* Javascript  */}
               <h5> Javascript </h5>
              <ProgressBar animated striped variant="danger" now={85} className="progress-bar-custom mb-3" />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
