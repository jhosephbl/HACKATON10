// Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.


const palabra = 'Hackaton semana 10';

const letra = 'a'

const firstIden = palabra.indexOf(letra);
const lastIden = palabra.lastIndexOf(letra)

console.log((`La primera aparicion de la letra a es en ${firstIden}`) + (` Y la ultima aparicion es en ${lastIden}`));
