webpackJsonp([1,4],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 114;


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(130);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(beService) {
        this.beService = beService;
        this.title = 'COOPERATIVE EDITOR';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.beService.connect();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(208),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* BEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* BEService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_page_login_page_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__room_room_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ace_editor__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ace_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_ace_editor__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Shared folder



// Ace editor

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__room_room_component__["a" /* RoomComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_ace_editor__["AceEditorModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* appRoutes */])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_page_login_page_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_room_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });


var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_login_page_login_page_component__["a" /* LoginPageComponent */],
    },
    {
        path: 'rooms/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__room_room_component__["a" /* RoomComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BEService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BEService = (function () {
    function BEService() {
        this.chatMessagesSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.user$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({
            nick: null,
            room: null
        });
        this.file$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.output$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.outputError$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.chatMessages$ = this.chatMessagesSubject.asObservable();
    }
    BEService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(':3000');
        this.listenForNewcomers();
        this.listenForFileUpdates();
        this.listenForOutput();
        this.listenForChatMessages();
        this.listenForInitialChatMessages();
    };
    BEService.prototype.listenForNewcomers = function () {
        this.socket.on('Someone has been joined to the room', function (info) {
            // TODO: Handle another newcomers
        });
    };
    BEService.prototype.listenForFileUpdates = function () {
        var _this = this;
        this.socket.on('Someone update file', function (file) {
            _this.file$.next(file);
        });
    };
    BEService.prototype.listenForOutput = function () {
        var _this = this;
        this.socket.on('Script run finished', function (output, error) {
            error ? _this.outputError$.next(error) : _this.output$.next(output);
        });
    };
    BEService.prototype.listenForChatMessages = function () {
        var _this = this;
        this.socket.on('New chat message', function (from, message) {
            _this.chatMessagesSubject.next({ from: from, message: message });
        });
    };
    BEService.prototype.listenForInitialChatMessages = function () {
        var _this = this;
        this.socket.on('Initial chat messages', function (messages) {
            messages.forEach(function (message) {
                _this.chatMessagesSubject.next(message);
            });
        });
    };
    BEService.prototype.updateFile = function (file, room) {
        this.socket.emit('File update', { file: file, room: room });
    };
    BEService.prototype.joinRoom = function (info) {
        this.socket.emit('Request for joining room', info);
        this.logIn(info);
    };
    BEService.prototype.logIn = function (user) {
        this.user$.next(user);
    };
    BEService.prototype.isLogin = function () {
        return this.user$.getValue().nick;
    };
    BEService.prototype.leaveRoom = function () {
        this.socket.emit('User leave room');
    };
    BEService.prototype.fileSave = function (file, room) {
        this.socket.emit('File save', { file: file, room: room });
    };
    BEService.prototype.getEditorValue = function (room) {
        this.socket.emit('Request for editor value', room);
    };
    BEService.prototype.runScript = function (script, room) {
        this.socket.emit('Request for running script', script, room);
    };
    BEService.prototype.sendMessage = function (message, from, room) {
        this.socket.emit('Send chat message', message, from, room);
    };
    BEService.prototype.getChatMessages = function (room) {
        this.socket.emit('Request for chat messages', room);
    };
    return BEService;
}());
BEService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BEService);

//# sourceMappingURL=be.service.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperService = (function () {
    function HelperService() {
    }
    return HelperService;
}());
HelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HelperService);

//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouterService = (function () {
    function RouterService(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    RouterService.prototype.navigateToRoom = function (room) {
        this.router.navigate(['/rooms', room]);
    };
    RouterService.prototype.navigateToLogin = function () {
        this.router.navigate(['/']);
    };
    return RouterService;
}());
RouterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], RouterService);

