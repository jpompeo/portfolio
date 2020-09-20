import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/About.css';
import JoannaHeadshot from '../assets/headshot1.jpg';
import Bio from './Bio';
import Skills from './Skills';
import { BsArrowRight } from 'react-icons/bs';

class About extends Component {
    constructor(props) {
        super();

        this.state = {
            showBio: true
        }
    }

    renderBio = () => {
        if (this.state.showBio) {
            return (
                <React.Fragment>
                    <Bio />
                    <div className="toggle-button-container">
                        <button className="bio-toggle"
                            onClick={e => {
                                this.setState({ showBio: false })
                            }}
                        >
                            Skills <BsArrowRight/>
                        </button>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Skills />
                    <div className="toggle-button-container">
                        <button className="bio-toggle"
                            onClick={e => {
                                this.setState({ showBio: true })
                            }}
                        >
                            Bio <BsArrowRight/>
                        </button>
                    </div>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <Container id="about" fluid>
                <Row>
                    <Col>
                        {/* <Link to="/home">
                        <Button className="back-button">&larr; menu</Button>
                    </Link> */}
                        <header id="about-title">
                            <h1>About Me</h1>
                        </header>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} md={5} lg={5}>
                        {/* Headshot */}
                        {/* <div id="headshot-container"> */}
                        <img id="headshot" src={JoannaHeadshot} alt="Joanna Headshot" />
                        {/* </div> */}
                    </Col>

                    <Col sm={6} md={7} lg={7}>
                        {/* Bio & Skills */}
                        <div id="about-text-container">
                            {this.renderBio()}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;