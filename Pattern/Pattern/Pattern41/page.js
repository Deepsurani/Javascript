
    for(let i=1; i<=4; i++)
    {
        for(let k=i; k>=4-i; k--)
        {
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;";
        }
        for(let j=1; j<=5-i; j++)
        {
            lbl1.innerHTML +="*" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        lbl1.innerHTML += "<br><br>";
    }
    for(let i=2; i<=4; i++)
    {
        for(let k=i; k<=4-1; k++)
        {
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        for(let j=1; j<=i; j++)
        {
            lbl1.innerHTML +="*"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br><br>";
    }