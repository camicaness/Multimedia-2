$(document).ready(inicio);

function inicio() {
    $(".tipo").mouseover(mostrarTipo);
    $(".tipo").mouseleave(ocultarTipo);
    $("#m1").click(modo);
    $("#m2").click(modo);
    $("#m3").click(modo);
}

function mostrarTipo() {
    $(this).children(':nth-child(2)').css({ transform: 'translate(0, 0px)', opacity: "100" });
}

function ocultarTipo() {
    $(this).children(':nth-child(2)').css({ transform: 'translate(0, 50px)', opacity: "0" });
}

function modo() {
    var modo = $(this).attr("id");
    switch (modo) {
        case "m1":{
            $("#mt").text("holi");
            $("#m1").addClass("modo-seleccionado");
            $("#m2").removeClass("modo-seleccionado");
            $("#m3").removeClass("modo-seleccionado");
            $("#m1 img").attr("src", "Recursos/modo1-seleccionado.svg");
            $("#m2 img").attr("src", "Recursos/modo2.svg");
            $("#m3 img").attr("src", "Recursos/modo3.svg");
            break;
        }
        case "m2":{
            $("#mt").text("caso 2");
            $("#m1").removeClass("modo-seleccionado");
            $("#m2").addClass("modo-seleccionado");
            $("#m3").removeClass("modo-seleccionado");
            $("#m1 img").attr("src", "Recursos/modo1.svg");
            $("#m2 img").attr("src", "Recursos/modo2-seleccionado.svg");
            $("#m3 img").attr("src", "Recursos/modo3.svg");
            break;
        }
        case "m3":{
            $("#mt").text("caso 3");
            $("#m1").removeClass("modo-seleccionado");
            $("#m2").removeClass("modo-seleccionado");
            $("#m3").addClass("modo-seleccionado");
            $("#m1 img").attr("src", "Recursos/modo1.svg");
            $("#m2 img").attr("src", "Recursos/modo2.svg");
            $("#m3 img").attr("src", "Recursos/modo3-seleccionado.svg");
            break;
        }
    }
}