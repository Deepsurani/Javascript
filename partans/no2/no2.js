function Btn(){
    lbl.innerHTML = "";
    for (let row = 1; row <= 5; row++){
        for(let spc=1; spc <= 5-row ; spc++){
            lbl.innerHTML+="&nbsp&nbsp&nbsp"
        }
        for (let col = 1; col <= row ; col++) {
            lbl.innerHTML +="*&nbsp";
        }
        lbl.innerHTML += "<br>";
    }
   
}