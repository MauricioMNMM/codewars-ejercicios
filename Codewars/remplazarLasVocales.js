/*¡Los trolls están atacando tu sección de comentarios!

Una forma común de lidiar con esta situación es eliminar todas las vocales de los comentarios de los trolls, neutralizando la amenaza.

Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena con todas las vocales eliminadas.

Por ejemplo, la cadena "Este sitio web es para perdedores LOL!" se convertiría en "Ths wbst s fr lsrs LL!". */

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
disemvowel("This websitea is for losers LOL!");
