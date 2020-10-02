import './style.css'
import { Todo, TodoList } from './classes/index-clases'
import { createTodoHtml} from './js/componentes'
// console.clear();
export const todoList = new TodoList();
if(todoList.todos.length > 0){
    
    todoList.todos.forEach(todo => {
        createTodoHtml(todo);
    });
}

console.log(todoList.todos)