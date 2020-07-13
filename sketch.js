let game = {};
function setup() {
  createCanvas(500, 600);
  game = new board(LudoMap);
}

function draw() {
  background(51);
  game.render();
  
//  dice.render();
}

function mouseClicked(e){
  if((e.x > 300 && e.x < 340) && (e.y > 560 && e.y < 600)){
    game.dice.onclick();
  }
  game.mouseClicked(e);
}
