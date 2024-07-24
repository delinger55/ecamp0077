/*cosole.log("Hola desde la consola de JS");*/
// comentario de una linea
alert("Beinvenido a la calculadora básica");
console.log("Bienvenido a la caluladora básica");

var a;
var b;
var suma;
//a = 90331;
a = parseInt(prompt("Ingresa un número"));
//b = 4233324;
b = parseInt(prompt("Ingresa otro número"));

total = suma(a,b)
alert("El resultado de la suma es " + total);

total2 = resta(a,b);
alert("El resultado de la resta es " + total2);

total3 = multiplicacion(a,b);
alert("El resultado de la multiplicaion es " + total3);

total4 = division(a,b);
alert("El resultado de la division es " + total4);
if(total == 0){
    alert("Operación vacía")
}
alert("Gracias por hacer uso de la calculadora básica");

function suma(a,b){
    resultado= a + b;
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


