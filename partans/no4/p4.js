function Btn(){
    lbl.innerHTML = "";
    for (let row = 1; row <= 5; row++){
        for (let col = 1; col <=5 ; col++) {
            lbl.innerHTML +=col;
        }   
        lbl.innerHTML += "<br>";
    }
   
}