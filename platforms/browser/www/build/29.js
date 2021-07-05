webpackJsonp([29],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycurrentplanPageModule", function() { return MycurrentplanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycurrentplan__ = __webpack_require__(927);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MycurrentplanPageModule = (function () {
    function MycurrentplanPageModule() {
    }
    MycurrentplanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mycurrentplan__["a" /* MycurrentplanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mycurrentplan__["a" /* MycurrentplanPage */]),
            ],
        })
    ], MycurrentplanPageModule);
    return MycurrentplanPageModule;
}());

//# sourceMappingURL=mycurrentplan.module.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycurrentplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






/**
 * Generated class for the MycurrentplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MycurrentplanPage = (function () {
    function MycurrentplanPage(navCtrl, navParams, alertCtrl, util, push, ionicApp, platform, storage, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.util = util;
        this.push = push;
        this.ionicApp = ionicApp;
        this.platform = platform;
        this.storage = storage;
        this.apiService = apiService;
        this.lunchmeal_img = "assets/choosePreference/lunch_ic.svg";
        this.dinnermeal_img = "assets/choosePreference/dinner_ic.svg";
        this.initializeBackButtonCustomHandler();
    }
    MycurrentplanPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    MycurrentplanPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    MycurrentplanPage.prototype.ngOnInit = function () {
        var _this = this;
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
        this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
        this.apiService.getcurrentpaln(this.custid, this.custToken, this.customer_subscription_id).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.preferenceProducts = response.product;
                _this.preferenceProductsDinner = response.dinnerproduct;
                _this.preferenceProductstime = response.deliverytiming;
                _this.preferenceProductsDinnertime = response.dinnerdeliverytiming;
                _this.mealType = localStorage.getItem('mealType');
            }
            else {
                _this.conmessage = response.message;
                _this.showConfirmAlert();
            }
        }).catch(function (response) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    MycurrentplanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MycurrentplanPage');
    };
    MycurrentplanPage.prototype.Back = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    MycurrentplanPage.prototype.showConfirmAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alertConfirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alertConfirm = this.alertCtrl.create({
                            //header: 'Download Successfully',
                            enableBackdropDismiss: false,
                            message: this.conmessage,
                            buttons: [
                                {
                                    text: "Try again",
                                    handler: function () {
                                        _this.navCtrl.setRoot('MycurrentplanPage');
                                    }
                                }
                            ]
                        });
                        return [4 /*yield*/, alertConfirm];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MycurrentplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mycurrentplan',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/mycurrentplan/mycurrentplan.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()" [disabled]="customise">\n        <img src="assets/imgicon/Group-white.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>MY CURRENT PLAN</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="main-content" (click)="close()"> \n  <div class="content-area content-area-plan">\n    <div class="choosepref">\n      <ion-grid *ngIf="mealType==\'Both\' || mealType==\'Lunch\'">\n        <ion-row>\n          <ion-col col-12 class="text-center" >\n            <h4>Lunch</h4>\n            <div id="" class="meal-box">\n              <img id="img_rice_meal" class="img2" src="{{lunchmeal_img}}">\n              <p>{{preferenceProducts}}</p>\n              <div>                \n              <p class="custo">DELIVERY AT</p>\n              <p>{{preferenceProductstime}}</p>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row> \n      </ion-grid>\n      <ion-grid *ngIf="mealType==\'Both\' || mealType==\'Dinner\'">\n        <ion-row>\n          <ion-col col-12 class="text-center" >\n            <h4>Dinner</h4>            \n            <div id="" class="meal-box">\n              <img id="img_rice_meal" class="img2" src="{{dinnermeal_img}}">\n              <p>{{preferenceProductsDinner}}</p>\n              <div>                \n                <p class="custo">DELIVERY AT</p>\n                <p>{{preferenceProductsDinnertime}}</p>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>       \n      </ion-grid>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/mycurrentplan/mycurrentplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */]])
    ], MycurrentplanPage);
    return MycurrentplanPage;
}());

//# sourceMappingURL=mycurrentplan.js.map

/***/ })

});
//# sourceMappingURL=29.js.map