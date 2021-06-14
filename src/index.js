import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';

import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  render() {
    return (
      <CookiesProvider>
        <App />;
      </CookiesProvider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
