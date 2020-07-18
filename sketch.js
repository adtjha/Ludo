var game = {},
  colors = ['yellow', 'blue', 'green', 'red'];

function setup() {
  createCanvas(500, 600);
  game = new board(LudoMap);
}

function draw() {
  background(255);
  game.render();
}

function mouseClicked(e) {
  var dice = game.dice.location,
    spacing = game.dice.spacing;
  if ((e.offsetX > dice.x && e.offsetX < dice.x + spacing) && (e.offsetY > dice.y && e.offsetY < dice.y + spacing)) {
    game.dice.onclick();
    if (colors.length > 0) {
      game.update('switch', {
        color: colors.pop()
      });
    } else {
      colors = ['yellow', 'blue', 'green', 'red'];
      game.update('switch', {
        color: colors.pop()
      });
    }
  }
  game.mouseClicked(e);
}
