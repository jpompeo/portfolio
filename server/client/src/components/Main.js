import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import '../styles/Main.css';
import Bio from './Bio';
import Demo from './Demo';
import Cohort from "./Cohort";
import WordCloud from '../assets/wordcloud.jpg';
import styled, { keyframes } from 'styled-components';
import { merge, bounceIn, fadeIn, zoomIn, rotateIn, fadeOut } from 'react-animations';
import Overdrive from 'react-overdrive';

//animations
const zoomAnimation = keyframes`${zoomIn}`;
const bounceInAnimation = keyframes`${bounceIn}`;
const rotateAnimation = keyframes`${rotateIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

//animated styled divs
const ZoomyDiv = styled.div`
  animation: 1s ${zoomAnimation};
`;

const FadeyDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceInAnimation};
  background-color: green;
  &:hover {
    transition: all .3s ease-in-out;
    transform: scale(1.2);
  }
`;


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: true
        }
    }

    toggleMenuOpen = () => {
        this.setState({ menuOpen: true })
    }

    toggleMenuClosed = () => {
        this.setState({ menuOpen: false })
    }

    renderMenu = () => {

        return (
            <React.Fragment>
                <div
                    id="menu"
                // onMouseOver={event => { this.toggleMenuOpen() }}
                // onMouseLeave={event => { this.toggleMenuClosed() }}
                >
                    <FadeyDiv
                        id="menu-center"

                    // className={this.state.menuOpen === true ? "hide" : ""}
                    >
                        <div
                            id="menu-center-content"
                        // onMouseEnter={event => { this.toggleMenu() }}
                        >
                            <h1 id="menu-name">Joanna Pompeo</h1>
                            <h2 id="menu-title">
                                Full Stack
                                <br />
                                Software Engineer
                            </h2>
                        </div>
                    </FadeyDiv>

                    <div
                        id="menu-items"
                        className={this.state.menuOpen === true ? "" : "hide"}
                    >

                        {/* Top */}
                        <Link to="/projects">
                            <ZoomyDiv id="item-1" className="menu-item">
                                <h2>Projects</h2>
                            </ZoomyDiv>
                        </Link>

                        {/* Left */}
                        <Link to="/about">
                            <ZoomyDiv id="item-2" className="menu-item">
                                <h2>About</h2>
                            </ZoomyDiv>
                        </Link>

                        {/* Right */}
                        <Link to="/contact">
                            <ZoomyDiv id="item-3" className="menu-item">
                                <h2>Contact</h2>
                            </ZoomyDiv>
                        </Link>

                        {/* Bottom */}
                        <Link to="/resume">
                            <ZoomyDiv id="item-4" className="menu-item">
                                <h2>Resum&eacute;</h2>
                            </ZoomyDiv>
                        </Link>

                        {/* Spacers - Empty menu items */}
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