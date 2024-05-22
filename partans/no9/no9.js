function btn() {
    for(let i=1; i<=4; i++)
    {
        for(let j=4; j>=i; j--)
        {
            lbl.innerHTML +=i +"&nbsp&nbsp&nbsp";
        }
        console.log(lbl)
        lbl.innerHTML +="<br><br>";
    }
}