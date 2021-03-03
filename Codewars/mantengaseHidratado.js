/*Como Nathan sabe que es importante mantenerse hidratado, bebe 0,5 
litros de agua por hora de ciclismo.
//Se le da el tiempo en horas y debe devolver la cantidad de litros que beberá Nathan, 
redondeada al valor más pequeño.*/

function litres(time) {
    var x = Math.min(time * 0.5)
    return Math.floor(x)
}