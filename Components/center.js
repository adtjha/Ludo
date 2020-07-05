class center {
  constructor(props){
    //initialize center from here.
    this.spacing = props.spacing;
    this.start = props.start;
    this.end = props.end;
  }
  
  update(){
    //update the center state from here.
  }
  
  render(){
    const e = this;
    const spacing = this.spacing;
    
    //render center state from here.
    fill(255);
    for (var x = e.start.x; x <= e.end.x; x++) {
      for (var y = e.start.y; y <= e.end.y; y++) {
        rect(x * spacing, y * spacing, spacing, spacing);
      }
    }
  }
}