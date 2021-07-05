webpackJsonp([44],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
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
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams, apiService, util, translate, viewCtrl, atrCtrl, platform, keyboard, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.util = util;
        this.translate = translate;
        this.viewCtrl = viewCtrl;
        this.atrCtrl = atrCtrl;
        this.platform = platform;
        this.keyboard = keyboard;
        this.ionicApp = ionicApp;
        this.renew = 0;
        this.referCode = '';
        this.reference_id = '0';
        this.lunchtime = false;
        this.Dinnertime = false;
        this.ladd = false;
        this.dadd = false;
        this.coundays = 1;
        this.dataarr = {
            month: '1 Month Subscription',
            ExtraRoti: 'Extra Bread',
            ExtraRice: 'Extra Rice',
            Tax: 'Tax (GST)',
            Total: 'Total'
        };
        this.summaryWhiteArrow = "assets/imgicon/Group 210.svg";
        this.summaryBlackArrow = "assets/imgicon/Group_214.svg";
        this.paymentWhiteArrow = "assets/imgicon/Group 210.svg";
        this.paymentBlackArrow = "assets/imgicon/Group 209.svg";
        this.isdisable = false;
        this.conbut1 = 'rgb(216, 216, 216)';
        this.maxtime = 30;
        this.ActiveChkSumm = true;
        this.ActiveChkMethod = false;
        this.initializeBackButtonCustomHandler();
    }
    CheckoutPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    CheckoutPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    CheckoutPage.prototype.ionViewDidLoad = function () {
    };
    CheckoutPage.prototype.ngOnInit = function () {
        localStorage.setItem('successwait', 'null');
        localStorage.setItem('failedstatus', null);
        localStorage.setItem('reference_id', '0');
        this.mealtype = localStorage.getItem('mealType');
        this.dataarr.month = localStorage.getItem('subscription_type');
        this.summeryColor = 'white';
        this.paymentColor = 'rgb(121, 138, 151)';
        if (this.mealtype == "Both") {
            this.mealtype = "Lunch and Dinner";
            this.lunchdis = "Lunch";
            this.dinnerdis = "Dinner";
            this.lunchtime = true;
            this.Dinnertime = true;
            this.ladd = true;
            this.dadd = true;
        }
        else if (this.mealtype == "Lunch") {
            this.lunchdis = "Lunch";
            this.lunchtime = true;
            this.Dinnertime = false;
            this.ladd = true;
            this.dadd = false;
        }
        else if (this.mealtype == "Dinner") {
            this.dinnerdis = "Dinner";
            this.lunchtime = false;
            this.Dinnertime = true;
            this.ladd = false;
            this.dadd = true;
        }
        this.lunchPreference = localStorage.getItem('preferenceProducts');
        this.dinnerPreference = localStorage.getItem('preferenceProductsDinner');
        this.startdate = localStorage.getItem('StartDate');
        this.currentdate = new Date();
        this.setdatecurrentdate = new Date(this.currentdate.getFullYear(), this.currentdate.getMonth(), this.currentdate.getDate() + 1).toISOString().valueOf();
        if (this.startdate > this.setdatecurrentdate) {
        }
        else {
            this.startdate = new Date(this.currentdate.getFullYear(), this.currentdate.getMonth(), this.currentdate.getDate() + 2).toISOString().substring(0, 10);
            this.days = parseInt(localStorage.getItem('mealdays'));
            this.total_total = this.days - this.coundays;
            var curr = new Date(this.startdate); // get current date
            var first = curr.getDate(); // First day is the day of the month - the day of the week
            var last = first + parseInt(this.total_total); // last day is the first day + 6
            this.firstDay = new Date(curr.setDate(first)).toISOString();
            this.lastDay = new Date(curr.setDate(last)).toISOString();
            this.startdate = localStorage.setItem('StartDate', this.startdate);
            localStorage.setItem('endDate', this.lastDay);
        }
        this.startdate = localStorage.getItem('StartDate');
        //
        this.enddate = localStorage.getItem('endDate');
        this.deliverytime = localStorage.getItem('dinnertime');
        this.lunchdeliverytime = localStorage.getItem('lunchtime');
        this.Lunchadd = localStorage.getItem('Ladd');
        this.Dinneradd = localStorage.getItem('Dadd');
        localStorage.setItem('backchooseaddress', '1');
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.subscription_id = localStorage.getItem('subscription_id');
        if (this.subscription_id == '1') {
            localStorage.setItem('refer_subscriptions', '1');
            this.isdisable = true;
            this.subdisable = true;
        }
        else {
            localStorage.setItem('refer_subscriptions', '0');
            this.isdisable = true;
            this.subdisable = false;
        }
        this.customer_name = localStorage.getItem('customer_name');
        this.mobile_number = localStorage.getItem('num');
        this.email = localStorage.getItem('email');
        this.subscription_price = localStorage.getItem('price');
        if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
            this.extra_roti_lunch_price = localStorage.getItem('extraRoti_Lunch');
        }
        else {
            this.extra_roti_lunch_price = '0';
        }
        if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
            this.extra_roti_dinner_price = localStorage.getItem('extraRoti_Dinner');
        }
        else {
            this.extra_roti_dinner_price = '0';
        }
        var basic;
        var basicString = this.subscription_price.replace(',', '');
        basic = parseFloat(basicString) + parseFloat(this.extra_roti_lunch_price) + parseFloat(this.extra_roti_dinner_price);
        this.extra_price = parseFloat(this.extra_roti_lunch_price) + parseFloat(this.extra_roti_dinner_price);
        localStorage.setItem('extra_price', this.extra_price);
        this.respcgst = localStorage.getItem('respcgst');
        this.respigst = localStorage.getItem('respigst');
        this.CGST = (parseFloat(basic) * this.respcgst / 100).toFixed(2);
        this.IGST = (parseFloat(basic) * this.respigst / 100).toFixed(2);
        this.Tax = (parseFloat(this.CGST) + parseFloat(this.IGST)).toFixed(2);
        this.Total = (parseFloat(basic) + parseFloat(this.Tax)).toFixed(2);
        localStorage.setItem('Total', this.Total);
        this.amount = String(this.Total);
        this.amount = this.amount.replace('.', '');
        if (localStorage.getItem('payment_id') == null) {
            localStorage.setItem('payment_id', '0');
        }
        if (localStorage.getItem('payment_id') != '0') {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    CheckoutPage.prototype.onclickeditmealtype = function () {
        var selectedmeal = localStorage.getItem('mealId');
        localStorage.removeItem('mealId');
        localStorage.removeItem('mealId');
        localStorage.removeItem('preferenceType');
        localStorage.removeItem('preferenceType1');
        localStorage.removeItem('lunch_products');
        localStorage.removeItem('dinner_products');
        localStorage.removeItem('customise_lc_data');
        localStorage.removeItem('customise_dm_data');
        localStorage.removeItem('lm_roti');
        localStorage.removeItem('extraRoti_Dinner');
        localStorage.removeItem('extraRoti_Lunch');
        localStorage.removeItem('lm_roti');
        localStorage.removeItem('lm_sabji');
        localStorage.removeItem('lm_rice');
        localStorage.removeItem('lm_dal');
        localStorage.removeItem('lm_salad');
        localStorage.removeItem('dm_roti');
        localStorage.removeItem('dm_sabji');
        localStorage.removeItem('dm_rice');
        localStorage.removeItem('dm_dal');
        localStorage.removeItem('dm_salad');
        localStorage.removeItem('extra_roti');
        this.navCtrl.setRoot('MealtypePage', {
            mealtypeis: selectedmeal
        });
    };
    CheckoutPage.prototype.onclickpreference = function () {
        localStorage.removeItem('selectprefrence');
        var selectedpreference = localStorage.getItem('preferenceProducts');
        this.navCtrl.setRoot('ChoosePreferencePage', {
            preferencetypeis: selectedpreference
        });
    };
    CheckoutPage.prototype.onclickstartdate = function () {
        var selecteddate = localStorage.getItem('statdatescreen');
        localStorage.removeItem('statdatescreen');
        this.navCtrl.setRoot('ChoosedeliverytimePage', {
            selectdateis: selecteddate
        });
    };
    CheckoutPage.prototype.onclickdeliverytime = function () {
        if (localStorage.getItem('mealType') == "Lunch") {
            var selectedtime = localStorage.getItem('selectlunchtime');
            localStorage.removeItem('selectlunchtime');
            this.navCtrl.setRoot('ChoosedeliverytimePage', {
                selecttimeforlunchis: selectedtime
            });
        }
        if (localStorage.getItem('mealType') == "Dinner") {
            var selectedtime = localStorage.getItem('selectdinnertime');
            localStorage.removeItem('selectdinnertime');
            this.navCtrl.setRoot('ChoosedeliverytimePage', {
                selecttimefordinneris: selectedtime
            });
        }
        if (localStorage.getItem('mealType') == "Both") {
            var selectedtime = localStorage.getItem('selectlunchtime');
            var selectedtime1 = localStorage.getItem('selectdinnertime');
            localStorage.removeItem('selectlunchtime');
            localStorage.removeItem('selectdinnertime');
            this.navCtrl.setRoot('ChoosedeliverytimePage', {
                selecttimelunchis: selectedtime,
                selecttimedinneris: selectedtime1
            });
        }
    };
    CheckoutPage.prototype.onclickPaytoProceed = function () {
        // alert('1');
        this.ActiveChkMethod = true;
        this.ActiveChkSumm = false;
        console.log(this.ActiveChkSumm);
        this.summeryColor = 'white';
        this.paymentColor = 'white';
        this.subdisables = localStorage.getItem('refer_subscription');
        if (this.subdisables == '1') {
            this.subdisable = true;
        }
        else {
            this.subdisables = localStorage.getItem('refer_subscriptions');
            if (this.subdisables == '1') {
                this.subdisable = true;
            }
            else {
                this.subdisable = false;
            }
        }
        console.log(this.ActiveChkSumm);
        this.ActiveChkMethod = true;
        this.ActiveChkSumm = false;
    };
    CheckoutPage.prototype.onclickaddress = function () {
        if (localStorage.getItem('mealType') == "Lunch") {
            var selectedhomelunch = localStorage.getItem('selhomelun');
            var selectedworklunch = localStorage.getItem('selworklun');
            localStorage.removeItem('selhomelun');
            localStorage.removeItem('selworklun');
            localStorage.removeItem('backchooseaddress');
            this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                selectforhomelunchis: selectedhomelunch,
                selectorworklunchis: selectedworklunch
            });
        }
        if (localStorage.getItem('mealType') == "Dinner") {
            var selectedhomedin = localStorage.getItem('selhomedin');
            var selectedworkdin = localStorage.getItem('selworkdin');
            localStorage.removeItem('selhomedin');
            localStorage.removeItem('selworkdin');
            localStorage.removeItem('backchooseaddress');
            this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                selectforhomedinis: selectedhomedin,
                selectorworkdinis: selectedworkdin
            });
        }
        if (localStorage.getItem('mealType') == "Both") {
            var selectedhomelunch = localStorage.getItem('selhomelun');
            var selectedworklunch = localStorage.getItem('selworklun');
            var selectedhomedin = localStorage.getItem('selhomedin');
            var selectedworkdin = localStorage.getItem('selworkdin');
            localStorage.removeItem('selhomelun');
            localStorage.removeItem('selworklun');
            localStorage.removeItem('selhomedin');
            localStorage.removeItem('selworkdin');
            localStorage.removeItem('backchooseaddress');
            this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                selectforhomelunchis: selectedhomelunch,
                selectorworklunchis: selectedworklunch,
                selectforhomedinis: selectedhomedin,
                selectorworkdinis: selectedworkdin
            });
        }
    };
    CheckoutPage.prototype.onClickSummary = function () {
        console.log(this.ActiveChkSumm);
        this.ActiveChkSumm = true;
        this.ActiveChkMethod = false;
    };
    CheckoutPage.prototype.onClickPayment = function () {
        console.log(this.ActiveChkSumm);
        this.ActiveChkMethod = true;
        this.ActiveChkSumm = false;
        this.paymentWhiteArrow = "assets/imgicon/Group 210.svg";
        this.paymentBlackArrow = "assets/imgicon/Group 209.svg";
        this.summeryColor = 'rgb(121, 138, 151)';
        this.paymentColor = 'white';
    };
    CheckoutPage.prototype.Back = function () {
        console.log('The keyboard is open:', this.keyboard.isOpen());
        var element = document.getElementById("myDIV");
        if (element) {
            element.classList.remove("mystyle");
        }
        console.log(this.ActiveChkSumm);
        if (this.ActiveChkSumm == true) {
            if (localStorage.getItem('renewis') == '1') {
                if (localStorage.getItem('renewis_id') == '1') {
                    if (localStorage.getItem('mealType') == "Lunch") {
                        var selectedhomelunch = localStorage.getItem('selhomelun');
                        var selectedworklunch = localStorage.getItem('selworklun');
                        localStorage.removeItem('selhomelun');
                        localStorage.removeItem('selworklun');
                        //this.viewCtrl.dismiss();
                        localStorage.removeItem('backchooseaddress');
                        this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                            selectforhomelunchis: selectedhomelunch,
                            selectorworklunchis: selectedworklunch
                        });
                    }
                    if (localStorage.getItem('mealType') == "Dinner") {
                        var selectedhomedin = localStorage.getItem('selhomedin');
                        var selectedworkdin = localStorage.getItem('selworkdin');
                        localStorage.removeItem('selhomedin');
                        localStorage.removeItem('selworkdin');
                        localStorage.removeItem('backchooseaddress');
                        //this.viewCtrl.dismiss();
                        this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                            selectforhomedinis: selectedhomedin,
                            selectorworkdinis: selectedworkdin
                        });
                    }
                    if (localStorage.getItem('mealType') == "Both") {
                        var selectedhomelunch = localStorage.getItem('selhomelun');
                        var selectedworklunch = localStorage.getItem('selworklun');
                        var selectedhomedin = localStorage.getItem('selhomedin');
                        var selectedworkdin = localStorage.getItem('selworkdin');
                        localStorage.removeItem('selhomelun');
                        localStorage.removeItem('selworklun');
                        localStorage.removeItem('selhomedin');
                        localStorage.removeItem('selworkdin');
                        localStorage.removeItem('backchooseaddress');
                        //this.viewCtrl.dismiss();
                        this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                            selectforhomelunchis: selectedhomelunch,
                            selectorworklunchis: selectedworklunch,
                            selectforhomedinis: selectedhomedin,
                            selectorworkdinis: selectedworkdin
                        });
                    }
                }
                else {
                    this.navCtrl.setRoot('RenewsubscriptionPage');
                }
            }
            else {
                if (localStorage.getItem('mealType') == "Lunch") {
                    var selectedhomelunch = localStorage.getItem('selhomelun');
                    var selectedworklunch = localStorage.getItem('selworklun');
                    localStorage.removeItem('selhomelun');
                    localStorage.removeItem('selworklun');
                    //this.viewCtrl.dismiss();
                    localStorage.removeItem('backchooseaddress');
                    this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                        selectforhomelunchis: selectedhomelunch,
                        selectorworklunchis: selectedworklunch
                    });
                }
                if (localStorage.getItem('mealType') == "Dinner") {
                    var selectedhomedin = localStorage.getItem('selhomedin');
                    var selectedworkdin = localStorage.getItem('selworkdin');
                    localStorage.removeItem('selhomedin');
                    localStorage.removeItem('selworkdin');
                    localStorage.removeItem('backchooseaddress');
                    //this.viewCtrl.dismiss();
                    this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                        selectforhomedinis: selectedhomedin,
                        selectorworkdinis: selectedworkdin
                    });
                }
                if (localStorage.getItem('mealType') == "Both") {
                    var selectedhomelunch = localStorage.getItem('selhomelun');
                    var selectedworklunch = localStorage.getItem('selworklun');
                    var selectedhomedin = localStorage.getItem('selhomedin');
                    var selectedworkdin = localStorage.getItem('selworkdin');
                    localStorage.removeItem('selhomelun');
                    localStorage.removeItem('selworklun');
                    localStorage.removeItem('selhomedin');
                    localStorage.removeItem('selworkdin');
                    localStorage.removeItem('backchooseaddress');
                    //this.viewCtrl.dismiss();
                    this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                        selectforhomelunchis: selectedhomelunch,
                        selectorworklunchis: selectedworklunch,
                        selectforhomedinis: selectedhomedin,
                        selectorworkdinis: selectedworkdin
                    });
                }
            }
        }
        if (this.ActiveChkMethod == true) {
            console.log(this.ActiveChkSumm);
            this.ActiveChkSumm = true;
            this.ActiveChkMethod = false;
        }
        //this.navCtrl.setRoot('ChoosedeliveryaddressPage');
    };
    //rzp_live_AAPrMXQhJP49GU
    //rzp_test_uZ1iWGWR9vDDSM // old //rzp_test_1DP5mmOlF5G5ag //rzp_test_zTdGNuEfmCHtil
    //rzp_test_e1wp9DFMzylCAL // new test key
    CheckoutPage.prototype.onclickslidepay = function () {
        this.successpayment();
    };
    CheckoutPage.prototype.successpayment = function () {
        var _this = this;
        this.util.showLoader();
        this.reference_id = localStorage.getItem('reference_id');
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
            this.renew = 1;
            this.type = 'renew';
            localStorage.setItem('failedstatus', this.type);
        }
        else {
            this.renew = 0;
            this.type = 'regular';
            localStorage.setItem('failedstatus', this.type);
        }
        this.apiService.referandearn(this.referCode, this.reference_id, this.tokendata).then(function (res) {
        }).catch(function (err) {
        });
        if (localStorage.getItem('updated_sub') == '1') {
            this.is_update = '1';
        }
        else {
            this.is_update = '0';
        }
        this.apiService.addsubscriptionPlan(data, this.CGST, this.IGST, this.renew, this.reference_id, this.is_update).then(function (res) {
            if (res['success']) {
                _this.util.hideLoader();
                localStorage.setItem('customer_order_payement_id', res['data']['customer_order_payement_id']);
                localStorage.setItem('failedstatus', null);
                localStorage.setItem('updated_sub', '1');
                _this.navCtrl.setRoot('LoadingsecondPage');
            }
            else {
                _this.lunchPreference = localStorage.getItem('preferenceProducts');
                _this.dinnerPreference = localStorage.getItem('preferenceProductsDinner');
                _this.date = "";
                _this.mealtypes = "";
                _this.totals = 0;
                _this.apiService.checkIfapifailed(_this.totals, _this.mealtypes, _this.date, _this.type, _this.lunchPreference, _this.dinnerPreference, _this.CGST, _this.IGST, _this.renew, _this.reference_id).then(function (res) {
                    _this.util.hideLoader();
                    if (res['success']) {
                        localStorage.setItem('failedstatus', null);
                        localStorage.setItem('customer_order_payement_id', "null");
                        _this.navCtrl.setRoot('LoadingsecondPage');
                    }
                    else {
                        localStorage.setItem('failedstatus', null);
                        localStorage.setItem('customer_order_payement_id', "null");
                        _this.navCtrl.setRoot('LoadingsecondPage');
                    }
                }).catch(function (err) {
                    localStorage.setItem('failedstatus', null);
                    localStorage.setItem('customer_order_payement_id', "null");
                    _this.navCtrl.setRoot('LoadingsecondPage');
                });
            }
        }).catch(function (err) {
            _this.token = localStorage.getItem('token');
            _this.id = localStorage.getItem('id');
            _this.payment_id = localStorage.getItem('payment_id');
            localStorage.setItem('failedstatus', null);
            _this.apiService.payementfail(_this.id, _this.type, _this.token, _this.payment_id, _this.amount).then(function (res) {
                _this.util.hideLoader();
                localStorage.setItem('customer_order_payement_id', "null");
                _this.navCtrl.setRoot('LoadingsecondPage');
            }).catch(function (err) {
                _this.util.hideLoader();
                localStorage.setItem('customer_order_payement_id', "null");
                _this.navCtrl.setRoot('LoadingsecondPage');
            });
        });
    };
    CheckoutPage.prototype.onSearchChange = function (e) {
        if (this.subscription_id != 1) {
            this.isdisable = false;
            this.conbut1 = 'rgb(242, 155, 17)';
        }
    };
    CheckoutPage.prototype.onClickRefer = function (code) {
        if (this.subscription_id != 1) {
            if (this.referCode != '') {
                this.isdisable = true;
                this.conbut1 = 'rgb(242, 155, 17)';
            }
            else {
                this.isdisable = false;
            }
        }
    };
    CheckoutPage.prototype.onclickApply = function () {
        var _this = this;
        this.apiService.referexistornot(this.tokendata, this.referCode).then(function (res) {
            _this.msg = res['message'];
            _this.reference_id = res['customer_id'];
            localStorage.setItem('reference_id', _this.reference_id);
        }).catch(function (res) {
            console.log(_this.ActiveChkSumm);
            _this.ActiveChkSumm = true;
            _this.ActiveChkMethod = false;
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    CheckoutPage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('CheckoutPage');
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
    CheckoutPage.prototype.classadded = function () {
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
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/checkout/checkout.html"*/'<ion-header no-border class="dit-type-header special-margin-checkout" (click)="classadded()">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>ALMOST THERE</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content" (click)="classadded()" id="myDIV"> \n\n  <ion-grid style="position: absolute;">\n    <div class="screen-heading">\n      <span>It\'s time for</span>\n      <h2> Checkout</h2>\n      <!-- <button id="buttonhidden" (click)="buttonhidepage()" style="display: none;"></button>      -->\n    </div>\n    <ion-row class="checkout-screen">\n      <ion-col text-center>\n        <div [style.color]="ActiveChkSumm ? summaryWhiteArrow:summaryBlackArrow" (click)="onClickMySubcription()">\n          <img class="active" [src]=" ActiveChkSumm ? summaryWhiteArrow : summaryBlackArrow" style="width:2.098vh; height:2.098vh;">\n          <label [style.color]="summeryColor">Summary</label>\n        </div>\n      </ion-col>\n      <ion-col text-center>\n   <!--      (click)="onClickGuestMeal()" -->\n        <div [style.color]="ActiveChkSumm ? paymentBlackArrow:paymentWhiteArrow" >\n          <img class="" [src]="ActiveChkSumm ? paymentBlackArrow :paymentWhiteArrow" style="width:2.098vh; height:2.098vh;">\n          <label [style.color]="paymentColor">Payment</label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n  <div class="checkout-area" *ngIf="ActiveChkSumm">\n    <div style="padding: 6.14vh 5.333vw 0vh 5.333vw;">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 class="text-left" style="padding:0;">\n            <div class="mealtype">\n              <label>MEAL TYPE</label>\n              <div class="mealdesc-content" class="onboard-click" block>\n                {{mealtype}}\n              </div>\n            </div>\n            <div class="mealtypearea">\n              <a href="javascript:void(0);" (click)="onclickeditmealtype()">EDIT\n              </a>\n            </div>\n            <hr class="borderLine">\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 class="text-left" style="padding:0;">\n            <div class="preference-area">\n              <label>PREFERENCES</label>\n              <div class="mealtypearea">\n                <a href="javascript:void(0);" (click)="onclickpreference()">EDIT\n                </a>\n              </div>\n              <div class="lunch-time" *ngIf="lunchtime">\n                <label>{{lunchdis}}</label>\n                <div class="lunchDesc" block>\n                  {{lunchPreference}}\n                </div>\n              </div>\n\n              <div class="lunch-time" *ngIf="Dinnertime">\n                <label>{{dinnerdis}}</label>\n                <div class="lunchDesc" block>\n                  {{dinnerPreference}}\n                </div>\n              </div>\n            </div>\n\n            <hr class="borderLine">\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col col-12 class="text-left" style="padding:0;">\n            <div class="mealtype">\n              <label>START DATE</label>\n              <div class="dateType" block>\n                {{startdate|date:\'d MMMM y\'}}\n              </div>\n            </div>\n            <div class="mealtypearea">\n              <a href="javascript:void(0);" style="text-decoration: none;" (click)="onclickstartdate()">EDIT\n              </a>\n            </div>\n            <br />\n            <div class="mealtype">\n              <label style="margin-top: 1.799vh;">END DATE</label>\n              <div class="dateType" block>\n                {{(enddate)?.substring(0,10)|date:\'d MMMM y\'}}\n              </div>\n            </div>\n            <hr class="borderLine">\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 class="text-left" style="line-height: 2.0em; padding: 0;">\n            <div class="dilevery-time">\n              <label>DELIVERY TIMING</label>\n              <br>\n              <div class="deliveryLunch" *ngIf="lunchtime">\n                <label>{{lunchdis}}</label>\n                <div class="lunchDilTime" block>\n                  {{lunchdeliverytime}}\n                </div>\n              </div>\n            </div>\n            <div class="mealtypearea">\n              <a href="javascript:void(0);" (click)="onclickdeliverytime()">EDIT\n              </a>\n            </div>\n            <div class="deliveryLunch" *ngIf="Dinnertime">\n              <label>{{dinnerdis}}</label>\n              <br>\n              <div class="lunchDilTime" block>\n                {{deliverytime}}\n              </div>\n            </div>\n            <hr class="borderLine">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class="text-left" style="line-height: 2.0em; padding: 0;">\n            <div class="dilevery-time">\n              <label>DELIVERY ADDRESSES</label>\n              <div class="deliveryLunch" *ngIf="ladd">\n                <label>{{lunchdis}}</label>\n                <div class="lunchDilTime" block>\n                  {{Lunchadd}}\n                </div>\n              </div>\n            </div>\n            <div class="mealtypearea">\n              <a href="javascript:void(0);" (click)="onclickaddress()">EDIT\n              </a>\n            </div>\n            <div class="deliveryLunch" *ngIf="dadd">\n              <label>{{dinnerdis}}</label>\n              <br>\n              <div class="lunchDilTime" block>\n                {{Dinneradd}}\n              </div>\n            </div>\n            <hr class="borderLine">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-grid class="all-edit-button">\n      <ion-row>\n        <ion-col style="    padding: 2vh 5.333vw 0 5.333vw;">\n          <button ion-button type="submit" id="input_submit" block (click)="onclickPaytoProceed()" style="margin-bottom:0;">\n            Proceed To Pay\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="checkout-area" *ngIf="ActiveChkMethod">\n    <ion-grid style=" margin-bottom: 2vh;">\n      <ion-row>\n        <ion-col style="padding: 2.17vh 5.333vw">\n          <div class="checkout-payment-content">\n            <ion-row>\n              <ion-col>\n                <h3>PRICE BREAKDOWN</h3>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <label>{{dataarr.month}} </label>\n                <label class="price-countvalues">Rs.{{subscription_price}}</label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <label>{{dataarr.ExtraRoti}}</label>\n                <label class="price-countvalues">Rs.{{extra_price}}</label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <label>{{dataarr.Tax}}</label>\n                <label class="price-countvalues">Rs.{{Tax}} </label>\n              </ion-col>\n            </ion-row>\n            <hr class="newline">\n            <ion-row>\n              <ion-col>\n                <label class="total">{{dataarr.Total}}</label>\n                <label class="total-price">Rs.{{Total}}</label>\n              </ion-col>\n            </ion-row>\n\n          </div>\n    \n        </ion-col>\n      </ion-row>\n      \n      <div class="reffer-code">\n        <ion-row>\n          <ion-col col-12>\n            <label style="margin-left: 0 !important;">Referral Code</label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-7>\n            <ion-input [(ngModel)]="referCode"  (ngModelChange)="onSearchChange($event)" [disabled]="subdisable"></ion-input>\n          </ion-col>\n          <ion-col col-5>\n            <button ion-button type="submit" id="input_submit" block [style.background]="conbut1" (click)="onclickApply()" [disabled]="isdisable">Apply</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-label style="    padding: 0 5px;">{{msg}}</ion-label>\n        </ion-row>\n      </div>\n     \n      \n    </ion-grid>\n\n\n    <!-- <ion-footer className="ion-no-border" class="footer-common" style="background-color: #fff;">\n      <ion-toolbar> -->\n   \n        <ion-grid class="button-grid-box" style="margin-top: 10vw;">\n          <ion-row>\n            <ion-col style="padding:0 5.333vw;">\n              <button ion-button type="submit" id="input_submit" block  (click)="onclickslidepay()" style="background: linear-gradient(to bottom, #ffce80 -80%, #f29c11 100%);">\n                <label class="first-total-label">Pay</label>\n                <label class="second-total-label">&#8377; {{Total}}</label>\n                <!-- <img src="assets/pay-arrow.png" alt="TrueMark" class="img-responsive" class="buttonEffect"> -->\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <!-- </ion-toolbar>\n        </ion-footer> -->\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=44.js.map