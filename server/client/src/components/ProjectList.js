import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Projects.css';
import { projectInfo } from '../data/project-info';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiArrowRightUpLine } from 'react-icons/ri';

class ProjectList extends Component {
    constructor(props) {
        super();
    }

    renderProjects = () => {
        console.log(projectInfo);

        return projectInfo.map((project, index) => {
            return (
                <Col key={index} className="project-list-col">
                    <div className="project-list-item">
                        <h3 className="project-list-stack">{project.stack}</h3>
                        <p className="project-list-type">{project.type}</p>
                        <img className="project-thumbnail" src={project.imageMain} alt="Screenshot of project" />
                        <div className="project-list-title-container">
                        <h2 className="project-list-title">{project.title}</h2>
                        </div>
                        <Link to="/projects/write-track">
                            <button type="button" className="view-project-button">
                                Learn More 
                                <span className="hide"><BsBoxArrowUpRight/></span>
                            </button>
                        </Link>
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

export default ProjectList;