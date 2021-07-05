webpackJsonp([24],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsuccessfulPageModule", function() { return PaymentsuccessfulPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentsuccessful__ = __webpack_require__(937);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentsuccessfulPageModule = (function () {
    function PaymentsuccessfulPageModule() {
    }
    PaymentsuccessfulPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paymentsuccessful__["a" /* PaymentsuccessfulPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paymentsuccessful__["a" /* PaymentsuccessfulPage */]),
            ],
        })
    ], PaymentsuccessfulPageModule);
    return PaymentsuccessfulPageModule;
}());

//# sourceMappingURL=paymentsuccessful.module.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsuccessfulPage; });
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




/**
 * Generated class for the PaymentsuccessfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentsuccessfulPage = (function () {
    function PaymentsuccessfulPage(navCtrl, ionicApp, util, platform, apiService, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.ionicApp = ionicApp;
        this.util = util;
        this.platform = platform;
        this.apiService = apiService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.initializeBackButtonCustomHandler();
    }
    PaymentsuccessfulPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    PaymentsuccessfulPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            //this.Back();
        }
    };
    PaymentsuccessfulPage.prototype.ionViewDidLoad = function () {
    };
    PaymentsuccessfulPage.prototype.Dashboardclick = function () {
        var _this = this;
        console.log('payyyyyyyyyyyyyyyyyyyyyy starts');
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
        this.type = localStorage.getItem('failedstatus');
        console.log(this.type);
        if (this.type == null) {
            this.type = "null";
            console.log(this.type);
            localStorage.setItem('failedstatus', null);
            console.log('ttttttttttttttttttttttttt');
            // this.navCtrl.setRoot('MenuPage');
        }
        else if (this.type == "null") {
            this.type = "null";
            console.log(this.type);
            localStorage.setItem('failedstatus', null);
            console.log('ttttttttttttttttttttttttt');
            // this.navCtrl.setRoot('MenuPage');
        }
        if (this.type == "null") {
            console.log(this.type);
            localStorage.setItem('failedstatus', null);
            console.log('ttttttttttttttttttttttttt');
            this.navCtrl.setRoot('MenuPage');
        }
        else {
            this.util.showLoader();
            this.apiService.checkpayementstatus(this.custid, this.type, this.custToken).then(function (response) {
                _this.util.hideLoader();
                if (response.success) {
                    console.log(response.message);
                    if (response.message == "false") {
                        console.log(response.message);
                        // calculation
                        _this.subscription_price = localStorage.getItem('price');
                        if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
                            _this.extra_roti_lunch_price = localStorage.getItem('extraRoti_Lunch');
                        }
                        else {
                            _this.extra_roti_lunch_price = '0';
                        }
                        if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
                            _this.extra_roti_dinner_price = localStorage.getItem('extraRoti_Dinner');
                        }
                        else {
                            _this.extra_roti_dinner_price = '0';
                        }
                        var basic;
                        var basicString = _this.subscription_price.replace(',', '');
                        basic = parseFloat(basicString) + parseFloat(_this.extra_roti_lunch_price) + parseFloat(_this.extra_roti_dinner_price);
                        _this.extra_price = parseFloat(_this.extra_roti_lunch_price) + parseFloat(_this.extra_roti_dinner_price);
                        localStorage.setItem('extra_price', _this.extra_price);
                        _this.respcgst = localStorage.getItem('respcgst');
                        _this.respigst = localStorage.getItem('respigst');
                        _this.CGST = (parseFloat(basic) * _this.respcgst / 100).toFixed(2);
                        _this.IGST = (parseFloat(basic) * _this.respigst / 100).toFixed(2);
                        _this.Tax = (parseFloat(_this.CGST) + parseFloat(_this.IGST)).toFixed(2);
                        _this.Total = (parseFloat(basic) + parseFloat(_this.Tax)).toFixed(2);
                        localStorage.setItem('Total', _this.Total);
                        _this.amount = String(_this.Total);
                        _this.amount = _this.amount.replace('.', '');
                        if (localStorage.getItem('payment_id') == null) {
                            localStorage.setItem('payment_id', '0');
                        }
                        // end
                        _this.reference_id = localStorage.getItem('reference_id');
                        var lunch_products = JSON.parse(localStorage.getItem('lunch_products'));
                        var dinner_products = JSON.parse(localStorage.getItem('dinner_products'));
                        var data = [];
                        if (lunch_products) {
                            data.push(lunch_products);
                        }
                        if (dinner_products) {
                            data.push(dinner_products);
                        }
                        if (localStorage.getItem('renewis') == '1') {
                            _this.renew = 1;
                            _this.type = 'renew';
                        }
                        else {
                            _this.renew = 0;
                            _this.type = 'regular';
                        }
                        if (localStorage.getItem('updated_sub') == '1') {
                            _this.is_update = '1';
                        }
                        else {
                            _this.is_update = '0';
                        }
                        _this.apiService.addsubscriptionPlan(data, _this.CGST, _this.IGST, _this.renew, _this.reference_id, _this.is_update).then(function (res) {
                            if (res['success']) {
                                console.log('payyyyyyyyyyyyyyyyyyyyyy');
                                localStorage.setItem('failedstatus', null);
                                localStorage.setItem('customer_payement_status', 'success');
                                _this.navCtrl.setRoot('MenuPage');
                            }
                            else {
                                console.log('payyyyyyyyyyyyyyyyyyyyyyrrrrrrr');
                                localStorage.setItem('failedstatus', null);
                                _this.navCtrl.setRoot('MenuPage');
                            }
                        }).catch(function (err) {
                            localStorage.setItem('failedstatus', null);
                            console.log('payyyyyyyyyyyyyyyyyyyyyyrrrrrrryyyyyyy');
                            _this.navCtrl.setRoot('MenuPage');
                        });
                    }
                    else {
                        localStorage.setItem('failedstatus', null);
                        _this.navCtrl.setRoot('MenuPage');
                    }
                }
                else {
                    localStorage.setItem('failedstatus', null);
                    _this.navCtrl.setRoot('MenuPage');
                }
            }, function (response) {
                localStorage.setItem('failedstatus', null);
                console.log('ttttttttttttttttttttttttt');
                _this.navCtrl.setRoot('MenuPage');
            });
        }
    };
    PaymentsuccessfulPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymentsuccessful',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/paymentsuccessful/paymentsuccessful.html"*/'<!--\n  Generated template for the PaymentsuccessfulPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="paymentSucces-content">\n  <div class="pym-successful">\n    <ion-grid>\n      <ion-row>\n        <ion-col text-center style="padding: 0;">\n          <img src="assets/true_image.png" alt="TrueMark" class="trueImage" width="66%">\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style="padding: 0;">\n          <h2>Payment Successful</h2>\n          <P>“Congratulations! Your purchase has <br> been successfully completed. Enjoy <br> your home-cooked meals.”</P>\n        </ion-col>\n      </ion-row>\n      <br/>\n   \n    </ion-grid>\n    \n  </div>\n\n</ion-content>\n<ion-footer className="ion-no-border" class="footer-common" style="background-color: #fff;">\n  <ion-toolbar>\n    <ion-row class="button-bottom-payment">\n      <ion-col style="padding:0vh 3.14vh;">\n        <button ion-button type="submit" id="input_submit"  block (click)="Dashboardclick()" style="    background: #203c52;">\n          <img src="assets/CVuC5O.tif_1_2.svg" alt="food-image" style="width:3.598vh; height: 3.298vh;">  To Dashboard \n        </button>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n    </ion-footer>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/paymentsuccessful/paymentsuccessful.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PaymentsuccessfulPage);
    return PaymentsuccessfulPage;
}());

//# sourceMappingURL=paymentsuccessful.js.map

/***/ })

});
//# sourceMappingURL=24.js.map