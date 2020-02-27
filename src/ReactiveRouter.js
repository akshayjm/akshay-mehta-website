import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Private from "./Pages/Private";
// import { observer, inject } from 'mobx-react/native';

// @inject('store')
// @observer
export default class ReactiveRouter extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/private">
            <Private />
          </Route>
        </Switch>
      </Router>
    );
  }
}