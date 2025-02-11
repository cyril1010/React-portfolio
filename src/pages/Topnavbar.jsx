import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Topnavbar() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#Home">PORTFOLIO</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#Home" eventKey="link-1">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href="#About">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" href="#Skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" href="#Services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5" href="#Qualification">Qualifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6" href="#Contact">Contact Me</Nav.Link>
        </Nav.Item>
        
      </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Topnavbar
