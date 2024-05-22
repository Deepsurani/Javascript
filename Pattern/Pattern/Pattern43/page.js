
    for(let i=1; i<=4; i++)
    {
        for(let j=1; j<=4; j++)
        {
            if(i==1 || j==1 || i==4 || j==4 )
            {
                lbl1.innerHTML +="*" + "&nbsp;&nbsp;&nbsp;";
            }
            else
            {
                lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        lbl1.innerHTML += "<br>";
    }