import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Button } from "react-bootstrap";
import '../styles/Projects.css';
import Overdrive from 'react-overdrive';

const Projects = () => {
    return (
        <React.Fragment>

            <Link to="/home">
                <Button className="back-button">&larr; menu</Button>
            </Link>

            <Container id="project-list" fluid>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="project-list-item">

                        </div>
                    </Col>
                    <Col>
                        <div className="project-list-item">

                        </div>
                    </Col>
                    <Col>
                        <div className="project-list-item">

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="project-list-item">

                        </div>
                    </Col>
                    <Col>
                        <div className="project-list-item">

                        </div>
                    </Col>
                    <Col>
                        <div className="project-list-item">

                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Projects;