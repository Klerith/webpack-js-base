import { Todo } from './todo.class';

export class TodoList {

    constructor() {
        this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );

        this.guardarLocalStorage();
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        for( const todo of this.todos ) {
            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                // console.log(todo);
                this.guardarLocalStorage();
                break;
            }
        }
    }

    // Cargar TODOS previamente creados...
    cargarLocalStorage() {
        // if ( localStorage.getItem('todos') ) {
        //     this.todos = localStorage.getItem('todos');
        // } else {
        //     this.todos = [];
        // }
        this.todos = ( localStorage.getItem('todos') )
                        ? JSON.parse( localStorage.getItem('todos') )
                        : [];
        
        // console.log( this.todos ); // no son del tipo TODO
        // this.todos = this.todos.map( todo => Todo.fromJson(todo) )
        this.todos = this.todos.map( Todo.fromJson );
        // console.log(this.todos);
    }

    guardarLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos) );
    }


}