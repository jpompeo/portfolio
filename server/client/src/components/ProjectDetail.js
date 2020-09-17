import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container, Button } from "react-bootstrap";
import '../styles/ProjectDetail.css';
import { BsArrowLeft } from 'react-icons/bs';
import Overdrive from 'react-overdrive';

const Bio = () => {

    const renderProject = () => {
        return (
            <Overdrive id="project-transition">
                <div id="project-detail">

                </div>
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