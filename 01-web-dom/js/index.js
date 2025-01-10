// Selección de elementos del DOM
const addTaskButton = document.querySelector("#add-task-btn");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Función para agregar una nueva tarea
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  // Crear un nuevo elemento li
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Añadir evento de clic para marcar como completada
  newTask.addEventListener("click", function () {
    newTask.classList.toggle("completed");
  });

  // Crear botón de eliminar
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(newTask);
  });

  // Agregar botón de eliminar al elemento li
  newTask.appendChild(deleteButton);

  // Agregar la nueva tarea a la lista
  taskList.appendChild(newTask);

  // Limpiar el campo de entrada
  taskInput.value = "";
}

// Evento de clic en el botón para agregar tarea
addTaskButton.addEventListener("click", addTask);
