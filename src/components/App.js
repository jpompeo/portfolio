import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import HeaderNav from './HeaderNav';
import About from './About';
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';
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

            {/* Main view*/}
            <Switch>

              {/* Home page */}
              <Route exact path={["/", "/home"]} component={Home} />

              {/* Bio */}
              <Route exact path="/about" component={About} />

              {/* Projects */}
              <Route exact path="/projects" component={ProjectList} />

              {/* Contact */}
              <Route exact path="/contact" component={Contact} />

              {/* Project Details */}
              <Route path="/projects/:id" render={(routerProps) => (
                <ProjectDetail  projectId={routerProps.match.params.id}/>
              )}/>

            </Switch>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;