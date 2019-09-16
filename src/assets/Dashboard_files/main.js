(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-head></app-head>\n<app-home></app-home>\n<app-footer></app-footer>\n<app-cmd></app-cmd>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/box/box.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/box/box.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"boxs zoomInDown animated draggedBox\" cdkDrag>\n\n        <div style=\"position: absolute\" class=\"handle\"  title=\"drag and drop this box.\" cdkDragHandle>\n                <svg width=\"24px\" fill=\"goldenrod\" viewBox=\"0 0 24 24\">\n                  <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n                  <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                </svg>\n        </div>\n\n\n<div class=\"imgBoxs\">\n   <a [href]=\"link\" target=\"_blank\"><img class=\"x-fluid boxImg\"  src=\"{{pic}}\"></a>\n</div>\n\n<div class=\"badgesBoxs\">\n\n<span class=\"badge badge-primary badges\">{{tags[0]}}</span>\n<span class=\"badge badge-success badges\">{{tags[1]}}</span>\n<span class=\"badge badge-warning badges\">{{tags[2]}}</span>\n\n</div>\n\n<div class=\"buttonsBoxs\">\n\n        <button id=\"refreshBtn\" (click)=\"refreshBox()\" title=\"Refresh this frame ?\"></button>\n\n</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmd/cmd.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmd/cmd.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n  <div id=\"cmd\" class=\"draggedBox\" cdkDrag>\n\n    <div style=\"position: absolute\" class=\"handle\"  title=\"drag and drop this box.\" cdkDragHandle>\n            <svg width=\"24px\" fill=\"goldenrod\" viewBox=\"0 0 24 24\">\n              <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n              <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            </svg>\n\n            \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/head/head.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/head/head.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n       \n      </div>\n      <div class=\"col-sm\">\n\n        \n        \n        <h1 class=\"bounce animated\" (click)=\"clockColors()\" id=\"appClock\"> {{displayHours}} : {{Clock | date: 'mm'}}\n            \n                <img style=\"width: 40px;height:auto;position: absolute; top: 20px; left: 20px;\" src=\"../../assets/sun.gif\" *ngIf=\"clockHour <= 16\">\n                <img style=\"width:40px;height:auto;position: absolute; top: 23px; left: 20px;\" src=\"../../assets/moon.gif\" *ngIf=\"clockHour >= 17\">\n        \n        </h1>\n        \n      </div>\n      <div class=\"col-sm\">\n        \n      </div>\n    </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main\">\n\n<img src=\"../../assets/octopus.gif\" id=\"animeElt\" title={{Quotes[0].quote}} />\n\n<img src=\"../../assets/rocket.gif\"  (click)=\"Boom()\" id=\"rocketEffect\"  />\n\n<img src=\"../../assets/cat.gif\" (click)=\"BoomCat()\"  id=\"catEffect\" />\n\n    <app-box class=\"boxs\" *ngFor=\"let box of Boxs; let i = index\"\n          \n          [index]=\"i\"\n\n          [title]=\"box.title\"\n\n          [link]=\"box.link\"\n\n          [id]=\"i\"\n          >\n\n    </app-box>\n\n\n <p id=\"quotesBox\"></p>\n    \n    \n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
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
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Dashboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./head/head.component */ "./src/app/head/head.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _box_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./box/box.component */ "./src/app/box/box.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ "./node_modules/@angular/common/locales/extra/fr.js");
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _cmd_cmd_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmd/cmd.component */ "./src/app/cmd/cmd.component.ts");















Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12___default.a, 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_13___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _head_head_component__WEBPACK_IMPORTED_MODULE_7__["HeadComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _box_box_component__WEBPACK_IMPORTED_MODULE_10__["BoxComponent"],
            _cmd_cmd_component__WEBPACK_IMPORTED_MODULE_14__["CmdComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]
        ],
        providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["appService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/box/box.component.scss":
/*!****************************************!*\
  !*** ./src/app/box/box.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".boxs {\n  height: 35vh;\n  width: 50vh;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border: solid;\n  box-shadow: 0px 0px 13px 7px #dbc3db;\n}\n\n.imgBoxs {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.boxImg {\n  max-width: 100%;\n  min-width: 100%;\n  width: 100%;\n  height: auto;\n  max-height: 100%;\n  min-height: 100%;\n}\n\n.badgesBoxs {\n  display: flex;\n  justify-content: space-around;\n}\n\n.badges {\n  height: 30px;\n  width: 20%;\n  text-align: center;\n  padding-top: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  font-size: 1.25vh;\n}\n\n#refreshBtn {\n  border-radius: 50%;\n  position: relative;\n  top: -34vh;\n  left: 94%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JldHJvL0dJVC9Bbmd1bGFyL0Rhc2hib2FyZC9zcmMvYXBwL2JveC9ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JveC9ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFHQSxvQ0FBQTtBQ0FKOztBREVBO0VBRUksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURJQTtFQUVJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFFSSxhQUFBO0VBQ0EsNkJBQUE7QUNISjs7QURPQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94c1xue1xuICAgIGhlaWdodDogMzV2aDtcbiAgICB3aWR0aDogNTB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDdweCByZ2JhKDIxOSwxOTUsMjE5LDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDdweCByZ2JhKDIxOSwxOTUsMjE5LDEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCA3cHggcmdiYSgyMTksMTk1LDIxOSwxKTtcbn1cbi5pbWdCb3hzXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuLmJveEltZ1xue1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmJhZGdlc0JveHNcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIFxufVxuXG4uYmFkZ2VzXG57XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yNXZoO1xufVxuXG4jcmVmcmVzaEJ0blxue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMzR2aDtcbiAgICBsZWZ0OiA5NCU7XG59IiwiLmJveHMge1xuICBoZWlnaHQ6IDM1dmg7XG4gIHdpZHRoOiA1MHZoO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXI6IHNvbGlkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTNweCA3cHggI2RiYzNkYjtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggN3B4ICNkYmMzZGI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCA3cHggI2RiYzNkYjtcbn1cblxuLmltZ0JveHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm94SW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5iYWRnZXNCb3hzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5iYWRnZXMge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG59XG5cbiNyZWZyZXNoQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTM0dmg7XG4gIGxlZnQ6IDk0JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/box/box.component.ts":
/*!**************************************!*\
  !*** ./src/app/box/box.component.ts ***!
  \**************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");



let BoxComponent = class BoxComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.boxs = this.appService.Boxs;
        this.pic = this.boxs[this.index].pic;
        this.title = this.boxs[this.index].title;
        this.link = this.boxs[this.index].link;
        this.tags = this.boxs[this.index].tags;
    }
    // Write the refresh function here
    refreshBox() {
        let randAudio = Math.floor(Math.random() * 7) + 1;
        let audioKey = String(randAudio);
        let audio = new Audio('../assets/' + audioKey + '.wav');
        audio.play();
        let element = document.getElementById(String(this.index));
        let randInt = Math.floor(Math.random() * this.boxs.length);
        while (this.title === this.boxs[randInt].title) {
            randInt = Math.floor(Math.random() * this.boxs.length);
        }
        element.classList.add("animated");
        if (randInt % 2 === 0) {
            element.classList.add("flipInX");
        }
        else {
            element.classList.add("flipInY");
        }
        this.title = this.boxs[randInt].title;
        this.link = this.boxs[randInt].link;
        this.pic = this.boxs[randInt].pic;
        this.tags = this.boxs[randInt].tags;
        setTimeout(function () {
            element.classList.remove('flipInX');
            element.classList.remove('flipInY');
        }, 2000);
    }
};
BoxComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["appService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "pic", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "tags", void 0);
BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/box/box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./box.component.scss */ "./src/app/box/box.component.scss")).default]
    })
], BoxComponent);



