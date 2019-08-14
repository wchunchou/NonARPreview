(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./package.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.tsx": "./code/App.tsx",
	"./Appdam.tsx": "./code/Appdam.tsx",
	"./Rotatebox.tsx": "./code/Rotatebox.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNFO0FBQ3RFLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDbkQsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQ3hCLDZEQUE2RCxDQUNoRSxDQUFBO0FBQ0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEtBQUssQ0FDL0Isb0VBQW9FLENBQ3ZFLENBQUE7QUFDRCxNQUFNLGlCQUFpQixHQUFHLElBQUksS0FBSyxDQUMvQixvRUFBb0UsQ0FDdkUsQ0FBQTtBQUVELE1BQU0sU0FBUyxHQUFHLGFBQUksQ0FBQztJQUNuQixPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQyxDQUFBO0FBQ0YsTUFBTSxXQUFXLEdBQUcsYUFBSSxDQUFDO0lBQ3JCLEtBQUssRUFBRSxDQUFDO0lBQ1IsT0FBTyxFQUFFLENBQUM7Q0FDYixDQUFDLENBQUE7QUFDRixNQUFNLGFBQWEsR0FBRyxhQUFJLENBQUM7SUFDdkIsS0FBSyxFQUFFLENBQUM7Q0FDWCxDQUFDLENBQUE7QUFFRixNQUFNLFdBQVcsR0FBRyxhQUFJLENBQUM7SUFDckIsS0FBSyxFQUFFLENBQUM7SUFDUixPQUFPLEVBQUUsQ0FBQztDQUNiLENBQUMsQ0FBQTtBQUVGLE1BQU0sWUFBWSxHQUFHLGFBQUksQ0FBQztJQUN0QixLQUFLLEVBQUUsQ0FBQztJQUNSLE9BQU8sRUFBRSxDQUFDO0NBQ2IsQ0FBQyxDQUFBO0FBRUYsTUFBTSxXQUFXLEdBQUcsYUFBSSxDQUFDO0lBQ3JCLEtBQUssRUFBRSxDQUFDO0lBQ1IsT0FBTyxFQUFFLENBQUM7Q0FDYixDQUFDLENBQUE7QUFFRixNQUFNLFlBQVksR0FBRyxhQUFJLENBQUM7SUFDdEIsS0FBSyxFQUFFLENBQUM7SUFDUixPQUFPLEVBQUUsQ0FBQztD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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const soundClick = new Audio("../sounds/click.m4a");
const soundIntro = new Audio("https://floydesk.com/wp-content/uploads/2019/08/intro01.wav");
const soundTextBubble01 = new Audio("https://floydesk.com/wp-content/uploads/2019/08/riverjourney01.wav");
const soundTextBubble02 = new Audio("https://floydesk.com/wp-content/uploads/2019/08/riverjourney02.wav");
const cloudData = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
const rainBtndata = framer_1.Data({
    scale: 1,
    opacity: 1,
});
const mainFrameData = framer_1.Data({
    scale: 1,
});
const nextBtnData = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const sedimentData = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const buildDamBtn = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const textBubble01 = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const textBubble02 = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const rainData = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const btnSediment = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const landImage2 = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const loadingcover = framer_1.Data({
    scale: 1,
    opacity: 0,
});
const startBtnData = framer_1.Data({
    opacity: 0,
});
// btns
exports.EnlargeBtn = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        onTap() {
            window["__checkBudget__"]();
            mainFrameData.scale = mainFrameData.scale + 0.2;
        },
    };
};
exports.ShrinkBtn = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        onTap() {
            window["__checkBudget__"]();
            mainFrameData.scale = mainFrameData.scale - 0.2;
            soundClick.play();
        },
    };
};
exports.btnOverride = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        onTap() {
            window["__checkBudget__"]();
            rainBtndata.opacity = 0;
            cloudData.opacity = 1;
            soundTextBubble01.play();
            setTimeout(() => (textBubble01.opacity = 1), 500);
            setTimeout(() => (rainData.opacity = 1), 1000);
            setTimeout(() => (landImage2.opacity = 1), 2000);
            setTimeout(() => (nextBtnData.opacity = 1), 3000);
        },
        animate: {
            opacity: rainBtndata.opacity,
        },
    };
};
exports.nextBtnOverride = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        animate: { opacity: nextBtnData.opacity },
        onTap() {
            window["__checkBudget__"]();
            rainData.opacity = 0;
            cloudData.opacity = 0;
            nextBtnData.opacity = 0;
            textBubble01.opacity = 0;
            soundTextBubble01.pause();
            setTimeout(() => (btnSediment.opacity = 1), 500);
        },
    };
};
exports.btnSedimentOverride = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        onTap() {
            window["__checkBudget__"]();
            btnSediment.opacity = 0;
            textBubble02.opacity = 1;
            soundTextBubble02.play();
            sedimentData.opacity = 1;
            setTimeout(() => (buildDamBtn.opacity = 1), 3000);
        },
        animate: {
            opacity: btnSediment.opacity,
        },
    };
};
exports.buildDamBtnOverride = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        onTap() {
            window["__checkBudget__"]();
            soundTextBubble02.pause();
        },
        animate: { opacity: buildDamBtn.opacity },
    };
};
// elements
exports.CloudOverride = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: cloudData.opacity },
    };
};
exports.landScaler = () => {
    window["__checkBudget__"]();
    return {
        animate: { scale: mainFrameData.scale },
    };
};
exports.sedimentOverride = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: sedimentData.opacity },
    };
};
exports.textBubble01Override = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: textBubble01.opacity },
    };
};
exports.textBubble02Override = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: textBubble02.opacity },
    };
};
exports.rainOverride = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: rainData.opacity },
    };
};
exports.land2Override = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: landImage2.opacity },
        transition: { duration: 5 },
    };
};
exports.loadingOverride = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: loadingcover.opacity },
        transition: { duration: 1 },
    };
};
//====== intro
exports.introOverride = () => {
    window["__checkBudget__"]();
    return {
        componentDidMount() {
            window["__checkBudget__"]();
            setTimeout(() => (startBtnData.opacity = 1), 5000);
            soundIntro.play();
        },
    };
};
exports.startBtnOverride = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: startBtnData.opacity },
    };
};
exports.__info__ = [{ "name": "EnlargeBtn", "type": "override" }, { "name": "ShrinkBtn", "type": "override" }, { "name": "btnOverride", "type": "override" }, { "name": "nextBtnOverride", "type": "override" }, { "name": "btnSedimentOverride", "type": "override" }, { "name": "buildDamBtnOverride", "type": "override" }, { "name": "CloudOverride", "type": "override" }, { "name": "landScaler", "type": "override" }, { "name": "sedimentOverride", "type": "override" }, { "name": "textBubble01Override", "type": "override" }, { "name": "textBubble02Override", "type": "override" }, { "name": "rainOverride", "type": "override" }, { "name": "land2Override", "type": "override" }, { "name": "loadingOverride", "type": "override" }, { "name": "introOverride", "type": "override" }, { "name": "startBtnOverride", "type": "override" }];


