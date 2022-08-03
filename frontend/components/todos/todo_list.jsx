import React from 'react'
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {
  return (
    <div>
        <h3>ToDos</h3>
        <ul>
          {
            props.todos.map(todo => {
              return (
                <TodoListItem todo={todo} removeTodo = {removeTodo} receiveTodo = {receiveTodo} />
              )
            })
          }
        </ul>

        <TodoForm receiveTodo={props.receiveTodo} />
    </div>
  )
}

export default TodoList;