function operacionMatematica(op, a, b) {
  return op(a, b);
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

const resultadoSuma = operacionMatematica(suma, 5, 3);
const resultadoResta = operacionMatematica(resta, 5, 3);

console.log("Suma:", resultadoSuma);
console.log("Resta:", resultadoResta);