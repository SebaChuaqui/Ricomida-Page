$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $("#btn-correo").click(function(){
        alert("Se envío Correo exitosamente!!!")
    })
    $(".cambio-color").click(function(){
        $(this).css({color:"red"})
    })
})