const bar = document.getElementById("bar");
const barCTX = bar.getContext("2d");

bar.height = 30;
bar.width = 100;

const barData = [
  { barI: 10, color: "#00ff00", Y: 5 },
  { barI: 10, color: "#0000ff", Y: 15 },
  { barI: 10, color: "#ff0000", Y: 25 },
];

setInterval(() => {
  barData[0].barI++;
  if (barData[0].barI === 90) barData[0].barI = 10;
}, 10);
setInterval(() => {
  barData[1].barI++;
  if (barData[1].barI === 90) barData[1].barI = 10;
}, 50);
setInterval(() => {
  barData[2].barI++;
  if (barData[2].barI === 90) barData[2].barI = 10;
}, 100);

function bars() {
  barData.forEach((data, i) => {
    barCTX.beginPath();
    barCTX.moveTo(5, data.Y);
    barCTX.lineTo(data.barI, data.Y);
    barCTX.strokeStyle = data.color;
    barCTX.lineWidth = 10; ////толщина
    barCTX.lineCap = "round";
    barCTX.stroke();
  });
}
setInterval(() => {
  barCTX.clearRect(0, 0, bar.width, bar.height);
  bars();
}, 10);
