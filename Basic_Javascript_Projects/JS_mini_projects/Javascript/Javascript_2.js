function validateForm() {
    var x = document.forms["boom"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}