const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

var res = 80;
var iter = 0;

loop();
function loop() {
    setTimeout("loop()", 100 / 3);
    var pix = 0;
    var drawArray = [];

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(350, 150);
    ctx.lineTo(310, 300);
    ctx.lineTo(50, 350);
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(30, 270);
    ctx.lineTo(230, 150);
    ctx.lineTo(200, 390);
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(500, 220);
    ctx.lineTo(530, 550);
    ctx.lineTo(100, 490);
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(270, 300, 80 + (Math.sin(iter / 5).toFixed(2) * 10), 0, Math.PI * 2, true);
    ctx.fill();

    for (var i = 0; i < res; i++) {
        for (var j = 0; j < res; j++) {
            drawArray.push(ctx.getImageData(i * (canvas.width / res), j * (canvas.height / res), 1, 1).data);
        }
    }

    for (var i = 0; i < res; i++) {
        for (var j = 0; j < res; j++) {
            ctx.fillStyle = "rgba(" + drawArray[pix][0] + "," + drawArray[pix][1] + "," + drawArray[pix][2] + "," + drawArray[pix][3] + ")";
            ctx.fillRect(i * (canvas.width / res), j * (canvas.height / res), canvas.width / res + 1, canvas.height / res + 1);
            pix++;
        }
    }

    iter++;
}