/*cosole.log("Hola desde la consola de JS");*/
// comentario de una linea
alert("Beinvenido a la calculadora básica");
console.log("Bienvenido a la caluladora básica");
alert("Opciones: 1. suma, 2. resta, 3. multiplicación, 4. division")
option =parseInt(prompt("Escribe el número de la opción deseada"))

var a;
var b;
a = parseInt(prompt("Ingresa un número"))
b = parseInt(prompt("Ingresa otro número"))

if(a == 0 && b == 0){
    alert("Los números son 0, no se puede hacer operaciones")
}else {
switch(option){
    case 1:
        total = suma(a,b)
        alert("El resultado de la suma es " + total);
        break;

    case 2:  
        total2 = resta(a,b);
        alert("El resultado de la resta es " + total2);
        break;

    case 3:
        total3 = multiplicacion(a,b);
        alert("El resultado de la multiplicaion es " + total3);
        break;

    case 4:
        total4 = division(a,b);
        alert("El resultado de la division es " + total4);
        break;
    default:
        alert("Opción no valida") 
        break;
    }
}
alert("Gracias por hacer uso de la calculadora básica");


function suma(a,b){
    resultado = a + b;
    return resultado;
}

function resta(a,b){
    resultado = a - b;
    return resultado;
}

function multiplicacion(a,b){
    resultado = a * b;
    return resultado;
}

function division(a,b){
    if(a > b){
        resultado = a / b
    }else{
        resultado = 0
    }
    return resultado
}
