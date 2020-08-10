export default class Step {
    //store the steps template here.
    constructor(x, y, spacing, count) {
        //initialize each step here.
        this.x = x;
        this.y = y;
        this.count = count;
        this.location = createVector(x * spacing, y * spacing);
        //spacing constant.
        this.size = spacing;
        //color of the step.
        this.color = 255;
        this.id = {
            type: COMMON,
            safe: false
        };
      
      console.log("STEP IMPORTED");
    }
    getLocation() {
        return ({
            x: this.x,
            y: this.y
        });
    }
    mouseClicked(e) {
        if ((e.offsetX > this.location.x && e.offsetX < (this.location.x + this.size)) && (e.offsetY > this.location.y && e.offsetY < (this.location.y +
                this.size))) {
            //Step to which the current piece will move to
            var stepAhead = this.count + game.dice.current;
            //Check if any piece is already there, if yes, remove
            game.squares.forEach(s => {
                s.players.forEach(p => {
                    if (p.stepLocation === stepAhead && s.count != game.currentIndex) {
                        console.log('Found and Removing : ' + p.icon);
                        move({
                            icon: p.icon,
                            count: (-1) * p.stepLocation,
                        })
                    }
                });
            });
            game.squares[game.currentIndex].players.forEach(p => {
                //check if player is here,
                if (p.path.count[p.stepLocation] === this.count) {
                    //found piece, move it.
                    move({
                        icon: p.icon,
                        count: game.dice.current
                    })
                }
            })
        }
    }
    update(property, value) {
        //update the steps from here.
        this[property] = value;
    }
    render() {
        //render the steps from here.
        if (this.count < 48) {
            push();
            fill(this.color);
            stroke(1);
            rect(this.location.x, this.location.y, this.size, this.size);
            pop();
        } else {
            if (this.color === 'red') {
                //Red Triangle goes here.
                push();
                fill(this.color);
                stroke(1);
                triangle(this.location.x + (this.size * 1.5), this.location.y + (this.size * 0.5), this.location.x, this.location.y - this.size, this
                    .location.x, this.location.y + (this.size * 2));
                pop();
            } else if (this.color === 'green') {
                //green
                push();
                fill(this.color);
                stroke(1);
                triangle(this.location.x + (this.size * 0.5), this.location.y + (this.size * 1.5), this.location.x + (2 * this.size), this.location.y, this
                    .location.x - this.size, this.location.y);
                pop();
            } else if (this.color === 'yellow') {
                //yellow
                push();
                fill(this.color);
                stroke(1);
                triangle(this.location.x + (this.size * 0.5), this.location.y - (this.size * 0.5), this.location.x - this.size, this.location.y + this.size,
                    this.location.x + (this.size * 2), this.location.y + this.size);
                pop();
            } else if (this.color === 'blue') {
                //blue
                push();
                fill(this.color);
                stroke(1);
                triangle(this.location.x - (this.size * 0.5), this.location.y + (this.size * 0.5), this.location.x + this.size, this.location.y - this.size,
                    this.location.x + this.size, this.location.y + (this.size * 2));
                pop();
            }
        }
    }
}
