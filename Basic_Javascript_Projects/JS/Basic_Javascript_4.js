function list() {
    var School = {
        Supplies:"Books",
        Entertainment:"Phone",
        Shoes:"Nike"
    };
    delete School.Shoes
    document.getElementById("Dictionary").innerHTML = School.Shoes;
}