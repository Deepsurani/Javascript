function btn1() {

    var t1 = input.value;
    var list1 = document.getElementById("List1")
    var opt = document.createElement("option");
    opt.value = t1;
    opt.innerHTML = t1;
    list1.appendChild(opt);
    console.log(list1)
}
var b2 = document.createElement("input");
b2.type = "button";
b2.name = "btn2";
b2.id = "btn2";
b2.value = ">";
b2.onclick = function () {
    var opt1 = document.createElement("option");
    opt1.value = List1.value;
    opt1.innerHTML = List1.value;
    var list2 = document.getElementById("List2");
    list2.appendChild(opt1);
    var Drop1 = document.getElementById("List1");
    var OpDrop1 = Drop1.options[Drop1.selectedIndex];
    Drop1.removeChild(OpDrop1);

}

document.getElementById("box").appendChild(b2);
var b3 = document.createElement("input");
b3.type = "button";
b3.name = "btn3";
b3.id = "btn3";
b3.value = ">>";
b3.onclick = function () {
    var Options = document.querySelectorAll("#List1>option");
    for (let i = 0; i < Options.length; i++) {
        var SingleOption = Options[i];
        document.getElementById("List2").appendChild(SingleOption);
    }
}
document.getElementById("box").appendChild(b3);

var b3 = document.createElement("input")
b3.type = "button"
b3.value = "<<";
b3.id = "btn3";
b3.name = "btn3"
b3.onclick = function () {
    var Options = document.querySelectorAll("#List2>option");
    for (let i = 0; i < Options.length; i++) {
        var SingleOption = Options[i];
        document.getElementById("List1").appendChild(SingleOption);
    }
}
document.getElementById("box").appendChild(b3)
var b4 = document.createElement("input");
b4.type = "button";
b4.name = "btn5";
b4.id = "btn5";
b4.value = "<";
b4.onclick = function () {

    var opt1 = document.createElement("option");
    opt1.value = List2.value;
    opt1.innerHTML = List2.value;

    List1.appendChild(opt1);
    var Drop2 = document.getElementById("List2");
    var OpDrop2 = Drop2.options[Drop2.selectedIndex];
    Drop2.removeChild(OpDrop2);

};
document.getElementById("box").appendChild(b4);