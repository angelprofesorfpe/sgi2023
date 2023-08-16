function mostrarTipos(elementos) {
    for (let i = 0; i < elementos.length; i++) {
      console.log(`Tipo de elemento en posición ${i}: ${typeof elementos[i]}`);
    }
  }
  
  function ejecutarCodigo() {
    console.log("Ola Mundo");
    console.log("Maravilloso Mundo evolutivo");
  
    // alert(typeof "Ola Mundo");
    // alert("cuidado con las circunstancias");
    // prompt('introduzca algo:', 'esto aparece por defecto'); 
    // confirm('¿estas seguro?');
  
    const array1 = []
    console.log(array1);
  
    // const array2 = new array1(10);
    // console.log(array2);
  
    let frutas = ['pera','manzana', 'naranja'];
    console.log(frutas);
  
    let cosas = [11,'true',1+2,1==2,"1==2",[],function(){},'pepe'];
    mostrarTipos(cosas);
  }
  
  ejecutarCodigo();