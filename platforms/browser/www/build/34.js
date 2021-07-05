webpackJsonp([34],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginotpPageModule", function() { return LoginotpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginotp__ = __webpack_require__(922);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginotpPageModule = (function () {
    function LoginotpPageModule() {
    }
    LoginotpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loginotp__["a" /* LoginotpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loginotp__["a" /* LoginotpPage */]),
            ],
        })
    ], LoginotpPageModule);
    return LoginotpPageModule;
}());

//# sourceMappingURL=loginotp.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginotpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_local_notifications__ = __webpack_require__(95);
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
 * Generated class for the LoginotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginotpPage = (function () {
    function LoginotpPage(apiService, nav, builder, util, translate, push, storage, datePipe, navParams, platform, alertCtrl, ionicApp, localNotifications, keyboard) {
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.translate = translate;
        this.push = push;
        this.storage = storage;
        this.datePipe = datePipe;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.ionicApp = ionicApp;
        this.localNotifications = localNotifications;
        this.keyboard = keyboard;
        this.resemail = '';
        this.active = true;
        var fields = {
            number1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            number2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            number3: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            number4: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        };
        this.loginOTPForm = this.builder.group(fields);
        this.newmobilenumis = navParams.get('newmobilenumis');
        this.initializeBackButtonCustomHandler();
    }
    LoginotpPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    LoginotpPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.back();
        }
    };
    LoginotpPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('custstatus') == 'registered') {
            this.mobnum = localStorage.getItem('mobile_number');
        }
        else {
            this.mobnum = localStorage.getItem('num');
        }
        this.time = localStorage.getItem('currDate');
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
        this.customerstatus = localStorage.getItem('custstatus');
        this.imeinum = localStorage.getItem('IMEI');
        this.custtype = localStorage.getItem('custType');
        this.newnum = localStorage.getItem('newnum');
    };
    LoginotpPage.prototype.scheduler = function () {
        //this.actions = 'http://localhost/index.html#/loginotp';
        this.localNotifications.schedule({
            title: "We can't wait to serve you",
            text: 'Real home-cooked food is only some clicks away!',
            trigger: { every: { hour: 9 }, count: 1 },
            led: 'FF0000',
            smallIcon: "res://mipmap-ldpi/ic_launcher.png",
            sound: null
        });
    };
    LoginotpPage.prototype.scheduler1 = function () {
        //this.actions = 'http://localhost/index.html#/loginotp';
        this.localNotifications.schedule({
            title: "We can't wait to serve you",
            text: 'Real home-cooked food is only some clicks away!',
            trigger: { every: { hour: 21, minute: 15 }, count: 1 },
            smallIcon: "res://mipmap-ldpi/ic_launcher.png",
            led: 'FF0000',
            sound: null
        });
    };
    LoginotpPage.prototype.ionViewDidLoad = function () {
    };
    LoginotpPage.prototype.displaylogin = function () {
        this.nav.setRoot('LoginPage');
    };
    LoginotpPage.prototype.displayaboutyou = function () {
        this.nav.setRoot('AboutyouPage');
    };
    LoginotpPage.prototype.gotoNextField = function (nextElement) {
        nextElement.focus();
    };
    LoginotpPage.prototype.otpController = function (event, next, prev) {
        if (event.target.value.length < 1 && prev) {
            prev.focus();
        }
        else if (next && event.target.value.length > 0) {
            next.focus();
        }
        else {
            return 0;
        }
    };
    LoginotpPage.prototype.verifyloginotp = function () {
        var _this = this;
        this.util.showLoader();
        var data = JSON.parse(JSON.stringify(this.loginOTPForm.value));
        var otp = (data.number1.toString() + data.number2.toString() + data.number3.toString() + data.number4.toString());
        this.apiService.Verifyotp(this.mobnum, otp, this.time, this.token, this.id, this.newnum).then(function (res) {
            if (res.success) {
                _this.util.hideLoader();
                if (res.msg == 'Otp matched successfully') {
                    var currentDate = new Date();
                    var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
                    _this.days = weekdays[currentDate.getDay()];
                    _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                    _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                    localStorage.setItem('ShowOTP', '0');
                    _this.resemail = res.data.email;
                    _this.firstname = res.data.firstname;
                    if (_this.firstname == null) {
                        _this.firstname = '';
                    }
                    _this.lastname = res.data.lastname;
                    if (_this.lastname == null) {
                        _this.lastname = '';
                    }
                    else if (_this.lastname == 'null') {
                        _this.lastname = '';
                    }
                    _this.number = res.data.number;
                    if (_this.number == null) {
                        _this.number = '';
                    }
                    _this.profession = res.data.profession;
                    if (_this.profession == null) {
                        _this.profession = '';
                    }
                    else if (_this.profession == '0') {
                        _this.profession = '';
                    }
                    else {
                        localStorage.setItem('proflid', _this.profession);
                        localStorage.setItem('profname', '');
                    }
                    localStorage.setItem('firstname', _this.firstname);
                    localStorage.setItem('lastname', _this.lastname);
                    localStorage.setItem('Emailid', _this.resemail);
                    if (_this.newmobilenumis == "Active2") {
                        var personal = "Active2";
                        localStorage.setItem('num', _this.newnum);
                        localStorage.removeItem('mobile_number');
                        localStorage.setItem('mobile_number', _this.newnum);
                        if (_this.days == 'wednesday') {
                            _this.scheduler1();
                        }
                        else if (_this.days == 'sunday') {
                            _this.scheduler();
                        }
                        _this.nav.setRoot('AccountPage', {
                            newmobilenumis: personal
                        });
                    }
                    else if (_this.customerstatus == "registered") {
                        if (_this.resemail == '') {
                            localStorage.setItem('ShowAbout', '1');
                            if (_this.days == 'wednesday') {
                                _this.scheduler1();
                            }
                            else if (_this.days == 'sunday') {
                                _this.scheduler();
                            }
                            _this.nav.setRoot('AboutyouPage');
                        }
                        else {
                            if (localStorage.getItem('customer_payement_status') == 'success') {
                                if (_this.newmobilenumis == "Active2") {
                                    var personal = "Active2";
                                    localStorage.setItem('num', _this.newnum);
                                    if (_this.days == 'wednesday') {
                                        _this.scheduler1();
                                    }
                                    else if (_this.days == 'sunday') {
                                        _this.scheduler();
                                    }
                                    _this.nav.setRoot('AccountPage', {
                                        newmobilenumis: personal
                                    });
                                }
                                else {
                                    _this.nav.setRoot('MenuPage');
                                }
                            }
                            else {
                                if (localStorage.getItem('subscription_id') != null) {
                                    if (localStorage.getItem('mealType') != null) {
                                        if (localStorage.getItem('lunch_products') != null || localStorage.getItem('dinner_products') != null) {
                                            if (localStorage.getItem('statdatescreen') != null) {
                                                if (localStorage.getItem('selectlunchtime') != null || localStorage.getItem('selectdinnertime') != null) {
                                                    if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
                                                        if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
                                                            if (localStorage.getItem('payment_id') != null) {
                                                                _this.nav.setRoot('DashboardPage');
                                                            }
                                                            else {
                                                                if (_this.days == 'wednesday') {
                                                                    _this.scheduler1();
                                                                }
                                                                else if (_this.days == 'sunday') {
                                                                    _this.scheduler();
                                                                }
                                                                _this.nav.setRoot('CheckoutPage');
                                                            }
                                                        }
                                                        if (_this.days == 'wednesday') {
                                                            _this.scheduler1();
                                                        }
                                                        else if (_this.days == 'sunday') {
                                                            _this.scheduler();
                                                        }
                                                        _this.nav.setRoot('ChoosedeliveryaddressPage');
                                                    }
                                                    else {
                                                        if (_this.days == 'wednesday') {
                                                            _this.scheduler1();
                                                        }
                                                        else if (_this.days == 'sunday') {
                                                            _this.scheduler();
                                                        }
                                                        _this.nav.setRoot('WhereToDeliverePage');
                                                    }
                                                }
                                                else {
                                                    if (_this.days == 'wednesday') {
                                                        _this.scheduler1();
                                                    }
                                                    else if (_this.days == 'sunday') {
                                                        _this.scheduler();
                                                    }
                                                    _this.nav.setRoot('ChoosedeliverytimePage');
                                                }
                                            }
                                            else {
                                                if (_this.days == 'wednesday') {
                                                    _this.scheduler1();
                                                }
                                                else if (_this.days == 'sunday') {
                                                    _this.scheduler();
                                                }
                                                _this.nav.setRoot('StartdatePage');
                                            }
                                        }
                                        else {
                                            if (_this.days == 'wednesday') {
                                                _this.scheduler1();
                                            }
                                            else if (_this.days == 'sunday') {
                                                _this.scheduler();
                                            }
                                            _this.nav.setRoot('ChoosePreferencePage');
                                        }
                                    }
                                    else {
                                        if (_this.days == 'wednesday') {
                                            _this.scheduler1();
                                        }
                                        else if (_this.days == 'sunday') {
                                            _this.scheduler();
                                        }
                                        _this.nav.setRoot('MealtypePage');
                                    }
                                }
                                else {
                                    if (localStorage.getItem('ShowAbout') == 'undefined' || localStorage.getItem('ShowAbout') == null || localStorage.getItem('ShowAbout') == 'null') {
                                        localStorage.setItem('ShowAbout', '1');
                                        if (_this.days == 'wednesday') {
                                            _this.scheduler1();
                                        }
                                        else if (_this.days == 'sunday') {
                                            _this.scheduler();
                                        }
                                        _this.nav.setRoot('AboutyouPage');
                                    }
                                    else {
                                        if (_this.days == 'wednesday') {
                                            _this.scheduler1();
                                        }
                                        else if (_this.days == 'sunday') {
                                            _this.scheduler();
                                        }
                                        _this.nav.setRoot('ChooseplanPage');
                                    }
                                }
                            }
                        }
                    }
                    else {
                        localStorage.setItem('ShowAbout', '1');
                        if (_this.days == 'wednesday') {
                            _this.scheduler();
                        }
                        else if (_this.days == 'sunday') {
                            _this.scheduler();
                        }
                        _this.nav.setRoot('AboutyouPage');
                    }
                }
                else {
                    // this.util.alert(this.translate.instant(res.msg), 'OTP Verification');
                    _this.conmessage = res.msg;
                    _this.showConfirmAlert2();
                    return;
                }
            }
            else if (otp != localStorage.getItem('otp') && otp != '') {
                _this.util.hideLoader();
                _this.conmessage = res.message;
                _this.showConfirmAlert();
                // this.util.alert(this.translate.instant(res.data), '');
                // return;
            }
            else if (otp == '' || otp == null) {
                _this.util.hideLoader();
                _this.util.alert(_this.translate.instant('Please enter OTP'), '');
            }
        }, function (res) {
            _this.util.hideLoader();
            _this.util.alert(_this.translate.instant(res.message), '');
        });
    };
    LoginotpPage.prototype.doLogin = function () {
        var _this = this;
        this.util.showLoader();
        var alldata = {
            number: this.mobnum,
            customer_type: this.custtype,
            imei_number: this.imeinum
        };
        var data = JSON.parse(JSON.stringify(alldata));
        this.apiService.login(data).then(function (res) {
            _this.util.hideLoader();
            if (res.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                localStorage.removeItem('token');
                localStorage.setItem('token', res.data.token);
                var tokenlogin = localStorage.getItem('token');
                localStorage.removeItem('otp');
                localStorage.setItem('otp', res.data.otp);
                _this.currDate = _this.datePipe.transform(new Date(), "HH:mm:ss");
                localStorage.setItem('currDate', _this.currDate);
                var optTimezone = localStorage.getItem('currDate');
                _this.util.alert(_this.translate.instant('OTP sent to Your Mobile Number.'), '');
                _this.nav.setRoot('LoginotpPage');
            }
            else {
                _this.conmessage = res.message;
                _this.showConfirmAlert();
            }
        }, function (res) {
            _this.util.hideLoader();
            _this.conmessage = "Something's wrong, let's try again?";
            ;
            _this.showConfirmAlert();
        });
    };
    LoginotpPage.prototype.back = function () {
        console.log('The keyboard is open:', this.keyboard.isOpen());
        var element = document.getElementById("myDIV");
        if (element) {
            element.classList.remove("mystyle");
        }
        localStorage.removeItem('custstatus');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('newnum');
        var backDrop = document.getElementsByTagName('ion-alert');
        if (backDrop.length > 0) {
            for (var i = 0; i < backDrop.length; i++) {
                backDrop[i].style.display = 'none';
            }
        }
        else {
            this.nav.setRoot('LoginPage', {});
        }
    };
    LoginotpPage.prototype.showConfirmAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
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
    LoginotpPage.prototype.classadded = function () {
        console.log('The keyboard is open:', this.keyboard.isOpen());
        if (this.keyboard.isOpen() == true) {
            var element = document.getElementById("myDIV");
            if (element) {
                element.classList.add("mystyle");
            }
        }
        else {
            console.log('The keyboard is open:', this.keyboard.isOpen());
            var element = document.getElementById("myDIV");
            if (element) {
                element.classList.remove("mystyle");
            }
        }
    };
    LoginotpPage.prototype.showConfirmAlert2 = function () {
        return __awaiter(this, void 0, void 0, function () {
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
                                    text: 'Ok',
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
    LoginotpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loginotp',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/loginotp/loginotp.html"*/'\n<ion-header no-border class="dit-type-header otp-headeer" (click)="classadded()">\n	<ion-navbar>\n	  <ion-buttons left>\n		 <button ion-button icon-only (click)="back()">\n		  <img src="assets/imgicon/Group 51.svg" class="backIcon">\n		 </button>\n	  </ion-buttons>\n	</ion-navbar>\n  </ion-header>\n\n<ion-content class="loginotp-content" (click)="classadded()" id="myDIV">\n	<div class="loginotp1">\n		<ion-grid>\n			<ion-row>\n				<ion-col class="text-center">\n					<img class="otp_img" src="assets/OTP_ic.svg">\n				</ion-col>\n			</ion-row>\n			<form>\n				<ion-row>\n					<ion-col class="enter-otp text-center">\n						<h1>Enter OTP</h1>\n						<p>We have sent you Access Code <br> Via SMS for mobile number verification </p>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col class="enter-otp1 text-center">\n						<div class="otp-box">\n							<input type="tel" maxlength="1" #otp1 (keyup)="otpController($event,otp2,\'\')"\n								[formControl]="loginOTPForm.controls.number1">\n						</div>\n						<div class="otp-box">\n							<input type="tel" maxlength="1" #otp2 (keyup)="otpController($event,otp3,otp1)"\n								[formControl]="loginOTPForm.controls.number2">\n						</div>\n						<div class="otp-box">\n							<input type="tel" maxlength="1" #otp3 (keyup)="otpController($event,otp4,otp2)"\n								[formControl]="loginOTPForm.controls.number3">\n						</div>\n						<div class="otp-box" style="margin-right: 0rem;">\n							<input type="tel" maxlength="1" #otp4 (keyup)="otpController($event,\'\',otp3)"\n								[formControl]="loginOTPForm.controls.number4">\n						</div>\n					</ion-col>\n				</ion-row>\n\n			</form>\n\n		</ion-grid>\n		<ion-footer className="ion-no-border" class="common-footer login-otp-footer" (click)="classadded()">\n			<ion-toolbar>\n				<ion-row>\n					<ion-col style="padding: 0 5.333vw;">\n						<div class="submit-otp1">\n							<button ion-button type="submit" class="otp-click" block (click)="verifyloginotp()">\n								Verify Now\n							</button>\n							<!-- <button ion-button block (click)="singlenotification()">One notification</button> -->\n						</div>\n					</ion-col>\n				</ion-row>\n		\n				<ion-col text-center style="width: 100%;float: left;">\n					<div class="otp-receive">\n						Didn\'t receive ?\n						<a href="javascript:void(0);" (click)="doLogin()"> Resend OTP</a>\n					</div>\n				</ion-col>\n				</ion-toolbar>\n				</ion-footer>\n\n	</div>\n</ion-content>\n<!-- <ion-footer className="ion-no-border" class="common-footer login-otp-footer" (click)="classadded()">\n	<ion-toolbar> -->\n		<!-- <ion-row>\n			<ion-col style="padding: 0 5.333vw;">\n				<div class="submit-otp1">\n					<button ion-button type="submit" class="otp-click" block (click)="verifyloginotp()">\n						Verify Now\n					</button>\n				</div>\n			</ion-col>\n		</ion-row> -->\n\n		<!-- <ion-col text-center style="width: 100%;float: left;">\n			<div class="otp-receive">\n				Didn\'t receive ?\n				<a href="javascript:void(0);" (click)="doLogin()"> Resend OTP</a>\n			</div>\n		</ion-col> -->\n		<!-- </ion-toolbar>\n		</ion-footer> -->'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/loginotp/loginotp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */]])
    ], LoginotpPage);
    return LoginotpPage;
}());

//# sourceMappingURL=loginotp.js.map

/***/ })

});
//# sourceMappingURL=34.js.map