let firstCard = 10;
let secondCard = 3;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let getMessage = document.getElementById("messageID");
let getSum = document.getElementById("sumID");
console.log(sum);


function startGame(){
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
getSum.innerText = sum;

}