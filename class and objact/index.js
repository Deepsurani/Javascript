var reglist =[];
function addData() {
    var aobj = {
        name : txt1.value,
        email : txt2.value,
        phone : txt3.value,
    };
    reglist.push(aobj);
    lbl1.innerHTML = "";
    for (const SingleObj of reglist) {
        for (const key in SingleObj) {
            lbl1.innerHTML += SingleObj[key] + " , "; 
        }
        lbl1.innerHTML +="<br>";
    }
    console.log(reglist);
}
