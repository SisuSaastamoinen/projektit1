/* TODO
 * Save the state of the board in local storage so that it persists on page reload
 * Add a feature to remove all tasks either from a column or from the entire board
 */

generateTasks();
addListeners();
let parent = null;

function addTask() {
  console.log("add task invoked");
  const taskInput = document.querySelector("#taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const todoColumn = document.querySelector("#todoColumn");
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.textContent = taskText;
  taskElement.draggable = true;
  taskElement.id = taskText.replace(" ", "").toLowerCase();
  taskElement.addEventListener("dragstart", dragStart);
  taskElement.addEventListener("click", clickFunction);
  taskElement.addEventListener("dragend", dragEnd);
  todoColumn.appendChild(taskElement);
  taskInput.value = "";
}

function generateTasks() {
  const tasks = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  ];
  const todoColumn = document.querySelector("#todoColumn");
  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.textContent = task;
    taskElement.draggable = true;
    taskElement.id = task.replace(" ", "").toLowerCase();
    taskElement.addEventListener("dragstart", dragStart);
    taskElement.addEventListener("click", clickFunction);
    taskElement.addEventListener("dragend", dragEnd);
    todoColumn.appendChild(taskElement);
  });
}

function clickFunction(event) {
  const taskElement = event.target;
  if (event.shiftKey) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) {
      return;
    } else {
      taskElement.remove();
    }
  } else if (event.ctrlKey) {
    const newText = prompt("Edit task:", taskElement.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskElement.textContent = newText.trim();
    }
  }
}

function addListeners() {
  const columns = document.querySelectorAll(".column-body");
  columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
    column.addEventListener("dragenter", dragEnter);
  });
}

function dragStart(event) {
  parent = event.target.parentNode;
  console.log("drag start", parent);
  event.dataTransfer.setData("text/plain", event.target.id);
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragEnd(event) {
  event.target.classList.remove("hide");
  if (!event.target.parentNode.classList.contains("column-body")) {
    parent.appendChild(event.target);
  }
}

function dragOver(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
}

function dragLeave(event) {
  event.target.classList.remove("drag-over");
}

function drop(event) {
  const id = event.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  if (event.target.classList.contains("column-body")) {
    event.target.appendChild(draggable);
    event.target.classList.remove("drag-over");
  } else {
    parent.appendChild(draggable);
    parent.classList.remove("drag-over");
  }
  draggable.classList.remove("hide");
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
}
