let game = {};
function setup() {
  createCanvas(500, 500);
  game = new board(LudoMap);
}

function draw() {
  background(51);
  if(game.aborted || game.paused){
    game.render();
  }
}
