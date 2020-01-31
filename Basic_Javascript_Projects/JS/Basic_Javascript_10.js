function counter() {
    var Boom = "";
    var X = 1;
    while(X < 11) {
        Boom += "<br><br>" + X;
        X++;
    }
    document.getElementById("count").innerHTML = Boom;
}

// ----------------------------------------------------------

function length() {
    var L = "Hello";
    document.getElementById("long").innerHTML = L.length;
}

// ----------------------------------------------------------

var array = ["big, fast, strong"];
var grouper = ""
var counter;
function list() {
    for (counter = 0; counter < array.length; counter++) {
        grouper += array[counter];
    }
document.getElementById("music").innerHTML = counter;
}
// ----------------------------------------------------------

function constant_fun() {
    const myObject = {x:5, y:10};
    myObject.z = 20;
    myObject.x = 15;
    document.getElementById("constanto").innerHTML = myObject.x + " " + myObject.z;
}

// ----------------------------------------------------------

var q = 10;
document.getElementById("let").innerHTML = q + "<br>"
{
    let q = 20;
    document.getElementById("let2").innerHTML = q
}

// ----------------------------------------------------------

var hiThere = wowzers()

function wowzers() {
    return "hello"
}

console.log(hiThere)

// ----------------------------------------------------------

let table = {
    wood: "oak",
    finish: "lacquer",
    style: "modern",
    details: function () {
        return "This table is made from the finest " + this.wood;
    }
};
document.getElementById("let_variable").innerHTML = table.details()

// ----------------------------------------------------------

var bango = "";
var i;
for (i = 0; i < 10; i++) {
    if (i == 6) { continue; }
    if (i === 8) { break; }
    bango += "This is " + i + "<br>";
}
document.getElementById("loop").innerHTML = bango

// ----------------------------------------------------------