/***/ }),

/***/ "./src/app/cmd/cmd.component.scss":
/*!****************************************!*\
  !*** ./src/app/cmd/cmd.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#cmd {\n  min-height: 50vh;\n  position: absolute;\n  top: 0px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JldHJvL0dJVC9Bbmd1bGFyL0Rhc2hib2FyZC9zcmMvYXBwL2NtZC9jbWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NtZC9jbWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jbWQvY21kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NtZFxue1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG59IiwiI2NtZCB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cmd/cmd.component.ts":
/*!**************************************!*\
  !*** ./src/app/cmd/cmd.component.ts ***!
  \**************************************/
/*! exports provided: CmdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdComponent", function() { return CmdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CmdComponent = class CmdComponent {
    constructor() {
        document.body.onkeyup = function (e) {
            if (e.keyCode === 32) {
                let element = document.getElementById('cmd');
                let val = element.style.display;
                if (val === "" || val === "none") {
                    element.style.display = "block";
                }
                else {
                    element.style.display = "none";
                }
            }
            else {
                alert('nope');
            }
        };
    }
    ngOnInit() {
    }
};
CmdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cmd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cmd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmd/cmd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cmd.component.scss */ "./src/app/cmd/cmd.component.scss")).default]
    })
], CmdComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/head/head.component.scss":
/*!******************************************!*\
  !*** ./src/app/head/head.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#appClock {\n  position: relative;\n  top: -60px;\n  z-index: 100;\n  width: 100%;\n  height: 75%;\n  margin: 10% 0;\n  padding-top: 15%;\n  background: url('clock.gif') no-repeat center;\n  background-size: cover;\n  border-radius: 50%/10%;\n  border-style: dashed solid;\n  color: white;\n  text-align: center;\n  font-family: \"Press Start 2P\", cursive;\n  font-size: 20px;\n  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #56b6ae, 0 0 30px #56b8b8, 0 0 40px #5bb4b8;\n  box-shadow: 0px 4px 2px 4.3px #696469;\n}\n\n#appClock:hover {\n  font-size: 25px;\n  cursor: pointer;\n  padding-top: 13.3%;\n}\n\n#astro {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 7.5px 7.5px 0 0 red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JldHJvL0dJVC9Bbmd1bGFyL0Rhc2hib2FyZC9zcmMvYXBwL2hlYWQvaGVhZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZC9oZWFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSw4RkFBQTtFQUNBLHFDQUFBO0FDQUo7O0FEUUE7RUFFRyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTkg7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2hlYWQvaGVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcHBDbG9ja1xue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02MHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBtYXJnaW46IDEwJSAwO1xuICAgIHBhZGRpbmctdG9wOiAxNSU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9jbG9jay5naWYpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgLyAxMCU7XG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQgc29saWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDIwcHggIzU2YjZhZSwgMCAwIDMwcHggIzU2YjhiOCwgMCAwIDQwcHggIzViYjRiODtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDJweCA0LjNweCByZ2JhKDEwNSwxMDAsMTA1LDEpO1xuXG4gICAgXG4gICAgXG5cbiAgICBcbn1cblxuI2FwcENsb2NrOmhvdmVyXG57XG4gICBmb250LXNpemU6IDI1cHg7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBwYWRkaW5nLXRvcDogMTMuMyU7XG4gICAgXG59XG5cbiNhc3RybyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiA3LjVweCA3LjVweCAwIDAgcmVkO1xuICAgIFxuICB9XG4iLCIjYXBwQ2xvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTYwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzUlO1xuICBtYXJnaW46IDEwJSAwO1xuICBwYWRkaW5nLXRvcDogMTUlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Nsb2NrLmdpZikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlLzEwJTtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQgc29saWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQcmVzcyBTdGFydCAyUFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICM1NmI2YWUsIDAgMCAzMHB4ICM1NmI4YjgsIDAgMCA0MHB4ICM1YmI0Yjg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMnB4IDQuM3B4ICM2OTY0Njk7XG59XG5cbiNhcHBDbG9jazpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMTMuMyU7XG59XG5cbiNhc3RybyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogNy41cHggNy41cHggMCAwIHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/head/head.component.ts":
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeadComponent = class HeadComponent {
    constructor() {
        this.Clock = new Date();
        this.clockHour = this.Clock.getHours();
        this.clockMinute = this.Clock.getMinutes();
        this.displayHours = "0";
        this.Clock = new Date();
        this.clockHour = this.Clock.getUTCHours() + 2;
        this.clockMinute = this.Clock.getMinutes();
        if (this.clockHour < 10) {
            this.displayHours = "0" + String(this.clockHour);
        }
        if (this.clockHour === 24) {
            this.displayHours = "0" + String("0");
        }
        if (this.clockHour === 25) {
            this.displayHours = "0" + String("1");
        }
        else {
            this.displayHours = String(this.clockHour);
        }
        setInterval(() => {
            this.Clock = new Date();
            this.clockHour = this.Clock.getUTCHours() + 2;
            this.clockMinute = this.Clock.getMinutes();
            if (this.clockHour < 10) {
                this.displayHours = "0" + String(this.clockHour);
            }
            if (this.clockHour === 24) {
                this.displayHours = "0" + String("0");
            }
            if (this.clockHour === 25) {
                this.displayHours = "0" + String("1");
            }
            else {
                this.displayHours = String(this.clockHour);
            }
            document.getElementById('appClock').textContent = String(this.clockHour) + " : " + String(this.clockMinute);
        }, 10000);
    }
    ngOnInit() {
    }
    clockColors() {
        let randAudio = Math.floor(Math.random() * 7) + 1;
        let audioKey = String(randAudio);
        let audio = new Audio('../assets/' + audioKey + '.wav');
        audio.play();
        let colors = ["#e83a43", "#4cc5ed", "#f2e572", "#4f4d4d", "hotpink"];
        function randomColor(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let random = randomColor(colors.length);
        random = randomColor(colors.length);
        document.getElementById('appClock').style.color = colors[random];
        document.getElementById('appClock').style.boxShadow = " 0px 4px 2px 4.3px " + colors[random];
        document.getElementById('appClock').classList.remove("bounce");
        document.getElementById('appClock').classList.add("shake");
        setTimeout(function () {
            document.getElementById('appClock').classList.remove("shake");
        }, 2000);
    }
};
HeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-head',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./head.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/head/head.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./head.component.scss */ "./src/app/head/head.component.scss")).default]
    })
], HeadComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main {\n  height: 77vh;\n  width: 100%;\n  margin: 0px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  z-index: 50;\n}\n\n#quotesBox {\n  position: absolute;\n  top: 95%;\n  font-style: italic;\n  font-family: \"Playfair Display\", serif;\n  text-align: center;\n  font-size: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JldHJvL0dJVC9Bbmd1bGFyL0Rhc2hib2FyZC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluXG57XG4gICAgaGVpZ2h0OiA3N3ZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHotaW5kZXg6IDUwO1xufVxuXG4jcXVvdGVzQm94XG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTUlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuXG59IiwiI21haW4ge1xuICBoZWlnaHQ6IDc3dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgei1pbmRleDogNTA7XG59XG5cbiNxdW90ZXNCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTUlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");



