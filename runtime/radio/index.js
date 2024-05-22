window.onload =function(){
    var rdo1=document.createElement("input")
    rdo1.type="radio";
    rdo1.id="rdo1";
    rdo1.value="Male";
    rdo1.name="rdo1";
    document.getElementById("box").appendChild(rdo1)

    var lbl1=document.createElement("label")
    lbl1.htmlFor="rdo1"
    lbl1.innerHTML="Male"
    document.getElementById("box").appendChild(lbl1)

    // another radio\
        var rdo2=document.createElement("input")
        rdo2.type="radio";
        rdo2.id="rdo2";
        rdo2.value="Female";
        rdo2.name="rdo1";
        document.getElementById("box").appendChild(rdo2)
    
        var lbl2=document.createElement("label")
        lbl2.htmlFor="rdo2"
        lbl2.innerHTML="Female"
        document.getElementById("box").appendChild(lbl2)

        var br=document.createElement("br")
        document.getElementById("box").appendChild(br)
        var br=document.createElement("br")
        document.getElementById("box").appendChild(br)
        var b1= document.createElement("input")
        b1.type="button";
        b1.value="click here"
        b1.id="btn1";
        b1.onclick=function(){
            if (rdo1.checked)
            {
                lbl4.innerHTML=rdo1.value;
            }
            else if(rdo2.checked){
                lbl4.innerHTML=rdo2.value;
            }
        }
        document.getElementById("box").appendChild(b1)
        var br=document.createElement("br")
        document.getElementById("box").appendChild(br)
        var l3=document.createElement("label")
        l3.id="lbl3"
        l3.innerHTML="you select a :"
        document.getElementById("box").appendChild(l3)
        var l4=document.createElement("label")
        l4.id="lbl4"
        document.getElementById("box").appendChild(l4)
}