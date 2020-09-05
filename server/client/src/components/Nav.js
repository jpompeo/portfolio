import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Nav.css'

const Nav = () => {
    return (
        <Container fluid>
        <Row id="header">
            <Col>
                {/* <header>
                    <h1>Joanna Pompeo</h1>
                    <h2>Full Stack Software Engineer</h2>
                </header> */}
                <ul>
                <li><Link to="/bio">Bio</Link></li>
                <li><Link to="/projects/write-track">Write Track </Link></li>
                <li><Link to="/projects/cohort"> Muze</Link></li>
                </ul>
            </Col>
        </Row>
        </Container>
    )
}

export default Nav;