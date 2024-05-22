function btn1() {
  var right=0;
  var wrong=0;
  var attend=0;
  var unattend=0;

  if (rdo1.checked == true) {
    right++;
    attend++;
  }
  else if (rdo2.checked == true || rdo3.checked == true || rdo4.checked == true) {
    wrong++;
    attend++;
  }
  else{
    unattend++;
  }


  if (rdo8.checked == true) {
    right++;
    attend++;
  }
  else if (rdo5.checked == true || rdo6.checked == true || rdo7.checked == true) {
    wrong++;
    attend++;
  }
  else{
    unattend++;
  }


  if (rdo12.checked == true) {
    right++;
    attend++;
  }
  else if (rdo9.checked == true || rdo10.checked == true || rdo11.checked == true) {
    wrong++;
    attend++;
  }
  else{
    unattend++;
  }


  if (rdo14.checked == true) {
    right++;
    attend++;
  }
  else if (rdo13.checked == true || rdo14.checked == true || rdo15.checked == true) {
    wrong++;
    attend++;
  }
  else{
    unattend++;
  }


  if (rdo19.checked == true) {
    right++;
    attend++;
  }
  else if (rdo17.checked == true || rdo18.checked == true || rdo20.checked == true) {
    wrong++;
    attend++;
  }
  else{
    unattend++;
  }

  lbl1.innerHTML = right;
  lbl2.innerHTML = wrong;
  lbl3.innerHTML = attend;
  lbl4.innerHTML = unattend;    
    
}