import { Todo } from "./index-clases";

export class TodoList {

    

    constructor() {
        this.loadLocalStorage();
    }

    newTodo(todo){
        this.todos.push(todo)
        this.saveLocalStorage()
    }

    deleteTodo(id){
        for(let todoPos in this.todos){
            if(this.todos[todoPos].id === parseInt(id)){
                this.delete(todoPos)
            }
        }
        this.saveLocalStorage();
    }

    touchCompleted(id){
        for(let todo of this.todos){
            if(todo.id === parseInt(id)){
                todo.completed = !todo.completed;
                break;
            }
        }
        this.saveLocalStorage();
    }

    delletAllCompleted(){
        for(let todoPos = 0; todoPos<this.todos.length ; todoPos++){
            if(this.todos[todoPos].completed === true){
                
                this.delete(todoPos)
                todoPos--;
            }
            this.saveLocalStorage();
        }
    }

    delete(Pos){
        this.todos.splice(Pos,1);
    }

    saveLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos) )
    }

    loadLocalStorage(){
        const local = localStorage.getItem('todo');
        this.todos = (local)?JSON.parse(local):[];

        

            for(let todoPos in this.todos){
                this.todos[todoPos] = Todo.createInstanceOfJson(this.todos[todoPos]);
            }
        
    }
}