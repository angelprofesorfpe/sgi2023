let persona = new Map();

persona.set("nombre", "juan");
persona.set("edad", 30);
persona.set("profesion", "comercial");

for (let [k, v] of persona) {
  console.log(`${k}: ${v}`);
}