function duplicarLista(lista) {
    return lista.map(item => item * 2);
  }
  
  const listaOriginal = [1, 2, 3, 4];
  const listaDuplicada = duplicarLista(listaOriginal);
  
  console.log("Lista Original:", listaOriginal);
  console.log("Lista Duplicada:", listaDuplicada);