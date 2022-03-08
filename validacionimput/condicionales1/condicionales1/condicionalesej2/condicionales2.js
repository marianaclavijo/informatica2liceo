

do{
let masa = Number(prompt("Ingrese su masa en kg"))
} while (Number.isNaN(masa) || 10<masa || masa<0)


do{
let altura = Number(prompt("Ingrese su altura en m"))
} while (Number.isNaN(altura) || 10<altura || altura<0)





let imc = (masa/(altura*altura))

let clasificacion

if (imc <= 18.5) {
  clasificacion = "Insuficiencia ponderal"
} else{
  if (imc <= 24.9){
    clasificacion= "Intervalo normal"
  }else{ 
    if (imc <= 30) {
      clasificacion = "Sobrepeso"
    }else{
      if (imc <= 34.9){
        clasificacion= "Obesidad de clase I"
      }else{
        if (imc <= 39.9){
          clasificacion = "Obesidad de clase II"
        }else{
          clasificacion = "Obesidad de clase III"
        }
      }
    }
  }
}

document.getElementById ("resultadoimc").innerHTML = "En base a su IMC, su clasificacion es: " + clasificacion
