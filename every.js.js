let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Utilizamos el método 'every()' para verificar si todos los elementos son pares
let t = c.every(element => element % 2 === 0);
console.log(t); // Esto imprimirá 'false' ya que no todos los elementos son pares

// Utilizas el método 'every()' para verificar si todos los elementos del array cumplen con una condición
// La función flecha 'element => element > 0' verifica si cada elemento es mayor que 0
let t2 = c.every(element => element > 0);
console.log(t2); // Esto imprimirá 'true' ya que todos los elementos son mayores que 0

// Utilizas el método 'some()' para verificar si al menos un elemento del array cumple con una condición
// La función flecha 'element => element > 0' verifica si cada elemento es mayor que 0
let t3 = c.some(element => element > 11);

console.log(t3); // Esto imprimirá 'true' ya que todos los elementos son mayores que 0