var nombre = "juan"


function saludo(){
    console.log(`dentro la funcion ${nombre}`);
    var apellido = "Gomez"
    return 0;
}
console.log(saludo());
console.log(`fuera de la funcion ${nombre}`);


var nombre1 = "pepe"

function saludo(){
    var apellido1 = "Gomez"
    console.log(`dentro la funcion ${apellido1}`);
    return 0;
}
console.log(saludo());
console.log(`fuera de la funcion ${apellido1}`);