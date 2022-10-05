// INPUT
// Chiedere nome utente
const userName = prompt("Qual è il tuo nome?");
console.log(userName, typeof userName);

// Chiedere cognome utente
const userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname, typeof userSurname);

// Chiedere colore preferito utente
const favColor = prompt("Qual è il tuo colore preferito?")
console.log(favColor, typeof favColor);

// ELABORAZIONE
const password = userName + userSurname + favColor + 21;
console.log(password);

// OUTPUT
// Frase output
const result = `La tua password è ${password}`;

// Scrivere output
document.getElementById("result").innerHTML = result;