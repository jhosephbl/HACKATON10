//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"




const numeros = [[1, 2, 3],[4, 5, 6, 7],[8, 9, 0]];

const inicio = numeros[0]
const cuerpo = numeros[1]
const final = numeros[2]

console.log(inicio + cuerpo + final);