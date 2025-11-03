let todoList = [];

let input = document.getElementById("todoInput").value;

var enterButton = document.getElementById("submitButton");
enterButton.addEventListener("click",addToList);

function addToListAfterEnterPressed() {
  if (checkInputLength() > 0 && event.which == 13) {
    newTodo();
  }
}

function addtoListAfterButtonClick() {
  if (checkInputLength() > 0) {
    newTodo();
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
  {
    li.appendChild(document.createTextNode(input.value));
  	ul.appendChild(li);
  	input.value = "";
}
}

var del = document.createElement("button"); 
del.appendChild(document.createTextNode("X"));
li.appendChild(del);
del.addEventListener("click", delTask);