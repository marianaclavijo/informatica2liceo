let respuesta
pais= prompt("¿Proviene de US o COL?")

if (pais=="US") {
    temperatura= prompt("Ingrese su temperatura corporal en unidad de Fahrenheit")
    estatura= prompt("Ingrese su estatura en unidad de pies")
    acompanante= prompt("Indique si trae con usted un acompañante o no")
    if ((temperatura<100.4) && ((estatura> 4.6) || (acompanante=="Si") )) {
        respuesta=("You are allowed to enter")
    } else {
        respuesta=("You are not allowed to enter")
    }
} else {
    temperatura= prompt("Ingrese su temperatura corporal en unidad de Celsius")
    estatura= prompt("Ingrese su estatura en unidad de metros")
    acompanante= prompt("Indique si trae con usted un acompañante o no")
    if ((temperatura<38) && ((estatura> 1.4) || (acompanante=="Si") )) {
        respuesta= ("Usted está permitido para entrar")
    } else {
        respuesta= ("Usted no está permitido para entrar")
    }
        
}

let texto= document.querySelector("#texto")
texto.innerHTML = respuesta;