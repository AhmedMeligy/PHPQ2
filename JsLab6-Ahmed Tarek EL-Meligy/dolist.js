const inputBox = document.getElementById("input-box");
const ulList = document.getElementById("ul-list");

function addTask() {
  let taskName = inputBox.value;

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = taskName;

  let buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";

  let buttonRight = document.createElement("button");
  buttonRight.className = "right";
  buttonRight.innerHTML = "&#10003;";
  buttonRight.addEventListener("click", function () {
    Done(li);
  });

  let buttonFalse = document.createElement("button");
  buttonFalse.className = "false";
  buttonFalse.innerHTML = "&#10539;";
  buttonFalse.addEventListener("click", function () {
    deleteTask(li);
  });

  buttonsDiv.appendChild(buttonRight);
  buttonsDiv.appendChild(buttonFalse);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  ulList.appendChild(li);
  inputBox.value = "";
}

function Done(item) {
  item.classList.toggle("done");
  const taskName = item.querySelector("span");
  if (item.classList.contains("done")) {
    taskName.textContent += " - DONE";
  } else {
    taskName.textContent = taskName.textContent.replace("  DONE!", "");
  }
}

function deleteTask(item) {
  item.remove();
}
