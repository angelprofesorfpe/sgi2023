function saludar(nombre,callback){
    console.log(`hola ${nombre}`);

setTimeout(callback,3000);
}
function despedir (){
    console.log('Hasta pronto');
}


saludar("Carlos",despedir);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        resolve(randomNum);
      } else {
        reject("24 de Diciembre?");
      }
    }, 1000);
  });
  
  promise
    .then(result => {
      console.log("Resolved:", result);
    })
    .catch(error => {
      console.error("Rejected:", error);
    });
    const promise1 = new Promise(resolve => setTimeout(() => resolve("cuando puedes regresar?"), 1500));
const promise2 = new Promise(resolve => setTimeout(() => resolve("desearia que fuese en Navidad..."), 1000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("bueno, tendra que ser por Reyes..."), 2000));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All promises resolved:", results);
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });






