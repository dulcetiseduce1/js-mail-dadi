/* 
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
 */

const numeriUtente = [];
const numeriAi = [];
const maxNum = 6;

let sommaNumUtente = 0;
let sommaNumAi = 0;

for (let i = 1; i <= maxNum; i++) {
  // Generiamo i numeri random per entrambi i giocatori
  const randomNumberUser = Math.floor(Math.random() * maxNum) + 1;
  const randomNumberAi = Math.floor(Math.random() * maxNum) + 1;

  // pushiamo nei rispettivi array i numeri generati
  numeriUtente.push(randomNumberUser);
  numeriAi.push(randomNumberAi);

  // sommiamo i numeri generati per ogni giocatore
  sommaNumUtente += randomNumberUser;
  sommaNumAi += randomNumberAi;
}

console.log(sommaNumUtente, sommaNumAi);

if (sommaNumAi > sommaNumUtente) {
  alert(`L'AI dominerà il mondo! (${sommaNumUtente} - ${sommaNumAi})`);
} else if (sommaNumUtente > sommaNumAi) {
  alert(`Questa volta te la sei cavata! (${sommaNumUtente} - ${sommaNumAi})`);
} else {
  alert(`Pareggio! (${sommaNumUtente} - ${sommaNumAi})`);
}

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

const diceContainer = document.querySelector(".dice-container");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const diceMap = ["first", "second", "third", "fourth", "fifth", "sixth"];

rollDiceBtn.addEventListener("click", function (e) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const diceTarget = diceContainer.querySelector(
    `.${diceMap[randomNumber - 1]}-face`
  );

  diceContainer.firstElementChild.style.transform = `translateX(-${
    diceTarget.offsetLeft - 16
  }px)`;
});