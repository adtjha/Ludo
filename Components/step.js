class Step {
  //store the steps template here.
  constructor(x, y, spacing) {
    //initialize each step here.
    this.x = x;
    this.y = y;
    this.spacing = spacing;
    this.color = 155;
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
