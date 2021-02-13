// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)


const numbers = [1, 2, 3, 4, 5, 6]
function suma(...numbers){
    let total = 0;
    for(var i=0; i<numbers.length; i++){
        total += numbers[i]
    }
    return total;
};

console.log(`Resultado de la función: ` + suma(...numbers));


