let todoList = [];
let input = document.getElementById("todoInput").value;
const enterButton = document.getElementById("submitButton");
enterButton.addEventListener("click", addToListAfterEnterPressed);

function addToListAfterEnterPressed(event) {
  if (checkInputLength() > 0 && event.which == 13) {
    createNewTodo();
  }
}

function addToListAfterButtonClick() {
  if (checkInputLength() > 0) {
    createNewTodo();
  }
}

function checkInputLength() {
  return input.length;
}

function checkTodoListLength() {
  return todoList.length;
}

function createNewTodo() {
  input = document.getElementById("todoInput").value;
  let li = document.createElement("li");
  let listWrapper = document.getElementById("todoWrapper");
  console.log(input);
  li.appendChild(document.createTextNode(input));
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.addEventListener("click", deleteTodoItem());
  li.appendChild(deleteButton);
  listWrapper.appendChild(li);
  todoList.push(input);
}

function deleteTodoItem() {
  return;
}
