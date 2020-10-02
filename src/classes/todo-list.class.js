
export class TodoList {
    
    constructor() {
        this.todos = [];
    }

    newTodo(todo){
        this.todos.push(todo)
    }

    deleteTodo(id){
        for(let todoPos in this.todos){
            if(this.todos[todoPos].id === parseInt(id)){
                this.delete(todoPos)
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
        for(let todoPos = 0; todoPos<this.todos.length ; todoPos++){
            if(this.todos[todoPos].completed === true){
                
                this.delete(todoPos)
                todoPos--;
            }
        }
    }

    delete(Pos){
        this.todos.splice(Pos,1);
    }
}