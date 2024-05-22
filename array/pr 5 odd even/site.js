function btn1click() {
    
    var positive = 0 , nagative = 0, odd = 0, even = 0,zero = 0;
    var a = [];
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);
    a[5] = parseInt(txt6.value);
    a[6] = parseInt(txt7.value);
    a[7] = parseInt(txt8.value);
    a[8] = parseInt(txt9.value);
    a[9] = parseInt(txt10.value);
    
    lbl1.innerHTML = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 0) {
            zero++;
        }
        else if (a[i] % 2 == 0) {
            even++;
        }
        else
        {
            odd++;
        }
        if (a[i] < 0) {
            nagative++;
        }
        else
        {
            positive++;
        }
        
    }
    lbl1.innerHTML = "zero.:"+zero;
    lbl2.innerHTML = "even.:"+even;
    lbl3.innerHTML = "odd.:"+odd;
    lbl4.innerHTML = "nagative.:"+nagative;
    lbl5.innerHTML = "positive.:"+positive;
}