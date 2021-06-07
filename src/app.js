import React from 'react';
import { Suspense } from 'react';
import NavBar from './components/layout/nav.js'
import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <Suspense fallback="loading...">
        <NavBar />
        <ToDo />
      </Suspense>
    );
  }
}
