class board {
  constructor(props) {
    //Initialize all the class variables here.
    this.squares = [];
    const final = [];
    props.squares.forEach(e => {
      e.spacing = spacing;
      const square = new Square(e);
      this.squares.push(square);
      final.push({
        color: e.color,
        location: e.final
      });
    });

    this.center = new Center(props.center.start, props.center.end, spacing, final);

    this.steps = [];
    props.steps.vertical.x.forEach(e => {
      for (var i = 0; i < 3; i++) {
        this.steps.push(new Step(e, props.steps.vertical.y[i], spacing));
      }
    });
    props.steps.horizontal.y.forEach(e => {
      for (var i = 0; i < 3; i++) {
        this.steps.push(new Step(props.steps.horizontal.x[i], e, spacing));
      }
    });

    this.setSteps(this.squares);
  }

  setSteps(squares) {
    squares.forEach(e => {
      this.steps.forEach(s => {
        if (s.x === e.stepStart.x && s.y === e.stepStart.y) {
          s.color = e.color;
        }
      });
      e.stepFinal.forEach(f => {
        this.steps.forEach(s => {
          if (s.x === f.x && s.y === f.y) {
            s.color = e.color;
          }
        })
      });
    })
  }

  update() {
    //update the player's position from here.

  }

  render() {
    this.squares.forEach(e => {
      e.render()
    });
    this.center.render();
    this.steps.forEach(e => {
      e.render()
    });
  }
}
