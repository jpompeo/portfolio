import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Skills.css'


const Skills = () => {
    return (
        <Container id="skills-text">
            {/* Front End Skills */}
            <Row>
                <Col>
                    <h2 className="skills-header">//Front End</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className="skills-list">
                        <li>React</li>
                        <li>Redux</li>
                        <li>Backbone</li>
                        <li>jQuery</li>
                    </ul>
                </Col>
                <Col>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </Col>
            </Row>

            {/* Back End Skills */}
            <Row>
                <Col>
                    <h2 className="skills-header">//Back End</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className="skills-list">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </Col>
                <Col>
                    <ul className="skills-list">
                        <li>SQL</li>
                        <li>Passport</li>
                        <li>Mocha / Chai</li>
                        <li>REST APIs</li>
                    </ul>
                </Col>
            </Row>

            {/* Additional Skills */}
            <Row>
                <Col>
                    <h2 className="skills-header">//Additional</h2>

                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className="skills-list">
                        <li>Socket.IO</li>
                        <li>Git</li>
                        <li>Swagger</li>
                        <li>Pair Programming</li>
                    </ul>
                </Col>
                <Col>
                    <ul className="skills-list">
                        <li>MVC</li>
                        <li>TDD</li>
                        <li>Agile</li>
                        <li>Remote Work</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;