var _a, _b;
//# sourceMappingURL=router.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1____["a" /* BEService */],
            __WEBPACK_IMPORTED_MODULE_1____["b" /* RouterService */],
            __WEBPACK_IMPORTED_MODULE_1____["c" /* HelperService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".mainContainer {\n  height: 100vh;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .mainContainer .header {\n    height: 12%;\n    font-family: \"Amatic SC\", cursive;\n    font-size: 40px;\n    text-align: center;\n    padding: 20px;\n    background: #512DA8;\n    color: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ":host {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%; }\n\n.loginForm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%; }\n  .loginForm input {\n    width: 300px;\n    padding: 10px; }\n    .loginForm input:not(:first-child) {\n      margin-top: 50px; }\n    .loginForm input:not(:last-child) {\n      border-bottom: 1px solid gray; }\n  .loginForm .joinButton {\n    width: 150px;\n    color: white;\n    background-color: rgba(85, 139, 47, 0.8); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ":host {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  max-height: 88%; }\n\n.roomsContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  -ms-flex-line-pack: start;\n      align-content: flex-start; }\n  .roomsContainer .editor {\n    height: 70%;\n    max-height: 70%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 75%;\n            flex: 1 0 75%; }\n  .roomsContainer .chat {\n    height: 70%;\n    max-height: 70%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 25%;\n            flex: 1 0 25%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .roomsContainer .chat .profile {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 10%;\n              flex: 1 0 10%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background-color: #272822;\n      box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);\n      color: white; }\n    .roomsContainer .chat .messages {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 84%;\n              flex: 1 0 84%;\n      max-height: 84%;\n      background: rgba(85, 139, 47, 0.3);\n      box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n      background: white;\n      overflow-y: scroll;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      overflow-wrap: break-word;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start; }\n      .roomsContainer .chat .messages .message {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 100%;\n                flex: 1 0 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n        .roomsContainer .chat .messages .message .from {\n          margin: 5px;\n          color: gray; }\n        .roomsContainer .chat .messages .message .messageContent {\n          padding: 3px 3px;\n          background: rgba(102, 217, 239, 0.7);\n          padding: 10px 10px;\n          word-break: break-all;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-ordinal-group: 2;\n              -ms-flex-order: 1;\n                  order: 1; }\n        .roomsContainer .chat .messages .message.right .from {\n          -ms-flex-item-align: end;\n              align-self: flex-end; }\n    .roomsContainer .chat .messageInput {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 6%;\n              flex: 1 0 6%; }\n  .roomsContainer .outputHeader {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    height: 3%;\n    color: white;\n    background: #512DA8;\n    padding: 1% 10px; }\n    .roomsContainer .outputHeader .runButton {\n      border-left: 1px solid white;\n      cursor: pointer;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n      .roomsContainer .outputHeader .runButton .material-icons {\n        font-size: 12px; }\n  .roomsContainer .output {\n    width: 100%;\n    height: 24.5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer\">\r\n    <div class=\"header\">{{title}}</div>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<form \r\n    class=\"loginForm\" \r\n    (ngSubmit)=\"onSubmit(nick.value, room.value)\">\r\n    <input \r\n        #nick\r\n        class=\"nickname\" \r\n        type=\"text\" \r\n        placeholder=\"Nickname\"\r\n        maxlength=\"15\"/>\r\n    <input \r\n        #room\r\n        class=\"room\" \r\n        type=\"text\" \r\n        placeholder=\"Room\"\r\n        maxlength=\"15\"/>\r\n    <input \r\n        class=\"joinButton\" \r\n        type=\"submit\"\r\n        value=\"Join!\">\r\n</form>\r\n"

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_be_be_service__ = __webpack_require__(126);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services_be_be_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_router_router_service__ = __webpack_require__(128);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__services_router_router_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__ = __webpack_require__(127);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"roomsContainer\">\r\n  <ace-editor\r\n      #editor\r\n      class=\"editor\"\r\n      [mode]=\"'javascript'\" \r\n      (keyup)=\"onEditorChanges($event)\">\r\n  </ace-editor>\r\n  <div class=\"chat\">\r\n    <div class=\"profile\">\r\n      {{userNickname}}\r\n    </div>\r\n    \r\n    <ul \r\n        #messagesContainer\r\n        class=\"messages\">\r\n      <li \r\n        class=\"message\"\r\n        [ngClass]=\"{'right': message.from !== userNickname}\"\r\n        *ngFor=\"let message of chatMessages\" >\r\n          <div [ngClass]=\"{'from': message.from === userNickname, 'messageContent': message.from !== userNickname}\">\r\n            {{ message.from === userNickname? message.from : message.message }}\r\n          </div>\r\n          <div [ngClass]=\"{'messageContent': message.from === userNickname, 'from': message.from !== userNickname}\">\r\n            {{message.from === userNickname? message.message : message.from }}\r\n          </div>\r\n      </li>\r\n    </ul>\r\n    <input \r\n        #message\r\n        class=\"messageInput\" \r\n        type=\"text\"\r\n        placeholder=\"Type message here...\"\r\n        (keyup.enter)=\"\r\n          sendMessage(message.value);\r\n          message.value = '';\r\n        \"/>\r\n  </div>\r\n  <div class=\"outputHeader\">\r\n      <p class=\"outputLabel\">Output :</p>\r\n      <div\r\n        (click)=\"runScript()\"\r\n        class=\"runButton\">\r\n        <i class=\"material-icons\">rowing</i>\r\n        <p>Run</p>\r\n      </div>\r\n  </div>\r\n  <ace-editor\r\n    #output\r\n    [readOnly]=\"true\"\r\n    class=\"output\">\r\n  </ace-editor>\r\n</div>\r\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(routerService, beService) {
        this.routerService = routerService;
        this.beService = beService;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.joinRoom = function (info) {
        this.beService.logIn(info);
        this.beService.joinRoom(info);
    };
    LoginPageComponent.prototype.onSubmit = function (nick, room) {
        if (!room || !nick) {
            return;
        }
        this.joinRoom({ nick: nick, room: room }); // TODO: Add some access rules.
        this.routerService.navigateToRoom(room);
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__(209),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* RouterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* RouterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* BEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* BEService */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomComponent = (function () {
    function RoomComponent(routerService, beService) {
        this.routerService = routerService;
        this.beService = beService;
        this.userNickname = '';
        this.userRoom = '';
        this.chatMessages = [];
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beService.user$.subscribe(function (data) {
            if (!data.nick) {
                _this.routerService.navigateToLogin();
            }
            _this.userNickname = data.nick;
            _this.userRoom = data.room;
        });
        this.beService.file$.subscribe(function (file) {
            _this.editor.getEditor().setValue(file, 1);
        });
        this.beService.output$.subscribe(function (output) {
            _this.output.getEditor().setValue(output, 1);
        });
        this.beService.outputError$.subscribe(function (outputError) {
            _this.output.getEditor().setValue(outputError, -1);
        });
        this.beService.chatMessages$.subscribe(function (message) {
            if (message.from && message.message) {
                _this.chatMessages.push(message);
                setTimeout(function () {
                    _this.messagesContainer.nativeElement.scrollTop = _this.messagesContainer.nativeElement.scrollHeight;
                }, 0);
            }
        });
        this.saver = setInterval(function () {
            _this.saveFile();
        }, 5000);
        this.beService.getChatMessages(this.userRoom);
        this.beService.getEditorValue(this.userRoom);
        this.initCustomCommands();
        // Just preventing some console pollution from editor library
        this.editor.getEditor().$blockScrolling = Infinity;
        this.output.getEditor().$blockScrolling = Infinity;
        // Disable vertical split line
        this.editor.getEditor().setOption('showPrintMargin', false);
        this.output.getEditor().setOption('showPrintMargin', false);
    };
    RoomComponent.prototype.sendMessage = function (msg) {
        this.beService.sendMessage(msg, this.userNickname, this.userRoom);
    };
    RoomComponent.prototype.initCustomCommands = function () {
        var _this = this;
        this.editor.getEditor().commands.addCommand({
            name: 'runAndSave',
            bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
            exec: function () {
                if (_this.editor.getEditor().getValue() === '') {
                    _this.output.getEditor().setValue('');
                }
                _this.saveFile();
                _this.runScript();
            },
            readOnly: true
        });
    };
    RoomComponent.prototype.runScript = function () {
        this.beService.runScript(this.editor.getEditor().getValue().split('\n').join(''), this.userRoom);
    };
    RoomComponent.prototype.onEditorChanges = function () {
        this.beService.updateFile(this.editor.getEditor().getValue(), this.userRoom);
    };
    RoomComponent.prototype.ngOnDestroy = function () {
        this.beService.leaveRoom();
        clearInterval(this.saver);
    };
    RoomComponent.prototype.saveFile = function () {
        this.beService.fileSave(this.editor.getEditor().getValue(), this.userRoom);
        console.log('File saved');
    };
    return RoomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('editor'),
    __metadata("design:type", Object)
], RoomComponent.prototype, "editor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('output'),
    __metadata("design:type", Object)
], RoomComponent.prototype, "output", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('messagesContainer'),
    __metadata("design:type", Object)
], RoomComponent.prototype, "messagesContainer", void 0);
RoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-room',
        template: __webpack_require__(210),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* RouterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* RouterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* BEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* BEService */]) === "function" && _b || Object])
], RoomComponent);

var _a, _b;
//# sourceMappingURL=room.component.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.bundle.js.map