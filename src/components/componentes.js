import { todoList } from '../index'
import { Todo } from '../classes/todo.class'

// Selectores HTML
const txtInput      = document.querySelector('.new-todo');
const divTodoList   = document.querySelector('.todo-list');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const btnBorrar     = document.querySelector('.clear-completed');

// Funciones
const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    return div.firstElementChild;

}

export const mostrarTodo = ( todo ) => {

    const li = crearTodoHtml(todo);
    divTodoList.append( li );
}

export const construirTodos = ( todoArr ) => {
    
    // todoArr.forEach( todo => mostrarTodo(todo) );
    todoArr.forEach( mostrarTodo );

}


// Eventos
divTodoList.addEventListener('click', (event) => {

    // console.log('click');
    // console.log(event.target);
    const nombreElemento = event.target.localName; // label, input, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');


    if ( nombreElemento.includes('input') ) {
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
        
    } else if( nombreElemento.includes('button') ) {
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }

});

txtInput.addEventListener('keyup', (event) => {

    // console.log(txtInput.value);
    if( event.keyCode === 13 && txtInput.value.length > 0 ) {
        // Crear Todo
        const nuevoTodo = new Todo( txtInput.value );
        // todoList.todos.push( nuevoTodo );
        todoList.nuevoTodo( nuevoTodo );
        // console.log( todoList );
        mostrarTodo( nuevoTodo );
        txtInput.value = '';
    }

});



ulFiltros.addEventListener('click', ( event ) => {

    const filtro = event.target.text; // Todos, Pendientes, Completados // undefined
    console.log(filtro);
    if ( !filtro ) return;

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    console.log(divTodoList.children);

    for( const elemento of divTodoList.children ) {
        elemento.classList.remove('hidden');
        // elemento.classList.toggle('completed')
        // console.log(elemento);
        // console.log(elemento.classList.contains('completed'));
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if ( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if ( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;
            
        }
    }

});


btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();
    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {
        const elemento = divTodoList.children[i];

        if ( elemento.classList.contains('completed') ) {
            divTodoList.removeChild( elemento );
        }
    }
});