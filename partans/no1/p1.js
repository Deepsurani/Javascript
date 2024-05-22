function btn1(){
    lbl1.innerHTML = "";
    for (let row = 1; row <= 5; row++){
        for (let col = 1; col <=5 ; col++) {
            lbl1.innerHTML +="*";
        }
        lbl1.innerHTML += "<br>";
    }
   
}