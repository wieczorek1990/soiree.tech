var Sequently;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				var descriptor = binding === 0 ? { enumerable: true, value: definition[i++] } : { enumerable: true, get: binding };
/******/ 				if(!__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, descriptor);
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sequence: function (functions, args) {
    let functionArgs;
    let functionPrimes = [];
    let incrementers = [];
    let primeIndex = 0;
    if (!Array.isArray(functions) || functions.length === 0) {
      return;
    }
    if (!Array.isArray(args)) {
      functionArgs = Array(functions.length).fill([]);
    } else {
      functionArgs = [];
      for (let i = 0; i < functions.length; i += 1) {
        if (Array.isArray(args[i])) {
          functionArgs.push(args[i]);
        } else {
          functionArgs.push([]);
        }
      }
    }
    for (let index = 0; index < functions.length; index += 1) {
      let incrementer = function () {
        primeIndex += 1;
        if (primeIndex < functionPrimes.length) {
          functionPrimes[primeIndex](incrementers[primeIndex]);
        }
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);

Sequently = __webpack_exports__;
/******/ })()
;