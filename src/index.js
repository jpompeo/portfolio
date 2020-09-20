import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './components/App';
import Home from './components/Home';
import HeaderNav from './components/HeaderNav';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.css";
import './styles/index.css'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Fragment>
          <App/>
      </Fragment>
    </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);
