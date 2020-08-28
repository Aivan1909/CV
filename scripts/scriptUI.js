export const cargarDatosModal = (titulo, src)=>{
    const modalTitle = document.querySelector('#showModal .modal-title').innerHTML = titulo
    const modalImagen = document.querySelector('#showModal .modal-body img')
    fetch(src)
    .then( xhr => {
        if(xhr.status===200){
            modalImagen.setAttribute('src', src)
        }else if(xhr.status===404){
            modalImagen.setAttribute('src', "/imgs/error.jpg")
        }
    }
    )
}