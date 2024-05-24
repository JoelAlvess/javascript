let btns = document.querySelector('#verificar')
btns.addEventListener('click', analisar)


function analisar(){
    // alert('Prestou poora')
    let foto = document.querySelector('#imagem')
let msg = document.querySelector('.text')
let years = Number(document.querySelector('#year').value)
let masc = document.querySelector('#masc').value
let fem = document.querySelector('#fem').value
    if(years == 18){
        msg.innerHTML = `Identificamos uma pessoa com ${years} anos do sexo ${masc}`

        imagem.src = '../img/p18 - Copia.png'
    }else if(years == 30){
        msg.innerHTML = `Identificamos uma pessoa com ${years} anos`
        imagem.src = '../img/p30 - Copia.png'
    }else{
        msg.innerHTML = `Identificamos uma pessoa com ${years} anos`

        imagem.src = '../img/p60 - Copia.png'
    }
}