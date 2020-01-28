function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//-----------------------------------------------------

function ball(hardness, bounce_height, diameter) {
    this.ball_hardness = hardness
    this.ball_bounce_height = bounce_height
    this.ball_diameter = diameter
}
var sonic = new ball("very hard", 100, 50);
function superball() {
    document.getElementById("New_and_This").innerHTML = 
    "Kevin has a " + sonic.ball_hardness + " (super)ball. It's also big.";
}

//-----------------------------------------------------

function addition() {
    document.getElementById("nested_function").innerHTML = add();
    function add() {
        return Math.random()
    }
}

