const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.95
// drawClock();
setInterval(drawClock, 1000);


function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }

function drawFace(ctx, radius) {
        
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#DB1A21";
    ctx.fill();
    
    
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.77, 0 , 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.shadowColor = "#00000000"
    for(let num = 1; num < 13; num++){
        let ang = num * Math.PI / 6;
        ctx.fillStyle = "#000";
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.65);
        ctx.rotate(-ang);
        ctx.fillText("●", 0, 0); //Muda o indicador do relógio aqui
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.65);
        ctx.rotate(-ang);
      }
}

function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.09);

    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60))
    drawHand(ctx, minute, radius*0.8, radius*0.07);

    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}


