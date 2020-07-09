class Step {
  //store the steps template here.
  constructor(x, y, spacing) {
    //initialize each step here.
    this.x = x;
    this.y = y;
    //this.location = createVector(x, y);
    this.spacing = spacing;
    this.color = 155;
    //this.type = 'final' || 'common' || 'end';
    //this.safe = true || false;
  }

  update() {
    //update the steps from here.
  }

  render() {
    //render the steps from here.
    push();
    fill(this.color);
    rect(this.x * this.spacing, this.y * this.spacing, this.spacing, this.spacing);
    pop();
  }
}
