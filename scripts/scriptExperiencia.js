import * as ui from "./scriptUI.js"
/* Cargar Experiencia */
const experienciaLaboral = document.querySelector('#experienciaLaboral')
const charlasTalleres = document.querySelector('#charlasTalleres')
fetch("/json/experiencia.json")
.then(xhr => xhr.json())
.then(res => {
    const ulExperiencia = experienciaLaboral.querySelector('.container ul')
    let {laboral, charlas}= res
    let contExperiencia = ''
    try {
        laboral.forEach(el=>{
            const {fecha, descripcion, titulo, lugar, imagen} = el
            contExperiencia += `
                <li class="list-group-item p-0">
                    <div class="row no-gutters">
                        <div class="col-sm-9">
                            <div class="card-body py-3">
                                <h5 class="card-title my-text-secondary text-bolder">${titulo}</h5>
                                <p class="card-text mb-0 pl-4"><i class="fas fa-university my-text-light"></i>&nbsp;&nbsp;${lugar}</p>
                                <p class="card-text pl-4"><i class="fas fa-quote-left my-text-light"></i>&nbsp;&nbsp;${descripcion}</p>
                                <p class="card-text"><small class="text-muted">${fecha}</small></p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <button data-src="${imagen}" data-title="${titulo}" class="btn btn-block my-btn-secondary h-100" data-toggle="modal" data-target="#showModal">
                                <i class="fas fa-eye fa-lg"></i>&nbsp;&nbsp;Ver Certificado
                            </button>
                        </div>
                    </div>
                </li>`
        })
        ulExperiencia.innerHTML = contExperiencia
    } catch (error) {
        ulExperiencia.innerHTML = "<li class='list-group-item'>No se encuentran datos</li>"
    }

    const ulCharlas = charlasTalleres.querySelector('.container ul')
    try {
        let contCharlas = ''
        charlas.forEach(el=>{
            const {fecha, descripcion, titulo, lugar, imagen, rol} = el
            contCharlas += `
                <li class="list-group-item p-0">
                    <div class="row no-gutters">
                        <div class="col-sm-9">
                            <div class="card-body py-3">
                                <h5 class="card-title my-text-secondary text-bolder">${titulo}&nbsp;&zigrarr;&nbsp;<span class="text-capitalize">${rol}</span></h5>
                                <p class="card-text mb-0 pl-4"><i class="fas fa-university my-text-light"></i>&nbsp;&nbsp;${lugar}</p>
                                <p class="card-text pl-4"><i class="fas fa-quote-left my-text-light"></i>&nbsp;&nbsp;${descripcion}</p>
                                <p class="card-text"><small class="text-muted">${fecha}</small></p>
                            </div>
                        </div>
                        <div class="col-sm-3 d-none">
                            <button data-src="${imagen}" class="btn btn-block my-btn-secondary h-100"><i class="fas fa-eye fa-lg"></i>&nbsp;&nbsp;Ver Certificado</button>
                        </div>
                    </div>
                </li>`
        })
        ulCharlas.innerHTML = contCharlas
    } catch (error) {
        ulCharlas.innerHTML = "<li class='list-group-item'>No se encuentran datos</li>"
    }
    clickVerCertificado()
}).catch(error => {
    console.log(error)
})

function clickVerCertificado() {
    document.querySelectorAll("button[data-toggle='modal']")
    .forEach(el => {
        el.addEventListener('click', (ev) => {
            ui.cargarDatosModal(el.getAttribute('data-title'), el.getAttribute('data-src'))
        })
    })
}

