function btn1click() {
    var num = 0;
    
    var a = [];
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);
    a[5] = parseInt(txt6.value);
     
    for (let i = 0; i < a.length; i=i+2) {
        
        num = a[i];
        a[i] = a[i + 1];
        a[i + 1] = num ;
    }
    for (let i = 0; i < a.length; i++) {
        lbl1.innerHTML += a[i];
    }
}