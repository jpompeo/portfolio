import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import '../styles/Main.css';
import Bio from './Bio';
import Demo from './Demo';
import Cohort from "./Cohort";
import WordCloud from '../assets/wordcloud.jpg';



const Main = () => {
    return (
        <Container fluid>
            <Row id="main-page">
                <Col>
                    <div id="wordcloud">
                        {/* <img src={WordCloud} alt="wordcloud" /> */}
                        Main Page
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;