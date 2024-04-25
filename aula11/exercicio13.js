var now = new Date()
var weekDay = now.getDay()
var hours = new Date()
var hours = hours.getHours()
var min = new Date()
var min = min.getMinutes()

switch(weekDay) {
    case 0:
        console.log(`Domingo, ${hours}:${min}`)
        break
    case 1: 
         console.log(`Segunda-Feira ${hours}:${min}`)
         break
    case 2: 
         console.log(`Terça-Feira ${hours}:${min}`)
         break
    case 3: 
         console.log(`Quarta-Feira ${hours}:${min}`)
         break
    case 4: 
         console.log(`Quinta-Feira, ${hours}:${min}`)
         break
    case 5: 
         console.log(`Sexta-Feira ${hours}:${min}`)
         break
    case 6: 
         console.log(`Sábado ${hours}`)
         break
    default:
        console.log(`Esse dia não existe`)
}