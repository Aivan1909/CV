var lim, pref, img;
var modal = document.getElementById("modal");
var galeria = document.getElementById("foto");
var infor = document.getElementById("m_info");

/* SEPARADORES */
function insertarSeparador(etiqueta){
    var div = document.createElement("div");
    div.setAttribute('class', 'separador');
    etiqueta.appendChild(div);
    var br = document.createElement("br");
    etiqueta.appendChild(br);
}
function retirarSeparador(etiqueta){
    var separador = etiqueta.getElementsByClassName("separador");
    const i = separador.length - 1;
    var br = etiqueta.querySelectorAll("br");
    const j = br.length - 1;
    etiqueta.removeChild(separador[i]);
    etiqueta.removeChild(br[j]);
    /* var no = etiqueta.lastChild;
    console.log(etiqueta.lastChild);
    etiqueta.removeChild(no); */
}


/* CARGAR PERFIL */
var elmEncabezado = document.getElementById('encabezado');
function cargar_perfil(){
    /* CARGAR NOMBRES Y APELLIDOS */
    var elmNombre = elmEncabezado.getElementsByClassName('nombre');
    var elmNom = elmNombre[0].querySelectorAll('h2');
    elmNom[0].innerHTML = miPerfil.nombres;
    elmNom[1].innerHTML = miPerfil.apellidos;

    /* CARGAR PROFESION */
    var elmProf = document.getElementById('profActual');
    elmProf.innerHTML = miPerfil.profesionActual;

    /* CARGAR VALORES */
    var elmVal = document.getElementById('sobreMi');
    miPerfil.valores.forEach( valor =>{
        var div = document.createElement('div');
        div.setAttribute("class", "valor");
        var h4Valor = document.createElement('h4');
        h4Valor.innerText = valor;
        div.appendChild(h4Valor);
        elmVal.appendChild(div);
    });
    
    /* CARGAR CONTACTO */
    var correo = document.getElementById('correo');
    correo.setAttribute('href', 'mailto:'+ miPerfil.correo +'?subject=Hola%20Ivan%20Terrazas,%20estamos%20interesados');
    correo.innerHTML = miPerfil.correo;
    var telefono = document.getElementById('telefono');
    telefono.setAttribute('href', 'https://wa.me/591'+ miPerfil.telefono +'?text=Hola%20Ivan%20Terrazas,%20estamos%20interesados');
    telefono.innerHTML = miPerfil.telefono;
    var domicilio = document.getElementById('domicilio');
    domicilio.innerHTML = miPerfil.domicilio;
    var ciudad = document.getElementById('ciudad');
    ciudad.innerHTML = miPerfil.ciudad;
    var fechaNac = document.getElementById('fechaNac');
    fechaNac.innerHTML = miPerfil.fechaNac;
    var miqr = document.getElementById("miqr");
    miqr.src = miPerfil.qr;

    /* CARGAR IDIOMAS */
    var idiomas = document.getElementById("idiomas");
    miPerfil.idiomas.forEach( valor=>{
        var span = document.createElement("span");
        span.innerText = valor.idioma + " - " + valor.nivel;
        idiomas.appendChild(span);
        insertarSeparador(idiomas);
    });
    retirarSeparador(idiomas);

    /* CARGAR HABILIDADES */
    var habilidades = document.getElementById("habilidades");
    miPerfil.habilidades.forEach( valor => {
        var li = document.createElement("li");
        li.innerText = valor;
        habilidades.appendChild(li);
    });
}
cargar_perfil();

