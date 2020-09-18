import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import '../styles/ProjectList.css';
import { projectInfo } from '../data/project-info';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { CgArrowTopRightR } from 'react-icons/cg';
import Overdrive from 'react-overdrive';

const ProjectList = () => {


    const renderProjects = () => {

        return projectInfo.map((project) => {
            return (
                <Col key={project.id} className="project-list-col">
                    <div className="project-list-item">
                        <div className="project-list-title-container">
                            <h2 className="project-list-title">{project.title}</h2>
                        </div>
                        <img className="project-thumbnail" src={project.imageApp} alt="Screenshot of project" />
                        <h3 className="project-list-stack">{project.stack}</h3>
                        <p className="project-list-type">{project.type}</p>
                        <Link to={`/projects/${project.id}`}>
                            <Overdrive
                                id={project.id}
                                animationDelay={1}
                            // easing={1}
                            >
                                <button type="button" className="view-project-button">
                                    Learn More
                                <span className="hide"> <BsBoxArrowUpRight /></span>
                                </button>
                            </Overdrive>
                        </Link>
                    </div>
                </Col>
            )
        })
    }

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
                            {renderProjects()}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container >
    )
}

export default ProjectList;