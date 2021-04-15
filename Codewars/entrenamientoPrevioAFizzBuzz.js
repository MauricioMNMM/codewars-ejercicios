/*Este es el primer paso para comprender FizzBuzz.
Tus entradas: un entero positivo, n, mayor o igual a uno. n se proporciona, NO TIENE CONTROL sobre su valor.
Su resultado esperado es una matriz de números enteros positivos de 1 an (inclusive).
Su trabajo es escribir un algoritmo que lo lleve de la entrada a la salida. */
function preFizz(n) {
  let matriz = [];
  for (let i = 1; i <= n; i++) {
    matriz.push(i);
  }
  return matriz;
}
