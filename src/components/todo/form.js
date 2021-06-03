import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

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
    <>

      <Form onSubmit={handleSubmit}>
        <h3>Add & Assign Activities</h3>
        <Form.Group controlId="formItem">
          <Form.Label>New Task</Form.Label>
          <Form.Control type="text"
                        name="text"
                        placeholder="Task Description"
                        onChange={e => setItem(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range"
                        defaultValue="5"
                        min="1" max="10" name="difficulty"
                        onChange={e => setLevel(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formItem">
          <Form.Label>Assign the Task</Form.Label>
          <Form.Control type="text"
                        name="assignee"
                        placeholder="Name of Person"
                        onChange={e => setPerson(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create New Task
        </Button>

      </Form>
    </>
  );

}

export default TodoForm;
