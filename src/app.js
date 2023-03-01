/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//functions to generate random numbers and suits
function randomNumber() {
  let nmb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let picked = Math.floor(Math.random() * nmb.length);
  return nmb[picked];
}

function randomSuit() {
  let suit = ["diamond", "spades", "heart", "club"];
  let picked = Math.floor(Math.random() * suit.length);
  return suit[picked];
}

//getting user input regarding buttons and card amounts
let drawBtn = document.getElementById("draw");
let sortBtn = document.getElementById("sort");
let amountInp = document.getElementById("amount");

//listener for drawing/generator button
drawBtn.addEventListener("click", () => {
  //getting data inside div for dataSpace for draw, number input, space for cards
  let cardSpace = document.getElementById("cardSpace");
  let pickedNumber = `${amountInp.value}`;
  let genCard = document.getElementsByClassName("card");

  //while card space isn't null/empty, refreshing cards every time there's a click
  if (genCard == null) {
    console.log("nope!");
  } else {
    let crd = cardSpace.lastChild; //aux for every card in space, starting from the end
    while (crd) {
      cardSpace.removeChild(crd); //removing last card
      crd = cardSpace.lastChild; //aux for next last card, loop continues
    }
  }

  //adding cards according to user input
  for (let i = 0; i < pickedNumber; i++) {
    let oneCard = document.createElement("div");
    oneCard.classList.add("card");
    oneCard.classList.add(randomSuit());
    oneCard.innerHTML = randomNumber();
    console.log(oneCard);
    cardSpace.append(oneCard);
  }
});
