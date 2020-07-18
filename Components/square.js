class Square {
  //store the square template here.
  constructor(props) {
    //initialize the squares from here.

    this.x = props.start.x;
    this.y = props.start.y;

    this.highlight = false;

    //spacing constant which is used to draw the spacing.
    this.spacing = props.spacing;

    //color of the square.
    this.color = props.color;

    //data of players pieces.
    //this.players = props.players;
    this.players = [];

    this.path = {
      home: -1,
      steps: [],
      final: [44, 45, 46, 47],
      end: 48
    };

    this.path.steps = props.path.slice(1, 44);





    //this.location = createVector(props.start, props.end);
    this.location = createVector(this.x * this.spacing, this.y * this.spacing);
    this.size = props.size * this.spacing;

    //PATH: starting step of the player
    this.stepStart = props.stepStart;

    //PATH: final step of player
    this.stepFinal = [];

    //Generating Final Squares.
    props.stepFinal.forEach((f, i) => {
      var finalStep = new Step(f.x, f.y, spacing, i);
      finalStep.update('color', this.color);
      finalStep.update('id', {
        count: (i + 44),
        direction: 'DOWN',
        type: "FINAL",
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
        home: {
          count: -1,
          location: piece.home
        },
        steps: {
          count: this.path.steps,
          location: (count) => {
            return game.steps.find(step => count === step.count).getLocation();
          }
        },
        final: {
          count: this.path.final,
          location: (count) => {
            return this.stepFinal.find(step => count === step.count).getLocation();
          }
        },
        end: {
          count: 48,
          location: this.final.getLocation()
        }
      }
      
      var newPiece = new Piece(piece.location.x, piece.location.y, piece.home, this.spacing, piece.icon, path);
      newPiece.color = this.color;
      this.players.push(newPiece);
    });
  
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
        var x = p.home.x * this.spacing,
          y = p.home.y * this.spacing;
        if ((e.offsetX > x && e.offsetX < (x + this.spacing)) && (e.offsetY > y && e.offsetY < (y + this.spacing))) {
          console.log(this.color, p);
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
