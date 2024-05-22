function btn1Click(){
    var name = document.getElementById('txt1').value;
        var email = document.getElementById('txt2').value;
        var city = document.getElementById('drop1').value;
        var gender = document.querySelector('input[name="rdo1"]:checked') ? document.querySelector('input[name="rdo1"]:checked').value : "";
        var address = document.getElementById('txt3').value;
        var dob = document.getElementById('dt1').value;

        var formData = {
            name: name,
            email: email,
            city: city,
            gender: gender,
            address: address,
            dob: dob
        };

        var formDataJSON = JSON.stringify(formData);
        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 1);

        document.cookie = "formData=" + formDataJSON + ";expires=" + expiryDate.toUTCString() + ";path=/";

        window.location.href = "page2.html";
}