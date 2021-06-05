import React, {useState, useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap';
import './todo.scss';

function ToDo() {

  const base = 'https://at-taskmanager.herokuapp.com/task';
  const [list, setList] = useState([]);

  // update doc title when list changes size
  useEffect( () => {
    document.title=`Task Manager: ${list.length} Open Tasks`
  }, [list])

  // passing empty array to say it doesn't track state updates
  // i.e. only happens once, at the first rendering
  useEffect( async () => {
    try {
      let list = await axios.get(base)
      setList(list);
    } catch(err) {
      console.log(err)
    }
  }, [])

  return (
    <Container fluid >
      <Row>
        <header className="header" data-testid="header">
          {list.length} Tasks Remain!
        </header>
      </Row>
      <Row className="todo">
        <Col>
          <TodoForm />
        </Col>
        <Col>
          <TodoList
            list = {list} />
        </Col>
      </Row>
    </Container>
  );

}

export default ToDo;