/***/ }),

/***/ "./code/Appdam.tsx":
/*!*************************!*\
  !*** ./code/Appdam.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwZGFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHBkYW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNFO0FBRXRFLE1BQU0sU0FBUyxHQUFHLGFBQUksQ0FBQztJQUNuQixPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQyxDQUFBO0FBQ0YsTUFBTSxVQUFVLEdBQUcsYUFBSSxDQUFDO0lBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ1YsTUFBTSxFQUFFLENBQUM7Q0FDWixDQUFDLENBQUE7QUFDRixNQUFNLFVBQVUsR0FBRyxhQUFJLENBQUM7SUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUMsQ0FBQTtBQUNGLE1BQU0sZUFBZSxHQUFHLGFBQUksQ0FBQztJQUN6QixPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQyxDQUFBO0FBQ0YsTUFBTSxlQUFlLEdBQUcsYUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxDQUFDO0lBQ1YsTUFBTSxFQUFFLENBQUM7Q0FDWixDQUFDLENBQUE7QUFDRixNQUFNLFdBQVcsR0FBRyxhQUFJLENBQUM7SUFDckIsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUMsQ0FBQTtBQUNGLE1BQU0sY0FBYyxHQUFHLGFBQUksQ0FBQztJQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQyxDQUFBO0FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxhQUFJLENBQUM7SUFDMUIsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUMsQ0FBQTtBQUVXLFFBQUEsY0FBYyxHQUFhLEdBQUcsRUFBRTs7SUFDekMsT0FBTztRQUNILFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDMUIsS0FBSzs7WUFDRCxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtZQUN0QixlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtZQUMzQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3BELGNBQWM7WUFDZCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDekQ7UUFDRCxPQUFPLEVBQUU7WUFDTCxPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU87U0FDOUI7S0FDSixDQUFBO0NBQ0osQ0FBQTtBQUNZLFFBQUEsZUFBZSxHQUFhLEdBQUcsRUFBRTs7SUFDMUMsT0FBTztRQUNILFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDMUIsS0FBSzs7WUFDRCxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtZQUN0QixVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtZQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQy9DLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDckQsY0FBYztZQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDcEQ7UUFDRCxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRTtLQUM1QyxDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFhLEdBQUcsRUFBRTs7SUFDekMsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFO0tBRTNDLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxhQUFhLEdBQWEsR0FBRyxFQUFFOztJQUN4QyxPQUFPO1FBQ0gsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUU7S0FFMUMsQ0FBQTtDQUNKLENBQUE7QUFDWSxRQUFBLG1CQUFtQixHQUFhLEdBQUcsRUFBRTs7SUFDOUMsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFO0tBQ2hELENBQUE7Q0FDSixDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const dataLand3 = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
const dataDamImg = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
const dataBtnDam = framer_1.Data({
    opacity: 1,
    rotate: 0,
});
const dataTextBubble1 = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
const dataTextBubble2 = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
const dataBtnNext = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
const dataOverlapImg = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
const dataBtnFreeRiver = framer_1.Data({
    opacity: 0,
    rotate: 0,
});
exports.btnDamOverride = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        onTap() {
            window["__checkBudget__"]();
            dataBtnDam.opacity = 0;
            dataTextBubble1.opacity = 1;
            setTimeout(() => (dataOverlapImg.opacity = 1), 1000);
            //play audio 1
            setTimeout(() => (dataBtnFreeRiver.opacity = 1), 5000);
        },
        animate: {
            opacity: dataBtnDam.opacity,
        },
    };
};
exports.btnNextOverride = () => {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 1.1 },
        onTap() {
            window["__checkBudget__"]();
            dataBtnDam.opacity = 0;
            dataDamImg.opacity = 1;
            setTimeout(() => (dataLand3.opacity = 1), 2000);
            setTimeout(() => (dataTextBubble1.opacity = 1), 3000);
            //play audio 1
            setTimeout(() => (dataBtnNext.opacity = 1), 5000);
        },
        animate: { opacity: dataBtnNext.opacity },
    };
};
exports.damImgOverride = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: dataDamImg.opacity },
    };
};
exports.land3Override = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: dataLand3.opacity },
    };
};
exports.textBubble1Override = () => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: dataTextBubble1.opacity },
    };
};
exports.__info__ = [{ "name": "btnDamOverride", "type": "override" }, { "name": "btnNextOverride", "type": "override" }, { "name": "damImgOverride", "type": "override" }, { "name": "land3Override", "type": "override" }, { "name": "textBubble1Override", "type": "override" }];


/***/ }),

