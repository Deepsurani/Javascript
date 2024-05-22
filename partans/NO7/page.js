function btn(){
    for (let i = 1; i <= 4; i++)
    {
        for (let j = 1; j <= 4; j++)
        {
            lbl1.innerHTML += j * (5-i)+"&nbsp;";
        }
        lbl1.innerHTML +="<br><br>";
    }
}