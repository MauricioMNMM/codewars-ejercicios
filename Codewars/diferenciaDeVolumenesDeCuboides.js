/*En este sencillo ejercicio, creará un programa que tomará dos listas de enteros ay b. Cada lista constará de 
3 números enteros positivos por encima de 0, que representan las dimensiones de los cuboides ay b. Debes encontrar 
la diferencia de los volúmenes de los cuboides independientemente de cuál sea mayor. */
function findDifference(a, b) {
  const volA = a[0] * a[1] * a[2];
  const volB = b[0] * b[1] * b[2];
  const dif = Math.abs(volA - volB);
  return dif;
}
