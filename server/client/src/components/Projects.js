import React, { Component } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import '../styles/Projects.css';
import { projectInfo } from '../data/project-info';

class Projects extends Component {
    constructor(props) {
        super();

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
        const activeProject = this.state.isActive[`project${projectNumber}`];
        console.log("Active project", activeProject);
        const project = projectInfo[`project${projectNumber}`];
        console.log(projectInfo);

        return (
            <React.Fragment>
                <h2 className="project-list-title">{project.title}</h2>

                {/* Default view */}
                <div
                    className={activeProject ? "static-view hide" : "static-view"}
                >
                    <img src={project.imageUrl} alt="Screenshot of project" />
                    <h2 className="project-list-type">{project.type}</h2>
                </div>

                {/* Hover view */}
                <div
                    className={activeProject ? "hover-view" : "hover-view hide"}
                >
                    <p className="project-list-summary">{project.summary}</p>
                    <p className="project-list-tech">{project.tech}</p>
                    <Button>Learn More</Button>
                </div>

            </React.Fragment>
        )
    }

    toggleActive = (projectNumber) => {
        console.log("Mouseenter");
        // if (this.state.isActive[`project${projectNumber}`] === false) {
        const activeProjects = { ...this.state.isActive }
        activeProjects[`project${projectNumber}`] = true;
        this.setState({ isActive: activeProjects });
        // }
    }

    toggleInactive = (projectNumber) => {
        console.log("Mouse leave")
        const activeProjects = { ...this.state.isActive }
        activeProjects[`project${projectNumber}`] = false;
        this.setState({ isActive: activeProjects });
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
                                    <div
                                        className="project-list-item"
                                        onMouseEnter={event => this.toggleActive(1)}
                                        onMouseLeave={event => this.toggleInactive(1)}
                                    >
                                        {this.renderProject(1)}
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