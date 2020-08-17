
import { p5board } from '../ketchup.js'

export default class Dice {
  constructor() {
    //this.location = createVector(x, y, size);
    this.values = [4, 5, 6];
    this.location = {
      x: 235,
      y: 545
    };
    this.spacing = 500 / 13;
    this.changed = false;
    this.current = 'D';
    this.show = true;
    this.rollAllowed = true;
  }
  getRandom() {
    return p5board.random(this.values);
  }
  reset() {
    this.changed = false;
    this.current = 0;
    this.show = true;
  }
  onclick() {
    if (this.rollAllowed) {
      this.roll();
    } else {
      console.error('Rolling Dice Not Allowed');
    }
  }
  roll() {
    this.show = false;
    var randomArray = [],
      currentRandom;
    for (var i = 0; i < 1000; i++) {
      currentRandom = this.getRandom();
      this.current = currentRandom;
      randomArray.push(currentRandom);
    }
    this.current = p5board.random(randomArray);
    this.changed = true;
    setTimeout(() => {
      this.show = true;
    }, 1000);
    this.rollAllowed = false;
  }
  render() {
    p5board.push();
    if (this.show) {
      p5board.fill('white');
      p5board.rect(this.location.x, this.location.y, this.spacing, this.spacing);
      p5board.fill(0);
      p5board.textSize(32);
      p5board.text(this.current, this.location.x + 10, this.location.y + 30);
    }
    if (this.changed) {
      p5board.fill(0);
      p5board.textSize(256);
      p5board.text(this.current, 180, 300);
      setTimeout(() => {
        this.changed = false;
      }, 600);
    }
    p5board.pop();
  }
}
