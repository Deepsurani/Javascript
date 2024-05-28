function btn1(){

    var t1=input.value;
    var list1= document.getElementById("List1")
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
    opt1.value = list1.value;
    opt1.innerHTML = list1.value;

    list2.appendChild(opt1);
    var Drop1 = document.getElementById("list1");
    var OpDrop1 = Drop1.options[Drop1.selectedIndex];
    Drop1.removeChild(OpDrop1);
    console.log(OpDrop1);
}
document.getElementById("box").appendChild(b2);
