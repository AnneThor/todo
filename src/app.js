import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/layout/nav.js'
import ToDo from './components/todo/todo.js';
import Signup from './components/auth/signup.js';
import SiteLogic from './context/siteLogic.js';
import LoginProvider from './components/auth/loginContext.js'

export default class App extends React.Component {
  render() {
    return (

        <SiteLogic>
          <LoginProvider>
              <NavBar />
              <Suspense fallback="loading...">
                <ToDo />
              </Suspense>
          </LoginProvider>
        </SiteLogic>

    );
  }
}
