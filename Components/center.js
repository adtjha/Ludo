class Center {
  constructor(start, end, spacing, final) {
    //initialize center from here.
    this.start = start;
    this.end = end;
    this.final = final;
    this.spacing = spacing;
    
    //this.location = createVector(x,y);
    //this.spacing = spacing;
    //this.reached = [];
  }


  update() {
    //update the center state from here.
  }

  render() {
    //render center state from here.
    fill(255);
    for (var x = this.start.x; x <= this.end.x; x++) {
      for (var y = this.start.y; y <= this.end.y; y++) {
        rect(x * this.spacing, y * this.spacing, this.spacing, this.spacing);
      }
    }
    this.final.forEach(e => {
      fill(e.color);
      rect(e.location.x * this.spacing, e.location.y * this.spacing, this.spacing, this.spacing);
    });
  }
}
