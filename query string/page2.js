window.onload = function () {
    var QueryString = new URLSearchParams(window.location.search);
    if (QueryString.has("name") == true) {
        lbl1.innerHTML = QueryString.get("name").toString();
    }
    if (QueryString.has("email") == true){
        lbl2.innerHTML = QueryString.get("email").toString();
    }
    console.log(QueryString);
}