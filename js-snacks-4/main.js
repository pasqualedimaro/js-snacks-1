/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

//creo un array vuoto

let numeriDispari = [];

// Ciclo for che chiede 6 numeri all'utente

for (let i = 1; i <= 6; i++) {
    const numero = parseInt(prompt("Inserisci il " + i + "° numero:"));
    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }
} 

console.log("Numeri dispari inseriti:", numeriDispari);