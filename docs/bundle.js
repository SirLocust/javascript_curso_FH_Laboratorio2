!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"todoList",(function(){return y}));n(0);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){var e,t,n;function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.task=e,this.id=(new Date).getTime(),this.completed=!1,this.created=new Date}return e=r,n=[{key:"createInstanceOfJson",value:function(e){var t=e.task,n=e.id,o=e.completed,a=e.created,i=new r(t);return i.id=n,i.completed=o,i.created=a,i}}],(t=null)&&o(e.prototype,t),n&&o(e,n),r}();function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var t,n,o;return t=e,(n=[{key:"newTodo",value:function(e){this.todos.push(e),this.saveLocalStorage()}},{key:"deleteTodo",value:function(e){for(var t in this.todos)this.todos[t].id===parseInt(e)&&this.delete(t);this.saveLocalStorage()}},{key:"touchCompleted",value:function(e){var t,n=a(this.todos);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.id===parseInt(e)){o.completed=!o.completed;break}}}catch(e){n.e(e)}finally{n.f()}this.saveLocalStorage()}},{key:"delletAllCompleted",value:function(){for(var e=0;e<this.todos.length;e++)!0===this.todos[e].completed&&(this.delete(e),e--),this.saveLocalStorage()}},{key:"showPending",value:function(){return this.stateTodos(!1)}},{key:"showCompleted",value:function(){return this.stateTodos(!0)}},{key:"stateTodos",value:function(e){var t,n=[],o=a(this.todos);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.completed===e&&n.push(r)}}catch(e){o.e(e)}finally{o.f()}return n}},{key:"delete",value:function(e){this.todos.splice(e,1)}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){var e=localStorage.getItem("todo");for(var t in this.todos=e?JSON.parse(e):[],this.todos)this.todos[t]=r.createInstanceOfJson(this.todos[t])}}])&&l(t.prototype,n),o&&l(t,o),e}(),u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters").children[1],v=document.querySelector(".filters").children[0],h=document.querySelector(".filters").children[2];s.addEventListener("keydown",(function(e){if("Enter"===e.key){var t=new r(s.value);y.newTodo(t),p(t),s.value=""}}));var p=function(e){var t='\n    <li class="'.concat(e.completed?"completed":"",'" data-id="').concat(e.id,'">\n\t\t\t\t\t\t<div class="view">\n\t\t\t\t\t\t\t<input class="toggle" type="checkbox" ').concat(e.completed?"checked":"",">\n\t\t\t\t\t\t\t<label>").concat(e.task,'</label>\n\t\t\t\t\t\t\t<button class="destroy"></button>\n\t\t\t\t\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li>\n    '),n=document.createElement("div");return n.innerHTML=t,u.append(n.firstElementChild),n.firstElementChild};u.addEventListener("click",(function(e){var t=e.target.nodeName,n=e.target.parentElement.parentElement,o=n.dataset.id;console.log(t),"INPUT"===t&&(y.touchCompleted(o),n.classList.toggle("completed")),"BUTTON"===t&&(console.log("enro"),y.deleteTodo(o),n.remove())})),d.addEventListener("click",(function(){var e=u.children;y.delletAllCompleted();for(var t=0;t<e.length;t++)"completed"===e[t].attributes.getNamedItem("class").value&&(e[t].remove(),t--);console.log(y)})),f.addEventListener("click",(function(){u.innerHTML="",y.showPending().forEach((function(e){p(e)}))})),v.addEventListener("click",(function(){u.innerHTML="",y.todos.forEach((function(e){p(e)}))})),h.addEventListener("click",(function(){u.innerHTML="",y.showCompleted().forEach((function(e){p(e)}))}));var y=new c;y.todos.length>0&&y.todos.forEach((function(e){p(e)})),console.log(y.todos)}]);