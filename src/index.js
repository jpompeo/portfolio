import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import "bootstrap/dist/css/bootstrap.css";
import './styles/index.css'

ReactDOM.render(
    <BrowserRouter>
      <Fragment>
          <App/>
      </Fragment>
    </BrowserRouter>,
  document.getElementById("root")
);
