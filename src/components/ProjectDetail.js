import React from "react";
import { Link } from 'react-router-dom';
import { projectInfo } from '../data/project-info';
import { Row, Col, Container } from "react-bootstrap";
import '../styles/ProjectDetail.css';
import { BsArrowLeft } from 'react-icons/bs';
import Overdrive from 'react-overdrive';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import _ from 'lodash';

const Bio = (props) => {

    const renderProject = () => {

        //find project whose id matches id in url
        const project = _.find(projectInfo, { id: props.projectId });

        //make sure project was found
        if (!project) {
            console.log("Could not find project");
        } else {

            return (
                <Overdrive id={project.id}>
                    <Container id="project-detail">
                        <Row>
                            <Col>
                                <header>
                                    <h1 className="project-detail-title">{project.title}</h1>
                                    <h2><span className="project-detail-stack">{project.stack}</span> <FaCode size="1em" /> <span className="project-detail-type">{project.type}</span></h2>
                                </header>
                            </Col>
                        </Row>
                        <Row>
                            {/* Description */}
                            <Col lg={3}>
                                <h2 className="project-detail-summary-header">Description:</h2>
                                <p className="project-detail-summary">
                                    {project.summary}
                                </p>
                            </Col>

                            {/* Website Image & Link */}
                            <Col lg={9}>
                                <div className="project-detail-image-container">
                                    <a className="project-detail-link" href={project.linkApp} target="_blank">
                                        <p>View App <BsBoxArrowUpRight /></p>
                                        <img className="project-detail-image" src={project.imageApp} alt="App Preview" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {/* Code Image & Link */}
                            <Col lg={9}>
                                <div className="project-detail-image-container">
                                    <a className="project-detail-link" href={project.linkCode} target="_blank">
                                        <p>View Code <BsBoxArrowUpRight /></p>
                                        <img className="project-detail-image" src={project.imageCode} alt="Code Sample" />
                                    </a>
                                </div>
                            </Col>

                            {/* Technologies */}
                            <Col lg={3}>
                                <h2 className="project-detail-summary-header">Technologies:</h2>
                                <p className="project-detail-summary">
                                    {project.tech}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Overdrive>
            )
        }
    }

    return (
        <Container id="project" fluid>
            <Row>
                <Col>
                    <header id="project-title">
                        <h1>Projects</h1>
                    </header>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div id="project-detail-container">
                        {/* return to projects page */}
                        <div className="back-link-container">
                            <Link to="/projects">
                                <button className="back-button">
                                    <BsArrowLeft /> Back
                                </button>
                            </Link>
                        </div>

                        {/* Project Details  */}
                        {renderProject()}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Bio;