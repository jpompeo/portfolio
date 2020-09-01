import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/Main.css'

const Main = () => {
    return (
        <Container>
            <Row id="main-page">
                <Col lg={4}>
                    <div>
                        Headshot
                    </div>
                    <div>
                        Bio
                    </div>
                </Col>
                <Col lg={8}>
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