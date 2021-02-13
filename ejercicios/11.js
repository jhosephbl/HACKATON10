// Cree la función que toma una matriz con objetos y devuelve la suma de los
// presupuestos de las personas.

const sumas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
   ]

   let suma = 0;
   sumas.forEach( presu => {
       suma += presu.budget;
   })
   
   console.log(suma);

