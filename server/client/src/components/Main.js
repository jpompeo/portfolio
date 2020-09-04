import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import '../styles/Main.css';
import Bio from './Bio';
import Demo from './Demo';
import Cohort from "./Cohort";

const Main = () => {
    return (
        <Container fluid>
            <Row id="main-page">
                <Col lg={5}>
                    {/* Headshot and Bio */}
                    <Bio />
                </Col>
                <Col lg={7}>
                    <Carousel>

                        {/* Final project w/demo*/}
                        <Carousel.Item>
                            <Demo />
                        </Carousel.Item>

                        {/* Cohort Project w/demo */}
                        <Carousel.Item>
                            <Cohort/>
                        </Carousel.Item>

                    </Carousel>

                    <div>
                        Links
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;