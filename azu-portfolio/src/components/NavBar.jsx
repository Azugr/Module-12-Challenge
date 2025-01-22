import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="branding">Azucena Garcia's Portfolio</Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/">About Me</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

