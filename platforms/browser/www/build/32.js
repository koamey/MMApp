webpackJsonp([32],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealtypePageModule", function() { return MealtypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mealtype__ = __webpack_require__(923);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MealtypePageModule = (function () {
    function MealtypePageModule() {
    }
    MealtypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mealtype__["a" /* MealtypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mealtype__["a" /* MealtypePage */]),
            ],
        })
    ], MealtypePageModule);
    return MealtypePageModule;
}());

//# sourceMappingURL=mealtype.module.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealtypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
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
 * Generated class for the MealtypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MealtypePage = (function () {
    function MealtypePage(navCtrl, navParams, apiService, platform, viewCtrl, alertCtrl, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.ionicApp = ionicApp;
        this.mealType = [];
        this.mealTypeArr = [];
        this.mealtypeis = navParams.get('mealtypeis');
        this.mealId = navParams.get('mealId');
        this.initializeBackButtonCustomHandler();
    }
    MealtypePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    MealtypePage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    MealtypePage.prototype.ngOnInit = function () {
        localStorage.setItem('renewis_id', '1');
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.onLoadMealType();
        if (localStorage.getItem('mealId') != null) {
            this.navCtrl.setRoot('ChoosePreferencePage');
        }
    };
    MealtypePage.prototype.ionViewDidLoad = function () {
    };
    MealtypePage.prototype.ionViewDidEnter = function () {
        if (this.mealId) {
            var x = document.getElementById('meal_' + this.mealId);
            if (x) {
                x.style.backgroundColor = 'rgba(29, 176, 104, 0.8)';
                x.style.color = '#fff';
            }
        }
    };
    MealtypePage.prototype.ngAfterViewInit = function () {
    };
    MealtypePage.prototype.onLoadMealType = function () {
        var _this = this;
        localStorage.setItem('renewis_id', '1');
        this.apiService.showMealType().then(function (res) {
            if (res.success) {
                _this.mealTypeArr = res['data'];
            }
            else {
                _this.conmessage = res.message;
                _this.showConfirmAlert();
            }
        }).catch(function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    MealtypePage.prototype.onClickMealType = function (type) {
        for (var i = 0; i < this.mealTypeArr.length; i++) {
            if (type == this.mealTypeArr[i]['meal']) {
                localStorage.removeItem('LMealTime1');
                localStorage.removeItem('LMealTime2');
                localStorage.removeItem('DMealTime1');
                localStorage.removeItem('DMealTime2');
                localStorage.removeItem('mealcount');
                localStorage.removeItem('mealdays');
                localStorage.setItem('price', this.mealTypeArr[i]['price']);
                localStorage.setItem('mealId', this.mealTypeArr[i]['mealId']);
                localStorage.setItem('cancel_count', this.mealTypeArr[i]['cancel_count']);
                var mealId = localStorage.getItem('mealId');
                localStorage.setItem('mealType', this.mealTypeArr[i]['meal']);
                localStorage.setItem('LMealTime1', this.mealTypeArr[0]['mealTiming1']);
                localStorage.setItem('DMealTime1', this.mealTypeArr[1]['mealTiming1']);
                localStorage.setItem('DMealTime2', this.mealTypeArr[1]['mealTiming2']);
                localStorage.setItem('LMealTime2', this.mealTypeArr[0]['mealTiming2']);
                localStorage.setItem('mealdays', this.mealTypeArr[i]['subscription_period']);
                localStorage.setItem('mealcount', this.mealTypeArr[i]['number_of_meals']);
                if (this.mealTypeArr[i]['BothTiming']) {
                    localStorage.removeItem('LMealTime1');
                    localStorage.removeItem('LMealTime2');
                    localStorage.removeItem('DMealTime1');
                    localStorage.removeItem('DMealTime2');
                    this.lunch1 = this.mealTypeArr[i]['BothTiming'][0]['mealTiming1'];
                    this.lunch2 = this.mealTypeArr[i]['BothTiming'][0]['mealTiming2'];
                    this.dinner1 = this.mealTypeArr[i]['BothTiming'][1]['mealTiming1'];
                    this.dinner2 = this.mealTypeArr[i]['BothTiming'][1]['mealTiming2'];
                    localStorage.setItem('LMealTime1', this.lunch1);
                    localStorage.setItem('LMealTime2', this.lunch2);
                    localStorage.setItem('DMealTime1', this.dinner1);
                    localStorage.setItem('DMealTime2', this.dinner2);
                    localStorage.setItem('mealdays', this.mealTypeArr[i]['subscription_period']);
                    localStorage.setItem('mealcount', this.mealTypeArr[i]['number_of_meals']);
                }
                this.mealData = this.mealTypeArr[i];
                if (localStorage.getItem('mealType') == this.mealtypeis) {
                    this.navCtrl.setRoot('CheckoutPage');
                    return;
                }
                localStorage.removeItem('selectprefrence');
                localStorage.removeItem('lunchComplete');
                this.navCtrl.setRoot('ChoosePreferencePage');
                return this.mealData;
            }
        }
    };
    MealtypePage.prototype.Back = function () {
        if (localStorage.getItem('renewis') == '1') {
            this.navCtrl.setRoot('RenewsubscriptionPage');
        }
        else {
            var sub_id = localStorage.getItem('subscription_id');
            localStorage.removeItem('subscription_id');
            this.navCtrl.setRoot('ChooseplanPage', {
                subscription_id: sub_id
            });
        }
    };
    MealtypePage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('MealtypePage');
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
    MealtypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mealtype',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/mealtype/mealtype.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group-white.svg" class="backWhiteIcon" >\n      </button>\n    </ion-buttons>\n    <ion-title text-center>STEP 1</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content meal-type-scroll">\n  <div class="screen-heading">\n    <span>Choose Your</span>\n    <h2> Meal Type</h2>\n  </div>\n\n  <div class="content-area">\n    <ion-grid>\n      <ion-row *ngFor="let mealTypes of mealTypeArr; let i=index">\n        <ion-col col-12 class="text-center" (click)="onClickMealType(mealTypes.meal)">\n          <div class="lunch-box" id=\'meal_{{mealTypes.id}}\'>\n            <img *ngIf="mealTypes.meal!=\'Both\'" class="img2" src="assets/Group 9@3x.svg">\n            <img *ngIf="mealTypes.meal==\'Both\'" class="img3" src="assets/Group 234@3x.svg">\n            <h4>{{mealTypes.meal}}</h4>\n            <p>Rs {{mealTypes.price}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/mealtype/mealtype.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], MealtypePage);
    return MealtypePage;
}());

//# sourceMappingURL=mealtype.js.map

/***/ })

});
//# sourceMappingURL=32.js.map