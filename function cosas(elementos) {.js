function cosas(elementos) {
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
  
    let cosas = [true, 'true', 99, 'Paco', 1+2, '1+2', function(){}, ()=>{}, {}, {'a':1},[100,200,300,400,500,600,700,800,900] ];
    console.log(cosas[cosas.length-1][8] )
}
  
  ejecutarCodigo();