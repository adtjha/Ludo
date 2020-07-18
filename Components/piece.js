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

    this.stepLocation = -1;

  }

  update(location) {
    //location
    this.x = location.x;
    this.y = location.y;
    this.location = createVector(this.x * spacing, this.y * spacing);
    console.log(this.location.x + (this.spacing * 0.5), this.location.y + (this.spacing * 0.5));
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

