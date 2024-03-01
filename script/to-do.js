const input = document.getElementById("todo-text");
const addButton = document.getElementById("add-btn");
const output = document.getElementById("output");
const h1 =document.getElementById("h1");

let todo = [];
let allTodo = [];
let count = 1;

addButton.addEventListener("click", function () {
  if (input.value != "") {
    const newTodo = {
      id: count,
      description: input.value,
      done:"Not Done",
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
    <button class="done-btn" id="mark-done" type="button" onclick="markDone(${todoitem.id})">Mark Done</button>
    <button class="remove-btn" id="remove" type="button" onclick="deleteTask(${todoitem.id})">Remove</button>
    <h3>${todoitem.done}</h3>
  </div>`;
}
function deleteTask(id) {
  for (let i = 0; i < todo.length; i++) {
    if (id == todo[i].id) {
      todo.splice(i,1);
      todoLoader();
    }
  }
}

function markDone(id){
    for (let i = 0; i < todo.length; i++) {
        if (id == todo[i].id) {
            todo[i].done="Done";
            todoLoader();
        }
      }

}

function todoLoader() {
  output.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    const todoItem = todo[i];
    const newtodo = TodoGenerator(todoItem);
    output.innerHTML += newtodo;
  }
}
