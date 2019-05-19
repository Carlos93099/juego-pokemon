class pokemon {
    constructor(nombre, estamina, vive, fuerza, energia, experiencia, ataque) {     
        this.nombre=nombre
        this.estamina=estamina
        this.vive=vive
        this.fuerza=fuerza
        this.energia=energia
        this.experiencia=experiencia
        this.ataque=ataque
    }
}

class entrenador {
    constructor(nombre, pokemones) {
        this.nombre=nombre
        this.pokemones=pokemones
        this.pokemones_vida=this.pokemones.length
    }
}

class ataque {
    constructor(nombre, cant) {
        this.nombre=nombre
        this.cant=cant
    }
}

const ataque1=new ataque("Combate", 5) //normal
const ataque2=new ataque("Confusión", 5) //psiquico
const ataque3=new ataque("Cascada", 5) //agua
const ataque4=new ataque("Voltiocambio", 4) //electrico
const ataque5=new ataque("Poder Oculto", 4) //normal
const ataque6=new ataque("Giro Fuego", 4) //fuego
const ataque7=new ataque("Tajo Aéreo", 4) //volador 
const ataque8=new ataque("Hoja Afilada", 4) //planta
const ataque9=new ataque("Cabezazo Zen", 3) //psiquico
const ataque10=new ataque("Paranormal", 3) //psiquico
const ataque11=new ataque("Burbuja", 3) //agua
const ataque12=new ataque("Colmillo Ígneo", 3) //fuego
const ataque13=new ataque("Puya Nociva", 3) //veneno
const ataque14=new ataque("Ascuas", 3) //fuego
const ataque15=new ataque("Rayo Carga", 2) //electrico
const ataque16=new ataque("Ácido", 2) //veneno
const ataque17=new ataque("Ataque Ala", 2) //volador
const ataque18=new ataque("Ataque Rápido", 2) //normal
const ataque19=new ataque("Látigo Cepa", 2) //planta
const ataque20=new ataque("Destructor", 2) //normal
const ataque21=new ataque("Chispa", 1) //electrico
const ataque22=new ataque("Pistola Agua", 1) //agua
const ataque23=new ataque("Psicocorte", 1) //psiquico
const ataque24=new ataque("Pulso Dragón", 4) //dragon
const ataque25=new ataque("Impactrueno", 1) //electrico
const ataque26=new ataque("Placaje", 1) //normal
const ataque27=new ataque("Corte", 1) //normal
const ataque28=new ataque("Presente", 1) //normal

let pokemon1=new pokemon("pikachu", 50, true, 2, 100, 1, [ataque4, ataque15, ataque21, ataque25])
let pokemon2=new pokemon("Venusaur", 50, true, 4, 100, 1, [ataque8, ataque13, ataque16, ataque19])
let pokemon3=new pokemon("Charizard", 50, true, 4, 100, 1, [ataque6, ataque12, ataque14, ataque26])
let pokemon4=new pokemon("Blastoise", 50, true, 4, 100, 1, [ataque3, ataque11, ataque22, ataque27])
let pokemonleg1=new pokemon("Mewtwo", 50, true, 6, 100, 1, [ataque2, ataque9, ataque10, ataque23])
let pokemonleg2=new pokemon("Arceus", 50, true, 6, 100, 1, [ataque1, ataque5, ataque18, ataque20])
let pokemonleg3=new pokemon("Rayquaza", 50, true, 6, 100, 1, [ataque7, ataque17, ataque28, ataque24])

let entrenador1=new entrenador("red", [pokemon1, pokemon2, pokemon3, pokemon4])
let entrenador2=new entrenador("green", [pokemonleg1, pokemonleg2, pokemonleg3])

