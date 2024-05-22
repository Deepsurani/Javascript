window.onload = function () {
    var t1 = document.createElement("input");
    t1.type = "text";
    t1.id = "txt1";
    t1.name = "txt1";
    document.getElementById("box").appendChild(t1);
    for (let i = 0; i < 2; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    var b1 = document.createElement("input");
    b1.type = "button";
    b1.name = "btn1";
    b1.id = "btn1";
    b1.value = "Add";
    b1.onclick = function () {
        var opt = document.createElement("option");
        opt.value = t1.value;
        opt.innerHTML = t1.value;
        list1.appendChild(opt);
    };
    document.getElementById("box").appendChild(b1);


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


    var b3 = document.createElement("input");
    b3.type = "button";
    b3.name = "btn3";
    b3.id = "btn3";
    b3.value = ">>";
    b3.onclick = function () {
        var Options = document.querySelectorAll("#list1>option");
        for (let i = 0; i < Options.length; i++) {
            var SingleOption = Options[i];
            document.getElementById("list2").appendChild(SingleOption);
        }
    }
    document.getElementById("box").appendChild(b3);
    var b4 = document.createElement("input");
    b4.type = "button";
    b4.name = "btn4";
    b4.id = "btn4";
    b4.value = "<<";
    b4.onclick = function () {
        var Options = document.querySelectorAll("#list2>option");
        for (let i = 0; i < Options.length; i++) {
            var SingleOption = Options[i];
            document.getElementById("list1").appendChild(SingleOption);
        }

    };
    document.getElementById("box").appendChild(b4);

    var b5 = document.createElement("input");
    b5.type = "button";
    b5.name = "btn5";
    b5.id = "btn5";
    b5.value = "<";
    b5.onclick = function () {

        var opt1 = document.createElement("option");
        opt1.value = list2.value;
        opt1.innerHTML = list2.value;

        list1.appendChild(opt1);
        var Drop2 = document.getElementById("list2");
        var OpDrop2 = Drop2.options[Drop2.selectedIndex];
        Drop2.removeChild(OpDrop2);

    };
    document.getElementById("box").appendChild(b5);

    for (let i = 0; i < 5; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

}