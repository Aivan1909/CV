import * as ui from "./scriptUI.js"

/* Cargar Estudios */
fetch("/json/estudios.json")
.then(xhr => xhr.json())
.then(res => {
    let {academico, adicional}= res
    const formacionEstudios = document.querySelector('#formacionEstudios .container ul')
    try {
        let contAcademico = ''
        academico.forEach(el=>{
            const {fecha, ciudad, titulo, lugar, imagen} = el
            contAcademico += `
                <li class="list-group-item p-0">
                    <div class="row no-gutters">
                        <div class="col-sm-9">
                            <div class="card-body py-3">
                                <h5 class="card-title my-text-secondary text-bolder">${titulo}</h5>
                                <p class="card-text mb-0 pl-4"><i class="fas fa-university my-text-light"></i>&nbsp;&nbsp;${lugar}</p>
                                <p class="card-text pl-4"><i class="fas fa-map-marker my-text-light"></i>&nbsp;&nbsp;${ciudad}</p>
                                <p class="card-text"><small class="text-muted">${fecha}</small></p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <button data-title="${titulo}" data-src="./..${imagen}" class="btn btn-block my-btn-secondary h-100" data-toggle="modal" data-target="#showModal"><i class="fas fa-eye fa-lg"></i>&nbsp;&nbsp;Ver Certificado</button>
                        </div>
                    </div>
                </li>`
        })
        formacionEstudios.innerHTML = contAcademico   
    } catch (error) {
        formacionEstudios.innerHTML = '<li class="list-group-item">No hay datos</li>'
    }

    const formacionAdicional = document.querySelector('#formacionAdicional .container ul')
    try {
        let contAdicional = ''
        adicional.forEach(el=>{
            const {fecha, ciudad, titulo, lugar, imagen} = el
            contAdicional += `
                <li class="list-group-item p-0">
                    <div class="row no-gutters">
                        <div class="col-sm-9">
                            <div class="card-body py-3">
                                <h5 class="card-title my-text-secondary text-bolder">${titulo}</h5>
                                <p class="card-text mb-0 pl-4"><i class="fas fa-university my-text-light"></i>&nbsp;&nbsp;${lugar}</p>
                                <p class="card-text pl-4"><i class="fas fa-map-marker my-text-light"></i>&nbsp;&nbsp;${ciudad}</p>
                                <p class="card-text"><small class="text-muted">${fecha}</small></p>
                            </div>
                        </div>
                        <div class="col-sm-3 d-none">
                            <button class="btn btn-block my-btn-secondary h-100"><i class="fas fa-eye fa-lg"></i>&nbsp;&nbsp;Ver Certificado</button>
                        </div>
                    </div>
                </li>`
        })
        formacionAdicional.innerHTML = contAdicional
        clickVerCertificado()
    } catch (error) {
        formacionAdicional.innerHTML = '<li class="list-group-item">No hay datos</li>'
    }
})

function clickVerCertificado() {
    document.querySelectorAll("button[data-toggle='modal']")
    .forEach(el => {
        el.addEventListener('click', (ev) => {
            ui.cargarDatosModal(el.getAttribute('data-title'), el.getAttribute('data-src'))
        })
    })
}