alert("Bienvenido al juego de pokemon, tu eres el entrenador "+entrenador1.nombre)
alert("Los pokemones que manejas son los siguientes:")
alert(entrenador1.pokemones[0].nombre+", "+entrenador1.pokemones[1].nombre+", "+
entrenador1.pokemones[2].nombre+", "+entrenador1.pokemones[3].nombre)
alert("y tu contrincante "+entrenador2.nombre+" maneja los siguientes pokemones:")
alert(entrenador2.pokemones[0].nombre+", "+entrenador2.pokemones[1].nombre+", "+
entrenador2.pokemones[2].nombre)

const tienenPokemones=()=>entrenador1.pokemones_vida && entrenador2.pokemones_vida
const elegirtAtaque=()=>Math.floor(Math.random() * 4);
const elegirPokemon=()=>Math.floor(Math.random() * 3);
const atacaPrimero=()=>Math.floor(Math.random() * 10);
let cont=1
let vecPokemon1=[]
let vecPokemon2=[]
let eleccion

let poke1
do {
    poke1=prompt("Elige con que pokemon iniciar la batalla: 0 para "+entrenador1.pokemones[0].nombre
    +", 1 para "+entrenador1.pokemones[1].nombre+", 2 para "+entrenador1.pokemones[2].nombre+", 3 para "+
    entrenador1.pokemones[3].nombre)
    if(poke1==0 || poke1==1 || poke1==2 || poke1==3) {
        eleccion=true
    } else {
        eleccion=false
        alert('Elegiste mal, vuelve a intentarlo')
    }
} while(!eleccion)
let poke2=elegirPokemon()

