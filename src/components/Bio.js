import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Bio.css';
import JoannaHeadshot from '../assets/headshot1.jpg';

const Bio = () => {
    return (
        <Container id="bio" fluid>
            <Row>
                <Col>
                    {/* <Link to="/home">
                        <Button className="back-button">&larr; menu</Button>
                    </Link> */}
                    <header id="bio-title">
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
                    {/* Bio */}
                    <div id="bio-text-container">
                        <div id="bio-text">
                            <p className="first-paragraph">
                                Full Stack Software Engineer with a background in Team Leadership and Customer Service. My past experience has given me opportunities to enhance my communication skills and collaborate with diverse teams, as well as helping me strengthen my ability to keep a calm and positive attitude even in high-pressure situations.
                        </p>
                            <p>
                                My desire for growth and new challenges, combined with a love for learning, problem-solving, and creativity led me down the path of technology. In the past year I have discovered a passion for programming and have dedicated myself to building my skills and investing in my education in order to make this career shift into Software Engineering. I am loving what I’m doing and excited to bring my passion and experience with me on this journey.
                        </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Bio;