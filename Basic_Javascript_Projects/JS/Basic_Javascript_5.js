function test() {
    document.getElementById("id").innerHTML = 0/0;
}

function is() {
    document.getElementById("not_number").innerHTML = isNaN('yes');
}

function is_not() {
    document.getElementById("number").innerHTML = isNaN('10');
}

// --------------------------------------------------------------

function infinite() {
    document.getElementById("large").innerHTML = (2E310)
}

function neg_infinite() {
    document.getElementById("neg_large").innerHTML = (-2E310)
}


// --------------------------------------------------------------

function correct() {
    document.write(23>22)
}

function incorrect() {
    document.write(20<10);
}

// --------------------------------------------------------------

console.log(2+2)

// --------------------------------------------------------------

console.log("10" + 2)

// --------------------------------------------------------------

console.log(10<5)

// --------------------------------------------------------------

console.log((5+5) == 10)

// --------------------------------------------------------------

function Good() {
    X=10;
    Y=10;
    document.getElementById("both_true").innerHTML = (Y === X);
}

function doubledif() {
    X="word";
    Y=10;
    document.getElementById("false1").innerHTML = (Y === X);
}

function difdata() {
    X="10";
    Y=10;
    document.getElementById("false2").innerHTML = (Y === X)
}

function difval() {
    X=10;
    Y=5;
    document.getElementById("false3").innerHTML = (Y === X)
}

// --------------------------------------------------------------

function and_op() {
    window.alert(5>10 && 3>2)
}

function or_op() {
    window.alert(10>5 || 500<20)
}

// --------------------------------------------------------------

function not_op() {
    document.getElementById("not").innerHTML = !(5>10)
}

function false_not_op() {
    document.getElementById("not_not").innerHTML = !(10>5)
}