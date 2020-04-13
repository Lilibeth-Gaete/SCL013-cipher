

const cifrado = {
  encode: function (n, escrito) {
    let texto = "";
    let termino = "";
    let i;

    for (i = 0; i < escrito.length; i++) {

      if (escrito.charCodeAt(i) >= 65 && escrito.charCodeAt(i) <= 90) {

        texto = (((escrito.charCodeAt(i) - 65) + parseInt(n)) % 26) + 65;

      }
      else if (escrito.charCodeAt(i) === 32) {
        texto = 32;
      }

      termino += String.fromCharCode(texto);
    }
    return termino;
  },
  decode: function (n, escrito) {
    let texto = "";
    let termino = "";
    let i;

    for (i = 0; i < escrito.length; i++) {

      if (escrito.charCodeAt(i) >= 65 && escrito.charCodeAt(i) <= 90) {

        texto = (((escrito.charCodeAt(i) - 65) - parseInt(n)) % 26) + 65;

      }
      else if (escrito.charCodeAt(i) === 32) {
        texto = 32;
      }
      termino += String.fromCharCode(texto);
    }
    return termino;
  }
}
export default cifrado; 
