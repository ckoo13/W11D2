import React from 'react';

const TodoListItem = (props) => {
    console.log(props)
  return (
      <div>
            <li key={props.todo.id}>{props.todo.title}</li>
            <input type="submit" value="Delete Todo" onClick={props.removeTodo} />
      </div>
  )
}

export default TodoListItem;