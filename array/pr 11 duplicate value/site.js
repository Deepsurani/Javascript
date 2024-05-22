function btn1click() {
    var a = [];
    var b = [];
    var k = 0;
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);
    a[5] = parseInt(txt6.value);
    
    for (let i = 0; i < a.length; i++) {
        var x = 0;
        for (let j = 0; j < k; j++) {
            
            if (a[i] == b[j]) {
                x=1;
                break;
            }
        }
        if (x == 0) {
            b[k] = a[i];
            k++;
        }
    }
    for (let i = 0; i < k; i++) {
        lbl1.innerHTML += b[i];
        
    }
}