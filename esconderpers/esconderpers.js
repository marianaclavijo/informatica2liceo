let canvas =document.querySelector("#myCanvas");
let ctx= canvas.getContext("2d")
class Personaje{
    constructor(x,y,angle,r){
        this.x=x
        this.y=y
        this.angle=angle
        this.r=r
    }
    dibujarse(){
ctx.translate(this.x,this.y);
ctx.rotate((this.angle*Math.PI)/180)
ctx.beginPath();
ctx.arc(0,0,this.r,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(0,0,this.r/2,0.25*Math.PI,0.75*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-15,-11,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(15,-11,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-15,-11,this.r/15,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(15,-11,this.r/15,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.strokeStyle="black"
ctx.rotate(-(this.angle*Math.PI)/180)
ctx.translate(-this.x,-this.y);


    }
}
let Jorge = new Personaje(200,100,0,50)
Jorge.dibujarse();


canvas.addEventListener("click",function(e){
    let XM=e.offsetX
    let YM=e.offsetY
    console.log(XM,YM)
    if ((XM-Jorge.x)**2+(YM-Jorge.y)**2<=(Jorge.r)**2) {
        ctx.fillStyle="white"
        ctx.beginPath()
        ctx.rect(Jorge.x-Jorge.r,Jorge.y-Jorge.r,2.1*Jorge.r,2.1*Jorge.r)
        ctx.fill()
        ctx.fillStyle="black"
    }
        

    }
)