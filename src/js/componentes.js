import { todoList } from '../app';
import {Todo} from '../classes/index-clases'

const divTodoList = document.querySelector('.todo-list')
const inputNewTodo = document.querySelector('.new-todo')
const buttonClearALLCompleted = document.querySelector('.clear-completed')

inputNewTodo.addEventListener('keydown', (e ) =>{
    if(e.key === 'Enter'){
        const newTodo = new Todo(inputNewTodo.value);
        todoList.newTodo( newTodo );
        createTodoHtml(newTodo);
        inputNewTodo.value = '';
    }
})


export const createTodoHtml = (todo)=>{
    const htmlTodo = `
    <li class="${ (todo.completed)?'completed': '' }" data-id="${todo.id}">
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

    return div.firstElementChild;
}

divTodoList.addEventListener('click', (event) => {
    
    const nameElement = event.target.nodeName;
    const todoElement = event.target.parentElement.parentElement
    const todoElementId =todoElement.dataset.id
    console.log(nameElement)
    if(nameElement === 'INPUT'){
        
        todoList.touchCompleted(todoElementId)
        
        todoElement.classList.toggle('completed');
        
    }
    if(nameElement === "BUTTON"){
        console.log("enro");
        todoList.deleteTodo(todoElementId)
        // console.log(todoElement)
        todoElement.remove()
    }
    
})


buttonClearALLCompleted.addEventListener('click', (event) =>{
    const divTodoAll = divTodoList.children
    todoList.delletAllCompleted();
    for(let i=0 ; i<divTodoAll.length ; i++){
        
        if(divTodoAll[i].attributes.getNamedItem('class').value === "completed"){
            divTodoAll[i].remove();
            i--;
        }
    }
    console.log(todoList);
    // console.log(divTodoList.children[0].attributes.getNamedItem('class').value);
})