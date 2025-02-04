var Sequently;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sequence: function (functions, args) {
    let functionArgs;
    let functionPrimes = [];
    let incrementers = [];
    let primeIndex = 0;
    if (!Array.isArray(args)) {
      functionArgs = Array(functions.length).fill([]);
    } else {
      functionArgs = args;
    }
    for (let index = 0; index < functions.length; index += 1) {
      let incrementer = function () {
        primeIndex += 1;
        functionPrimes[primeIndex](incrementers[primeIndex]);
      };
      incrementers.push(incrementer);
      let functionPrime = function (callback) {
        if (functionArgs[primeIndex].length === 0) {
          functions[primeIndex](callback);
        } else {
          functions[primeIndex](functionArgs[primeIndex], callback);
        }
      };
      functionPrimes.push(functionPrime);
    }
    functionPrimes[0](incrementers[0], functionArgs[0]);
  }
});
Sequently = __webpack_exports__;
/******/ })()
;