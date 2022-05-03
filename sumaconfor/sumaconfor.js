let denominador
let suma=0
i=1
for (let k = 0; k <=500; k++) {
denominador = 2*k+1;
suma=suma+(i/denominador)
i=i*-1
}
suma= suma*4
console.log("El número calculado es " + suma)
document.getElementById ("Respuesta").innerHTML= "El número calculado es " + suma