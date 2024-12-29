function validation()
{
    var name = document.getElementById('uname').value;
    var email = document.getElementById('uemail').value;
    var password = document.getElementById('pass').value;
    var contactNum = document.getElementById('num').value;
    
    var nameCheck = /^[a-zA-Z].{3,20}$/;
    var emailCheck = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
     // ?=.* (atleast one)
    var passwordCheck = /^(?=.*\d)(?=.*[!@#$&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var numCheck = /^(\+92|0)[0-9]{10}$/;


    if(nameCheck.test(name))
    {
        document.getElementById('nameError').innerHTML = "";
    }
    else
    {
        document.getElementById('nameError').innerHTML = "Invalid username";
        return false;
    }


    if(emailCheck.test(email))
    {
        document.getElementById('emailError').innerHTML = "";
    }
    else
    {
        document.getElementById('emailError').innerHTML = "Invalid email";
        return false;
    }


    if(passwordCheck.test(password))
    {
        document.getElementById('passError').innerHTML = "";
    }
    else
    {
        document.getElementById('passError').innerHTML = "Invalid password";
        return false;
    }


    if(numCheck.test(contactNum))
    {
        document.getElementById('numError').innerHTML = "";
    }
    else
    {
        document.getElementById('numError').innerHTML = "Invalid username";
        return false;
    }
    if(nameCheck.test(name)&& emailCheck.test(email) && passwordCheck.test(password) && numCheck.test(contactNum))
    {
        alert("Succefully Submitted")
    }
    else
    {
        alert("Invalid attemted")
    }
}