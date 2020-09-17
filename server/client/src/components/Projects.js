import React, { Component } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import '../styles/Projects.css';
import { projectInfo } from '../data/project-info';

class Projects extends Component {
    constructor(props) {
        super();
    }

    renderProjects = () => {
        console.log(projectInfo);

        return projectInfo.map((project, index) => {
            return (
                <Col key={index} className="project-list-col">
                    <div className="project-list-item">
                        <h2 className="project-list-title">{project.title}</h2>
                        <p className="project-list-type">{project.stack} - <em>{project.type}</em></p>
                        <div className="spacer">
                        <img src={project.imageMain} alt="Screenshot of project" />

                        </div>
                        <Button>Learn More</Button>
                    </div>
                </Col>
            )
        })
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
                        <Container fluid id="projects-list-container">
                            <Row>
                                {/* Projects (list/summary view)*/}
                                {this.renderProjects()}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Projects;