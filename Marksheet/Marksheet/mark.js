function btn1() {
    if (txt1.value == "" && txt2.value == "" && txt3.value == "" && txt4.value == "") {
        lblNull.innerHTML = "Please Enter The Value";
    }
    else {
        lblNull.innerHTML = "";


        if (parseInt(txt1.value) > 100 || parseInt(txt2.value) > 100 || parseInt(txt3.value) > 100 || parseInt(txt4.value) > 100) {
            lblGreat.innerHTML = "Invalid Marks! Please Enter Under 100!"
            lblTotal.innerHTML = "0";
            lblPer.innerHTML = "0";
            lblGrade.innerHTML = "0";
        }

        else if (parseInt(txt1.value) < 35 || parseInt(txt2.value) < 35 || parseInt(txt3.value) < 35 || parseInt(txt4.value) < 35) {
            lblTotal.innerHTML = "0";
            lblPer.innerHTML = "0";
            lblGrade.innerHTML = "Fail!";

        }
        else {
            lblGreat.innerHTML = "";
            lblTotal.innerHTML = parseInt(txt1.value) + parseInt(txt2.value) + parseInt(txt3.value) + parseInt(txt4.value)
            lblPer.innerHTML = lblTotal.innerHTML / 4;

            if (lblPer.innerHTML >= 70) {
                lblGrade.innerHTML = "A"
            }
            else if (lblPer.innerHTML >= 60) {
                lblGrade.innerHTML = "B"
            }
            else if (lblPer.innerHTML >= 50) {
                lblGrade.innerHTML = "C"
            }
            else if (lblPer.innerHTML >= 40) {
                lblGrade.innerHTML = "D"
            }
            else if (lblPer.innerHTML <= 35) {
                lblGrade.innerHTML = "You Are Fail";
                lblTotal.innerHTML = "0";
                lblPer.innerHTML = "0";
            }



        }
    }

}