let HomeComponent = class HomeComponent {
    constructor(appService) {
        this.appService = appService;
        this.Boxs = [
            {
                id: "1",
                title: "Un titre 1",
                link: "Un lien 1"
            },
            {
                id: "2",
                title: "Un titre 2",
                link: "Un lien 2"
            },
            {
                id: "3",
                title: "Un titre 3",
                link: " Un lien 3"
            },
            {
                id: "4",
                title: "Un titre 4",
                link: "Un lien 4"
            },
            {
                id: "5",
                title: "Un titre 5",
                link: "Un lien 5"
            },
            {
                id: "6",
                title: "Un titre 6",
                link: " Un lien 6"
            }
        ];
        this.Quotes = appService.Quotes;
        this.Jokes = appService.Jokes;
        this.Score = 0;
        setInterval(() => {
            let randInt = Math.floor(Math.random() * this.Quotes.length);
            let element = document.getElementById("quotesBox");
            while (element.textContent === this.Quotes[randInt].quote) {
                randInt = Math.floor(Math.random() * this.Quotes.length);
            }
            let animKeys = ["wooble", "flip", "rotateIn", "zoomIn", "rollIn"];
            let colorKeys = ["#acd1f9", "yellow", "white", "cornsilk"];
            let randomKey = Math.floor(Math.random() * animKeys.length);
            element.style.color = colorKeys[randomKey];
            element.textContent = this.Quotes[randInt].quote;
            element.classList.add("animated");
            element.classList.add(animKeys[randomKey]);
            setTimeout(function () {
                element.classList.remove(animKeys[randomKey]);
                element.classList.add("hinge");
            }, 11000);
        }, 14000);
        setInterval(() => {
            let randInt = Math.floor(Math.random() * this.Jokes.length);
            document.getElementById("animeElt").setAttribute("title", this.Jokes[randInt].joke);
            let element = document.getElementById('catEffect');
        }, 10000);
        setInterval(function () {
            let element = document.getElementById('catEffect');
            if (element.style.display === "block") {
                element.style.display = "none";
            }
            else {
                element.style.display = "block";
            }
        }, 10000);
    }
    ngOnInit() {
    }
    Boom() {
        let element = document.getElementById('rocketEffect');
        this.Score = this.Score + 10;
        console.log("rocket destroyed ");
        document.getElementById('appClock').textContent = String(this.Score);
        let audio = new Audio('../assets/boom.mp3');
        audio.play();
        element.setAttribute('src', '../../assets/boom.gif');
        setTimeout(function () {
            element.style.display = "none";
            setTimeout(function () {
                element.style.display = "block";
                element.setAttribute('src', '../../assets/rocket.gif');
            }, 7000);
        }, 2000);
    }
    BoomCat() {
        let element = document.getElementById('catEffect');
        this.Score = this.Score + 100;
        console.log("cat destroyed ");
        document.getElementById('appClock').textContent = String(this.Score);
        let audio = new Audio('../assets/boom.mp3');
        audio.play();
        element.setAttribute('src', '../../assets/boom.gif');
        setTimeout(function () {
            setTimeout(function () {
                element.setAttribute('src', '../../assets/cat.gif');
            }, 1550);
        }, 2000);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["appService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: appService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appService", function() { return appService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class appService {
    constructor() {
        this.Boxs = [
            {
                id: "1",
                title: "Explore Github",
                link: "https://www.github.com",
                tags: ["Free", "DevTools", "ShareCode"],
                pic: "../../assets/git.jpg"
            },
            {
                id: "2",
                title: "Google",
                link: "https://www.google.com",
                tags: ["BigBrother", "Free", "Search"],
                pic: "../../assets/google.png"
            },
            {
                id: "3",
                title: "Netlify",
                link: "https://www.netlify.com",
                tags: ["Hosting", "Free", "BeCode"],
                pic: "../../assets/netlify.png"
            },
            {
                id: "4",
                title: "YouTube",
                link: "https://www.youtube.com/watch?v=RJB74-q67Ho",
                tags: ["Free", "Video", "Music"],
                pic: "../../assets/youtube.png"
            },
            {
                id: "5",
                title: "Heroku",
                link: "https://www.heroku.com",
                tags: ["Hosting", "Free", "BeCode"],
                pic: "../../assets/heroku.png"
            },
            {
                id: "6",
                title: "Facebook",
                link: "https://www.facebook.com/",
                tags: ["BigBrother", "Social Network", "Free"],
                pic: "../../assets/facebook.png"
            },
            {
                id: "7",
                title: "Leaflet",
                link: " https://www.leafletjs.com",
                tags: ["Mapping", "API", "Free"],
                pic: "../../assets/leaflet.png"
            }
        ];
        this.Quotes = [
            {
                quote: "I have NOT lost my mind—I have it backed up on tape somewhere."
            },
            {
                quote: "There is no place like 127.0.0.1"
            },
            {
                quote: "On the Internet, nobody knows you’re a dog."
            },
            {
                quote: "Software is like sex: It’s better when it’s free."
            },
            {
                quote: "People don't care about what you say, they care about what you build."
            },
            {
                quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships"
            },
            {
                quote: "First, solve the problem.Then write the code. "
            },
            {
                quote: "Developer is an organism that turns coffee into code."
            },
        ];
        this.Jokes = [
            {
                joke: "Chuck Norris can take a screenshot of his blue screen."
            },
            {
                joke: "Three Database SQL walked into a NoSQL bar. A little while later, they walked out because they couldn' find a table."
            },
            {
                joke: "['Hip, Hip'] Array !"
            },
            {
                joke: "There are three kinds of lies: Lies, damned lies, and benchmarks."
            },
            {
                joke: "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds."
            }
        ];
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/retro/GIT/Angular/Dashboard/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /home/retro/GIT/Angular/Dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map