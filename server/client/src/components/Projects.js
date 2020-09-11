import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Projects.css';
import Overdrive from 'react-overdrive';

const Projects = () => {
    return (
        <React.Fragment>
    
                    <Link to="/home">back</Link>
        <Overdrive id="projects">
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
        </Overdrive>
            
        </React.Fragment>
    )
}

export default Projects;