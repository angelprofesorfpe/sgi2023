const selectElement = document.createElement('select');

function cosas(elementos) {
  for (let i = 0; i < elementos.length; i++) {
    console.log(`Tipo de elemento en posición ${i}: ${typeof elementos[i]}`);
  }
}

function ejecutarCodigo() {
  console.log("Ola Mundo");
  console.log("Maravilloso Mundo evolutivo");

  const array1 = []
  console.log(array1);

  let frutas = ['pera','manzana', 'naranja'];
  console.log(frutas);

  let cosas = [true, 'true', 99, 'Paco', 1+2, '1+2', function(){}, ()=>{}, {}, {'a':1},[100,200,300,400,500,600,700,800,900] ];
  console.log(cosas[cosas.length-1][8]);

  for (let i = 0; i < cosas.length; i++) {
    const option = document.createElement('option');
    const optionValue = (typeof cosas[i] === 'object') ? JSON.stringify(cosas[i]) : cosas[i];
    option.value = i;
    option.textContent = `Elemento en posición ${i}: ${optionValue}`;
    selectElement.appendChild(option);
  }

  document.body.appendChild(selectElement);
}

ejecutarCodigo();