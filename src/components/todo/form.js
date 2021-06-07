import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import formLogic from '../generics/formLogic.js';
import { postTask } from '../generics/api-handler.js'
import axios from 'axios';

function TodoForm(props) {

  const base = 'https://at-taskmanager.herokuapp.com/task';

  const[handleSubmit, handleChange, formData] = formLogic(newTask)

  async function newTask(formData) {
    await postTask(formData)
  }

  if (props.loading) {
    <p>Loading...</p>
  } else {

  return (

      <>
      <header className="header">Add & Assign Activities</header>
      <Form id="form" data-testid="form" onSubmit={handleSubmit}>

        <Form.Group controlId="formItem">
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

        <Form.Group controlId="formItem">
          <Form.Label>Assign the Task</Form.Label>
          <Form.Control type="text"
                        data-testid="personInput"
                        name="person"
                        placeholder="Name of Person"
                        onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" data-testid="task-submit">
          Create New Task
        </Button>

      </Form>
      </>
  );

}

}

export default TodoForm;
