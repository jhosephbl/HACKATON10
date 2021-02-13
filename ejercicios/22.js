// Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"



const palabra = 'jhoseph Eduardo';


const capital = palabra.toLowerCase().replace(/[a-z]\b/g, function (c) { return c.toUpperCase() });

console.log(capital);



