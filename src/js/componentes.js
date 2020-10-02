import { todoList } from '../app';
import {Todo, TodoList} from '../classes/index-clases'

const divTodoList = document.querySelector('.todo-list')
const inputNewTodo = document.querySelector('.new-todo')


inputNewTodo.addEventListener('keydown', (e ) =>{
    if(e.key === 'Enter'){
        const newTodo = new Todo(inputNewTodo.value);
        todoList.newTodo( newTodo );
        createTodoHtml(newTodo);
        inputNewTodo.value = '';
    }
})


export const createTodoHtml = (todo )=>{
    const htmlTodo = `
    <li class="${ (todo.completed)?'completed': '' }" data-id="abc">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completed)?'checked':''}>
							<label>${todo.task}</label>
							<button class="destroy"></button>
						</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);


}