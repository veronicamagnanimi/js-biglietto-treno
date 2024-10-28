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
const decimali = prezzoIntero.toFixed(2);

const prezzoScontato1 = ((prezzoIntero / 100) * 20);
const prezzoFinale1 = prezzoIntero - prezzoScontato1;
const prezzoScontato2 = ((prezzoIntero / 100) * 40);
const prezzoFinale2 = prezzoIntero - prezzoScontato2;
console.log(prezzoFinale1, prezzoFinale2);

// OUTPUT
let totale;

if (eta < 18) {
    totale = `Il prezzo del biglietto è ${prezzoFinale1}`;
} else if (eta > 65) {
    totale = `Il prezzo del biglietto è ${prezzoFinale2}`;
} else {
    totale = `Il prezzo del biglietto è ${prezzoIntero}`;
}

console.log(totale);










