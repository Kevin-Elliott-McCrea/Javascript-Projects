function magical_me() {
    G = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + G;
}

function RIP() {
    P = 2 - 2;
    document.getElementById("math").innerHTML = "2 - 2 = " + P;
}

function mul_div() {
    M = 4 * 4;
    D = 4 / 4;
    document.getElementById("math").innerHTML = M;
    document.getElementById("double").innerHTML = D;
}

function multiple_op() {
    A = 4 - 7 * 3 + (20-5) / 4;
    document.getElementById("big").innerHTML = A;
}

function remainder() {
    R = 100 % 24;
    document.getElementById("leftover").innerHTML = R;
}

function neg_output() {
    N = 10;
    document.getElementById("reverse").innerHTML = -N;
}

function inc_dec() {
    T = 5;
    M = 10;
    T++;
    M--;
    document.getElementById("down").innerHTML = T;
    document.getElementById("up").innerHTML = M;
}

function random() {
    window.alert(Math.random() * 50)
}

function power() {
    document.getElementById("pow").innerHTML = Math.pow(5,4);
}