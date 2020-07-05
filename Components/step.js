class steps {
  //store the steps template here.
  constructor(props){
    //initialize each step here.
    this.x = props.x;
    this.y = props.y;
    this.spacing = props.spacing;
  }
  
  update(){
    //update the steps from here.
  }
  
  render(){
    //render the steps from here.
    push();
      fill(155);
      rect(this.x * this.spacing, this.y * this.spacing, this.spacing, this.spacing);
    pop();
  }
}
