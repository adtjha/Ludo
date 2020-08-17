import './Components/board.js'
import './Components/coordinates.js'
import './Components/dice.js'
import './Components/piece.js'
import './Components/square.js'
import './Components/step.js'




var game = {},
  i = 0,
  ludo = {},
  colors = ['yellow', 'blue', 'green', 'red'];

//function preload() {
//  soundFormats('mp3', 'ogg');
//  moveSound = loadSound('./Sounds/move');
//}


function setup() {
  createCanvas(600, 600);
  console.log("Sketch.js is here")
  game = new board(coordinates);
}

function draw() {
  p5.background(255);
  game.render();
}

function mouseClicked(e) {
  var dice = game.dice.location,
    spacing = game.dice.spacing;
  if ((e.offsetX > dice.x && e.offsetX < dice.x + spacing) && (e.offsetY > dice.y && e.offsetY < dice.y + spacing)) {
    game.dice.onclick();
    play();
//    moveSound.play();
  }
  game.mouseClicked(e);
}



function play() {  
  const currentSquare = game.squares[game.currentIndex];
  const currentDice = game.dice.current;
  
  if (currentSquare.isOut().state) {
    //atleast one piece is out,
    if (currentSquare.isOut().count.length === 1 && currentDice != 6) {
      //only one is out, so move it
      currentSquare.players.forEach(p => {
        if (p.icon === currentSquare.isOut().count[0]) {
          console.log('only one is out, so move it');
          move({
            icon: p.icon,
            count: currentDice
          });
        }
      })
    } else if (currentSquare.isOut().count.length > 1) {
      //more than one is out, move according to choice.
      currentSquare.moveAllowed = true;
    }
  } else {
    //none of the pieces are outside.
    if (currentDice === 6) {
      currentSquare.moveAllowed = true;
    } else {
      switchPlayer();
    }
  }
}

function move(props) {
  game.squares[game.currentIndex].players.forEach(p => {
    if (p.icon === props.icon) {
      console.info('Found Piece  : ' + p.icon);
      if (p.stepLocation + props.count + 1 < p.path.count.length) {
        console.info('MOVING : ' + props.count);
        p.stepLocation += props.count;
        p.update('select');
      }
    }
  });
}

function rollDice(state){
  game.dice.rollAllowed = state;
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
  rollDice(true);
}

/*
Remaining : 
- Aging Movement - done
- Multiple Pieces in same step, 
- killing of one piece by another,
- Showing Safe Steps,
- Reset Dice on every Move.
*/

