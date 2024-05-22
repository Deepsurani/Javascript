

    for(let i=1; i<=4; i++)
    {
        for(let k=4-i; k<=i; k++)
        {
            lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for(let j=1; j<=5-i; j++)
        {
            lbl1.innerHTML +=j + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        lbl1.innerHTML += "<br><br>";
    }