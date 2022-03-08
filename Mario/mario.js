function piso(nPiso, altura){
    nEspacios= altura- nPiso;
    nNumerales= nPiso;
    texto= "<p>";
    for(let i=0; i<nEspacios; i++)
    {
        texto= texto + "&nbsp";
    }
    for(let i=0; i<nNumerales; i++)
    {
        texto= texto + "#";
    }
    texto= texto + "</p>";

    return texto;
}

let nPisos;
do{
nPisos = parseInt(prompt("Ingrese la altura de la torre. Número entre 1 y 10"))
}while(isNaN(nPisos) || nPisos < 1 || nPisos > 10);
let contenido= ""
for(let i = 1; i <= nPisos; i++){
    contenido = contenido + piso(i, nPisos)
}

let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = contenido;









