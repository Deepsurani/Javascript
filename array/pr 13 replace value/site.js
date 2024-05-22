function btn1click() {

    var a = [];
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);

    var k = parseInt(txt6.value);
    var l = parseInt(txt7.value);

    debugger;
    for (let i = 0; i < a.length; i++) {

        if (a[i] == l) {
            a[i] = k;
        }

    }

    lbl1.innerHTML = a;
}