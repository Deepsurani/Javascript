window.onload=function(){
    if(sessionStorage.getItem("s1")!=null){
        lbl1.innerHTML = sessionStorage.getItem("s1");
    }
    if(sessionStorage.getItem("s2")!=null){
        lbl5.innerHTML = sessionStorage.getItem("s2");
    }
    if(sessionStorage.getItem("s4")!=null){
        lbl2.innerHTML = sessionStorage.getItem("s4");
    }
    if(sessionStorage.getItem("s5")!=null){
        lbl6.innerHTML = sessionStorage.getItem("s5");
    }
    if(sessionStorage.getItem("s6")!=null){
        lbl7.innerHTML = sessionStorage.getItem("s6");
    }
    if(sessionStorage.getItem("s7")!=null){
        lbl8.innerHTML = sessionStorage.getItem("s7");
    }
}