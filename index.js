var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftDiceImg = document.querySelector("img1");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightDiceImg = document.querySelector("img2");


function leftDiceGen(randomNumber1) {
  if (randomNumber1 === 1) {
    leftDiceImg = document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber1 === 2) {
    leftDiceImg = document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber1 === 3) {
    leftDiceImg = document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber1 === 4) {
    leftDiceImg = document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber1 === 5) {
    leftDiceImg = document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
  }
  if (randomNumber1 === 6) {
    leftDiceImg = document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
  }
}
leftDiceGen(randomNumber1);


function rightDiceGen(randomNumber2) {
  if (randomNumber2 === 1) {
    rightDiceImg = document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber2 === 2) {
    rightDiceImg = document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber2 === 3) {
    rightDiceImg = document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber2 === 4) {
    rightDiceImg = document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber2 === 5) {
    rightDiceImg = document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
  }
  if (randomNumber2 === 6) {
    rightDiceImg = document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
  }
}
rightDiceGen(randomNumber2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}


// Angela's Solution
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "image/dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

// var randomImageSource = "images/" + randomDiceImage; // images/dice1.png-images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //she combined into one line var randomDiceImage and var randomImageSource

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //she combined last 2 lines of code for left dice image for this right dice images

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
