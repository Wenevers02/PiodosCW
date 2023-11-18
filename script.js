function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age =  document.getElementById('age').value;
    var contactnumber = document.getElementById('ContactNumber').value;
    var email = document.getElementById("email").value;
    var address = document.getElementById('address').value;
    var province = document.getElementById('province').value;
    
    console.clear();
    console.log('Personal Information:');
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
    console.log('Age:' + age);
    console.log('Contact number:' + contactnumber);
    console.log('Email: ' + email);
    console.log('Address: ' + address);
    console.log('Province: ' + province);
}