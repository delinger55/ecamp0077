//Objeto
let mochila = {
    color: "negro",
    tamano: "20cm",
    numeroBolsillo: 2,
    numeroCierre: 2,
    //Metodo del objeto
    abrir_tapa: function(){
        console.log("Tapa de la mochila abierta")
    },
    cerrar_tapa: function(){
        console.log("Tapa de la mochila está cerrada")
    }
}
mochila.abrir_tapa()
mochila.cerrar_tapa()
console.log(mochila)