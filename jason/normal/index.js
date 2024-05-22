var RegList=[];
var Count =1;
window.onload = function(){
    if(localStorage.getItem("Registration")!=null){
        var JsonData= localStorage.getItem( "Registration" );
        RegList=JSON.parse(JsonData);
        console.log(RegList)
        for (let i = 0; i < RegList.length; i++) {
            const RegObj= RegList[i];
            CreateRow(RegObj,i+1);
            Count++;
        }
    }
}
function SendData(){
    var RegObj={
        Name : txt1.value,
        Email:txt2.value,
        Mobile:txt3.value,
        BDate:txt4.value,
    };
    RegList.push(RegObj);
    CreateRow(RegObj,Count);
    Count++;
    var JsonData= JSON.stringify(RegList);
    localStorage.setItem("Registration",JsonData);
    console.log(RegList);
}

function CreateRow(RegistrationObj, No) {
    var Row = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(Row);

    var NoCol = document.createElement("td");
    NoCol.innerHTML = No;
    Row.appendChild(NoCol);

    var NameCol = document.createElement("td");
    NameCol.innerHTML = RegistrationObj.Name;
    Row.appendChild(NameCol);

    var EmailCol = document.createElement("td");
    EmailCol.innerHTML = RegistrationObj.Email;
    Row.appendChild(EmailCol);

    var MobileCol = document.createElement("td");
    MobileCol.innerHTML = RegistrationObj.Mobile;
    Row.appendChild(MobileCol);
    
    var DateCol = document.createElement("td");
    DateCol.innerHTML = RegistrationObj.BDate;
    Row.appendChild(DateCol);
}