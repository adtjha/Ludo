/*
Remaining : 
- Aging Movement - done
- Multiple Pieces in same step, 
- killing of one piece by another,
- Showing Safe Steps,
- Reset Dice on every Move.
*/

var game = {},
  i = 0,
  ludo = {},
  colors = ['yellow', 'blue', 'green', 'red'];

function setup() {
  createCanvas(600, 600);
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
    play();
  }
  game.mouseClicked(e);
}



function play() {
  if (game.squares[game.currentIndex].isOut().state) {
    //atleast one piece is out,
    if (game.squares[game.currentIndex].isOut().count.length === 1 && game.dice.current != 6) {
      //only one is out, so move it
      console.log('only one is out, so move it');
      game.squares[game.currentIndex].players.forEach(p => {
        if (p.icon === game.squares[game.currentIndex].isOut().count[0]) {
          move({
            icon: p.icon,
            count: game.dice.current
          });
        }
      })
    } else if (game.squares[game.currentIndex].isOut().count.length > 1) {
      //more than one is out, move according to choice.
      game.squares[game.currentIndex].moveAllowed = true;
    }
  } else {
    //none of the pieces are outside.
    if (game.dice.current === 6) {
      game.squares[game.currentIndex].moveAllowed = true;
    } else {
      switchPlayer();
    }
  }
}

function move(props) {
  game.squares[game.currentIndex].players.forEach(p => {
    if (p.icon === props.icon) {
      p.stepLocation += props.count;
      p.update('select');
    }
  });
}

function switchPlayer() {
  console.log('switching__' + ++i + '  Dice : ' + game.dice.current + '  Color : ' + game.squares[game.currentIndex].color);
  if (game.currentIndex <= 2) {
    game.currentIndex += 1;
  } else {
    game.currentIndex = 0;
  }
  game.update('switch', {
    count: game.currentIndex
  });
}
