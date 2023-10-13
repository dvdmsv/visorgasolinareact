import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function BarraNavegacion(){
  return(
    <Navbar expand="lg" className="fixed-top bg-body-tertiary justify-content-center navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">VisorGasolina</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Diésel/Gasoil</Nav.Link>
              <Nav.Link href="#action2">Diésel Premium</Nav.Link>
              <Nav.Link href="#action3">Gasolina 95</Nav.Link>
              <Nav.Link href="#action4">Diésel Premium</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;