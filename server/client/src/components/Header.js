import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../styles/Header.css'

const Header = () => {
  return (
    <header id="header-nav">


      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home" id="logo">
          <span id="header-name">Joanna Pompeo </span>
          {/* <br/> */} 	
          <span id="header-title"> &diams; Full Stack Software Engineer</span>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
          <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/projects/write-track">Write Track</NavDropdown.Item>
              <NavDropdown.Item href="/projects/cohort">Cohort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">Contact</Nav.Link>
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

export default Header;