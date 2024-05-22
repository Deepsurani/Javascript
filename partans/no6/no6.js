function btn(){
    lbl.innerHTML = "";
    for (let row = 1; row <= 5; row++){
        
        for (let col = 1; col <= row ; col++) {
            for(let spc=1; spc <= 5-row ; spc++){
                lbl.innerHTML+=""
            }
            lbl.innerHTML +=row*col;
        }
        lbl.innerHTML += "<br>";
    }
   
}