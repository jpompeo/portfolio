import React from "react";
import { Switch, Route, Link } from "react-router-dom";
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
                
                    <Switch>

                        {/* Final project w/demo*/}
                            <Route exact path="/projects/write-track" component={Demo} />
                       
                        {/* Cohort Project w/demo */}
                            <Route exact path="/projects/cohort" component={Cohort} />

                    </Switch>

                    <div>
                        Links
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;