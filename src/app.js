import React, { BrowserRouter, Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/nav.js'
import ToDo from './components/todo/todo.js';
import Signup from './components/auth/signup.js';
import SiteLogic from './context/siteLogic.js';
import LoginProvider from './components/auth/loginContext.js'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <LoginProvider>
        <SiteLogic>
            <Switch>
              <Route path="/">
                <Suspense fallback="loading...">
                  <NavBar />
                  <ToDo />
                </Suspense>
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </Switch>
        </SiteLogic>
        </LoginProvider>
      </Router>
    );
  }
}
