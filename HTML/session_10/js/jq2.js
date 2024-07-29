$(document).ready(function(){
    //Ocultar y mostrar el texto con un evento click
    $("#palancaButton").click(function(){
        $("#parrafo").toggle()
    })
    //Método para cambiar el color con un evento del mouse
    $("#parrafo2").mouseenter(function(){
        $(this).css("background-color", "yellow")   
    }).mouseleave(function(){
        $(this).css("background-color", "white")
    })
    //Animar una caja
    $("#animatedButton").click(function(){
    $("#box").animate({
        width: "200px",
        height: "200px",
        }, 2000) //2000 Indica el tiempo que se tarda en agrandarse
        })
})