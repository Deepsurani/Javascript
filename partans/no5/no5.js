function btn() {
    lbl.innerHTML = "";
    for (let row = 1; row <= 4; row++){
        for (let col = 1; col <=4 ; col++) {
            lbl.innerHTML += col*row;
        }   
        lbl.innerHTML += "<br>";
    }
}