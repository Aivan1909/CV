/* Cargar Perfil */
fetch("/json/perfil.json")
.then(xhr => xhr.json())
.then(res => {
    let {
        nombre,
        apellidoPaterno,
        foto,
        frontend,
        backend,
        otros
    }= res

    const myName = document.querySelector('#myName')
    myName.textContent = `${nombre} ${apellidoPaterno}` /* Set Nombre completo */

    const myPic = document.querySelector('#myPic')
    myPic.setAttribute('src', foto) /* Set foto */

    const pnlFrontend = document.querySelector('#pnlFrontend ul')
    let cont = ''
    frontend.forEach(el => {
        cont += `<li class="ml-3"><i class="fas fa-check my-text-secondary"></i>&nbsp;&nbsp;&nbsp;${el}</li>`
    })
    pnlFrontend.innerHTML = cont /* Seteamos dentro de los cards el contenido */

    const pnlBackend = document.querySelector('#pnlBackend ul')
    cont = ''
    backend.forEach(el => {
        cont += `<li class="ml-3"><i class="fas fa-check my-text-secondary"></i>&nbsp;&nbsp;&nbsp;${el}</li>`
    })
    pnlBackend.innerHTML = cont /* Seteamos dentro de los cards el contenido */

    const pnlOtros = document.querySelector('#pnlOtros ul')
    cont = ''
    otros.forEach(el => {
        cont += `<li class="ml-3"><i class="fas fa-check my-text-secondary"></i>&nbsp;&nbsp;&nbsp;${el}</li>`
    })
    pnlOtros.innerHTML = cont /* Seteamos dentro de los cards el contenido */

    const cards = document.querySelectorAll('#habilidades .card') /* Seleccionamos los cards */
    let hgt = 0
    cards.forEach(el => {
        if(el.clientHeight>hgt)
            hgt=el.clientHeight /* Extraemos la altura mayor */
    })
    cards.forEach(el => {
        el.setAttribute('style', `height:${hgt}px`) /* Igualamos la altura de todos los cards */
    })
})