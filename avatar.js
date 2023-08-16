// Paso 1: Crear el Array de Avatares
let avatares = [];

// Paso 2: Agregar Avatares
function agregarAvatar(nombre, disponible, imagenURL) {
  avatares.push({ nombre, disponible, imagen: imagenURL });
}

agregarAvatar('Avatar1', false, 'https://www.pngwing.com/es/search?q=avatar+de+anime.png');
agregarAvatar('Avatar2', true, 'https://www.pngwing.com/es/free-png-mruhb.png');
agregarAvatar('Avatar3', true, 'https://www.pngwing.com/es/free-png-xnzlq.png');
agregarAvatar('Avatar4', false, 'https://www.pngwing.com/es/free-png-hxrlc.png');

// Paso 3: Filtrar Avatares Disponibles
let avataresDisponibles = avatares.filter(avatar => avatar.disponible);

// Paso 4: Imprimir los Avatares Disponibles
console.log(avataresDisponibles);