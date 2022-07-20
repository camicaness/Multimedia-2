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
            $("#mt").text("<b>Preparación:</b>\n\nSeparar en equipos a los niños, cada uno con un kit entero o al menos 2 Re-bots que representen materiales distintos.<br>Entregar la misma cantidad de fichas variadas a cada equipo.\n\n<b>Objetivo:</b>Clasificar todas las fichas lo más rápido posible, ingresándolas en el Re-bot que representa el material correcto.\n\n<b>Opciones de juego:</b>\n\nCompetencia en simultáneo de los equipos. Gana el que finaliza primero.Competencia por turnos con cronómetro, anotando cuánto demora cada equipo. Una vez pasados todos los equipos, gana el que demoró menos tiempo.Competencia en simultáneo o por turnos, con temporizador, marcando un tiempo límite para clasificar. Al finalizar el tiempo determinado, será ganador el equipo con menos fichas en su poder.");
            $("#m1").addClass("modo-seleccionado");
            $("#m2").removeClass("modo-seleccionado");
            $("#m3").removeClass("modo-seleccionado");
            $("#m1 img").attr("src", "Recursos/modo1-seleccionado.svg");
            $("#m2 img").attr("src", "Recursos/modo2.svg");
            $("#m3 img").attr("src", "Recursos/modo3.svg");
            break;
        }
        case "m2":{
            $("#mt").text("<b>Preparación:</b>\n\nHOLASeleccionar un Simón para que guíe el juego (puede ser el docente o un alumno)\nSeparar en equipos a los niños, cada uno con un kit entero.\nEntregar la misma cantidad de fichas variadas a cada equipo.\n\n<b>Objetivo:</b>\n\nClasificar todas las fichas, ingresándolas en el Re-bot que representa el material correcto.\n\n<b>Dinámica de juego:</b>\n\nSimón comenzará a decir por turnos qué materiales reciclar en ese momento, y los niños clasificarán únicamente las fichas que representen el material dictado.El tiempo entre entre material y material quedará a criterio de Simón, pudiendo acortar los tiempos hacia el final del juego para agregarle dinamismo.El equipo que termine de clasificar todas sus fichas primero será el ganador.");
            $("#m1").removeClass("modo-seleccionado");
            $("#m2").addClass("modo-seleccionado");
            $("#m3").removeClass("modo-seleccionado");
            $("#m1 img").attr("src", "Recursos/modo1.svg");
            $("#m2 img").attr("src", "Recursos/modo2-seleccionado.svg");
            $("#m3 img").attr("src", "Recursos/modo3.svg");
            break;
        }
        case "m3":{
            $("#mt").text("<b>Preparación:</b>\n\nDeterminar una sección del salón que será la estación de reciclaje y ubicar los Re-bots en distintos puntos del salón.<br>Separar en equipos a los niños y colocarlos en filas.\nEntregar la misma cantidad de fichas variadas a cada niño (5 por ejemplo).\n\n<b>Objetivo:</b>\n\nClasificar todas las fichas, ingresándolas en el Re-bot que representa el material correcto. \n\n<b>Opciones de juegos:</b>\n\nComienza el juego. Los primeros niños de cada equipo entran a la estación de reciclaje para clasificar todas sus fichas. El niño que termina, regresa a su equipo a chocarle los 5 al siguiente en la fila, quien debe realizar la misma dinámica en la estación. Así sucesivamente hasta que todos los jugadores del equipo participen. Gana el equipo que lo logre primero.Juego por rondas cronometradas. Un equipo por vez ingresa a la estación para clasificar todas sus fichas en el menor tiempo posible. Gana el que lo consiga en el menor tiempo.");
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
