class Piece {
  constructor(x, y, home, spacing, icon, path) {
    this.x = x;
    this.y = y;

    this.home = home;

    this.highlight = false;

    this.spacing = spacing;

    this.path = path;

    this.color = 0;

    this.location = createVector(this.x * spacing, this.y * spacing);

    this.icon = icon;

    this.selected = false;

    this.stepLocation = 0;

  }

  update(choice, props) {
    //location
    if (choice === 'move') {
      this.x = props.x;
      this.y = props.y;
      this.location = createVector(this.x * spacing, this.y * spacing);
      console.log(this.location.x + (this.spacing * 0.5), this.location.y + (this.spacing * 0.5));
      switchPlayer();
    } else if (choice === 'select') {
      this.selected = true;
      var location = this.path.location(this.path.count[this.stepLocation]);
      console.log(this.path.count, this.color);
      this.update('move', location);
    }
  }

  render() {

    push();
    //Drawing homes for players to be in.
    fill(255);
    if (this.highlight) {
      stroke(this.color);
      strokeWeight(5);
      strokeJoin(ROUND);
    }
    rect(this.home.x * this.spacing, this.home.y * this.spacing, this.spacing, this.spacing);
    pop();

    push();
    strokeWeight(3);
    fill(this.color);
    ellipse(this.location.x + (this.spacing * 0.5), this.location.y + (this.spacing * 0.5), 0.5 * this.spacing, 0.5 * this.spacing);
    pop();
  }
}
