function carregar (){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')

    let data = new Date()

    let hrs = data.getHours()

    msg.innerHTML = `Agora são ${hrs} horas`

    if(hrs >= 0 && hrs < 12){
        img.src = '../img/diac.png'
        document.body.style.background = '#e2cd9f'
    } else if (hrs >= 12 && hrs < 18) {
        img.src = '../img/tardec.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = '../img/noiteC.png'
        document.body.style.background = '#5115154'
    }
}
