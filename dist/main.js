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

eval("const Meteor = __webpack_require__(/*! ./meteor */ \"./src/meteor.js\");\nconst Dictionary = __webpack_require__(/*! ./dictionary */ \"./src/dictionary.js\");\n\nclass Game{\n    constructor(canvas, ctx){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.dictionary = new Dictionary();\n        this.meteors = [];\n        \n        \n        this.addMeteors = this.addMeteors.bind(this);\n        this.draw = this.draw.bind(this);\n\n        this.addMeteors();\n    }\n\n    addMeteors(){\n        // debugger;\n        const meteor = new Meteor(this.canvas, this.ctx, 100, 100, this.dictionary.randomWord())\n        this.meteors.push(meteor);\n    }\n\n    draw(){\n        // debugger;\n        for(let i = 0; i < this.meteors.length; i++){\n            this.meteors[i].draw();\n            this.meteors[i].drawText();\n        }\n    }\n\n\n    //WPM: (# of words typed / Time taken (input timer)) * 60 = WPM\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    const input = document.getElementById('type-form');\n    const ctx = canvas.getContext('2d');\n\n    const game = new Game(canvas,ctx);\n\n    game.draw();\n});\n  \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/meteor.js":
/*!***********************!*\
  !*** ./src/meteor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Meteor {\n    constructor(canvas, ctx, x, y, word){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.dx = 0;\n        this.dy = 0;\n        this.word = word;\n\n        //Variables that I need:\n        //Canvas, so that it can be drawn in.\n        //X and Y positions\n        //X and Y velocities (Only moves in the Y direction)\n        //Word attached\n\n        // this.meteorImg = new Image();\n        // this.meteorImg.src = __dirname + \"./meteor.png\";\n    }\n\n    draw(){\n        // debugger;\n        // this.ctx.drawImage(this.meteorImg, this.x, this.y);\n\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 20, 0, 2*Math.PI);\n        this.ctx.fillStyle = '#A52A2A';\n        this.ctx.fill();\n        this.ctx.closePath();        \n    }\n\n    drawText(){\n        // debugger;\n        this.ctx.beginPath();\n        this.ctx.fillStyle = '#008000';\n        this.ctx.fillText(this.word, this.x - 20, this.y - 25);\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    move(){\n        this.x += this.dx;\n        this.y += this.dy;\n    }\n\n    //draw() and move() method (To render and re-render the meteor)\n\n}\n\nmodule.exports = Meteor;\n\n//# sourceURL=webpack:///./src/meteor.js?");

/***/ })

/******/ });