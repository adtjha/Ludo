parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"R7oF":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n){var r=this;e(this,t),this.squares=[],console.log("Board.js is here");var s=[];this.dice=new dice,n.squares.forEach(function(e,t){e.spacing=spacing,e.count=t;var n=new Square(e);r.squares.push(n),s.push({color:e.color,location:e.final})}),this.steps=[];var o=0;n.steps.forEach(function(e){var t=new Step(e.x,e.y,spacing,o++);n.safeSteps.filter(function(e){return e===t.count}).length>0?t.id.safe=!0:t.id.safe=!1,r.steps.push(t)}),this.currentIndex=0,this.setSteps(this.squares)}return n(t,[{key:"setSteps",value:function(e){var t=this;e.forEach(function(e){t.steps.forEach(function(t){t.x===e.stepStart.x&&t.y===e.stepStart.y&&(t.update("color",e.color),t.id.type="START")}),e.count===t.currentIndex&&t.update("switch",{count:t.currentIndex})})}},{key:"update",value:function(e,t){"move"===e?this.squares.forEach(function(e){e.color===t.color&&e.update({icon:t.icon,location:t.location})}):"switch"===e&&(this.squares.forEach(function(e){e.highlight=!1}),this.squares.forEach(function(e){e.count===t.count&&(e.highlight=!0)}))}},{key:"mouseClicked",value:function(e){this.squares.forEach(function(t){t.mouseClicked(e)}),this.steps.forEach(function(t){t.mouseClicked(e)})}},{key:"render",value:function(){var e=this;this.steps.forEach(function(e){e.render()}),this.squares.forEach(function(t){t.count!=e.currentIndex&&t.render()}),this.squares[this.currentIndex].render(),this.dice.render()}}]),t}();exports.default=r;
},{}],"fnOF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.coordinates=exports.END=exports.FINAL=exports.START=exports.COMMON=exports.spacing=exports.boardSize=void 0;var x=500;exports.boardSize=x;var y=x/13;exports.spacing=y;var e="COMMON";exports.COMMON=e;var o="START";exports.START=o;var t="FINAL";exports.FINAL=t;var i="END";exports.END=i;var r={squares:[{color:"red",start:{x:0,y:0},size:5,path:[-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],players:[{isThere:!0,icon:"R1",location:{x:1,y:1},home:{x:1,y:1}},{isThere:!0,icon:"R2",location:{x:1,y:3},home:{x:1,y:3}},{isThere:!0,icon:"R3",location:{x:3,y:1},home:{x:3,y:1}},{isThere:!0,icon:"R4",location:{x:3,y:3},home:{x:3,y:3}}],stepStart:{x:1,y:5},stepFinal:[{x:1,y:6},{x:2,y:6},{x:3,y:6},{x:4,y:6}],final:{x:5,y:6}},{color:"yellow",start:{x:0,y:8},size:5,path:[-1,34,35,36,37,38,39,40,41,42,43,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,44,45,46,47,48],players:[{isThere:!0,icon:"Y1",location:{x:1,y:9},home:{x:1,y:9}},{isThere:!0,icon:"Y2",location:{x:1,y:11},home:{x:1,y:11}},{isThere:!0,icon:"Y3",location:{x:3,y:9},home:{x:3,y:9}},{isThere:!0,icon:"Y4",location:{x:3,y:11},home:{x:3,y:11}}],stepStart:{x:5,y:11},stepFinal:[{x:6,y:11},{x:6,y:10},{x:6,y:9},{x:6,y:8}],final:{x:6,y:7}},{color:"green",start:{x:8,y:0},size:5,path:[-1,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,0,1,2,3,4,5,6,7,8,9,10,44,45,46,47,48],players:[{isThere:!0,icon:"G1",location:{x:9,y:1},home:{x:9,y:1}},{isThere:!0,icon:"G2",location:{x:11,y:1},home:{x:11,y:1}},{isThere:!0,icon:"G3",location:{x:9,y:3},home:{x:9,y:3}},{isThere:!0,icon:"G4",location:{x:11,y:3},home:{x:11,y:3}}],stepStart:{x:7,y:1},stepFinal:[{x:6,y:1},{x:6,y:2},{x:6,y:3},{x:6,y:4}],final:{x:6,y:5}},{color:"blue",start:{x:8,y:8},size:5,path:[-1,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,44,45,46,47,48],players:[{isThere:!0,icon:"B1",location:{x:9,y:9},home:{x:9,y:9}},{isThere:!0,icon:"B2",location:{x:9,y:11},home:{x:9,y:11}},{isThere:!0,icon:"B3",location:{x:11,y:9},home:{x:11,y:9}},{isThere:!0,icon:"B4",location:{x:11,y:11},home:{x:11,y:11}}],stepStart:{x:11,y:7},stepFinal:[{x:11,y:6},{x:10,y:6},{x:9,y:6},{x:8,y:6}],final:{x:7,y:6}}],center:{start:{x:5,y:5},end:{x:7,y:7}},steps:[{x:0,y:5},{x:1,y:5},{x:2,y:5},{x:3,y:5},{x:4,y:5},{x:5,y:4},{x:5,y:3},{x:5,y:2},{x:5,y:1},{x:5,y:0},{x:6,y:0},{x:7,y:0},{x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:8,y:5},{x:9,y:5},{x:10,y:5},{x:11,y:5},{x:12,y:5},{x:12,y:6},{x:12,y:7},{x:11,y:7},{x:10,y:7},{x:9,y:7},{x:8,y:7},{x:7,y:8},{x:7,y:9},{x:7,y:10},{x:7,y:11},{x:7,y:12},{x:6,y:12},{x:5,y:12},{x:5,y:11},{x:5,y:10},{x:5,y:9},{x:5,y:8},{x:4,y:7},{x:3,y:7},{x:2,y:7},{x:1,y:7},{x:0,y:7},{x:0,y:6}],safeSteps:[1,7,12,18,23,29,34,40]};exports.coordinates=r;
},{}],"FqdE":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(){t(this,e),this.values=[4,5,6],this.location=createVector(235,545),this.spacing=500/13,this.changed=!1,this.current="D",this.show=!0,this.rollAllowed=!0}return i(e,[{key:"getRandom",value:function(){return random(this.values)}},{key:"reset",value:function(){this.changed=!1,this.current=0,this.show=!0}},{key:"onclick",value:function(){this.rollAllowed?this.roll():console.error("Rolling Dice Not Allowed")}},{key:"roll",value:function(){var t=this;this.show=!1;for(var e,i=[],n=0;n<1e3;n++)e=this.getRandom(),this.current=e,i.push(e);this.current=random(i),this.changed=!0,setTimeout(function(){t.show=!0},1e3),this.rollAllowed=!1}},{key:"render",value:function(){var t=this;push(),this.show&&(fill("white"),rect(this.location.x,this.location.y,this.spacing,this.spacing),fill(0),textSize(32),text(this.current,this.location.x+10,this.location.y+30)),this.changed&&(fill(0),textSize(256),text(this.current,180,300),setTimeout(function(){t.changed=!1},600)),pop()}}]),e}();exports.default=n;
},{}],"necy":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function i(e,o,s,c,n,h){t(this,i),this.x=e,this.y=o,this.home=s,this.highlight=!1,this.spacing=c,this.path=h,this.color=0,this.location=createVector(this.x*c,this.y*c),this.icon=n,this.selected=!1,this.stepLocation=0}return e(i,[{key:"mouseClicked",value:function(t,i){t.offsetX>this.location.x&&t.offsetX<this.location.x+this.spacing&&t.offsetY>this.location.y&&t.offsetY<this.location.y+this.spacing&&(console.log("Mouse Clicked on Piece  : "+this.icon+",  Move :  "+game.dice.current),this.stepLocation>0&&move({icon:this.icon,count:game.dice.current}))}},{key:"update",value:function(t,i){if("move"===t)console.log("updating the location of piece : "+this.icon),this.x=i.x,this.y=i.y,this.location=createVector(this.x*spacing,this.y*spacing),switchPlayer();else if("select"===t){console.info("selected : "+this.icon);var e=this.path.location(this.path.count[this.stepLocation]);this.path.count[this.stepLocation+1]?this.update("move",e):(console.error("Piece  : "+this.icon+"  Reached"),switchPlayer())}}},{key:"render",value:function(){push(),fill(255),this.highlight&&(stroke(this.color),strokeWeight(5),strokeJoin(ROUND)),rect(this.home.x*this.spacing,this.home.y*this.spacing,this.spacing,this.spacing,10),pop(),push(),strokeWeight(3),fill(this.color),ellipse(this.location.x+.5*this.spacing,this.location.y+.5*this.spacing,.5*this.spacing,.5*this.spacing),pop()}}]),i}();exports.default=o;
},{}],"eaVg":[function(require,module,exports) {
"use strict";function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var i=0;i<o.length;i++){var e=o[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,i,e){return i&&o(t.prototype,i),e&&o(t,e),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){function o(i){var e=this;t(this,o),this.x=i.start.x,this.y=i.start.y,this.highlight=!1,this.moveAllowed=!1,this.count=i.count,this.spacing=i.spacing,this.color=i.color,this.players=[],this.path=i.path,this.location=createVector(this.x*this.spacing,this.y*this.spacing),this.size=i.size*this.spacing,this.stepStart=i.stepStart,this.stepFinal=[],i.stepFinal.forEach(function(t,o){var i=new Step(t.x,t.y,spacing,o+44);i.update("color",e.color),i.update("id",{type:FINAL,safe:!0}),e.stepFinal.push(i)});var n=new Step(i.final.x,i.final.y,spacing,48);n.update("color",this.color),this.final=n,i.players.forEach(function(t){var o={count:e.path,location:function(o){return-1===o?t.home:o>-1&&o<44?game.steps.find(function(t){return o===t.count}).getLocation():o>43&&o<47?e.stepFinal.find(function(t){return o===t.count}).getLocation():48===o?e.final.getLocation():void 0}},i=new Piece(t.location.x,t.location.y,t.home,e.spacing,t.icon,o);i.color=e.color,e.players.push(i)})}return i(o,[{key:"isOut",value:function(){var t=[];return this.players.forEach(function(o){-1===o.stepLocation?console.log("INSIDE"):o.stepLocation>0&&o.stepLocation<48&&t.push(o.icon)}),t.length<this.players.length&&t.length>0?{state:!0,count:t}:{state:!1,count:t}}},{key:"update",value:function(t){this.players.forEach(function(o){o.icon===t.icon&&console.log(t.dice)})}},{key:"mouseClicked",value:function(t){var o=this;t.offsetX>this.location.x&&t.offsetX<this.location.x+this.size&&t.offsetY>this.location.y&&t.offsetY<this.location.y+this.size&&this.players.forEach(function(i){var e=i.location.x,n=i.location.y;t.offsetX>e&&t.offsetX<e+o.spacing&&t.offsetY>n&&t.offsetY<n+o.spacing&&(o.moveAllowed&&0===i.stepLocation?(console.log("Moving Out Of HOME"),move({icon:i.icon,count:1})):(console.log("CLICKED BUT NO MOVEMENT ALLOWED"),i.mouseClicked(t)))}),this.stepFinal.forEach(function(o){o.mouseClicked(t)}),this.final.mouseClicked(t)}},{key:"render",value:function(){var t=1;push(),rectMode(CORNER),fill(this.color),this.highlight&&(t=10,stroke(this.color),strokeWeight(t),strokeJoin(ROUND),fill(255)),rect(this.location.x+t/4,this.location.y+t/4,this.size-t/2,this.size-t/2),pop(),this.stepFinal.forEach(function(t){return t.render()}),this.final.render(),this.players.forEach(function(t){return t.render()}),pop()}}]),o}();exports.default=e;
},{}],"pkug":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var o=0;o<i.length;o++){var s=i[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function o(t,o,s){return o&&i(t.prototype,o),s&&i(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function i(o,s,e,n){t(this,i),this.x=o,this.y=s,this.count=n,this.location=createVector(o*e,s*e),this.size=e,this.color=255,this.id={type:COMMON,safe:!1},console.log("STEP IMPORTED")}return o(i,[{key:"getLocation",value:function(){return{x:this.x,y:this.y}}},{key:"mouseClicked",value:function(t){var i=this;if(t.offsetX>this.location.x&&t.offsetX<this.location.x+this.size&&t.offsetY>this.location.y&&t.offsetY<this.location.y+this.size){var o=this.count+game.dice.current;game.squares.forEach(function(t){t.players.forEach(function(i){i.stepLocation===o&&t.count!=game.currentIndex&&(console.log("Found and Removing : "+i.icon),move({icon:i.icon,count:-1*i.stepLocation}))})}),game.squares[game.currentIndex].players.forEach(function(t){t.path.count[t.stepLocation]===i.count&&move({icon:t.icon,count:game.dice.current})})}}},{key:"update",value:function(t,i){this[t]=i}},{key:"render",value:function(){this.count<48?(push(),fill(this.color),stroke(1),rect(this.location.x,this.location.y,this.size,this.size),pop()):"red"===this.color?(push(),fill(this.color),stroke(1),triangle(this.location.x+1.5*this.size,this.location.y+.5*this.size,this.location.x,this.location.y-this.size,this.location.x,this.location.y+2*this.size),pop()):"green"===this.color?(push(),fill(this.color),stroke(1),triangle(this.location.x+.5*this.size,this.location.y+1.5*this.size,this.location.x+2*this.size,this.location.y,this.location.x-this.size,this.location.y),pop()):"yellow"===this.color?(push(),fill(this.color),stroke(1),triangle(this.location.x+.5*this.size,this.location.y-.5*this.size,this.location.x-this.size,this.location.y+this.size,this.location.x+2*this.size,this.location.y+this.size),pop()):"blue"===this.color&&(push(),fill(this.color),stroke(1),triangle(this.location.x-.5*this.size,this.location.y+.5*this.size,this.location.x+this.size,this.location.y-this.size,this.location.x+this.size,this.location.y+2*this.size),pop())}}]),i}();exports.default=s;
},{}],"nyCU":[function(require,module,exports) {
"use strict";require("./Components/board.js"),require("./Components/coordinates.js"),require("./Components/dice.js"),require("./Components/piece.js"),require("./Components/square.js"),require("./Components/step.js");var e={},o=0,n={},c=["yellow","blue","green","red"];function t(){createCanvas(600,600),console.log("Sketch.js is here"),e=new board(coordinates)}function r(){p5.background(255),e.render()}function i(o){var n=e.dice.location,c=e.dice.spacing;o.offsetX>n.x&&o.offsetX<n.x+c&&o.offsetY>n.y&&o.offsetY<n.y+c&&(e.dice.onclick(),s()),e.mouseClicked(o)}function s(){var o=e.squares[e.currentIndex],n=e.dice.current;o.isOut().state?1===o.isOut().count.length&&6!=n?o.players.forEach(function(e){e.icon===o.isOut().count[0]&&(console.log("only one is out, so move it"),u({icon:e.icon,count:n}))}):o.isOut().count.length>1&&(o.moveAllowed=!0):6===n?o.moveAllowed=!0:d()}function u(o){e.squares[e.currentIndex].players.forEach(function(e){e.icon===o.icon&&(console.info("Found Piece  : "+e.icon),e.stepLocation+o.count+1<e.path.count.length&&(console.info("MOVING : "+o.count),e.stepLocation+=o.count,e.update("select")))})}function l(o){e.dice.rollAllowed=o}function d(){console.log("switching__"+ ++o+"  Dice : "+e.dice.current+"  Color : "+e.squares[e.currentIndex].color),e.currentIndex<=2?e.currentIndex+=1:e.currentIndex=0,e.update("switch",{count:e.currentIndex}),l(!0)}
},{"./Components/board.js":"R7oF","./Components/coordinates.js":"fnOF","./Components/dice.js":"FqdE","./Components/piece.js":"necy","./Components/square.js":"eaVg","./Components/step.js":"pkug"}]},{},["nyCU"], null)
//# sourceMappingURL=/sketch.52b2dfeb.js.map