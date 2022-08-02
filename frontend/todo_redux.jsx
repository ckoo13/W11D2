import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    const store = configureStore();
    window.store = store;
});
