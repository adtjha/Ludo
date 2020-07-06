let game = {};
function setup() {
  createCanvas(500, 500);
  game = new board(LudoBoard);
}

function draw() {
  background(51);
  game.render();
}