alert("Tu inicias con "+entrenador1.pokemones[poke1].nombre+" y tu contrincante inicia con "
+entrenador2.pokemones[poke2].nombre)
while(tienenPokemones()) {
    const sigueVivo=()=>entrenador1.pokemones[poke1].vive && entrenador2.pokemones[poke2].vive

    alert("Turno "+cont)

    while(sigueVivo()) {
        const ataquePrimerPokemon=atacaPrimero()
        const ataqueSegundoPokemon=atacaPrimero()
        let ataq
        let x
        let y
        
        if(entrenador1.pokemones[poke1].energia<=0) {
            entrenador1.pokemones[poke1].vive=false
        } else if(entrenador2.pokemones[poke2].energia<=0){
            entrenador2.pokemones[poke2].vive=false
        } else {
            if(ataquePrimerPokemon>ataqueSegundoPokemon) {
                alert("Ataca primero "+entrenador1.pokemones[poke1].nombre)
                do {
                    x=prompt("Elige el ataque: 0 para "+entrenador1.pokemones[poke1].ataque[0].nombre+", 1 para "
                    +entrenador1.pokemones[poke1].ataque[1].nombre+", 2 para "+entrenador1.pokemones[poke1].ataque[2].nombre
                    +", 3 para "+entrenador1.pokemones[poke1].ataque[3].nombre)
                    if(x==0 || x==1 || x==2 || x==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
                ataq=entrenador1.pokemones[poke1].ataque[x].cant
                ataq=ataq*entrenador1.pokemones[poke1].fuerza
                console.log('ataque: '+ataq)
                if(entrenador1.pokemones[poke1].estamina>=ataq) {
                    entrenador2.pokemones[poke2].energia-=ataq
                    alert(entrenador1.pokemones[poke1].nombre+" usa "+entrenador1.pokemones[poke1].ataque[x].nombre+" contra "
                    +entrenador2.pokemones[poke2].nombre+" con un poder de "+ataq)
                    entrenador1.pokemones[poke1].estamina-=ataq
                } else {
                    alert(entrenador1.pokemones[poke1].nombre+' no tiene estamina suficiente, no puede atacar')
                    entrenador1.pokemones[poke1].estamina+=10
                }
                alert(entrenador2.pokemones[poke2].nombre+" queda con "+entrenador2.pokemones[poke2].energia+" de vida")
                turno=true
                console.log(entrenador2.pokemones[poke2].nombre+' tiene '+entrenador2.pokemones[poke2].energia+' de vida')
                console.log(entrenador1.pokemones[poke1].nombre+' tiene '+entrenador1.pokemones[poke1].estamina+' de estamina')
            } else {
                alert("Ataca primero "+entrenador2.pokemones[poke2].nombre)
                y=elegirtAtaque()
                ataq=entrenador2.pokemones[poke2].ataque[y].cant
                ataq=ataq*entrenador2.pokemones[poke2].fuerza
                console.log('ataque: '+ataq)
                if(entrenador2.pokemones[poke2].estamina>=ataq) {
                    entrenador1.pokemones[poke1].energia-=ataq
                    alert(entrenador2.pokemones[poke2].nombre+" usa "+entrenador2.pokemones[poke2].ataque[y].nombre+" contra "
                    +entrenador1.pokemones[poke1].nombre+" con un poder de "+ataq)
                    entrenador2.pokemones[poke2].estamina-=ataq
                } else {
                    alert(entrenador2.pokemones[poke2].nombre+' no tiene estamina suficiente, no puede atacar')
                    entrenador2.pokemones[poke2].estamina+=20
                }
                alert(entrenador1.pokemones[poke1].nombre+" queda con "+entrenador1.pokemones[poke1].energia+" de vida")  
                turno=false     
                console.log(entrenador1.pokemones[poke1].nombre+' tiene '+entrenador1.pokemones[poke1].energia+' de vida') 
                console.log(entrenador2.pokemones[poke2].nombre+' tiene '+entrenador2.pokemones[poke2].estamina+' de estamina')    
            }
        }

        if(entrenador1.pokemones[poke1].energia<=0) {
            entrenador1.pokemones[poke1].vive=false
        } else if(entrenador2.pokemones[poke2].energia<=0){
            entrenador2.pokemones[poke2].vive=false
        } else {
            if(turno) {
                alert("Ataca despues "+entrenador2.pokemones[poke2].nombre)
                y=elegirtAtaque()
                ataq=entrenador2.pokemones[poke2].ataque[y].cant
                ataq=ataq*entrenador2.pokemones[poke2].fuerza
                console.log('ataque: '+ataq)
                if(entrenador2.pokemones[poke2].estamina>=ataq) {
                    entrenador1.pokemones[poke1].energia-=ataq
                    alert(entrenador2.pokemones[poke2].nombre+" usa "+entrenador2.pokemones[poke2].ataque[y].nombre+" contra "
                    +entrenador1.pokemones[poke1].nombre+" con un poder de "+ataq)
                    entrenador2.pokemones[poke2].estamina-=ataq
                } else {
                    alert(entrenador2.pokemones[poke2].nombre+' no tiene estamina suficiente, no puede atacar')
                    entrenador2.pokemones[poke2].estamina+=20
                }
                alert(entrenador1.pokemones[poke1].nombre+" queda con "+entrenador1.pokemones[poke1].energia+" de vida")
                console.log(entrenador1.pokemones[poke1].nombre+' tiene '+entrenador1.pokemones[poke1].energia+' de vida')
                console.log(entrenador2.pokemones[poke2].nombre+' tiene '+entrenador2.pokemones[poke2].estamina+' de estamina')
            } else {
                alert("Ataca despues "+entrenador1.pokemones[poke1].nombre)
                do {
                    x=prompt("Elige el ataque: 0 para "+entrenador1.pokemones[poke1].ataque[0].nombre+", 1 para "
                    +entrenador1.pokemones[poke1].ataque[1].nombre+", 2 para "+entrenador1.pokemones[poke1].ataque[2].nombre
                    +", 3 para "+entrenador1.pokemones[poke1].ataque[3].nombre)
                    if(x==0 || x==1 || x==2 || x==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
                ataq=entrenador1.pokemones[poke1].ataque[x].cant
                ataq=ataq*entrenador1.pokemones[poke1].fuerza
                console.log('ataque: '+ataq)
                if(entrenador1.pokemones[poke1].estamina>=ataq) {
                    entrenador2.pokemones[poke2].energia-=ataq
                    alert(entrenador1.pokemones[poke1].nombre+" usa "+entrenador1.pokemones[poke1].ataque[x].nombre+" contra "
                    +entrenador2.pokemones[poke2].nombre+" con un poder de "+ataq)
                    entrenador1.pokemones[poke1].estamina-=ataq
                } else {
                    alert(entrenador1.pokemones[poke1].nombre+' no tiene estamina suficiente, no puede atacar')
                    entrenador1.pokemones[poke1].estamina+=10
                }
                alert(entrenador2.pokemones[poke2].nombre+" queda con "+entrenador2.pokemones[poke2].energia+" de vida")
                console.log(entrenador2.pokemones[poke2].nombre+' tiene '+entrenador2.pokemones[poke2].energia+' de vida')
                console.log(entrenador1.pokemones[poke1].nombre+' tiene '+entrenador1.pokemones[poke1].estamina+' de estamina')
            }    
        }

        if(entrenador1.pokemones[poke1].estamina<50) {
            let estamina=entrenador1.pokemones[poke1].estamina+5
            if(estamina>50) {
                entrenador1.pokemones[poke1].estamina+=0
            } else {
                entrenador1.pokemones[poke1].estamina+=1
            }
        }

        if(entrenador2.pokemones[poke2].estamina<50) {
            let estamina=entrenador2.pokemones[poke2].estamina+5
            if(estamina>50) {
                entrenador2.pokemones[poke2].estamina+=0
            } else {
                entrenador2.pokemones[poke2].estamina+=10
            }
        }
    } 

    if(entrenador1.pokemones[poke1].energia<=0) {
        alert(entrenador1.nombre+': '+entrenador1.pokemones[poke1].nombre+' se ha quedado sin energia')
        let nuevaLongitud=vecPokemon1.push(poke1)
        console.log(vecPokemon1.length)
        
        if(vecPokemon1.length==1) {
            if(vecPokemon1[0]==0) {
                do {
                    p=prompt('Elige otro pokemon: 1 para '+entrenador1.pokemones[1].nombre+", 2 para "
                    +entrenador1.pokemones[2].nombre+', 3 para '+entrenador1.pokemones[3].nombre)
                    if(p==1 || p==2 || p==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==1){
                do {
                    p=prompt('Elige otro pokemon: 0 para '+entrenador1.pokemones[0].nombre+", 2 para "
                    +entrenador1.pokemones[2].nombre+', 3 para '+entrenador1.pokemones[3].nombre)
                    if(p==0 || p==2 || p==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==2) {
                do {
                    p=prompt('Elige otro pokemon: 0 para '+entrenador1.pokemones[0].nombre+", 1 para "
                    +entrenador1.pokemones[1].nombre+', 3 para '+entrenador1.pokemones[3].nombre)
                    if(p==0 || p==1 || p==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==3) {
                do {
                    p=prompt('Elige otro pokemon: 0 para '+entrenador1.pokemones[0].nombre+", 1 para "
                    +entrenador1.pokemones[1].nombre+', 2 para '+entrenador1.pokemones[2].nombre)
                    if(p==0 || p==1 || p==2) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            }
            poke1=p
            alert('Acabas de elegir a '+entrenador1.pokemones[poke1].nombre)
        }

        if(vecPokemon1.length==2) {
            if(vecPokemon1[0]==0 && vecPokemon1[1]==1 || vecPokemon1[0]==1 && vecPokemon1[1]==0) {
                do {
                    p=prompt('Elige otro pokemon: 2 para '+entrenador1.pokemones[2].nombre+", 3 para "
                    +entrenador1.pokemones[3].nombre)
                    if(p==2 || p==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==0 && vecPokemon1[1]==2 || vecPokemon1[0]==2 && vecPokemon1[1]==0) {
                do {
                    p=prompt('Elige otro pokemon: 1 para '+entrenador1.pokemones[1].nombre+", 3 para "
                    +entrenador1.pokemones[3].nombre)
                    if(p==1 || p==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==0 && vecPokemon1[1]==3 || vecPokemon1[0]==3 && vecPokemon1[1]==0) {
                do {
                    p=prompt('Elige otro pokemon: 1 para '+entrenador1.pokemones[1].nombre+", 2 para "
                    +entrenador1.pokemones[2].nombre)
                    if(p==1 || p==2) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==1 && vecPokemon1[1]==2 || vecPokemon1[0]==2 && vecPokemon1[1]==1) {
                do {
                    p=prompt('Elige otro pokemon: 0 para '+entrenador1.pokemones[0].nombre+", 3 para "
                    +entrenador1.pokemones[3].nombre)
                    if(p==0 || p==3) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==1 && vecPokemon1[1]==3 || vecPokemon1[0]==3 && vecPokemon1[1]==1) {
                do {
                    p=prompt('Elige otro pokemon: 0 para '+entrenador1.pokemones[0].nombre+", 2 para "
                    +entrenador1.pokemones[2].nombre)
                    if(p==0 || p==2) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            } else if(vecPokemon1[0]==2 && vecPokemon1[1]==3 || vecPokemon1[0]==3 && vecPokemon1[1]==2) {
                do {
                    p=prompt('Elige otro pokemon: 0 para '+entrenador1.pokemones[0].nombre+", 1 para "
                    +entrenador1.pokemones[1].nombre)
                    if(p==0 || p==1) {
                        eleccion=true
                    } else {
                        eleccion=false
                        alert('Elegiste mal, vuelve a intentarlo')
                    }
                } while(!eleccion)
            }
            poke1=p
            alert('Acabas de elegir a '+entrenador1.pokemones[poke1].nombre)
        }

        if(vecPokemon1.length==3) {
            if(vecPokemon1[0]==0 && vecPokemon1[1]==1 && vecPokemon1[2]==2 || vecPokemon1[0]==0 && vecPokemon1[1]==2 && vecPokemon1[2]==1 || 
                vecPokemon1[0]==1 && vecPokemon1[1]==0 && vecPokemon1[2]==2 || vecPokemon1[0]==1 && vecPokemon1[1]==2 && vecPokemon1[2]==0 ||
                vecPokemon1[0]==2 && vecPokemon1[1]==0 && vecPokemon1[2]==1 || vecPokemon1[0]==2 && vecPokemon1[1]==1 && vecPokemon1[2]==0) {
                    do {
                        p=prompt('Ya solo te queda un pokemon por elegir: 3 para '+entrenador1.pokemones[3].nombre)
                        if(p==3) {
                            eleccion=true
                        } else {
                            eleccion=false
                            alert('Elegiste mal, vuelve a intentarlo')
                        }
                    } while(!eleccion)
                } else if(vecPokemon1[0]==1 && vecPokemon1[1]==2 && vecPokemon1[2]==3 || vecPokemon1[0]==1 && vecPokemon1[1]==3 && vecPokemon1[2]==2 || 
                          vecPokemon1[0]==2 && vecPokemon1[1]==1 && vecPokemon1[2]==3 || vecPokemon1[0]==2 && vecPokemon1[1]==3 && vecPokemon1[2]==1 ||
                          vecPokemon1[0]==3 && vecPokemon1[1]==1 && vecPokemon1[2]==2 || vecPokemon1[0]==3 && vecPokemon1[1]==2 && vecPokemon1[2]==1) {
                            do {
                                p=prompt('Ya solo te queda un pokemon  por elegir: 0 para '+entrenador1.pokemones[0].nombre)
                                if(p==0) {
                                    eleccion=true
                                } else {
                                    eleccion=false
                                    alert('Elegiste mal, vuelve a intentarlo')
                                }
                            } while(!eleccion)
                          } else if (vecPokemon1[0]==2 && vecPokemon1[1]==3 && vecPokemon1[2]==0 || vecPokemon1[0]==2 && vecPokemon1[1]==0 && vecPokemon1[2]==3 || 
                                     vecPokemon1[0]==3 && vecPokemon1[1]==2 && vecPokemon1[2]==0 || vecPokemon1[0]==3 && vecPokemon1[1]==0 && vecPokemon1[2]==2 ||
                                     vecPokemon1[0]==0 && vecPokemon1[1]==2 && vecPokemon1[2]==3 || vecPokemon1[0]==0 && vecPokemon1[1]==3 && vecPokemon1[2]==2) {
                                        do {
                                            p=prompt('Ya solo te queda un pokemon por elegir: 1 para '+entrenador1.pokemones[1].nombre)
                                            if(p==1) {
                                                eleccion=true
                                            } else {
                                                eleccion=false
                                                alert('Elegiste mal, vuelve a intentarlo')
                                            }
                                        } while(!eleccion)
                                     } else if(vecPokemon1[0]==3 && vecPokemon1[1]==0 && vecPokemon1[2]==1 || vecPokemon1[0]==3 && vecPokemon1[1]==1 && vecPokemon1[2]==0 || 
                                               vecPokemon1[0]==0 && vecPokemon1[1]==3 && vecPokemon1[2]==1 || vecPokemon1[0]==0 && vecPokemon1[1]==1 && vecPokemon1[2]==3 ||
                                               vecPokemon1[0]==1 && vecPokemon1[1]==3 && vecPokemon1[2]==0 || vecPokemon1[0]==1 && vecPokemon1[1]==0 && vecPokemon1[2]==3) {
                                                    do {
                                                        p=prompt('Ya solo te queda un pokemons por elegir: 2 para '+entrenador1.pokemones[2].nombre)
                                                        if(p==2) {
                                                            eleccion=true
                                                        } else {
                                                            eleccion=false
                                                            alert('Elegiste mal, vuelve a intentarlo')
                                                        }
                                                    } while(!eleccion)
                                               }
            poke1=p
            alert('Acabas de elegir a '+entrenador1.pokemones[poke1].nombre)
        }
        entrenador1.pokemones_vida-=1
    } else {
        alert(entrenador2.pokemones[poke2].nombre+' de tu rival '+entrenador2.nombre+' se ha quedado sin energia')
        let nuevaLongitud=vecPokemon2.push(poke2)

        console.log(vecPokemon2.length)

        if(vecPokemon2.length==1) {
            if(vecPokemon2[0]==0) {
                do
                {
                    p=elegirPokemon()
                } while(p==0)
            } else if(vecPokemon2[0]==1) {
                do
                {
                    p=elegirPokemon()
                } while(p==1)
            } else if(vecPokemon2[0]==2) {
                do
                {
                    p=elegirPokemon()
                } while(p==2)
            } 
            poke2=p
            alert('Tu contrincante ha elegido a '+entrenador2.pokemones[poke2].nombre)
        } 

        if(vecPokemon2.length==2) {
            if(vecPokemon2[0]==0 && vecPokemon2[1]==1 || vecPokemon2[0]==1 && vecPokemon2[1]==0) {
                p=2
            } else if(vecPokemon2[0]==1 && vecPokemon2[1]==2 || vecPokemon2[0]==2 && vecPokemon2[1]==1) {
                p=0
            } else if(vecPokemon2[0]==0 && vecPokemon2[1]==2 || vecPokemon2[0]==2 && vecPokemon2[1]==0) {
                p=1
            }
            poke2=p
            alert('Tu contrincante ha elegido a '+entrenador2.pokemones[poke2].nombre)
        }
        entrenador2.pokemones_vida-=1
    }
    cont++
}

if(entrenador1.pokemones_vida>0) {
    alert(entrenador1.nombre+": Felicidades, has ganado la batalla")
} else {
    alert("Lo siento, "+entrenador2.nombre+" ha ganado la batalla")
}
