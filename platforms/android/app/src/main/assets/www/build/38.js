webpackJsonp([38],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCheckoutPageModule", function() { return DashboardCheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_checkout__ = __webpack_require__(918);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardCheckoutPageModule = (function () {
    function DashboardCheckoutPageModule() {
    }
    DashboardCheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_checkout__["a" /* DashboardCheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard_checkout__["a" /* DashboardCheckoutPage */]),
            ],
        })
    ], DashboardCheckoutPageModule);
    return DashboardCheckoutPageModule;
}());

//# sourceMappingURL=dashboard-checkout.module.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardCheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
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
 * Generated class for the DashboardCheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardCheckoutPage = (function () {
    function DashboardCheckoutPage(navCtrl, navParams, apiService, alertCtrl, util, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.alertCtrl = alertCtrl;
        this.util = util;
        this.platform = platform;
        this.dataarr = {
            lunch: 'Lunch ',
            dinner: 'Dinner',
            CGST: 'CGST',
            IGST: 'IGST',
            Tax: 'Tax (GST)',
            Total: 'Total'
        };
        this.lunch = true;
        this.dinner = true;
        var backAction = platform.registerBackButtonAction(function () {
            //localStorage.removeItem('subscription_id')
            //this.navCtrl.pop();
            _this.Back();
            backAction();
        }, 2);
    }
    DashboardCheckoutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subdisable = true;
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.date = localStorage.getItem('date');
        this.util.showLoader();
        this.apiService.checkoutdetail(this.tokendata, this.customer_id, this.date).then(function (res) {
            _this.util.hideLoader();
            if (res['success']) {
                _this.subdisable = false;
                _this.checkoutArr = res['data'];
                _this.CGST = parseFloat(res['CGST']) + parseFloat(res['IGST']);
                //this.CGST=parseFloat
                // this.CGST =res['CGST'];
                _this.IGST = res['IGST'];
                // this.tax = CGST + IGST
                _this.total3 = res['total'];
                // this.Total= res['total'];
                _this.Total = parseFloat(_this.total3).toFixed(2);
                localStorage.setItem('guestmealtotal', _this.Total);
                _this.amount = String(_this.Total);
                _this.amount = _this.amount.replace('.', '');
                _this.mobile_number = _this.checkoutArr[0].mobile_number;
                _this.email = _this.checkoutArr[0].email;
            }
            else {
                _this.conmessage = res['message'];
                _this.showConfirmAlert1();
            }
        }, function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert1();
        });
    };
    DashboardCheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardCheckoutPage');
    };
    DashboardCheckoutPage.prototype.Back = function () {
        this.navCtrl.setRoot('OrderGuestMealPage');
    };
    DashboardCheckoutPage.prototype.onclickslidepay = function () {
        //rzp_live_AAPrMXQhJP49GU
        //rzp_test_uZ1iWGWR9vDDSM // old //rzp_test_1DP5mmOlF5G5ag //rzp_test_zTdGNuEfmCHtil
        //rzp_test_e1wp9DFMzylCAL // new test key
        var options = {
            description: '',
            image: '',
            currency: 'INR',
            key: 'rzp_test_zTdGNuEfmCHtil',
            amount: this.amount,
            name: 'Mummy Meals',
            prefill: {
                email: this.email,
                contact: this.mobile_number,
                name: this.customer_name
            },
            theme: {
                color: '#f8b13f'
            },
            modal: {
                ondismiss: function () {
                    //alert('dismissed')
                }
            }
        };
        var successCallback = function (payment_id) {
            localStorage.setItem('payment_id', payment_id);
            // this.successpayment();  
            document.getElementById('buttonhidden').click();
        };
        var cancelCallback = function (error) {
            document.getElementById('buttonhiddencancle').click();
        };
        RazorpayCheckout.open(options, successCallback.bind(this), cancelCallback.bind(this));
    };
    DashboardCheckoutPage.prototype.buttonhidecancle = function () {
        localStorage.setItem('payemntfailedguest', '1');
        this.navCtrl.setRoot('PaymentfailedPage');
    };
    DashboardCheckoutPage.prototype.buttonhide = function () {
        this.successpayment();
    };
    DashboardCheckoutPage.prototype.successpayment = function () {
        ///
        // this.lunchPreference = '';
        // this.dinnerPreference = '';
        // this.renew="";
        // this.reference_id="";
        // this.CGST="";
        // this.IGST="";
        // this.type="guest";
        // localStorage.setItem('failedstatus',this.type);
        // this.mealtype =  localStorage.getItem('guestmealtypefailed');
        // this.apiService.checkIfapifailed(this.Total,this.mealtype,this.date,this.type,this.lunchPreference,this.dinnerPreference, this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
        //     if(res['success'])
        //     {
        //         localStorage.removeItem('mynum1');
        //         localStorage.removeItem('mynum2');
        //         localStorage.removeItem('date');
        //         localStorage.setItem('customer_payement_status', 'success');
        //         this.navCtrl.setRoot('GuestPaymentSuccessfulPage');
        //     }
        //     else{
        //       this.conmessage = res['message'];
        //       this.showConfirmAlert();
        //     }
        var _this = this;
        // }).catch((res) => {
        //   this.conmessage = res['message'];
        //   this.showConfirmAlert();
        // });
        ///
        var payment_status = 'success';
        this.payment_id = localStorage.getItem('payment_id');
        this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
        this.util.showLoader();
        this.type = "guest";
        localStorage.setItem('failedstatus', this.type);
        this.apiService.guestmeal_payment(this.customer_subscription_id, this.customer_id, this.payment_id, payment_status, this.Total, this.date).then(function (res) {
            _this.util.hideLoader();
            if (res['success']) {
                localStorage.removeItem('mynum1');
                localStorage.removeItem('mynum2');
                localStorage.removeItem('date');
                localStorage.setItem('customer_payement_status', 'success');
                _this.navCtrl.setRoot('GuestPaymentSuccessfulPage');
            }
            else {
                //  this.conmessage = res['message'];
                // this.showConfirmAlert();
                _this.lunchPreference = '';
                _this.dinnerPreference = '';
                _this.renew = "";
                _this.reference_id = "";
                _this.CGST = "";
                _this.IGST = "";
                _this.type = "guest";
                localStorage.setItem('failedstatus', _this.type);
                _this.mealtype = localStorage.getItem('guestmealtypefailed');
                _this.apiService.checkIfapifailed(_this.Total, _this.mealtype, _this.date, _this.type, _this.lunchPreference, _this.dinnerPreference, _this.CGST, _this.IGST, _this.renew, _this.reference_id).then(function (res) {
                    if (res['success']) {
                        localStorage.removeItem('mynum1');
                        localStorage.removeItem('mynum2');
                        localStorage.removeItem('date');
                        localStorage.setItem('customer_payement_status', 'success');
                        _this.navCtrl.setRoot('GuestPaymentSuccessfulPage');
                    }
                    else {
                        _this.conmessage = res['message'];
                        _this.showConfirmAlert();
                    }
                }).catch(function (err) {
                    _this.conmessage = err['message'];
                    _this.showConfirmAlert();
                });
            }
        }).catch(function (err) {
            _this.tokendata = localStorage.getItem('token');
            _this.customer_id = localStorage.getItem('id');
            _this.payment_id = localStorage.getItem('payment_id');
            _this.type = 'guest';
            localStorage.setItem('failedstatus', _this.type);
            _this.apiService.payementfail(_this.customer_id, _this.type, _this.tokendata, _this.payment_id, _this.amount).then(function (res) {
                _this.navCtrl.setRoot('PaymentfailedPage');
            }).catch(function (err) {
                RazorpayCheckout.close();
                _this.navCtrl.setRoot('PaymentfailedPage');
            });
            RazorpayCheckout.close();
            localStorage.setItem('payemntfailedguest', '1');
            _this.navCtrl.setRoot('PaymentfailedPage');
        });
    };
    DashboardCheckoutPage.prototype.onclickslidepaydummy = function () {
        this.payment_id = 131222;
        localStorage.setItem('payment_id', this.payment_id);
        this.successpayment();
    };
    DashboardCheckoutPage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('DashboardPage');
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
    DashboardCheckoutPage.prototype.showConfirmAlert1 = function () {
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
                                        _this.navCtrl.setRoot('DashboardCheckoutPage');
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
    DashboardCheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard-checkout',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/dashboard-checkout/dashboard-checkout.html"*/'<ion-header no-border class="dit-type-header orderGuestmeal">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>ORDER GUEST MEAL</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content order-scroll">\n\n  <div class="screen-heading">\n    <span>Almost Here</span>\n    <h2>Checkout</h2>\n  </div>\n  <div class="checkout-ordermeal">\n    <ion-col>\n      <button id="buttonhidden" (click)="buttonhide()" style="display: none;"></button>\n      <button id="buttonhiddencancle" (click)="buttonhidecancle()" style="display: none;"></button>\n      <div class="main-checkout-box">\n        <h3 >PRICE BREAKDOWN</h3>\n        <ion-row *ngFor="let mealTypes of checkoutArr; let i=index">\n        <ion-col> \n            <label  class="first-label">{{mealTypes.mealtype}} ( {{mealTypes.quantity}} * {{mealTypes.singleprice}})</label>\n            <label class="second-label first-label">Rs.{{mealTypes.total}}</label>\n          </ion-col>\n        </ion-row>\n    \n      <ion-row>\n        <ion-col> \n          <label class="first-label">{{dataarr.Tax}} </label>\n          <label class="second-label first-label">Rs.{{CGST}}</label>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col> \n          <label class="first-label">{{dataarr.IGST}} </label>\n          <label class="second-label first-label">Rs.{{IGST}}</label>\n        </ion-col>\n      </ion-row> -->\n      <hr class="newline">\n     \n      <ion-row>\n        <ion-col> \n          <label class="total-label">{{dataarr.Total}}</label>\n          <label class="second-label total-label">Rs.{{Total}}</label>\n           \n        </ion-col>\n      </ion-row>\n         \n      </div>\n    </ion-col>\n \n  </div>\n  \n</ion-content>\n\n<ion-footer className="ion-no-border" class="footer-common">\n  <ion-toolbar>\n<ion-grid class="bottom-button">\n  <ion-row>\n    <ion-col style="padding: 0;">\n     <button ion-button type="submit" id="input_submit" style="background: #f8b13f;" block  (click)="onclickslidepay()" class="checkout-slide">\n      <label class="button-content">Pay</label> \n      <label class="checkout-total">  &#8377; {{Total}}</label>\n      <img src="assets/pay-arrow.png" alt="TrueMark" class="img-responsive" >  \n      </button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-toolbar>\n</ion-footer>\n  \n  \n  '/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/dashboard-checkout/dashboard-checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], DashboardCheckoutPage);
    return DashboardCheckoutPage;
}());

//# sourceMappingURL=dashboard-checkout.js.map

/***/ })

});
//# sourceMappingURL=38.js.map