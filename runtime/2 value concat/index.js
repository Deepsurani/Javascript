window.onload=function(){

    var t1=document.createElement("input")
    t1.type="text";
    t1.name="txt1";
    t1.id="txt1";
    t1.placeholder="First name";
    document.getElementById("box").appendChild(t1)
    for (let i = 0; i < 3; i++) {
        var sp=document.createTextNode("\u00A0")
    document.getElementById("box").appendChild(sp)
    }
    var t2= document.createElement("input")
    t2.id="txt2";
    t2.name="txt2";
    t2.placeholder="Second Name"
    document.getElementById("box").appendChild(t2)

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
        lbl1.innerHTML= txt1.value+"  "+txt2.value;
    }
    document.getElementById("box").appendChild(b1)
    var br=document.createElement("br")
    document.getElementById("box").appendChild(br)
    var br=document.createElement("br")
    document.getElementById("box").appendChild(br)
    var br=document.createElement("br")
    document.getElementById("box").appendChild(br)
    var l1=document.createElement("label")
    l1.value="Result: ";
    l1.id="lbl1";
    document.getElementById("box").appendChild(l1)
}