let numeros = [1, 2, 3, 4, 5];
console.log(numeros);


let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]);

frutas[1] = "kiwi"; // Cambia "banana" por "kiwi"
console.log(frutas);


console.log(frutas.length); // Imprime 3


frutas.push("pera"); // Agrega "pera"
console.log(frutas);

frutas.pop(); // Elimina "pera"
console.log(frutas);



for (let fruta of frutas) {
  console.log(fruta);
}


let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
  console.log(numero);
});

let dobles = numeros.map(function(numero) {
  return numero * 2;
});
console.log(dobles);



let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[1][2]); // Imprime 6


frutas.splice(1, 1, "sandía"); // Remueve 1 elemento en el índice 1 y agrega "sandía"
console.log(frutas);

frutas.unshift("uva"); // Agrega "uva" al inicio
console.log(frutas);

frutas.shift(); // Remueve el primer elemento
console.log(frutas);





console.log(frutas.indexOf("kiwi"));

