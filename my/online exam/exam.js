function lod(){
    Single.style.display = "none";
    Multiple.style.display = "none";
}
function btn1(){
    if (drop1.value == "Single") {
        Single.style.display = "none";
        Multiple.style.display = "block";
    }
    else if (drop1.value == "Multiple"){
        Multiple.style.display = "none";
        Single.style.display = "block";
    }
    if(rdo1.checked == true){
        lbl1.innerHTML = rdo1.value;
    }
    else if(rdo2.checked == true){
        lbl1.innerHTML = rdo2.value;
    }
    else if(rdo3.checked == true){
        lbl1.innerHTML = rdo3.value;
    }
    else if(rdo4.checked == true){
        lbl1.innerHTML = rdo4.value;
    }
    if
    (chk1.checked == true && chk2.checked == true && chk3.checked == true && chk4.checked == true) {
        lbl1.innerHTML = chk1.value +"&nbsp" + chk2.value +"&nbsp" + chk3.value +"&nbsp" + chk4.value ;
    }
    else if
    (chk1.checked == true && chk2.checked == true && chk3.checked == true ){
        lbl1.innerHTML = chk1.value +"&nbsp" + chk2.value +"&nbsp" + chk3.value  ;
    }
    else if
    (chk1.checked == true && chk2.checked == true && chk4.checked == true ){
        lbl1.innerHTML = chk1.value +"&nbsp" + chk2.value +"&nbsp" + chk4.value  ;
    }
    else if
    (chk1.checked == true && chk3.checked == true && chk4.checked == true ){
        lbl1.innerHTML = chk1.value +"&nbsp" + chk3.value +"&nbsp" + chk4.value  ;
    }
    else if
    (chk2.checked == true && chk3.checked == true && chk4.checked == true ){
        lbl1.innerHTML = chk2.value +"&nbsp" + chk3.value +"&nbsp" + chk4.value  ;
    }
    else if
    (chk1.checked == true && chk2.checked == true ){
        lbl1.innerHTML = chk1.value +"&nbsp" + chk2.value ;
    }

}