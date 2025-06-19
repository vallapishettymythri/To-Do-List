const colors = ["#f9c74f", "#90be6d", "#f94144", "#43aa8b", "#577590", "#f3722c", "#e76f51", "#9d4edd", "#3a86ff"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function addTask() {
  const taskText = document.getElementById("taskInput").value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const bgColor = getRandomColor();
  li.style.backgroundColor = bgColor;

  li.innerHTML = `
    <input type="checkbox" onchange="toggleTask(this)">
    <span>${taskText}</span>
    <button onclick="removeTask(this)">❌</button>
  `;

  document.getElementById("pendingList").appendChild(li);
  document.getElementById("taskInput").value = "";
}

function removeTask(btn) {
  const li = btn.parentElement;
  li.remove();
}

function toggleTask(checkbox) {
  const li = checkbox.parentElement;
  checkbox.checked
    ? document.getElementById("completedList").appendChild(li)
    : document.getElementById("pendingList").appendChild(li);
}
