function btn1() {
    t1 = txt1.value;
    sessionStorage.setItem("s1",t1);
    window.location.href = "page2.html"
}
function btn2(){
    t1 = txt1.value;
    localStorage.setItem("l1",t1);
    window.location.href ="page2.html"
}