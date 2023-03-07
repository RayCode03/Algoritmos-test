/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:

  String.prototype.repeatCharacters = function () {
    var array = this.split('');
    var array2 = [];
    for (var i = 0; i < array.length; i++) {
      array2.push(array[i]);
      array2.push(array[i]);
    }
    return array2.join('');
  }

}

// No modifiques nada debajo de esta linea //

module.exports = repetirCaracteres