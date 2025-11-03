let todoList = [];
const enterButton = document.getElementById("submitButton");
enterButton.addEventListener("click", addToListAfterEnterPressed);
let input = document.getElementById("todoInput");

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
  return input.value.length;
}

function checkTodoListLength() {
  return todoList.length;
}

function createNewTodo() {
  let li = document.createElement("li");
  let listWrapper = document.getElementById("todoWrapper");
  li.appendChild(document.createTextNode(input.value));
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("className", "deleteButton");
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.addEventListener("click", deleteTodoItem);
  li.addEventListener("click", function () {
    li.classList.toggle("myStyle");
  });
  li.appendChild(deleteButton);
  listWrapper.appendChild(li);
  todoList = listWrapper.querySelectorAll("li");
  console.log(todoList);
  input.value = "";
  //   Array.from(todoList).forEach((item) => {
  //     console.log("List item: " + item.innerText);
  //   });
}

function deleteTodoItem() {
  return;
}
