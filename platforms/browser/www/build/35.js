webpackJsonp([35],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingsecondPageModule", function() { return LoadingsecondPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loadingsecond__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoadingsecondPageModule = (function () {
    function LoadingsecondPageModule() {
    }
    LoadingsecondPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loadingsecond__["a" /* LoadingsecondPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loadingsecond__["a" /* LoadingsecondPage */]),
            ],
        })
    ], LoadingsecondPageModule);
    return LoadingsecondPageModule;
}());

//# sourceMappingURL=loadingsecond.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingsecondPage; });
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
 * Generated class for the LoadingsecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoadingsecondPage = (function () {
    function LoadingsecondPage(navCtrl, navParams, apiService, util, viewCtrl, atrCtrl, modalCtrl, platform, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.util = util;
        this.viewCtrl = viewCtrl;
        this.atrCtrl = atrCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.ionicApp = ionicApp;
    }
    LoadingsecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoadingsecondPage');
    };
    LoadingsecondPage.prototype.ngOnInit = function () {
        this.initTimer();
        this.startTimer();
    };
    LoadingsecondPage.prototype.initTimer = function () {
        // Pomodoro is usually for 25 minutes
        if (!this.timeInSeconds) {
            this.timeInSeconds = 1800;
        }
        this.time = this.timeInSeconds;
        this.runTimer = false;
        this.hasStarted = false;
        this.hasFinished = false;
        this.remainingTime = this.timeInSeconds;
        this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
        console.log(this.displayTime);
    };
    LoadingsecondPage.prototype.startTimer = function () {
        this.runTimer = true;
        this.hasStarted = true;
        this.timerTick();
    };
    LoadingsecondPage.prototype.pauseTimer = function () {
        this.runTimer = false;
    };
    LoadingsecondPage.prototype.resumeTimer = function () {
        this.startTimer();
    };
    LoadingsecondPage.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.runTimer) {
                return;
            }
            _this.remainingTime--;
            console.log(_this.remainingTime);
            _this.displayTime = _this.getSecondsAsDigitalClock(_this.remainingTime);
            if (_this.remainingTime == 1797) {
                _this.buttonhide();
            }
            else if (_this.remainingTime == 1780) {
                _this.order_id = localStorage.getItem('customer_order_payement_id');
                _this.payment_id = "";
                _this.paymentstatus = "";
                _this.apiService.statuscheck(_this.order_id, _this.payment_id, _this.paymentstatus).then(function (res) {
                    if (res['success']) {
                        _this.pauseTimer();
                        localStorage.setItem('customer_payement_status', 'success');
                        _this.navCtrl.setRoot('PaymentsuccessfulPage');
                    }
                    else if (res['success'] == 'inprogress') {
                        _this.fifteensecond = _this.remainingTime - 15;
                    }
                    else {
                        _this.pauseTimer();
                        _this.navCtrl.setRoot('PaymentfailedPage');
                    }
                }).catch(function (err) {
                    // this.navCtrl.setRoot('PaymentfailedPage');
                });
            }
            else if (_this.remainingTime == _this.fifteensecond) {
                _this.order_id = localStorage.getItem('customer_order_payement_id');
                _this.payment_id = "";
                _this.paymentstatus = "";
                _this.apiService.statuscheck(_this.order_id, _this.payment_id, _this.paymentstatus).then(function (res) {
                    if (res['success'] == true) {
                        _this.pauseTimer();
                        localStorage.setItem('customer_payement_status', 'success');
                        _this.navCtrl.setRoot('PaymentsuccessfulPage');
                    }
                    else if (res['success'] == 'inprogress') {
                        _this.fifteensecond = _this.remainingTime - 15;
                    }
                    else {
                        _this.pauseTimer();
                        _this.navCtrl.setRoot('PaymentfailedPage');
                    }
                }).catch(function (err) {
                    // this.navCtrl.setRoot('PaymentfailedPage');
                });
            }
            else if (_this.remainingTime == 0) {
                _this.pauseTimer();
                // if (window.history.state.modal) {
                history.back();
                // }
                // document.getElementById('modal-close').click();
                // this.model.dismiss();
                _this.navCtrl.setRoot('CheckoutPage');
            }
            console.log(_this.displayTime);
            if (_this.remainingTime > 0) {
                _this.timerTick();
            }
            else {
                _this.hasFinished = true;
            }
        }, 1000);
    };
    LoadingsecondPage.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    //rzp_live_AAPrMXQhJP49GU
    //rzp_test_uZ1iWGWR9vDDSM // old //rzp_test_1DP5mmOlF5G5ag //rzp_test_zTdGNuEfmCHtil
    //rzp_test_e1wp9DFMzylCAL // new test key
    LoadingsecondPage.prototype.buttonhide = function () {
        var _this = this;
        this.Total = localStorage.getItem('Total');
        this.amount = String(this.Total);
        this.amount = this.amount.replace('.', '');
        this.email = localStorage.getItem('email');
        this.customer_name = localStorage.getItem('customer_name');
        this.mobile_number = localStorage.getItem('num');
        this.util.hideLoader();
        var options = {
            description: '',
            image: '',
            currency: 'INR',
            key: 'rzp_test_zTdGNuEfmCHtil',
            amount: this.amount,
            name: 'Mummy Meals',
            order_id: localStorage.getItem('customer_order_payement_id'),
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
                    console.log('innnnnnnnnnnnnn');
                }
            }
        };
        var successCallback = function (payment_id) {
            _this.util.showLoader();
            _this.pauseTimer();
            localStorage.setItem('customer_payement_status', 'success');
            localStorage.setItem('razorpayment_id', payment_id);
            _this.order_ids = localStorage.getItem('customer_order_payement_id');
            _this.payment_ids = localStorage.getItem('razorpayment_id');
            _this.paymentstatus = "success";
            _this.apiService.statuscheck(_this.order_ids, _this.payment_ids, _this.paymentstatus).then(function (res) {
                _this.util.hideLoader();
                if (res['success']) {
                    localStorage.setItem('successwait', 'yes');
                    document.getElementById('buttonhidden').click();
                }
                else {
                    localStorage.setItem('successwait', 'no');
                    document.getElementById('buttonhidden').click();
                }
            }).catch(function (err) {
                localStorage.setItem('successwait', 'no');
                document.getElementById('buttonhidden').click();
            });
            localStorage.setItem('successwait', 'yes');
            document.getElementById('buttonhidden').click();
        };
        var cancelCallback = function (error) {
            _this.util.showLoader();
            _this.pauseTimer();
            _this.token = localStorage.getItem('token');
            _this.id = localStorage.getItem('id');
            _this.payment_id = localStorage.getItem('payment_id');
            if (localStorage.getItem('renewis') == '1') {
                _this.renew = 1;
                _this.type = 'renew';
                localStorage.setItem('failedstatus', _this.type);
            }
            else {
                _this.renew = 0;
                _this.type = 'regular';
                localStorage.setItem('failedstatus', _this.type);
            }
            //
            _this.order_ids = localStorage.getItem('customer_order_payement_id');
            _this.payment_ids = "";
            _this.paymentstatus = "failed";
            _this.apiService.statuscheck(_this.order_ids, _this.payment_ids, _this.paymentstatus).then(function (res) {
                _this.util.hideLoader();
                if (res['success']) {
                    localStorage.setItem('successwait', 'no');
                    document.getElementById('buttonhidden').click();
                }
                else {
                    localStorage.setItem('successwait', 'no');
                    document.getElementById('buttonhidden').click();
                }
            }).catch(function (err) {
                localStorage.setItem('successwait', 'no');
                document.getElementById('buttonhidden').click();
            });
            console.log(localStorage.getItem('successwait'));
            localStorage.setItem('successwait', 'no');
            console.log(localStorage.getItem('successwait'));
            document.getElementById('buttonhidden').click();
            console.log(localStorage.getItem('successwait'));
        };
        console.log(localStorage.getItem('successwait'));
        RazorpayCheckout.open(options, successCallback.bind(this), cancelCallback.bind(this));
    };
    // this.initTimer();
    // this. startTimer();
    LoadingsecondPage.prototype.buttonhidepage = function () {
        if (localStorage.getItem('successwait') == 'yes') {
            this.navCtrl.setRoot('PaymentsuccessfulPage');
        }
        else if (localStorage.getItem('successwait') == 'no') {
            this.navCtrl.setRoot('PaymentfailedPage');
        }
    };
    LoadingsecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loadingsecond',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/loadingsecond/loadingsecond.html"*/'<!-- <ion-header no-border class="dit-type-header special-margin-checkout">\n  <ion-navbar>\n    <ion-buttons left>     \n    </ion-buttons>\n    <ion-title text-center></ion-title>   \n    \n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-content padding id="loadinsecond">\n  <button id="buttonhidden" (click)="buttonhidepage()" style="display: none;"></button> \n  <div class="loading-div" style="width: 100%; float: left;height: 100%;position: relative;">\n    <p>Redirecting to RazorPay...</p>\n    <p>Session will destroy in 30 Mins...</p>\n  <div class="loading-div-inner"><h1 text-center>{{displayTime}}</h1></div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/loadingsecond/loadingsecond.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], LoadingsecondPage);
    return LoadingsecondPage;
}());

//# sourceMappingURL=loadingsecond.js.map

/***/ })

});
//# sourceMappingURL=35.js.map