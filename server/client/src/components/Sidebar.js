import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Nav } from "react-bootstrap";
import '../styles/Sidebar.css'

const Sidebar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/main">Active</Nav.Link>
  <Nav.Link href="/bio">Bio</Nav.Link>
  <Nav.Link href="/projects/write-track">Write Track</Nav.Link>
  <Nav.Link href="/projects/cohort">Cohort</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>


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

export default Sidebar;