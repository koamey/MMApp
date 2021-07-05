webpackJsonp([17],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAndEarnPageModule", function() { return ReferAndEarnPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refer_and_earn__ = __webpack_require__(945);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferAndEarnPageModule = (function () {
    function ReferAndEarnPageModule() {
    }
    ReferAndEarnPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__refer_and_earn__["a" /* ReferAndEarnPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__refer_and_earn__["a" /* ReferAndEarnPage */]),
            ],
        })
    ], ReferAndEarnPageModule);
    return ReferAndEarnPageModule;
}());

//# sourceMappingURL=refer-and-earn.module.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferAndEarnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
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
 * Generated class for the ReferAndEarnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferAndEarnPage = (function () {
    function ReferAndEarnPage(navCtrl, navParams, socialSharing, util, atrCtrl, platform, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.util = util;
        this.atrCtrl = atrCtrl;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.initializeBackButtonCustomHandler();
    }
    ReferAndEarnPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    ReferAndEarnPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.backButton();
        }
    };
    ReferAndEarnPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReferAndEarnPage');
        this.referrerCode = localStorage.getItem('referalcode');
        console.log('referalcode', this.referrerCode);
        if (localStorage.getItem('subscription_id') == "1") {
            //this.util.alert('This feature will be inactive for demo plan', '');
            this.conmessage = 'This feature will be inactive for demo plan.';
            this.showConfirmAlert();
        }
        else {
            this.trial_subscriptionTabCheck = localStorage.getItem('referandearn');
            if (this.trial_subscriptionTabCheck == 'false') {
                this.conmessage = 'This feature will be active once you have subscription.';
                this.showConfirmAlert();
            }
        }
    };
    ReferAndEarnPage.prototype.onClickShareCode = function () {
        console.log('inside onClickShareCode function');
        this.sharecontent = "MummyMeals delivers home-cooked food to you everyday! You can refer a friend and get free meals too. My referral code: " + this.referrerCode;
        this.socialSharing.share(this.sharecontent, null, null, null);
    };
    ReferAndEarnPage.prototype.backButton = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ReferAndEarnPage.prototype.showConfirmAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alertConfirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alertConfirm = this.atrCtrl.create({
                            //header: 'Download Successfully',
                            enableBackdropDismiss: false,
                            message: this.conmessage,
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        _this.navCtrl.setRoot('MenuPage');
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
    ReferAndEarnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refer-and-earn',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/refer-and-earn/refer-and-earn.html"*/'<!--\n  Generated template for the ReferAndEarnPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backButton()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>REFER & EARN</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="refer-main-content">\n\n  <div class="refer-earn-area text-center">\n      <ion-grid>\n        <ion-row>\n          <ion-col text-center>\n            <img src="assets/Refer_ic.png" alt="Refer-image" class="refer-img">\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col>\n            <div class="refer-section">\n              <h2>Refer Friends & Earn</h2>\n              <p>Ask your friends to signup with your referral code and make an initial payment. Once done, you will win 2 meals for 15 days plan. 4 meals for 30 days plan.</p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col text-center>\n            <h2 class="referal-text">YOUR REFERRAL CODE</h2>\n            <div class="refer-code">\n              <img src="assets/ReferalField.png" alt="Refer-image" class="">\n              <div class="centered">\n                <h2>{{referrerCode}}</h2>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        \n\n      </ion-grid>\n    \n  </div>\n</ion-content>\n<ion-footer className="ion-no-border" class="footer-common" style="background: #fff;">\n  <ion-toolbar>\n<ion-row class="code-button" style="margin: 0;">\n  <ion-col style="padding: 0 3vh;">\n    <button ion-button type="submit" id="input_submit"  block  class="share-button"  (click)="onClickShareCode()" style="margin: 0;">\n      <img src="assets/Share_ic.png" alt="food-image" class="shareicon"> Share Code \n    </button>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-footer>\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/refer-and-earn/refer-and-earn.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], ReferAndEarnPage);
    return ReferAndEarnPage;
}());

//# sourceMappingURL=refer-and-earn.js.map

/***/ })

});
//# sourceMappingURL=17.js.map