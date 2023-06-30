let title = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

showAllTasks();

function showAllTasks() {
    tasks.forEach((value, index) => {
      const div = document.createElement("div");
      div.setAttribute("class", "task");
  
      const li = document.createElement("li");
      li.innerText = value.title;
      div.append(li);

      const btn = document.createElement("button");
      btn.setAttribute("class", "delete");
      btn.innerText = "-";

      btn.addEventListener("click", () => {
        removeTasks();
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        showAllTasks();
      });
  
      div.append(btn);
      ul.append(div);
    });
}

function removeTasks() {
    tasks.forEach(() => {
      const div = document.querySelector(".task");
      div.remove();
    });
}
button.addEventListener("click", () => {
    removeTasks();
    tasks.push({
      title: title.value,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAllTasks();
});