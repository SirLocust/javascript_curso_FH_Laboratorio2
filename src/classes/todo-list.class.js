
export class TodoList {
    
    constructor() {
        this.todos = [];
    }

    newTodo(todo){
        this.todos.push(todo)
    }

    deleteTodo(id){

    }

    touchCompleted(id){
        for(let todo of this.todos){
            if(todo.id === parseInt(id)){
                todo.completed = !todo.completed;
                break;
            }
        }
    }

    delletAllCompleted(){
        
    }
}