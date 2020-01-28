function yes_vote() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age<18)? "Not quite there, buddy.":"You must vote to save our empire.";
    document.getElementById("vote").innerHTML = can_vote;
}