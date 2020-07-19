var game = {},
  ludo = {},
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
    play();
  }
  game.mouseClicked(e);
}



function play() {
  if (game.squares[game.currentIndex].isOut.state) {
    game.squares[game.currentIndex].moveAllowed = true;
  } else if (game.dice.current === 6) {
    game.squares[game.currentIndex].moveAllowed = true;
  } else {
    switchPlayer();
  }
}

function move(choice, props) {
  //choice: type of movement.
  if (choice === 'birth') {
    game.squares[game.currentIndex].players.forEach(p => {
      if (p.icon === props.icon) {
        p.stepLocation += 1;
        p.update('select');
        console.log(p.stepLocation);
      }
    });
  } else if (choice === 'aging') {
    console.log('MOVE');
  }
}

function switchPlayer() {
  if (game.currentIndex === 3) {
    game.currentIndex = 0;
  } else {
    game.currentIndex++;
  }
  game.update('switch', {
    count: game.currentIndex
  });
}
