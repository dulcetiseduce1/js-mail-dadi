const scoreComputer = []
const arrayComputer = []
const scorePlayer = []
const arrayPlayer = []
let sommaComputer = 0
let sommaPlayer = 0

//ciclo 6 volte
for (let i = 1; i < 7; i++) {
    //math da 1 a 6
    (scoreComputer[i] = (Math.floor(Math.random() * 6) + 1))
    //push numero in array
    arrayComputer.push(scoreComputer)
    console.log("Computer: " + scoreComputer)
    //aggiungo numero in somma
    sommaComputer += scoreComputer[i]
}
//output test
console.log("computer: " + sommaComputer)

//ciclo 6 volte
for (let i = 1; i < 7; i++) {
  //math da 1 a 6
    (scorePlayer[i] = (Math.floor(Math.random() * 6) + 1));
    //push numero in array
    arrayPlayer.push(scorePlayer)
    console.log("Player: " + scorePlayer)
    //aggiungo numero in somma
    sommaPlayer += scorePlayer[i]
}
//output test
console.log("Player: " + sommaPlayer)

//se la tua somma è maggiore
if (sommaPlayer > sommaComputer) {
    console.log("Hai vinto!")
//se la tua somma è minore 
} else if (sommaPlayer < sommaComputer) {
    console.log("Hai perso")
}
//se la somma è uguale
 else {
    console.log("Pareggio!");
}