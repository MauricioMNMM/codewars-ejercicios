/*Se supone que el código proporcionado reemplaza todos los puntos . en la Cadena especificada
Pero no funciona correctamente.
Tarea:
Solucione el error para que todos podamos irnos a casa temprano. */
var replaceDots = function (str) {
  /*Se usa [] para escapar usar cualquier caracter especial y 
    en este caso usarlo como un punto normal, para que no coincida con todo el string
    ya que el punto sirve para conicidir con cualquier caracter*/
  // La letra g es para que busque las coincidencias globales, osea todo el string y no solo el primer punto
  return str.replace(/[.]/g, "-");
};
