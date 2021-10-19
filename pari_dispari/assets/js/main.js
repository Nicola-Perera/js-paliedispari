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

    if (sum % 2 == 0) {
        const gameResult = 'p';
    }
    else {
        const gameResult = 'd';
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



