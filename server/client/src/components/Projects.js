import React, { Component } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import '../styles/Projects.css';



class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: {
                project1: false,
                project2: false,
                project3: false,
                project4: false,
                project5: false,
                project6: false
            }
        }

    }

    renderProject = (projectNumber) => {
        const activeProject = `${this.state.isActive['project' + projectNumber]}`

        if (activeProject === false) {
            return (

                <div className="project-list-item static-view">
                    <h2 className="project-list-title">Title</h2>
                    <p className="project-list-summary">Summary/description</p>
                    <img src="" alt="Screenshot of project" />
                    <Button>Learn More</Button>

                </div>
            )
        } else {
            return (
                <div
                    className="project-list-item hover-view"
                    onMouseOver={this}
                >
                    <h2 className="project-list-type">Type</h2>
                    <p className="project-list-tech">Technologies</p>
                    <img src="" alt="Screenshot of project" />
                    <Button>Learn More</Button>

                </div>
            )
        }

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