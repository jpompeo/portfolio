import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Main.css';
import Bio from './Bio';

const Main = () => {
    return (
        <Container fluid>
            <Row id="main-page">
                <Col lg={5}>
                    <Bio/>
                </Col>
                <Col lg={7}>
                    <div>
                        Demo
                    </div>
                    <div>
                        Links
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;