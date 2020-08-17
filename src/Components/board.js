import { coordinates, spacing } from './coordinates.js'
import Dice from './dice.js'
import Piece from './piece.js'
import Square from './square.js'
import Step from './step.js'

export default class board {
    constructor(props) {
        //Initialize all the class variables here.
        this.squares = [];
        console.log("Board.js is here")
        const final = [];
        this.dice = new Dice();
        //Initializes homeSquares
        props.squares.forEach((e, index) => {
            //spacing constant
            e.spacing = spacing;
            e.count = index;
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
        //Steps Array.
        this.steps = [];
        var count = 0;
        //Pushing a new step, and inserting into Array
        props.steps.forEach(s => {
            var step = new Step(s.x, s.y, spacing, count++);
            var safe = props.safeSteps.filter(e => e === step.count);
            if (safe.length > 0) {
                step.id.safe = true;
            } else {
                step.id.safe = false;
            }
            this.steps.push(step);
        });
        //Current Player Count
        this.currentIndex = 0;
        //Setting up start squares.
        this.setSteps(this.squares);
    }
    setSteps(squares) {
        squares.forEach(e => {
            //Coloring Start Squares
            this.steps.forEach(s => {
                if (s.x === e.stepStart.x && s.y === e.stepStart.y) {
                    s.update('color', e.color);
                    s.id.type = 'START';
                }
            });
            if (e.count === this.currentIndex) {
                this.update('switch', {
                    count: this.currentIndex
                });
            }
        });
    }
    update(choice, props) {
        //update the player's position from here.
        if (choice === 'move') {
            this.squares.forEach(square => {
                if (square.color === props.color) {
                    square.update({
                        icon: props.icon,
                        location: props.location
                    });
                }
            })
        } else if (choice === 'switch') {
            this.squares.forEach(square => {
                square.highlight = false
            });
            this.squares.forEach(square => {
                if (square.count === props.count) {
                    square.highlight = true;
                }
            })
        }
    }
    mouseClicked(e) {
        this.squares.forEach(square => {
            square.mouseClicked(e)
        });
        this.steps.forEach(step => {
            step.mouseClicked(e)
        });
    }
    render() {
        this.steps.forEach(e => {
            e.render()
        });
        this.squares.forEach(e => {
            if (e.count != this.currentIndex) {
                e.render();
            }
        });
        this.squares[this.currentIndex].render();
        this.dice.render();
    }
}