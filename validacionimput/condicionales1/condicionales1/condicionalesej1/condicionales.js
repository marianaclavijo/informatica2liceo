




let urlcaritafeliz = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tcPC10wzqWqUU083F1VP_LjheScA0AFQcg&usqp=CAU"
let urlcaritatriste = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpudJMG8rF6l9ScpHON00iYWWuDNglpdmQpA&usqp=CAU"
let imgHtml = document.querySelector("#imagencarita")


do{
    let pregunta1= Number(prompt("Ingrese un numero del 1 al 10"))
} while (Number.isNaN(pregunta1) || 10<pregunta1 || pregunta1<0)


do{
   let pregunta2 = Number(prompt("Ingrese otro numero difernte del 1 al 10"))   
    } while (Number.isNaN(pregunta2) || 10<pregunta2 || pregunta2<0)


 do{
 let pregunta3 = Number(prompt("Ingrese otro numero diferente del 1 al 10"))
     } while (Number.isNaN(pregunta3) || 10<pregunta3 || pregunta3<0)
     
     





let resultado = ((pregunta1+pregunta2+pregunta3)/3)
 if (resultado>6) {
 imgHtml.src = urlcaritafeliz
 }else{
     imgHtml.src = urlcaritatriste
 }
 