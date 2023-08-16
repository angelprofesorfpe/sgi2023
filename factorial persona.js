function person(...args) {
    if (args.length % 2 !== 0) {
      throw new Error("La función person debe recibir pares de argumentos.");
    }
  
    let result = {};
    for (let i = 0; i < args.length; i += 2) {
      let key = args[i];
      let value = args[i + 1];
      result[key] = value;
    }
  
    return result;
  }
  
  let miPersona = person("nombre", "juan", "edad", 30, "profesion", "comercial");
  console.log(miPersona);