//VERDADERO O FALSO

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Utilizar el método filter en el array para obtener los elementos pares
let numerosPares = array.filter((elem) => elem % 2 === 0);

// Imprimir el array resultante con los números pares
console.log(numerosPares);

// Función de filtro para obtener los números pares en un array
function obtenerNumerosPares(elem) {
    return elem % 2 === 0;
}