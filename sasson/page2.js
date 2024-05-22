window.onload=Function()
{
    if(sessionStorage.getItem("s1" ) != null){
        lbl1.innerHTML = sessionStorage.getItem("s1");
    }
    if (localStorage.getItem("l1") != null) {  //checking if local storage has any value for '
        lbl1.innerHTML = localStorage.getItem("l1");
    }
    function btn1(){
        sessionStorage.removeItem( "s1" );  // remove the item from storage
        window.location.reload();
    }
    function btn2() {
        localStorage.removeItem( "l1" );   //removing data from local storage
        window.location.reload();
    }
}
