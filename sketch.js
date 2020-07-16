let game = {};
function setup() {
  createCanvas(500, 600);
  game = new board(LudoMap);
}

function draw() {
  background(255);
  game.render();
}

function mouseClicked(e){
  var dice = game.dice.location, spacing = game.dice.spacing;
  if((e.offsetX > dice.x && e.offsetX < dice.x+spacing) && (e.offsetY > dice.y && e.offsetY < dice.y+spacing)){
    game.dice.onclick();
  }
  game.mouseClicked(e);
}
