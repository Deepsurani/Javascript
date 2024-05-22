function btn1() {
    dro1 = drop1.value;
    gen = drop9.value;
    Fname = txt10.value;
    caste = drop2.value;
    dob = dob.value;
    add = txt1.value;
    sessionStorage.setItem("s1",dro1);
    sessionStorage.setItem("s2",gen);
    sessionStorage.setItem("s4",Fname);
    sessionStorage.setItem("s5",caste);
    sessionStorage.setItem("s6" ,dob);
    sessionStorage.setItem("s7",add);
    window.location.href = "lab.html"
}