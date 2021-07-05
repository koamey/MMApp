webpackJsonp([41],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosedeliverytimePageModule", function() { return ChoosedeliverytimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choosedeliverytime__ = __webpack_require__(915);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChoosedeliverytimePageModule = (function () {
    function ChoosedeliverytimePageModule() {
    }
    ChoosedeliverytimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choosedeliverytime__["a" /* ChoosedeliverytimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choosedeliverytime__["a" /* ChoosedeliverytimePage */]),
            ],
        })
    ], ChoosedeliverytimePageModule);
    return ChoosedeliverytimePageModule;
}());

//# sourceMappingURL=choosedeliverytime.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosedeliverytimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_service__ = __webpack_require__(35);
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
 * Generated class for the ChoosedeliverytimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoosedeliverytimePage = (function () {
    function ChoosedeliverytimePage(navCtrl, navParams, apiService, push, translate, storage, util, platform, viewCtrl, atrCtrl, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.push = push;
        this.translate = translate;
        this.storage = storage;
        this.util = util;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.atrCtrl = atrCtrl;
        this.ionicApp = ionicApp;
        this.today = new Date();
        this.minDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString().valueOf();
        this.ActiveLunch = false;
        this.ActiveDinner = false;
        this.lunch1 = '';
        this.lunch2 = '';
        this.dinner1 = '';
        this.dinner2 = '';
        this.mealType = '';
        this.renewmealTypeArr = [];
        this.coundays = 1;
        this.selectedlunchtime = navParams.get('selecttimeforlunchis');
        this.selecteddinnertime = navParams.get('selecttimefordinneris');
        this.selectedbothtime1 = navParams.get('selecttimelunchis');
        this.selectedbothtime2 = navParams.get('selecttimedinneris');
        this.selecteddateis = navParams.get('selectdateis');
        this.back = navParams.get('back');
        this.initializeBackButtonCustomHandler();
    }
    ChoosedeliverytimePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    ChoosedeliverytimePage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    ChoosedeliverytimePage.prototype.ionViewDidLoad = function () {
    };
    ChoosedeliverytimePage.prototype.ngOnInit = function () {
        var _this = this;
        this.mealType = localStorage.getItem('mealType');
        if (this.mealType == 'Lunch' || this.mealType == 'lunch') {
            localStorage.setItem('dinnertime', '');
        }
        else if (this.mealType == 'Dinner' || this.mealType == 'dinner') {
            localStorage.setItem('lunchtime', '');
        }
        this.apiService.showMealType().then(function (res) {
            _this.util.hideLoader();
            if (res.success) {
                _this.renewmealTypeArr = res['data'];
                for (var i = 0; i < _this.renewmealTypeArr.length; i++) {
                    if (_this.mealType == _this.renewmealTypeArr[i]['meal']) {
                        localStorage.removeItem('LMealTime1');
                        localStorage.removeItem('LMealTime2');
                        localStorage.removeItem('DMealTime1');
                        localStorage.removeItem('DMealTime2');
                        localStorage.removeItem('mealcount');
                        localStorage.removeItem('mealdays');
                        localStorage.setItem('price', _this.renewmealTypeArr[i]['price']);
                        localStorage.setItem('mealId', _this.renewmealTypeArr[i]['mealId']);
                        localStorage.setItem('cancel_count', _this.renewmealTypeArr[i]['cancel_count']);
                        var mealId = localStorage.getItem('mealId');
                        localStorage.setItem('mealType', _this.renewmealTypeArr[i]['meal']);
                        localStorage.setItem('choosestartdate', _this.renewmealTypeArr[i]['choosestartdate']);
                        _this.selecteddates = localStorage.getItem('choosestartdate');
                        console.log(_this.selecteddates);
                        _this.minDate = _this.selecteddates.toString();
                        console.log(_this.minDate);
                        if (localStorage.getItem('renew_subscription_start') == '1') {
                            _this.selecteddate = localStorage.getItem('StartDate');
                            _this.minDate = _this.selecteddate.toString();
                            console.log(_this.minDate);
                        }
                        localStorage.setItem('LMealTime1', _this.renewmealTypeArr[0]['mealTiming1']);
                        localStorage.setItem('DMealTime1', _this.renewmealTypeArr[1]['mealTiming1']);
                        localStorage.setItem('DMealTime2', _this.renewmealTypeArr[1]['mealTiming2']);
                        localStorage.setItem('LMealTime2', _this.renewmealTypeArr[0]['mealTiming2']);
                        localStorage.setItem('mealdays', _this.renewmealTypeArr[i]['subscription_period']);
                        localStorage.setItem('mealcount', _this.renewmealTypeArr[i]['number_of_meals']);
                        _this.Lunchtime1 = localStorage.getItem('LMealTime1');
                        _this.Lunchtime2 = localStorage.getItem('LMealTime2');
                        _this.Dinnertime1 = localStorage.getItem('DMealTime1');
                        _this.Dinnertime2 = localStorage.getItem('DMealTime2');
                        if (_this.renewmealTypeArr[i]['BothTiming']) {
                            localStorage.removeItem('LMealTime1');
                            localStorage.removeItem('LMealTime2');
                            localStorage.removeItem('DMealTime1');
                            localStorage.removeItem('DMealTime2');
                            localStorage.setItem('LMealTime1', _this.renewmealTypeArr[i]['BothTiming'][0]['mealTiming1']);
                            localStorage.setItem('LMealTime2', _this.renewmealTypeArr[i]['BothTiming'][0]['mealTiming2']);
                            localStorage.setItem('DMealTime1', _this.renewmealTypeArr[i]['BothTiming'][1]['mealTiming1']);
                            localStorage.setItem('DMealTime2', _this.renewmealTypeArr[i]['BothTiming'][1]['mealTiming2']);
                            _this.Lunchtime1 = localStorage.getItem('LMealTime1');
                            _this.Lunchtime2 = localStorage.getItem('LMealTime2');
                            _this.Dinnertime1 = localStorage.getItem('DMealTime1');
                            _this.Dinnertime2 = localStorage.getItem('DMealTime2');
                            localStorage.setItem('mealdays', _this.renewmealTypeArr[i]['subscription_period']);
                            localStorage.setItem('mealcount', _this.renewmealTypeArr[i]['number_of_meals']);
                        }
                        if (localStorage.getItem('renewis') == '1') {
                            _this.dinner1 = _this.selmealtimedin;
                            _this.lunch1 = _this.selmealtimelunch;
                        }
                    }
                }
            }
            else {
                _this.conmessage = res.message;
                _this.showConfirmAlert();
            }
        }).catch(function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
        this.Active = false;
        this.conbut = "#d4d3d1";
        this.dtcolor = "rgb(153,153,153)";
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
        this.selecteddate = localStorage.getItem('StartDate');
        console.log(this.selecteddate);
        this.selecteddates = localStorage.getItem('choosestartdate');
        console.log(this.selecteddates);
        if (this.selecteddates != null && this.selecteddates != 'null') {
            this.minDate = this.selecteddates.toString();
            console.log(this.minDate);
        }
        if (localStorage.getItem('renew_subscription_start') == '1') {
            this.minDate = this.selecteddate.toString();
            console.log(this.minDate);
        }
        if (this.selecteddate != null) {
            this.days = parseInt(localStorage.getItem('mealdays'));
            this.Active = true;
            this.conbut = "rgb(242, 155, 17)";
            this.coloropacity = 'datetime-text coloropacity';
        }
        else {
            this.coloropacity = 'datetime-text coloropacity1';
        }
        this.token = localStorage.getItem('token');
        this.conbut1 = 'rgb(216,216,216)';
        this.dtcolor = 'rgb(193,193,193)';
        this.mealType = localStorage.getItem('mealType');
        this.id = localStorage.getItem('id');
        this.Lunchtime1 = localStorage.getItem('LMealTime1');
        this.Lunchtime2 = localStorage.getItem('LMealTime2');
        this.Dinnertime1 = localStorage.getItem('DMealTime1');
        this.Dinnertime2 = localStorage.getItem('DMealTime2');
        this.sellunchtime = localStorage.getItem('selectlunchtime');
        this.seldinnertime = localStorage.getItem('selectdinnertime');
        this.selmealtimelunch = localStorage.getItem('lunchtime');
        this.selmealtimedin = localStorage.getItem('dinnertime');
        if (this.mealType == "Both") {
            this.ActiveLunch = true;
            this.ActiveDinner = true;
        }
        else if (this.mealType == "Lunch") {
            this.ActiveLunch = true;
            this.ActiveDinner = false;
        }
        else if (this.mealType == "Dinner") {
            this.ActiveLunch = false;
            this.ActiveDinner = true;
        }
        if (this.selmealtimelunch == '0') {
            this.Ldiv11 = "activ1";
            this.Ldiv21 = "activ1";
        }
        if (this.selmealtimedin == '0') {
            this.Ldiv11 = "activ1";
            this.Ldiv21 = "activ1";
        }
        if (this.selmealtimelunch == '0') {
            this.Ldiv1 = "rgb(255,255,255";
            this.Ldiv2 = "#ffffff";
            this.Ldiv11 = "activ1";
            this.Ldiv21 = "activ1";
            this.conbut1 = "rgb(216,216,216)";
            this.lunch1 = '';
            this.lunch1 = '';
            this.tl1 = "black";
            this.tl2 = "black";
            this.dtcolor = 'rgb(255,255,255)';
        }
        if (this.selmealtimedin == '0') {
            this.Ddiv1 = "rgb(255,255,255)";
            this.Ddiv2 = "#ffffff";
            this.Ddiv11 = "activ1";
            this.Ddiv21 = "activ1";
            this.conbut1 = "rgb(216,216,216)";
            this.dinner1 = '';
            this.dinner1 = '';
            this.td1 = "black";
            this.td2 = "black";
            this.dtcolor = 'rgb(255,255,255)';
        }
        if (this.selmealtimelunch == "12:00 PM - 1:00 PM") {
            this.Ldiv1 = "rgb( 42, 194, 119)";
            this.Ldiv2 = "#ffffff";
            this.Ldiv11 = "activ2";
            this.Ldiv21 = "activ1";
            this.conbut1 = "rgb(242, 155, 17)";
            this.lunch1 = '';
            this.lunch1 = this.Lunchtime1;
            this.tl1 = "white";
            this.tl2 = "black";
            localStorage.setItem('selectlunchtime', '1');
            this.dtcolor = 'rgb(255,255,255)';
        }
        if (this.selmealtimelunch == "1:00 PM - 2:00 PM") {
            this.Ldiv1 = "#ffffff";
            this.Ldiv2 = "rgb( 42, 194, 119)";
            this.Ldiv11 = "activ1";
            this.Ldiv21 = "activ2";
            this.conbut1 = "rgb(242, 155, 17)";
            this.lunch1 = '';
            this.lunch1 = this.Lunchtime2;
            this.tl2 = "white";
            this.tl1 = "black";
            localStorage.setItem('selectlunchtime', '1');
            this.dtcolor = 'rgb(255,255,255)';
        }
        if (this.selmealtimedin == "7:00 PM - 8:00 PM") {
            this.Ddiv1 = "rgb( 42, 194, 119)";
            this.Ddiv2 = "#ffffff";
            this.Ddiv11 = "activ2";
            this.Ddiv21 = "activ1";
            this.conbut1 = "rgb(242, 155, 17)";
            this.dinner1 = '';
            this.dinner1 = this.Dinnertime1;
            this.td1 = "white";
            this.td2 = "black";
            localStorage.setItem('selectdinnertime', '1');
            this.dtcolor = 'rgb(255,255,255)';
        }
        if (this.selmealtimedin == "8:00 PM - 9:00 PM") {
            this.Ddiv1 = "#ffffff";
            this.Ddiv2 = "rgb( 42, 194, 119)";
            this.Ddiv11 = "activ1";
            this.Ddiv21 = "activ2";
            this.conbut1 = "rgb(242, 155, 17)";
            this.dinner1 = '';
            this.dinner1 = this.Dinnertime2;
            this.td2 = "white";
            this.td1 = "black";
            localStorage.setItem('selectdinnertime', '1');
            this.dtcolor = 'rgb(255,255,255)';
        }
        if (this.selmealtimedin == null || this.selmealtimedin == '') {
            this.Ddiv11 = "activ1";
            this.Ddiv21 = "activ1";
        }
        if (this.selmealtimelunch == null || this.selmealtimelunch == '') {
            this.Ldiv11 = "activ1";
            this.Ldiv21 = "activ1";
        }
        if (localStorage.getItem('renewis') == '1') {
            this.Active = false;
        }
    };
    ChoosedeliverytimePage.prototype.onclicklunch1 = function () {
        this.Ldiv1 = "rgb( 42, 194, 119)";
        this.Ldiv2 = "#ffffff";
        if (this.mealType == 'Lunch') {
            this.conbut1 = "rgb(242, 155, 17)";
            this.dtcolor = 'rgb(255,255,255)';
        }
        this.lunch1 = '';
        this.lunch1 = this.Lunchtime1;
        this.tl1 = "white";
        this.tl2 = "black";
        this.blunch = '0vh';
        if (localStorage.getItem('mealType') == 'Lunch') {
            var x = document.getElementById('Lunchtime1');
            x.style.border = 'none';
            var y = document.getElementById('Lunchtime2');
            y.style.border = '0.1vh solid #000';
        }
        else if (localStorage.getItem('mealType') == 'Both') {
            var x = document.getElementById('Lunchtime1');
            x.style.border = 'none';
            var y = document.getElementById('Lunchtime2');
            y.style.border = '0.1vh solid #000';
        }
    };
    ChoosedeliverytimePage.prototype.onclicklunch2 = function () {
        this.Ldiv1 = "#ffffff";
        this.Ldiv2 = "rgb( 42, 194, 119)";
        if (this.mealType == 'Lunch') {
            this.conbut1 = "rgb(242, 155, 17)";
            this.dtcolor = 'rgb(255,255,255)';
        }
        this.lunch1 = '';
        this.lunch1 = this.Lunchtime2;
        this.tl2 = "white";
        this.tl1 = "black";
        if (localStorage.getItem('mealType') == 'Lunch') {
            var x = document.getElementById('Lunchtime2');
            x.style.border = 'none';
            var y = document.getElementById('Lunchtime1');
            y.style.border = '0.1vh solid #000';
        }
        else if (localStorage.getItem('mealType') == 'Both') {
            var x = document.getElementById('Lunchtime2');
            x.style.border = 'none';
            var y = document.getElementById('Lunchtime1');
            y.style.border = '0.1vh solid #000';
        }
    };
    ChoosedeliverytimePage.prototype.onclickdinner1 = function () {
        this.Ddiv1 = "rgb( 42, 194, 119)";
        this.Ddiv2 = "#ffffff";
        if (this.mealType == 'Dinner' || this.mealType == 'Both') {
            this.dtcolor = 'rgb(255,255,255)';
            this.conbut1 = "rgb(242, 155, 17)";
        }
        this.dinner1 = '';
        this.dinner1 = this.Dinnertime1;
        this.td1 = "white";
        this.td2 = "black";
        if (localStorage.getItem('mealType') == 'Dinner') {
            var z = document.getElementById('Dinnertime1');
            z.style.border = 'none';
            var a = document.getElementById('Dinnertime2');
            a.style.border = '0.1vh solid #000';
        }
        else if (localStorage.getItem('mealType') == 'Both') {
            var z = document.getElementById('Dinnertime1');
            z.style.border = 'none';
            var a = document.getElementById('Dinnertime2');
            a.style.border = '0.1vh solid #000';
        }
    };
    ChoosedeliverytimePage.prototype.onclickdinner2 = function () {
        this.Ddiv1 = "#ffffff";
        this.Ddiv2 = "rgb( 42, 194, 119)";
        if (this.mealType == 'Dinner' || this.mealType == 'Both') {
            this.conbut1 = "rgb(242, 155, 17)";
            this.dtcolor = 'rgb(255,255,255)';
        }
        this.dinner1 = '';
        this.dinner1 = this.Dinnertime2;
        this.td2 = "white";
        this.td1 = "black";
        if (localStorage.getItem('mealType') == 'Dinner') {
            var z = document.getElementById('Dinnertime2');
            z.style.border = 'none';
            var a = document.getElementById('Dinnertime1');
            a.style.border = '0.1vh solid #000';
        }
        else if (localStorage.getItem('mealType') == 'Both') {
            var z = document.getElementById('Dinnertime2');
            z.style.border = 'none';
            var a = document.getElementById('Dinnertime1');
            a.style.border = '0.1vh solid #000';
        }
    };
    ChoosedeliverytimePage.prototype.onclickmealtime = function () {
        this.completedate = localStorage.getItem('endDate');
        if (this.selecteddate == '' || this.selecteddate == null) {
            this.util.alert(this.translate.instant('Please Select Date'), '');
            return;
        }
        else {
            // this.util.showLoader();
            localStorage.setItem('lunchtime', this.lunch1);
            var lunchtime = localStorage.getItem('lunchtime');
            localStorage.setItem('dinnertime', this.dinner1);
            var dinnertime = localStorage.getItem('dinnertime');
            localStorage.setItem('lunch1', this.lunch1);
            localStorage.setItem('dinner1', this.dinner1);
            localStorage.setItem('statdatescreen', 'yes');
            if (this.selecteddateis != null) {
                this.navCtrl.setRoot('CheckoutPage');
                return;
            }
        }
        localStorage.setItem('StartDate', this.selecteddate);
        var StartDate = localStorage.getItem('StartDate');
        var result = {};
        var curr = new Date(this.selecteddate);
        var first = curr.getDate();
        this.days = parseInt(localStorage.getItem('mealdays'));
        this.total = this.days - this.coundays;
        var last = first + parseInt(this.total);
        this.firstDay = new Date(curr.setDate(first)).toISOString(),
            this.lastDay = new Date(curr.setDate(last)).toISOString();
        localStorage.setItem('endDate', this.lastDay);
        if (this.mealType == "Both") {
            localStorage.setItem('selectlunchtime', '1');
            localStorage.setItem('selectdinnertime', '1');
            if (this.lunch1 == null || this.lunch1 == '' || this.lunch1 == 'null' || this.lunch1 == '0') {
                this.util.alert(this.translate.instant('Select Lunch Time'), '');
                return;
            }
            if (this.dinner1 == null || this.dinner1 == '' || this.dinner1 == 'null' || this.dinner1 == '0') {
                this.util.alert(this.translate.instant('Select Dinner Time'), '');
                return;
            }
        }
        else if (this.mealType == "Lunch") {
            localStorage.setItem('selectlunchtime', '1');
            if (this.lunch1 == null || this.lunch1 == '' || this.lunch1 == 'null' || this.lunch1 == '0') {
                this.util.alert(this.translate.instant('Select Lunch Time'), '');
                return;
            }
        }
        else if (this.mealType == "Dinner") {
            localStorage.setItem('selectdinnertime', '1');
            if (this.dinner1 == null || this.dinner1 == '' || this.dinner1 == 'null' || this.dinner1 == '0') {
                this.util.alert(this.translate.instant('Select Dinner Time'), '');
                return;
            }
        }
        localStorage.setItem('lunchtime', this.lunch1);
        var lunchtime = localStorage.getItem('lunchtime');
        localStorage.setItem('dinnertime', this.dinner1);
        var dinnertime = localStorage.getItem('dinnertime');
        localStorage.setItem('lunch1', this.lunch1);
        localStorage.setItem('dinner1', this.dinner1);
        localStorage.setItem('selectDelTime', '1');
        if (localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('fromDeliveryTime') == '1') {
            localStorage.removeItem('isLogin');
            localStorage.removeItem('custstatus');
            localStorage.setItem('skipdisable', '1');
            localStorage.setItem('fromDeliveryTime', '1');
            localStorage.setItem('skiploginskip', '1');
            this.navCtrl.setRoot('LoginPage');
        }
        else if (this.selectedlunchtime != null) {
            if (this.back != null) {
                this.navCtrl.setRoot('WhereToDeliverePage');
                return;
            }
            this.navCtrl.setRoot('CheckoutPage');
            return;
        }
        else if (this.selecteddinnertime != null) {
            if (this.back != null) {
                this.navCtrl.setRoot('WhereToDeliverePage');
                return;
            }
            this.navCtrl.setRoot('CheckoutPage');
            return;
        }
        else if (this.selectedbothtime1 != null || this.selectedbothtime2 != null) {
            if (this.back != null) {
                this.navCtrl.setRoot('WhereToDeliverePage');
                return;
            }
            this.navCtrl.setRoot('CheckoutPage');
            return;
        }
        else {
            this.navCtrl.setRoot('WhereToDeliverePage');
        }
        localStorage.setItem('lunch1', this.lunch1);
        localStorage.setItem('dinner1', this.dinner1);
    };
    ChoosedeliverytimePage.prototype.Back = function () {
        var statdatescreen = localStorage.getItem('selectDelTime');
        localStorage.removeItem('selectDelTime');
        this.navCtrl.setRoot('ChoosePreferencePage', {
            statdatescreen: statdatescreen
        });
    };
    ChoosedeliverytimePage.prototype.selectdate = function () {
        this.coloropacity = 'datetime-text coloropacity';
        this.disableSubmitButton = false;
        if (localStorage.getItem('renewis') == '1') {
            this.days = parseInt(localStorage.getItem('mealdays'));
            this.total = this.days - this.coundays;
            localStorage.setItem('StartDate', this.selecteddate);
            var StartDate = localStorage.getItem('StartDate');
            var curr = new Date(this.selecteddate); // get current date
            var first_1 = curr.getDate(); // First day is the day of the month - the day of the week
            var last_1 = first_1 + parseInt(this.total); // last day is the first day + 6
            this.firstDay = new Date(curr.setDate(first_1)).toISOString(),
                this.lastDay = new Date(curr.setDate(last_1)).toISOString();
            localStorage.setItem('endDate', this.lastDay);
            this.Active = false;
            return;
        }
        else {
            this.Active = true;
        }
        //this.Active = true
        this.dtcolor = '#fff';
        this.opacity = '100%';
        this.days = parseInt(localStorage.getItem('mealdays'));
        this.total = this.days - this.coundays;
        this.conbut = "orange";
        localStorage.setItem('StartDate', this.selecteddate);
        var StartDate = localStorage.getItem('StartDate');
        var result = {};
        var curr = new Date(this.selecteddate); // get current date
        var first = curr.getDate(); // First day is the day of the month - the day of the week
        var last = first + parseInt(this.total); // last day is the first day + 6
        this.firstDay = new Date(curr.setDate(first)).toISOString(),
            this.lastDay = new Date(curr.setDate(last)).toISOString();
        localStorage.setItem('endDate', this.lastDay);
    };
    ChoosedeliverytimePage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('ChoosedeliverytimePage');
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("dateTime"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* DateTime */])
    ], ChoosedeliverytimePage.prototype, "dateTime", void 0);
    ChoosedeliverytimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choosedeliverytime',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/choosedeliverytime/choosedeliverytime.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon" >\n      </button>\n    </ion-buttons>\n    <ion-title text-center>STEP 3</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content start-meal-type">\n  <div class="screen-heading spacetop">\n    <span>Choose Your</span>\n    <h2>Start Date & Delivery Time</h2>\n  </div>\n\n  <div class="content-area delivery-container">\n    <div class="deliverytime">\n      <ion-grid>\n        <ion-row>\n          <ion-col text-center>\n            <h4>START DATE</h4>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class="text-center">\n            <ion-item>\n              <ion-datetime #datetime [style.opacity]="opacity" [class]="coloropacity"\n                style="margin-top: 5.287vh;text-align: center;" displayFormat="DD-MMMM-YYYY" [min]="minDate"\n                [(ngModel)]="selecteddate" (ngModelChange)="selectdate()">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col text-center>\n            <h4 style="margin-bottom: 3.598200899550225vh;">DELIVERY TIME</h4>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 class="text-center" style="padding:0;"> \n            <div *ngIf="ActiveLunch">\n              <label *ngIf="ActiveLunch">\n                <h5>LUNCH</h5>\n              </label>\n              <ion-row>\n                <ion-col col-6>\n                  <div id="Lunchtime1" [class]="Ldiv11" style="border-radius: 1.049vh;text-align: center;font-family: Montserrat-SemiBold;padding: 2.848vh 0; height: 8.095952023988007vh;font-size: 3.467vw; width: 95%;float: left;"\n                    class="onboard-click" block (click)="onclicklunch1()" [style.background]="Ldiv1"\n                    [style.color]="tl1">\n                    {{Lunchtime1}}\n                  </div>\n                </ion-col>\n                <ion-col col-6>\n                  <div id="Lunchtime2" [class]="Ldiv21" style="border-radius: 1.049vh; text-align: center;font-family: Montserrat-SemiBold; padding: 2.848vh 0; height: 8.095952023988007vh;font-size: 3.467vw; width: 95%;float: right;"\n                    class="onboard-click" block (click)="onclicklunch2()" [style.background]="Ldiv2"\n                    [style.color]="tl2">\n                    {{Lunchtime2}}\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n\n            <br>\n\n\n            <div *ngIf="ActiveDinner">\n              <label *ngIf="ActiveDinner">\n                <h5>DINNER</h5>\n              </label>\n              <ion-row>\n                <ion-col col-6>\n                  <div id="Dinnertime1" [class]="Ddiv11"\n                  style="border-radius: 1.049vh;text-align: center;font-family: Montserrat-SemiBold;padding: 2.848vh 0; height: 8.095952023988007vh;font-size: 3.467vw; width:95%;float: left;" class="onboard-click" block\n                    (click)="onclickdinner1()" [style.background]="Ddiv1" [style.color]="td1">\n                    {{Dinnertime1}}\n                  </div>\n                </ion-col>\n                <ion-col col-6>\n                  <div id="Dinnertime2" [class]="Ddiv21"\n                  style="border-radius: 1.049vh; text-align: center;font-family: Montserrat-SemiBold; padding: 2.848vh 0; height: 8.095952023988007vh;font-size: 3.467vw; width:95%;float: right;" class="onboard-click" block\n                    (click)="onclickdinner2()" [style.background]="Ddiv2" [style.color]="td2">\n                    {{Dinnertime2}}\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n        </ion-row>\n\n<!-- \n        <ion-row>\n          <ion-col text-center>\n            <div\n              style="text-align: center; font-size: 1.90vh; margin-top: 2.4vh; line-height: 2.8vh; width: 100%; color: rgb(153, 153, 153);"\n              *ngIf="Active">\n              Subscription or Trial will only start after <br> <b\n                style="color: red; font-family: Montserrat-SemiBold;">48 hours</b> from the payment date.<br> Your\n              Subscription will expire after <br>\n              <b style="color: red; font-family: Montserrat-SemiBold;"> {{days}} days </b> from the start date\n            </div>\n          </ion-col>\n        </ion-row> -->\n\n\n\n       \n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer className="ion-no-border" class="footer-common">\n  <ion-toolbar>\n<ion-row>\n  <ion-col style="width: 100%; border-radius: 0.899vh; padding: 0 5.333vw;">\n    <div class="text-center">\n      <button class="added_font_family" ion-button type="submit" id="input_submit" style="border-radius: 0.5vh;margin:0;"\n        block (click)="onclickmealtime()" [style.color]="dtcolor" [style.background]="conbut1">\n        Continue\n      </button>\n    </div>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/choosedeliverytime/choosedeliverytime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_2__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], ChoosedeliverytimePage);
    return ChoosedeliverytimePage;
}());

//# sourceMappingURL=choosedeliverytime.js.map

/***/ })

});
//# sourceMappingURL=41.js.map