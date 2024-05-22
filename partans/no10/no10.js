function btn() {
    for(let i=1; i<=4; i++)
    {
        for(let k=1; k<=4-i; k++)
        {
            lbl.innerHTML +="&nbsp&nbsp&nbsp";
        }
        for(let j=1; j<=i; j++)
        {
            lbl.innerHTML +=i + "&nbsp";
        }
        lbl.innerHTML +="<br><br>";
    }
}