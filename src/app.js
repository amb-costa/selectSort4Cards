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
    cardSpace.append(oneCard);
  }
});

//listener for sorting button
sortBtn.addEventListener("click", () => {
  //obtaining every card DIV using class selector
  let classUnsort = Array.from(document.getElementsByClassName("card"));
  let numsUnsort = [];
  //obtaining innerHTML/number from every card
  //in case of A J Q K, replace for number
  for (let el of classUnsort) {
    const num = el.innerHTML;
    switch (num) {
      case "A":
        numsUnsort.push("1");
        break;
      case "J":
        numsUnsort.push("11");
        break;
      case "Q":
        numsUnsort.push("12");
        break;
      case "K":
        numsUnsort.push("13");
        break;
      default:
        numsUnsort.push(num);
    }
  }
  //adapting bubbleSort function from 4Geeks lesson
  //sorting number array, applying changes to class array at the same time
  //both arrays have the same length
  let wall = numsUnsort.length - 1; //wall at end of array
  while (wall > 0) {
    let i = 0;
    while (i < wall) {
      //comparison between adjacent positions in number array
      //if left one is bigger: swap in both arrays
      if (parseInt(numsUnsort[i]) > parseInt(numsUnsort[i + 1])) {
        let auxNum = numsUnsort[i];
        let auxClass = classUnsort[i];
        numsUnsort[i] = numsUnsort[i + 1];
        classUnsort[i] = classUnsort[i + 1];
        numsUnsort[i + 1] = auxNum;
        classUnsort[i + 1] = auxClass;
      }
      i++; //sorting until whole array is done
    }
    wall--; //reducing wall for optimization
  }
  //creating cards for every number and respective class
  for (let i = 0; i < numsUnsort.length; i++) {
    //in case of 1 11 12 13, turn number into A J Q K
    let num = numsUnsort[i];
    switch (num) {
      case "1":
        classUnsort[i].innerHTML = "A";
        break;
      case "11":
        classUnsort[i].innerHTML = "J";
        break;
      case "12":
        classUnsort[i].innerHTML = "Q";
        break;
      case "13":
        classUnsort[i].innerHTML = "K";
        break;
      default:
        classUnsort[i].innerHTML = num;
    }
    cardSpace.append(classUnsort[i]);
  }
});
