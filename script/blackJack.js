let firstCard = 10;
let secondCard = 3;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let getMessage = document.getElementById("messageID");
let getSum = document.getElementById("sumID");
let getCard = document.getElementById("cardID");

console.log(sum);

function startGame() {
    getCard.innerText = "Cards: " + firstCard + " - " + secondCard;
    if (sum < 21) {
        message = "Do you want another card? ";
    }
    else if (sum === 21) {
        message = "You won!";
        hasBlackjack = true;
    }
    else if (sum > 21) {
        message = "You lost!";
        isAlive = false;
    }

    getMessage.innerText = message;
    getSum.innerText = "Sum: " + sum;
   

}
function restartGame(){
    getSum.innerText = "Sum: ";
    getCard.innerText = "Cards: " 
    getMessage.innerText = "Wanna play a round?";

}