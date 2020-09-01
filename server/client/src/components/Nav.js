import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Nav.css'

const Nav = () => {
    return (
        <Row id="header">
            <Col>
                <header>
                    <h1>Joanna Pompeo</h1>
                    <h2>Full Stack Software Engineer</h2>
                </header>
            </Col>
        </Row>
    )
}

export default Nav;