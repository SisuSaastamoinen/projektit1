let todoList = [];
let input = document.getElementById("todoInput").value;
var enterButton = document.getElementById("submitButton");
enterButton.addEventListener("click", addToListAfterEnterPressed());

function addToListAfterEnterPressed() {
  if (checkInputLength() > 0 && event.which == 13) {
    createNewTodo();
  }
}

function addtoListAfterButtonClick() {
  if (checkInputLength() > 0) {
    createNewTodo();
  }
}

function checkInputLength() {
  return todoInput.value.length;
}

function checkTodoListLength() {
  return todoList.length();
}

function createNewTodo() {
  var li = document.createElement("li");
  let listWrapper = document.getElementById("todoWrapper");
  li.appendChild(document.createTextNode(input.value));
  var del = document.createElement("button");
  del.appendChild(document.createTextNode("X"));
  del.addEventListener("click", deleteTodoItem());
  li.appendChild(del);
  listWrapper.appendChild(li);
  input.value = "";
}

function deleteTodoItem() {
  return;
}
