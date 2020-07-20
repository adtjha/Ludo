class Square {
  //store the square template here.
  constructor(props) {
    //initialize the squares from here.
    this.x = props.start.x;
    this.y = props.start.y;

    this.highlight = false;
    
    this.moveAllowed = false;
    
    this.count = props.count;

    //spacing constant which is used to draw the spacing.
    this.spacing = props.spacing;

    //color of the square.
    this.color = props.color;

    //data of players pieces.
    //this.players = props.players;
    this.players = [];

    this.path = props.path;

    //this.location = createVector(props.start, props.end);
    this.location = createVector(this.x * this.spacing, this.y * this.spacing);
    this.size = props.size * this.spacing;

    //PATH: starting step of the player
    this.stepStart = props.stepStart;

    //PATH: final step of player
    this.stepFinal = [];

    //Generating Final Squares.
    props.stepFinal.forEach((f, i) => {
      var finalStep = new Step(f.x, f.y, spacing, (i+44));
      finalStep.update('color', this.color);
      finalStep.update('id', {
        type: FINAL,
        safe: true
      });
      this.stepFinal.push(finalStep);
    });


    //PATH: pieces which have reached the final succesfuly.
    var final = new Step(props.final.x, props.final.y, spacing, 48);
    final.update('color', this.color);
    this.final = final;

    props.players.forEach(piece => {
      var path = {
        count: this.path,
        location: (count)=>{
          if(count === -1){
            //home
            return piece.home;
          } else if (count > -1 && count < 44){
            //steps
            return game.steps.find(step => count === step.count).getLocation();
          } else if (count > 43 && count < 47){
            //final
            return this.stepFinal.find(step => count === step.count).getLocation();
          } else if (count === 48){
            //end
            return this.final.getLocation();
          }
        },
      }
      
      var newPiece = new Piece(piece.location.x, piece.location.y, piece.home, this.spacing, piece.icon, path);
      newPiece.color = this.color;
      this.players.push(newPiece);
    });
  
  }
  
  isOut(){
    var outside = [];
    this.players.forEach(player => {
      if(player.stepLocation === -1){
        console.log('INSIDE');
      } else if (player.stepLocation > 0 && player.stepLocation < 48){
        outside.push(player.icon);
      }
    });
    if(outside.length < this.players.length && outside.length > 0){
      return ({
        state: true,
        count: outside
      });
    } else {
      return ({
        state: false,
        count: outside
      });
    }
  }

  update(props) {
    //update the squares from here.
    this.players.forEach(player => {
      if (player.icon === props.icon) {
        console.log(props.dice);
      }
    })
  }

  mouseClicked(e) {
    if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.size)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y + this.size))) {
      this.players.forEach(p => {
        var x = p.location.x,
          y = p.location.y;
        if ((e.offsetX > x && e.offsetX < (x + this.spacing)) && (e.offsetY > y && e.offsetY < (y + this.spacing))) {
          if(this.moveAllowed){
            //check if movement is valid
            if(this.isOut().count.length < 1){
              //no piece is out
              move({icon: p.icon, count: 1});
            } else if (this.isOut().count.length > 1){
              //more than one is out
              move({icon: p.icon, count: game.dice.current});
            }
          } else {
            console.log('CLICKED BUT NO MOVEMENT ALLOWED');
            p.mouseClicked(e);
          }
        }
      });
    }
    this.stepFinal.forEach(step => {
      step.mouseClicked(e)
    });

    this.final.mouseClicked(e);
  }

  render() {
    var offset = 1;
    push();
    //Darwing base Squares. using the CORNER method.
    rectMode(CORNER);
    fill(this.color);
    //check if this square's turn.
    if (this.highlight) {
      offset = 10;
      stroke(this.color);
      strokeWeight(offset);
      strokeJoin(ROUND);
      fill(255);
    }
    rect(this.location.x + (offset / 4), this.location.y + (offset / 4), this.size - (offset / 2), this.size - (offset / 2));

    pop();

    this.stepFinal.forEach(step => step.render());

    this.final.render();

    //Drawing Players if they are there.
    this.players.forEach(p => p.render());

    pop();
  }
}
