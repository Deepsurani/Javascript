
    for(let i=1; i<=4; i++)
    {
        for(let k=1; k<=5-i; k++)
        {
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        for(let j=1; j<=i; j++)
        {
            lbl1.innerHTML +=j + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br><br>";
    }