import board from './Components/board.js'
import {
  coordinates
} from './Components/coordinates.js'
import Dice from './Components/dice.js'
import Piece from './Components/piece.js'
import Square from './Components/square.js'
import Step from './Components/step.js'

const sketch = (s) => {

  s.game = {},
    s.i = 0,
    s.ludo = {},
    s.colors = ['yellow', 'blue', 'green', 'red'];

  s.setup = async () => {
    s.createCanvas(500, 600);
    s.game = new board(coordinates);
    let permission = await Notification.requestPermission();
  }

  s.draw = () => {
    s.background(255);
    s.game.render();
  }

  s.mouseClicked = (e) => {
    var dice = s.game.dice.location,
      spacing = s.game.dice.spacing;
    if ((e.offsetX > dice.x && e.offsetX < dice.x + spacing) && (e.offsetY > dice.y && e.offsetY < dice.y + spacing)) {
      s.game.dice.onclick();
      s.play();
      //      s.moveSound.play();
    }
    s.game.mouseClicked(e);
  }

  s.play = () => {
    const currentSquare = s.game.squares[s.game.currentIndex];
    const currentDice = s.game.dice.current;

    if (currentSquare.isOut().state) {
      //atleast one piece is out,
      if (currentSquare.isOut().count.length === 1 && currentDice != 6) {
        //only one is out, so move it
        currentSquare.players.forEach(p => {
          if (p.icon === currentSquare.isOut().count[0]) {
            console.log('only one is out, so move it');
            s.move({
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
        s.switchPlayer();
      }
    }
  }

  s.move = (props) => {
    s.game.squares[s.game.currentIndex].players.forEach(p => {
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

  s.rollDice = (state) => {
    s.game.dice.rollAllowed = state;
  }

  s.switchPlayer = () => {

    console.log('switching__' + ++s.i + '  Dice : ' + s.game.dice.current + '  Color : ' + s.game.squares[s.game.currentIndex].color);

    if (s.game.currentIndex <= 2) {
      s.game.currentIndex += 1;
    } else {
      s.game.currentIndex = 0;
    }
    s.game.update('switch', {
      count: s.game.currentIndex
    });
    s.rollDice(true);
  }

}


export const p5board = new p5(sketch);
