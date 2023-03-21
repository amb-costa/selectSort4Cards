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
  logSpace.innerHTML = "<h4>Bubble log:</h4>";

  //adapting bubbleSort function from 4Geeks lesson
  //sorting number array, applying changes to class array at the same time
  //both arrays have the same length
  let wall = ers.length - 1; //wall at end of array
  while (wall > 0) {
    let i = 0;
    while (i < wall) {
      //comparison between adjacent positions in number array
      //if left one is bigger: swap in both arrays
      if (parseInt(ers[i]) > parseInt(ers[i + 1])) {
        let auxNum = ers[i];
        let auxClass = sses[i];
        ers[i] = ers[i + 1];
        sses[i] = sses[i + 1];
        ers[i + 1] = auxNum;
        sses[i + 1] = auxClass;

        //creating row, filling with updated array
        //adding row to logSpace
        let auxRow = document.createElement("div");
        auxRow.setAttribute("class", "cardContainer");
        for (let j in ers) {
          auxRow.append(createCard(sses[j], toLetter(ers[j])));
        }
        logSpace.append(auxRow);
      }
      i++; //sorting until whole array is done
    }
    wall--; //reducing wall for optimization
  }
});
