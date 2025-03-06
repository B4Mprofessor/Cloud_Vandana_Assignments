document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      taskInput.classList.add("shake");
      setTimeout(() => {
        taskInput.classList.remove("shake");
      }, 500);
      return;
    }

    const emptyMessage = document.querySelector(".empty-list");
    if (emptyMessage) {
      emptyMessage.remove();
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.className = "task-text";

    taskSpan.addEventListener("click", function () {
      taskSpan.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.className = "delete-button";
    deleteButton.title = "Delete task";

    deleteButton.addEventListener("click", function () {
      li.style.opacity = "0";
      li.style.transform = "translateX(50px)";

      setTimeout(() => {
        li.remove();

        if (taskList.children.length === 0) {
          const emptyMessage = document.createElement("li");
          emptyMessage.className = "empty-list";
          emptyMessage.textContent =
            "Your task list is empty. Add a task to get started!";
          taskList.appendChild(emptyMessage);
        }
      }, 300);
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  document.querySelector(".todo-app").style.opacity = "0";
  document.querySelector(".todo-app").style.transform = "translateY(20px)";

  setTimeout(() => {
    document.querySelector(".todo-app").style.opacity = "1";
    document.querySelector(".todo-app").style.transform = "translateY(0)";
  }, 100);
});
