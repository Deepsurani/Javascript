var count = 1;

function btn1click() {
    var Name = txt1.value;
    var Email = txt2.value;
    var City = drop1.value;
    var Gender = "";
    if (rdo1.checked == true) {
        Gender = rdo1.value;
    } else if (rdo2.checked == true) {
        Gender = rdo2.value;
    }
    var Address = txt3.value;
    var DOB = drop2.value + "/" + drop3.value + "/" + drop4.value;
    CreateRow(count, Name, Email, City, Gender, Address, DOB);
    count++;
    clearFields();
}

function btn2Click() {
    var Name = txt1.value;
    var Email = txt2.value;
    var City = drop1.value;
    var Gender = "";
    if (rdo1.checked == true) {
        Gender = rdo1.value;
    } else if (rdo2.checked == true) {
        Gender = rdo2.value;
    }
    var Address = txt3.value;
    var DOB = drop2.value + "/" + drop3.value + "/" + drop4.value;

    var RowPos = document.getElementById("UpdateBtn").getAttribute("data-pos");
    var ColsOfRow = document.querySelectorAll("#tbdTag>tr:nth-child(" + RowPos + ")>td");
    ColsOfRow[1].innerHTML = Name;
    ColsOfRow[2].innerHTML = Email;
    ColsOfRow[3].innerHTML = City;
    ColsOfRow[4].innerHTML = Gender;
    ColsOfRow[5].innerHTML = Address;
    ColsOfRow[6].innerHTML = DOB;

    clearFields();

    btn1.style.display = "block";
    UpdateBtn.style.display = "none";
}

function CreateRow(No, Name, Email, City, Gender, Address, DOB) {
    // Row
    var Row = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(Row);

    // No Column
    var NoCol = document.createElement("td");
    NoCol.innerHTML = No;
    NoCol.setAttribute("name", "count");
    Row.appendChild(NoCol);

    // Name column
    var NameCol = document.createElement("td");
    NameCol.innerHTML = Name;
    Row.appendChild(NameCol);

    // Email column
    var EmailCol = document.createElement("td");
    EmailCol.innerHTML = Email;
    Row.appendChild(EmailCol);

    // City column
    var CityCol = document.createElement("td");
    CityCol.innerHTML = City;
    Row.appendChild(CityCol);

    // Gender column
    var GenderCol = document.createElement("td");
    GenderCol.innerHTML = Gender;
    Row.appendChild(GenderCol);

    // Address column
    var AddressCol = document.createElement("td");
    AddressCol.innerHTML = Address;
    Row.appendChild(AddressCol);

    // DOB column
    var DOBCol = document.createElement("td");
    DOBCol.innerHTML = DOB;
    Row.appendChild(DOBCol);

    // Edit column
    var EditCol = document.createElement("td");
    Row.appendChild(EditCol);

    // Edit button
    var EditBtn = document.createElement("input");
    EditBtn.type = "button";
    EditBtn.value = "Edit";
    EditBtn.onclick = function () {
        btn1.style.display = "none";
        UpdateBtn.style.display = "block";

        txt1.value = NameCol.innerHTML;
        txt2.value = EmailCol.innerHTML;
        drop1.value = CityCol.innerHTML;

        if (GenderCol.innerHTML == "Male") {
            rdo1.checked = true;
        } else if (GenderCol.innerHTML == "Female") {
            rdo2.checked = true;
        }

        txt3.value = AddressCol.innerHTML;

        var dobParts = DOBCol.innerHTML.split('/');
        drop2.value = dobParts[0];
        drop3.value = dobParts[1];
        drop4.value = dobParts[2];

        document.getElementById("UpdateBtn").setAttribute("data-pos", NoCol.innerHTML);
    };
    EditCol.appendChild(EditBtn);

    // Delete column
    var DeleteCol = document.createElement("td");
    Row.appendChild(DeleteCol);

    // Delete button
    var DeleteBtn = document.createElement("input");
    DeleteBtn.type = "button";
    DeleteBtn.value = "Delete";
    DeleteBtn.onclick = function () {
        document.getElementById("tbdTag").removeChild(Row);
        updateRowNumbers();
    };
    DeleteCol.appendChild(DeleteBtn);
}

function updateRowNumbers() {
    var rows = document.querySelectorAll("#tbdTag>tr>td[name='count']");
    for (var i = 0; i < rows.length; i++) {
        rows[i].innerHTML = i + 1;
    }
    count = rows.length + 1;
}

function clearFields() {
    txt1.value = "";
    txt2.value = "";
    drop1.selectedIndex = 0;
    txt3.value = "";
    rdo1.checked = false;
    rdo2.checked = false;
    drop2.selectedIndex = 0;
    drop3.selectedIndex = 0;
    drop4.selectedIndex = 0;
}
