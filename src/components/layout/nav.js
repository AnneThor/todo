import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import Auth from '../auth/auth.js'
import LoginProvider from '../auth/loginContext.js'
import Login from '../auth/signin.js'

function Nav() {

  const [signin, setSignin] = useState(true)

  return (
    <Router>
      <Navbar bg="dark justify-content-between" variant="dark">
        <Link to="/">
          <Navbar.Brand>Task Manager</Navbar.Brand>
        </Link>
        <Login />
      </Navbar>
    </Router>
  )

}

export default Nav;
