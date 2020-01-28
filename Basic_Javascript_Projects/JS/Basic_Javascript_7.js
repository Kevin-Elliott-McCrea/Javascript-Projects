x=10
function local_var() {
    y = 5;
    document.getElementById("local").innerHTML = y;
}

function global_var() {
    document.getElementById("global").innerHTML = x;
}

//--------------------------------------------------------------------

function time() {
    if (new Date().getHours() > 12) {
        document.getElementById("day").innerHTML = "It is the afternoon time, my dear boy.";
    }
    else (new Date().getHours() < 12)
        document.getElementById("day").innerHTML = "Morning";
}

//--------------------------------------------------------------------

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

//--------------------------------------------------------------------