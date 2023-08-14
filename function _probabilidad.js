function prestarLibroConProbabilidad() {
    return new Promise((resolve, reject) => {
      const probabilidadDevolucion = 0.7; // Probabilidad de que el amigo te devuelva el libro (0.7 = 70%)
  
      if (Math.random() < probabilidadDevolucion) {
        const libro = "Mi libro favorito";
        resolve(libro); // ¡Promesa cumplida! Resolvemos con el nombre del libro
      } else {
        const razon = "El amigo no devolvió el libro";
        reject(razon); // ¡Promesa no cumplida! Rechazamos con la razón
      }
    });
  }
  
  prestarLibroConProbabilidad()
    .then(libro => {
      console.log("El amigo devolvió el libro:", libro);
    })
    .catch(razon => {
      console.error("El amigo no devolvió el libro:", razon);
    });

    