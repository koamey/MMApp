webpackJsonp([33],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealhistoryPageModule", function() { return MealhistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mealhistory__ = __webpack_require__(924);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MealhistoryPageModule = (function () {
    function MealhistoryPageModule() {
    }
    MealhistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mealhistory__["a" /* MealhistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mealhistory__["a" /* MealhistoryPage */]),
            ],
        })
    ], MealhistoryPageModule);
    return MealhistoryPageModule;
}());

//# sourceMappingURL=mealhistory.module.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealhistoryPage; });
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
 * Generated class for the MealhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MealhistoryPage = (function () {
    function MealhistoryPage(navCtrl, navParams, util, push, storage, platform, ionicApp, alertCtrl, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.alertCtrl = alertCtrl;
        this.apiService = apiService;
        this.orderArray = [];
        this.initializeBackButtonCustomHandler();
    }
    MealhistoryPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    MealhistoryPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    MealhistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MealhistoryPage');
    };
    MealhistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
        this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
        this.apiService.mealhistory_check(this.custid, this.custToken, this.customer_subscription_id).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.orderArray = response.data;
                console.log('innnnn');
                console.log(_this.orderArray);
                if (_this.orderArray.length == 1) {
                    _this.orderArray['gueststatusdinner'];
                    _this.orderArray['gueststatuslunch'];
                    _this.orderArray['statusdinner'];
                    _this.orderArray['statuslunch'];
                    if (_this.orderArray[0].guestcountdinner == '' && _this.orderArray[0].guestcountlunch == '' && _this.orderArray[0].meal_typedinner == '' && _this.orderArray[0].meal_typelunch == '') {
                        console.log('innnnn');
                        _this.showData = true;
                    }
                    else {
                        _this.showData = false;
                    }
                }
                else if (_this.orderArray.length == 0) {
                    _this.showData = true;
                }
                else {
                    _this.showData = false;
                }
            }
            else {
                _this.showData = true;
                _this.conmessage = response.message;
                //this.showConfirmAlert();
            }
        }, function (response) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    MealhistoryPage.prototype.Back = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    MealhistoryPage.prototype.showConfirmAlert = function () {
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
    MealhistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mealhistory',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/mealhistory/mealhistory.html"*/'\n<ion-header no-border class="dit-type-header order-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title  text-center>MEAL HISTORY</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="mealhistory-vaggies">\n  <div class="mealhistoryTabDiv">\n  <div class="meal-history text-center">\n    <div >     \n      <ion-grid class="mealOrderHistory">\n        <!-- *ngFor="let order of orderArray; let i=index" -->\n        <div  class="padding:0vh 2.99vh;" *ngFor="let order of orderArray; let i=index" >\n        <!-- date heading -->\n          <ion-row  *ngIf="order.meal_typelunch!=\'\' || order.meal_typedinner!=\'\' || order.guestcountlunch!=\'\' || order.guestcountdinner!=\'\'">\n            <h4 class="mealorder-number">{{order.date|date:\'EEEE, d MMMM\'}}</h4>\n          </ion-row>\n\n          <ion-row *ngIf="order.meal_typelunch!=\'\' || order.meal_typedinner!=\'\' || order.guestcountlunch!=\'\' || order.guestcountdinner!=\'\'">\n            <h4 class="mealorder-mealtype"></h4>\n          </ion-row>\n          <!-- end -->\n          <!-- lunch date -->\n          <ion-row *ngIf="order.meal_typelunch!=\'\' || order.meal_typedinner!=\'\' || order.guestcountlunch!=\'\' || order.guestcountdinner!=\'\'">\n            <ion-col col-7 style="padding:0;">\n\n              <ion-row *ngIf="order.meal_typelunch!=\'\'" class="mealorder-on" style="text-transform: capitalize;">\n                <span class="mealtitle">{{order.meal_typelunch}}</span> <span *ngIf="order.gueststatuslunch!=\'\' && order.statuslunch==order.gueststatuslunch && order.guestcountlunch!=\'\'" class="mealtitle">, Guest Meal x {{order.guestcountlunch}}</span> \n              </ion-row>\n\n              <ion-row *ngIf="order.meal_typelunch!=\'\'" class="mealorder-on" style="text-transform: capitalize;">\n                <span *ngIf="order.gueststatuslunch!=\'\' && order.statuslunch!=order.gueststatuslunch && order.guestcountlunch!=\'\'" class="mealtitle">Lunch - Guest Meal x {{order.guestcountlunch}}</span> \n              </ion-row>\n\n              <ion-row *ngIf="order.meal_typelunch==\'\'" class="mealorder-on" style="text-transform: capitalize;">\n                <span *ngIf="order.guestcountlunch!=\'\'" class="mealtitle">Lunch - Guest Meal X {{order.guestcountlunch}}</span> \n              </ion-row>\n              <!-- end -->\n\n              \n              <!-- dinner data -->\n              <ion-row *ngIf="order.meal_typedinner!=\'\'" class="mealorder-on" style="text-transform: capitalize;">\n                <div style="margin-top: 2vh;"> <span class="mealtitle">{{order.meal_typedinner}}</span><span *ngIf="order.guestcountdinner!=\'\' && order.gueststatusdinner!=\'\' && order.statusdinner==order.gueststatusdinner" class="mealtitle">, Guest Meal x {{order.guestcountdinner}}</span></div>\n               \n              </ion-row>\n\n              <ion-row *ngIf="order.meal_typedinner!=\'\'" class="mealorder-on" style="text-transform: capitalize;">\n                <span *ngIf="order.gueststatusdinner!=\'\' && order.statusdinner!=order.gueststatusdinner && order.guestcountdinner!=\'\'" class="mealtitle">Dinner - Guest Meal x {{order.guestcountlunch}}</span> \n              </ion-row>\n\n\n              <ion-row *ngIf="order.meal_typedinner==\'\'" class="mealorder-on" style="text-transform: capitalize;">\n                <span *ngIf="order.guestcountdinner!=\'\'" class="mealtitle">Dinner - Guest Meal x {{order.guestcountdinner}}</span>\n              </ion-row>\n            </ion-col>\n            <!-- end -->\n\n\n\n\n            <ion-col style="padding:0;">\n              <ion-row *ngIf="order.meal_typelunch!=\'\'" class="mealorder-on extreme-right" style="text-transform: capitalize;"><span>{{order.statuslunch}}</span>\n\n                <p class="mealorder-on3" *ngIf="order.statuslunch==\'undelivered\'"></p>\n                <p class="mealorder-on2" *ngIf="order.statuslunch==\'delivered\'"></p>\n                <p class="mealorder-on1" *ngIf="order.statuslunch==\'cancelled\'"></p>\n              </ion-row>\n              \n              <ion-row *ngIf="order.meal_typelunch!=\'\'" class="mealorder-on extreme-right" style="text-transform: capitalize;"><span *ngIf="order.gueststatuslunch!=\'\' && order.statuslunch!=order.gueststatuslunch && order.guestcountlunch!=\'\'"><span *ngIf="order.lunchsame!=\'1\'">{{order.gueststatuslunch}}</span></span>\n                <p class="mealorder-on3" *ngIf="order.gueststatuslunch==\'undelivered\' && order.lunchsame!=\'1\'"></p>\n                <p class="mealorder-on2" *ngIf="order.gueststatuslunch==\'delivered\' && order.lunchsame!=\'1\'"></p>\n                <p class="mealorder-on1" *ngIf="order.gueststatuslunch==\'cancelled\' && order.lunchsame!=\'1\'"></p>\n              </ion-row>\n\n              <ion-row  *ngIf="order.meal_typelunch==\'\'" class="mealorder-on extreme-right" style="text-transform: capitalize;"><span *ngIf="order.guestcountlunch!=\'\'">{{order.gueststatuslunch}}</span>\n                <p class="mealorder-on3" *ngIf="order.gueststatuslunch==\'undelivered\'"></p>\n                <p class="mealorder-on2" *ngIf="order.gueststatuslunch==\'delivered\'"></p>\n                <p class="mealorder-on1" *ngIf="order.gueststatuslunch==\'cancelled\'"></p>\n              </ion-row>\n              <!-- lunch end -->\n              \n              <ion-row *ngIf="order.meal_typedinner!=\'\'" class="mealorder-on extreme-right" style="text-transform: capitalize;"><span>{{order.statusdinner}}</span>\n                <p class="mealorder-on3" *ngIf="order.statusdinner==\'undelivered\'"></p>\n                <p class="mealorder-on2" *ngIf="order.statusdinner==\'delivered\'"></p>\n                <p class="mealorder-on1" *ngIf="order.statusdinner==\'cancelled\'"></p>\n              </ion-row>    \n              \n              <ion-row *ngIf="order.meal_typedinner!=\'\'" class="mealorder-on extreme-right" style="text-transform: capitalize;"><span *ngIf="order.gueststatusdinner!=\'\' && order.statusdinner!=order.gueststatusdinner && order.guestcountdinner!=\'\'"><span *ngIf="order.dinnersame!=\'1\'">{{order.gueststatusdinner}}</span></span>\n                <p class="mealorder-on3" *ngIf="order.gueststatusdinner==\'undelivered\' && order.dinnersame!=\'1\'"></p>\n                <p class="mealorder-on2" *ngIf="order.gueststatusdinner==\'delivered\' && order.dinnersame!=\'1\'"></p>\n                <p class="mealorder-on1" *ngIf="order.gueststatusdinner==\'cancelled\' && order.dinnersame!=\'1\'"></p>\n              </ion-row>    \n\n              <ion-row *ngIf="order.meal_typedinner==\'\'"  class="mealorder-on extreme-right" style="text-transform: capitalize;"><span *ngIf="order.guestcountdinner!=\'\'">{{order.gueststatusdinner}}</span>\n                <p class="mealorder-on3" *ngIf="order.gueststatusdinner==\'undelivered\'"></p>\n                <p class="mealorder-on2" *ngIf="order.gueststatusdinner==\'delivered\'"></p>\n                <p class="mealorder-on1" *ngIf="order.gueststatusdinner==\'cancelled\'"></p>\n              </ion-row> \n\n            </ion-col>\n          </ion-row>\n          <hr *ngIf="order.meal_typelunch!=\'\' || order.meal_typedinner!=\'\'">\n        </div>\n        <div *ngIf="showData==true" style="padding-top: 30vh;">\n          No Records to Display\n        </div>\n        \n      </ion-grid>\n    </div>\n   \n  </div>\n\n</div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/mealhistory/mealhistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */]])
    ], MealhistoryPage);
    return MealhistoryPage;
}());

//# sourceMappingURL=mealhistory.js.map

/***/ })

});
//# sourceMappingURL=33.js.map