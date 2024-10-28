// INPUT
const userKm = 70;
const userAge = 22;
const prezzo = 0.21;

const kilometri = parseInt(prompt('Quanti km vuoi percorrere?'));
const eta = parseInt(prompt('Quanti anni hai?'));

console.log(kilometri);
console.log(eta);


// ESECUZIONE LOGICA
const prezzoIntero = prezzo * userKm;
console.log(prezzoIntero);
 
const prezzoScontato1 = ((prezzoIntero / 100) * 20);
const prezzoFinale1 = prezzoIntero - prezzoScontato1;
const prezzoScontato2 = ((prezzoIntero / 100) * 40);
const prezzoFinale2 = prezzoIntero - prezzoScontato2;
console.log(prezzoFinale1, prezzoFinale2);

// OUTPUT
let totale;

if (eta < 18) {
    totale = `Il prezzo del biglietto è €${prezzoFinale1.toFixed(2)}`;
} else if (eta >= 65) {
    totale = `Il prezzo del biglietto è €${prezzoFinale2.toFixed(2)}`;
} else {
    totale = `Il prezzo del biglietto è €${prezzoIntero.toFixed(2)}`;
}

console.log(totale);

// BONUS
if(isNaN(eta)) {
    console.log(false);
} else {
    console.log(true);
}

if(isNan(eta < 0)) {
    console.log(false);
} else {
    console.log(true);
}









