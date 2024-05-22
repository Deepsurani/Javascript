function btn1() {
    if (rdo1.checked == true) {
        var g = rdo1.value;
    } else {
        var g = rdo2.value;
    }
    if (rdo3.checked == true) {
        var es = rdo3.checked;
    }
    else {
        var es = rdo4.value;
    }
    d1 = drop1.value;
    t1 = txt1.value;
    t2 = txt2.value;
    t3 = txt3.value;
    t4 = txt4.value;
    t5 = txt5.value;
    t6 = txt6.value;
    t7 = txt7.value;
    t8 = txt8.value;
    t9 = txt9.value;
    t10 = txt10.value;
    d2 = drop1.value;
    d3 = drop3.value;
    d4 = drop4.value;
    d5 = drop5.value;
    d6 = drop6.value;
    d7 = drop7.value;
    d8 = drop8.value;
    r1 = g;
    r2 = es;
    window.location.href =
        "lab.html?q1" +
        t1 +
        "&q2" +
        t2 +
        "&q3" +
        t3 +
        "&q4" +
        t4 +
        "&q5" +
        t5 +
        "&q6" +
        t6 +
        "&q7" +
        t7 +
        "&q8" +
        t8 +
        "&q9" +
        t9 +
        "&q10" +
        t10 +
        "&dq1" +
        d1 +
        "&dq2" +
        d2 +
        "&dq3" +
        d3 +
        "&dq4" +
        d4+
        "&dq5" +
        d5+
        "&dq6" +
        d6+
        "&dq7" +
        d7+
        "&dq8" +
        d8+
        "&r1"+
        g+
        "&r2" +
        es;
}