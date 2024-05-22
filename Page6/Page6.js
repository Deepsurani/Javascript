function btn1Click() {
    if (rdo1.checked == true) {
        lbl1.innerHTML = "You Have Selected Male.";
        document.getElementById("lbl1").style.color="green";
    }
    else if (rdo2.checked == true) {
        lbl1.innerHTML = "You Have Selected Female.";
        document.getElementById("lbl1").style.color="orangered";

    }
    else
    {
        lbl1.innerHTML = "Please Select Any Option.";
        document.getElementById("lbl1").style.color="red";

    }
}