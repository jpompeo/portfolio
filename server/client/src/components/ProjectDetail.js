import React from "react";
import { Link } from 'react-router-dom';
import { projectInfo } from '../data/project-info';
import { Row, Col, Container, Button } from "react-bootstrap";
import '../styles/ProjectDetail.css';
import { BsArrowLeft } from 'react-icons/bs';
import Overdrive from 'react-overdrive';

const Bio = (props) => {

    const renderProject = () => {
        //get project number from url path (last character) and subtract 1 for project index
        const projectIndex = Number(props.location.pathname.split('').pop()) - 1;
        const project = projectInfo[projectIndex];

        return (
            <Overdrive id={project.id}>
                <Container id="project-detail">
                    <Row>
                        {/* Description */}
                        <Col>
                        </Col>

                        {/* Website Image & Link */}
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        {/* Technologies */}
                        <Col>
                        </Col>

                        {/* Code Image & Link */}
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </Overdrive>
        )
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