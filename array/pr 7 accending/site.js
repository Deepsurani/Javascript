function btn1click() {
    var a =[];
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);
    a[5] = parseInt(txt6.value);

    var num = 0;
    for (let i = 0; i < a.length; i++) {
        
        for (let j = i; j < a.length; j++) {
            
            if (a[i] > a[j]) {
                num = a[i];
                a[i] = a[j];
                a[j] = num;
            }
        }
    }
    for (let i = 0; i < a.length; i++) {
        
        lbl1.innerHTML += a[i];
    }
}