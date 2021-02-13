// Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]


const a = [[4, 2, 7, 1],[20, 70, 40, 90],[1, 2, 0]];

    
const matriz1 = a[0]
const matriz2 = a[1]
const matriz3 = a[2]


console.log(`El valor maximo de cada matriz es ${Math.max(...matriz1)} ${Math.max(...matriz2)} ${Math.max(...matriz3)}`);

