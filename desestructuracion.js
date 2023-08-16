
let numeros = [10, 20, 30];



let [a, b, c] = numeros;


console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
// Objeto
let persona = {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Ingeniero'
  };
  
  // Desestructuración de objeto
  let { nombre, edad, profesion } = persona;
  
  // Imprimir variables
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
  console.log("Profesión:", profesion);