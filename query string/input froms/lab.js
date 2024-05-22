window.onload = function () {
    var QueryString = new URLSearchParams(window.location.search);
    if (QueryString.has('q1') == true
    &&QueryString.has('q2') == true
    &&QueryString.has('q3') == true
    &&QueryString.has('q4') == true
    &&QueryString.has('q5') == true
    &&QueryString.has('q6') == true
    &&QueryString.has('q7') == true
    &&QueryString.has('q8') == true
    &&QueryString.has('q9') == true
    &&QueryString.has('q10') == true
    &&QueryString.has('dq1') == true
    &&QueryString.has('dq2') == true
    &&QueryString.has('dq3') == true
    &&QueryString.has('dq4') == true
    &&QueryString.has('dq5') == true
    &&QueryString.has('dq6') == true
    &&QueryString.has('dq7') == true
    &&QueryString.has('dq8') == true
    &&QueryString.has('r1') == true
    &&QueryString.has('r2') == true

    ) {
        lbl1.innerHTML=QueryString.get("q1").toString;
        lbl2.innerHTML=QueryString.get("q2").toString;
        lbl3.innerHTML=QueryString.get("q3").toString;
        lbl4.innerHTML=QueryString.get("q4").toString;
        lbl5.innerHTML=QueryString.get("q5").toString;
        lbl6.innerHTML=QueryString.get("q6").toString;
        lbl7.innerHTML=QueryString.get("q7").toString;
        lbl8.innerHTML=QueryString.get("q8").toString;
        lbl9.innerHTML=QueryString.get("q9").toString;
        lbl10.innerHTML=QueryString.get("q10").toString;
        lbl11.innerHTML=QueryString.get("dq1").toString;
        lbl12.innerHTML=QueryString.get("dq2").toString;
        lbl13.innerHTML=QueryString.get("dq3").toString;
        lbl14.innerHTML=QueryString.get("dq4").toString;
        lbl15.innerHTML=QueryString.get("dq5").toString;
        lbl16.innerHTML=QueryString.get("dq6").toString;
        lbl17.innerHTML=QueryString.get("dq7").toString;
        lbl18.innerHTML=QueryString.get("dq8").toString;
        lbl19.innerHTML=QueryString.get("r1").toString;
        lbl20.innerHTML=QueryString.get("r2").toString;
    }

}