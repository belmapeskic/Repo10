// Create lion object here
var lion = {
    name: "Simba",
    legs: "4",
    tails: "1"
}
// End lion object here

// Create a function below this line
function myFunction(roar, roar, roar) {
    lion["roar"] = "roar-roar"; // "roar-roar"
    return lion;
}
// End of function
console.log(myFunction("roar", "roar-roar")); 
module.exports = myFunction;