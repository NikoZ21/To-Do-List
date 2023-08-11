let numberOfToDos = 0;

function CreateNewToDo() {
  var elementValue = document.getElementById("inputToDo").value;

  var toDoItem = document.createElement("div");
  toDoItem.className = "toDoItem";
  document.body.appendChild(toDoItem);

  var paragraph = document.createElement("p");
  paragraph.textContent = elementValue;
  //   paragraph.style.display = "inline";

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  toDoItem.appendChild(paragraph);
  toDoItem.appendChild(checkBox);
}

function DeleteCompletedToDo() {}
