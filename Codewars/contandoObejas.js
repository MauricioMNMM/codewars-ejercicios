// Considere una matriz / lista de ovejas donde algunas ovejas pueden faltar en su lugar.
// Necesitamos una función que cuente el número de ovejas presentes en la matriz(verdadero significa presente).
function countSheeps(arrayOfSheep) {
  let matriz = 0;
  for (let i = 0; i <= arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      matriz += 1;
    } else {
      false;
    }
  }
  return matriz;
}
