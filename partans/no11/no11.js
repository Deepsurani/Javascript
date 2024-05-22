function btn() {
    for (let i = 1; i <= 4; i++) {
        for (let k = 1; k <= 4 - i; k++) {
            lbl.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        for (let j = 1; j <= i; j++) {
            lbl.innerHTML += j + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        lbl.innerHTML += "<br><br>";
    }
}