import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-black text-start">
    <Container>
      <Navbar.Brand href="#home" className='bg-white text-start'>Arasta Park AVM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto border border-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">New Product</Nav.Link>
          <Nav.Link href="#link">Product List</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default MyNavbar