


let randomNumber1=Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;

let randomImage1 = "images/dice"+randomNumber1+".png";
// let randomImage2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

function score(){
  let scoreDraw= "Draw!";
  let scorePlayer1="Player 1 Wins!";
  let scorePlayer2="Player 2 Wins!";
  if (randomNumber1>randomNumber2){
    return scorePlayer1;
  } else if (randomNumber1<randomNumber2){
      return scorePlayer2;
      } else {
        return scoreDraw;
      }
    }
document.querySelector("h1").innerHTML=score();
