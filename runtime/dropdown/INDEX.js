window.onload =function(){
    var d1= document.createElement("select")
    d1.id="drop1";
    d1.name="drop1";
    d1.style="width:100px;";
    document.getElementById("box").appendChild(d1)
    //add options to drop down
   for (let i= 1; i<=500; i++) {
    var op1=document.createElement("option")
    op1.innerHTML=i
    d1.appendChild(op1);
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
       lbl1.innerHTML= drop1.value;
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