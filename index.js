
var randomNumber1 = Math.floor(1+(6*Math.random()));

var interpertation1 = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",interpertation1);

var randomNumber2 = Math.floor(1+(6*Math.random()));

var interpertation2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",interpertation2);

if(interpertation1>interpertation2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}

else if(interpertation1<interpertation2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}

else if(interpertation1==interpertation2){
  document.querySelector("h1").innerHTML = "Draw! 🚩"
}
