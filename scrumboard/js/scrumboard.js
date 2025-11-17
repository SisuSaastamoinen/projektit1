generateTasks();
addListeners();

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
  todoColumn.appendChild(taskElement);
  taskInput.value = "";
}

function generateTasks() {
  const tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
  const todoColumn = document.querySelector("#todoColumn");
  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.textContent = task;
    taskElement.draggable = true;
    taskElement.id = task.replace(" ", "").toLowerCase();
    taskElement.addEventListener("dragstart", dragStart);
    todoColumn.appendChild(taskElement);
  });
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
  event.dataTransfer.setData("text/plain", event.target.id);
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
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

  event.target.appendChild(draggable);

  draggable.classList.remove("hide");
  event.target.classList.remove("drag-over");
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
}
