/* function getDate(){
    var myDate = new Date(); // Crea una instancia de la función Date, obtén la fecha y otra hora
    console.log(myDate)      // hora estándar de Colombia)
        	
    myDate.getYear();        // Obtener el año actual (2 dígitos)
    myDate.getFullYear();    // Obtener el año completo (4 dígitos, 1970 - ????)
    myDate.getMonth();       // Obtener el mes actual (0-11,0 representa enero)
    myDate.getDate();        // Obtener el día actual (1-31)
    myDate.getDay();         // Obtener la semana actual X (0-6, 0 representa el domingo)
    myDate.getTime();        // Obtener la hora actual (milisegundos desde 1970.1.1)
    myDate.getHours();       // Obtener la hora actual (0-23)
    myDate.getMinutes();     // Obtener los minutos actuales (0-59)
    myDate.getSeconds();     // Obtener los segundos actuales (0-59)
    myDate.getMilliseconds();    // Obtiene los milisegundos actuales (0-999)
    myDate.toLocaleDateString();     // Obtener la fecha actual
    
    var mytime=myDate.toLocaleTimeString();// Obtener la hora actual
    $('div').html(`<text>${mytime}</text>`) // Muestra la hora actual en la página, utilizando la cadena de plantilla ES6
} */

function dia_de_hoy(){
    var today = Date();
    var valor = document.getElementById('valor');
    
    valor.value = ("<h1>"+today+"</h1>");
}

function updatingTime(){
    setInterval(function(){
        dia_de_hoy();
    },1000);
    
}
