var hotdog = 3.75;
var fries = 3.00;
var drink = 2.50;
document.body.innerHTML(hotdog);
document.write(fries);
document.write(drink);

var numDogs = prompt("How many hotdogs would you like?")
document.write(numDogs);

var numFries = prompt("How many fries would you like?")
document.write(numFries);

var numSoda = prompt("And how many sodas would you like?")
document.write(numSoda);

var subtotal;
subtotal = (hotdog * numDogs) + (fries * numFries) + (drink * numSoda);
document.write(subtotal);

var discount = subtotal * 0.1;
if (subtotal > 25.00) {subtotal = subtotal - discount;}
document.write(subtotal);
