import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

function Nav() {

  return (
    <Navbar bg="dark justify-content-between" variant="dark">
      <Navbar.Brand>Task Manager</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Username" className="mr-sm-2" />
        <Button variant="outline-info" type="submit">Login</Button>
      </Form>
    </Navbar>
  )

}

export default Nav;
