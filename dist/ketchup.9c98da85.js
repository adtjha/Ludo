// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Components/coordinates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coordinates = exports.END = exports.FINAL = exports.START = exports.COMMON = exports.spacing = exports.boardSize = void 0;
var boardSize = 500;
exports.boardSize = boardSize;
var spacing = boardSize / 13;
exports.spacing = spacing;
var COMMON = 'COMMON';
exports.COMMON = COMMON;
var START = 'START';
exports.START = START;
var FINAL = 'FINAL';
exports.FINAL = FINAL;
var END = 'END';
exports.END = END;
var coordinates = {
  squares: [{
    color: 'red',
    start: {
      x: 0,
      y: 0
    },
    size: 5,
    path: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    players: [{
      isThere: true,
      icon: 'R1',
      location: {
        x: 1,
        y: 1
      },
      home: {
        x: 1,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'R2',
      location: {
        x: 1,
        y: 3
      },
      home: {
        x: 1,
        y: 3
      }
    }, {
      isThere: true,
      icon: 'R3',
      location: {
        x: 3,
        y: 1
      },
      home: {
        x: 3,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'R4',
      location: {
        x: 3,
        y: 3
      },
      home: {
        x: 3,
        y: 3
      }
    }],
    stepStart: {
      x: 1,
      y: 5
    },
    stepFinal: [{
      x: 1,
      y: 6
    }, {
      x: 2,
      y: 6
    }, {
      x: 3,
      y: 6
    }, {
      x: 4,
      y: 6
    }],
    final: {
      x: 5,
      y: 6
    }
  }, {
    color: 'yellow',
    start: {
      x: 0,
      y: 8
    },
    size: 5,
    path: [-1, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 44, 45, 46, 47, 48],
    players: [{
      isThere: true,
      icon: 'Y1',
      location: {
        x: 1,
        y: 9
      },
      home: {
        x: 1,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'Y2',
      location: {
        x: 1,
        y: 11
      },
      home: {
        x: 1,
        y: 11
      }
    }, {
      isThere: true,
      icon: 'Y3',
      location: {
        x: 3,
        y: 9
      },
      home: {
        x: 3,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'Y4',
      location: {
        x: 3,
        y: 11
      },
      home: {
        x: 3,
        y: 11
      }
    }],
    stepStart: {
      x: 5,
      y: 11
    },
    stepFinal: [{
      x: 6,
      y: 11
    }, {
      x: 6,
      y: 10
    }, {
      x: 6,
      y: 9
    }, {
      x: 6,
      y: 8
    }],
    final: {
      x: 6,
      y: 7
    }
  }, {
    color: 'green',
    start: {
      x: 8,
      y: 0
    },
    size: 5,
    path: [-1, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 44, 45, 46, 47, 48],
    players: [{
      isThere: true,
      icon: 'G1',
      location: {
        x: 9,
        y: 1
      },
      home: {
        x: 9,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'G2',
      location: {
        x: 11,
        y: 1
      },
      home: {
        x: 11,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'G3',
      location: {
        x: 9,
        y: 3
      },
      home: {
        x: 9,
        y: 3
      }
    }, {
      isThere: true,
      icon: 'G4',
      location: {
        x: 11,
        y: 3
      },
      home: {
        x: 11,
        y: 3
      }
    }],
    stepStart: {
      x: 7,
      y: 1
    },
    stepFinal: [{
      x: 6,
      y: 1
    }, {
      x: 6,
      y: 2
    }, {
      x: 6,
      y: 3
    }, {
      x: 6,
      y: 4
    }],
    final: {
      x: 6,
      y: 5
    }
  }, {
    color: 'blue',
    start: {
      x: 8,
      y: 8
    },
    size: 5,
    path: [-1, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 44, 45, 46, 47, 48],
    players: [{
      isThere: true,
      icon: 'B1',
      location: {
        x: 9,
        y: 9
      },
      home: {
        x: 9,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'B2',
      location: {
        x: 9,
        y: 11
      },
      home: {
        x: 9,
        y: 11
      }
    }, {
      isThere: true,
      icon: 'B3',
      location: {
        x: 11,
        y: 9
      },
      home: {
        x: 11,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'B4',
      location: {
        x: 11,
        y: 11
      },
      home: {
        x: 11,
        y: 11
      }
    }],
    stepStart: {
      x: 11,
      y: 7
    },
    stepFinal: [{
      x: 11,
      y: 6
    }, {
      x: 10,
      y: 6
    }, {
      x: 9,
      y: 6
    }, {
      x: 8,
      y: 6
    }],
    final: {
      x: 7,
      y: 6
    }
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
  steps: [{
    x: 0,
    y: 5
  }, {
    x: 1,
    y: 5
  }, {
    x: 2,
    y: 5
  }, {
    x: 3,
    y: 5
  }, {
    x: 4,
    y: 5
  }, {
    x: 5,
    y: 4
  }, {
    x: 5,
    y: 3
  }, {
    x: 5,
    y: 2
  }, {
    x: 5,
    y: 1
  }, {
    x: 5,
    y: 0
  }, {
    x: 6,
    y: 0
  }, {
    x: 7,
    y: 0
  }, {
    x: 7,
    y: 1
  }, {
    x: 7,
    y: 2
  }, {
    x: 7,
    y: 3
  }, {
    x: 7,
    y: 4
  }, {
    x: 8,
    y: 5
  }, {
    x: 9,
    y: 5
  }, {
    x: 10,
    y: 5
  }, {
    x: 11,
    y: 5
  }, {
    x: 12,
    y: 5
  }, {
    x: 12,
    y: 6
  }, {
    x: 12,
    y: 7
  }, {
    x: 11,
    y: 7
  }, {
    x: 10,
    y: 7
  }, {
    x: 9,
    y: 7
  }, {
    x: 8,
    y: 7
  }, {
    x: 7,
    y: 8
  }, {
    x: 7,
    y: 9
  }, {
    x: 7,
    y: 10
  }, {
    x: 7,
    y: 11
  }, {
    x: 7,
    y: 12
  }, {
    x: 6,
    y: 12
  }, {
    x: 5,
    y: 12
  }, {
    x: 5,
    y: 11
  }, {
    x: 5,
    y: 10
  }, {
    x: 5,
    y: 9
  }, {
    x: 5,
    y: 8
  }, {
    x: 4,
    y: 7
  }, {
    x: 3,
    y: 7
  }, {
    x: 2,
    y: 7
  }, {
    x: 1,
    y: 7
  }, {
    x: 0,
    y: 7
  }, {
    x: 0,
    y: 6
  }],
  safeSteps: [1, 7, 12, 18, 23, 29, 34, 40]
};
exports.coordinates = coordinates;
},{}],"Components/dice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ketchup = require("../ketchup.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dice = /*#__PURE__*/function () {
  function Dice() {
    _classCallCheck(this, Dice);

    //this.location = createVector(x, y, size);
    this.values = [4, 5, 6];
    this.location = {
      x: 235,
      y: 545
    };
    this.spacing = 500 / 13;
    this.changed = false;
    this.current = 'D';
    this.show = true;
    this.rollAllowed = true;
  }

  _createClass(Dice, [{
    key: "getRandom",
    value: function getRandom() {
      return _ketchup.p5board.random(this.values);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.changed = false;
      this.current = 0;
      this.show = true;
    }
  }, {
    key: "onclick",
    value: function onclick() {
      if (this.rollAllowed) {
        this.roll();
      } else {
        console.error('Rolling Dice Not Allowed');
      }
    }
  }, {
    key: "roll",
    value: function roll() {
      var _this = this;

      this.show = false;
      var randomArray = [],
          currentRandom;

      for (var i = 0; i < 1000; i++) {
        currentRandom = this.getRandom();
        this.current = currentRandom;
        randomArray.push(currentRandom);
      }

      this.current = _ketchup.p5board.random(randomArray);
      this.changed = true;
      setTimeout(function () {
        _this.show = true;
      }, 1000);
      this.rollAllowed = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      _ketchup.p5board.push();

      if (this.show) {
        _ketchup.p5board.fill('white');

        _ketchup.p5board.rect(this.location.x, this.location.y, this.spacing, this.spacing);

        _ketchup.p5board.fill(0);

        _ketchup.p5board.textSize(32);

        _ketchup.p5board.text(this.current, this.location.x + 10, this.location.y + 30);
      }

      if (this.changed) {
        _ketchup.p5board.fill(0);

        _ketchup.p5board.textSize(256);

        _ketchup.p5board.text(this.current, 180, 300);

        setTimeout(function () {
          _this2.changed = false;
        }, 600);
      }

      _ketchup.p5board.pop();
    }
  }]);

  return Dice;
}();

exports.default = Dice;
},{"../ketchup.js":"ketchup.js"}],"Components/piece.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _coordinates = require("./coordinates.js");

var _ketchup = require("../ketchup.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Piece = /*#__PURE__*/function () {
  function Piece(x, y, home, spacing, icon, path) {
    var _this = this;

    _classCallCheck(this, Piece);

    _defineProperty(this, "render", function (r) {
      _ketchup.p5board.push(); //Drawing homes for players to be in.


      _ketchup.p5board.fill(255);

      if (_this.highlight) {
        _ketchup.p5board.stroke(_this.color);

        _ketchup.p5board.strokeWeight(5);

        _ketchup.p5board.strokeJoin(ROUND);
      }

      _ketchup.p5board.rect(_this.home.x * _this.spacing, _this.home.y * _this.spacing, _this.spacing, _this.spacing, 10);

      _ketchup.p5board.pop();

      _ketchup.p5board.push();

      _ketchup.p5board.strokeWeight(3);

      _ketchup.p5board.fill(_this.color);

      _ketchup.p5board.ellipse(_this.location.x + _this.spacing * 0.5, _this.location.y + _this.spacing * 0.5, 0.5 * _this.spacing, 0.5 * _this.spacing);

      _ketchup.p5board.pop();
    });

    this.x = x;
    this.y = y;
    this.home = home;
    this.highlight = false;
    this.spacing = spacing;
    this.path = path;
    this.color = 0;
    this.location = {
      x: this.x * spacing,
      y: this.y * spacing
    };
    this.icon = icon;
    this.selected = false;
    this.stepLocation = 0;
  }

  _createClass(Piece, [{
    key: "mouseClicked",
    value: function mouseClicked(e, step) {
      //moving piece when clicked on.
      if (e.offsetX > this.location.x && e.offsetX < this.location.x + this.spacing && e.offsetY > this.location.y && e.offsetY < this.location.y + this.spacing) {
        //Mouse Clicked.
        console.log('Mouse Clicked on Piece  : ' + this.icon + ',  Move :  ' + game.dice.current);

        if (this.stepLocation > 0) {
          _ketchup.p5board.move({
            icon: this.icon,
            count: game.dice.current
          });
        }
      }
    }
  }, {
    key: "update",
    value: function update(choice, props) {
      //location
      if (choice === 'move') {
        console.log('updating the location of piece : ' + this.icon);
        this.x = props.x;
        this.y = props.y;
        this.location = _ketchup.p5board.createVector(this.x * _coordinates.spacing, this.y * _coordinates.spacing);

        _ketchup.p5board.switchPlayer();
      } else if (choice === 'select') {
        console.info('selected : ' + this.icon);
        var location = this.path.location(this.path.count[this.stepLocation]);

        if (this.path.count[this.stepLocation + 1]) {
          this.update('move', location);
        } else {
          console.error('Piece  : ' + this.icon + '  Reached');

          _ketchup.p5board.switchPlayer();
        }
      }
    }
  }]);

  return Piece;
}();

exports.default = Piece;
},{"./coordinates.js":"Components/coordinates.js","../ketchup.js":"ketchup.js"}],"Components/step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _coordinates = require("./coordinates.js");

var _ketchup = require("../ketchup.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Step = /*#__PURE__*/function () {
  //store the steps template here.
  function Step(x, y, spacing, count) {
    var _this = this;

    _classCallCheck(this, Step);

    _defineProperty(this, "render", function () {
      //render the steps from here.
      if (_this.count < 48) {
        _ketchup.p5board.push();

        _ketchup.p5board.fill(_this.color);

        _ketchup.p5board.stroke(1);

        _ketchup.p5board.rect(_this.location.x, _this.location.y, _this.size, _this.size);

        _ketchup.p5board.pop();
      } else {
        if (_this.color === 'red') {
          //Red Triangle goes here.
          _ketchup.p5board.push();

          _ketchup.p5board.fill(_this.color);

          _ketchup.p5board.stroke(1);

          _ketchup.p5board.triangle(_this.location.x + _this.size * 1.5, _this.location.y + _this.size * 0.5, _this.location.x, _this.location.y - _this.size, _this.location.x, _this.location.y + _this.size * 2);

          _ketchup.p5board.pop();
        } else if (_this.color === 'green') {
          //green
          _ketchup.p5board.push();

          _ketchup.p5board.fill(_this.color);

          _ketchup.p5board.stroke(1);

          _ketchup.p5board.triangle(_this.location.x + _this.size * 0.5, _this.location.y + _this.size * 1.5, _this.location.x + 2 * _this.size, _this.location.y, _this.location.x - _this.size, _this.location.y);

          _ketchup.p5board.pop();
        } else if (_this.color === 'yellow') {
          //yellow
          _ketchup.p5board.push();

          _ketchup.p5board.fill(_this.color);

          _ketchup.p5board.stroke(1);

          _ketchup.p5board.triangle(_this.location.x + _this.size * 0.5, _this.location.y - _this.size * 0.5, _this.location.x - _this.size, _this.location.y + _this.size, _this.location.x + _this.size * 2, _this.location.y + _this.size);

          _ketchup.p5board.pop();
        } else if (_this.color === 'blue') {
          //blue
          _ketchup.p5board.push();

          _ketchup.p5board.fill(_this.color);

          _ketchup.p5board.stroke(1);

          _ketchup.p5board.triangle(_this.location.x - _this.size * 0.5, _this.location.y + _this.size * 0.5, _this.location.x + _this.size, _this.location.y - _this.size, _this.location.x + _this.size, _this.location.y + _this.size * 2);

          _ketchup.p5board.pop();
        }
      }
    });

    //initialize each step here.
    this.x = x;
    this.y = y;
    this.count = count;
    this.location = {
      x: x * spacing,
      y: y * spacing
    }; //spacing constant.

    this.size = spacing; //color of the step.

    this.color = 255;
    this.id = {
      type: _coordinates.COMMON,
      safe: false
    };
  }

  _createClass(Step, [{
    key: "getLocation",
    value: function getLocation() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "mouseClicked",
    value: function mouseClicked(e) {
      var _this2 = this;

      if (e.offsetX > this.location.x && e.offsetX < this.location.x + this.size && e.offsetY > this.location.y && e.offsetY < this.location.y + this.size) {
        //Step to which the current piece will move to
        var stepAhead = this.count + _ketchup.p5board.game.dice.current; //Check if any piece is already there, if yes, remove

        _ketchup.p5board.game.squares.forEach(function (s) {
          s.players.forEach(function (p) {
            if (p.stepLocation === stepAhead && s.count != _ketchup.p5board.game.currentIndex) {
              console.log('Found and Removing : ' + p.icon);

              _ketchup.p5board.move({
                icon: p.icon,
                count: -1 * p.stepLocation
              });
            }
          });
        });

        _ketchup.p5board.game.squares[_ketchup.p5board.game.currentIndex].players.forEach(function (p) {
          //check if player is here,
          if (p.path.count[p.stepLocation] === _this2.count) {
            //found piece, move it.
            _ketchup.p5board.move({
              icon: p.icon,
              count: _ketchup.p5board.game.dice.current
            });
          }
        });
      }
    }
  }, {
    key: "update",
    value: function update(property, value) {
      //update the steps from here.
      this[property] = value;
    }
  }]);

  return Step;
}();

exports.default = Step;
},{"./coordinates.js":"Components/coordinates.js","../ketchup.js":"ketchup.js"}],"Components/square.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _coordinates = require("./coordinates.js");

var _piece = _interopRequireDefault(require("./piece.js"));

var _step = _interopRequireDefault(require("./step.js"));

var _ketchup = require("../ketchup.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Square = /*#__PURE__*/function () {
  //store the square template here.
  function Square(props) {
    var _this = this;

    _classCallCheck(this, Square);

    _defineProperty(this, "render", function () {
      var offset = 1;

      _ketchup.p5board.push(); //Darwing base Squares. using the CORNER method.


      _ketchup.p5board.rectMode(_coordinates.CORNER);

      _ketchup.p5board.fill(_this.color); //check if this square's turn.


      if (_this.highlight) {
        offset = 10;

        _ketchup.p5board.stroke(_this.color);

        _ketchup.p5board.strokeWeight(offset);

        _ketchup.p5board.strokeJoin(_coordinates.ROUND);

        _ketchup.p5board.fill(255);
      }

      _ketchup.p5board.rect(_this.location.x + offset / 4, _this.location.y + offset / 4, _this.size - offset / 2, _this.size - offset / 2);

      _ketchup.p5board.pop();

      _ketchup.p5board.push();

      _this.stepFinal.forEach(function (step) {
        return step.render();
      });

      _this.final.render(); //Drawing Players if they are there.


      _this.players.forEach(function (p) {
        return p.render();
      });

      _ketchup.p5board.pop();
    });

    //initialize the squares from here.
    this.x = props.start.x;
    this.y = props.start.y;
    this.highlight = false;
    this.moveAllowed = false;
    this.count = props.count; //spacing constant which is used to draw the spacing.

    this.spacing = props.spacing; //color of the square.

    this.color = props.color; //data of players pieces.
    //this.players = props.players;

    this.players = [];
    this.path = props.path; //this.location = createVector(props.start, props.end);

    this.location = {
      x: this.x * this.spacing,
      y: this.y * this.spacing
    };
    this.size = props.size * this.spacing; //PATH: starting step of the player

    this.stepStart = props.stepStart; //PATH: final step of player

    this.stepFinal = []; //Generating Final Squares.

    props.stepFinal.forEach(function (f, i) {
      var finalStep = new _step.default(f.x, f.y, _coordinates.spacing, i + 44);
      finalStep.update('color', _this.color);
      finalStep.update('id', {
        type: _coordinates.FINAL,
        safe: true
      });

      _this.stepFinal.push(finalStep);
    }); //PATH: pieces which have reached the final succesfuly.

    var final = new _step.default(props.final.x, props.final.y, _coordinates.spacing, 48);
    final.update('color', this.color);
    this.final = final;
    props.players.forEach(function (piece) {
      var path = {
        count: _this.path,
        location: function location(count) {
          if (count === -1) {
            //home
            return piece.home;
          } else if (count > -1 && count < 44) {
            //steps
            return _ketchup.p5board.game.steps.find(function (step) {
              return count === step.count;
            }).getLocation();
          } else if (count > 43 && count < 47) {
            //final
            return _this.stepFinal.find(function (step) {
              return count === step.count;
            }).getLocation();
          } else if (count === 48) {
            //end
            return _this.final.getLocation();
          }
        }
      };
      var newPiece = new _piece.default(piece.location.x, piece.location.y, piece.home, _this.spacing, piece.icon, path);
      newPiece.color = _this.color;

      _this.players.push(newPiece);
    });
  }

  _createClass(Square, [{
    key: "isOut",
    value: function isOut() {
      var outside = [];
      this.players.forEach(function (player) {
        if (player.stepLocation === -1) {
          console.log('INSIDE');
        } else if (player.stepLocation > 0 && player.stepLocation < 48) {
          outside.push(player.icon);
        }
      });

      if (outside.length < this.players.length && outside.length > 0) {
        return {
          state: true,
          count: outside
        };
      } else {
        return {
          state: false,
          count: outside
        };
      }
    }
  }, {
    key: "update",
    value: function update(props) {
      //update the squares from here.
      this.players.forEach(function (player) {
        if (player.icon === props.icon) {
          console.log(props.dice);
        }
      });
    }
  }, {
    key: "mouseClicked",
    value: function mouseClicked(e) {
      var _this2 = this;

      if (e.offsetX > this.location.x && e.offsetX < this.location.x + this.size && e.offsetY > this.location.y && e.offsetY < this.location.y + this.size) {
        this.players.forEach(function (p) {
          var x = p.location.x,
              y = p.location.y;

          if (e.offsetX > x && e.offsetX < x + _this2.spacing && e.offsetY > y && e.offsetY < y + _this2.spacing) {
            if (_this2.moveAllowed && p.stepLocation === 0) {
              //check if movement is valid
              console.log('Moving Out Of HOME');

              _ketchup.p5board.move({
                icon: p.icon,
                count: 1
              });
            } else {
              console.log('CLICKED BUT NO MOVEMENT ALLOWED');
              p.mouseClicked(e);
            }
          }
        });
      }

      this.stepFinal.forEach(function (step) {
        step.mouseClicked(e);
      });
      this.final.mouseClicked(e);
    }
  }]);

  return Square;
}();

exports.default = Square;
},{"./coordinates.js":"Components/coordinates.js","./piece.js":"Components/piece.js","./step.js":"Components/step.js","../ketchup.js":"ketchup.js"}],"Components/board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _coordinates = require("./coordinates.js");

