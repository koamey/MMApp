webpackJsonp([11],{

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchAddressTimePageModule", function() { return SwitchAddressTimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__switch_address_time__ = __webpack_require__(952);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwitchAddressTimePageModule = (function () {
    function SwitchAddressTimePageModule() {
    }
    SwitchAddressTimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__switch_address_time__["a" /* SwitchAddressTimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__switch_address_time__["a" /* SwitchAddressTimePage */]),
            ],
        })
    ], SwitchAddressTimePageModule);
    return SwitchAddressTimePageModule;
}());

//# sourceMappingURL=switch-address-time.module.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchAddressTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(21);
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
 * Generated class for the SwitchAddressTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SwitchAddressTimePage = (function () {
    function SwitchAddressTimePage(navCtrl, navParams, util, translate, apiService, platform, alertCtrl, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.translate = translate;
        this.apiService = apiService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.ionicApp = ionicApp;
        // today = new Date();
        // minDate: string = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
        this.today = localStorage.getItem('guestmealdate'); //new Date();
        this.today1 = this.today;
        this.minDate1 = this.today1.toString();
        this.submitButton = ' rgb(216, 216, 216)';
        this.submitButton1 = ' rgb(216, 216, 216)';
        this.showcheckbox = false;
        this.deladd1 = "white";
        this.deladd2 = "gray";
        this.deltime1 = "white";
        this.deltime2 = "gray";
        this.disableRadio = true;
        this.disableAddress = true;
        this.disableRadio1 = true;
        this.disabletime = true;
        this.activeto = false;
        this.activeto1 = false;
        this.check1 = false;
        this.check2 = false;
        this.l1 = "0";
        this.l2 = "0";
        this.d1 = "0";
        this.d2 = "0";
        this.ActiveChkSumm = true;
        this.ActiveChkMethod = false;
        this.initializeBackButtonCustomHandler();
    }
    SwitchAddressTimePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    SwitchAddressTimePage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    SwitchAddressTimePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dinner = '';
        this.lunch = '';
        this.enddate = localStorage.getItem('endDate');
        this.minDate2 = this.enddate.toString();
        this.maxDate = new Date(localStorage.getItem('endDate')).toISOString();
        this.mealType = localStorage.getItem('mealType');
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
        this.apiService.getexistingaddress_time(this.tokendata, this.customer_id).then(function (res) {
            _this.util.hideLoader();
            if (res) {
                _this.AddressTimeArray = res['data'];
                for (var i = 0; i < _this.AddressTimeArray.length; i++) {
                    if ('home' == _this.AddressTimeArray[i].address_type) {
                        _this.flat_no = _this.AddressTimeArray[i].flat_no;
                        _this.address1 = _this.AddressTimeArray[i].address1;
                        _this.address2 = _this.AddressTimeArray[i].address2;
                        _this.area = _this.AddressTimeArray[i].area;
                        _this.city = _this.AddressTimeArray[i].city;
                        _this.state = _this.AddressTimeArray[i].state;
                        //this.address_name = this.AddressTimeArray[i].customer_address_id
                        _this.pincode = _this.AddressTimeArray[i].pincode;
                        if (_this.flat_no != '' && _this.address1 != '' && _this.address2 != '') {
                            _this.homestring = _this.flat_no + ' ' + _this.address1 + ' ' + _this.address2 + ' ' + _this.area + ' ' + _this.city + '-' + _this.pincode;
                            _this.boxactive = '0';
                            localStorage.setItem('weekend', _this.boxactive);
                        }
                        else {
                            _this.homestring = '';
                            _this.boxactive = '1';
                            localStorage.setItem('weekend', _this.boxactive);
                        }
                        _this.delivery_lunch_timing = _this.AddressTimeArray[i].delivery_lunch_timing;
                        _this.delivery_lunch_timing2 = _this.AddressTimeArray[i].delivery_lunch_timing2;
                        _this.delivery_dinner_timing = _this.AddressTimeArray[i].delivery_dinner_timing;
                        _this.delivery_dinner_timing2 = _this.AddressTimeArray[i].delivery_dinner_timing2;
                        _this.lunch_time_selected = _this.AddressTimeArray[i].lunch_time_selected;
                        _this.dinner_time_selected = _this.AddressTimeArray[i].dinner_time_selected;
                        _this.address_select_lunch = _this.AddressTimeArray[i].address_select_lunch;
                        _this.address_select_dinner = _this.AddressTimeArray[i].address_select_dinner;
                        _this.customer_address_id = _this.AddressTimeArray[i].customer_address_id;
                        _this.homeID = _this.customer_address_id;
                    }
                    if ('work' == _this.AddressTimeArray[i].address_type) {
                        _this.flat_no = _this.AddressTimeArray[i].flat_no;
                        _this.address1 = _this.AddressTimeArray[i].address1;
                        _this.address2 = _this.AddressTimeArray[i].address2;
                        _this.area = _this.AddressTimeArray[i].area;
                        _this.city = _this.AddressTimeArray[i].city;
                        _this.state = _this.AddressTimeArray[i].state;
                        _this.pincode = _this.AddressTimeArray[i].pincode;
                        // this.address_name = this.AddressTimeArray[i].customer_address_id
                        if (_this.flat_no != '' && _this.address1 != '' && _this.address2 != '') {
                            _this.workstring = _this.flat_no + ' ' + _this.address1 + ' ' + _this.address2 + ' ' + _this.area + ' ' + _this.city + '-' + _this.pincode;
                            _this.boxactive2 = '0';
                        }
                        else {
                            _this.workstring = '';
                            _this.boxactive2 = '1';
                        }
                        _this.delivery_lunch_timing = _this.AddressTimeArray[i].delivery_lunch_timing;
                        _this.delivery_lunch_timing2 = _this.AddressTimeArray[i].delivery_lunch_timing2;
                        _this.delivery_dinner_timing = _this.AddressTimeArray[i].delivery_dinner_timing;
                        _this.delivery_dinner_timing2 = _this.AddressTimeArray[i].delivery_dinner_timing2;
                        _this.lunch_time_selected = _this.AddressTimeArray[i].lunch_time_selected;
                        _this.dinner_time_selected = _this.AddressTimeArray[i].dinner_time_selected;
                        _this.address_select_lunch = _this.AddressTimeArray[i].address_select_lunch;
                        _this.address_select_dinner = _this.AddressTimeArray[i].address_select_dinner;
                        _this.customer_address_id = _this.AddressTimeArray[i].customer_address_id;
                        _this.workId = _this.customer_address_id;
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
        if (this.mealType == 'Both' || this.mealType == 'Lunch') {
            this.showLunchDiv = true;
            this.showDinnerDiv = false;
        }
        if (this.mealType == 'Dinner') {
            //  this.showLunchDiv=true
            this.showDinnerDiv = true;
        }
    };
    SwitchAddressTimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SwitchAddressTimePage');
    };
    SwitchAddressTimePage.prototype.Back = function () {
        if (this.ActiveChkMethod == true) {
            this.ActiveChkMethod = false;
            this.ActiveChkSumm = true;
        }
        else {
            this.navCtrl.setRoot('DashboardPage');
        }
    };
    SwitchAddressTimePage.prototype.radioGroupChange = function (e) {
        var _this = this;
        this.meal_type1 = e;
        if (this.meal_type1 == 'Lunch') {
            if (this.rdDefaultLunch) {
                this.meal_type1 = '';
                this.rdDefaultLunch = false;
                localStorage.setItem('Lunchset', '');
            }
            else {
                this.rdDefaultLunch = true;
                localStorage.setItem('Lunchset', this.meal_type1);
                this.meal_type1 = e;
            }
        }
        if (this.meal_type1 == 'Dinner') {
            if (this.rdDefaultDinner) {
                this.rdDefaultDinner = false;
                this.meal_type1 = '';
                localStorage.setItem('Dinnerset', '');
            }
            else {
                this.rdDefaultDinner = true;
                this.meal_type1 = e;
                localStorage.setItem('Dinnerset', this.meal_type1);
            }
        }
        if (localStorage.getItem('Lunchset') == 'Lunch' && localStorage.getItem('Dinnerset') == 'Dinner') {
            this.meal_type1 = 'both';
            this.address_name = "";
        }
        else if (localStorage.getItem('Lunchset') == 'Lunch') {
            this.meal_type1 = 'Lunch';
        }
        else if (localStorage.getItem('Dinnerset') == 'Dinner') {
            this.meal_type1 = 'Dinner';
        }
        console.log(this.meal_type1);
        this.util.showLoader();
        this.apiService.selecteddatetime(this.tokendata, this.customer_id, this.fromDate, this.toDate, this.meal_type1).then(function (res) {
            _this.util.hideLoader();
            if (res) {
                _this.selecteddate = res['data'].selecteddate;
                var element = document.getElementById('homeaddress');
                if (element) {
                    element.classList.remove("introborder");
                }
                var elements = document.getElementById('workaddress');
                if (elements) {
                    elements.classList.remove("introborder");
                }
                if (_this.homeID == _this.selecteddate) {
                    localStorage.setItem('l1check', 'home');
                    _this.address_name = 'home';
                    _this.workColor = "#ffffff";
                    _this.homeColor = "#00CC66";
                    _this.worktxt = "black";
                    _this.hometxt = "white";
                    _this.th1 = "white";
                    _this.homeBorder = 'none !important';
                    _this.workBorder = '0.13vh solid #000 !imporatnt';
                    var elements = document.getElementById('workaddress');
                    elements.style.border = null;
                    var x = document.getElementById('homeaddress');
                    x.style.border = 'none';
                    var y = document.getElementById('workaddress');
                    if (y) {
                        y.classList.add("introborder");
                    }
                    var element = document.getElementById('homeaddress');
                    if (element) {
                        element.classList.remove("introborder");
                    }
                }
                else if (_this.workId == _this.selecteddate) {
                    console.log('work in');
                    localStorage.setItem('l1check', 'work');
                    _this.showcheckbox = true;
                    _this.address_name = 'work';
                    _this.workColor = "#00CC66";
                    _this.homeColor = "#ffffff";
                    _this.worktxt = "white";
                    _this.hometxt = "black";
                    _this.tw1 = "white";
                    _this.workBorder = 'none !imporatnt';
                    _this.homeBorder = '0.13vh solid #000 !imporatnt';
                    var elements = document.getElementById('homeaddress');
                    elements.style.border = null;
                    var x = document.getElementById('workaddress');
                    x.style.border = 'none';
                    var y = document.getElementById('homeaddress');
                    if (y) {
                        y.classList.add("introborder");
                    }
                    var element = document.getElementById('workaddress');
                    if (element) {
                        element.classList.remove("introborder");
                    }
                }
                else {
                    _this.address_name = '';
                }
                if (_this.selecteddate == "") {
                    localStorage.setItem('l1check', '');
                    _this.address_name = '';
                    _this.workColor = "#ffffff";
                    _this.homeColor = "#ffffff";
                    _this.worktxt = "black";
                    _this.hometxt = "black";
                    _this.th1 = "black";
                    _this.tw1 = "black";
                    _this.homeBorder = '0.13vh solid #000';
                    _this.workBorder = '0.13vh solid #000';
                }
            }
            else {
                _this.conmessage = res['message'];
                _this.showConfirmAlert();
            }
        }, function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
        this.submitButton = "rgb(242, 155, 17)";
        this.meal_type1 = e;
        if (this.homeID == this.selecteddate) {
            this.address_name = 'home';
        }
        if (this.workId == this.selecteddate) {
            this.address_name = 'work';
        }
        this.disableAddress = false;
    };
    SwitchAddressTimePage.prototype.radioGroupChange1 = function (e) {
        var _this = this;
        this.disabletime = false;
        this.meal_type2 = e;
        if (this.meal_type2 == 'Lunch') {
            this.rdDefaultdinner1 = false;
            this.rdDefaultlunch1 = true;
            if (this.rdDefaultLunchT) {
                this.rdDefaultLunchT = false;
                localStorage.setItem('Lunchsettime', '');
            }
            else {
                this.rdDefaultLunchT = true;
                localStorage.setItem('Lunchsettime', this.meal_type2);
            }
        }
        if (this.meal_type2 == 'Dinner') {
            this.rdDefaultdinner1 = true;
            this.rdDefaultlunch1 = false;
            if (this.rdDefaultDinnerT) {
                this.rdDefaultDinnerT = false;
                localStorage.setItem('Dinnersettime', '');
            }
            else {
                this.rdDefaultDinnerT = true;
                localStorage.setItem('Dinnersettime', this.meal_type2);
            }
        }
        this.util.showLoader();
        this.apiService.selecteddatetime(this.tokendata, this.customer_id, this.fromDate1, this.toDate1, this.meal_type2).then(function (res) {
            _this.util.hideLoader();
            if (res) {
                _this.selectedtime = res['data'].selectedtime;
                if (_this.meal_type2 == 'Lunch') {
                    _this.showLunchDiv = true;
                    _this.showDinnerDiv = false;
                    //this.ChooseTime1 = this.delivery_lunch_timing
                }
                if (_this.meal_type2 == 'Dinner') {
                    _this.showLunchDiv = false;
                    _this.showDinnerDiv = true;
                    _this.ChooseTime1 = '';
                }
                if (_this.selectedtime == _this.delivery_lunch_timing) {
                    _this.ChooseTime1 = _this.delivery_lunch_timing;
                    _this.lt1 = "white";
                    _this.Ltime1 = "#00CC66";
                    _this.timeBorder1 = 'none';
                    _this.timeBorder2 = '0.13vh solid #000';
                }
                if (_this.selectedtime == _this.delivery_lunch_timing2) {
                    _this.ChooseTime1 = _this.delivery_lunch_timing2;
                    _this.lt2 = "white";
                    _this.Ltime2 = "#00CC66";
                    _this.timeBorder2 = 'none';
                    _this.timeBorder1 = '0.13vh solid #000';
                }
                if (_this.selectedtime == _this.delivery_dinner_timing) {
                    _this.ChooseTime1 = _this.delivery_dinner_timing;
                    _this.Dtime1 = "#00CC66";
                    _this.dt1 = "white";
                    _this.timeBorder3 = 'none';
                    _this.timeBorder4 = '0.13vh solid #000';
                }
                if (_this.selectedtime == _this.delivery_dinner_timing2) {
                    _this.ChooseTime1 = _this.delivery_dinner_timing2;
                    _this.Dtime2 = "#00CC66";
                    _this.dt2 = "white";
                    _this.timeBorder4 = 'none';
                    _this.timeBorder3 = '0.13vh solid #000';
                }
            }
        }, function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            ;
            _this.showConfirmAlert();
        });
    };
    SwitchAddressTimePage.prototype.fromSelectdate = function () {
        //this.submitButton="rgb(242, 155, 17)";
        // this.submitButton="rgb(242, 155, 17)";
        this.subscriptionenddate = localStorage.getItem('endDate');
        this.fromDate = this.selecteddate1;
        this.minDate1 = this.fromDate.toString();
        if (this.minDate1 > this.subscriptionenddate) {
            this.selecteddate1 = '';
            this.fromDate = '';
            this.util.alert(this.translate.instant('Please Select Correct From Date'), '');
            return;
        }
        // let tempDate = new Date(this.selecteddate1);
        // let upcomingDate = tempDate.setDate(tempDate.getDate() + 0 * 1);
        // this.setdate = new Date(upcomingDate).toISOString();
        this.activeto = true;
        this.selecteddate2 = '';
        this.toDate = '';
        if (this.selecteddate2 != '') {
            //this.setdate = '';
            this.selecteddate2 = '';
            //  this.setdate = new Date(upcomingDate).toISOString();
        }
        //  localStorage.setItem('date', this.date);
    };
    SwitchAddressTimePage.prototype.toSelectdate = function () {
        this.submitButton = "rgb(242, 155, 17)";
        this.toDate = this.selecteddate2;
        this.subscriptionenddate = localStorage.getItem('endDate');
        if (this.toDate > this.subscriptionenddate) {
            this.selecteddate2 = '';
            this.toDate = '';
            this.util.alert(this.translate.instant('Please Select Correct To Date'), '');
            return;
        }
        if (this.meal_type1 == null || this.meal_type1 == ' ') {
            this.disableRadio = false;
        }
        else {
            this.disableRadio = true;
        }
    };
    SwitchAddressTimePage.prototype.fromSelectdate1 = function () {
        //this.submitButton="rgb(242, 155, 17)";
        // this.submitButton="rgb(242, 155, 17)";
        this.fromDate1 = this.selecteddate11;
        this.minDateTime = this.fromDate1.toString();
        this.subscriptionenddate = localStorage.getItem('endDate');
        if (this.fromDate1 > this.subscriptionenddate) {
            this.selecteddate11 = '';
            this.fromDate1 = '';
            this.util.alert(this.translate.instant('Please Select Correct From Date'), '');
            return;
        }
        // let tempDate = new Date(this.selecteddate11);
        // let upcomingDate = tempDate.setDate(tempDate.getDate() + 0 * 1);
        // this.setdate1 = new Date(upcomingDate).toISOString();
        // console.log('next date is', this.setdate1);
        this.activeto1 = true;
        this.selecteddate22 = '';
        this.toDate1 = '';
        if (this.selecteddate22 != '') {
            //this.setdate = '';
            this.selecteddate22 = '';
            // this.setdate1 = new Date(upcomingDate).toISOString();
        }
        //  localStorage.setItem('date', this.date);
        // console.log('date', this.date)
    };
    SwitchAddressTimePage.prototype.toSelectdate1 = function () {
        this.submitButton1 = "rgb(242, 155, 17)";
        this.toDate1 = this.selecteddate22;
        this.subscriptionenddate = localStorage.getItem('endDate');
        if (this.toDate1 > this.subscriptionenddate) {
            this.selecteddate22 = '';
            this.toDate1 = '';
            this.util.alert(this.translate.instant('Please Select Correct To Date'), '');
            return;
        }
        if (this.meal_type2 == null || this.meal_type2 == ' ') {
            this.disableRadio1 = false;
        }
        else {
            this.disableRadio1 = true;
        }
        if (this.fromDate1 == '' || this.fromDate1 == null) {
            this.util.alert(this.translate.instant('Please Select From Date'), '');
            return;
        }
    };
    SwitchAddressTimePage.prototype.onclickAddress = function (addressType) {
        if (this.disableAddress == true) {
            return;
        }
        else {
            if (addressType == 'home') {
                this.checktabClick = addressType;
                localStorage.setItem('l1check', addressType);
                this.showcheckbox = false;
                this.check1 = false;
                this.check2 = false;
                this.l1 = "0";
                this.l2 = "0";
                this.homeColor = "#00CC66";
                this.workColor = "#ffffff";
                this.th1 = "white";
                this.tw1 = "black";
                this.hometxt = "white";
                this.worktxt = "black";
                this.address_name = '';
                this.address_name = this.AddressTimeArray[0].customer_address_id;
                if (this.address_name = this.AddressTimeArray[0].customer_address_id) {
                    this.address_name = 'home';
                }
                //this.submitButton = "rgb(242, 155, 17)";
                var elements = document.getElementById('workaddress');
                elements.style.border = null;
                var x = document.getElementById('homeaddress');
                x.style.border = 'none';
                var y = document.getElementById('workaddress');
                if (y) {
                    y.classList.add("introborder");
                }
                var element = document.getElementById('homeaddress');
                if (element) {
                    element.classList.remove("introborder");
                }
            }
            if (addressType == 'work') {
                this.checktabClick = addressType;
                localStorage.setItem('l1check', addressType);
                this.showcheckbox = true;
                this.workColor = "#00CC66";
                this.homeColor = "#ffffff";
                this.th1 = " black";
                this.tw1 = "white";
                this.hometxt = "black";
                this.worktxt = "white";
                this.address_name = '';
                this.address_name = this.AddressTimeArray[1].customer_address_id;
                if (this.address_name = this.AddressTimeArray[1].customer_address_id) {
                    this.address_name = 'work';
                }
                // this.submitButton = "rgb(242, 155, 17)";
                var elements = document.getElementById('homeaddress');
                elements.style.border = null;
                var x = document.getElementById('workaddress');
                x.style.border = 'none';
                var y = document.getElementById('homeaddress');
                if (y) {
                    y.classList.add("introborder");
                }
                var element = document.getElementById('workaddress');
                if (element) {
                    element.classList.remove("introborder");
                }
            }
        }
    };
    SwitchAddressTimePage.prototype.Saturday = function (e) {
        var isChecked = e.currentTarget.Lchecked1;
        this.weekend_end = localStorage.getItem('weekend');
        if (this.weekend_end == '1') {
            this.l1 = "0";
            var element = document.getElementById("checkedunchecked");
            if (element) {
                element.classList.add("removeunchecked");
            }
            this.rdDefaultdsat = false;
            this.util.alert(this.translate.instant('Home Address Not Entered'), '');
            return;
        }
        if (this.check1 == true) {
            this.rdDefaultdsat = true;
            this.l1 = "1";
            console.log('l1 sdvds', this.l1);
            localStorage.setItem('l1', this.l1);
        }
        else {
            this.rdDefaultdsat = false;
            this.l1 = "0";
            localStorage.setItem('l1', this.l1);
        }
    };
    SwitchAddressTimePage.prototype.Sunday = function (e) {
        var isChecked = e.currentTarget.Lchecked2;
        this.weekend_end = localStorage.getItem('weekend');
        if (this.weekend_end == '1') {
            this.rdDefaultdsun = false;
            this.l2 = "0";
            var element = document.getElementById("checkedunchecked");
            if (element) {
                element.classList.add("removeunchecked");
            }
            this.util.alert(this.translate.instant('Home Address Not Entered'), '');
            return;
        }
        if (this.check2 == true) {
            this.rdDefaultdsun = true;
            this.l2 = "1";
            console.log(this.l2);
            localStorage.setItem('l2', this.l2);
        }
        else {
            this.l2 = "0";
            this.rdDefaultdsun = false;
            localStorage.setItem('l2', this.l2);
        }
    };
    SwitchAddressTimePage.prototype.onSubmitAddress = function () {
        var _this = this;
        if (this.fromDate == '' || this.fromDate == null) {
            this.util.alert(this.translate.instant('Please Select From Date'), '');
            return;
        }
        if (this.toDate == '' || this.toDate == null) {
            this.util.alert(this.translate.instant('Please Select To Date'), '');
            return;
        }
        if (this.address_name == null) {
            this.util.alert(this.translate.instant('Please Select Address'), '');
            return;
        }
        this.lunch_set = localStorage.getItem('Lunchset');
        this.dinner_set = localStorage.getItem('Dinnerset');
        console.log(this.lunch_set);
        console.log(this.dinner_set);
        if (this.lunch_set == null) {
            localStorage.setItem('Lunchset', '');
        }
        else if (this.lunch_set == 'null') {
            localStorage.setItem('Lunchset', '');
        }
        else if (this.lunch_set == 'undefined') {
            localStorage.setItem('Lunchset', '');
        }
        if (this.dinner_set == null) {
            localStorage.setItem('Dinnerset', '');
        }
        else if (this.dinner_set == 'null') {
            localStorage.setItem('Dinnerset', '');
        }
        else if (this.dinner_set == 'undefined') {
            localStorage.setItem('Dinnerset', '');
        }
        this.lunch_set = localStorage.getItem('Lunchset');
        this.dinner_set = localStorage.getItem('Dinnerset');
        console.log(this.lunch_set);
        console.log(this.dinner_set);
        if ((this.lunch_set == 'Lunch') && (this.dinner_set == 'Dinner')) {
            this.meal_type1 = 'both';
        }
        else {
            if (this.lunch_set == 'Lunch') {
                this.meal_type1 = 'Lunch';
            }
            else {
                this.meal_type1 = 'Dinner';
            }
        }
        if (this.lunch_set == '' && this.dinner_set == '') {
            this.util.alert(this.translate.instant('Please Select Meal Type'), '');
            return;
        }
        if (this.address_name == "") {
            this.util.alert(this.translate.instant('Please Select Delivery Address'), '');
            return;
        }
        this.util.showLoader();
        this.apiService.switch_address(this.tokendata, this.address_name, this.customer_subscription_id, this.l1, this.l2, this.fromDate, this.toDate, this.meal_type1, this.customer_id).then(function (res) {
            _this.util.hideLoader();
            if (res['success']) {
                console.log('inside cancel meal Button', res);
                localStorage.setItem('Lunchset', '');
                localStorage.setItem('Dinnerset', '');
                _this.util.alert(_this.translate.instant(res['data']), '');
            }
            else {
                _this.conmessage = res['message'];
                _this.showConfirmAlert();
            }
        }).catch(function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
        this.navCtrl.setRoot('DashboardPage');
    };
    SwitchAddressTimePage.prototype.onSubmitTime = function () {
        var _this = this;
        if (this.fromDate1 == '' || this.fromDate1 == null) {
            this.util.alert(this.translate.instant('Please Select From Date'), '');
            return;
        }
        if (this.toDate1 == '' || this.toDate1 == null) {
            this.util.alert(this.translate.instant('Please Select To Date'), '');
            return;
        }
        if (this.ChooseTime1 == null || this.ChooseTime1 == '') {
            this.util.alert(this.translate.instant('Please Select Time'), '');
            return;
        }
        console.log('onClickSubmitButton');
        this.lunch_settime = localStorage.getItem('Lunchsettime');
        this.dinner_settime = localStorage.getItem('Dinnersettime');
        if ((this.lunch_settime == 'Lunch') && (this.dinner_settime == 'Dinner')) {
            this.meal_type2 = 'both';
        }
        else {
            this.meal_type2 = this.meal_type2;
        }
        console.log(this.meal_type2);
        this.util.showLoader();
        this.apiService.switch_time(this.tokendata, this.customer_id, this.ChooseTime1, this.toDate1, this.fromDate1, this.meal_type2, this.customer_subscription_id).then(function (res) {
            _this.util.hideLoader();
            if (res['success']) {
                console.log('inside cancel meal Button', res);
                localStorage.setItem('Lunchsettime', '');
                localStorage.setItem('Dinnersettime', '');
                _this.util.alert(_this.translate.instant(res['data']), '');
            }
            else {
                _this.conmessage = res['message'];
                _this.showConfirmAlert();
            }
        }).catch(function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
        this.navCtrl.setRoot('DashboardPage');
    };
    SwitchAddressTimePage.prototype.onClickDAddress = function () {
        this.checktabClick = localStorage.getItem('l1check');
        console.log('checktabClick', this.checktabClick);
        if (this.checktabClick == 'home') {
            this.homeBorder = 'none';
            this.workBorder = '0.13vh solid #000';
        }
        if (this.checktabClick == 'work') {
            this.workBorder = 'none';
            this.homeBorder = '0.13vh solid #000';
        }
        this.ActiveChkSumm = true;
        this.ActiveChkMethod = false;
    };
    SwitchAddressTimePage.prototype.onClickDTime = function () {
        //localStorage.setItem('l1check','');
        if (this.checkTimeTabClick == 'time1') {
            console.log('bbbbbbbbbbbb');
            this.timeBorder1 = 'none';
            this.timeBorder2 = '0.13vh solid #000';
        }
        if (this.checkTimeTabClick == 'time2') {
            this.timeBorder2 = 'none';
            this.timeBorder1 = '0.13vh solid #000';
        }
        if (this.checkTimeTabClick == 'time3') {
            this.timeBorder3 = 'none';
            this.timeBorder4 = '0.13vh solid #000';
        }
        if (this.checkTimeTabClick == 'time4') {
            this.timeBorder4 = 'none';
            this.timeBorder3 = '0.13vh solid #000';
        }
        this.ActiveChkSumm = false;
        this.ActiveChkMethod = true;
    };
    SwitchAddressTimePage.prototype.onclickTime1 = function () {
        //this.submitButton1 = "rgb(242, 155, 17)"
        if (this.disabletime == true) {
            return;
        }
        else {
            this.ChooseTime1 = '';
            this.checkTimeTabClick = 'time1';
            this.ChooseTime1 = this.delivery_lunch_timing;
            console.log('chooseTime', this.ChooseTime1);
            this.Ltime1 = "#00CC66";
            this.Ltime2 = "#ffffff";
            this.lt1 = "white";
            this.lt2 = "black";
            var x = document.getElementById('Lunchtime1');
            x.style.border = 'none';
            var y = document.getElementById('Lunchtime2');
            y.style.border = '0.13vh solid #000';
        }
    };
    SwitchAddressTimePage.prototype.onclickTime2 = function () {
        if (this.disabletime == true) {
            return;
        }
        else {
            this.ChooseTime1 = '';
            this.checkTimeTabClick = 'time2';
            this.ChooseTime1 = this.delivery_lunch_timing2;
            console.log('chooseTime', this.ChooseTime1);
            this.Ltime2 = "#00CC66";
            this.Ltime1 = "#ffffff";
            this.lt2 = "white";
            this.lt1 = "black";
            var x = document.getElementById('Lunchtime2');
            x.style.border = 'none';
            var y = document.getElementById('Lunchtime1');
            y.style.border = '0.13vh solid #000';
        }
    };
    SwitchAddressTimePage.prototype.onclickTime3 = function () {
        if (this.disabletime == true) {
            return;
        }
        else {
            this.ChooseTime1 = '';
            this.checkTimeTabClick = 'time3';
            this.ChooseTime1 = this.delivery_dinner_timing;
            console.log('chooseTime', this.ChooseTime1);
            this.Dtime1 = "#00CC66";
            this.Dtime2 = "#ffffff";
            this.dt1 = "white";
            this.dt2 = "black";
            var x = document.getElementById('Dinnertime1');
            x.style.border = 'none';
            var y = document.getElementById('Dinnertime2');
            y.style.border = '0.13vh solid #000';
        }
    };
    SwitchAddressTimePage.prototype.onclickTime4 = function () {
        if (this.disabletime == true) {
            return;
        }
        else {
            // this.submitButton1 = "rgb(242, 155, 17)"
            this.ChooseTime1 = '';
            this.checkTimeTabClick = 'time4';
            this.ChooseTime1 = this.delivery_dinner_timing2;
            console.log('chooseTime', this.ChooseTime1);
            this.Dtime2 = "#00CC66";
            this.Dtime1 = "#ffffff";
            this.dt2 = "white";
            this.dt1 = "black";
            var x = document.getElementById('Dinnertime2');
            x.style.border = 'none';
            var y = document.getElementById('Dinnertime1');
            y.style.border = '0.13vh solid #000';
        }
    };
    SwitchAddressTimePage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('SwitchAddressTimePage');
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
    SwitchAddressTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-switch-address-time',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/switch-address-time/switch-address-time.html"*/'<ion-header no-border class="dit-type-header switch-address-marign">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>SWITCH ADDRESS/TIME</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <div *ngIf="ActiveChkSumm" class="grid">\n    <div class="screen-heading" *ngIf="ActiveChkSumm">\n      <span>Choose</span>\n      <h2>Date & Address</h2>\n    </div>\n    <div class="main-container1">\n    \n\n      <div class="switchTabdiv1">\n        <div class="main-header">\n          <ion-grid style="padding: 0 2.5vh;">\n            <ion-row>\n              <ion-col col-6 text-center>\n                <div class="class-toogle" (click)="onClickDAddress()" [style.color]="ActiveChkSumm?deladd1:deladd2">\n                  <label>Delivery Address</label>\n                </div>\n              </ion-col>\n              <ion-col col-6 text-center>\n                <div class="class-toogle" (click)="onClickDTime()" [style.color]="ActiveChkMethod?deltime1:deltime2">\n                  <label> Delivery Time </label>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <div class="switch-address-area">\n          <ion-grid class="toogle-highlite">\n            <ion-row>\n              <ion-col col-6 class="toogle-highlite-padding">\n                <div *ngIf="ActiveChkSumm" class="toogle-design"></div>\n              </ion-col>\n              <ion-col col-6 class="toogle-highlite-padding">\n                <div *ngIf="ActiveChkMethod"></div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-grid>\n            <ion-row text-center>\n              <ion-col>\n                <label>\n                  <h5 class="heading-range">CHOOSE DATE / RANGE</h5>\n                </label>\n              </ion-col>\n            </ion-row>\n            <ion-row class="top-marign-row">\n              <ion-col col-12 class="text-center">\n                <label class="choosedate-from"> FROM </label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-datetime class="datetime-text-switch" displayFormat="DD MMMM YYYY" [min]="today1"\n                    [max]="minDate2" [disabled] [(ngModel)]="selecteddate1" (ngModelChange)="fromSelectdate()"></ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <br>\n            <ion-row class="top-marign-row">\n              <ion-col col-12 class="text-center">\n                <label class="choosedate-from">TO</label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12>\n                <ion-item>\n                  <ion-datetime class="datetime-text-switch" displayFormat="DD MMMM YYYY" [min]="minDate1"\n                    [max]="minDate2" [(ngModel)]="selecteddate2" (ngModelChange)="toSelectdate()"\n                    [disabled]="activeto ? false:true"></ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 class="text-center">\n                <h5 class="heading-range">CHOOSE MEAL TYPE</h5>\n              </ion-col>\n            </ion-row>\n\n            <ion-list class="radiolist">\n              <ion-row>\n                <!-- for lunch-->\n                <ion-col col-12 text-center *ngIf="mealType==\'Lunch\'" class="mealtype-checked2">\n                 \n                     <ion-radio type="radio" id="lunch" mode="md" value="Lunch" [disabled]="disableRadio==true" (click)="radioGroupChange(\'Lunch\')" [checked]="rdDefaultLunch" name="lunch"></ion-radio>\n                    <!-- <input type="radio" [checked]="rdDefaultLunch" id="lunch" name="lunch" mode="md" value="Lunch"\n                      (click)="radioGroupChange(\'Lunch\')" [disabled]="disableRadio==true"  /> -->\n\n                    <label *ngIf="disableRadio==true">Lunch</label>\n                    <label (click)="radioGroupChange(\'Lunch\')" *ngIf="disableRadio==false">Lunch</label>\n                \n                  <!-- </ion-list> -->\n                </ion-col>\n                <!-- for dinner -->\n                <ion-col col-12 text-center *ngIf="mealType==\'Dinner\'" class="mealtype-checked2">\n               \n                     <ion-radio type="radio" id="dinner" mode="md" value="Dinner" [disabled]="disableRadio==true" (click)="radioGroupChange(\'Dinner\')" [checked]="rdDefaultDinner" name="dinner"></ion-radio>\n                   <!--  <input type="radio" [checked]="rdDefaultDinner" id="dinner" name="dinner" mode="md" value="Dinner"\n                      (click)="radioGroupChange(\'Dinner\')" [disabled]="disableRadio==true" /> -->\n                    <label *ngIf="disableRadio==true">Dinner</label>\n\n                     <label (click)="radioGroupChange(\'Dinner\')" *ngIf="disableRadio==false">Dinner</label>\n              \n                  <!-- </ion-list> -->\n                </ion-col>\n                <!-- for both -->\n                <ion-col col-6 text-center *ngIf="mealType==\'Both\'" class="mealtype-checked2">\n                 \n                     <ion-radio type="radio" id="lunch" name="lunch" mode="md" value="Lunch" (click)="radioGroupChange(\'Lunch\')" [disabled]="disableRadio==true" [checked]="rdDefaultLunch" name="lunch"></ion-radio>\n                    <!-- <input type="radio" [checked]="rdDefaultLunch" id="lunch" name="lunch" mode="md" value="Lunch"\n                      (click)="radioGroupChange(\'Lunch\')" [disabled]="disableRadio==true"/> -->\n                    <label *ngIf="disableRadio==true">Lunch</label>\n                       <label (click)="radioGroupChange(\'Lunch\')" *ngIf="disableRadio==false">Lunch</label>\n               \n                  <!-- </ion-list> -->\n                </ion-col>\n                <ion-col col-6 text-center *ngIf="mealType==\'Both\'" class="mealtype-checked2">\n                 \n                    <ion-radio type="radio" id="dinner" name="dinner" mode="md" value="Dinner" (click)="radioGroupChange(\'Dinner\')" [disabled]="disableRadio==true" name="dinner" [checked]="rdDefaultDinner"></ion-radio>\n                    <!-- <input type="radio" [checked]="rdDefaultDinner" id="dinner" name="dinner" mode="md" value="Dinner"\n                      (click)="radioGroupChange(\'Dinner\')" [disabled]="disableRadio==true"/> -->\n                    <label *ngIf="disableRadio==true">Dinner</label>\n                    <label (click)="radioGroupChange(\'Dinner\')"  *ngIf="disableRadio==false">Dinner</label>\n                \n                  <!-- </ion-list> -->\n                </ion-col>\n\n              </ion-row>\n            </ion-list>\n          </ion-grid>\n\n          <ion-row>\n            <ion-col col-12 class="text-center">\n              <h5 class="heading-range">CHOOSE DELIVERY ADDRESS</h5>\n            </ion-col>\n          </ion-row>\n          <div class="choose_delivery" *ngFor="let address of AddressTimeArray; let i=index">\n            <div *ngIf="address.address_type==\'home\'">\n              <ion-row>\n                <ion-col>\n                  <div class="homeArea" id="homeaddress" [style.border]="homeBorder" [style.background]="homeColor"\n                    block (click)="onclickAddress(address.address_type)" [style.color]="th1" *ngIf="boxactive==\'0\'">\n                    <label [style.color]="th1">Home</label>\n                    <p [style.color]="hometxt">{{homestring}}</p>\n                  </div>\n\n                  <div class="homeArea" id="homeaddress" [style.border]="homeBorder" [style.background]="homeColor"\n                    block [style.color]="th1" *ngIf="boxactive==\'1\'">\n                    <label [style.color]="th1">Home</label>\n                    <p style="color: black !important; padding: 0.45vh 0.30vh;">Address Not Entered\n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class="choose_delivery" *ngIf="address.address_type==\'work\'">\n              <ion-row>\n                <ion-col>\n                  <div class="homeArea" id="workaddress" [style.border]="workBorder" [style.background]="workColor"\n                    block [style.color]="tw1" *ngIf="boxactive2==\'0\'" (click)="onclickAddress(address.address_type)">\n                    <label [style.color]="tw1">Work</label>\n                    <p [style.color]="worktxt">{{workstring}}</p>\n                  </div>\n\n\n                  <div class="homeArea" id="workaddress" [style.border]="workBorder" [style.background]="workColor"\n                    block [style.color]="tw1" *ngIf="boxactive2==\'1\'">\n                    <label [style.color]="tw1">Work</label>\n                    <p style="color: black  !important;padding: 0.45vh 0.30vh;">Address Not Entered\n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n          <br>\n\n\n          <div *ngIf="showcheckbox==true">\n            <ion-row>\n              <ion-col text-center>\n                <label class="heading-range">Deliver to Home Address on</label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row id="checkedunchecked">\n              <ion-col col-6 text-center>\n                <div class="holidays">\n                  <ion-checkbox class="checkbox-square" (click)="Saturday($event)" [(ngModel)]="check1" [checked]="rdDefaultdsat"></ion-checkbox>\n                </div>\n                <div class="holidays-label">\n                  <label>Saturday</label>\n                </div>\n              </ion-col>\n\n              <ion-col col-6 text-center>\n                <div class="holidays">\n                  <ion-checkbox class="checkbox-square" (click)="Sunday($event)" [(ngModel)]="check2" [checked]="rdDefaultdsun"></ion-checkbox>\n                </div>\n                <div class="holidays-label">\n                  <label>Sunday</label>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <ion-row style="padding: 0vh 5.333vw;">\n            <ion-col class="button-delivery" style="padding:0 0 3vh 0;">\n              <button ion-button type="submit" id="input_submit" block (click)="onSubmitAddress()"\n                [style.background]="submitButton">\n                Update Delivery Address\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- SWITCH Time Div -->\n  <div *ngIf="ActiveChkMethod" class="grid">\n    <div class="screen-heading" *ngIf="ActiveChkMethod">\n      <span>Choose</span>\n      <h2>Date & Address</h2>\n    </div>\n\n    <div class="main-container1">\n  \n\n      <div class="switchTabdiv1">\n        <div class="main-header">\n          <ion-grid style="padding: 0 2.5vh;">\n            <ion-row>\n              <ion-col col-6 text-center>\n                <div class="class-toogle" (click)="onClickDAddress()" [style.color]="ActiveChkSumm?deladd1:deladd2">\n                  <label>Delivery Address</label>\n                </div>\n              </ion-col>\n  \n              <ion-col col-6 text-center>\n                <div class="class-toogle" (click)="onClickDTime()" [style.color]="ActiveChkMethod?deltime1:deltime2">\n                  <label> Delivery Time </label>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <div class="switch-address-area">\n          <ion-grid class="toogle-highlite">\n            <ion-row>\n              <ion-col col-6>\n                <div *ngIf="ActiveChkSumm"></div>\n              </ion-col>\n              <ion-col col-6 class="toogle-highlite-padding">\n                <div *ngIf="ActiveChkMethod" class="toogle-design-second"></div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-grid>\n            <ion-row text-center>\n              <ion-col>\n                <h5 class="heading-range">CHOOSE DATE / RANGE </h5>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class="top-marign-row">\n              <ion-col col-12 class="text-center">\n                <label class="choosedate-from"> FROM </label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 class="text-center">\n                <ion-item>\n                  <ion-datetime class="datetime-text-switch" displayFormat="DD MMMM YYYY" [min]="today1"\n                    [max]="minDate2" [(ngModel)]="selecteddate11" (ngModelChange)="fromSelectdate1()"></ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <br>\n            <ion-row class="top-marign-row">\n              <ion-col col-12 class="text-center">\n                <label class="choosedate-from"> TO </label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 class="text-center">\n                <ion-item>\n                  <ion-datetime class="datetime-text-switch" displayFormat="DD MMMM YYYY" [min]="minDateTime"\n                    [max]="minDate2" [(ngModel)]="selecteddate22" (ngModelChange)="toSelectdate1()"\n                    [disabled]="activeto1 ? false:true"></ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 class="text-center">\n                <h5 class="heading-range">CHOOSE MEAL TYPE</h5>\n              </ion-col>\n            </ion-row>\n            <ion-list class="radiolist" radio-group>\n              <ion-row>\n                <!-- <ion-col col-6 text-center>\n                <div class="ionButton" *ngIf="mealType==\'Lunch\' || mealType==\'Both\'" class="mealtype-checked">\n                    <ion-radio type="radio" mode="md" value="Lunch" [disabled]="disableRadio1==true"></ion-radio>\n                    <label >Lunch</label>\n                  </div>\n              </ion-col>\n\n              <ion-col col-6 text-center>\n                  <div class="ionButton" *ngIf="mealType==\'Dinner\' || mealType==\'Both\'" class="mealtype-checked">\n                    <ion-radio type="radio" mode="md" value="Dinner"  [disabled]="disableRadio1==true"></ion-radio>\n                    <label >Dinner</label>\n                  </div> -->\n\n                <ion-col col-12 text-center *ngIf="mealType==\'Lunch\'" class="mealtype-checked2">\n                  \n                    <ion-radio type="radio" mode="md" value="Lunch" \n                      (click)="radioGroupChange1(\'Lunch\')" [checked]="rdDefaultlunch1" style="vertical-align: middle;"></ion-radio>\n                      <!-- <input type="radio" mode="md" value="Lunch"\n                      (click)="radioGroupChange1(\'Lunch\')" [checked]="rdDefaultlunch1"/> -->\n                    <label (click)="radioGroupChange1(\'Lunch\')">Lunch</label>\n              \n\n                </ion-col>\n\n                <ion-col col-12 text-center *ngIf="mealType==\'Dinner\'" class="mealtype-checked2">\n                \n                    <!-- <input type="radio" mode="md" value="Lunch"\n                    (click)="radioGroupChange1(\'Dinner\')" [checked]="rdDefaultdinner1"/> -->\n\n                    <ion-radio type="radio" mode="md" value="Dinner" \n                      (click)="radioGroupChange1(\'Dinner\')" [checked]="rdDefaultdinner1" style="vertical-align: middle;"></ion-radio>\n                    <label (click)="radioGroupChange1(\'Dinner\')">Dinner</label>\n                \n\n                </ion-col>\n\n                <ion-col col-6 text-center *ngIf="mealType==\'Both\'" class="mealtype-checked2">\n                \n                   <!--  <input type="radio" mode="md" value="Lunch"\n                    (click)="radioGroupChange1(\'Lunch\')" [checked]="rdDefaultlunch1"/> -->\n\n                    <ion-radio type="radio" mode="md" value="Lunch" \n                      (click)="radioGroupChange1(\'Lunch\')" [checked]="rdDefaultlunch1"  style="vertical-align: middle;"></ion-radio>\n                    <label style="vertical-align: middle;" (click)="radioGroupChange1(\'Lunch\')">Lunch</label>\n                  \n\n                </ion-col>\n                <ion-col col-6 text-center *ngIf="mealType==\'Both\'" class="mealtype-checked2">\n                \n                    <!-- <input type="radio" mode="md" value="Lunch"\n                    (click)="radioGroupChange1(\'Dinner\')" [checked]="rdDefaultdinner1"/> -->\n                    \n                    <ion-radio type="radio" mode="md" value="Dinner" \n                      (click)="radioGroupChange1(\'Dinner\')" [checked]="rdDefaultdinner1" style="vertical-align: middle;"></ion-radio>\n                    <label style="vertical-align: middle;" (click)="radioGroupChange1(\'Dinner\')">Dinner</label>\n                \n\n                </ion-col>\n\n              </ion-row>\n            </ion-list>\n\n\n            <!--  -->\n          </ion-grid>\n          <ion-row>\n            <ion-col col-12 class="text-center">\n              <h5 class="heading-range">CHOOSE DELIVERY TIME</h5>\n            </ion-col>\n          </ion-row>\n          <!-- <div *ngFor="let time of AddressTimeArray; let i=index"> -->\n          <ion-grid *ngIf="showLunchDiv">\n            <ion-row>\n              <ion-col text-center>\n                <label class="heading-range">LUNCH</label>\n              </ion-col>\n            </ion-row>\n            <ion-row style="padding: 0vh 2.667vw;">\n              <ion-col col-6 text-center style="">\n                <div id="Lunchtime1" class="onboard-click time-update" block (click)="onclickTime1()"\n                  [style.border]="timeBorder1" [style.background]="Ltime1" [style.color]="lt1">\n                  {{delivery_lunch_timing}}\n                </div>\n              </ion-col>\n              <ion-col col-6 text-center style="">\n                <div id="Lunchtime2" class="onboard-click time-update" block (click)="onclickTime2()"\n                  [style.border]="timeBorder2" [style.background]="Ltime2" [style.color]="lt2">\n                  {{delivery_lunch_timing2}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-grid *ngIf="showDinnerDiv">\n            <ion-row>\n              <ion-col text-center>\n                <label class="heading-range">DINNER</label>\n              </ion-col>\n            </ion-row>\n            <ion-row style="padding: 0vh 2.667vw;">\n              <ion-col col-6>\n                <div id="Dinnertime1" class="onboard-click time-update" block (click)="onclickTime3()"\n                  [style.border]="timeBorder3" [style.background]="Dtime1" [style.color]="dt1">\n                  {{delivery_dinner_timing}}\n                </div>\n              </ion-col>\n              <ion-col col-6>\n                <div id="Dinnertime2" class="onboard-click time-update" block (click)="onclickTime4()"\n                  [style.border]="timeBorder4" [style.background]="Dtime2" [style.color]="dt2">\n                  {{delivery_dinner_timing2}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <!-- </div> -->\n          <ion-grid>\n            <ion-row style="padding: 0vh 4vw;padding-bottom: 4vh;">\n              <ion-col class="button-delivery" style="padding: 0;">\n                <button ion-button type="submit" id="input_submit" block (click)="onSubmitTime()"\n                  [style.background]="submitButton1">\n                  Update Delivery Time\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/switch-address-time/switch-address-time.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], SwitchAddressTimePage);
    return SwitchAddressTimePage;
}());

//# sourceMappingURL=switch-address-time.js.map

/***/ })

});
//# sourceMappingURL=11.js.map