class Square {
  //store the square template here.
  constructor(props){
    //initialize the squares from here.
    this.start = props.start;
    this.end = props.end;
    this.home = props.home;
    this.color = props.color;
    this.spacing = props.spacing;
  }
  
  update(){
    //update the squares from here.
    
  }
  
  render(){
    push();
        rectMode(CORNER);
        fill(125);
        rect(this.start.x * this.spacing, this.start.y * this.spacing, (this.end.x + 1) * this.spacing, (this.end.y + 1) * this.spacing);
        this.home.forEach(h => {
          fill(this.color);
          rect(h.x * this.spacing, h.y * this.spacing, this.spacing, this.spacing);
        });
    pop();
  }
}