window.onload =function(){
var months=["january","February","March","April","May","June","July","August","September","October","November","December"]


    var d1= document.createElement("select")
    d1.id="drop1";
    d1.name="drop1";
    d1.style="width:100px;";
    document.getElementById("box").appendChild(d1)
    //add options to drop down
   for (let i= 1; i<=31; i++) {
    var op1=document.createElement("option")
    op1.innerHTML=i;
    op1.value=i;
    d1.appendChild(op1);
   }
 var sp=document.createTextNode("\u00A0")
 document.getElementById("box").appendChild(sp)
 var sp=document.createTextNode("\u00A0")
 document.getElementById("box").appendChild(sp)
 var sp=document.createTextNode("\u00A0")
 document.getElementById("box").appendChild(sp)
 var sp=document.createTextNode("\u00A0")
 document.getElementById("box").appendChild(sp)

//    months drop0
var d2= document.createElement("select")
    d2.id="drop2";
    d2.name="drop2";
    d2.style="width:100px;";
    document.getElementById("box").appendChild(d2)
    //add options to drop down
   for (let i= 0; i<months.length; i++) {
    var op2=document.createElement("option")
    op2.innerHTML=months[i];
    op2.value=months[i]
    d2.appendChild(op2);
   }
//    year drop
var sp=document.createTextNode("\u00A0")
document.getElementById("box").appendChild(sp)
var sp=document.createTextNode("\u00A0")
document.getElementById("box").appendChild(sp)
var sp=document.createTextNode("\u00A0")
document.getElementById("box").appendChild(sp)
var sp=document.createTextNode("\u00A0")
document.getElementById("box").appendChild(sp)

//    months drop0
var d3= document.createElement("select")
   d3.id="drop3";
   d3.name="drop3";
   d3.style="width:100px;";
   document.getElementById("box").appendChild(d3)
   //ad3 options to drop down
  for (let i= 1970; i<=2024; i++) {
   var op3=document.createElement("option")
   op3.innerHTML=i;
   op3.value=i;
   d3.appendChild(op3);
  }
   var br=document.createElement("br")
   document.getElementById("box").appendChild(br)
   var br=document.createElement("br")
   document.getElementById("box").appendChild(br)
   //Onclick event handler to display
   var b1=document.createElement("input")
   b1.type="button";
   b1.value="click here"
   b1.id="btn1";
   b1.onclick=function(){
       lbl1.innerHTML= drop1.value+" / "+drop2.value+" / "+drop3.value;
   }
   document.getElementById("box").appendChild(b1)
   var br=document.createElement("br")
   document.getElementById("box").appendChild(br) 
   var br=document.createElement("br")
   document.getElementById("box").appendChild(br)
   var l1=document.createElement("label")
   l1.value="Result: ";
   l1.id="lbl1";
   document.getElementById("box").appendChild(l1)
}
