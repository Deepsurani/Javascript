function btn1Click()
{
    lbl1.innerHTML = txt1.value;
}
function btn2Click() {
    lbl2.innerHTML = txt2.value +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ txt3.value;
}

function btn3Click()
{
    lbl2.innerHTML = parseInt(txt2.value) + parseInt(txt3.value);
}