import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Main from './Main';
import Nav from './Nav';
import Bio from './Bio';
import Demo from './Demo';
import Cohort from './Cohort';

import "../styles/App.css";

const App = () => {
  return (
    <Container fluid id="app-view">
      <Row>
        <Col md={4}>

          {/* Side bar navigation */}
          <Nav />

        </Col>

        <Col md={8}>

          {/* Header */}
          <header>
            <h1>Joanna Pompeo</h1>
            <h2>Full Stack Software Engineer</h2>
          </header>

          {/* Main page*/}
          <Switch>

            {/* Default view */}
            {/* <Route exact path={["/", "/main"]} component={Main} /> */}

            {/* Bio */}
            <Route exact path="/bio" component={Bio} />

            {/* Write Track demo */}
            <Route exact path="/projects/write-track" component={Demo} />

            {/* Muze Networking/ Cohort project */}
            <Route exact path="/projects/cohort" component={Cohort} />


          </Switch>

        </Col>
      </Row>
    </Container>
  );
};

export default App;