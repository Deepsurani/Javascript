
    for(let i=1; i<=5; i++)
    {
        for(let k=1; k<=5-i; k++)
        {
            lbl1.innerHTML += "5" + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        for(let j=6-i; j<=5; j++)
        {
            lbl1.innerHTML +=j +"&nbsp;&nbsp;&nbsp;&nbsp;" ;
        }
        lbl1.innerHTML +="<br>";
    }