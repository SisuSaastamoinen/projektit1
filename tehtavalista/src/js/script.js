let todoList = [];
let input = document.getElementById("todoInput");

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
