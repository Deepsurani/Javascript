function btn1click()
{
    var a = [];
    a[0] = txt1.value;
    a[1] = txt2.value;
    a[2] = txt3.value;
    a[3] = txt4.value;
    a[4] = txt5.value;

    lbl1.innerHTML = "";
    for (let i = 0; i < a.length; i++) {
        lbl1.innerHTML += a[i] + " , ";
    }
}