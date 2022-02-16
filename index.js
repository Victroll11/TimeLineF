window.onscroll = function(){myFunction()};

var secciones = document.getElementsByTagName("section");
var fechas = document.getElementsByClassName("fecha");

function myFunction(){
    if(window.pageYOffset >= secciones[0].offsetTop){
        eliminarClase();
    }

    if(window.pageYOffset >= secciones[1].offsetTop){
        eliminarClase();
        fechas[0].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[2].offsetTop){
        eliminarClase();
        fechas[1].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[3].offsetTop){
        eliminarClase();
        fechas[2].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[4].offsetTop){
        eliminarClase();
        fechas[3].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[5].offsetTop){
        eliminarClase();
        fechas[4].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[6].offsetTop){
        eliminarClase();
        fechas[5].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[7].offsetTop){
        eliminarClase();
        fechas[6].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[8].offsetTop){
        eliminarClase();
        fechas[7].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[9].offsetTop){
        eliminarClase();
        fechas[8].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[10].offsetTop){
        eliminarClase();
        fechas[9].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[11].offsetTop){
        eliminarClase();
        fechas[10].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[12].offsetTop){
        eliminarClase();
        fechas[11].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[13].offsetTop ){
        eliminarClase();
        fechas[12].classList.add("seleccionado");
    }
    if(window.pageYOffset >= secciones[14].offsetTop){
        eliminarClase();
        fechas[13].classList.add("seleccionado");
    }
}

function eliminarClase(){
    for(i = 0; i < fechas.length; i++){
        fechas[i].classList.remove("seleccionado");
    }
}