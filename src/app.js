/* eslint-disable */
import "bootstrap";
import "./style.css";

//functions to generate random numbers and suits

function toLetter(el) {
  switch (el) {
    case "1":
      return "A";
      break;
    case "11":
      return "J";
      break;
    case "12":
      return "Q";
      break;
    case "13":
      return "K";
      break;
    default:
      return el;
  }
}

function randomNumber() {
  let nmb = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
  ];
  let picked = Math.floor(Math.random() * nmb.length);
  return nmb[picked];
}

function randomSuit() {
  let suit = ["diamond", "spades", "heart", "club"];
  let picked = Math.floor(Math.random() * suit.length);
  return suit[picked];
}

function createCard(cls, num) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.classList.add(cls);
  div.innerHTML = num;
  return div;
}

//getting user input regarding buttons and card amounts
//getting spaces for card displays
//creating arrays for cards and respective suits
let drawBtn = document.getElementById("draw");
let sortBtn = document.getElementById("sort");
let amountInp = document.getElementById("amount");
let cardSpace = document.getElementById("cardSpace");
let logSpace = document.getElementById("logSpace");
let suit = [];
let numb = [];

//listener for drawing/generator button
drawBtn.addEventListener("click", () => {
  //selecting div where cards are displayed
  //if div isn't empty, emptying everytime draw button is called
  cardSpace.innerHTML = "";
  suit.length = 0;
  numb.length = 0;

  //container for whole card space
  //adding cards according to numeric input
  //adding container to card space
  let contain = document.createElement("div");
  contain.setAttribute("class", "cardContainer");
  for (let i = 0; i < `${amountInp.value}`; i++) {
    let rNum = randomNumber();
    let rSuit = randomSuit();
    numb.push(rNum);
    suit.push(rSuit);
    contain.append(createCard(rSuit, toLetter(rNum)));
  }
  cardSpace.append(contain);
});

//listener for sorting button
sortBtn.addEventListener("click", () => {
  //copying container arrays for numbers and suits
  //copying so original arrays stay on cardSpace
  let ers = numb;
  let sses = suit;
  logSpace.innerHTML = "";
  logSpace.innerHTML = "<h4>Select sort log:</h4>";

  //adapting SelectionSort function from 4Geeks lesson
  //sorting number array, applying changes to class array at the same time
  //both arrays have the same length
  let wall = 0; //wall at the initial index
  while (wall < ers.length - 1) {
    for (let i = wall + 1; i < ers.length; i++) {
      //if number at left is bigger than number at right: swap them
      //exchanges with wall so it doesn't process the same number again
      if (parseInt(ers[wall]) > parseInt(ers[i])) {
        let auxNum = ers[wall];
        let auxClass = sses[wall];
        ers[wall] = ers[i];
        sses[wall] = sses[i];
        ers[i] = auxNum;
        sses[i] = auxClass;

        //creating row, filling with updated array
        //adding row to logSpace
        let auxRow = document.createElement("div");
        auxRow.setAttribute("class", "cardContainer");
        for (let j in ers) {
          auxRow.append(createCard(sses[j], toLetter(ers[j])));
        }
        logSpace.append(auxRow);
      }
    }
    wall++;
  }
});
