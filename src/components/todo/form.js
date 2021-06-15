import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import formLogic from '../generics/formLogic.js';
import { postTask } from '../generics/api-handler.js'
import axios from 'axios';

// import LoginProvider from '../auth/loginContext.js'
import {LoginContext} from '../auth/loginContext.js';
import Auth from '../auth/auth.js'

function TodoForm(props) {

  const base = 'https://at-taskmanager.herokuapp.com/task';

  const[handleSubmit, handleChange, formData] = formLogic(newTask)
  const userContext = useContext(LoginContext);

  async function newTask(formData) {
    await postTask(formData)
  }

  useEffect(() => {

  }, [userContext.capabilities])

  if (props.loading) {
    <p>Loading...</p>
  } else {

  return (
    <>
      <header className="header">Add & Assign Activities</header>
      <Form id="form" data-testid="form" onSubmit={handleSubmit}>

        <Form.Group controlId="formTask">
          <Form.Label>New Task</Form.Label>
          <Form.Control type="text"
                        data-testid="task-input"
                        name="task"
                        placeholder="Task Description"
                        onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range"
                        data-testid="difficulty"
                        defaultValue="5"
                        min="1" max="10"
                        name="difficulty"
                        onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formPerson">
          <Form.Label>Assign the Task</Form.Label>
          <Form.Control type="text"
                        data-testid="personInput"
                        name="person"
                        placeholder="Name of Person"
                        onChange={handleChange} />
        </Form.Group>
        <Auth capability="create">
          <Button variant="primary" type="submit" data-testid="task-submit">
            Create New Task
          </Button>
        </Auth>
      </Form>
    </>
  );

}
}

export default TodoForm;
