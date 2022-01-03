// 1. Establece una clase para las etiquetas a que comiencen por 'https://'
$(document).ready(function () {
    /* 1. */  //$("a[href^='https://']").addClass("linkDestacaCursos");

    /* 2. */
    document.getElementById('cursos').addEventListener("click", resaltarCursos, false);
    document.getElementById('information').addEventListener("click", resaltarEjemplos, false);
});

/* Para la funcion 2.  */
function resaltarCursos() {
    /*
    $('.examples').removeClass("linkDestacaCursos");
    $('.videos').addClass("linkDestacaCursos");
     */

    $('.videos').toggleClass('linkDestacaCursos');
}

function resaltarEjemplos() {

    /*
    $('.videos').removeClass("linkDestacaCursos");
    $('.examples').addClass('linkDestacaCursos'); 
    */

    $('.examples').toggleClass('linkDestacaCursos');
}
