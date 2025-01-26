import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* Branding on the left */}
        <Navbar.Brand className="branding">Azucena Garcia's Portfolio</Navbar.Brand>

        {/* Navigation links aligned to the extreme right */}
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="ms-auto nav-links">
          <Nav.Link as={Link} to="/">About Me</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/Resume">Resume</Nav.Link>
        </Nav>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;



