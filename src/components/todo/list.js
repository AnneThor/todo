import React, { useState, useEffect, useContext } from 'react';
import { SiteContext } from '../../context/siteLogic.js';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import { useAxios, refetch } from 'use-axios';
import axios, { delete as del, post, put } from 'axios';
import { getTasks, deleteTask, putTask } from '../generics/api-handler.js'
import { USER_PER_PAGE } from '../../context/paginate.js';
import Pagination from '../generics/pagination.js'
import './list.css'

function TodoList(props) {

  const listToggle = useContext(SiteContext);
  const base = 'https://at-taskmanager.herokuapp.com/task';
  const [update, setUpdate] = useState(false);
  const list = useFilter(getTasks());
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(list.length / 5));


  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = list.slice(startIndex, startIndex+ USER_PER_PAGE)

  useEffect( () => {
    document.title=`Task Manager: ${list.length} Open Tasks`
    setTotalPages(Math.ceil(list.length / 5))
  }, [list, setUpdate])

  function toggleUpdate() {
    let newUpdate = !update;
    setUpdate(newUpdate);
  }

  function deleted(id) {
    deleteTask(id);
    toggleUpdate();
  }

  function useFilter(list) {
    switch (listToggle.filter) {
      case 'status':
        return list.sort((a,b) => (a.completed ? 1 : -1));
        break;
      case 'difficulty':
        return list.sort((a,b) => (parseInt(a.difficulty) > parseInt(b.difficulty) ? -1 : 1));
        break;
      case 'person':
        return list.sort((a,b) => a.name > b.name ? 1 : -1);
        break;
      case 'onlyOpen':
        return list.filter(x => !x.completed)
        break;
    }
  }

  const handlePageClick = num => {
    setPage(num)
  }

  return (
    <>
    <h3 className="header" data-testid="header">
      {list.length} Tasks in List!
    </h3>
    <ButtonGroup size="sm" className="filter-options" aria-label="Filter options" data-testid="filter-option">
      <Button variant="secondary" value="status" onClick={() => listToggle.sortBy("status")}>Status</Button>
      <Button variant="secondary" value="difficulty" onClick={() => listToggle.sortBy("difficulty")}>Difficulty</Button>
      <Button variant="secondary" value="person" onClick={() => listToggle.sortBy("person")}>Assignee</Button>
      <Button variant="secondary" value="onlyOpen" onClick={() => listToggle.sortBy("onlyOpen")}>Pending</Button>
    </ButtonGroup>
    <ListGroup id="todo-list" data-testid="todo-list">
      {selectedUsers.map(item => (
        <ListGroup.Item variant="dark" key={item._id} >
          <span className="list-item">
            <div className="list-item-headers">
              <Button data-testid="completed"
                      variant={item.completed ? "success" : "danger"}
                      onClick={() => putTask({id: item._id, status: !item.completed})} >
              {item.completed ? "Completed" : "Pending" }</Button>
              <div>{item.person}</div>
              <Button variant="dark" onClick={() => deleted(item._id)}>X</Button>
            </div>
            <div className="task">Task: {item.task}</div>
            <div className="difficulty">Difficulty: {item.difficulty}</div>
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
    <Pagination totalPages={totalPages} onClick={handlePageClick} data-testid="pagination" />
    </>
  );

}

export default TodoList;
