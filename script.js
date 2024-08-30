function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${sec} segundos.`
    if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = '#fcd18c'
    } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background = '#cc8754'
    } else {
    // BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background = '#1f3137'
    }
}
