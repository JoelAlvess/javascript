var now = new Date()
var hours = now.getHours()
if (hours < 12) {
    console.log(`BOM DIA!`)
} else if (hours <= 18) {
    console.log(`BOA TARDE`)
} else {
    console.log(`BOA NOITE`)
}