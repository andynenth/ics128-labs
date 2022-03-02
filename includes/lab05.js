function validation() {
    let name = document.forms['lab05']['name'].value;
    let age = document.forms['lab05']['age'].value;
    let email = document.forms['lab05']['email'].value;
    let phone = document.forms['lab05']['phone'].value;
    let pcode = document.forms['lab05']['pcode'].value;
    if (!isNotEmpty(name)) {
        alert("Name cannot be blank!");
        document.getElementById('name').focus();
        return false;
    }
    if (!ageValid(age)){
        alert("Age must be a number between 0 and 120");
        document.getElementById('age').value = '';
        document.getElementById('age').focus();
        return false;
    }
    if (!emailValid(email)){
        alert("Please enter valid email");
        document.getElementById('email').value = '';
        document.getElementById('email').focus();
        return false;
    }
    if (!phoneValid(phone)){
        alert("Please enter valid phone number");
        document.getElementById('phone').value = '';
        document.getElementById('phone').focus();
        return false;
    }
    if (!postalCodeValid(pcode)){
        alert("Please enter valid postal code");
        document.getElementById('pcode').value = '';
        document.getElementById('pcode').focus();
        return false;
    }
    alert("The validation was successful!");
    return true;
}

function postalCodeValid(str){
    const re1 = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    const re2 = /^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/;
    return re1.test(str) || re2.test(str);
}

function emailValid(str) {
    //[A-Za-z0-9_] then @ then [A-Za-z0-9_] then . then [A-Za-z0-9_]
    const re = /\w+@\w+\.\w+/;
    return re.test(str);
}

function phoneValid(str){
    const re1 = /^\d{3}-\d{3}-\d{4}$/;
    const re2 = /^\d{10}$/;
    const re3 = /^\d{3}\s\d{3}\s\d{4}$/;
    return re1.test(str) || re2.test(str) || re3.test(str);
}

function isNotEmpty(str) {
    return str.trim().length;
}

function ageValid(str){
    return str > 0 && str < 120;
}