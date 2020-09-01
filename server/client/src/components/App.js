import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Main from './Main'
import Nav from './Nav'

import "../styles/App.css";

const App = () => {
  return (
    <Container fluid id="app-view">

      {/* Header */}
      <Nav/>

      <Switch>
        {/* Default/List View */}
        <Route exact path={["/", "/main"]} component={Main} />
      </Switch>

    </Container>
  );
};

export default App;