import board from './Components/board.js'
import { coordinates } from './Components/coordinates.js'
import Dice from './Components/dice.js'
import Piece from './Components/piece.js'
import Square from './Components/square.js'
import Step from './Components/step.js'

const sketch = (s) => {

  s.game = {},
    s.i = 0,
    s.ludo = {},
    s.colors = ['yellow', 'blue', 'green', 'red'];

  s.setup = () => {
    s.createCanvas(600, 600);
    s.game = new board(coordinates);
  }

  s.draw = () => {
    s.background(140);
    s.game.render();
  }

}


export const p5board = new p5(sketch);