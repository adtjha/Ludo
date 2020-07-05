class squares {
  //store the square template here.
  constructor(props){
    //initialize the squares from here.
    super(props);
    this.start = props.start;
    this.end = props.end;
    this.spacing = props.spacing;
    this.color = props.color;
  }
  
  update(){
    //update the squares from here.
    
  }
  
  render(){
    const e = this;
    const spacing = this.spacing;
    //render the squares from here.
    push();
        rectMode(CORNER);
        fill(125);
        rect(e.start.x * spacing, e.start.y * spacing, (e.end.x + 1) * spacing, (e.end.y + 1) * spacing);
        e.home.forEach(h => {
          fill(e.color);
          rect(h.x * spacing, h.y * spacing, spacing, spacing);
        });
    pop();
  }
}