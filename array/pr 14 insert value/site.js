function btn1click() {
    
    var a = [];
    var b = [];
    var pos = 0;
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);

    var rakam = parseInt(txt6.value);
    var insert = parseInt(txt7.value);

    for (let i = 0; i < a.length; i++) {
        
        if (pos == insert) {
            b[pos] = rakam;
            pos++;
        }
        b[pos] = a[i];
        pos++;
    }
    for (let i = 0; i < pos; i++) {
        lbl1.innerHTML += b[i];
        
    }

}