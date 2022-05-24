function allfill() {
var err = document.getElementById("error");
var firstname = document.getElementById("fstname").value;
var lastname = document.getElementById("lstname").value;
var dateofbirth = document.getElementById("dateofbirth").value;
var agee1 = document.getElementById("agee1").value;
var email = document.getElementById("email").value;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var cnf_password = document.getElementById("cnf-password").value;
var age = document.getElementById("age").checked;
var gender = document.getElementById("gender").checked;

if (
firstname == "" ||
lastname == "" ||
dateofbirth == "" ||
agee1 == "" ||
email == "" ||
username == "" ||
password == "" ||
cnf_password == "" ||
age == false
) 
{
err.innerHTML = "** Please complete all fields.";
err.classList.remove("hide");
err.classList.add("error");
return false;
} 
else
{
err.innerHTML = "";
err.classList.add("hide");
err.classList.remove("error");
return true;
}
}

function fstlstlimit() {
var firstname = document.getElementById("fstname");
var lastname = document.getElementById("lstname");
var err = document.getElementById("error");
if (firstname.value.length > 30 || lastname.value.length > 30) {
err.innerHTML = "First name and last name should be limited to 30 characters.";
err.classList.remove("hide");
err.classList.add("error");
return false;
} 
    
else
{
err.innerHTML = "";
err.classList.add("hide");
err.classList.remove("error");
return true;
}
}


function validateForm()
{
if (!allfill() ||
!fstlstlimit() ||
!CheckEmail() ||
!userName() ||
!passordvalidation() ||
!passwordconfirm() ||
!Check()
) {
return false;} 
else 
{
return true;
}
}


function calculateage() {
var dateofbirth = document.getElementById("dateofbirth");
var agee1_in = document.getElementById("agee1");
var today = new Date();
var birthDate = new Date(dateofbirth.value);
var agee1 = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
 {
        agee1--;
 }
    agee1_in.value = agee1;
}


function CheckEmail() {
var err = document.getElementById("error");
var email = document.getElementById("email").value;
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var stat = re.test(String(email).toLowerCase());
if (!stat) {
err.innerHTML = "**Invalid Email ID";
err.classList.remove("hide");
err.classList.add("error");
return false;
} 
else
{
err.innerHTML = "";
err.classList.add("hide");
err.classList.remove("error");
return true;
}
}


function userName() {
var err = document.getElementById("error");
var username = document.getElementById("username");
val = username.value;
if (!/^[a-z]+$/.test(val) || val.length > 10) {
err.innerHTML ="** Please limit user name to 10 characters and use lowercase letters only";
err.classList.remove("hide");
err.classList.add("error");
return false;
} 
else
{
err.innerHTML = "";
err.classList.add("hide");
err.classList.remove("error");
return true;
}
}



function passordvalidation() {
var err = document.getElementById("error");
var password = document.getElementById("password");
var val = password.value;
if (val.length > 15 || val.length < 6 || !val.match(/[0-9]/g)) {
err.innerHTML ="** The password should contain 6 - 15 characters and should contain atleast one number.";
err.classList.remove("hide");
err.classList.add("error");
return false;
} 
else
{
err.innerHTML = "";
err.classList.add("hide");
err.classList.remove("error");
return true;
}
}


function passwordconfirm() {
var err = document.getElementById("error");
var password = document.getElementById("password");
var cnf_password = document.getElementById("cnf-password");
if (password.value.localeCompare(cnf_password.value) != 0) {
err.innerHTML = "Passwords don't match";
err.classList.remove("hide");
err.classList.add("error");
return false;
} 
else 
{
err.innerHTML = "";
err.classList.add("hide");
err.classList.remove("error");
return true;
}
}


function Check() {
    var err = document.getElementById("error");
    var ag = document.getElementById("age");
    var bu = document.getElementById("su-button");
    console.log(age.checked);
    if (!age.checked) {
        err.innerHTML = "Please agree to the Terms & Conditions";
        err.classList.remove("hide");
        err.classList.add("error");
        bu.disabled = true;
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        bu.disabled = false;
        return true;
    }
}