var _dice = _interopRequireDefault(require("./dice.js"));

var _piece = _interopRequireDefault(require("./piece.js"));

var _square = _interopRequireDefault(require("./square.js"));

var _step = _interopRequireDefault(require("./step.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var board = /*#__PURE__*/function () {
  function board(props) {
    var _this = this;

    _classCallCheck(this, board);

    //Initialize all the class variables here.
    this.squares = [];
    console.log("Board.js is here");
    var final = [];
    this.dice = new _dice.default(); //Initializes homeSquares

    props.squares.forEach(function (e, index) {
      //spacing constant
      e.spacing = _coordinates.spacing;
      e.count = index; //creating new square from model SQUARE

      var square = new _square.default(e); //pushing the newly created homeSquares.

      _this.squares.push(square); //pushing final data into final array.


      final.push({
        color: e.color,
        location: e.final
      });
    }); //Steps Array.

    this.steps = [];
    var count = 0; //Pushing a new step, and inserting into Array

    props.steps.forEach(function (s) {
      var step = new _step.default(s.x, s.y, _coordinates.spacing, count++);
      var safe = props.safeSteps.filter(function (e) {
        return e === step.count;
      });

      if (safe.length > 0) {
        step.id.safe = true;
      } else {
        step.id.safe = false;
      }

      _this.steps.push(step);
    }); //Current Player Count

    this.currentIndex = 0; //Setting up start squares.

    this.setSteps(this.squares);
  }

  _createClass(board, [{
    key: "setSteps",
    value: function setSteps(squares) {
      var _this2 = this;

      squares.forEach(function (e) {
        //Coloring Start Squares
        _this2.steps.forEach(function (s) {
          if (s.x === e.stepStart.x && s.y === e.stepStart.y) {
            s.update('color', e.color);
            s.id.type = 'START';
          }
        });

        if (e.count === _this2.currentIndex) {
          _this2.update('switch', {
            count: _this2.currentIndex
          });
        }
      });
    }
  }, {
    key: "update",
    value: function update(choice, props) {
      //update the player's position from here.
      if (choice === 'move') {
        this.squares.forEach(function (square) {
          if (square.color === props.color) {
            square.update({
              icon: props.icon,
              location: props.location
            });
          }
        });
      } else if (choice === 'switch') {
        this.squares.forEach(function (square) {
          square.highlight = false;
        });
        this.squares.forEach(function (square) {
          if (square.count === props.count) {
            square.highlight = true;
          }
        });
      }
    }
  }, {
    key: "mouseClicked",
    value: function mouseClicked(e) {
      this.squares.forEach(function (square) {
        square.mouseClicked(e);
      });
      this.steps.forEach(function (step) {
        step.mouseClicked(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.steps.forEach(function (e) {
        e.render();
      });
      this.squares.forEach(function (e) {
        if (e.count != _this3.currentIndex) {
          e.render();
        }
      });
      this.squares[this.currentIndex].render();
      this.dice.render();
    }
  }]);

  return board;
}();

exports.default = board;
},{"./coordinates.js":"Components/coordinates.js","./dice.js":"Components/dice.js","./piece.js":"Components/piece.js","./square.js":"Components/square.js","./step.js":"Components/step.js"}],"ketchup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p5board = void 0;

var _board = _interopRequireDefault(require("./Components/board.js"));

var _coordinates = require("./Components/coordinates.js");

var _dice = _interopRequireDefault(require("./Components/dice.js"));

var _piece = _interopRequireDefault(require("./Components/piece.js"));

var _square = _interopRequireDefault(require("./Components/square.js"));

var _step = _interopRequireDefault(require("./Components/step.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sketch = function sketch(s) {
  s.game = {}, s.i = 0, s.ludo = {}, s.colors = ['yellow', 'blue', 'green', 'red'];

  s.setup = function () {
    s.createCanvas(500, 600);
    s.game = new _board.default(_coordinates.coordinates);
  };

  s.draw = function () {
    s.background(255);
    s.game.render();
  };

  s.mouseClicked = function (e) {
    var dice = s.game.dice.location,
        spacing = s.game.dice.spacing;

    if (e.offsetX > dice.x && e.offsetX < dice.x + spacing && e.offsetY > dice.y && e.offsetY < dice.y + spacing) {
      s.game.dice.onclick();
      s.play(); //    moveSound.play();
    }

    s.game.mouseClicked(e);
  };

  s.play = function () {
    var currentSquare = s.game.squares[s.game.currentIndex];
    var currentDice = s.game.dice.current;

    if (currentSquare.isOut().state) {
      //atleast one piece is out,
      if (currentSquare.isOut().count.length === 1 && currentDice != 6) {
        //only one is out, so move it
        currentSquare.players.forEach(function (p) {
          if (p.icon === currentSquare.isOut().count[0]) {
            console.log('only one is out, so move it');
            s.move({
              icon: p.icon,
              count: currentDice
            });
          }
        });
      } else if (currentSquare.isOut().count.length > 1) {
        //more than one is out, move according to choice.
        currentSquare.moveAllowed = true;
      }
    } else {
      //none of the pieces are outside.
      if (currentDice === 6) {
        currentSquare.moveAllowed = true;
      } else {
        s.switchPlayer();
      }
    }
  };

  s.move = function (props) {
    s.game.squares[s.game.currentIndex].players.forEach(function (p) {
      if (p.icon === props.icon) {
        console.info('Found Piece  : ' + p.icon);

        if (p.stepLocation + props.count + 1 < p.path.count.length) {
          console.info('MOVING : ' + props.count);
          p.stepLocation += props.count;
          p.update('select');
        }
      }
    });
  };

  s.rollDice = function (state) {
    s.game.dice.rollAllowed = state;
  };

  s.switchPlayer = function () {
    console.log('switching__' + ++s.i + '  Dice : ' + s.game.dice.current + '  Color : ' + s.game.squares[s.game.currentIndex].color);

    if (s.game.currentIndex <= 2) {
      s.game.currentIndex += 1;
    } else {
      s.game.currentIndex = 0;
    }

    s.game.update('switch', {
      count: s.game.currentIndex
    });
    s.rollDice(true);
  };
};

var p5board = new p5(sketch);
exports.p5board = p5board;
},{"./Components/board.js":"Components/board.js","./Components/coordinates.js":"Components/coordinates.js","./Components/dice.js":"Components/dice.js","./Components/piece.js":"Components/piece.js","./Components/square.js":"Components/square.js","./Components/step.js":"Components/step.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64264" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ketchup.js"], null)
//# sourceMappingURL=/ketchup.9c98da85.js.map