webpackJsonp([40],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseplanPageModule", function() { return ChooseplanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chooseplan__ = __webpack_require__(917);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChooseplanPageModule = (function () {
    function ChooseplanPageModule() {
    }
    ChooseplanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chooseplan__["a" /* ChooseplanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chooseplan__["a" /* ChooseplanPage */]),
            ],
        })
    ], ChooseplanPageModule);
    return ChooseplanPageModule;
}());

//# sourceMappingURL=chooseplan.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_push_service__ = __webpack_require__(36);
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
 * Generated class for the ChooseplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseplanPage = (function () {
    function ChooseplanPage(nav, navParams, apiService, push, util, translate, storage, sanitizer, platform, viewCtrl, ionicApp, atrCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.apiService = apiService;
        this.push = push;
        this.util = util;
        this.translate = translate;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.ionicApp = ionicApp;
        this.atrCtrl = atrCtrl;
        this.subscriptionArray = [];
        this.subscription_id = navParams.get('subscription_id');
        this.initializeBackButtonCustomHandler();
    }
    ChooseplanPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    ChooseplanPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.back();
        }
    };
    ChooseplanPage.prototype.ngOnInit = function () {
        localStorage.setItem('renewrotistringdinner', '');
        localStorage.setItem('renewrotistringlunch', '');
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.loadSubscriptionData();
        if (localStorage.getItem('subscription_id') != null) {
            this.nav.setRoot('MealtypePage');
        }
    };
    ChooseplanPage.prototype.loadSubscriptionData = function () {
        var _this = this;
        this.apiService.showSubscription().then(function (res) {
            if (res['success']) {
                _this.subscriptionArray = res['data'];
                for (var i = 0; i < _this.subscriptionArray.length; i++) {
                    _this.subscriptionArray[i]['subscription_content'] = _this.sanitizer.bypassSecurityTrustHtml(_this.subscriptionArray[i]['subscription_content']);
                    _this.subscriptionArray[i]['subscription_sub_content'] = _this.sanitizer.bypassSecurityTrustHtml(_this.subscriptionArray[i]['subscription_sub_content']);
                }
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
            }
            else {
                _this.conmessage = res['message'];
                _this.showConfirmAlert();
            }
        }).catch(function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    ChooseplanPage.prototype.ionViewDidLoad = function () {
    };
    ChooseplanPage.prototype.ionViewDidEnter = function () {
        var asd = 'plan_' + this.subscription_id;
    };
    ChooseplanPage.prototype.ngAfterViewInit = function () {
    };
    ChooseplanPage.prototype.onClickSubscription = function (id) {
        for (var i = 0; i < this.subscriptionArray.length; i++) {
            if (id == this.subscriptionArray[i].subscription_id) {
                this.subscriptionData = this.subscriptionArray[i];
                localStorage.setItem('subscription_id', this.subscriptionData.subscription_id);
                this.subscription_id = localStorage.getItem('subscription_id');
                var type;
                // if (i == 0) {
                //   type = 'Trial Subscription';
                // } else if (i == 1) {
                //   type = '1 Month Subscription';
                // } else if (i == 2) {
                //   type = 'Half-Monthly Subscription';
                // }
                type = this.subscriptionData.subscription_name;
                localStorage.setItem('subscription_type', type);
            }
        }
        this.nav.setRoot('MealtypePage');
    };
    ChooseplanPage.prototype.back = function () {
        if (localStorage.getItem('isLogin') == "login") {
            this.nav.setRoot('AboutyouPage');
        }
        else {
            localStorage.removeItem('custstatus');
            localStorage.removeItem('isLogin');
            this.nav.setRoot('LoginPage');
        }
    };
    ChooseplanPage.prototype.showConfirmAlert = function () {
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
                                    text: "Try again",
                                    handler: function () {
                                        _this.nav.setRoot('ChooseplanPage');
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
    ChooseplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chooseplan',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/chooseplan/chooseplan.html"*/'\n\n<ion-header no-border class="dit-type-header otp-headeer">\n	<ion-navbar>\n	  <ion-buttons left>\n		<button ion-button icon-only (click)="back()">\n		  <img src="assets/imgicon/Group 51.svg" class="backIcon" >\n    </button>\n	  </ion-buttons>\n	</ion-navbar>\n  </ion-header>\n\n<ion-content class="chooseplan-content">\n  <div class="choose-plan">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 class="text-center">\n          <h4>Choose Your Plan</h4>\n          <span class="mainpara">Did you know? You can CHOOSE YOUR VEGGIES DAILY a day prior once you take a plan. </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style="margin-top: 1.945vh;" *ngFor="let subscriptions of subscriptionArray; let i=index">\n        <ion-col col-12 class="select-area2">\n          <div class="monthly-subscription" id=\'plan_{{subscriptions.subscription_id}}\' (click)="onClickSubscription(subscriptions.subscription_id)">\n            <div>\n              <img style="width: 9.97vh;height: 9.97vh;margin-top: 2.248vh;margin-bottom: 1.664vh;" *ngIf="subscriptions.subscription_id!=\'1\'"\n                src="assets/Group_321.svg" alt="food-image" class="img-responsive">\n              <img style="width: 13.778vh; height: 13.6vh;" *ngIf="subscriptions.subscription_id==\'1\'" src="assets/Group_225.svg" alt="food-image"\n                class="img-responsive">\n            </div>\n            <h4>{{subscriptions.subscription_name}}</h4>\n            <span [innerHTML]="subscriptions.subscription_content"></span>\n            <label class="smallcontent" id=\'plan_p_{{subscriptions.subscription_id}}\' [innerHTML]="subscriptions.subscription_sub_content"></label>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="bottom">\n            <!-- <p>\n              <sup style="color: red; font-size: 1.97vh; top:0em !important;">* </sup> Subscription or Trial will only start after 48 hours from the payment date</p> -->\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/chooseplan/chooseplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_7__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_6__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChooseplanPage);
    return ChooseplanPage;
}());

//# sourceMappingURL=chooseplan.js.map

/***/ })

});
//# sourceMappingURL=40.js.map