/*La rana de boca ancha está particularmente interesada en los hábitos alimenticios de otras criaturas.
No puede dejar de preguntarles a las criaturas que encuentra qué les gusta comer. ¡Pero luego conoce al caimán al que le ENCANTA comer ranas de boca ancha!
Cuando se encuentra con el caimán, hace una boca diminuta.
Tu objetivo en este kata es crear un mouth_sizemétodo completo. Este método toma un argumento animalque corresponde al animal encontrado por la rana. 
Si este es un alligatorretorno ( smallno distingue entre mayúsculas y minúsculas), de lo contrario, devuelve wide. */
function mouthSize(animal) {
  return animal == "alligator" || animal == "ALLIGATOR" ? "small" : "wide";
}
