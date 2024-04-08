const circleProgress = document.getElementById("circleProgress");
const circleProgressCTX = circleProgress.getContext("2d");

circleProgress.height = 100;
circleProgress.width = 100;

const circleProgressData = [
  { progress: 0, color: "#d4ff00" },
  { progress: 0, color: "#3cff00" },
];

let percentage = 0;

function circleBarMov() {
  circleProgressCTX.beginPath();
  circleProgressCTX.arc(50, 50, 49, 0, 2 * Math.PI); // Рисуем окружность
  circleProgressCTX.fillStyle = "#ffb200"; // Цвет заливки
  circleProgressCTX.fill(); // Заполнение окружности

  circleProgressData.forEach((val) => {
    const angle = (val.progress * Math.PI * 2) / 100;
    circleProgressCTX.beginPath();
    circleProgressCTX.arc(50, 50, 45, Math.PI / 2 + 0, Math.PI / 2 + angle);
    circleProgressCTX.strokeStyle = val.color;
    circleProgressCTX.lineWidth = 10;
    circleProgressCTX.lineCap = "round";
    circleProgressCTX.stroke();

    circleProgressCTX.fillStyle = "#000"; // Цвет текста
    circleProgressCTX.font = "14px Arial"; // Шрифт и размер текста
    circleProgressCTX.textAlign = "center"; // Выравнивание текста по центру
    circleProgressCTX.textBaseline = "middle"; // Выравнивание текста по вертикали по центру
    const lines = [
      "JavaScript",
      `v ${circleProgressData[0].progress}, s ${circleProgressData[1].progress}`,
    ];
    const lineHeight = 20; // Высота строки

    lines.forEach((line, index) => {
      circleProgressCTX.fillText(line, 50, 40 + index * lineHeight);
    });
  });
  circleProgressCTX.beginPath();
  circleProgressCTX.arc(50, 50, 40, 0, Math.PI * 2);
  circleProgressCTX.strokeStyle = "#8d8d8d80";
  circleProgressCTX.lineWidth = 1;
  circleProgressCTX.lineCap = "round";
  circleProgressCTX.stroke();
}
setInterval(() => {
  circleProgressData[0].progress++;
  if (circleProgressData[0].progress === 100)
    circleProgressData[0].progress = 0;
}, 100);
setInterval(() => {
  circleProgressData[1].progress++;
  if (circleProgressData[1].progress === 100)
    circleProgressData[1].progress = 0;
}, 300);

setInterval(() => {
  circleProgressCTX.clearRect(
    0,
    0,
    circleProgress.width,
    circleProgress.height
  );
  circleBarMov();
}, 100);
