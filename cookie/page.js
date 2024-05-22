function setCookie(){
    var t1= txt1.value;
    var d = new Date();
    d.setTime(d.getTime()+1000*60*60*24);   
    var CookieName= "myck1="+t1+";";
    var Expires = "expires="+d.toUTCString()+";";
    var Domain = "path=/;";
    document.cookie = CookieName +Expires+Domain;
    window.location.href="page2.html";
}