function validateNum() {
    var x = document.forms["myForm"]["area-code"].value;
    if (x == "") {
        alert("Number must be filled out");
        return false;
    }
}