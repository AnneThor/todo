import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TodoList(props) {

  return (
    <ListGroup id="todo-list" data-testid="todo-list">
      {props.list.map(item => (
        <ListGroup.Item variant="dark"
                        className={`complete-${item.complete.toString()}`}
                        key={item._id} >
          <span onClick={(e) => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

}

export default TodoList;
