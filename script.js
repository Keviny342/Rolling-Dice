function rollingDice()
{
    let diceOne = (Math.floor(Math.random() * 6) + 1);
    let diceTwo = (Math.floor(Math.random() * 6) + 1);
    let diceValues = document.createElement("p");
    let diceSum = document.createElement("p");
    let diceResult = document.createElement("p");
    diceValues.textContent = "You rolled a " + diceOne + " and a " + diceTwo + ".";
    diceSum.textContent  = "In total you rolled a " + (diceOne + diceTwo) + ".";
    if ((diceOne + diceTwo) > 6)
    {
        diceResult.textContent = "You win."
    }
    else
    {
        diceResult.textContent = "You lost. Sell one organ please."
    }
    document.body.appendChild(diceValues);
    document.body.appendChild(diceSum);
    document.body.appendChild(diceResult);
}
let button = document.querySelector("button");
button.addEventListener("click", rollingDice);