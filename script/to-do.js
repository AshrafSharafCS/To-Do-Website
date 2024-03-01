const input = document.getElementById("todo-text");
const addButton = document.getElementById("add-btn");
const removeButton = document.getElementById("remove-btn");
const output = document.getElementById("output");

let todo = [];
let allTodo = [];
let count = 1;

addButton.addEventListener("click", function () {
  if (input.value != "") {
    const newTodo = {
      id: count,
      description: input.value,
    };
    count += 1;
    todo.push(newTodo);
    todoLoader();
    input.value = "";
  }
});

function TodoGenerator(todoitem) {
  return `<div class="child">
    <h1>${todoitem.description}</h1>
    <input type="checkbox" id="${todoitem.id}">
  </div>`;
}

function todoLoader() {
  output.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    const todoItem = todo[i];
    const newtodo = TodoGenerator(todoItem);
    output.innerHTML += newtodo;
  }
}
