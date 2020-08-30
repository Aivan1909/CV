export const cargarDatosModal = (titulo, src)=>{
    const modalTitle = document.querySelector('#showModal .modal-title').innerHTML = titulo
    const modalImagen = document.querySelector('#showModal .modal-body img')
    fetch(src)
    .then( xhr => {
        if(xhr.status===200){
            modalImagen.setAttribute('src', src)
        }else if(xhr.status===404){
            modalImagen.setAttribute('src', "./../imgs/error.jpg")
        }
    }
    )
}

export const igualarCards = ()=>{
    const cards = document.querySelectorAll('#habilidades .card') /* Seleccionamos los cards */
    let hgt = 0
    cards.forEach(el => {
        if(el.clientHeight>hgt)
            hgt=el.clientHeight /* Extraemos la altura mayor */
    })
    cards.forEach(el => {
        el.setAttribute('style', `height:${hgt}px`) /* Igualamos la altura de todos los cards */
    })
}

export const hideSpinner = () => {
    document.querySelector('#spinner').classList.add('d-none')
}
export const changeColorNav = () => {
    window.onscroll = () => {
        const navTag = document.querySelector('nav')
        const divTag = document.querySelector('body>div')
        const divColorBg = divTag.classList.contains('my-bg-primary')? "my-bg-primary":"my-bg-secondary"
        if(window.scrollY >= divTag.clientHeight){
            navTag.classList.remove('my-bg-dark')
            navTag.classList.add(divColorBg)
        }else{
            navTag.classList.add('my-bg-dark')
            navTag.classList.remove(divColorBg)
        }
        //navTag.classList.remove('my-bg-dark')
    }
}