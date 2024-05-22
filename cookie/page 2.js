window.onload=function(){
    var cookies=document.cookie;
    var Allcookies = cookies.split(";");
    for (let i = 0; i < Allcookies.length; i++) {
        const SingelCookie = Allcookies[i].trim();
        const SingelCookieval= SingelCookie.split("=");
        if(SingelCookieval[0] == "myck1"){
            lbl.innerHTML= SingelCookieval[1];
        }
        
    }
}