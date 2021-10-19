/*
PALINDROMA:
    Chiedere all’utente di inserire una parola.
    Creare una funzione per capire se la parola inserita è palindroma
*/

/*
FUNCTION:
    divido la parola a metà;
    in caso il risultato non sia intero, faccio approssimazione per difetto;
    paragono ogni carattere della prima metà con l'ultimo della seconda metà;
    continuo i confronti andando verso destro nella prima metà e verso sinistra nella seconda metà;
    appena un uguaglianza risulta falsail ciclo restituisce valore false;
    in caso tutte le uguaglianze siano verificate, la parola è palindroma;
*/

function palindromeCheck (string) {
    let len = string.length;
    let half = Math.floor(len/2);

    for ( let i = 0; i < half; i++ ) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

const word = prompt('inserisci una parola');
const palindrome = palindromeCheck(word);
