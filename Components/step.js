class Step {
  //store the steps template here.
  constructor(x, y, spacing, count) {
    //initialize each step here.

    this.x = x;
    this.y = y;

    this.count = count;

    this.location = createVector(x * spacing, y * spacing);

    //spacing constant.
    this.size = spacing;

    //color of the step.
    this.color = 155;

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
    if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.size)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y + this.size))) {
      console.log(this.count, this.x, this.y);
      console.log('');
    }
  }

  update(property, value) {
    //update the steps from here.
    this[property] = value;
  }

  render() {
    //render the steps from here.
    push();
    fill(this.color);
    rect(this.location.x, this.location.y, this.size, this.size);
    pop();
  }
}
