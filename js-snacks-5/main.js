
/*Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/


// Chiedo all'utente quanti numeri vuole
const N = parseInt(prompt("Inserisci quanti numeri vuoi (N):"));

// Stampo il cubo dei primi N numeri
console.log("Il cubo dei primi " + N + " numeri:");

for (let i = 1; i <= N; i++) {
    const cubo = Math.pow(i, 3);
    console.log("Il cubo di " + i + " è: " + cubo);
}