//var num_articulos = parseInt(prompt("Ingrese número de artículos que desea comprar"))
//Ciclo for
/*for(var inicio=1; inicio<=num_articulos; inicio++){
    var precio_articulo= parseInt(prompt("Dame precio de artículo " + inicio))
    var cantidad_articulo= parseInt(prompt("Dame cantidad de artículo " + inicio))
console.log("Precio de artículo: $" + precio_articulo)
console.log("Cantidad de artículos: " + cantidad_articulo)
console.log("El subtotal es :" + calcularSubtotal(precio_articulo, cantidad_articulo))
}*/

//Ciclo do while
//var numero = parseInt(prompt("Ingresa un número"))
var numero
var x=1
do{
    console.log(x)
    x = x + 1
}while(x < numero)

// try catch
var numero2 = parseInt(prompt("Ingresa un número 2"))
try {
    if(numero2 != 10) throw new Error ("El número no es 10")
    console.log("La ejecución se hizo de manera correcta") 
} catch (error) {
    console.log(error.name, error.message)   
}



function calcularSubtotal(precio, cantidad){
    subtotal = (precio * cantidad) + 1.19
    return subtotal

}



