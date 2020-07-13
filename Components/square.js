class Square {
  //store the square template here.
  constructor(props) {
    //initialize the squares from here.
    
    this.x = props.start.x;
    this.y = props.start.y;
    
    //location of each piece home inside the square.
    this.home = props.home;
    
    //color of the square.
    this.color = props.color;
    
    //data of players pieces.
    this.players = props.players;
    
    //spacing constant which is used to draw the spacing.
    this.spacing = props.spacing;
 
    //this.location = createVector(props.start, props.end);
    this.location = createVector(this.x*this.spacing, this.y*this.spacing);
    this.size = props.size*this.spacing;
    
    //PATH: starting step of the player
    this.stepStart = props.stepStart;
    
    //PATH: final step of player
    this.stepFinal = props.stepFinal;
    
    //PATH: pieces which have reached the final succesfuly.
    this.final = props.final;
    //this.path = { start: props.stepStart, final: props.stepFinal, end: props.final};
  }

  update() {
    //update the squares from here.
    
  }
  
  mouseClicked(e){
   if((e.x > this.location.x && e.x < (this.location.x+this.size)) && (e.y > this.location.y && e.y < (this.location.y+this.size))){
      console.log('YAY', this.color);
    }
  }

  render() {
    push();
    
    //Darwing base Squares. using the CORNER method.
    rectMode(CORNER);
    fill(125);
    rect(this.location.x, this.location.y, this.size, this.size);
    //Drawing homes for players to be in.
    this.home.forEach(h => {
      fill(this.color);
      rect(h.x * this.spacing, h.y * this.spacing, this.spacing, this.spacing);
    });
    
    //Drawing Players if they are there.
    this.players.forEach(p => {
      fill(0);
      textSize(16);
      const offset = (0.15 * this.spacing);
      if (p.isThere) {
        text(p.icon, (p.location.x * this.spacing) - 1.5*offset, (p.location.y * this.spacing) + offset);
      }
    });
    pop();
  }
}
