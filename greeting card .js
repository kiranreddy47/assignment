const cards = [];
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function init() {
  const banner = document.getElementById("banner");
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;
  for (let i = 0; i < 200; i++) {
    cards.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      change: 0.15,
    });
  }
}
function update() {
  for (const card of cards) {
    card.x += 0.01;
    if (card.x > 1) {
      card.x = 0;
    }
    if (card.size < 0.1) {
      card.change = 0.1;
    } else if (card.size > 0.9) {
      card.change = -0.1;
    }
    card.size += card.change;
  }
}
function render() {
  const { width, height } = canvas;
  context.clearRect(0, 0, width, height); 
  for (const card of cards) {
    context.beginPath();
    context.arc(
      card.x * width,
      card.y * height,
      card.size * 3,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = "white";
    context.fill();
  }
}
