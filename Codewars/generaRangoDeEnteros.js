/*Implemente una función llamada generateRange (min, max, step), que toma tres argumentos y genera un rango de enteros de min a max, con el paso. 
El primer número entero es el valor mínimo, el segundo es el máximo del rango y el tercero es el paso. (min <max) */
function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}
