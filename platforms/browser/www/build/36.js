webpackJsonp([36],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPaymentSuccessfulPageModule", function() { return GuestPaymentSuccessfulPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_payment_successful__ = __webpack_require__(921);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GuestPaymentSuccessfulPageModule = (function () {
    function GuestPaymentSuccessfulPageModule() {
    }
    GuestPaymentSuccessfulPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__guest_payment_successful__["a" /* GuestPaymentSuccessfulPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__guest_payment_successful__["a" /* GuestPaymentSuccessfulPage */]),
            ],
        })
    ], GuestPaymentSuccessfulPageModule);
    return GuestPaymentSuccessfulPageModule;
}());

//# sourceMappingURL=guest-payment-successful.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestPaymentSuccessfulPage; });
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
 * Generated class for the GuestPaymentSuccessfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuestPaymentSuccessfulPage = (function () {
    function GuestPaymentSuccessfulPage(navCtrl, navParams, apiService, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.util = util;
    }
    GuestPaymentSuccessfulPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuestPaymentSuccessfulPage');
    };
    GuestPaymentSuccessfulPage.prototype.Dashboardclick = function () {
        var _this = this;
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
        this.type = 'guest';
        this.util.showLoader();
        this.apiService.checkpayementstatus(this.custid, this.type, this.custToken).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                console.log(response.message);
                if (response.message == "false") {
                    //
                    _this.date = localStorage.getItem('date');
                    var payment_status = 'success';
                    _this.payment_id = localStorage.getItem('payment_id');
                    _this.Total = localStorage.getItem('guestmealtotal');
                    _this.util.showLoader();
                    _this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
                    _this.apiService.guestmeal_payment(_this.customer_subscription_id, _this.custid, _this.payment_id, payment_status, _this.Total, _this.date).then(function (res) {
                        _this.util.hideLoader();
                        if (res['success']) {
                            localStorage.removeItem('mynum1');
                            localStorage.removeItem('mynum2');
                            localStorage.removeItem('date');
                            localStorage.setItem('customer_payement_status', 'success');
                            // this.navCtrl.setRoot('GuestPaymentSuccessfulPage');
                            localStorage.setItem('failedstatus', null);
                            _this.navCtrl.setRoot('DashboardPage');
                        }
                        else {
                            localStorage.setItem('failedstatus', null);
                            _this.conmessage = res['message'];
                            _this.navCtrl.setRoot('DashboardPage');
                        }
                    }, function (response) {
                        localStorage.setItem('failedstatus', null);
                        _this.conmessage = "Something's wrong, let's try again?";
                        _this.navCtrl.setRoot('DashboardPage');
                    });
                    //
                }
                else {
                    localStorage.setItem('failedstatus', null);
                    _this.navCtrl.setRoot('DashboardPage');
                }
            }
            else {
                localStorage.setItem('failedstatus', null);
                _this.navCtrl.setRoot('DashboardPage');
            }
        }, function (response) {
            localStorage.setItem('failedstatus', null);
            _this.conmessage = "Something's wrong, let's try again?";
            _this.navCtrl.setRoot('DashboardPage');
        });
        this.navCtrl.setRoot('DashboardPage');
    };
    GuestPaymentSuccessfulPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-guest-payment-successful',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/guest-payment-successful/guest-payment-successful.html"*/'<ion-content class="paymentSucces-content">\n  <div class="pym-successful" style="margin:auto;">\n    <ion-grid>\n      <ion-row>\n        <ion-col text-center>\n          <img src="assets/true_image.png" alt="TrueMark" class="img-responsive" width="66%" style="    padding-top: 15.292353823088456vh;">\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2 style="color: rgb(53, 77, 96); text-align: center; margin:0vh;  font-family: Montserrat-Bold; font-size: 5.333vw !important;">Payment Successful</h2>\n          <P style="margin-top: 2vh; text-align:center; color: rgb(49, 74, 93);     line-height: 3.2983508245877062vh;">Congratulations! Your purchase has<br> been completed successfully.Enjoy<br> your meals!</P>\n        </ion-col>\n      </ion-row>\n      <br/>\n      \n    </ion-grid>\n    \n  </div>\n\n</ion-content>\n<ion-footer className="ion-no-border" class="footer-common">\n  <ion-toolbar>\n<ion-row>\n  <ion-col style="padding:0 5.333vw;">\n    <button ion-button type="submit" id="input_submit"  block style="background: rgb(32, 60, 82); margin: 0;" (click)="Dashboardclick()">\n      <img src="assets/CVuC5O.tif_1_2.svg" alt="food-image"  style="width:3.598vh; height: 3.298vh; margin-right: 1.742vh;"> To Dashboard \n    </button>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/guest-payment-successful/guest-payment-successful.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */]])
    ], GuestPaymentSuccessfulPage);
    return GuestPaymentSuccessfulPage;
}());

//# sourceMappingURL=guest-payment-successful.js.map

/***/ })

});
//# sourceMappingURL=36.js.map