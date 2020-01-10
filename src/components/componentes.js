
export const txtInput = document.querySelector('.new-todo');

export const divTodoList = document.querySelector('.todo-list');




const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="">
        <div class="view">
            <input class="toggle" type="checkbox" checked>
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

