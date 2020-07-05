const game = {};
function setup() {
  createCanvas(500, 500);
  game.board = new board(LudoBoard);
}

function draw() {
  background(51);
  game.board.render();
}
