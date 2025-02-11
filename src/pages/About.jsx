import React from 'react'
import backgroundImg from '../assets/images/img2.jpg'
function About({user}) {

    


  return (
      <div
          style={{
              backgroundImage:`url(${backgroundImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100%',
              color:"white"
          }}
      id="About">
  
          <div className="container">
              <div style={{paddingTop:"160px", width:"450px"}}>
                  <h1>About Me</h1><br></br>
                  
                  <h3>Name :  {user.Name}  </h3><hr></hr>
                  <h5>Place : {user.Place}  </h5><hr></hr>
                  <h5>Age :   {user.Age}  </h5><hr></hr>
                  <h5>Mobile : {user.Mobile} </h5><hr></hr>
                  <h5>Email : {user.Email}  </h5><hr></hr>
                  <h5>Skills : {user.Skills}  </h5><hr></hr>
                  <h5>Language spoken : {user.Languages} </h5><hr></hr>
              </div>
  
          </div>
  
  
      </div>
    )
}

export default About
