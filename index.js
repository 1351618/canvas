const myCanvas = document.getElementById("myCanvas");
const context = myCanvas.getContext("2d");
myCanvas.height = 500;
myCanvas.width = 500;

// линия
context.beginPath();
context.moveTo(0, 500);
context.lineTo(500, 0);
context.lineWidth = 1;
context.stroke();

// линия
context.beginPath();
context.moveTo(100, 100);
context.lineTo(200, 200);
context.strokeStyle = "#00ff00";
context.lineWidth = 8; ////толщина
context.lineCap = "round"; ////скругление
context.stroke();

// треугольник
context.beginPath();
context.moveTo(250, 250);
context.lineTo(350, 250);
context.lineTo(300, 150);
context.lineTo(250, 250);
context.strokeStyle = "#ff0000";
context.lineWidth = 3;
context.stroke();

// квадрат
context.beginPath();
context.rect(100, 400, 50, 50); ////координаты
context.fillStyle = "#000000"; ////заливка
context.fill();
context.strokeStyle = "#ffff00";
context.stroke(); //// отрисовка

// круг
// console.log("половина круга", Math.PI, "полный круг", Math.PI * 2);
context.beginPath();
// context.arc(x, y, r, start, end);
context.arc(400, 100, 20, 0, Math.PI);
context.strokeStyle = "#556688";
context.stroke();

// круг
const percentage = 10;
const angle = (percentage * Math.PI * 2) / 100;

context.beginPath();
context.arc(400, 200, 20, Math.PI / 2 + 0, Math.PI / 2 + angle);
context.strokeStyle = "#886688";
context.stroke();
