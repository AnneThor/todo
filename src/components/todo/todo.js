import React, {useState, useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap';
import './todo.scss';

function ToDo() {

  const base = 'https://at-taskmanager.herokuapp.com/task';

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(base)
    .then(reply => {
      setList(reply.data);
      setLoading(true);
    })
  }, [])

  return (
    <Container fluid className="todo">

        <Col>
          <TodoForm list={list} setList={setList}/>
        </Col>
        <Col>
          <TodoList loading={loading} list={list} />
        </Col>

    </Container>
  );

}

export default ToDo;
