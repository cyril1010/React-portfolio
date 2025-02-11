import React from 'react'
import backgroundImg from '../assets/images/img4.jpg'

function Home() {
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
    id="Home">

        <div className="container">
            <div style={{paddingTop:"160px", width:"450px"}}>
                <h2>Hello there..! </h2>
                <h1>I'm <span style={{color:"red",fontSize:"50px"}}>C</span>yril</h1><hr></hr>
                <h2>Software Engineer</h2>
                <p style={{fontStyle:"italic"}}>I am a Computer Science graduate skilled in Python backend development, specializing in Django and REST APIs. Developed scalable full-stack projects, including job portals and eCommerce solutions. Passionate about backend engineering and API development</p>
                <button className='btn btn-outline-danger text-white'>Contact me</button>
            </div>

        </div>


    </div>
  )
}

export default Home
