webpackJsonp([23],{

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyPageModule", function() { return LoyaltyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loyalty__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_ecurrency_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoyaltyPageModule = (function () {
    function LoyaltyPageModule() {
    }
    LoyaltyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loyalty__["a" /* LoyaltyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loyalty__["a" /* LoyaltyPage */]),
                __WEBPACK_IMPORTED_MODULE_4__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__["RoundProgressModule"]
            ]
        })
    ], LoyaltyPageModule);
    return LoyaltyPageModule;
}());

//# sourceMappingURL=loyalty.module.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoyaltyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component for profile editing
 */
var LoyaltyPage = (function () {
    function LoyaltyPage(apiService, nav, storage) {
        this.apiService = apiService;
        this.nav = nav;
        this.storage = storage;
        this.userData = {};
        this.settings = {};
        this.loggedIn = false;
    }
    LoyaltyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.settings = this.apiService.getSettings();
        this.loggedIn = this.apiService.isLoggedIn();
        if (this.loggedIn) {
            this.apiService.loadUserData().then(function (user) {
                _this.userData = user;
            });
        }
    };
    LoyaltyPage.prototype.login = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.nav.setRoot('SignupPage');
        });
    };
    LoyaltyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loyalty',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/personal/loyalty/loyalty.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Loyalty program</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="loggedIn">\n    <ion-list class="loyalty-header">\n      <ion-item text-wrap>\n        <h1 class="text-center">{{ \'loyalty.heading\' | translate }}</h1>\n      </ion-item>\n    </ion-list>\n    <div class="loyalty-progress-holder">\n      <div class="text">\n        <div class="available" *ngIf="userData.loyalty_reward > 0">\n          {{ userData.loyalty_reward | ecurrency }} <small>available</small>\n        </div>\n        <span class="points">{{ userData.loyalty_points }}/{{ settings.loyalty_points_for_reward }}</span>\n        <div class="comment">Before the next reward</div>\n      </div>\n      <round-progress\n        [current]="userData.loyalty_points"\n        [max]="settings.loyalty_points_for_reward"\n        [color]="\'#ff3f00\'"\n        [background]="\'#b4b4b4\'"\n        [stroke]="40"\n        [rounded]="true"\n        [clockwise]="true"\n        [responsive]="true"\n        [duration]="800"\n        [animation]="\'easeInOutQuart\'"\n        [animationDelay]="0"></round-progress>\n    </div>\n    <ion-card>\n      <ion-card-content class="loyalty-text">\n        <div [innerHTML]="\'loyalty.description\' | translate:{loyalty_points_per_amount: settings.loyalty_points_per_amount | ecurrency, loyalty_points_per_order: settings.loyalty_points_per_order, loyalty_points_for_reward: settings.loyalty_points_for_reward, loyalty_reward_amount: settings.loyalty_reward_amount | ecurrency}"></div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngIf="!loggedIn" class="text-center">\n    <br>\n    <br>\n    <a href="#" (click)="login()">{{ \'loyalty.login\' | translate }}</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/personal/loyalty/loyalty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoyaltyPage);
    return LoyaltyPage;
}());

//# sourceMappingURL=loyalty.js.map

/***/ })

});
//# sourceMappingURL=23.js.map