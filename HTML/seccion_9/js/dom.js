//Obtener elementos del dom en variables
const titulo = document.getElementById("titulo")
const descripcion = document.getElementById("descripcion")
const botonAgregar = document.getElementById("botonAgregar")
const botonCambiar = document.getElementById("botonCambiar")

function agregarElemento(){
    //Crear un nuevo elemento <p>
    const nuevoParrafo = document.createElement("p")
    //Añadir un texto al elemento
    nuevoParrafo.textContent = "Este es un nuevo párrafo"
    //Añadir una clase al elemento
    nuevoParrafo.classList.add("nuevo-elemento")
    //Insertar un elemento al body
    document.body.appendChild(nuevoParrafo)
}

function cambiarValor(){
    //Cambiar el contenido del párrafo
    descripcion.textContent = "Aquí estuvo Roberto"
    descripcion.classList.add("resaltado")
}

botonAgregar.addEventListener("click", agregarElemento)
botonCambiar.addEventListener("click", cambiarValor)