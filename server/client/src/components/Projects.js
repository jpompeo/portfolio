import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Projects.css';

const Projects = () => {
    return (
        <Container id="projects" fluid>
            <Row>
                <Col>
                    <header id="projects-title">
                        <h1>Projects</h1>
                    </header>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container id="projects-list-container">
                        <Row>

                            <Col>
                                <div className="project-list-item">
                                    Project 1
                                </div>
                            </Col>

                            <Col>
                                <div className="project-list-item">
                                    Project 2
                                </div>
                            </Col>

                            <Col>
                                <div className="project-list-item">
                                    Project 3
                                </div>
                            </Col>

                        </Row>
                        <Row>

                            <Col>
                                <div className="project-list-item">
                                    Project 4
                                </div>
                            </Col>

                            <Col>
                                <div className="project-list-item">
                                    Project 5
                                </div>
                            </Col>

                            <Col>
                                <div className="project-list-item">
                                    Project 6
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container >
    )
}

export default Projects;