import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../styles/HeaderNav.css'

const HeaderNav = () => {
  return (
    <header id="header-nav">


      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/" id="logo">
          <span id="header-name">
            <span className="logo-initials">J</span>oanna <span className="logo-initials">P</span>ompeo 
          </span>
          <br/> 	
         <span id="header-title">  Full Stack Software Engineer </span>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
          <Nav id="header-nav-links">
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>



    // <Container fluid>
    // <Row id="header">
    //     <Col>
    //         {/* <header>
    //             <h1>Joanna Pompeo</h1>
    //             <h2>Full Stack Software Engineer</h2>
    //         </header> */}
    //         <ul>
    //         <li><Link to="/bio">Bio</Link></li>
    //         <li><Link to="/projects/write-track">Write Track </Link></li>
    //         <li><Link to="/projects/cohort"> Muze</Link></li>
    //         </ul>
    //     </Col>
    // </Row>
    // </Container>
  )
}

export default HeaderNav;