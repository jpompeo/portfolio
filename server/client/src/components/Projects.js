import React, { Component } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import '../styles/Projects.css';
import { projectInfo } from '../data/project-info';

class Projects extends Component {
    constructor(props) {
        super();


    }

    renderProject = (projectNumber) => {
        const project = projectInfo[projectNumber - 1];

        return (
            <div className="project-list-item">
                <h2 className="project-list-title">{project.title}</h2>
                <p className="project-list-type">{project.stack} - <em>{project.type}</em></p>
                <img src={project.imageMain} alt="Screenshot of project" />
                <Button>Learn More</Button>
            </div>
        )
    }

    render() {
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
                                    {this.renderProject(1)}

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
}

export default Projects;