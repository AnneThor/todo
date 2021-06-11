import React from 'react';
import { Suspense } from 'react';
import NavBar from './components/layout/nav.js'
import ToDo from './components/todo/todo.js';
import SiteLogic from './context/siteLogic.js';

export default class App extends React.Component {
  render() {
    return (
      <SiteLogic>
        <Suspense fallback="loading...">
          <NavBar />
          <ToDo />
        </Suspense>
      </SiteLogic>
    );
  }
}
