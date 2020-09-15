import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Contact.css';
import { BsEnvelopeFill } from 'react-icons/bs';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';


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
                <Col>
                    {/* Bio */}
                    <div id="contact-list-container">
                        <div id="contact-list">

                            {/* Email */}
                            <a href="mailto:joannapompeo@gmail.com">
                                <div>
                                    {/* <img src="" className="contact-icon" alt="Email icon" /> */}
                                    <div className="contact-icon">
                                        <BsEnvelopeFill
                                            size="3.5em"
                                            // color="rgba(27, 36, 47, .6)"
                                        />
                                    </div>
                                        <p className="contact-header">Email</p>
                                    {/* <p className="contact-info">joannapompeo@gmail.com</p> */}
                                </div>
                            </a>

                            {/* Phone */}
                            {/* <a href="tel:561-236-1615">
                                <div>
                                    <p className="contact-header">Phone</p>
                                    <div className="contact-icon">
                                        <MdPhoneAndroid
                                            size="3em"
                                            // color="rgba(27, 36, 47, .6)"
                                        />
                                    </div>
                                    <p className="contact-info">561-236-1615</p>
                                </div>
                            </a> */}

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/joanna-pompeo" target="_blank">
                                <div>
                                    <div className="contact-icon">
                                        <FaLinkedin
                                            size="3.5em"
                                            // color="rgba(27, 36, 47, .6)"
                                        />
                                    </div>
                                    <p className="contact-header">LinkedIn</p>
                                    {/* <p className="contact-info">Connect</p> */}
                                </div>
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/jpompeo" target="_blank">
                                <div>
                                    <div className="contact-icon">
                                        <SiGithub
                                            className="contact-icon2"
                                            size="3.5em"
                                            // color="rgba(27, 36, 47, .6)"
                                        />
                                    </div>
                                    <p className="contact-header">GitHub</p>
                                    {/* <p className="contact-info">Check out my code</p> */}
                                </div>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;