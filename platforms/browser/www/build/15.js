webpackJsonp([15],{

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewsubscriptionPageModule", function() { return RenewsubscriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__renewsubscription__ = __webpack_require__(947);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RenewsubscriptionPageModule = (function () {
    function RenewsubscriptionPageModule() {
    }
    RenewsubscriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__renewsubscription__["a" /* RenewsubscriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__renewsubscription__["a" /* RenewsubscriptionPage */]),
            ],
        })
    ], RenewsubscriptionPageModule);
    return RenewsubscriptionPageModule;
}());

//# sourceMappingURL=renewsubscription.module.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenewsubscriptionPage; });
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
 * Generated class for the RenewsubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RenewsubscriptionPage = (function () {
    function RenewsubscriptionPage(navCtrl, navParams, apiService, push, util, translate, storage, sanitizer, alertCtrl, platform, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.push = push;
        this.util = util;
        this.translate = translate;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.subscriptionArray = [];
        this.extraRoti_Lunch = 0;
        this.extraRoti_Dinner = 0;
        this.subscriptiondataArray = [];
        this.subscriptiondata2 = [];
        this.today = new Date();
        this.lunchprefArray = [];
        this.dinnerprefArray = [];
        this.rcm_lm_roti = '';
        this.rcm_lm_sabji = '';
        this.rcm_lm_salad = '';
        this.rcm_lm_rice = '';
        this.rcm_lm_dal = '';
        this.rtm_lm_roti = '';
        this.rtm_lm_sabji = '';
        this.rtm_lm_salad = '';
        this.rtm_lm_rice = '';
        this.rtm_lm_dal = '';
        this.rcm_dm_roti = '';
        this.rcm_dm_sabji = '';
        this.rcm_dm_salad = '';
        this.rcm_dm_rice = '';
        this.rcm_dm_dal = '';
        this.rtm_dm_roti = '';
        this.rtm_dm_sabji = '';
        this.rtm_dm_salad = '';
        this.rtm_dm_rice = '';
        this.rtm_dm_dal = '';
        this.preferenceProducts = ' ';
        this.preferenceProductsRoti = '';
        this.preferenceProductsDinner = ' ';
        this.preferenceProductsRotiDinner = '';
        //let backAction = platform.registerBackButtonAction(() => {
        //this.Back();
        //backAction();
        //}, 2)
        this.initializeBackButtonCustomHandler();
    }
    RenewsubscriptionPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    RenewsubscriptionPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    RenewsubscriptionPage.prototype.ionViewDidLoad = function () {
    };
    RenewsubscriptionPage.prototype.ngOnInit = function () {
        localStorage.setItem('updated_sub', '0');
        localStorage.setItem('extra_price', '0');
        localStorage.setItem('extraRoti', '0');
        localStorage.removeItem('renewrotistringlunch');
        localStorage.removeItem('renewrotistringdinner');
        localStorage.setItem('dmroticount', '0');
        localStorage.setItem('lmroticount', '0');
        localStorage.setItem('lm_rice', '');
        localStorage.setItem('lm_rice', '');
        localStorage.setItem('dm_rice', '');
        this.dm_rice = '';
        this.lm_rice = '';
        localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
        localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
        localStorage.setItem('renewrotistringdinner', '');
        localStorage.setItem('renewrotistringlunch', '');
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.cust_sub_id = localStorage.getItem('customer_subscription_id');
        localStorage.setItem('refer_subscription', '1');
        localStorage.removeItem('mealId');
        this.loaddata();
        //this.loadSubscriptionData();
    };
    RenewsubscriptionPage.prototype.loadSubscriptionData = function () {
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
    RenewsubscriptionPage.prototype.loaddata = function () {
        var _this = this;
        var data1 = {
            token: this.tokendata,
            customer_id: this.customer_id,
            customer_subscription_id: this.cust_sub_id
        };
        this.apiService.renewsubscription(data1).then(function (res) {
            _this.util.showLoader();
            if (res.success) {
                _this.util.hideLoader();
                _this.subscriptiondataArray = res.data['subscription'];
                for (var i = 0; i < _this.subscriptionArray.length; i++) {
                    _this.subscriptiondataArray[i]['subscription_content'] = _this.sanitizer.bypassSecurityTrustHtml(_this.subscriptiondataArray[i]['subscription_content']);
                    _this.subscriptiondataArray[i]['subscription_sub_content'] = _this.sanitizer.bypassSecurityTrustHtml(_this.subscriptiondataArray[i]['subscription_sub_content']);
                }
                localStorage.setItem('respcgst', res.data.CGST);
                localStorage.setItem('respigst', res.data.IGST);
                localStorage.setItem('subscription_id', res.data.subscription_id);
                localStorage.setItem('mealdays', res.data.subscription_period);
                _this.mealid = res.data.meal_type;
                _this.lunch1 = res.data.delivery_lunch_timing;
                _this.dinner1 = res.data.delivery_dinner_timing;
                _this.lunchtime = res.data.delivery_lunch_timing;
                _this.dinnertime = res.data.delivery_dinner_timing;
                _this.lunch_add = res.data.delivery_lunch_address;
                _this.home_id = res.data.homeid;
                _this.work_id = res.data.workid;
                localStorage.setItem('homeid', _this.home_id);
                localStorage.setItem('workid', _this.work_id);
                _this.dinner_add = res.data.delivery_dinner_address;
                _this.lunchaddresstype = res.data.delivery_lunch_address_type;
                _this.dinneraddresstype = res.data.delivery_dinner_address_type;
                _this.l1 = res.data.weekend_lunch_saturday;
                _this.l2 = res.data.weekend_lunch_sunday;
                _this.d1 = res.data.weekend_dinner_saturday;
                _this.d2 = res.data.weekend_dinner_sunday;
                _this.preflunchmeal = res.data.preference_lunch_meal;
                _this.prefdinnermeal = res.data.preference_dinner_meal;
                _this.startdate = res.data.start_date;
                _this.enddate = res.data.end_date;
                _this.extrarice = res.data.extra_rice;
                _this.extraroti = res.data.extra_roti;
                _this.Hflatno = res.data.home_address[0].flat_no;
                _this.Hadd1 = res.data.home_address[0].address1;
                _this.Hadd2 = res.data.home_address[0].address2;
                _this.Hareaname = res.data.home_address[0].area_name;
                _this.Hpincode = res.data.home_address[0].pincode;
                _this.Hareaid = res.data.home_address[0].area_id;
                _this.Wareaid = res.data.work_address[0].area_id;
                localStorage.setItem('getsecondpincodeid', _this.Hareaid);
                localStorage.setItem('thisdataid', _this.Hareaid);
                localStorage.setItem('getfirstpincodeid', _this.Wareaid);
                _this.Wflatno = res.data.work_address[0].flat_no;
                _this.Wadd1 = res.data.work_address[0].address1;
                _this.Wadd2 = res.data.work_address[0].address2;
                _this.Wareaname = res.data.work_address[0].area_name;
                _this.Wpincode = res.data.work_address[0].pincode;
                _this.lunchprefArray = res.data.lunchpreferences;
                _this.dinnerprefArray = res.data.dinnerpreferences;
                _this.cancelmeal = res.data.cancel_meal_count;
            }
            else {
                _this.util.alert(_this.translate.instant(res.message), '');
                _this.util.hideLoader();
            }
        }).catch(function (res) {
            _this.util.alert(_this.translate.instant(res.message), '');
            _this.util.hideLoader();
        });
    };
    RenewsubscriptionPage.prototype.onClickSubscription = function (id) {
        localStorage.setItem('renew_subscription_start', '1');
        localStorage.setItem('payment_id', '0');
        this.lengthcount = this.subscriptiondataArray.length;
        for (var i = 0; i < this.lengthcount; i++) {
            if (id == this.subscriptiondataArray[i].subscription_id) {
                this.subscriptionData = this.subscriptiondataArray[i];
                var type;
                //if (i == 0) {         
                type = this.subscriptionData.subscription_name;
                localStorage.setItem('subscription_type', type);
                if (parseInt(localStorage.getItem('subscription_id')) == this.subscriptionData.subscription_id) {
                    localStorage.setItem('customise_lc_data', null);
                    localStorage.setItem('customise_dm_data', null);
                    localStorage.setItem('subscription_id', id);
                    localStorage.setItem('renewis', '1');
                    localStorage.setItem('renewis_id', '0');
                    localStorage.setItem('mealId', this.mealid);
                    if (this.mealid == 3) {
                        localStorage.setItem('mealType', 'Both');
                        this.subprice = this.subscriptiondataArray[i].subscription_meal_array[2].price;
                        localStorage.setItem('price', this.subprice);
                        localStorage.setItem('preferenceType', this.preflunchmeal);
                        localStorage.setItem('dinnerpreferenceType', this.prefdinnermeal);
                        this.onLoadPreferenceData();
                    }
                    else if (this.mealid == 2) {
                        localStorage.setItem('mealType', 'Dinner');
                        this.subprice = this.subscriptiondataArray[i].subscription_meal_array[1].price;
                        localStorage.setItem('price', this.subprice);
                        localStorage.setItem('preferenceType', this.prefdinnermeal);
                        this.onLoadPreferenceData();
                    }
                    else if (this.mealid == 1) {
                        localStorage.setItem('mealType', 'Lunch');
                        this.subprice = this.subscriptiondataArray[i].subscription_meal_array[0].price;
                        localStorage.setItem('price', this.subprice);
                        localStorage.setItem('preferenceType', this.preflunchmeal);
                        this.onLoadPreferenceData();
                    }
                    localStorage.setItem('lunch1', this.lunch1);
                    localStorage.setItem('dinner1', this.dinner1);
                    localStorage.setItem('lunchtime', this.lunchtime);
                    localStorage.setItem('dinnertime', this.dinnertime);
                    localStorage.setItem('lunch_add', this.lunch_add);
                    localStorage.setItem('dinner_add', this.dinner_add);
                    localStorage.setItem('homeid', this.home_id);
                    localStorage.setItem('workid', this.work_id);
                    this.mealdays = parseInt(localStorage.getItem('mealdays')); //parseInt(localStorage.getItem('actualmealdays'))
                    this.mealcount = parseInt(localStorage.getItem('actualmealcount'));
                    localStorage.setItem('statdatescreen', '1');
                    localStorage.setItem('selectDelTime', '1');
                    localStorage.setItem('selectWhereAddress', '1');
                    localStorage.setItem('selectDelAdd', '1');
                    localStorage.setItem('l1', this.l1);
                    localStorage.setItem('l2', this.l2);
                    localStorage.setItem('d1', this.d1);
                    localStorage.setItem('d2', this.d2);
                    localStorage.setItem('cancel_count', this.cancelmeal);
                    localStorage.setItem('extraRoti', this.extraroti);
                    localStorage.setItem('extraRice', this.extrarice);
                    localStorage.setItem('Haddress_type1', 'Home');
                    localStorage.setItem('Waddress_type1', 'Work');
                    localStorage.setItem('Hflatno', this.Hflatno);
                    localStorage.setItem('Haddline1', this.Hadd1);
                    localStorage.setItem('Haddline2', this.Hadd2);
                    localStorage.setItem('getfirstpincodearea', this.Wareaname);
                    localStorage.setItem('getsecondareapindata', this.Wpincode);
                    localStorage.setItem('pincode', this.Hpincode);
                    localStorage.setItem('areaname', this.Hareaname);
                    localStorage.setItem('getsecondpincodeid', this.Hareaid);
                    localStorage.setItem('thisdataid', this.Hareaid);
                    localStorage.setItem('getfirstpincodeid', this.Wareaid);
                    localStorage.setItem('pincode', this.Hpincode);
                    localStorage.setItem('Wflatno', this.Wflatno);
                    localStorage.setItem('Waddline1', this.Wadd1);
                    localStorage.setItem('Waddline2', this.Wadd2);
                    localStorage.setItem('workpincode', this.Wpincode);
                    if (this.lunchaddresstype != null || this.lunchaddresstype != '') {
                        if (this.lunchaddresstype == "home") {
                            localStorage.setItem('Ladd', "Home Address");
                        }
                        if (this.lunchaddresstype == "work") {
                            localStorage.setItem('Ladd', "Work Address");
                        }
                    }
                    if (this.dinneraddresstype != null || this.dinneraddresstype != '') {
                        if (this.dinneraddresstype == "home") {
                            localStorage.setItem('Dadd', "Home Address");
                        }
                        if (this.dinneraddresstype == "work") {
                            localStorage.setItem('Dadd', "Work Address");
                        }
                    }
                    var today = new Date().toISOString();
                    if (today <= this.enddate) {
                        var curr = new Date(this.enddate);
                        var first = curr.getDate();
                        var last = first + 1;
                        this.newdate = new Date(curr.setDate(last)).toISOString();
                        localStorage.setItem('StartDate', this.newdate);
                        var newlast = first + this.mealdays;
                        this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
                        localStorage.setItem('endDate', this.renewmealday);
                    }
                    else if (today > this.enddate) {
                        var curr = new Date();
                        var first = curr.getDate();
                        var last = first + 1;
                        this.newdate = new Date(curr.setDate(last)).toISOString();
                        localStorage.setItem('StartDate', this.newdate);
                        var newlast = first + this.mealdays;
                        this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
                        localStorage.setItem('endDate', this.renewmealday);
                    }
                    if (id == this.subscriptiondataArray[i].subscription_id) {
                        this.navCtrl.setRoot('CheckoutPage');
                    }
                    else {
                        this.navCtrl.setRoot('MealtypePage');
                    }
                }
                else {
                    localStorage.setItem('subscription_id', id);
                    localStorage.setItem('renewis', '1');
                    localStorage.setItem('renewis_id', '0');
                    localStorage.setItem('homeid', this.home_id);
                    localStorage.setItem('workid', this.work_id);
                    localStorage.setItem('Hflatno', this.Hflatno);
                    localStorage.setItem('Haddline1', this.Hadd1);
                    localStorage.setItem('Haddline2', this.Hadd2);
                    localStorage.setItem('getfirstpincodearea', this.Wareaname);
                    localStorage.setItem('getsecondareapindata', this.Wpincode);
                    localStorage.setItem('pincode', this.Hpincode);
                    localStorage.setItem('areaname', this.Hareaname);
                    localStorage.setItem('getsecondpincodeid', this.Hareaid);
                    localStorage.setItem('thisdataid', this.Hareaid);
                    localStorage.setItem('getfirstpincodeid', this.Wareaid);
                    localStorage.setItem('pincode', this.Hpincode);
                    localStorage.setItem('Wflatno', this.Wflatno);
                    localStorage.setItem('Waddline1', this.Wadd1);
                    localStorage.setItem('Waddline2', this.Wadd2);
                    localStorage.setItem('workpincode', this.Wpincode);
                    var today = new Date().toISOString();
                    if (today <= this.enddate) {
                        var curr = new Date(this.enddate);
                        var first = curr.getDate();
                        var last = first + 1;
                        this.newdate = new Date(curr.setDate(last)).toISOString();
                        localStorage.setItem('StartDate', this.newdate);
                    }
                    else if (today > this.enddate) {
                        var curr = new Date();
                        var first = curr.getDate();
                        var last = first + 1;
                        this.newdate = new Date(curr.setDate(last)).toISOString();
                        localStorage.setItem('StartDate', this.newdate);
                    }
                    this.navCtrl.setRoot('MealtypePage');
                }
                //} 
                // else if (i == 1) {
                //   type = 'Half-Monthly Subscription';
                //   localStorage.setItem('subscription_type', type)
                //   if (parseInt(localStorage.getItem('subscription_id')) == 3) { 
                //     localStorage.setItem('customise_lc_data',null);
                //     localStorage.setItem('customise_dm_data',null);
                //     localStorage.setItem('subscription_id',id);
                //     localStorage.setItem('renewis','1')
                //     localStorage.setItem('renewis_id','0');
                //     localStorage.setItem('mealId', this.mealid);
                //     if (this.mealid == 3) {
                //       localStorage.setItem('mealType', 'Both');
                //       this.subprice = this.subscriptiondataArray[1].subscription_meal_array[2].price;
                //       localStorage.setItem('price', this.subprice)
                //       localStorage.setItem('preferenceType', this.preflunchmeal);
                //       localStorage.setItem('dinnerpreferenceType', this.prefdinnermeal);
                //       this.onLoadPreferenceData();
                //     }
                //     else if (this.mealid == 2) {
                //       localStorage.setItem('mealType', 'Dinner');
                //       this.subprice = this.subscriptiondataArray[1].subscription_meal_array[1].price;
                //       localStorage.setItem('price', this.subprice)
                //       localStorage.setItem('preferenceType', this.prefdinnermeal);
                //       this.onLoadPreferenceData();
                //     }
                //     else if (this.mealid == 1) {
                //       localStorage.setItem('mealType', 'Lunch');
                //       this.subprice = this.subscriptiondataArray[1].subscription_meal_array[0].price;
                //       localStorage.setItem('price', this.subprice)
                //       localStorage.setItem('preferenceType', this.preflunchmeal);
                //       this.onLoadPreferenceData();
                //     }
                //     localStorage.setItem('lunch1', this.lunch1)
                //     localStorage.setItem('dinner1', this.dinner1)
                //     localStorage.setItem('lunchtime', this.lunchtime)
                //     localStorage.setItem('dinnertime', this.dinnertime)
                //     localStorage.setItem('lunch_add', this.lunch_add)
                //     localStorage.setItem('dinner_add', this.dinner_add)
                //     localStorage.setItem('homeid', this.home_id)
                //     localStorage.setItem('workid', this.work_id)
                //     localStorage.setItem('preferenceType', this.preflunchmeal);
                //     localStorage.setItem('dinnerpreferenceType', this.prefdinnermeal);
                //     localStorage.setItem('statdatescreen', '1');
                //     localStorage.setItem('selectDelTime', '1');
                //     localStorage.setItem('selectWhereAddress', '1');
                //     localStorage.setItem('selectDelAdd', '1');
                //     this.mealdays = parseInt(localStorage.getItem('actualmealdays'))
                //     this.mealcount = parseInt(localStorage.getItem('actualmealcount'))
                //     localStorage.setItem('cancel_count',this.cancelmeal);
                //     localStorage.setItem('extraRoti', this.extraroti);
                //     localStorage.setItem('extraRice', this.extrarice);
                //     localStorage.setItem('Haddress_type1', 'Home');
                //     localStorage.setItem('Waddress_type1', 'Work')
                //     localStorage.setItem('Hflatno', this.Hflatno);
                //     localStorage.setItem('Haddline1', this.Hadd1);
                //     localStorage.setItem('Haddline2', this.Hadd2);
                //     localStorage.setItem('getfirstpincodearea',this.Wareaname);
                //     localStorage.setItem('getsecondareapindata',this.Wpincode);
                //     localStorage.setItem('pincode',this.Hpincode);
                //     localStorage.setItem('areaname',this.Hareaname);
                //     localStorage.setItem('getsecondpincodeid',this.Hareaid);
                //     localStorage.setItem('thisdataid',this.Hareaid);
                //     localStorage.setItem('getfirstpincodeid',this.Wareaid);
                //     localStorage.setItem('pincode', this.Hpincode);
                //     localStorage.setItem('Wflatno', this.Wflatno);
                //     localStorage.setItem('Waddline1', this.Wadd1);
                //     localStorage.setItem('Waddline2', this.Wadd2);
                //     localStorage.setItem('workpincode', this.Wpincode);            
                //     if (this.lunchaddresstype != null || this.lunchaddresstype != '') {
                //       if (this.lunchaddresstype == "home") {
                //         localStorage.setItem('Ladd', "Home Address")
                //       }
                //       if (this.lunchaddresstype == "work") {
                //         localStorage.setItem('Ladd', "Work Address")
                //       }
                //     }
                //     if (this.dinneraddresstype != null || this.dinneraddresstype != '') {
                //       if (this.dinneraddresstype == "home") {
                //         localStorage.setItem('Dadd', "Home Address")
                //       }
                //       if (this.dinneraddresstype == "work") {
                //         localStorage.setItem('Dadd', "Work Address")
                //       }
                //     }
                //     let today = new Date().toISOString();
                //     if (today <= this.enddate) {
                //       var curr = new Date(this.enddate)
                //       let first = curr.getDate()
                //       let last = first + 1;
                //       this.newdate = new Date(curr.setDate(last)).toISOString();
                //       localStorage.setItem('StartDate', this.newdate)
                //       let newlast = first + this.mealdays + 1;
                //       this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
                //       localStorage.setItem('endDate', this.renewmealday);
                //     }
                //     else if (today > this.enddate) {
                //       var curr = new Date()
                //       let first = curr.getDate()
                //       let last = first + 1;
                //       this.newdate = new Date(curr.setDate(last)).toISOString();
                //       localStorage.setItem('StartDate', this.newdate)
                //       let newlast = first + this.mealdays + 1;
                //       this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
                //       localStorage.setItem('endDate', this.renewmealday);
                //     }
                //     this.navCtrl.setRoot('CheckoutPage');
                //   }
                //   else {
                //     localStorage.setItem('subscription_id',id);
                //     localStorage.setItem('renewis','1')
                //     localStorage.setItem('renewis_id','0');
                //     localStorage.setItem('homeid', this.home_id)
                //     localStorage.setItem('workid', this.work_id)
                //     localStorage.setItem('Hflatno', this.Hflatno);
                //     localStorage.setItem('Haddline1', this.Hadd1);
                //     localStorage.setItem('Haddline2', this.Hadd2);
                //     localStorage.setItem('getfirstpincodearea',this.Wareaname);
                //     localStorage.setItem('getsecondareapindata',this.Wpincode);
                //     localStorage.setItem('pincode',this.Hpincode);
                //    localStorage.setItem('areaname',this.Hareaname);
                //     localStorage.setItem('getsecondpincodeid',this.Hareaid);
                //     localStorage.setItem('thisdataid',this.Hareaid);
                //     localStorage.setItem('getfirstpincodeid',this.Wareaid);
                //     localStorage.setItem('pincode', this.Hpincode);
                //     localStorage.setItem('Wflatno', this.Wflatno);
                //     localStorage.setItem('Waddline1', this.Wadd1);
                //     localStorage.setItem('Waddline2', this.Wadd2);
                //     localStorage.setItem('workpincode', this.Wpincode);
                //     let today = new Date().toISOString();
                //     if (today <= this.enddate) {
                //       var curr = new Date(this.enddate);
                //       let first = curr.getDate();
                //       let last = first + 1;
                //       this.newdate = new Date(curr.setDate(last)).toISOString();
                //       localStorage.setItem('StartDate', this.newdate);
                //     }
                //     else if (today > this.enddate) {
                //       var curr = new Date();
                //       let first = curr.getDate()
                //       let last = first + 1;
                //       this.newdate = new Date(curr.setDate(last)).toISOString();
                //       localStorage.setItem('StartDate', this.newdate)
                //     }
                //     this.navCtrl.setRoot('MealtypePage');
                //   }
                // }
            }
        }
    };
    RenewsubscriptionPage.prototype.Back = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    RenewsubscriptionPage.prototype.onLoadPreferenceData = function () {
        this.prefernceTypArr = [];
        this.lm_salad = '';
        this.dm_salad = '';
        localStorage.setItem('prefernceTypArr', JSON.stringify(this.lunchprefArray));
        if (this.lunchprefArray) {
            this.prefernceTypArr = this.lunchprefArray;
            for (var i = 0; i < this.prefernceTypArr['products'].length; i++) {
                if (this.prefernceTypArr.meal == 'Lunch Meal') {
                    this.lunch_products = this.prefernceTypArr['products'];
                    localStorage.setItem('lunch_products', JSON.stringify(this.lunch_products));
                    for (var j = 0; j < this.prefernceTypArr['products'].length; j++) {
                        // Roti or Phulaka
                        if (this.prefernceTypArr['products'][j].category_id == '1') {
                            if (j <= 1) {
                                if (j == 0) {
                                    //this.lm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product + '/');
                                    this.lm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                                }
                                // if (j == 1) {
                                //   if (this.prefernceTypArr['products'][j].quantity != this.prefernceTypArr['products'][j - 1].quantity) {
                                //     this.lm_roti = this.lm_roti + (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                                //   } else {
                                //     this.lm_roti = this.lm_roti + (this.prefernceTypArr['products'][j].product);
                                //   }
                                //   
                                // }
                            }
                        }
                        // Sabji
                        if (this.prefernceTypArr['products'][j].category_id == '5') {
                            this.lm_sabji = ',Sabji';
                        }
                        // Rice
                        if (this.prefernceTypArr['products'][j].category_id == '2') {
                            this.lm_rice = this.prefernceTypArr['products'][j].product;
                            this.lm_rice = this.lm_rice + ' Rice';
                            localStorage.setItem('lm_rice', this.lm_rice);
                        }
                        // Dal
                        if (this.prefernceTypArr['products'][j].category_id == '7') {
                            this.lm_dal = '1';
                        }
                        // // Salad
                        if (this.prefernceTypArr['products'][j].category_id == '4') {
                            this.lm_salad = '1';
                        }
                    }
                    this.ricecount = 0;
                    for (var asd = 0; asd < this.lunch_products.length; asd++) {
                        this.lunch_products[asd]['extra_qty'] = this.lunch_products[asd]['extra_qty'];
                        this.lunch_products[asd]['extra_amount'] = '0';
                        if (this.lunch_products[asd]['category_id'] == '2') {
                            if (this.lunch_products[asd]['selected'] == '1') {
                                this.ricecount = 1;
                                this.lunch_products[asd]['selected'] = '1';
                            }
                            else {
                                if (this.ricecount == 0) {
                                    this.ricecount = 1;
                                    this.lunch_products[asd]['selected'] = '1';
                                }
                                else {
                                    this.lunch_products[asd]['selected'] = '0';
                                }
                            }
                        }
                        else if (this.lunch_products[asd]['category_id'] == '1') {
                            if (asd == 0) {
                                this.lunch_products[0]['selected'] = '1';
                                this.totallunch = parseFloat(this.lunch_products[asd]['extra_qty']) + parseFloat(this.lunch_products[asd]['quantity']);
                                this.lm_roti = this.totallunch + ' ' + this.lunch_products[asd]['product'];
                                localStorage.setItem('renewrotistringlunch', this.lm_roti);
                                var countday = localStorage.getItem('mealdays');
                                console.log(localStorage.getItem('lm_rice'));
                                if (localStorage.getItem('lm_rice') != "" && localStorage.getItem('lm_rice') != "null" && localStorage.getItem('lm_rice') != null) {
                                    localStorage.setItem('lmroticount', this.lunch_products[asd]['extra_qty']);
                                    this.extraRoti_Lunch = parseFloat(this.lunch_products[asd]['extra_qty']) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                                }
                                else {
                                    console.log(this.lunch_products[asd]['extra_qty']);
                                    localStorage.setItem('lmroticount', this.lunch_products[asd]['extra_qty']);
                                    if (this.lunch_products[asd]['extra_qty'] != '0') {
                                        this.subtract = parseFloat(this.lunch_products[asd]['extra_qty']) - 1;
                                        console.log(this.subtract);
                                    }
                                    else {
                                        this.subtract = 0;
                                    }
                                    this.extraRoti_Lunch = parseFloat(this.subtract) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                                    console.log(this.extraRoti_Lunch);
                                }
                                console.log(localStorage.getItem('extraRoti_Lunch'));
                                if (localStorage.getItem('extraRoti_Lunch') == '0') {
                                    console.log(this.extraRoti_Lunch.toString());
                                    localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
                                    if (this.lm_dal == '1' && this.lm_salad == '1') {
                                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ',Dal,' + this.lm_rice + ' and Salad';
                                    }
                                    else if (this.lm_dal == '1' && this.lm_salad == '') {
                                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ',Dal and ' + this.lm_rice;
                                    }
                                }
                            }
                            else {
                                this.lunch_products[asd]['selected'] = '0';
                                this.totallunch = parseFloat(this.lunch_products[asd]['extra_qty']) + parseFloat(this.lunch_products[asd]['quantity']);
                                this.lm_roti = this.totallunch + ' ' + this.lunch_products[asd]['product'];
                                localStorage.setItem('renewrotistringlunch', this.lm_roti);
                                var countday = localStorage.getItem('mealdays');
                                if (localStorage.getItem('lm_rice') != "" && localStorage.getItem('lm_rice') != "null" && localStorage.getItem('lm_rice') != null) {
                                    this.extraRoti_Lunch = parseFloat(this.lunch_products[asd]['extra_qty']) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                                }
                                else {
                                    if (this.lunch_products[asd]['extra_qty'] != '0') {
                                        this.subtract = parseFloat(this.lunch_products[asd]['extra_qty']) - 1;
                                    }
                                    else {
                                        this.subtract = 0;
                                    }
                                    this.extraRoti_Lunch = parseFloat(this.subtract) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                                }
                                if (localStorage.getItem('extraRoti_Lunch') == '0') {
                                    console.log(this.extraRoti_Lunch.toString());
                                    localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
                                    if (this.lm_dal == '1' && this.lm_salad == '1') {
                                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ',Dal,' + this.lm_rice + ' and Salad';
                                    }
                                    else if (this.lm_dal == '1' && this.lm_salad == '') {
                                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ',Dal and ' + this.lm_rice;
                                    }
                                }
                            }
                        }
                        else {
                            this.lunch_products[asd]['selected'] = '0';
                        }
                    }
                    localStorage.setItem('preferenceProducts_default', this.preferenceProducts);
                    localStorage.setItem('preferenceProducts', this.preferenceProducts);
                    localStorage.setItem('lm_roti', this.lm_roti);
                    localStorage.setItem('lm_sabji', this.lm_sabji);
                    localStorage.setItem('lm_rice', this.lm_rice);
                    localStorage.setItem('lm_dal', this.lm_dal);
                    localStorage.setItem('lm_salad', this.lm_salad);
                }
            }
        }
        /////
        localStorage.setItem('prefernceTypArr', JSON.stringify(this.dinnerprefArray));
        if (this.dinnerprefArray) {
            this.prefernceTypArr = this.dinnerprefArray;
            for (var i = 0; i < this.prefernceTypArr['products'].length; i++) {
                if (this.prefernceTypArr.meal == 'Dinner Meal') {
                    this.dinner_products = this.prefernceTypArr['products'];
                    localStorage.setItem('dinner_products', JSON.stringify(this.dinner_products));
                    for (var j = 0; j < this.prefernceTypArr['products'].length; j++) {
                        // Roti or Phulaka
                        if (this.prefernceTypArr['products'][j].category_id == '1') {
                            if (j <= 1) {
                                if (j == 0) {
                                    //this.dm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product + '/');
                                    this.dm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                                }
                                // if (j == 1) {
                                //   if (this.prefernceTypArr['products'][j].quantity != this.prefernceTypArr['products'][j - 1].quantity) {
                                //     this.dm_roti = this.dm_roti + (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                                //  } else {
                                //     this.dm_roti = this.dm_roti + (this.prefernceTypArr['products'][j].product);
                                //   }
                                // }
                            }
                        }
                        // Sabji
                        if (this.prefernceTypArr['products'][j].category_id == '5') {
                            this.dm_sabji = ',Sabji';
                        }
                        // Rice
                        if (this.prefernceTypArr['products'][j].category_id == '2') {
                            this.dm_rice = this.prefernceTypArr['products'][j].product;
                            this.dm_rice = this.dm_rice + ' Rice';
                            localStorage.setItem('dm_rice', this.dm_rice);
                        }
                        // Dal
                        if (this.prefernceTypArr['products'][j].category_id == '7') {
                            this.dm_dal = '1';
                        }
                        // // Salad
                        if (this.prefernceTypArr['products'][j].category_id == '4') {
                            this.dm_salad = '1';
                        }
                    }
                    this.ricecount = 0;
                    for (var din_prod = 0; din_prod < this.dinner_products.length; din_prod++) {
                        this.dinner_products[din_prod]['extra_qty'] = this.dinner_products[din_prod]['extra_qty'];
                        this.dinner_products[din_prod]['extra_amount'] = '0';
                        if (this.dinner_products[din_prod]['category_id'] == '2') {
                            // if (this.dinner_products[din_prod]['selected'] == '1') {
                            //   this.dinner_products[din_prod]['selected'] = '1';
                            // } else {
                            //   this.dinner_products[din_prod]['selected'] = '0';
                            // }
                            if (this.dinner_products[din_prod]['selected'] == '1') {
                                this.ricecount = 1;
                                this.dinner_products[din_prod]['selected'] = '1';
                            }
                            else {
                                if (this.ricecount == 0) {
                                    this.ricecount = 1;
                                    this.dinner_products[din_prod]['selected'] = '1';
                                }
                                else {
                                    this.dinner_products[din_prod]['selected'] = '0';
                                }
                            }
                        }
                        else if (this.dinner_products[din_prod]['category_id'] == '1') {
                            if (din_prod == 0) {
                                this.dinner_products[0]['selected'] = '1';
                                this.totaldinner = parseFloat(this.dinner_products[din_prod]['extra_qty']) + parseFloat(this.dinner_products[din_prod]['quantity']);
                                this.dm_roti = this.totaldinner + ' ' + this.dinner_products[din_prod]['product'];
                                localStorage.setItem('renewrotistringdinner', this.dm_roti);
                                //
                                var countday = localStorage.getItem('mealdays');
                                console.log(localStorage.getItem('dm_rice'));
                                if (localStorage.getItem('dm_rice') != "" && localStorage.getItem('dm_rice') != "null" && localStorage.getItem('dm_rice') != null) {
                                    localStorage.setItem('dmroticount', this.dinner_products[din_prod]['extra_qty']);
                                    this.extraRoti_Dinner = parseFloat(this.dinner_products[din_prod]['extra_qty']) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                                }
                                else {
                                    console.log(this.dinner_products[din_prod]['extra_qty']);
                                    localStorage.setItem('dmroticount', this.dinner_products[din_prod]['extra_qty']);
                                    if (this.dinner_products[din_prod]['extra_qty'] != '0') {
                                        this.subtract = parseFloat(this.dinner_products[din_prod]['extra_qty']) - 1;
                                    }
                                    else {
                                        this.subtract = 0;
                                    }
                                    this.extraRoti_Dinner = parseFloat(this.subtract) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                                }
                                console.log(localStorage.getItem('extraRoti_Dinner'));
                                if (localStorage.getItem('extraRoti_Dinner') == '0') {
                                    console.log(this.extraRoti_Dinner.toString());
                                    localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
                                    if (this.dm_dal == '1' && this.dm_salad == '1') {
                                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ',Dal,' + this.dm_rice + ' and Salad';
                                    }
                                    else if (this.dm_dal == '1' && this.dm_salad == '') {
                                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ',Dal and ' + this.dm_rice;
                                    }
                                }
                                //
                            }
                            else {
                                this.dinner_products[din_prod]['selected'] = '0';
                                this.totaldinner = parseFloat(this.dinner_products[din_prod]['extra_qty']) + parseFloat(this.dinner_products[din_prod]['quantity']);
                                this.dm_roti = this.totaldinner + ' ' + this.dinner_products[din_prod]['product'];
                                localStorage.setItem('renewrotistringdinner', this.dm_roti);
                                //
                                var countday = localStorage.getItem('mealdays');
                                console.log(localStorage.getItem('dm_rice'));
                                if (localStorage.getItem('dm_rice') != "" && localStorage.getItem('dm_rice') != "null" && localStorage.getItem('dm_rice') != null) {
                                    this.extraRoti_Dinner = parseFloat(this.dinner_products[din_prod]['extra_qty']) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                                }
                                else {
                                    console.log(this.dinner_products[din_prod]['extra_qty']);
                                    if (this.dinner_products[din_prod]['extra_qty'] != '0') {
                                        this.subtract = parseFloat(this.dinner_products[din_prod]['extra_qty']) - 1;
                                    }
                                    else {
                                        this.subtract = 0;
                                    }
                                    this.extraRoti_Dinner = parseFloat(this.subtract) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                                }
                                console.log(localStorage.getItem('extraRoti_Dinner'));
                                if (localStorage.getItem('extraRoti_Dinner') == '0') {
                                    console.log(this.extraRoti_Dinner.toString());
                                    localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
                                    console.log(this.dm_rice);
                                    if (this.dm_dal == '1' && this.dm_salad == '1') {
                                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ',Dal,' + this.dm_rice + ' and Salad';
                                    }
                                    else if (this.dm_dal == '1' && this.dm_salad == '') {
                                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ',Dal and ' + this.dm_rice;
                                    }
                                }
                            }
                        }
                        else {
                            this.dinner_products[din_prod]['selected'] = '0';
                        }
                    }
                    //this.preferenceProductsDinner = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
                    localStorage.setItem('preferenceProductsDinner_default', this.preferenceProductsDinner);
                    localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);
                    localStorage.setItem('dm_roti', this.dm_roti);
                    localStorage.setItem('dm_sabji', this.dm_sabji);
                    localStorage.setItem('dm_rice', this.dm_rice);
                    localStorage.setItem('dm_dal', this.dm_dal);
                    localStorage.setItem('dm_salad', this.dm_salad);
                }
            }
        }
        this.preferenceString();
    };
    RenewsubscriptionPage.prototype.preferenceString = function () {
        // Lunch Starts Here
        //Rice meal string
        if (this.rcm_lm_rice == '1' && this.rcm_lm_dal == '1' && this.rcm_lm_salad == '1') {
            this.preferenceProducts = this.rcm_lm_roti + this.rcm_lm_sabji + ',Dal,Rice and Salad';
            localStorage.setItem('preferenceProducts', this.preferenceProducts);
        }
        else if (this.rcm_lm_rice == '1' && this.rcm_lm_dal == '1' && this.rcm_lm_salad == '') {
            this.preferenceProducts = this.rcm_lm_roti + this.rcm_lm_sabji + ',Dal and Rice';
            localStorage.setItem('preferenceProducts', this.preferenceProducts);
        }
        //Roti meal string
        if (this.rtm_lm_dal == '1' && this.rtm_lm_salad == '1') {
            this.preferenceProductsRoti = this.rtm_lm_roti + this.rtm_lm_sabji + ',Dal and Salad';
            localStorage.setItem('preferenceProductsRoti', this.preferenceProductsRoti);
        }
        else if (this.rcm_lm_dal == '1' && this.rcm_lm_salad == '') {
            this.preferenceProductsRoti = this.rcm_lm_roti + this.rcm_lm_sabji + ', and Dal';
            localStorage.setItem('preferenceProductsRoti', this.preferenceProductsRoti);
        }
        // Lunch Ends here
        // Dinner Starts Here
        //Rice meal string
        if (this.rcm_dm_rice == '1' && this.rcm_dm_dal == '1' && this.rcm_dm_salad == '1') {
            this.preferenceProductsDinner = this.rcm_dm_roti + this.rcm_dm_sabji + ',Dal,Rice and Salad';
            localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);
        }
        else if (this.rcm_dm_rice == '1' && this.rcm_dm_dal == '1' && this.rcm_dm_salad == '') {
            this.preferenceProductsDinner = this.rcm_dm_roti + this.rcm_dm_sabji + ',Dal and Rice';
            localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);
        }
        //Roti meal string
        if (this.rtm_dm_dal == '1' && this.rtm_dm_salad == '1') {
            this.preferenceProductsRotiDinner = this.rtm_dm_roti + this.rtm_dm_sabji + ',Dal and Salad';
            localStorage.setItem('preferenceProductsRotiDinner', this.preferenceProductsRotiDinner);
        }
        else if (this.rcm_dm_dal == '1' && this.rcm_dm_salad == '') {
            this.preferenceProductsRotiDinner = this.rcm_dm_roti + this.rcm_dm_sabji + ', and Dal';
            localStorage.setItem('preferenceProductsRotiDinner', this.preferenceProductsRotiDinner);
        }
        // Lunch Ends here  preflunchmeal
        if (localStorage.getItem('mealType') == '1') {
            localStorage.setItem('mealType', 'Lunch');
        }
        else if (localStorage.getItem('mealType') == '2') {
            localStorage.setItem('mealType', 'Dinner');
        }
        else if (localStorage.getItem('mealType') == '3') {
            localStorage.setItem('mealType', 'Both');
        }
        if (this.preflunchmeal == 'Rice Meal' || this.prefdinnermeal == 'Rice Meal') {
            if (localStorage.getItem('mealType') == "Lunch") {
                localStorage.setItem('lunchpreference', this.preferenceProducts);
            }
            if (localStorage.getItem('mealType') == "Dinner") {
                localStorage.setItem('dinnerpreference', this.preferenceProductsDinner);
            }
            if (localStorage.getItem('mealType') == "Both") {
                localStorage.setItem('lunchpreference', this.preferenceProducts);
                localStorage.setItem('dinnerpreference', this.preferenceProductsDinner);
            }
        }
        if (this.preflunchmeal == 'Roti Meal' || this.prefdinnermeal == 'Roti Meal') {
            if (localStorage.getItem('mealType') == "Lunch") {
                localStorage.setItem('lunchpreference', this.preferenceProductsRoti);
            }
            if (localStorage.getItem('mealType') == "Dinner") {
                localStorage.setItem('dinnerpreference', this.preferenceProductsRotiDinner);
            }
            if (localStorage.getItem('mealType') == "Both") {
                localStorage.setItem('lunchpreference', this.preferenceProductsRoti);
                localStorage.setItem('dinnerpreference', this.preferenceProductsRotiDinner);
            }
        }
    };
    RenewsubscriptionPage.prototype.showConfirmAlert = function () {
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
    RenewsubscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-renewsubscription',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/renewsubscription/renewsubscription.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Renew Subscription</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="chooseplan-content2">\n  <div class="renew-subscrip-content text-center">\n    <ion-grid>\n      <ion-row style="margin-top: 1.945vh;" *ngFor="let subscriptions of subscriptiondataArray; let i=index">\n        <ion-col col-12 class="select-area2">\n          <div class="monthly-subscription" id=\'plan_{{subscriptions.subscription_id}}\' (click)="onClickSubscription(subscriptions.subscription_id)">\n            <div>\n              <img style="width: 9.97vh;height: 9.97vh;margin-top: 2.248vh;margin-bottom: 1.664vh;" *ngIf="subscriptions.subscription_id!=\'1\'"\n                src="assets/Group 321@2x.png" alt="food-image" class="img-responsive">\n              <!-- <img style="width: 13.778vh;height: 13.6vh;" *ngIf="subscriptions.subscription_id==\'1\'" src="assets/Group 225@2x.png" alt="food-image"\n                class="img-responsive"> -->\n            </div>\n            <h4>{{subscriptions.subscription_name}}</h4>\n            <span [innerHTML]="subscriptions.subscription_content"></span>\n            <label class="smallcontent" id=\'plan_p_{{subscriptions.subscription_id}}\' [innerHTML]="subscriptions.subscription_sub_content"></label>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n</ion-content>\n\n<!-- [disabled]="activeto ? false:true" -->\n\n\n\n<!-- <ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group-51.png">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>IT\'S TIME TO RENEW</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="renew-sub-content">\n  <div class="screen-heading">\n    <span>Choose Your</span>\n    <h2>Renewal Method</h2>\n  </div>\n  <div class="renew-subscription text-center">\n      <ion-grid>\n        <ion-row>\n          <ion-col text-center>\n            <img src="assets/Reneal_illstration_ic.png" alt="TrueMark" class="reneal-img">\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col>\n            <div class="renew-preference">\n              <h2>Renew with existing preferences</h2>\n              <p>at Rs. 4999/-</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-center>\n            <p class="extra">OR</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button type="submit" id="input_submit"  block  class="renew-button" (click)="Dashboardclick()">\n              Renew with new preferences \n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid> -->\n      \n  \n    <!-- <ion-grid>\n      <ion-row style="margin-top: 1.945vh;" *ngFor="let subscriptions of subscriptionArray; let i=index">\n        <ion-col col-12 class="select-area2">\n          <div class="monthly-subscription" id=\'plan_{{subscriptions.subscription_id}}\'>\n            <div>\n              <img style="width: 9.97vh;height: 9.97vh;margin-top: 2.248vh;margin-bottom: 1.664vh;" *ngIf="subscriptions.subscription_id!=\'1\'"\n                src="assets/Group 321@2x.png" alt="food-image" class="img-responsive">\n              <img style="width: 13.778vh;height: 13.6vh;" *ngIf="subscriptions.subscription_id==\'1\'" src="assets/Group 225@2x.png" alt="food-image"\n                class="img-responsive">\n            </div>\n            <h4>{{subscriptions.subscription_name}}</h4>\n            <span [innerHTML]="subscriptions.subscription_content"></span>\n            <label class="smallcontent" id=\'plan_p_{{subscriptions.subscription_id}}\' [innerHTML]="subscriptions.subscription_sub_content"></label>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid> -->\n  <!-- </div>\n</ion-content> -->\n\n<!-- [disabled]="activeto ? false:true" -->'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/renewsubscription/renewsubscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_7__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_6__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], RenewsubscriptionPage);
    return RenewsubscriptionPage;
}());

//# sourceMappingURL=renewsubscription.js.map

/***/ })

});
//# sourceMappingURL=15.js.map