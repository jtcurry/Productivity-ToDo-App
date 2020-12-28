const todoList = document.querySelector("#todoList");
const newTodoInput = document.querySelector("#newtodo");
const form = document.querySelector("form");

//add new li to list when clicked
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerText = newTodoInput.value + " ";
  const newCheckButton = document.createElement("button");
  newCheckButton.id = "checkButton";
  newLi.prepend(newCheckButton);
  const newTrashCan = document.createElement("i");
  newTrashCan.className = "fas fa-trash";
  newLi.append(newTrashCan);
  todoList.append(newLi);
  newTodoInput.value = "";
  store();
});

//show as completd when box is clicked
todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.classList.toggle("completed");
    event.target.parentElement.classList.remove("priority");
  }
});

//add color when li is clicked
todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("priority");
  }
});

//delete todo when trash can is clicked
todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "I") {
    event.target.parentElement.remove();
  }
  store();
});

//store and retrieve from local storage
function store() {
  localStorage.setItem("list", JSON.stringify(todoList.innerHTML));
}

function getValues() {
  let storedValues = JSON.parse(localStorage.getItem("list"));
  if (!storedValues) {
    todoList.innerText = "";
  } else {
    todoList.innerHTML = storedValues;
  }
}

getValues();
