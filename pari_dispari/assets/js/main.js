/*
    Pari e Dispari
        L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
        Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
        Sommiamo i due numeri 
        Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
        Dichiariamo chi ha vinto.
*/

/*
    FUNCTION:
        la funzione accetta 2 parametri (una stringa e un numero);
        si somma il numero inserito ad un numero random generato dal computer;
        si stabilisce se la somma è un numero pari o dispari;
        in caso sia pari creo una variabile contenente una stringa,
        viceversa se è dispari creo una variabile con una stringa diversa;
        se la variabile creata contiene la stringa uguale a quella inserita dall'utente come primo parametro della funzione, l'utente ha vinto il gioco;
        se la stringhe sono diverse, il computer vince il gioco;
*/

function gameEvenOdd (string, number) {

    const computerNumber = Math.floor(Math.random() * 5) + 1;

    const sum = number + computerNumber;

    let gameResult;

    if (sum % 2 == 0) {
        gameResult = 'p';
    }
    else {
        gameResult = 'd';
    }
    
    if (string === gameResult) {
        return true;
    }
    else {
        return false;
    }
}

// l'utente sceglie se vincere in caso di pari o dispari
let userPick = prompt('se vuoi pari digita "p", se vuoi dispari digita "d"');
while (userPick != 'p' && userPick != 'd') {
    userPick = prompt('se vuoi pari digita "p", se vuoi dispari digita "d"');
}

// range fra cui poter scegliere il numero con cui si vuole giocare
const minAcceptable = 1;
const maxAcceptable = 5;

let userNumber = parseInt(prompt(`inserisci un numero da ${minAcceptable} a ${maxAcceptable}`));
while (userNumber < minAcceptable || userNumber > maxAcceptable) {
    userNumber = parseInt(prompt(`inserisci un numero da ${minAcceptable} a ${maxAcceptable}`));
}

// si usano i 2 prompt dati dall'utente come parametri per la funzione per giocare
const result = gameEvenOdd (userPick, userNumber);

// comunichiamo il vincitore
if (result) {
    console.log(`hai vinto`);
}
else {
    console.log(`hai perso`);
}



