import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

function Nav() {

  return (
    <Navbar className="bg-light justify-content-between">
      <h2>Task Manager</h2>
      <Form inline>
        <FormControl type="text" placeholder="Username" className=" mr-sm-2" />
        <Button type="submit">Login</Button>
      </Form>
    </Navbar>
  )

}

export default Nav;
