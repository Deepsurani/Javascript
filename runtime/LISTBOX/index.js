function btn1(){

    var t1=input.value;
    var list1= document.getElementById("List1")
    var opt = document.createElement("option");
        opt.value = t1;
        opt.innerHTML = t1;
        list1.appendChild(opt);
        console.log(list1)
}

