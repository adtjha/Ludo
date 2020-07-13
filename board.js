/*
  What to correct ?
    1. Squares
      + drawing technique - use of createVertex,
      + homeSquares - use of createVertex,
      + path - create and store path,
          + finalSquares - last 4 steps.
          + endSquare - end of a piece journey.
          
    2. Common_Steps
      + drawing technique - use of createVertex,
*/

class board {
  constructor(props) {
    //Initialize all the class variables here.
    this.squares = [];
    const final = [];
    
    this.dice = new dice();
    
    //Initializes homeSquares
    props.squares.forEach(e => {
      //spacing constant
      e.spacing = spacing;
      
      //creating new square from model SQUARE
      const square = new Square(e);
      
      //pushing the newly created homeSquares.
      this.squares.push(square);
      
      //pushing final data into final array.
      final.push({
        color: e.color,
        location: e.final
      });
    });

    //center 
    this.center = new Center(props.center.start, props.center.end, spacing, final);

    //Steps Array.
    this.steps = [];
    var count = 0;
    
    //Pushing a new step, and inserting into Array.
    props.steps.vertical.x.forEach(e => {
      for (var i = 0; i < 3; i++) {
        this.steps.push(new Step(e, props.steps.vertical.y[i], spacing, count++));
      }
    });
    
    //Pushing a new step, and inserting into Array.
    props.steps.horizontal.y.forEach(e => {
      for (var i = 0; i < 3; i++) {
        this.steps.push(new Step(props.steps.horizontal.x[i], e, spacing, count++));
      }
    });
    
    //Setting up start squares.
    this.setSteps(this.squares);
  }

  setSteps(squares) {
    squares.forEach(e => {
      this.steps.forEach(s => {
        if (s.x === e.stepStart.x && s.y === e.stepStart.y) {
          s.update('color', e.color);
        }
      });
      e.stepFinal.forEach(f => {
        this.steps.forEach(s => {
          if (s.x === f.x && s.y === f.y) {
            s.update('color', e.color);
            s.update('id', {count: s.id.count, direction: 'DOWN', type: "FINAL", safe: false});
          }
        })
      });
    })
  }

  update() {
    //update the player's position from here.

  }
  
  mouseClicked(e){
    this.squares.forEach(square => {
      square.mouseClicked(e)
    });
    
    this.steps.forEach(step => {
      step.mouseClicked(e)
    });
  }

  render() {
    this.squares.forEach(e => {
      e.render()
    });
    
    
    this.center.render();
    
    this.steps.forEach(e => {
      e.render()
    });
    this.dice.render();
  }
}
