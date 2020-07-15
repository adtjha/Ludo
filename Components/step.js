class Step {
  //store the steps template here.
  constructor(x, y, spacing, count) {
    //initialize each step here.

    this.x = x;
    this.y = y;

    this.location = createVector(x * spacing, y * spacing);

    //spacing constant.
    this.size = spacing;

    //color of the step.
    this.color = 155;

    this.id = {
      count: count,
      direction: 'UP',
      type: 'COMMON',
      safe: false
    };
    
    this.count = count;
    
    this.direction = 'UP';
    
    this.type = 'COMMON';
    
    this.safe = false;


    //this.type = 'final' || 'common' || 'end';
    //this.safe = true || false;
  }

  mouseClicked(e) {
    if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.size)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y + this.size))) {
      console.log(this.x, this.y);
      return ({
        x: this.x,
        y: this.y
      });
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
