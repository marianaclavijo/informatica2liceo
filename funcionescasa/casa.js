function techo(){
    console.log(" ____________");
    console.log("/            \\");
} 
function piso (){
    console.log("_____________");
    console.log("|  _    _   |");
    console.log("| |_|  |_|  |");
    console.log("|           |")   
}
function pisoBase (){
    console.log("_____________");
    console.log("|  _    _   |");
    console.log("| |_|__|_|  |");
    console.log("|    __     |");
    console.log("|___|__|____|");
} 
function casa(nPisos){
    techo()
    for(let i = 0; i < nPisos; i++){
        piso()
    }
    pisoBase()
}
let nPisos = parseInt(prompt("Ingrese el numero de pisos"))
casa(nPisos)