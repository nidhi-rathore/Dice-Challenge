var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + randomNumber1 +  ".png";
var randomDiceImage = "images/" + randomDice;

var image1 = document.querySelectorAll("img") [0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomNumber2 +  ".png";
var randomDiceImage2 = "images/" + randomDice2;
var image2 = document.querySelectorAll("img") [1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Hurrah!! Player 1 wins 🥳"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Yippiee!! Player 2 wins 🎉"
}
else {
    document.querySelector("h1").innerHTML = "Oopsiee :( Match Draw 🤧"
}