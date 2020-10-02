
export class TodoList {
    
    constructor() {
        this.todos = [];
    }

    newTodo(todo){
        this.todos.push(todo)
    }

    deleteTodo(id){
        for(let i in this.todos){
            if(this.todos[i].id === parseInt(id)){
                this.todos.splice(i,1);
            }
        }
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