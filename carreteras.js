//definimos el grafo con los pesos en una matriz bidimensional con los pesos de las aristas 

var carreteras = [[0,0,0,0,0,4,0,0,0,0,0,0] //MADRID
,[0,0,7,5,5,1,0,0,0,0,5,0] // BARCELONA
,[0,7,0,0,0,0,0,0,0,0,0,0] // CIUDAD REAL
,[0,5,0,0,0,0,0,0,0,0,0,0] // BADAJOZ
,[0,5,0,0,0,0,0,0,0,5,0,0] // MELILLA
,[4,1,0,0,0,0,10,6,3,0,0,5] // CACERES
,[0,0,0,0,0,10,0,0,0,0,0,0] //MALLORCA
,[0,0,0,0,0,6,0,0,0,0,0,0] //BILBAO
,[0,0,0,0,0,3,0,0,0,4,0,0] // SANTANDER
,[0,0,0,0,5,0,0,0,4,0,9,3] // LUGO
,[0,5,0,0,0,3,0,0,0,9,0,0] //SEVILLA
,[0,0,0,0,0,5,0,0,0,3,0,0]] //ZARAGOZA


console.log(carreteras)

//necesito un origen y un destino

let origen = 0 // madrid

let destino = 4 //Badajoz
let visitados = new Set()
let mejor = 0
let mejorAux = 0

caminoOptimo( origen,destino,visitados,mejor,mejorAux)
function caminoOptimo(origen,destino,visitados,mejor){
    
    if(origen == destino ){
        console.log("Llegaste amigo")
    }
    visitados.add(origen)
    for(let i = 0; i < carreteras.length; i++){
        if(!visitados.has(i)){
            if(carreteras[origen][i] != 0 && i == destino) {
                if(mejor > 0 && mejor < mejorAux ){
                    mejorAux = mejor
                }
                for (const valor of visitados) {
                    console.log(valor);
                  }
                console.log("Total Rapido "+mejor)
                console.log("llegaste amigo")
            } else if (carreteras[origen][i] != 0 ){
                visitados.add(i)
                mejor = mejor + carreteras[origen][i]
                console.log(i)
                caminoOptimo(i,destino,visitados,mejor,mejorAux)
            }
        }
    
    }   

}