import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import '../styles/Main.css';
import Bio from './Bio';
import Demo from './Demo';
import Cohort from "./Cohort";
import WordCloud from '../assets/wordcloud.jpg';
import styled, { keyframes } from 'styled-components';
import { merge, bounceIn, fadeIn, zoomIn } from 'react-animations';

const zoomAnimation = keyframes`${zoomIn}`;
const ZoomyDiv = styled.div`
  animation: 1s ${zoomAnimation};
`;
const bounceAnimation = keyframes`${bounceIn}`;
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = () => {
        if (this.state.menuOpen === false) {
            this.setState({ menuOpen: true })
        } else {
            this.setState({ menuOpen: false })
        }
    }

    renderMenu = () => {

        return (
            <React.Fragment>
                <h1>Menu:</h1>
                <div id="menu">
                    <div 
                        id="menu-center"
                        onClick={event => {this.toggleMenu()}}
                    >
                       
                    </div>

                    <div 
                        id="menu-items" 
                        className={this.state.menuOpen === true ? "" : "hide"}
                    >
                        <BouncyDiv id="item-1" className="menu-item">

                        </BouncyDiv>
                        <BouncyDiv id="item-2" className="menu-item">

                        </BouncyDiv>
                        <BouncyDiv id="item-3" className="menu-item">

                        </BouncyDiv>
                        <BouncyDiv id="item-4" className="menu-item">

                        </BouncyDiv>
                        <ZoomyDiv id="item-5" className="menu-filler">

                        </ZoomyDiv>
                        <ZoomyDiv id="item-6" className="menu-filler">

                        </ZoomyDiv>
                        <ZoomyDiv id="item-7" className="menu-filler">

                        </ZoomyDiv>
                        <ZoomyDiv id="item-8" className="menu-filler">

                        </ZoomyDiv>
                    </div>
                </div>

            </React.Fragment >
        )
    }


    render() {
        return (
            // <Container fluid>
            //     <Row id="main-page">
            //         <Col>
            <div id="main-page-menu-container">

                {this.renderMenu()}
            </div>
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
}

export default Main;