/***/ "./code/Rotatebox.tsx":
/*!****************************!*\
  !*** ./code/Rotatebox.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm90YXRlYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Sb3RhdGVib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLG1DQUE4QjtBQUU5QixTQUFnQixTQUFTOztJQUNyQixPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUNGLFVBQVUsRUFBRSxTQUFTLEVBQ3JCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDdkIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUN2QixLQUFLLEVBQUMsUUFBUSxFQUNkLE1BQU0sRUFBQyxPQUFPO1FBRWQsb0JBQUMsY0FBSyxJQUNGLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFDeEIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQzNDLElBQUksRUFBRSxHQUFHLEVBQ1QsVUFBVSxFQUFFLE1BQU0sRUFDbEIsTUFBTSxFQUFFLEVBQUUsRUFDVixNQUFNLFNBQ1IsQ0FDRSxDQUNYLENBQUE7Q0FDSjtBQW5CRCw4QkFtQkM7QUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function RotateBox() {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { background: "#000000", initial: { opacity: 1 }, animate: { opacity: 0 }, width: "1024px", height: "768px" },
        React.createElement(framer_1.Frame, { animate: { rotate: 360 }, transition: { duration: 1, loop: Infinity }, size: 100, background: "#fff", radius: 30, center: true })));
}
exports.RotateBox = RotateBox;
const rootElement = document.getElementById("root");
exports.__info__ = [{ "name": "RotateBox", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.17","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.4.0","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/asci.animate"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/asci.animate */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/asci.animate/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/asci.animate"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^1.0"},"peerDependencies":{"framer":"^1.0","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"52e18e1f-93c4-4dcb-89be-7bced415173d","displayName":"Animate"},"author":"Artem Riasnianskyi","name":"@framer/asci.animate","version":"1.10.0","dependencies":{}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/benjamin.icon-generator"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/benjamin.icon-generator */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/benjamin.icon-generator/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/benjamin.icon-generator"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@framer/framer.device-hand-iphone-1":"^1.0.0","@framer/framer.device-skin-apple-iphone-x-silver":"^1.0.0","@types/react":"^16.8.23"},"peerDependencies":{"framer":"^0.10.0 || ^1","react":"^16.8.0","react-dom":"^16.8.0"},"framer":{"id":"f5829b53-b134-4faf-be07-21309a916749","displayName":"Icon Generator"},"author":"Benjamin den Boer","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.4","@fortawesome/free-regular-svg-icons":"^5.3.1","@fortawesome/react-fontawesome":"^0.1.2","@material-ui/core":"^4.2.1","feather-icons":"^4.21.0","react-feather":"^2.0.3","webfontloader":"^1.6.28"},"keywords":["icons","icon","feather","material","fontawesome","svg"],"name":"@framer/benjamin.icon-generator","version":"1.15.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/colebemis.feather-icons"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/colebemis.feather-icons */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/colebemis.feather-icons/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/colebemis.feather-icons"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"build/index.js","dependencies":{"@types/react":"^16.0.31","framer":"^0.1.8","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"67145086-fa6f-4829-89df-18c63625cc59","displayName":"Feather Icons"},"author":"Cole Bemis","license":"MIT","name":"@framer/colebemis.feather-icons","version":"1.2.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/framer.examples"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.examples */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.examples/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.examples"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^0.7.11 || ^1","react":"^16.8"},"name":"@framer/framer.examples","author":"Framer","version":"1.7.0","license":"MIT","framer":{"id":"d52e8201-9936-42d9-8208-5c36c6f0e1bc","displayName":"Example Kit"},"keywords":["interactive","examples","ios","kit","apple","ui"]}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/gusso.magic-move"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/gusso.magic-move */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/gusso.magic-move/dist/index.js")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"312dcc85-8f45-492d-acf6-0c6d39046726","displayName":"Magic Move"},"author":"Henrique Gusso","name":"@framer/gusso.magic-move","version":"3.3.0","dependencies":{}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/gusso.scale"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/gusso.scale */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/gusso.scale/dist/index.js")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"0d34ff21-7c2d-4746-b157-f910fe3e30be","displayName":"Scale"},"author":"Henrique Gusso","name":"@framer/gusso.scale","version":"1.1.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/ismael.google-maps"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/ismael.google-maps */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/ismael.google-maps/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/ismael.google-maps"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8","framer":"^1.0"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"cf50f147-14e5-4f9a-ab08-afe80b6dcb35","displayName":"Google Maps"},"author":"Ismael Martínez","name":"@framer/ismael.google-maps","version":"2.1.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/marshallswain.progress-circles"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/marshallswain.progress-circles */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/marshallswain.progress-circles/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/marshallswain.progress-circles"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.10.1"},"peerDependencies":{"framer":"^0.10.1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"1a74f0a4-654e-49db-834f-14662b4103da","displayName":"Progress Circles"},"author":"Marshall Thompson","name":"@framer/marshallswain.progress-circles","version":"1.2.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/ruucm-h.audio"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/ruucm-h.audio */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/ruucm-h.audio/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/ruucm-h.audio"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"92ac570e-4ffa-430f-aa94-f1182e975a52","displayName":"Audio"},"author":". ruucm","dependencies":{"@framer/ruucm-h.html-video":"^1.1.0"},"name":"@framer/ruucm-h.audio","version":"1.3.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"93090961-0a19-4ea2-ad03-210bc9c69253\"},\"author\":\"Weichun Chou\",\"dependencies\":{\"@framer/asci.animate\":\"^1.10.0\",\"@framer/benjamin.icon-generator\":\"^1.15.0\",\"@framer/colebemis.feather-icons\":\"^1.2.0\",\"@framer/framer.examples\":\"^1.7.0\",\"@framer/gusso.magic-move\":\"^3.3.0\",\"@framer/gusso.scale\":\"^1.1.0\",\"@framer/ismael.google-maps\":\"^2.1.0\",\"@framer/marshallswain.progress-circles\":\"^1.2.0\",\"@framer/ruucm-h.audio\":\"^1.3.0\",\"react-dom\":\"^16.8.6\",\"styled-components\":\"^4.3.2\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});