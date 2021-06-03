import React, {useState, useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import { Container, Row, Col } from 'react-bootstrap';
import './todo.scss';

function ToDo() {

  const [list, setList] = useState([])

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    let updList = list.concat(item)
    setList(updList);
  };

  const toggleComplete = (id) => {
    let item = list.filter(item => item._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let updList = list.map(task => task._id === item._id ? item : task);
      setList(updList);
    }

  };

  // update doc title when list changes size
  useEffect( () => {
    document.title=`Task Manager: ${list.length} Open Tasks`
  }, [list])

  // passing empty array to say it doesn't track state updates
  // i.e. only happens once, at the first rendering
  useEffect( () => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list);
  }, [])

        // <h2>There are {list.filter(item => !item.complete).length} Items to Complete</h2>

  return (
    <Container fluid >
      <Row>
        <header className="header" data-testid="header">
          {list.length} Tasks Remain!
        </header>
      </Row>
      <Row className="todo">
        <Col>
          <TodoForm handleSubmit={addItem} />
        </Col>
        <Col>
          <TodoList
            list = {list}
            handleComplete ={toggleComplete} />
        </Col>
      </Row>
    </Container>
  );

}

export default ToDo;
