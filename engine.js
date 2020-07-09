
var newGame = {};

const game = function (players) {
  this.steps = createSteps();
  this.players = createPlayers(players, this.steps);
}


//Step Object, to define how a piece should be.
const step = function (count, attri) {
  this.count = count;
  this.type = attri.type;
  this.safe = attri.safe;
  this.common = attri.common;
  this.contains = [];
}


//Player Object, to define how a piece should be.
const player = function (id, attri) {
  this.id = id;
  this.pieces = attri.pieces;
  this.path = attri.path;
}

//Piece Object, to define how a piece should be.
const piece = function (id, player) {
  this.id = id;
  this.player = player;
  this.step = (-1);

  this.move = function (diceNumber) {
    this.step += diceNumber;
  }

  this.back = function (currentStep) {
    this.step = (-1);
  }

  this.reached = false;
  this.check = function () {
    if (this.step === 47) {
      this.reached = true;
    }
  }
}


/*
Creating steps for each of the players, these will act as a tracking agent, tracking the players progress.
*/
function createSteps() {
  var steps = [];
  for (var i = 0; i < 48; i++) {
    var newStep, attri={};
    if (i === 0) {
      // for the first step, which is starting step.
      attri = {
        type: 'start',
        safe: false,
        common: true
      };
    } else if (i > 42 && i < 47) {
      // final steps, these steps are the final stages, of the piece's progress.
      attri = {
        type: 'final',
        safe: true,
        common: false
      };
    } else if (i === 47) {
      // end step, after reaching here, score of the player is increased by 1.
      attri = {
        type: 'end',
        safe: true,
        common: false
      };
    } else if(i > 0 && i < 43){
      //for all the steps in-between start and final
      if (i === 6 || i === 17 || i === 28 || i === 39) {
        // these are safe steps, meaning pieces of different players can stay here.
        attri = {
          type: 'medium',
          safe: true,
          common: true
        };
      } else if(i > 0 && i < 43){
        // these all the rest steps, that are present.
        attri = {
          type: 'medium',
          safe: false,
          common: true
        };
      }
    }
    newStep = new step(i, attri);
    steps.push(newStep);
  }
  return steps;
}

/*
Creating players for the current game, if the game has only two players, then they can proceed with the game.
*/
function createPlayers(n, steps) {
  var colors = ['red', 'green', 'yellow', 'blue'];
  var generateID = function (color, count) {
    return color + '_' + count;
  }
  var pieces = [],
    players = [],
    currentColor, playr, attri = {};
  for (var j = 0; j < n; j++) {
    currentColor = colors[j];
    for (var i = 0; i < 4; i++) {
      pieces.push(createPiece(generateID(currentColor, i), currentColor));
    }
    attri.pieces = pieces;
    pieces = [];
    attri.path = createPath(currentColor, steps);
    playr = new player(currentColor, attri);
    players.push(playr);
  }
  return players;
}

function createPath(id, steps) {
  var path = [],
    offset = 0;
  if (id === 'red') {
    path = insertPath(0, steps);
  } else if (id === 'green') {
    path = insertPath(11, steps);
  } else if (id === 'yellow') {
    path = insertPath(22, steps);
  } else if (id === 'blue') {
    path = insertPath(33, steps);
  }
  return path;
}

function insertPath(offset, originalArray) {
  var arr = [];
  for (var i = offset; i < originalArray.length; i++) {
    arr.push(originalArray[i].count);
  }
  //for Offset
  for (var i = 0; i < offset; i++) {
    arr.push(originalArray[i].count);
  }
  return arr;
}

// Creating a single piece but want atleast 4 pieces.
function createPiece(id, player) {
  return (new piece(id, player));
}

//-----------------------------------------------------------------------------------------------------------//

function setup(){
  newGame = new game(4);
  console.log(newGame);
}
