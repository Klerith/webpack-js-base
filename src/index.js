import './assets/styles/style.css';
import { txtInput, mostrarTodo } from './components/componentes.js'

import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';


const todoList = new TodoList();
const nuevoTodo = new Todo('Aprender JavaScript');
todoList.todos.push( nuevoTodo )


console.log( todoList.todos );

mostrarTodo( nuevoTodo );
mostrarTodo( nuevoTodo );
mostrarTodo( nuevoTodo );
mostrarTodo( nuevoTodo );

// Eventos
txtInput.addEventListener('keyup', (event) => {

    // console.log(txtInput.value);
    if( event.keyCode === 13 && txtInput.value.length > 0 ) {
        // Crear Todo
        const nuevoTodo = new Todo( txtInput.value );
        todoList.todos.push( nuevoTodo );
        console.log( todoList );
    }

});



