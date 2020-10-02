import './style.css'
import { Todo, TodoList } from './classes/index-clases'
import { createTodoHtml} from './js/componentes'
console.clear();
const todoList = new TodoList();

const task = new Todo("aprender Java Script");

todoList.newTodo(task)
console.log(todoList)

createTodoHtml(task);
createTodoHtml(task);