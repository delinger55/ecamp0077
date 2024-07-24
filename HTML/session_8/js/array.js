//Declarar un arreglo
var regiones = ["Metropolitana", "Antofagasta", "Araucanía", "Bío-Bío"]

//Imprimir un arreglo
console.log(regiones)

//Obteniendo una posición en el arreglo
console.log("Regresa posición 2: " + regiones[2])

//Recorriendo un arreglo y agregamos una cadena
for (var i = 0; i < regiones.length; i++) {
    console.log("Nombre de la región es: " + regiones[i])

regiones.push("Maule") //Agrega Maule
console.log(regiones)

regiones.pop() //Quita Maule
console.log(regiones)

regiones.shift() //Borra el primer elemento
console.log(regiones)

regiones.unshift("Los Lagos")
console.log(regiones)

//Recorriendo un arreglo
    var precios = [802, 910, 1221, 218, 346]
    for(var i=0; i < precios.length; i++){
        console.log(precios[i])
        console.log(precios[i]*1.19)
    }
}

const students = [
    {name: "Jhon", grade: 75},
    {name: "Jane", grade: 93},
    {name: "Samantha", grade: 90},
    {name: "Michael", grade: 94},  
]

//Ordenar en descendente
students.sort((a, b) => b.grande = a.grande)
console.log("Orden descendente ", students)

//Reservar el arreglo
students.reverse()
console.log("Reversar el arreglo ", students)

//Encontrar el alumno con mejor calificación
const firstStudentAbove90 = students.find(students => students.grade > 90)
console.log("El alumno con mejor calificación es ", firstStudentAbove90)