/* CARGAR FORMACION ACADEMICA */
function cargarFormAca(){
    var foac = document.getElementById("foac");
    formacionAcademica.forEach( valor => {
        var div = document.createElement("div");
        div.setAttribute('class', "sector formacion-academica foac");
        var p = document.createElement("p");
        var pTitulo = document.createElement("p");
        pTitulo.setAttribute("class", "click");
        pTitulo.setAttribute("onclick", "mostrar_modal('foac', '"+valor.imagen+"');");
        pTitulo.innerText = valor.titulo;
        p.innerText = valor.fecha;
        div.appendChild(p);
        div.appendChild(pTitulo);
        p = document.createElement("p");
        p.innerText = valor.ciudad;
        div.appendChild(p);
        p = document.createElement("p");
        p.innerText = valor.lugar;
        div.appendChild(p);
        foac.appendChild(div);
        insertarSeparador(foac);
    });
    retirarSeparador(foac);
}
cargarFormAca();

/* CARGAR EXPERIENCIA LABORAL */
function cargarExpLab(){
    var exla = document.getElementById("exla");
    xpLaboral.forEach( valor => {
        var div = document.createElement("div");
        div.setAttribute('class', "sector experiencia-laboral exla");
        var p = document.createElement("p");
        p.innerHTML = valor.fecha + '<i class="fas fa-dot-circle"></i>'+
                    valor.lugar + '<i class="fas fa-dot-circle"></i>'+
                    valor.titulo;
        div.appendChild(p);
        var pTitulo = document.createElement("p");
        pTitulo.setAttribute("class", "click");
        pTitulo.setAttribute("onclick", "mostrar_modal('exla', '"+valor.imagen+"');");
        pTitulo.innerText = valor.titulo;
        div.appendChild(pTitulo);
        p = document.createElement("p");
        p.setAttribute('class', 'tareas-realizadas');
        p.innerText = valor.descripcion;
        div.appendChild(p);
        exla.appendChild(div);
        insertarSeparador(exla);
    });
    retirarSeparador(exla);
}
cargarExpLab();

/* CARGAR TALLERES Y CHARLAS */
function cargarTalleres(){
    var tach = document.getElementById("tach");
    talleres.forEach( valor => {
        var div = document.createElement("div");
        div.setAttribute('class', "sector talleres tach");
        var p = document.createElement("p");
        p.setAttribute("class", "click");
        p.setAttribute("onclick", "mostrar_modal('tach', '"+valor.imagen+"');");
        p.innerHTML = valor.fecha + '<i class="fas fa-dot-circle"></i>'+
                    valor.lugar + '<i class="fas fa-dot-circle"></i>'+
                    valor.tema + '<i class="fas fa-dot-circle"></i>'+
                    valor.rol;
        div.appendChild(p);
        p = document.createElement("p");
        p.setAttribute('class', 'contenido');
        p.innerText = valor.descripcion;
        div.appendChild(p);
        tach.appendChild(div);
        insertarSeparador(tach);
    });
    retirarSeparador(tach);
}
cargarTalleres();

/* CARGAR FORMACIONES ADICIONALES */
function cargarFormAdi(){
    var foad = document.getElementById("foad");
    formacionAdicional.forEach( valor => {
        var div = document.createElement("div");
        div.setAttribute('class', "formacion-adicional foad");
        var divSector = document.createElement("div");
        divSector.setAttribute("class", "sector");
        var p = document.createElement("p");
        p.innerText = valor.fecha;
        divSector.appendChild(p);
        p = document.createElement("p");
        p.setAttribute("class", "click");
        p.setAttribute("onclick", "mostrar_modal('foad', '"+valor.imagen+"');");
        p.innerText = valor.titulo;
        divSector.appendChild(p);
        div.appendChild(divSector);

        divSector = document.createElement("div");
        divSector.setAttribute("class", "sector");
        p = document.createElement("p");
        p.innerText = valor.ciudad;
        divSector.appendChild(p);
        p = document.createElement("p");
        p.innerText = valor.lugar;
        divSector.appendChild(p);
        div.appendChild(divSector);

        foad.appendChild(div);
        insertarSeparador(foad);
    });
    retirarSeparador(foad);
}
cargarFormAdi();

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
    img = num;
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
    /* galeria.src = "imgs/"+pref+"/"+pref+"_"+img+".jpg"; */
    galeria.src = img;
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