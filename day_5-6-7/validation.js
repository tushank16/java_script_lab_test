function validateForm() 
{
    var userId = document.forms["myForm"]["userid"].value;
    var sln = userId.length;
    var password = document.forms["myForm"]["password"].value;
    var passwordlength = password.length;
    var mobile = document.forms["myForm"]["mobile"].value;
    var mobilelength = mobile.length;
    var age = document.forms["myForm"]["age"].value;
    var newage= Number(age);
    if ( sln > 15) {
        alert("You entered username containing " + sln +" characters\n Please Enter Username less than 15 characters");
        return false;
    }
    else if ( sln < 3) {
        alert("You entered username containing " + sln+" characters\n Please Enter Username Greater than 3 characters");
        return false;
    }

    else if ( passwordlength < 8) {
        alert("You entered password containing less than 8 characters");
        return false;
    }
    else if ( mobilelength != 10) {
        alert("Mobile must be a 10 digit number");
        return false;
    }
    else if ( newage < 18) {
        alert("Age must be greater than 18 ");
        return false;
    }
    else if ( newage > 100) {
        alert("Age must be less than 100 ");
        return false;
    }
}