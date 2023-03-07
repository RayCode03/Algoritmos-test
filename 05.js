/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'

  // Tu código aca:

  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    array2.push(array[i].split(' '));
  }
  var array3 = [];
  for (var i = 0; i < array2.length; i++) {
    for (var j = 0; j < array2[i].length; j++) {
      array3.push(array2[i][j]);
    }
  }
  var array4 = [];
  for (var i = 0; i < array3.length; i++) {
    array4.push(array3[i].length);
  }
  var max = Math.max(...array4);
  var index = array4.indexOf(max);
  return array3[index];
    



}

// No modifiques nada debajo de esta linea //


module.exports = palabraMasLarga