window.onload=function(){
    var cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('formData='));

    if (cookie) {

        var formDataJSON = cookie.split('=')[1];
        var formData = JSON.parse(formDataJSON);

        document.getElementById('name').textContent = formData.name;
        document.getElementById('email').textContent = formData.email;
        document.getElementById('city').textContent = formData.city;
        document.getElementById('gender').textContent = formData.gender;
        document.getElementById('address').textContent = formData.address;
        document.getElementById('dob').textContent = formData.dob;
    }
}  