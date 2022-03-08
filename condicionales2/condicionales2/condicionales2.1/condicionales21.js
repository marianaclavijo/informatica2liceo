let numero = Number(prompt("Ingrese un número entero"))

let h1Respuestanumero  = document.querySelector("#respuestanumero")



if(numero%5 && numero%3){
    h1Respuestanumero.innerHTML = (`Fizzbuzz`)}
     else if(numero%5){
         h1Respuestanumero.innerHTML = (`Buzz`)}
         else if (numero%3){
             h1Respuestanumero.innerHTML = (`Fizz`)
         }

         
console.log(h1Respuestanumero)