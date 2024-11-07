function Roadmap(){
    alert("please pay attention to the roadmap to become a dev developer with the help of greeksforgreek website or anyone which you want to prefer. ")
}
// Function to add a task
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("task-list");

  // Create a new list item
  const listItem = document.createElement("li");

  // Create a span for task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.onclick = function () {
    listItem.classList.toggle("completed");
  };

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    taskList.removeChild(listItem);
  };

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}
