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

/***/ "./src/httpGet.js":
/*!************************!*\
  !*** ./src/httpGet.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return httpGet; });\nfunction httpGet(url) {\n  return new Promise(function(resolve, reject) {\n    let request = new XMLHttpRequest();\n    request.open('GET', url, true);\n    request.onload = function() {\n      if (this.status == 200) {\n        resolve(this.response);\n      } else {\n        var error = new Error(this.statusText);\n        error.code = this.status;\n        reject(error);0\n      }\n    };\n\n    request.onerror = function() {\n      reject(new Error(\"Network Error\"));\n    };\n    request.send();\n  });\n}\n\n//# sourceURL=webpack:///./src/httpGet.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _startSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startSearch */ \"./src/startSearch.js\");\n\n\n\n\n// Variables for every part of html-page.\nconst header = `\n  <header>\n    <a href=\"#\"><img class=\"logo\" src=\"images/youtube_logo.png\" alt=\"youtube\"></img></a>\n    <i class=\"fas fa-search\"></i>\n    <form>\n      <input type=\"search\" name=\"youtubeSearch\" placeholder=\"What are you looking for?\">\n    </form>\n  </header>\n`;\n\nconst container = `\n  <div class=\"container\">\n  </div>\n`;\n\nconst videosWrapper = `\n  <main>\n    <section class=\"videosWrapper\">\n    </section>\n  </main>\n`;\n\n\n// Adding all variables into body.\n  \ndocument.body.innerHTML = container; \ndocument.querySelector('.container').innerHTML = header + videosWrapper;\n\n// Adding event on form submit.\n\nconst form = document.querySelector('form');\nform.addEventListener('submit', event => {\n  event.preventDefault();\n  Object(_startSearch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (`AIzaSyATlq2rGwHi9DIOIQBPtY7ALfU3r8vrCR0`);\n\n//# sourceURL=webpack:///./src/key.js?");

/***/ }),

/***/ "./src/startSearch.js":
/*!****************************!*\
  !*** ./src/startSearch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return startSearch; });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n/* harmony import */ var _httpGet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpGet */ \"./src/httpGet.js\");\n/* harmony import */ var _videoRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoRender */ \"./src/videoRender.js\");\n\n\n\n\n// Function starting after the form was submited.\nfunction startSearch(event) {\n  const searchQuery = document.getElementsByName(\"youtubeSearch\")[0].value;\n  const formatedQuery = encodeURIComponent(searchQuery);\n  const theUrl = `https://www.googleapis.com/youtube/v3/search?key=${_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}&type=video&part=snippet&maxResults=15&q=${formatedQuery}`;\n  Object(_httpGet__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(theUrl)\n    .then(response => {\n      const json = JSON.parse(response);\n      const ids = json.items.map(item => item.id.videoId);\n      const statsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}&id=${ids.join(',')}&part=statistics`;\n      Object(_httpGet__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(statsUrl)\n        .then(response => {\n          const json2 = JSON.parse(response);\n          const videos = json.items.map((item, key) => Object(_videoRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(json.items[key], json2.items[key].statistics));\n          document.querySelector('.videosWrapper').innerHTML = videos.join('');\n        });\n\n     });\n}; \n\n\n//# sourceURL=webpack:///./src/startSearch.js?");

/***/ }),

/***/ "./src/videoRender.js":
/*!****************************!*\
  !*** ./src/videoRender.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(item, stats) {\n    return `<article class=\"video\">    \n      <img class=\"thumb\" alt=\"video\" src=${item.snippet.thumbnails.medium.url}>\n      <div class=\"video-info\">\n        <a href=\"https://www.youtube.com/watch?v=${item.id.videoId}\"><h2>${item.snippet.title}</h2></a>\n        <p>${item.snippet.description}</p>\n        <div class=\"author\">\n          <i class=\"fas fa-user-circle\"></i>\n          <span>${item.snippet.channelTitle}</span>\n        </div>\n        <div class=\"date\">\n          <i class=\"far fa-calendar-alt\"></i>\n          <span>${item.snippet.publishedAt}</span>\n        </div>\n        <div>\n          <i class=\"fas fa-eye\"></i>\n          <span>${stats.viewCount}</span>\n        </div>\n        <div class=\"likes\">\n          <i class=\"far fa-thumbs-up\"></i><br>\n          <span>+ ${stats.likeCount}</span>\n        </div>\n        <div class=\"dislikes\">\n          <i class=\"far fa-thumbs-down\"></i><br>\n          <span>- ${stats.dislikeCount}</span>\n        </div>\n      </div>\n    </article> `;\n});\n\n\n//# sourceURL=webpack:///./src/videoRender.js?");

/***/ })

/******/ });