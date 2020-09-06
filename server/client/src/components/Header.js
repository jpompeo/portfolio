import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../styles/Header.css'

const Header = () => {
  return (
    <header id="header-nav">

    
    <Navbar  collapseOnSelect expand="lg">
  <Navbar.Brand href="#home">Joanna Pompeo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/main">Active</Nav.Link>
      <Nav.Link href="/bio">Bio</Nav.Link>
      <Nav.Link href="/projects/write-track">Write Track</Nav.Link>
      <Nav.Link href="/projects/cohort">Cohort</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/projects/write-track">Write Track</NavDropdown.Item>
        <NavDropdown.Item href="/projects/cohort">Cohort</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
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