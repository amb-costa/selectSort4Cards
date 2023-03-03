/* eslint-disable */
import "bootstrap";
import "./style.css";

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

//listener for sorting button
sortBtn.addEventListener("click", () => {
  //obtaining every DIV using class selector
  let rryUnsort = document.getElementsByClassName("card");
  let numsUnsort = [];
  //obtaining innerHTML/number from every card
  for (let el of rryUnsort) {
    numsUnsort.push(el.innerHTML);
  }
  console.log(rryUnsort);
  console.log(numsUnsort);
});

//bubbleSort function adapted fron 4Geeks lesson
//added aux object to record bubble log
function bubbleSort(array) {
  let wall = array.length - 1; //we start the wall at the end of the array
  let auxObj = {};
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      let auxIndex = index;
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (array[index] > arr[index + 1]) {
        let aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux;
        auxObj[auxIndex] = array;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return array;
}
