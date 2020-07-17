/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dictionary.js":
/*!***************************!*\
  !*** ./src/dictionary.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const fs = require('fs');\n// const random_words_api = require()\n\n\nclass Dictionary {\n    constructor(){\n        // this.words = fs.readFileSync(__dirname + '/words-list.txt').toString().split(\"\\n\").filter(word => word.length > 2);\n        this.words = [\"fallowing\", \"enols\", \"cachets\", \"corroborees\", \"thorning\", \"briefers\", \"interfuses\", \"selamliks\", \"suspecting\", \"ozonation\", \"mummifying\", \n        \"closedowns\", \"silentness\", \"reraised\", \"trenches\", \"recontaminates\", \"tearful\", \"sandglass\", \"gummers\", \"fret\", \"orchestrate\", \"honan\", \"profanenesses\", \n        \"mainlands\", \"lockable\", \"rottweilers\", \"retune\", \"frankforts\", \"butanol\", \"neurone\", \"skimp\", \"usuals\", \"woozier\", \"obsession\", \"slapdashes\", \"genetic\", \n        \"charbroiled\", \"censurers\", \"ataxias\", \"toled\", \"vainness\", \"tuppences\", \"dumbed\", \"minicomputer\", \"cricked\", \"connecters\", \"cherimoya\", \"equalized\", \n        \"fugitivenesses\", \"modillions\", \"extremity\", \"freehanded\", \"euphuisms\", \"eelpout\", \"suppressants\", \"phycoerythrins\", \"spirochaete\", \"backwash\", \"onagers\", \n        \"unhandsome\", \"crescendo\", \"cognized\", \"morosity\", \"catacomb\", \"gotcha\", \"rudds\", \"theatrical\", \"troubleshot\", \"opining\", \"panacean\", \"enamored\", \"eucritic\", \n        \"coordination\", \"plover\", \"talcose\", \"movie\", \"comedians\", \"sauciest\", \"pretension\", \"chromosomal\", \"ion\", \"esotropic\", \"kaoliangs\", \"untested\", \"unclogged\", \n        \"alible\", \"palier\", \"andesites\", \"sheeney\", \"centiliter\", \"tunic\", \"stoppable\", \"recidivist\", \"cosmolining\", \"hypnosis\", \"spodumene\", \"umping\", \"standings\", \n        \"crasser\", \"valvelet\"];\n    }\n\n    randomWord(){\n        return this.words[Math.floor(Math.random() * this.words.length)];\n    }\n}\n\nmodule.exports = Dictionary;\n\n// let dict = new Dictionary();\n\n// console.log(dict.random_word());\n\n//# sourceURL=webpack:///./src/dictionary.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Meteor = __webpack_require__(/*! ./meteor */ \"./src/meteor.js\");\nconst Dictionary = __webpack_require__(/*! ./dictionary */ \"./src/dictionary.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nclass Game{\n    constructor(canvas, ctx, input){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.input = input;\n\n        this.inputTimer = 0;\n        this.startType = 0;\n        this.endType = 0;\n\n\n        this.dictionary = new Dictionary();\n        this.player = new Player();\n        this.meteors = [];\n        this.addMeteors();\n\n\n        this.handleMeteor = this.handleMeteor.bind(this);\n        this.startTimer = this.startTimer.bind(this);\n    }\n\n    addMeteors(){\n        let randX = Math.floor(Math.random() * (this.canvas.width - 200)) + 200;\n\n        let meteor = new Meteor(this.canvas, this.ctx, randX, 0, this.dictionary.randomWord())\n        this.meteors.push(meteor);\n    }\n\n    draw(){\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for(let i = 0; i < this.meteors.length; i++){\n            this.meteors[i].draw();\n            this.meteors[i].drawText();\n        }\n    }\n\n    move(){\n        for(let i = 0; i < this.meteors.length; i++){\n            this.meteors[i].move();\n        }\n    }\n\n    renderGround(){\n        this.ctx.beginPath();\n        this.ctx.rect(0, 700, this.canvas.width, 100);\n        this.ctx.fillStyle = '#808080';\n        this.ctx.fill();        \n        this.ctx.stroke();\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.fillStyle = '#000000';\n        this.ctx.fillText(`WPM: ${this.calculateWPM()}`, 50, 750);\n        this.ctx.fill();\n        this.ctx.fillText(`Score: ${this.player.score}`, 250, 750);\n        this.ctx.fill();\n        this.ctx.fillText(`Lives: ${this.player.lives}`, 450, 750);\n        this.ctx.fill();                \n        this.ctx.closePath();          \n    }\n\n    calculateWPM(){\n        if(this.player.destroyCount / (this.inputTimer / 60)){\n            this.player.wpm = (this.player.destroyCount / (this.inputTimer / 60)).toFixed(2);\n        }else{\n            this.player.wpm = 0;\n        }\n\n        return this.player.wpm;\n    }\n\n    positionCheck(){\n        for(let i = 0; i < this.meteors.length; i++){\n            if(this.meteors[i].y >= 700){\n                this.meteors.splice(i, 1);\n                this.player.lives -= 1;\n            }\n        }\n    }\n\n    startTimer(e){\n        if(this.startType === 0 || e.target.value !== ' '){\n            this.startType = Date.now();\n        }\n    }\n\n    handleMeteor(e){\n        let value = this.input.value.trim();\n\n        if(e.keyCode === 32 || e.keyCode === 13){\n            for(let i = 0; i < this.meteors.length; i++){\n                if(value === this.meteors[i].word){\n                    this.meteors.splice(i, 1);\n                    this.player.destroyCount += 1;\n                    this.player.score += 1000;\n                    this.input.value = \"\";\n                    break;\n                }\n            }\n\n            if(this.startType > 0){\n                this.endType = Date.now();\n                this.inputTimer += ((this.endType - this.startType) / 1000)\n            }\n\n            this.startType = 0;\n\n        }\n\n    }\n\n    start(){\n        const that = this;\n\n        //Put event listener on input\n        this.input.addEventListener('keydown', this.handleMeteor);\n        this.input.addEventListener('input', this.startTimer);\n\n        const game = setInterval(function(){ \n            that.draw();\n            that.move();\n            that.renderGround();\n            that.positionCheck();\n\n            if(that.player.lives <= 0){\n                alert('Game Over!');\n                that.draw();\n                that.move();\n                that.renderGround();\n                that.positionCheck();\n                clearInterval(game);\n            }\n\n        }, 50);\n        \n        const meteors = setInterval(function(){\n            that.addMeteors();\n\n            if(that.player.lives <= 0){\n                clearInterval(meteors);\n            }\n\n        }, 10000);\n        \n    }\n    //How to handle spawning meteors? Maybe every 10 seconds, spawn a new meteor.\n    //As more meteors get destroyed, spawn faster.\n\n\n    //WPM: (# of words typed / Time taken (input timer)) * 60 = WPM\n\n    //If spacebar (event code: 32) or enter (event code: 13) and input matches with\n    //word, delete the meteor.\n    //Iterate through the meteors to do this.\n    //Get the input from index.js\n\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    const input = document.getElementById('type-form');\n    const ctx = canvas.getContext('2d');\n    const game = new Game(canvas,ctx, input);\n\n    game.start();\n\n\n    // game.draw();\n});\n  \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/meteor.js":
/*!***********************!*\
  !*** ./src/meteor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Meteor {\n    constructor(canvas, ctx, x, y, word){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.dx = 0;\n        this.dy = 1;\n        this.word = word;\n\n        //Variables that I need:\n        //Canvas, so that it can be drawn in.\n        //X and Y positions\n        //X and Y velocities (Only moves in the Y direction)\n        //Word attached\n    }\n\n    draw(){\n\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 20, 0, 2*Math.PI);\n        this.ctx.fillStyle = '#A52A2A';\n        this.ctx.fill();\n        this.ctx.closePath();        \n    }\n\n    drawText(){\n        // debugger;\n        this.ctx.beginPath();\n        this.ctx.fillStyle = '#008000';\n        this.ctx.fillText(this.word, this.x - 23, this.y - 25);\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    move(){\n        this.x += this.dx;\n        this.y += this.dy;\n    }\n\n    //draw() and move() method (To render and re-render the meteor)\n\n}\n\nmodule.exports = Meteor;\n\n//# sourceURL=webpack:///./src/meteor.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Player{\n    constructor(){\n        this.wpm = 0;\n        this.score = 0;\n        this.destroyCount = 0;\n        this.lives = 3;\n    }\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });