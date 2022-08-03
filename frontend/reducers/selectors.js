import React from 'react';

function allTodos(state) {
    const todos = Object.values(state.todos);
    return todos;
}

export default allTodos;