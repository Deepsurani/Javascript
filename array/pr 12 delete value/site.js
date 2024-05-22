function btn1click() {
    var a = [];
    var b = [];

    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);

    var rakam = parseInt(txt6.value);
    
    var x = 0;
    for (let i = 0; i < a.length; i++) {
       
        if (a[i] != rakam) {
            b[x] = a[i];
            x++;
        }
    }
    for (let i = 0; i < x; i++) {
        lbl1.innerHTML += b[i];
        
    }
}