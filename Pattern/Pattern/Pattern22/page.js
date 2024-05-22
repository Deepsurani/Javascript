
    for(let i=1; i<=4; i++)
    {
        for(let k=1; k<=4-i; k++)
        {
            lbl1.innerHTML +="&nbsp&nbsp&nbsp";
        }
        for(let j=1; j<=i; j++)
        {
            lbl1.innerHTML +=i + "&nbsp";
        }
        lbl1.innerHTML +="<br><br>";
    }