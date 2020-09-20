import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div id="home-page-container">
            <Container fluid >
                <Row>
                    <Col>
                        <div id="home-background">

                            <div id="home">
                                <div id="home-text">
                                    <h1> Hi! I'm Joanna, </h1>
                                    <h2>a developer who loves designing and building cool things</h2>
                                    <Link to="/projects">
                                        <button>Enter</button>
                                    </Link>
                                    <h1> Come see what I'm passionate about...</h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Home;