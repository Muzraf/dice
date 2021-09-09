function dice(num1) {

  if ( num1 === 1) {
    document.querySelector(".img1").src="images/dice1.png";
  } else if ( num1 === 2 ) {
    document.querySelector(".img1").src="images/dice2.png";
  } else if ( num1 === 3 ) {
    document.querySelector(".img1").src="images/dice3.png";
  } else if ( num1 === 4 ) {
    document.querySelector(".img1").src="images/dice4.png";
  } else if ( num1 === 5 ) {
    document.querySelector(".img1").src="images/dice5.png";
  } else if ( num1 === 6 ) {
    document.querySelector(".img1").src="images/dice6.png";
  }
}

var a = Math.floor(Math.random()*6 +1);

function dice2(num2) {

  if ( num2 === 1) {
    document.querySelector(".img2").src="images/dice1.png";
  } else if ( num2 === 2 ) {
    document.querySelector(".img2").src="images/dice2.png";
  } else if ( num2 === 3 ) {
    document.querySelector(".img2").src="images/dice3.png";
  } else if ( num2 === 4 ) {
    document.querySelector(".img2").src="images/dice4.png";
  } else if ( num2 === 5 ) {
    document.querySelector(".img2").src="images/dice5.png";
  } else if ( num2 === 6 ) {
    document.querySelector(".img2").src="images/dice6.png";
  }
}

function won(a, b) {
  if (a>b) {
    document.querySelector(".won").innerText="$$$ Player 1 won. $$$"
  } else if (a===b) {
    document.querySelector(".won").innerText="I won...^_^"
  } else {
    document.querySelector(".won").innerText="$$$ Player 2 won.. $$$"
  }
}


var b = Math.floor(Math.random()*6 +1);


dice(a);
dice2(b);
won(a,b);
