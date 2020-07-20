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

  mouseClicked(e) {
    if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.spacing)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y + this.spacing))) {
      console.log('CLICKED');
    }
  }

  update(choice, props) {
    //location
    if (choice === 'move') {
      this.x = props.x;
      this.y = props.y;
      this.location = createVector(this.x * spacing, this.y * spacing);
      switchPlayer();
    } else if (choice === 'select') {
      var location = this.path.location(this.path.count[this.stepLocation]);
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
    rect(this.home.x * this.spacing, this.home.y * this.spacing, this.spacing, this.spacing, 10);
    pop();

    push();
    strokeWeight(3);
    fill(this.color);
    ellipse(this.location.x + (this.spacing * 0.5), this.location.y + (this.spacing * 0.5), 0.5 * this.spacing, 0.5 * this.spacing);
    pop();
  }
}
