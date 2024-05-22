function btn1Click(){
    if (rdo2.checked == true){
        lbl2.innerHTML = "right";
        document.getElementById("lbl2").style.color="green"
    }
    else if(rdo1.checked == true || rdo3.checked == true || rdo4.checked == true){
        lbl2.innerHTML = "wrong"
        document.getElementById("lbl2").style.color="red"
    }

}