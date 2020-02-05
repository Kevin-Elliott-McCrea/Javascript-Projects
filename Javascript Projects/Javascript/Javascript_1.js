function pizza_picker() {
    var pizza_output;
    var toppings = document.getElementById("pizza_input").value;
    var pizza_invalidation = ", are you kidding me?";
    switch(toppings) {
        case "Pepperoni":
            pizza_output = "Pepperoni";
            break;
        case "Hawaiian":
            pizza_output = "Hawaiian";
            break;
        case "Sausage":
            pizza_output = "Sausage";
            break;
        default:
            pizza_output = "You didn't type it right... Is your caps lock on?";
    }
document.getElementById("output").innerHTML = pizza_output;
}

//--------------------------------------------------------------------------------------------------------------------------

function changer() {
    var Z = document.getElementsByClassName("change");
    Z[0].innerHTML = "<br><br>changed";
}

//--------------------------------------------------------------------------------------------------------------------------

function big_paint() {
    var c = document.getElementById("full_canvas");
    var ctx = c.getContext("2d");
   
    var grd = ctx.createLinearGradient(0,0,300,0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 500, 400);
}