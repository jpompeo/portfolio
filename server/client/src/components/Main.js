import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Main.css';
import Bio from './Bio';
import Demo from './Demo';

const Main = () => {
    return (
        <Container fluid>
            <Row id="main-page">
                <Col lg={5}>
                    {/* Headshot and Bio */}
                    <Bio/>
                </Col>
                <Col lg={7}>
                    {/* Final project demo video */}
                    <Demo/>

                    <div>
                        Links
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;