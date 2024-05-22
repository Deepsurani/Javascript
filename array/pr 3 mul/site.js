function btn1click() {
    
    var mul = 1;
    var a = [];
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);
    
    lbl1.innerHTML = "";
    for (let i = 0; i < a.length; i++) {
        mul = mul * a[i];
        lbl1.innerHTML += a[i];
        if(a[i] < a.length)
        {
            lbl1.innerHTML += "x";
        }
    }
    lbl1.innerHTML += "="+mul;
}