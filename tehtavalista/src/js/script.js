let todoList = [];
const submitButton = document.getElementById("submitButton");
const input = document.getElementById("todoInput");
const listWrapper = document.getElementById("todoWrapper");

// Add listener for button click
submitButton.addEventListener("click", addToListAfterButtonClick);

// Add listener for Enter key on input field
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && checkInputLength() > 0) {
    createNewTodo();
  }
});

function addToListAfterButtonClick() {
  if (checkInputLength() > 0) {
    createNewTodo();
  }
}

function checkInputLength() {
  return input.value.trim().length;
}

function createNewTodo() {
  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.addEventListener("click", function () {
    li.classList.toggle("myStyle");
  });

  li.appendChild(deleteButton);
  listWrapper.appendChild(li);

  input.value = "";
}
