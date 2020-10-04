import { todoList } from "../app";
import { Todo } from "../classes/index-clases";

const divTodoList = document.querySelector(".todo-list");
const inputNewTodo = document.querySelector(".new-todo");
const buttonClearALLCompleted = document.querySelector(".clear-completed");
const buttonFilterPending = document.querySelector(".filters").children[1];
const buttonFilterAll = document.querySelector(".filters").children[0];
const buttonFilterCompleted = document.querySelector(".filters").children[2];

inputNewTodo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const newTodo = new Todo(inputNewTodo.value);
    todoList.newTodo(newTodo);
    createTodoHtml(newTodo);
    inputNewTodo.value = "";
  }
});

export const createTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completed ? "checked" : ""}>
							<label>${todo.task}</label>
							<button class="destroy"></button>
						</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
    `;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

divTodoList.addEventListener("click", (event) => {
  const nameElement = event.target.nodeName;
  const todoElement = event.target.parentElement.parentElement;
  const todoElementId = todoElement.dataset.id;
  console.log(nameElement);
  if (nameElement === "INPUT") {
    todoList.touchCompleted(todoElementId);

    todoElement.classList.toggle("completed");
  }
  if (nameElement === "BUTTON") {
    console.log("enro");
    todoList.deleteTodo(todoElementId);
    // console.log(todoElement)
    todoElement.remove();
  }
});

buttonClearALLCompleted.addEventListener("click", () => {
  const divTodoAll = divTodoList.children;
  todoList.delletAllCompleted();
  for (let i = 0; i < divTodoAll.length; i++) {
    if (divTodoAll[i].attributes.getNamedItem("class").value === "completed") {
      divTodoAll[i].remove();
      i--;
    }
  }
  console.log(todoList);
  // console.log(divTodoList.children[0].attributes.getNamedItem('class').value);
});

buttonFilterPending.addEventListener('click', () =>{
    divTodoList.innerHTML= '';
    let todosPending = todoList.showPending()
    todosPending.forEach((todo) =>{
        createTodoHtml(todo)
    })

})
buttonFilterAll.addEventListener('click', ()=>{
    divTodoList.innerHTML ='';
    todoList.todos.forEach( (todo)=>{
        createTodoHtml(todo)
    })
})

buttonFilterCompleted.addEventListener('click', ()=>{
    divTodoList.innerHTML = '';
    let todosCompleted = todoList.showCompleted()
    todosCompleted.forEach((todo) => {
        createTodoHtml(todo);
    })
})