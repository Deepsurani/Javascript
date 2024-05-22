
var a=1;

    for(let i=1; i<=4; i++)
    {
        for(let k=4; k>=5-i; k--)
        {
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        for(let j=i; j<=4; j++)
        {
            lbl1.innerHTML +=a++ +"&nbsp;&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br><br>";
    }