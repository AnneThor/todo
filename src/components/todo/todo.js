import React, {useState, useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap';
import './todo.scss';

function ToDo() {

  return (
    <Container fluid className="todo" data-testid="todo-wrapper">
        <Col>
          <TodoForm />
        </Col>
        <Col>
          <TodoList />
        </Col>
    </Container>
  );

}

export default ToDo;
