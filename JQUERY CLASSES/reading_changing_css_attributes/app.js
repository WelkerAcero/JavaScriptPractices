//This process wait until the page charge completely and then
//procees the css styles and JS file take the procees made into it
//and bring one of functions using the: .css(function). We can bring more.
$(document).ready(function () {
    let tomarValor = $('#primer_parrafo').css("background-color");
    alert("El color de fondo que se usa en el párrafo 1 es: " + tomarValor);
});


$(document).ready(function () {
    //A method to descend through html tags and adding some css styles from JS
    $("p.destacado").css("border", "2px dotted blue");

    let valor = document.querySelectorAll('input');
    for (var i = 0; i < valor.length; i++) {
        valor[i].addEventListener("click", zoom, false);

        valor[i].addEventListener("click", lessZoom, false);

        valor[i].addEventListener("click", modoLectura, false);
    }

});

function zoom(e) {
    //to obtain the place to work
    let field;
    if (e.target == aumentar1) {

        field = "#noticia1";

    } else if (e.target == aumentar2) {

        field = "#noticia2";

    }

    currentSize = $(field).css('font-size');
    currentSize = parseInt(currentSize);

    $(field).css('font-size', currentSize * 1.5);

}

function lessZoom(e) {
    //to obtain the place to work
    let field;
    if (e.target == disminuir1) {

        field = "#noticia1";

    } else if (e.target == disminuir2) {

        field = "#noticia2";

    }

    currentSize = $(field).css('font-size');
    currentSize = parseInt(currentSize);

    $(field).css('font-size', currentSize * 0.95);
}

function lectureMode(e) {
    let field;
    if (e.target == lectura1) {

        field = "#noticia1";

    } else if (e.target == lectura2) {

        field = "#noticia2";

    }

    $(field).css(("background-color:black",
                  "color:white")
                  );

}