import React from 'react';
import backgroundImg from '../assets/images/img1.jpg';
import './Contact.css'

function Contact() {
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
      id="Contact"
    >
      <div className="container">
        <div className="row justify-content-center">
          
          {/* Contact Card */}
          <div className="col-12 col-sm-8 col-md-6">
            <div className="card contact-card">
              <div className="card-body text-center">
                <h3 className="card-title">Contact Me</h3>
                <hr className="divider" />
                <p className="card-text"><br />
                  <strong>Email:</strong> cyril.k.u.2002@gmail.com <br /><br />
                  <strong>Phone:</strong> +91 790 718 8859 <br />
                </p> <br></br>
                <div className="social-icons"><i>
                    <a href="https://drive.google.com/file/d/1OO-EtZHyJR_L4SZAliTYKRjno40UXpGx/view?usp=drive_link" className="btn btn-outline-danger text-white btn-sm m-2">Resume</a>
                    <a href="https://www.linkedin.com/in/cyril-k-u/" className="btn btn-outline-info text-white btn-sm m-2">LinkedIn</a>
                    <a href="https://github.com/cyril1010" className="btn btn-outline-warning text-white btn-sm m-2">GitHub</a></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
