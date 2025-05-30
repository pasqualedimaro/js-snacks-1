/*L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


// creo le due variabili
const primaParola = prompt("Inserisci la prima parola:");
const secondaParola = prompt("Inserisci la seconda parola:");

//Verifico quale sia più corta e più lunga, poi le stampo nell'ordine richiesto

if (primaParola.length < secondaParola.length) {
    console.log("Parola più corta:", primaParola);
    console.log("Parola più lunga:", secondaParola);

} else if (secondaParola.length < primaParola.length) {
    console.log("Parola più corta:", secondaParola);
    console.log("Parola più lunga:", primaParola);
    
} else {
    console.log("Le due parole hanno la stessa lunghezza:");
    console.log("Prima parola:", primaParola);
    console.log("Seconda parola:", secondaParola);
}