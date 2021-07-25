window.addEventListener('load',() => {
    const canvas = document.querySelector("#canvas");
    const ctx1 = canvas.getContext("2d");
    const ctx2 = canvas.getContext("2d");
    const ctx3 = canvas.getContext("2d");
    //Resizing 
   // canvas.hight= window.innerHeight;
   // canvas.width=window.innerWidth;
    
   // ctx.fillRect(50,50,200,200);
    ctx1.fillStyle='red';
    ctx1.fillRect(100,70,140,140);
    ctx2.fillStyle='blue';
    ctx2.fillRect(120,90,140,140);
    ctx3.fillStyle='yellow';
    ctx3.fillRect(140,110,140,140);
});

window.addEventListener('resize,');