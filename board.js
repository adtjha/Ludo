const boardSize = 500;
const spacing = boardSize / 13;
const colors = ['red','green','yellow','blue'];

const board = {
  squares: [{
    color: colors[0],
    start: {
      x: 0,
      y: 0
    },
    end: {
      x: 4,
      y: 4
    },
    home: [{
      x: 1,
      y: 1
    }, {
      x: 1,
      y: 3
    }, {
      x: 3,
      y: 1
    }, {
      x: 3,
      y: 3
    }]
  }, {
    color: colors[1],
    start: {
      x: 0,
      y: 8
    },
    end: {
      x: 4,
      y: 12
    },
    home: [{
      x: 1,
      y: 9
    }, {
      x: 1,
      y: 11
    }, {
      x: 3,
      y: 9
    }, {
      x: 3,
      y: 11
    }]
  }, {
    color: colors[2],
    start: {
      x: 8,
      y: 0
    },
    end: {
      x: 12,
      y: 4
    },
    home: [{
      x: 9,
      y: 1
    }, {
      x: 11,
      y: 1
    }, {
      x: 9,
      y: 3
    }, {
      x: 11,
      y: 3
    }]
  }, {
    color: colors[3],
    start: {
      x: 8,
      y: 8
    },
    end: {
      x: 12,
      y: 12
    },
    home: [{
      x: 9,
      y: 9
    }, {
      x: 9,
      y: 11
    }, {
      x: 11,
      y: 9
    }, {
      x: 11,
      y: 11
    }]
  }],
  center: {
    start: {
      x: 5,
      y: 5
    },
    end: {
      x: 7,
      y: 7
    }
  },
  steps: {
    squares: {
      vertical: {
        x: [0, 1, 2, 3, 4, 8, 9, 10, 11, 12],
        y: [5, 6, 7]
      },
      horizontal: {
        x: [5, 6, 7],
        y: [0, 1, 2, 3, 4, 8, 9, 10, 11, 12],
      }
    }
  },
  render: function (board) {
    board.squares.forEach(e => {
      push();
        rectMode(CORNER);
        fill(125);
        rect(e.start.x * spacing, e.start.y * spacing, (e.end.x + 1) * spacing, (e.end.y + 1) * spacing);
        e.home.forEach(h => {
          fill(e.color);
          rect(h.x * spacing, h.y * spacing, spacing, spacing);
        });
      pop();
    });

    push();
    var e = board.center;
    fill(255);
    for (var x = e.start.x; x <= e.end.x; x++) {
      for (var y = e.start.y; y <= e.end.y; y++) {
        rect(x * spacing, y * spacing, spacing, spacing);
      }
    }
    e = '';
    pop();

    board.steps.squares.vertical.x.forEach(e => {
      push();
      fill(155);
      var arr = board.steps.squares.vertical.y;
      for (var i = 0; i < 3; i++) {
        rect(e * spacing, arr[i] * spacing, spacing, spacing);
      }
      pop();
    });

    board.steps.squares.horizontal.y.forEach(e => {
      push();
      fill(155);
      var arr = board.steps.squares.horizontal.x;
      for (var i = 0; i < 3; i++) {
        rect(arr[i] * spacing, e * spacing, spacing, spacing);
      }
      pop();
    });
  }
}

class boards {
  constructor(){
    //Initialize all the class variables here.
    
  }
  
  update(){
    //update the player's position from here.
    
  }
  
  render(){
    //render the board from here.
    
  }
}






