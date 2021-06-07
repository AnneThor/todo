import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useAxios, refetch } from 'use-axios';
import { delete as del, post, put } from 'axios';
import { getTasks, deleteTask, putTask } from '../generics/api-handler.js'
import axios from 'axios';
import './list.css'

function TodoList(props) {

  const base = 'https://at-taskmanager.herokuapp.com/task';

  const [update, setUpdate] = useState(false);

  const list = getTasks();

  useEffect( () => {
    document.title=`Task Manager: ${list.length} Open Tasks`
  }, [list, setUpdate])

  function toggleUpdate() {
    let newUpdate = !update;
    setUpdate(newUpdate);
  }

  function deleted(id) {
    deleteTask(id);
    toggleUpdate();
  }

  return (
    <>
    <header className="header" data-testid="header">
      {list.length} Tasks Remain!
    </header>
    <ListGroup id="todo-list" data-testid="todo-list">
      {list.map(item => (
        <ListGroup.Item variant="dark" key={item._id} >
          <span className="list-item">
            <div className="list-item-headers">
              <div>Assigned to: {item.person}</div>
              <div onClick={() => putTask({id: item._id, status: !item.completed})}
                   className={`status complete-${item.completed.toString()}`}>
                Status: {item.completed ? "Completed" : "Pending" }</div>
              <button onClick={() => deleted(item._id)}>X</button>
            </div>
            <div>Task: {item.task}</div>
            <div className="difficulty">Difficulty: {item.difficulty}</div>
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
    </>
  );

}

export default TodoList;
