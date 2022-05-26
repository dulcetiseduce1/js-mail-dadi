// creo l'array e il prompt di accesso
const emailList = 
["bene@gmail.com",
 "male@gmail.com",
 "giacomo@lamail.it",
 "ronaldo@tuta.io",
 "scoot@email.it",
 "rosa@rosa.it",
 "pikachu@pokemon.com"]

const emailAsk = prompt("Inserisci la tua email")
let emailCheck = false

// verifico email con ciclo nella lista
for (let i = 0; i < emailList.length; i++) {
    //se è giusta do il valore true
    if (emailList[i] === emailAsk) {
        emailCheck = true;
    }
}

// validazione
if (emailCheck === true) {
    console.log("valido " + emailAsk)
} else {
    console.log("non valido " + emailAsk)
}