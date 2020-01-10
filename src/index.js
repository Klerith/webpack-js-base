import { construirTodos } from './components/componentes.js'
import { TodoList } from './classes/todo-list.class';

import './assets/styles/style.css';

export const todoList = new TodoList();
construirTodos( todoList.todos );
// const nuevoTodo = new Todo('Aprender JavaScript');
// todoList.todos.push( nuevoTodo )

// console.log( todoList.todos );

// mostrarTodo( nuevoTodo );





