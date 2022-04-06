// Only change code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
}
function bracketsNotation(myFood) {
    vegetableValue = myFood["vegetable"]; // "carrot"
    fruitValue = myFood["fruit"]; // "orange"
    drinkValue = myFood["drink"]; // "water"
    return { vegetableValue, fruitValue, drinkValue };
}
// Only change code above this line
console.log(bracketsNotation(myFood)); // Change this line
module.exports = bracketsNotation(myFood);