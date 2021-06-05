import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import formLogic from '../generics/formLogic.js';

function TodoForm(props) {

  const [item, setItem] = useState('')
  const [level, setLevel] = useState('1')
  const [person, setPerson] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let newItem = { text: item, difficulty: level, assignee: person }
    props.handleSubmit(newItem);
    setItem('');
    setLevel('1');
    setPerson('');
  };

  return (
      <Form id="form" data-testid="form" onSubmit={handleSubmit}>
        <h3>Add & Assign Activities</h3>
        <Form.Group controlId="formItem">
          <Form.Label>New Task</Form.Label>
          <Form.Control type="text"
                        data-testid="task-input"
                        name="text"
                        placeholder="Task Description"
                        onChange={e => setItem(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range"
                        data-testid="difficulty"
                        defaultValue="5"
                        min="1" max="10" name="difficulty"
                        onChange={e => setLevel(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formItem">
          <Form.Label>Assign the Task</Form.Label>
          <Form.Control type="text"
                        data-testid="personInput"
                        name="assignee"
                        placeholder="Name of Person"
                        onChange={e => setPerson(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" data-testid="task-submit">
          Create New Task
        </Button>

      </Form>
  );

}

export default TodoForm;
