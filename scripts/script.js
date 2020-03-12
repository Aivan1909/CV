var lim, pref, img;
var modal = document.getElementById("modal");
var galeria = document.getElementById("foto");
var infor = document.getElementById("m_info");

/* IMAGEN SIGUIENTE */
function adelante(){
    img++;
    if(img > lim){
        img=1;
    }
    infor.innerHTML = img+"/"+lim;
    mostrar_foto(img);
}

/* IMAGEN ANTERIOR */
function atras(){
    img--;
    if(img<1){
        img=lim;
    }
    infor.innerHTML = img+"/"+lim;
    mostrar_foto(img);
}

function mostrar_modal(pre, num){
    pref = pre;
    img= num;
    var x = document.getElementsByClassName(pre);
    modal.style.display = "grid";
    lim = x.length;
    infor.innerHTML = num+"/"+lim;
    mostrar_foto(img) 
}
function cerrar_modal(){
    modal.style.display = "none";
    lim = 0;
    img = 1;
}
function img_error(){
    galeria.src = "imgs/error.jpg";
}
function mostrar_foto(img){
    abrir_spin();
    galeria.src = "imgs/"+pref+"/"+pref+"_"+img+".jpg";
    galeria.onerror= function(){
        galeria.onerror = img_error();
    }
    cerrar_spin();
}
var spin_carga = document.getElementById('spin-carga');
window.onload = cerrar_spin();

function abrir_spin(){
    spin_carga.style.display = "inline";
}
function cerrar_spin(){
    spin_carga.style.display = "none";
}