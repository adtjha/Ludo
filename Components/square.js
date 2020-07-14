class Square {
  //store the square template here.
  constructor(props) {
    //initialize the squares from here.

    this.x = props.start.x;
    this.y = props.start.y;
    
    this.highlight = false;

    //color of the square.
    this.color = props.color;

    //data of players pieces.
    this.players = props.players;

    //spacing constant which is used to draw the spacing.
    this.spacing = props.spacing;

    //this.location = createVector(props.start, props.end);
    this.location = createVector(this.x * this.spacing, this.y * this.spacing);
    this.size = props.size * this.spacing;

    //PATH: starting step of the player
    this.stepStart = props.stepStart;

    //PATH: final step of player
    this.stepFinal = props.stepFinal;

    //PATH: pieces which have reached the final succesfuly.
    this.final = props.final;
    //this.path = { start: props.stepStart, final: props.stepFinal, end: props.final};
    console.log(this.location.x, this.location.y, this.size, this.size);
  }

  update() {
    //update the squares from here.

  }

  mouseClicked(e) {
    if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.size)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y + this.size))) {
      this.players.forEach(p => {
        var x = p.home.x * this.spacing,
          y = p.home.y * this.spacing;
        if ((e.offsetX > x && e.offsetX < (x + this.spacing)) && (e.offsetY > y && e.offsetY < (y + this.spacing))) {
          console.log(this.color, p);
        }
      });
    }
  }

  render() {
    
    push();
    //Darwing base Squares. using the CORNER method.
    rectMode(CORNER);
    fill(180);
    if(this.highlight){stroke(this.color);strokeWeight(20);}
    rect(this.location.x, this.location.y, this.size, this.size);
    pop();
    
    
    //Drawing Players if they are there.
    this.players.forEach(p => {
      push();
      //Drawing homes for players to be in.
      fill(this.color);
      rect(p.home.x * this.spacing, p.home.y * this.spacing, this.spacing, this.spacing);
      pop();
      
      push();
      //Drawing the piece if there is.
      fill(0);
      textSize(16);
      const offset = (0.15 * this.spacing);
      if (p.isThere) {
        text(p.icon, (p.location.x * this.spacing) - 1.5 * offset, (p.location.y * this.spacing) + offset);
      }
      pop();
    });

    pop();
  }
}
