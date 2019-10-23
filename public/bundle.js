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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Field.js":
/*!*************************!*\
  !*** ./src/js/Field.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// This is minesweeper\nvar timeout = null;\n\nvar Field =\n/*#__PURE__*/\nfunction () {\n  function Field(_ref) {\n    var containerElement = _ref.containerElement,\n        width = _ref.width,\n        height = _ref.height,\n        mineCount = _ref.mineCount,\n        resetButton = _ref.resetButton;\n\n    _classCallCheck(this, Field);\n\n    this.width = width;\n    this.height = height;\n    this.mineCount = mineCount;\n    this.cells = [];\n    this.playing = false;\n    this.gameOver = false;\n    this.cellsOpened = 0;\n    this.cellsOpenToWin = width * height - mineCount;\n    this.resetButton = resetButton;\n    this.containerElement = containerElement;\n    this.createField({\n      containerElement: containerElement,\n      width: width,\n      height: height\n    });\n  }\n\n  _createClass(Field, [{\n    key: \"createField\",\n    value: function createField(_ref2) {\n      var _this = this;\n\n      var containerElement = _ref2.containerElement,\n          width = _ref2.width,\n          height = _ref2.height;\n      var table = document.createElement('table');\n      table.style.borderCollapse = 'collapse';\n      table.style.background = '#EEE';\n      this.resetButton.style.zIndex = 1020;\n\n      var _loop = function _loop(i) {\n        var row = document.createElement('tr');\n        var rowArray = [];\n\n        var _loop2 = function _loop2(k) {\n          var cell = document.createElement('td');\n          cell.addEventListener('mouseup', function (e) {\n            e.preventDefault();\n            e.stopPropagation();\n\n            if (!_this.playing) {\n              _this.startGame();\n\n              _this.insertMines({\n                clickedX: k,\n                clickedY: i\n              });\n\n              _this.clickCell({\n                x: k,\n                y: i,\n                e: e\n              });\n            } else {\n              _this.clickCell({\n                x: k,\n                y: i,\n                e: e\n              });\n            }\n          });\n          cell.style.border = '1px solid #000';\n          cell.style.width = '30px';\n          cell.style.height = '30px';\n          cell.style.textAlign = 'center';\n          cell.style.verticalAlign = 'middle';\n          cell.innerHTML = '<i class=\"fas fa-square\"></i>';\n          rowArray.push({\n            element: cell,\n            content: {\n              isOpen: false,\n              hasMine: false,\n              hasFlag: false,\n              threat: 0 // Number of surrounding mines, 0-9\n\n            }\n          });\n          row.append(cell);\n        };\n\n        for (var k = 0; k < width; k++) {\n          _loop2(k);\n        }\n\n        _this.cells.push(rowArray);\n\n        table.append(row);\n      };\n\n      for (var i = 0; i < height; i++) {\n        _loop(i);\n      }\n\n      containerElement.append(table);\n    }\n  }, {\n    key: \"clickCell\",\n    value: function clickCell(_ref3) {\n      var e = _ref3.e,\n          x = _ref3.x,\n          y = _ref3.y;\n\n      if (this.gameOver) {\n        this.resetButton.click();\n      }\n\n      var cell = this.cells[y][x];\n\n      if (e.button === 2) {\n        if (cell.content.isOpen) return;\n        cell.content.hasFlag ? (cell.element.innerHTML = '<i class=\"fas fa-square\"></i>', cell.content.hasFlag = false) : (cell.element.innerHTML = '<i class=\"far fa-flag\"></i>', cell.content.hasFlag = true);\n      } else {\n        cell.content.hasMine ? this.endGame() : !cell.content.isOpen && this.openCells({\n          x: x,\n          y: y\n        });\n      }\n\n      this.checkIfVictory();\n    }\n  }, {\n    key: \"checkIfVictory\",\n    value: function checkIfVictory() {\n      if (this.cellsOpened === this.cellsOpenToWin) {\n        this.winGame();\n      }\n    }\n  }, {\n    key: \"openCells\",\n    value: function openCells(_ref4) {\n      var x = _ref4.x,\n          y = _ref4.y;\n      var cells = this.cells;\n      var cellClicked = cells[y][x];\n\n      if (cellClicked.content.threat > 0 && !cellClicked.content.hasMine) {\n        cellClicked.content.isOpen = true;\n        cellClicked.element.innerHTML = cellClicked.content.threat;\n        this.cellsOpened++;\n        return;\n      }\n\n      for (var i = -1; i <= 1; i++) {\n        for (var k = -1; k <= 1; k++) {\n          var nx = x + k;\n          var ny = y + i;\n          var cell = cells[ny] && cells[ny][nx];\n\n          if (!cell || cell.content.isOpen || cell.content.hasMine) {\n            continue;\n          }\n\n          this.cellsOpened++;\n          cell.content.isOpen = true;\n          cell.element.innerHTML = cell.content.threat ? cell.content.threat : ((i || k) && this.openCells({\n            x: nx,\n            y: ny\n          }), '');\n        }\n      }\n    }\n  }, {\n    key: \"insertMines\",\n    value: function insertMines(_ref5) {\n      var clickedX = _ref5.clickedX,\n          clickedY = _ref5.clickedY;\n      var floor = Math.floor,\n          random = Math.random;\n      var height = this.height,\n          width = this.width,\n          mineCount = this.mineCount,\n          cells = this.cells;\n\n      for (var i = mineCount; i--;) {\n        var randomRow = function randomRow() {\n          return floor(random() * height);\n        };\n\n        var randomCell = function randomCell() {\n          return floor(random() * width);\n        };\n\n        var cell = null;\n\n        do {\n          var rRow = randomRow();\n          var rCell = randomCell();\n\n          if (clickedY === rRow && clickedX === rCell) {\n            continue;\n          }\n\n          cell = cells[rRow][rCell];\n        } while (!cell || cell.content.hasMine);\n\n        cell.content.hasMine = true;\n      }\n\n      this.setThreats();\n    }\n  }, {\n    key: \"setThreats\",\n    value: function setThreats() {\n      var cells = this.cells;\n      cells.forEach(function (row, y) {\n        row.forEach(function (cell, x) {\n          for (var i = -1; i <= 1; i++) {\n            for (var k = -1; k <= 1; k++) {\n              if (!i && !k) {\n                continue;\n              }\n\n              var nx = x + k;\n              var ny = y + i;\n              var neighbourCell = cells[ny] && cells[ny][nx];\n\n              if (neighbourCell && neighbourCell.content.hasMine) {\n                cell.content.threat++;\n              }\n            }\n          }\n        });\n      });\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      this.playing = true;\n    }\n  }, {\n    key: \"endGame\",\n    value: function endGame() {\n      this.cells.flat().forEach(function (cell) {\n        cell.element.innerHTML = cell.content.hasMine ? '<i class=\"fas fa-bomb\"></i>' : cell.content.threat ? cell.content.threat : '';\n      });\n      this.playing = false;\n      this.gameOver = true;\n    }\n  }, {\n    key: \"winGame\",\n    value: function winGame() {\n      this.endGame();\n      var random = Math.random;\n\n      (function r() {\n        var winElement = document.getElementById('winContainer');\n\n        if (!winElement) {\n          winElement = document.createElement('div');\n          winElement.id = 'winContainer';\n          winElement.style.width = '100vw';\n          winElement.style.height = '100vh';\n          document.body.append(winElement);\n        }\n\n        timeout = setTimeout(r, 100 + (random() * 100 | 0));\n        var el = document.createElement(\"div\");\n        el.innerHTML = \"\\uD83C\\uDFC6\";\n        el.style.position = \"absolute\";\n        el.style.zIndex = 1010;\n        el.style.fontSize = (random() * 48 | 0) + 16 + \"px\";\n        el.style.left = (random() * innerWidth | 0) + \"px\";\n        el.style.top = (random() * (innerHeight + pageYOffset) | 0) + \"px\";\n        winElement.append(el);\n      })();\n\n      alert('Voitit pelin');\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      while (this.containerElement.lastChild) {\n        this.containerElement.removeChild(this.containerElement.lastChild);\n      }\n\n      var winElement = document.getElementById('winContainer');\n\n      if (winElement) {\n        clearTimeout(timeout);\n        winElement.remove();\n      }\n    }\n  }]);\n\n  return Field;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Field);\n\n//# sourceURL=webpack:///./src/js/Field.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ \"./src/js/Field.js\");\n\nvar rootElement = document.getElementById('root');\nvar containerElement = document.createElement('div');\nvar settingsElement = document.createElement('div');\nrootElement.append(settingsElement);\nrootElement.append(containerElement);\nvar resetButton = document.createElement('button');\nresetButton.innerText = 'Reset';\nsettingsElement.append(resetButton);\nvar gameSettings = {\n  containerElement: containerElement,\n  width: 8,\n  height: 8,\n  mineCount: 10,\n  resetButton: resetButton\n};\nvar mineInputContainer = document.createElement('div');\nvar minesInputLabel = document.createElement('label');\nminesInputLabel.htmlFor = 'minesInput';\nminesInputLabel.innerText = 'Mines: ';\nmineInputContainer.append(minesInputLabel);\nvar minesInput = document.createElement('input');\nminesInput.id = 'minesInput';\nminesInput.type = 'number';\nminesInput.max = gameSettings.width * gameSettings.height - 1;\nminesInput.min = 1;\nminesInput.step = 1;\nminesInput.value = gameSettings.mineCount;\nminesInput.addEventListener('change', function (_ref) {\n  var value = _ref.target.value;\n  gameSettings.mineCount = parseInt(value);\n});\nmineInputContainer.append(minesInput);\nvar widthInputContainer = document.createElement('div');\nvar widthInputLabel = document.createElement('label');\nwidthInputLabel.htmlFor = 'widthInput';\nwidthInputLabel.innerText = 'Width: ';\nwidthInputContainer.append(widthInputLabel);\nvar widthInput = document.createElement('input');\nwidthInput.id = 'widthInput';\nwidthInput.type = 'number';\nwidthInput.max = 10;\nwidthInput.min = 3;\nminesInput.step = 1;\nwidthInput.value = gameSettings.width;\nwidthInput.addEventListener('change', function (_ref2) {\n  var value = _ref2.target.value;\n  gameSettings.width = parseInt(value);\n  minesInput.max = gameSettings.width * gameSettings.height - 1;\n\n  if (parseInt(minesInput.value) >= minesInput.max) {\n    minesInput.value = minesInput.max;\n    gameSettings.mineCount = minesInput.max;\n  }\n});\nwidthInputContainer.append(widthInput);\nvar heightInputContainer = document.createElement('div');\nvar heightInputLabel = document.createElement('label');\nheightInputLabel.htmlFor = 'heightInput';\nheightInputLabel.innerText = 'Heigh: ';\nheightInputContainer.append(heightInputLabel);\nvar heightInput = document.createElement('input');\nheightInput.id = 'heightInput';\nheightInput.type = 'number';\nheightInput.max = 10;\nheightInput.min = 3;\nminesInput.step = 1;\nheightInput.value = gameSettings.height;\nheightInput.addEventListener('change', function (_ref3) {\n  var value = _ref3.target.value;\n  gameSettings.height = parseInt(value);\n  minesInput.max = gameSettings.width * gameSettings.height - 1;\n\n  if (parseInt(minesInput.value) >= minesInput.max) {\n    minesInput.value = minesInput.max;\n    gameSettings.mineCount = minesInput.max;\n  }\n});\nheightInputContainer.append(heightInput);\nsettingsElement.append(mineInputContainer);\nsettingsElement.append(widthInputContainer);\nsettingsElement.append(heightInputContainer);\nvar field = new _Field__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameSettings);\nresetButton.addEventListener('click', function () {\n  field.destroy();\n  field = new _Field__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameSettings);\n});\ndocument.addEventListener('contextmenu', function (event) {\n  return event.preventDefault();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });