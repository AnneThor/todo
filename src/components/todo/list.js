import React from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';
import useAxios from 'axios-hooks';
import './list.css'

function TodoList(props) {

  const base = 'https://at-taskmanager.herokuapp.com/task';

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    base
  );

  async function updateData(id, currentStatus) {
    try {
      const response = axios.put(`${base}/${id}`, {
        completed: !currentStatus
      })
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  }


  async function deleteData(id) {
    try {
      const response = axios.delete(`${base}/${id}`)
      console.log(response);
    } catch(err) {
      console.log(err.message ? err.message : err);
    }
  }

  if (getLoading) return <p>Loading...</p>
  if (getError) return <p>Error!</p>

  return (
    <ListGroup id="todo-list" data-testid="todo-list">
      {getData.map(item => (
        <ListGroup.Item variant="dark" key={item._id} >
          <span className="list-item">
            <div className="list-item-headers">
              <div>Assigned to: {item.person}</div>
              <div onClick={() => updateData(item._id, item.completed)}
                   className={`status complete-${item.completed.toString()}`}>
                Status: {item.completed ? "Completed" : "Pending" }</div>
              <button onClick={() => deleteData(item._id)}>X</button>
            </div>
            <div>Task: {item.task}</div>
            <div className="difficulty">Difficulty: {item.difficulty}</div>
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

}

export default TodoList;
