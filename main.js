

// Chiedo il primo numero all'utente
const primoNumero = Number(prompt("Inserisci il primo numero:"));

// Chiedo il secondo numero all'utente
const secondoNumero = Number(prompt("Inserisci il secondo numero:"));

// Verifico quale sia il maggiore e lo stampo
if (primoNumero > secondoNumero) {
    console.log("Il numero maggiore è:", primoNumero);
} else if (secondoNumero > primoNumero) {
    console.log("Il numero maggiore è:", secondoNumero);
} else {
    console.log("I due numeri sono uguali:", primoNumero);
}
