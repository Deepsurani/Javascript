count = 0;
function btn1Click() {
    count++;
    var t1 = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(t1);

    var no = document.createElement("td");
    no.innerHTML = count;
    no.setAttribute("name", "count");
    t1.appendChild(no);

    var product = document.createElement("td");
    t1.appendChild(product);


    var price = document.createElement("td");
    t1.appendChild(price);

    var Qty = document.createElement("td");
    t1.appendChild(Qty);

    var total = document.createElement("td");
    total.innerHTML = "0"
    t1.appendChild(total);

    var remove = document.createElement("td");
    t1.appendChild(remove)



    var txt1 = document.createElement("input");
    txt1.id = "txt1";
    txt1.type = "text";
    txt1.name = "txt1";
    product.appendChild(txt1);


    var txt2 = document.createElement("input");
    txt2.id = "txt2";
    txt2.type = "text";
    txt2.name = "txt2";
    txt2.onkeyup = function () {
        if (txt2.value != "" && txt3.value != "") {
            total.innerHTML = parseInt(txt2.value) * parseInt(txt3.value);
        }

    }
    price.appendChild(txt2);



    var txt3 = document.createElement("input");
    txt3.id = "txt3";
    txt3.type = "text";
    txt3.name = "txt3";
    txt3.onkeyup = function () {
        if (txt2.value != "" && txt3.value != "") {
            total.innerHTML = parseInt(txt2.value) * parseInt(txt3.value);
            grandtotal()
        }
    }
    Qty.appendChild(txt3);




    var rb = document.createElement("button");
    rb.innerHTML = "Remove";
    rb.name = "btn2";
    rb.id = "btn2";
    rb.onclick = function () {
        document.getElementById("tbdTag").removeChild(t1);
        grandtotal()
        var countBox = document.getElementsByName("count");
        for (let i = 0; i < countBox.length; i++) {
            countBox[i].innerText = i + 1;

        }
        count = countBox.length
    }
    remove.appendChild(rb);

}
function grandtotal() {
    var grandtotal = 0;
    var discount = 0;
    var TotalAll = document.querySelectorAll("#tbdTag>tr>td:nth-child(5)");
    for (let i = 0; i < TotalAll.length; i++) {
        var firstTdCol = TotalAll[i];
        grandtotal = grandtotal + parseInt(firstTdCol.innerHTML);

    }
    lblGrandTotal.innerHTML=grandtotal;
    if(grandtotal>=15000){
        discount=grandtotal*15/100;
    }
    else if (grandtotal <= 15000 || grandtotal >= 10000) {
        discount = grandtotal * 10 / 100;
    }
    else if (grandtotal <= 10000 || grandtotal >= 5000) {
        discount = grandtotal * 5 / 100;
    }
    else if (grandtotal <= 5000) {
        discount = grandtotal * 2 / 100;
    }
    lblDiscount.innerHTML = discount;
    lblNetAmount.innerHTML = grandtotal - discount;
}