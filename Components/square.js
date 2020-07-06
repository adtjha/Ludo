class Square {
  //store the square template here.
  constructor(props) {
    //initialize the squares from here.
    this.start = props.start;
    this.end = props.end;
    this.home = props.home;
    this.color = props.color;
    this.players = props.players;
    this.spacing = props.spacing;
    this.stepStart = props.stepStart;
    this.stepFinal = props.stepFinal;
    this.final = props.final;
  }

  update() {
    //update the squares from here.

  }

  render() {
    push();
    rectMode(CORNER);
    fill(125);
    rect(this.start.x * this.spacing, this.start.y * this.spacing, (this.end.x + 1) * this.spacing, (this.end.y + 1) * this.spacing);
    this.home.forEach(h => {
      fill(this.color);
      rect(h.x * this.spacing, h.y * this.spacing, this.spacing, this.spacing);
    });
    this.players.forEach(p => {
      fill(0);
      textSize(16);
      const offset = (0.15 * this.spacing);
      if (p.isThere) {
        text(p.icon, (p.where.x * this.spacing) - 1.5*offset, (p.where.y * this.spacing) + offset);
      }
    });
    pop();
  }
}
