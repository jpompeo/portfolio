import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Main from './Main';
import HeaderNav from './HeaderNav';
import Bio from './Bio';
import Demo from './Demo';
import Cohort from './Cohort';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';


import "../styles/App.css";

const App = () => {
  return (
    <React.Fragment>

      {/* Header navigation */}
      < HeaderNav />

      <Container fluid id="app-view">
        <Row>
          <Col >

            {/* Main page*/}
            <Switch>

              {/* Default view */}
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path={"/main"} component={Main} />

              {/* Bio */}
              <Route exact path="/about" component={Bio} />

              {/* Projects */}
              <Route exact path="/projects" component={Projects} />

              {/* Contact */}
              <Route exact path="/contact" component={Contact} />

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