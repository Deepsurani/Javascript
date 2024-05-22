function btn1Click() {
  var t1 = txt1.value;
  CreateToDo(t1, "ToDoBoxContainer");
}
function CreateToDo(Text, Place) {
  // ToDoBox
  var ToDoBox = document.createElement("div");
  ToDoBox.className = "mainbox";
  document.getElementById(Place).appendChild(ToDoBox);

  // ToDoBoxlabel
  var label = document.createElement("label");
  label.innerHTML = Text;
  ToDoBox.appendChild(label);

  if (Place == "ToDoBoxContainer") {
    // Todotext
    var Todotext = document.createElement("input");
    Todotext.type = "text";
    Todotext.style.display = "none";
    ToDoBox.appendChild(Todotext);

    //  updatetext
    var updatetext = document.createElement("input");
    updatetext.type = "text";
    updatetext.style.display = "none";
    ToDoBox.appendChild(updatetext);


    //update button
    var updatebutton = document.createElement("button");
    updatebutton.innerHTML = "update";
    updatebutton.style.display = "none";
    updatebutton.onclick = function () {
      label.innerHTML = Todotext.innerHTML;
      label.style.display = "block";
      Editbutton.style.display = "block";
      Donebutton.style.display = "block";
      updatebutton.style.display = "none";
      updatetext.style.display = "none";

    }
    ToDoBox.appendChild(updatebutton);


    //edit button
    var Editbutton = document.createElement("button");
    Editbutton.innerHTML = "Edit";
    Editbutton.onclick = function () {
      Todotext.value = label.innerHTML;
      updatebutton.style.display = "block";
      label.style.display = "none";
      Todotext.style.display = "block";

      Editbutton.style.display = "none";
      Donebutton.style.display = "none";
    }
    ToDoBox.appendChild(Editbutton);
  }

  //donebutton
  var Donebutton = document.createElement("button");
  Donebutton.innerHTML = "Done";
  Donebutton.onclick = function () {

    var TextBoxVal = label.innerHTML;
    console.log(Place);

    if (Place == "ToDoBoxContainer") {
      document.getElementById(Place).removeChild(ToDoBox);
      CreateToDo(TextBoxVal, "CompleteBoxContainer");

    }
    else if (Place == "CompleteBoxContainer") {
      document.getElementById(Place).removeChild(ToDoBox);
      CreateToDo(TextBoxVal, "TrashBoxContiner");

    }

  }

  ToDoBox.appendChild(Donebutton);

}
