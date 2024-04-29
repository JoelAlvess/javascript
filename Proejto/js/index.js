const btns = document.querySelector('.btn')
btns.addEventListener('click', calcularsalario)

function calcularsalario(){
    var salario_atual = Number(document.querySelector('#salario').value)
    let salantigo = document.querySelector('.sal-antigo')
    let aumento = document.querySelector('.aumento')
    let valoraumento = document.querySelector('.valor-aumento')
    let salnovo = document.querySelector('.sal-novo')
    let percAumento
    let SalarioNovo

    if(salario_atual <= 280){
        salantigo.innerHTML = `Seu salário atual é de ${salario_atual.toFixed(2)}`
        aumento.innerHTML = `Aumentamos seu salário em 20%`

        percAumento = salario_atual * (20/100)
        valoraumento.innerHTML = `Isso representa um aumento de ${percAumento.toFixed(2)}`

        SalarioNovo = salario_atual + percAumento
        salnovo.innerHTML = `Seu novo salário é de ${SalarioNovo.toFixed(2)}`
    }   else if(salario_atual > 280 && salario_atual < 700){
        salantigo.innerHTML = `Seu salário atual é de ${salario_atual.toFixed(2)}`
        aumento.innerHTML = `Aumentamos seu salário em 15%`

        percAumento = salario_atual * (15/100)
        valoraumento.innerHTML = `Isso representa um aumento de ${percAumento.toFixed(2)}`

        SalarioNovo = salario_atual + percAumento
        salnovo.innerHTML = `Seu novo salário é de ${SalarioNovo.toFixed(2)}`

    }else if(salario_atual > 700 && salario_atual < 1500){
            salantigo.innerHTML = `Seu salário atual é de ${salario_atual.toFixed(2)}`
            aumento.innerHTML = `Aumentamos seu salário em 10%`

            percAumento = salario_atual * (10/100)
            valoraumento.innerHTML = `Isso representa um aumento de ${percAumento.toFixed(2)}`

            SalarioNovo = salario_atual + percAumento
            salnovo.innerHTML = `Seu novo salário é de ${SalarioNovo.toFixed(2)}`
    }else if(salario_atual > 1500){
        salantigo.innerHTML = `Seu salário atual é de ${salario_atual.toFixed(2)}`
        aumento.innerHTML = `Aumentamos seu salário em 5%`

        percAumento = salario_atual * (5/100)
        valoraumento.innerHTML = `Isso representa um aumento de ${percAumento.toFixed(2)}`

        SalarioNovo = salario_atual + percAumento
        salnovo.innerHTML = `Seu novo salário é de ${SalarioNovo.toFixed(2)}`
    }
}