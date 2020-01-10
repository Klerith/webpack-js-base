
export class Todo {
    
    constructor( tarea ) {
        this.tarea      = tarea;
        this.completado = false;
        this.creado     = new Date()
    }

}