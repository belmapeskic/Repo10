// Create school object here
var school = {
    name: "Arena",
    location: "Sarajevo",
    established: "2020"
}
// End school object here

// Create a function below this line
function myFunction(name) {
    school.name = "Paragon";
    return school;
}
// End of function
console.log(myFunction("Paragon")); 
module.exports = { school, myFunction };