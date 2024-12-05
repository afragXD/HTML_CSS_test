(() => {
  const canvas = document.getElementById("crossCanvas");
  const ctx = canvas.getContext("2d");

  // Устанавливаем параметры
  ctx.strokeStyle = "black"; // Цвет линий
  ctx.lineWidth = 5; // Толщина линий

  // Рисуем первую диагональ
  ctx.beginPath();
  ctx.moveTo(20, 20); // Верхний левый угол
  ctx.lineTo(180, 180); // Нижний правый угол
  ctx.stroke(); // Отрисовка линии

  // Рисуем вторую диагональ
  ctx.beginPath();
  ctx.moveTo(180, 20); // Верхний правый угол
  ctx.lineTo(20, 180); // Нижний левый угол
  ctx.stroke(); // Отрисовка линии
})();
