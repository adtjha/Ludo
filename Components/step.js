class Step {
  //store the steps template here.
  constructor(x, y, spacing, count) {
    //initialize each step here.
    
    this.x = x;
    this.y = y;
    
    this.location = createVector(x*spacing, y*spacing);
    
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
    
    
    //this.type = 'final' || 'common' || 'end';
    //this.safe = true || false;
  }

  mouseClicked(e){
    console.log(e.x, e.y);
    if((e.x > this.location.x && e.x < (this.location.x+this.size)) && (e.y > this.location.y && e.y < (this.location.y+this.size))){
      console.log(this.id, this.location.x, this.location.y, this.size);
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
