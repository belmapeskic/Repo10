// Only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse",
}
function dotNotation(myClothes) {
    hatValue = myClothes.hat; // "Fedora"
    shirtValue = myClothes.shirt; // "Nike"
    shoesValue = myClothes.shoes; // "Converse"
    return { hatValue, shirtValue, shoesValue };
}
// Only change code above this line
console.log(dotNotation(myClothes)); // Change this line
module.exports = dotNotation(myClothes);