import { spacing } from './coordinates.js'
import { p5board } from '../ketchup.js'

export default class Piece {
  constructor(x, y, home, spacing, icon, path) {
    this.x = x;
    this.y = y;
    this.home = home;
    this.highlight = false;
    this.spacing = spacing;
    this.path = path;
    this.color = 0;
    this.location = {
      x: this.x * spacing,
      y: this.y * spacing
    };
    this.icon = icon;
    this.selected = false;
    this.stepLocation = 0;
  }
  mouseClicked(e, step) {
    //moving piece when clicked on.
    if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.spacing)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y +
        this.spacing))) {
      //Mouse Clicked.
      console.log('Mouse Clicked on Piece  : ' + this.icon + ',  Move :  ' + game.dice.current);
      if (this.stepLocation > 0) {
        p5board.move({
          icon: this.icon,
          count: game.dice.current
        });
      }
    }
  }
  update(choice, props) {
    //location
    if (choice === 'move') {
      console.log('updating the location of piece : ' + this.icon);
      this.x = props.x;
      this.y = props.y;
      this.location = p5board.createVector(this.x * spacing, this.y * spacing);
      p5board.switchPlayer();
    } else if (choice === 'select') {
      console.info('selected : ' + this.icon);
      var location = this.path.location(this.path.count[this.stepLocation]);
      if (this.path.count[this.stepLocation + 1]) {
        this.update('move', location);
      } else {
        console.error('Piece  : ' + this.icon + '  Reached');
        p5board.switchPlayer();
      }
    }
  }
  render = (r) => {
    p5board.push();
    //Drawing homes for players to be in.
    p5board.fill(255);
    if (this.highlight) {
      p5board.stroke(this.color);
      p5board.strokeWeight(5);
      p5board.strokeJoin(ROUND);
    }
    p5board.rect(this.home.x * this.spacing, this.home.y * this.spacing, this.spacing, this.spacing, 10);
    p5board.pop();
    p5board.push();
    p5board.strokeWeight(3);
    p5board.fill(this.color);
    p5board.ellipse(this.location.x + (this.spacing * 0.5), this.location.y + (this.spacing * 0.5), 0.5 * this.spacing, 0.5 * this.spacing);
    p5board.pop();
  }

}
