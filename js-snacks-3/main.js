/*Il software deve chiedere per 10 volte in dei prompt all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

// creo la variabile per la somma
let somma = 0;

//apro un ciclo for e chiedo i 10 numeri all'utentew

for (let i = 1; i <= 10; i++) {
    const numero = parseFloat(prompt("Inserisci il " + i + " numero:"));
    somma = somma + numero
}

console.log("La somma di tutti i numeri inseriti è:", somma);
