webpackJsonp([28],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderGuestMealPageModule", function() { return OrderGuestMealPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_guest_meal__ = __webpack_require__(930);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderGuestMealPageModule = (function () {
    function OrderGuestMealPageModule() {
    }
    OrderGuestMealPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_guest_meal__["a" /* OrderGuestMealPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_guest_meal__["a" /* OrderGuestMealPage */]),
            ],
        })
    ], OrderGuestMealPageModule);
    return OrderGuestMealPageModule;
}());

//# sourceMappingURL=order-guest-meal.module.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderGuestMealPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
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
 * Generated class for the OrderGuestMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderGuestMealPage = (function () {
    function OrderGuestMealPage(navCtrl, navParams, apiService, util, translate, platform, alertCtrl, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.util = util;
        this.translate = translate;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.ionicApp = ionicApp;
        // today = new Date();
        // minDate: string = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
        this.today = localStorage.getItem('guestmealdate');
        this.today1 = this.today;
        this.minDate1 = this.today1.toString();
        this.mynum1 = 0;
        this.mynum2 = 0;
        this.submitButton = ' rgb(216, 216, 216)';
        this.date = '';
        this.initializeBackButtonCustomHandler();
    }
    OrderGuestMealPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    OrderGuestMealPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    OrderGuestMealPage.prototype.ngOnInit = function () {
        this.firstload();
    };
    OrderGuestMealPage.prototype.firstload = function () {
        var _this = this;
        this.innerstring = true;
        this.enddate = localStorage.getItem('endDate');
        this.minDate2 = this.enddate.toString();
        this.mealType1 = localStorage.getItem('mealType');
        this.tokendata = localStorage.getItem('token');
        if (localStorage.getItem('mynum1') != null) {
            var mynum15 = parseInt(localStorage.getItem('mynum1'));
            this.mynum1 = mynum15;
        }
        if (localStorage.getItem('mynum2') != null) {
            var mynum15 = parseInt(localStorage.getItem('mynum2'));
            this.mynum2 = mynum15;
        }
        if (localStorage.getItem('date') != null) {
            this.submitButton = "rgb(242, 155, 17)";
            this.selecteddate = localStorage.getItem('date');
            this.date = this.selecteddate;
        }
        this.apiService.showGuestMeal(this.tokendata).then(function (res) {
            _this.util.hideLoader();
            if (res['success']) {
                _this.mealTypeArr = res['data'];
                for (var i = 0; i < _this.mealTypeArr.length; i++) {
                    if ('Lunch' == _this.mealTypeArr[i].meal) {
                        _this.lunchmealtype = _this.mealTypeArr[i].meal;
                    }
                    if ('Dinner' == _this.mealTypeArr[i].meal) {
                        _this.Dinnermealtype = _this.mealTypeArr[i].meal;
                    }
                }
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
    OrderGuestMealPage.prototype.ionViewDidLoad = function () {
    };
    OrderGuestMealPage.prototype.onclickPlus1 = function () {
        this.mynum1 += 1;
    };
    OrderGuestMealPage.prototype.onclickMinus1 = function () {
        this.mynum1 -= 1;
    };
    OrderGuestMealPage.prototype.onclickPlus2 = function () {
        this.mynum2 += 1;
    };
    OrderGuestMealPage.prototype.onclickMinus2 = function () {
        this.mynum2 -= 1;
    };
    OrderGuestMealPage.prototype.onClickMeal = function (type) {
        this.mealType = type;
    };
    OrderGuestMealPage.prototype.onClickZero = function () {
        this.innerstring = true;
    };
    OrderGuestMealPage.prototype.onClickZerokey = function (mynum1) {
        this.mynum1 = mynum1;
    };
    OrderGuestMealPage.prototype.onClickZerokey2 = function (mynum2) {
        this.mynum2 = mynum2;
    };
    OrderGuestMealPage.prototype.selectdate = function () {
        this.submitButton = "rgb(242, 155, 17)";
        this.date = this.selecteddate;
        // localStorage.removeItem('date');
        // localStorage.setItem('date', this.date);
    };
    OrderGuestMealPage.prototype.Back = function () {
        var backDrop = document.getElementsByTagName('ion-picker-cmp');
        if (backDrop.length > 0) {
            for (var i = 0; i < backDrop.length; i++) {
                backDrop[i].style.display = 'none';
            }
        }
        localStorage.removeItem('mynum1');
        localStorage.removeItem('mynum2');
        localStorage.removeItem('date');
        this.mynum2 = 0;
        this.mynum1 = 0;
        this.navCtrl.setRoot('DashboardPage');
    };
    OrderGuestMealPage.prototype.onSubmit = function () {
        var _this = this;
        localStorage.removeItem('mynum1');
        localStorage.removeItem('mynum2');
        localStorage.removeItem('date');
        localStorage.setItem('date', this.date);
        localStorage.setItem('mynum1', this.mynum1.toString());
        this.mynum1 = parseInt(localStorage.getItem('mynum1'));
        localStorage.setItem('mynum2', this.mynum2.toString());
        this.mynum2 = parseInt(localStorage.getItem('mynum2'));
        if (this.date == '') {
            // if(localStorage.getItem('date')!=null)
            this.util.alert(this.translate.instant('Please Select Date'), '');
            return;
        }
        if (this.mealType1 == "Both") {
            if (this.mynum1 == 0 && this.mynum2 == 0) {
                this.util.alert(this.translate.instant('Please choose Lunch or Dinner Quantity'), '');
                return;
            }
        }
        if (this.mealType1 == "Lunch") {
            if (this.mynum1 == 0 || this.mynum2 == null) {
                this.util.alert(this.translate.instant('Please choose Lunch Quantity'), '');
                return;
            }
        }
        if (this.mealType1 == "Dinner") {
            if (this.mynum2 == 0 || this.mynum2 == null) {
                this.util.alert(this.translate.instant('Please choose Dinner Quantity'), '');
                return;
            }
        }
        this.customer_id = localStorage.getItem('id');
        this.util.showLoader();
        console.log(this.mynum1);
        if (this.mynum1 > 0) {
            localStorage.setItem('guestmealtypefailed', 'lunch');
        }
        if (this.mynum2 > 0) {
            localStorage.setItem('guestmealtypefailed', 'Dinner');
        }
        if (this.mynum2 > 0 && this.mynum1 > 0) {
            localStorage.setItem('guestmealtypefailed', 'both');
        }
        // localStorage.setItem('guestmealtypefailed',this.lunchmealtype);
        this.apiService.guestmeal(this.tokendata, this.customer_id, this.mynum1.toString(), this.mynum2.toString(), this.lunchmealtype, this.Dinnermealtype, this.date).then(function (res) {
            _this.util.hideLoader();
            if (res['success']) {
                _this.navCtrl.setRoot('DashboardCheckoutPage');
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
    OrderGuestMealPage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('OrderGuestMealPage');
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
    OrderGuestMealPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-guest-meal',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/order-guest-meal/order-guest-meal.html"*/'<ion-header no-border class="dit-type-header order-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>ORDER GUEST MEAL</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content order-scroll">\n  <div class="screen-heading">\n    <span>Choose</span>\n    <h2>Date & Meal</h2>\n  </div>\n\n  <div class="choose-ordermeal">\n    <ion-grid>\n      <ion-row text-center>\n        <ion-col style="padding: 0;">\n          <label style="width: 100%; float: left;">\n            <h5 >PICK DATE</h5>\n          </label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 class="text-center" style="padding:0;">\n          <ion-item style="padding-left: 0;    min-height: 1px;">\n            <ion-datetime class="datetime-text" displayFormat="DD MMMM YYYY" [ngModelOptions]="{standalone: true}"  [min]="today1" [max]="today1"\n              [(ngModel)]="selecteddate" (ngModelChange)="selectdate()"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 class="text-center" style="padding:0;">\n          <h6 class="choose-type-quantity">CHOOSE MEAL TYPE & QUANTITY</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="meal-type-class"*ngIf="mealType1==\'Lunch\' || mealType1==\'Both\'">\n\n\n      <ion-row (click)="onClickMeal(\'Lunch\')" class="orderDetail">\n        <ion-col col-2 class="font-image">\n          <div>\n            <img src="assets/Group 496.svg" alt="Edit-address" style="width: 4.769021739130435vh; height: 2.989130434782609vh;">\n          </div>\n        </ion-col>\n        <ion-col col-3 class="font-image">\n          <div>\n            <label class="mealtype-label" [style.color]="th2">{{lunchmealtype}}</label>\n          </div>\n        </ion-col>\n\n        <ion-col col-7 class="font-image">\n          <div class="row meal-content">\n            <button class="mealtype-integer col-4" [disabled]="mynum1==0" (click)="onclickMinus1()" style="padding:0;">\n              <img src="assets/Group 466.svg" alt="" style="height: 3.8530734632683656vh;width: 3.8530734632683656vh;">\n            </button>\n            <button class="mealtype-integer col-4">\n              <ion-label style="width:4.497vh; font-size: 4vw; font-family: Montserrat-Bold;"\n                >{{mynum1}}</ion-label>\n            </button>\n            <button class="mealtype-integer col-4" [disabled]="mynum1==10" (click)="onclickPlus1()" style="padding:0;">\n              <img src="assets/Group 467.svg" alt="" style="height: 3.8530734632683656vh;width: 3.8530734632683656vh;">\n            </button>  \n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n   \n    <div class="meal-type-class" *ngIf="mealType1==\'Dinner\' || mealType1==\'Both\'" style="margin-bottom: 0;">\n      <ion-row (click)="onClickMeal(\'Dinner\')" class="orderDetail">\n        <ion-col col-2 class="font-image">\n          <div>\n            <img src="assets/Group 496.svg" alt="Edit-address" style="width: 4.769021739130435vh; height: 2.989130434782609vh;">\n          </div>\n        </ion-col>\n        <ion-col col-3 class="font-image">\n          <div>\n            <label class="mealtype-label" [style.color]="th2">{{Dinnermealtype}}</label>\n          </div>\n        </ion-col>\n        <ion-col col-7 class="font-image">\n          <div class="row meal-content">\n            <button class="mealtype-integer col-4" [disabled]="mynum2==0" (click)="onclickMinus2()" style="padding:0;">\n              <img  src="assets/Group 466.svg" alt="" style="height: 3.8530734632683656vh;width: 3.8530734632683656vh;">\n            </button>\n            <button class="mealtype-integer col-4">\n              <ion-label style="width:4.497vh; font-size: 4vw; font-family: Montserrat-Bold;"  \n                >{{mynum2}}</ion-label>\n            </button>\n            <button class="mealtype-integer col-4" [disabled]="mynum2==10" (click)="onclickPlus2()" style="padding:0;">  \n              <img src="assets/Group 467.svg" alt="" style="height: 3.8530734632683656vh;width: 3.8530734632683656vh;">\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n  \n  </div>\n</ion-content>\n<ion-footer className="ion-no-border" class="footer-common">\n  <ion-toolbar>\n<ion-grid class="footer-color" style="padding:0;">\n  <ion-row>\n    <ion-col style="padding: 0;">\n      <button class="button-class_added" type="submit" id="input_submit" block (click)="onSubmit()"\n        [style.background]="submitButton" style="margin:0 5.333vw;">\n        Proceed\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/order-guest-meal/order-guest-meal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], OrderGuestMealPage);
    return OrderGuestMealPage;
}());

//# sourceMappingURL=order-guest-meal.js.map

/***/ })

});
//# sourceMappingURL=28.js.map