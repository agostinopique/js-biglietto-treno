
/*
1. Chiedere la quantitá di km da percorrere
2. Chiedere l'età all'utente
3. Calcolare lo sconto in base all'età 
4. CAlcolare il prezzo
5. Stampare il prezzo finito a schermo

Realizzabile con una lista che mostra tutti i dati raccolti;
*/

// 1. Input dell'user
// let distanceKm = prompt('Quanti chilometri devi percorrere?');

// let passengerAge = prompt('Qual\'é l\'età del passeggero?'); 

const pricePerKm = 0.21;

console.log('distanza da percorrere', distanceKm);
console.log('età del passeggero', passengerAge);

// 2. Calcolo del prezzo del biglietto
let ticketPrice = distanceKm * pricePerKm;

let roundTicketPrice = ticketPrice.toFixed(2);

console.log(ticketPrice);

console.log(roundTicketPrice);


//  3. Calcolo dello sconto se si verificano i requisiti di etá 
if(passengerAge < 18) {
    discountPrice = (ticketPrice / 100) * 20;
} else if(passengerAge > 65) {
    discountPrice = (ticketPrice / 100) * 40;
} else {
    ticketPrice
}

let roundDiscountPrice = discountPrice.toFixed(2);

console.log('discount price', discountPrice);

console.log('rounded discount price', roundDiscountPrice);

let prezzoFinale = ticketPrice - discountPrice;

let roundPrezzoFinale = prezzoFinale.toFixed(2);

console.log('prezzo finale', prezzoFinale);

console.log('rounded final price', roundPrezzoFinale);