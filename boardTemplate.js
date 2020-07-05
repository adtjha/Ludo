const boardSize = 500;
const spacing = boardSize / 13;

const LudoBoard = {
  squares: [{
    color: 'red',
    start: {x: 0, y: 0},
    end: {x: 4, y: 4},
    home: [{x: 1, y: 1}, {x: 1, y: 3}, {x: 3, y: 1}, {x: 3, y: 3}]
  }, {
    color: 'green',
    start: {x: 0, y: 8},
    end: {x: 4, y: 12},
    home: [{x: 1, y: 9}, {x: 1, y: 11}, {x: 3, y: 9}, {x: 3, y: 11}]
  }, {
    color: 'yellow',
    start: {x: 8, y: 0},
    end: {x: 12, y: 4},
    home: [{x: 9, y: 1}, {x: 11, y: 1}, {x: 9, y: 3}, {x: 11, y: 3}]
  }, {
    color: 'blue',
    start: {x: 8, y: 8},
    end: {x: 12, y: 12},
    home: [{x: 9, y: 9}, {x: 9, y: 11}, {x: 11, y: 9}, {x: 11, y: 11}]
  }],
  center: {
    start: {x: 5, y: 5},
    end: {x: 7, y: 7}
  },
  steps: {
    squares: {
      vertical: {x: [0, 1, 2, 3, 4, 8, 9, 10, 11, 12], y: [5, 6, 7]},
      horizontal: {x: [5, 6, 7], y: [0, 1, 2, 3, 4, 8, 9, 10, 11, 12]}
    }
  }
}
