var formdata = [];
var combox = [];
var tskbox1 = [];
var count = 1;
var querystring = new URLSearchParams(window.location.search);
window.onload = function () {
  if (localStorage.getItem("regdata") != null) {
    count = 1;
    var localdata = localStorage.getItem("regdata");
    formdata = JSON.parse(localdata);
    for (const data of formdata) {
      console.log(data);
      // localStorage.getItem("formdata",data.Name)
      createRow(data, count, "workbox");
      count++
    }
    console.log(formdata, count);
    //   count++

  }
  if (localStorage.getItem("cdata") != null) {
    count = 1;
    var complatedata = localStorage.getItem("cdata");
    combox = JSON.parse(complatedata);
    console.log(combox);
    for (const janvi of combox) {
      createRow(janvi, count, "compltbox");
      count++
    }
  }
  if (sessionStorage.getItem("tdata") != null) {
    count = 1;
    var taskboxdata = sessionStorage.getItem("tdata");
    tskbox1 = JSON.parse(taskboxdata);
    console.log(tskbox1);
    for (const tskdata of tskbox1) {
      createRow(tskdata, count, "taskbox");
      count++;
    }
  }
}
function btn1Click() {
  //value store in localstorge  

  if (txt1.value != "") {
    var text = txt1.value;

    formdata.push(text);
    var jsondata = JSON.stringify(formdata);
    localStorage.setItem("regdata", jsondata);

    console.log(formdata)

    createRow(text, count, "workbox");
    count++;
    window.location.reload();
    txt1.value = "";
  }
  else {
    alert("Please Enter The Value!!!!");
  }
}

function createRow(object, num, place) {
  //create division
  var div = document.createElement("div");
  div.className = "inputdiv";
  div.id = "div1";

  //create label
  var lbl = document.createElement("label")
  lbl.innerHTML = object;
  lbl.id = "lbl2";
  div.appendChild(lbl);

  //textbox
  var t1 = document.createElement("input");
  t1.innerHTML = txt1.value;
  t1.style.display = "none";
  div.appendChild(t1);

  var br = document.createElement("br");
  div.appendChild(br);

  //edit button
  var btn2 = document.createElement("input");
  btn2.type = "button";
  btn2.id = num - 1;
  // btn2.style.background-color = "#036288";
  btn2.style.backgroundColor = "#036288";
  btn2.style.color = "#fff";
  btn2.style.cursor = "pointer";
  btn2.style.textDecoration = "none";
  btn2.style.fontSize = "16px";
  btn2.style.border = "2px solid #024661";
  btn2.style.padding = "10px 20px";
  btn2.style.margin = "5px";
   btn2.className = "btn btn-link";
  btn2.style.border = "2px solid #000";
  // btn2.style.padding = "2px";
  // btn2.style.marginRight = "3px";
  //  btn2.style.float = "left";
  btn2.value = "Edit";
  if (place != "taskbox") {
    div.appendChild(btn2);
  }

  //save button
  var savebtn = document.createElement("input");
  savebtn.type = "button";
  savebtn.className = "btn btn-link";
  savebtn.id = num - 1;
  savebtn.style.backgroundColor = "#036288";
  savebtn.style.color = "#fff";
  savebtn.style.cursor = "pointer";
  savebtn.style.textDecoration = "none";
  savebtn.style.fontSize = "16px";
  savebtn.style.border = "2px solid #024661";
  savebtn.style.padding = "10px 20px";
  savebtn.style.margin = "5px";
  savebtn.style.border = "2px solid #000";
  savebtn.value = "save";
  savebtn.style.display = "none";
  div.appendChild(savebtn);

  //edit button clickevent
  btn2.onclick = function () {
    lbl.style.display = "none";
    t1.style.display = "block";
    t1.style.width = "100%";
    btn2.style.display = "none";
    savebtn.style.display = "block";
  }

  //save button clickevent
  savebtn.onclick = function () {
    lbl.innerHTML = t1.value;
    formdata[this.id] = t1.value;
    localStorage.setItem("regdata", JSON.stringify(formdata));
    t1.style.display = "none";
    lbl.style.display = "block";
    btn2.style.display = "block";
    savebtn.style.display = "none";
    window.location.reload();
  }

  //complate button
  var cbtn = document.createElement("input");
  cbtn.type = "button";
  cbtn.className = "btn btn-link";
  cbtn.id = num - 1;
  cbtn.value = "Complate";
  cbtn.style.backgroundColor = "#036288";
  cbtn.style.color = "#fff";
  cbtn.style.cursor = "pointer";
  cbtn.style.textDecoration = "none";
  cbtn.style.fontSize = "16px";
  cbtn.style.border = "2px solid #024661";
  cbtn.style.padding = "10px 20px";
  cbtn.style.margin = "5px";
  cbtn.style.border = "2px solid #000";

  //show the button in box  
  if (place == "workbox") {
    div.appendChild(cbtn);
  }

  //delate button
  var delate = document.createElement("input");
  delate.type = "button";
  delate.className = "btn btn-link";
  delate.value = "Delate";
  delate.style.backgroundColor = "#036288";
  delate.style.color = "#fff";
  delate.style.cursor = "pointer";
  delate.style.textDecoration = "none";
  delate.style.fontSize = "16px";
  delate.style.border = "2px solid #024661";
  delate.style.padding = "10px 20px";
  delate.style.margin = "5px";
   delate.className = "btn btn-link";
  delate.style.border = "2px solid #000";
  if (place == "compltbox") {
    div.appendChild(delate);
  }

  //complate button clickevent
  cbtn.onclick = function () {
    delate.style.display = "block";
    cbtn.style.display = "none";
    //value move into array
    var T1 = object;
    var id = this.id;
    formdata.splice(id, 1);
    var jsondata = JSON.stringify(formdata);
    localStorage.setItem("regdata", jsondata);
    combox.push(T1);

    localStorage.setItem("cdata", JSON.stringify(combox));
    window.location.reload();
  }

  //delate button clickevent
  delate.onclick = function () {
    btn2.style.display = "none";
    cbtn.style.display = "none";
    delate.style.display = "none";
    taskbox.appendChild(div);
    var T2 = object;
    var tid = this.id;
    combox.splice(tid, 1);
    var jsondata = JSON.stringify(combox);
    localStorage.setItem("cdata", jsondata);
    tskbox1.push(T2);

    localStorage.setItem("tdata", JSON.stringify(tskbox1));
    // window.location.reload();
  }
  document.getElementById(place).appendChild(div);
}