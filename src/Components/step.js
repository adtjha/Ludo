import { COMMON, FINAL } from './coordinates.js'
import { p5board } from '../ketchup.js'

export default class Step {
  //store the steps template here.
  constructor(x, y, spacing, count) {
    //initialize each step here.
    this.x = x;
    this.y = y;
    this.count = count;
    this.location = {
      x: x * spacing,
      y: y * spacing
    };
    //spacing constant.
    this.size = spacing;
    //color of the step.
    this.color = 255;
    this.id = {
      type: COMMON,
      safe: false
    };
  }
  getLocation() {
    return ({
      x: this.x,
      y: this.y
    });
  }
  mouseClicked(e) {
    if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.size)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y +
        this.size))) {
      //Step to which the current piece will move to
      var stepAhead = this.count + p5board.game.dice.current;
      //Check if any piece is already there, if yes, remove
      p5board.game.squares.forEach(s => {
        s.players.forEach(p => {
          if (p.stepLocation === stepAhead && s.count != p5board.game.currentIndex) {
            console.log('Found and Removing : ' + p.icon);
            p5board.move({
              icon: p.icon,
              count: (-1) * p.stepLocation,
            })
          }
        });
      });
      p5board.game.squares[p5board.game.currentIndex].players.forEach(p => {
        //check if player is here,
        if (p.path.count[p.stepLocation] === this.count) {
          //found piece, move it.
          p5board.move({
            icon: p.icon,
            count: p5board.game.dice.current
          })
        }
      })
    }
  }
  update(property, value) {
    //update the steps from here.
    this[property] = value;
  }
  
  render = () => {
    //render the steps from here.
    if (this.count < 48) {
      p5board.push();
      p5board.fill(this.color);
      p5board.stroke(1);
      p5board.rect(this.location.x, this.location.y, this.size, this.size);
      p5board.pop();
    } else {
      if (this.color === 'red') {
        //Red Triangle goes here.
        p5board.push();
        p5board.fill(this.color);
        p5board.stroke(1);
        p5board.triangle(this.location.x + (this.size * 1.5), this.location.y + (this.size * 0.5), this.location.x, this.location.y - this.size, this
          .location.x, this.location.y + (this.size * 2));
        p5board.pop();
      } else if (this.color === 'green') {
        //green
        p5board.push();
        p5board.fill(this.color);
        p5board.stroke(1);
        p5board.triangle(this.location.x + (this.size * 0.5), this.location.y + (this.size * 1.5), this.location.x + (2 * this.size), this.location.y, this
          .location.x - this.size, this.location.y);
        p5board.pop();
      } else if (this.color === 'yellow') {
        //yellow
        p5board.push();
        p5board.fill(this.color);
        p5board.stroke(1);
        p5board.triangle(this.location.x + (this.size * 0.5), this.location.y - (this.size * 0.5), this.location.x - this.size, this.location.y + this.size,
          this.location.x + (this.size * 2), this.location.y + this.size);
        p5board.pop();
      } else if (this.color === 'blue') {
        //blue
        p5board.push();
        p5board.fill(this.color);
        p5board.stroke(1);
        p5board.triangle(this.location.x - (this.size * 0.5), this.location.y + (this.size * 0.5), this.location.x + this.size, this.location.y - this.size,
          this.location.x + this.size, this.location.y + (this.size * 2));
        p5board.pop();
      }
    }
  }
}
