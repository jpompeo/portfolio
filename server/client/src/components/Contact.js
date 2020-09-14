import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Contact.css';

const Contact = () => {
    return (
        <Container id="contact" fluid>
            <Row>
                <Col>
                    {/* <Link to="/home">
                        <Button className="back-button">&larr; menu</Button>
                    </Link> */}
                    <header id="contact-title">
                        <h1>Contact Me</h1>
                    </header>
                </Col>
            </Row>

            <Row>
                {/* <Col sm={6} md={5} lg={5}>
                     Headshot 
                    <div id="headshot-container">
                        <img id="contact-image" src="" alt="" />
                    </div>
                </Col> */}

                <Col>
                    {/* Bio */}
                        <div id="contact-list-container">
                            <ul id="contact-list">
                            <li>
                                <img src="" className="contact-icon" alt="Email icon"/>
                                <p className="contact-header">Email</p>
                                <p className="contact-info">
                                    <a href="mailto:joannapompeo@gmail.com">joannapompeo@gmail.com</a>
                                </p>
                            </li>
                            <li>
                            <img src="" className="contact-icon" alt="Phone icon"/>
                                <p className="contact-header">Phone</p>
                                <p className="contact-info">
                                    <a href="tel:561-236-1615">561-236-1615</a>
                                </p>
                            </li>
                            <li>
                            <img src="" className="contact-icon" alt="LinkedIn icon"/>
                                <p className="contact-header">LinkedIn</p>
                                <p className="contact-info"><a href="https://www.linkedin.com/in/joanna-pompeo">Connect</a></p>
                            </li>
                            <li>
                            <img src="" className="contact-icon" alt="GitHub icon"/>
                                <p className="contact-header">GitHub</p>
                                <p className="contact-info">
                                    <a href="https://github.com/jpompeo">Check out my Code</a>
                                </p>
                            </li>
                            </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;