do{
    n=Number(prompt("ingrese el numero de fibonacci que desea caclular"))
}while(isNaN(n)||n<0||n>34)
function fb(n){
    if(n==1||n==0){
        return 1
    }else
    return fb(n-1)+fb(n-2);
}
alert(fb(n))


