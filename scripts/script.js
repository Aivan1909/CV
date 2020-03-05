var num=1;
var modal = document.getElementById("modal");
var galeria = document.getElementById("foto");

/* IMAGEN SIGUIENTE */
function adelante(pref, lim){
    num++;
    if(num>lim){
        num=1;
    }
    galeria.src = pref + num + ".jpg";
}

/* IMAGEN ANTERIOR */
function atras(pref, lim){
    num--;
    if(num<1){
        num=lim;
    }
    galeria.src = pref + num + ".jpg";
}

function mostrar_modal(el, orient){
    galeria.src = el;
    console.log(el);
    modal.style.display = "block";
    if(orient=='v'){
        galeria.style.width = "30vw";
    }else if(orient=='h'){
        galeria.style.width = "70vw";
    }
}
function cerrar_modal(){
    modal.style.display = "none";
}