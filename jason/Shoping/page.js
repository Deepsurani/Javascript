var count = 1;


function btn1Click() {

  CreateRow(count);
  count++;




}

function CreateRow(No) {

  // Row
  var Row = document.createElement("tr");
  document.getElementById("tbdTag").appendChild(Row);

  
  //No Coloum
  var NoCol = document.createElement("td");
  NoCol.innerHTML = No;
  Row.appendChild(NoCol);


  //product coloum
  var productcoloum = document.createElement("td");
  productcoloum.innerHTML = "";
  Row.appendChild(productcoloum);

  // TxtProduct
  var TxtProduct = document.createElement("input");
  TxtProduct.type = "text";
  productcoloum.appendChild(TxtProduct);


  //price coloum
  var pricecoloum = document.createElement("td");
  pricecoloum.innerHTML = "";
  Row.appendChild(pricecoloum);

  // Txtprice
  var Txtprice = document.createElement("input");
  Txtprice.type = "text";
  pricecoloum.appendChild(Txtprice);
  Txtprice.onkeyup = function () {
    if (Txtprice.value != "" && Txtqty.value != "") {
      totalcoloum.innerHTML = parseInt(Txtprice.value) * parseInt(Txtqty.value);
      GrandTotalFun();

    }
  };

  //qty coloum
  var qtycoloum = document.createElement("td");
  qtycoloum.innerHTML = "";
  Row.appendChild(qtycoloum);

  // Txtqty
  var Txtqty = document.createElement("input");
  Txtqty.type = "text";
  qtycoloum.appendChild(Txtqty);
  Txtqty.onkeyup = function () {
    if (Txtprice.value != "" && Txtqty.value != "") {
      totalcoloum.innerHTML = parseInt(Txtprice.value) * parseInt(Txtqty.value);
      GrandTotalFun();

    }
  };

  //total coloum
  var totalcoloum = document.createElement("td");
  totalcoloum.innerHTML = "0";
  Row.appendChild(totalcoloum);


  //button coloum
  var button = document.createElement("td");
  button.innerHTML = "";
  Row.appendChild(button);

  // removebuttom
  var removebuttom = document.createElement("input");
  removebuttom.type = "button";
  removebuttom.value = "remove";
  removebuttom.onclick = function () {
    document.getElementById("tbdTag").removeChild(Row);
    TotalCol();
    



    GrandTotalFun();
  }
  button.appendChild(removebuttom);



}
function TotalCol(){
  var RowsTotalCol1 = document.querySelectorAll("#tbdTag>tr>td:nth-child(1)");
  count = 1;
  for (let i = 0; i < RowsTotalCol1.length; i++) {
    const element = RowsTotalCol1[i];
    element.innerHTML = i + 1;
    count++;

  }
}

function GrandTotalFun() {
  var RowsTotalCol = document.querySelectorAll("#tbdTag>tr>td:nth-child(5)");
  console.log(RowsTotalCol);

  // var lblGrandTotal=0;

  var sum = 0;
  var discount = 0;
  var NetTotal;


  for (i = 0; i < RowsTotalCol.length; i++) {
    var SingleCol = RowsTotalCol[i];
    sum = sum + parseInt(SingleCol.innerHTML);
  }
  document.getElementById("lblGrandTotal").innerHTML = sum;

  if (sum >= 10000) {
    discount = sum * 15 / 100;
  }
  if (sum <= 5000) {
    discount = sum * 10 / 100;
  }
  if (sum <= 2000) {
    discount = sum * 5 / 100;
  }
  document.getElementById("lblDiscount").innerHTML = discount;

  NetTotal = sum - discount;
  document.getElementById("lblNetAmount").innerHTML = NetTotal;

}