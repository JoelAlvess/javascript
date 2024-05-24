let infos = ['a','b','c','d','e','f',,,,,]
infos.unshift(1,2,3,4,5)
for(let pos = 0; pos < infos.length; pos++){
    if(!infos[pos]){
        console.log(`Na posição ${pos} está o elemento ${infos[pos]}`)
    }
}