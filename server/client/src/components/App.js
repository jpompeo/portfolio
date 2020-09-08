import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Main from './Main';
import Header from './Header';
import Bio from './Bio';
import Demo from './Demo';
import Cohort from './Cohort';
import Projects from './Projects';



import "../styles/App.css";

const App = () => {
  return (
    <React.Fragment>

      {/* Header navigation */}
      < Header />

      <Container fluid id="app-view">
        <Row>
          <Col >

            {/* Main page*/}
            <Switch>

              {/* Default view */}
              <Route exact path={["/", "/home"]} component={Main} />

              {/* Bio */}
              <Route exact path="/about" component={Bio} />

              {/* Projects */}
              <Route exact path="/projects" component={Projects} />

              {/* Write Track demo */}
              <Route exact path="/projects/write-track" component={Demo} />

              {/* Muze Networking/ Cohort project */}
              <Route exact path="/projects/cohort" component={Cohort} />

            </Switch>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;