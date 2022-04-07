
/*
1. Chiedere la quantitá di km da percorrere
2. Chiedere l'età all'utente
3. Calcolare lo sconto in base all'età 
4. CAlcolare il prezzo
5. Stampare il prezzo finito a schermo

Realizzabile con una lista che mostra tutti i dati raccolti;
*/

// 1. Input dell'user
let distanceKm = prompt('Quanti chilometri devi percorrere?');

// Organo di controllo
if(isNaN(distanceKm)){
    alert('Inserire un numero di chilometri');
}

let passengerAge = prompt('Qual\'é l\'età del passeggero?'); 

// Organo di controllo
if(isNaN(passengerAge)){
    alert('Inserire un\'età');
}

const pricePerKm = 0.21;

// console.log('distanza da percorrere', distanceKm);
// console.log('età del passeggero', passengerAge);

// 2. Calcolo del prezzo del biglietto
let ticketPrice = distanceKm * pricePerKm;

let roundTicketPrice = ticketPrice.toFixed(2);

// console.log(ticketPrice);

// console.log('prezzo arrotondato', roundTicketPrice);


//  3. Calcolo dello sconto se si verificano i requisiti di etá 

/*
Il calcolo del prezzo scontato poteva essere scritto riscrivendo la variabile let del prezzo. In questo modo ci si poteva risparmiare due variabii extra: discountPrice e prezzoFinale.
*/
let discountPrice = 0;

if(passengerAge < 18) {
    discountPrice = (ticketPrice / 100) * 20;
    // ALTERNATIVA per il calcolo in percentuale
    // ticketPrice *= 0.8; In quiesto modol il mio risultato sarà il prezzo già scontato.
} else if(passengerAge > 65) {
    discountPrice = (ticketPrice / 100) * 40;
} 
/*else {
    ticketPrice
} l'else alla fine delle condizioni poteva anche essere escluso perché, se le condizioni non soddisfacevano una delle due condizioni, l'intero blocco di codice non sarebbe stato eseguito e dunque la condizione del prezzo sarebbe rimasta la medesima espressa sopra con la variabile ticketPrice
*/



/* Un altro modo per esprimere il toFixed era di inserirlo in una linea di testo: 
const message = 'Il prezzo del tuo biglietto é di €' + price.toFixed(2);
*/
let roundDiscountPrice = discountPrice.toFixed(2);

// console.log('discount price', discountPrice);

// console.log('rounded discount price', roundDiscountPrice);

let prezzoFinale = ticketPrice - discountPrice;

let roundPrezzoFinale = prezzoFinale.toFixed(2);

// console.log('prezzo finale', prezzoFinale);

// console.log('rounded final price', roundPrezzoFinale);

// 4.Stampa a schermo informazioni calcolate

document.getElementById('prezzo_base').innerHTML += roundTicketPrice;
document.getElementById('sconto').innerHTML += roundDiscountPrice;
document.getElementById('prezzo_finale').innerHTML += roundPrezzoFinale;


/* Per inserire un ulteriore organo di controlllo per eseguire il codicesolo se entrambi i dati sono corretti, possiamo inserire una variabile che con valore di default un booleano vero che diventa falso quand ouno degli organi di controllo dei due vlori vengono eseguite. In questo modo posso poi creare un'altra condizinoe che esegue il codice dei calcoli del prezzo solo quando la variabile resta true o che restituisce un messaggio di errore se il booleano é diventao falso. */