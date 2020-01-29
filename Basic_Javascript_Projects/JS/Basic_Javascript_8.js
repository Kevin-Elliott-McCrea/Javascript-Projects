function concat() {
    var A = "Yes, that's right.";
    var B = " I am a big guy.";
    var together = A.concat(B);
    document.getElementById("group").innerHTML = together;
}

//-------------------------------------------------------------------

function big_slice() {
    var A = "1 2 3 4 5";
    var section = A.slice(6,8);
    document.getElementById("piece").innerHTML = section;
}

//-------------------------------------------------------------------

function num_to_string() {
    var A = 10;
    document.getElementById("num").innerHTML = A.toString();
}

//-------------------------------------------------------------------

function num_length() {
    var N = 10.2013517927931;
    document.getElementById("length").innerHTML = N.toPrecision(8);
}

function original() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("obj").innerHTML = res
}

function num_fixed() {
    var N = 20.2013517927931;
    document.getElementById("decimal").innerHTML = N.toFixed(3);
}
