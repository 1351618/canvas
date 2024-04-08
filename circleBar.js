const circleBar = document.getElementById("circleBar");
const circleBarCTX = circleBar.getContext("2d");

circleBar.height = 100;
circleBar.width = 100;

let percentage = 0;
let tern = true;

function circleBarMov() {
  const angle = (percentage * Math.PI * 2) / 100;
  circleBarCTX.beginPath();
  circleBarCTX.arc(50, 50, 45, Math.PI / 2 + 0, Math.PI / 2 + angle);
  circleBarCTX.strokeStyle = "#ff00aa";
  circleBarCTX.lineWidth = 10;
  circleBarCTX.lineCap = "round";
  circleBarCTX.stroke();
}

setInterval(() => {
  circleBarCTX.clearRect(0, 0, circleBar.width, circleBar.height);
  if (percentage === 100) tern = !tern; // Исправлено
  if (percentage === 0) tern = !tern; // Исправлено
  tern ? percentage-- : percentage++;
  circleBarMov();
}, 50);
