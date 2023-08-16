function f(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (i % 2 === 0) {
            lista[i] *= 2;
        }
    }
}

let l = [3, 8, 7, 122, 14, 1];
f(l);
console.log(l);