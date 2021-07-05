webpackJsonp([43],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosePreferencePageModule", function() { return ChoosePreferencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_preference__ = __webpack_require__(913);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChoosePreferencePageModule = (function () {
    function ChoosePreferencePageModule() {
    }
    ChoosePreferencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_preference__["a" /* ChoosePreferencePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_preference__["a" /* ChoosePreferencePage */]),
            ],
        })
    ], ChoosePreferencePageModule);
    return ChoosePreferencePageModule;
}());

//# sourceMappingURL=choose-preference.module.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePreferencePage; });
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






var ChoosePreferencePage = (function () {
    function ChoosePreferencePage(nav, navParams, apiService, modalCtrl, platform, app, util, viewCtrl, translate, ionicApp, atrCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.apiService = apiService;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.app = app;
        this.util = util;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.ionicApp = ionicApp;
        this.atrCtrl = atrCtrl;
        this.type = '';
        this.type1 = '';
        this.type2 = '';
        this.type3 = '';
        this.preferenceProducts = '';
        this.preferenceProductsDinner = ' ';
        this.typeboth = '';
        this.lunchmeal_img = "assets/choosePreference/lunch_ic.svg";
        this.dinnermeal_img = "assets/choosePreference/dinner_ic.svg";
        this.extraRoti_Lunch = 0;
        this.extraRoti_Dinner = 0;
        this.buttonColor = '';
        this.buttonColor1 = '';
        this.submitbuttonColor = '';
        this.subcolor = '';
        this.count = 0;
        this.lm_roti = '';
        this.lm_sabji = '';
        this.lm_salad = '';
        this.lm_rice = '';
        this.lm_dal = '';
        this.dm_roti = '';
        this.dm_sabji = '';
        this.dm_salad = '';
        this.dm_rice = '';
        this.dm_dal = '';
        this.lunchmeal = '';
        this.dinnermeal = '';
        this.failedid = 2;
        this.initializeBackButtonCustomHandler();
        if (this.platform.is('android')) {
            this.platformclose = false;
        }
        if (this.platform.is('ios')) {
            this.platformclose = true;
        }
    }
    ;
    ;
    ChoosePreferencePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    ChoosePreferencePage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    ChoosePreferencePage.prototype.ngOnInit = function () {
        if (localStorage.getItem('customise_dm_data') == 'undefined') {
            localStorage.setItem('customise_dm_data', null);
        }
        if (localStorage.getItem('customise_lc_data') == 'undefined') {
            localStorage.setItem('customise_lc_data', null);
        }
        this.customise = false;
        this.submitbuttonColor = 'rgb(242,155,17)';
        this.subcolor = 'rgb(255,255,255)';
        this.typeboth = localStorage.getItem('mealType');
        if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
            this.extraRoti_Lunch = parseFloat(localStorage.getItem('extraRoti_Lunch'));
        }
        else {
            this.extraRoti_Lunch = 0;
            // localStorage.setItem('extraRoti_Lunch','0');
        }
        if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
            this.extraRoti_Dinner = parseFloat(localStorage.getItem('extraRoti_Dinner'));
        }
        else {
            this.extraRoti_Dinner = 0;
            //localStorage.setItem('extraRoti_Dinner','0');
        }
        if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
            if (localStorage.getItem('defaultprice') != '0') {
                if (localStorage.getItem('defaultquantity') != '0' && localStorage.getItem('defaultquantity') != null && localStorage.getItem('defaultquantity') != 'null' && localStorage.getItem('defaultquantity') != 'undefined') {
                    var countday = localStorage.getItem('mealdays');
                    if (localStorage.getItem('lm_rice') != "") {
                        this.extraRoti_Lunch = parseFloat(localStorage.getItem('defaultquantity')) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                    else {
                        this.subtract = parseFloat(localStorage.getItem('defaultquantity')) - 1;
                        this.extraRoti_Lunch = parseFloat(this.subtract) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                }
                localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
            }
        }
        if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
            if (localStorage.getItem('defaultprice') != '0') {
                if (localStorage.getItem('defaultquantity') != '0' && localStorage.getItem('defaultquantity') != 'null' && localStorage.getItem('defaultquantity') != null && localStorage.getItem('defaultquantity') != 'undefined') {
                    var countday = localStorage.getItem('mealdays');
                    if (localStorage.getItem('dm_rice') != "") {
                        this.extraRoti_Dinner = parseFloat(localStorage.getItem('defaultquantity')) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                    else {
                        this.subtract = parseFloat(localStorage.getItem('defaultquantity')) - 1;
                        this.extraRoti_Dinner = parseFloat(this.subtract) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                }
                localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
            }
        }
        if (this.typeboth == "Both") {
            // Default selection if user try to visit using back button or try to edit
            if (localStorage.getItem('customise_lc_data') != null && localStorage.getItem('customise_lc_data') != 'null') {
                this.lunch_products = JSON.parse(localStorage.getItem('lunch_products'));
                console.log(this.lunch_products);
                this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
                this.customise_lc_data = JSON.parse(localStorage.getItem('customise_lc_data'));
                this.lm_roti = localStorage.getItem('lm_roti');
                this.lm_sabji = localStorage.getItem('lm_sabji');
                this.lm_rice = localStorage.getItem('lm_rice');
                this.lm_rice = this.lm_rice;
                this.lm_dal = localStorage.getItem('lm_dal');
                this.lm_salad = localStorage.getItem('lm_salad');
                this.preferenceString('Lunch Meal', 'Lunch');
            }
            else {
                this.onLoadPreferenceData();
                console.log('inn');
                this.onLunchMeal();
            }
            if (localStorage.getItem('customise_dm_data') != null && localStorage.getItem('customise_dm_data') != 'null') {
                this.dinner_products = JSON.parse(localStorage.getItem('dinner_products'));
                console.log(this.dinner_products);
                this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
                this.customise_dm_data = JSON.parse(localStorage.getItem('customise_dm_data'));
                this.dm_rice = localStorage.getItem('dm_rice');
                this.dm_rice = this.dm_rice;
                this.dm_roti = localStorage.getItem('dm_roti');
                this.dm_sabji = localStorage.getItem('dm_sabji');
                this.dm_dal = localStorage.getItem('dm_dal');
                this.dm_salad = localStorage.getItem('dm_salad');
                this.preferenceString('Dinner Meal', 'Dinner');
            }
            else {
                this.onLoadPreferenceData();
                console.log('inn22');
                this.onDinnerMeal();
            }
        }
        else if (this.typeboth == 'Lunch') {
            if (localStorage.getItem('customise_lc_data') != null && localStorage.getItem('customise_lc_data') != 'null') {
                this.customise_lc_data = JSON.parse(localStorage.getItem('customise_lc_data'));
                this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
                this.lunch_products = JSON.parse(localStorage.getItem('lunch_products'));
                this.lm_roti = localStorage.getItem('lm_roti');
                this.lm_roti = this.lm_roti;
                this.lm_sabji = localStorage.getItem('lm_sabji');
                this.lm_rice = localStorage.getItem('lm_rice');
                this.lm_dal = localStorage.getItem('lm_dal');
                this.lm_salad = localStorage.getItem('lm_salad');
                this.preferenceString('Lunch Meal', 'Lunch');
            }
            else {
                this.onLoadPreferenceData();
                this.onLunchMeal();
            }
        }
        else if (this.typeboth == 'Dinner') {
            if (localStorage.getItem('customise_dm_data') != null && localStorage.getItem('customise_dm_data') != 'null') {
                this.dinner_products = JSON.parse(localStorage.getItem('dinner_products'));
                this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
                this.customise_dm_data = JSON.parse(localStorage.getItem('customise_dm_data'));
                this.dm_rice = localStorage.getItem('dm_rice');
                this.dm_rice = this.dm_rice;
                this.dm_roti = localStorage.getItem('dm_roti');
                this.dm_sabji = localStorage.getItem('dm_sabji');
                this.dm_dal = localStorage.getItem('dm_dal');
                this.dm_salad = localStorage.getItem('dm_salad');
                this.preferenceString('Dinner Meal', 'Dinner');
            }
            else {
                this.onLoadPreferenceData();
                this.onDinnerMeal();
            }
        }
    };
    ChoosePreferencePage.prototype.onLunchMeal = function () {
        this.lunchmeal = 'Lunch';
        localStorage.setItem('lunch_meal_menu', '1');
    };
    ChoosePreferencePage.prototype.onDinnerMeal = function () {
        this.dinnermeal = 'Dinner';
        localStorage.setItem('dinner_meal_menu', '2');
    };
    // initial data load for meals
    ChoosePreferencePage.prototype.onLoadPreferenceData = function () {
        var _this = this;
        //API to get Meal details and products
        this.apiService.mealType().then(function (res) {
            if (res.success) {
                _this.failedid = 0;
                console.log(_this.failedid);
                if (_this.typeboth == 'Lunch') {
                    _this.prefernceTypArr = [];
                    _this.prefernceTypArr.push(res.data[0]);
                }
                else if (_this.typeboth == 'Dinner') {
                    _this.prefernceTypArr = [];
                    _this.prefernceTypArr.push(res.data[1]);
                }
                else if (_this.typeboth == 'Both') {
                    _this.prefernceTypArr = res.data;
                }
                console.log(_this.prefernceTypArr);
                console.log(_this.lm_rice);
                // Set local storage for reload of same screen so no need to recall api
                localStorage.setItem('prefernceTypArr', JSON.stringify(_this.prefernceTypArr));
                console.log(_this.prefernceTypArr);
                for (var i = 0; i < _this.prefernceTypArr.length; i++) {
                    if (_this.prefernceTypArr[i].meal == 'Lunch Meal') {
                        if (_this.customise_lc_data == null) {
                            //this.lunch_products = [];    
                            _this.lunch_products = _this.prefernceTypArr[i]['products'];
                            console.log(_this.lunch_products);
                            localStorage.setItem('lunch_products', JSON.stringify(_this.lunch_products));
                            for (var j = 0; j < _this.prefernceTypArr[i]['products'].length; j++) {
                                // Roti or Phulaka
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '1') {
                                    if (j <= 1) {
                                        if (j == 0) {
                                            _this.lm_roti = (_this.prefernceTypArr[i]['products'][j].quantity + ' ' + _this.prefernceTypArr[i]['products'][j].product + '/');
                                            //this.lm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                        }
                                        if (j == 1) {
                                            if (_this.prefernceTypArr[i]['products'][j].quantity != _this.prefernceTypArr[i]['products'][j - 1].quantity) {
                                                _this.lm_roti = _this.lm_roti + (_this.prefernceTypArr[i]['products'][j].quantity + ' ' + _this.prefernceTypArr[i]['products'][j].product);
                                            }
                                            else {
                                                _this.lm_roti = _this.lm_roti + (_this.prefernceTypArr[i]['products'][j].product);
                                            }
                                        }
                                    }
                                }
                                // Sabji
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '5') {
                                    _this.lm_sabji = ' ,Sabji';
                                }
                                // Rice
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '2') {
                                    _this.lm_rice = _this.prefernceTypArr[i]['products'][j - 1].product;
                                    _this.lm_rice = _this.lm_rice + ' Rice';
                                }
                                // Dal
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '7') {
                                    _this.lm_dal = '1';
                                }
                                // // Salad
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '4') {
                                    _this.lm_salad = '1';
                                }
                            }
                            _this.ricecount = 0;
                            for (var asd = 0; asd < _this.lunch_products.length; asd++) {
                                _this.lunch_products[asd]['extra_qty'] = '0';
                                _this.lunch_products[asd]['extra_amount'] = '0';
                                if (_this.lunch_products[asd]['category_id'] == '2') {
                                    if (_this.lunch_products[asd]['selected'] == '1') {
                                        _this.ricecount = 1;
                                        _this.lunch_products[asd]['selected'] = '1';
                                    }
                                    else {
                                        if (_this.ricecount == 0) {
                                            _this.ricecount = 1;
                                            _this.lunch_products[asd]['selected'] = '1';
                                        }
                                        else {
                                            _this.lunch_products[asd]['selected'] = '0';
                                        }
                                    }
                                }
                                else if (_this.lunch_products[asd]['category_id'] == '1') {
                                    if (asd == 0) {
                                        _this.lunch_products[0]['selected'] = '1';
                                        if (localStorage.getItem('renewis') == '1') {
                                            _this.lunch_products[0]['extra_qty'] = localStorage.getItem('lmroticount');
                                        }
                                    }
                                    else {
                                        _this.lunch_products[asd]['selected'] = '0';
                                    }
                                }
                                else {
                                    _this.lunch_products[asd]['selected'] = '0';
                                }
                            }
                            if (_this.lm_dal == '1' && _this.lm_salad == '1') {
                                _this.preferenceProducts = _this.lm_roti + _this.lm_sabji + ', Dal, ' + _this.lm_rice + ' and Salad';
                            }
                            else if (_this.lm_dal == '1' && _this.lm_salad == '') {
                                _this.preferenceProducts = _this.lm_roti + _this.lm_sabji + ', Dal and ' + _this.lm_rice;
                            }
                            //this.preferenceProducts = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
                            console.log(localStorage.getItem('renewrotistringlunch'));
                            if (localStorage.getItem('renewrotistringlunch') == null) {
                                localStorage.setItem('renewrotistringlunch', '');
                            }
                            if (localStorage.getItem('renewrotistringlunch') != '') {
                                _this.lm_roti = localStorage.getItem('renewrotistringlunch');
                                if (_this.lm_roti != null) {
                                    if (_this.lm_rice != '') {
                                        _this.preferenceProducts = _this.lm_roti + _this.lm_sabji + ', Dal, ' + _this.lm_rice + ' and Salad';
                                    }
                                    else {
                                        _this.preferenceProducts = _this.lm_roti + _this.lm_sabji + ', Dal and Salad';
                                    }
                                }
                                else {
                                    _this.lm_roti = _this.lm_roti;
                                }
                            }
                            else {
                                _this.lm_roti = _this.lm_roti;
                            }
                            console.log(_this.lunch_products);
                            localStorage.setItem('lunch_products', JSON.stringify(_this.lunch_products));
                            localStorage.setItem('preferenceProducts_default', _this.preferenceProducts);
                            localStorage.setItem('preferenceProducts', _this.preferenceProducts);
                            localStorage.setItem('lm_roti', _this.lm_roti);
                            localStorage.setItem('lm_sabji', _this.lm_sabji);
                            localStorage.setItem('lm_rice', _this.lm_rice);
                            localStorage.setItem('lm_dal', _this.lm_dal);
                            localStorage.setItem('lm_salad', _this.lm_salad);
                        }
                    }
                    if (_this.prefernceTypArr[i].meal == 'Dinner Meal') {
                        if (_this.customise_dm_data == null) {
                            //this.dinner_products = [];
                            _this.dinner_products = _this.prefernceTypArr[i]['products'];
                            localStorage.setItem('dinner_products', JSON.stringify(_this.dinner_products));
                            for (var j = 0; j < _this.prefernceTypArr[i]['products'].length; j++) {
                                // Roti or Phulaka
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '1') {
                                    if (j <= 1) {
                                        if (j == 0) {
                                            _this.dm_roti = (_this.prefernceTypArr[i]['products'][j].quantity + ' ' + _this.prefernceTypArr[i]['products'][j].product + '/');
                                            // this.dm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                        }
                                        if (j == 1) {
                                            if (_this.prefernceTypArr[i]['products'][j].quantity != _this.prefernceTypArr[i]['products'][j - 1].quantity) {
                                                _this.dm_roti = _this.dm_roti + (_this.prefernceTypArr[i]['products'][j].quantity + ' ' + _this.prefernceTypArr[i]['products'][j].product);
                                            }
                                            else {
                                                _this.dm_roti = _this.dm_roti + (_this.prefernceTypArr[i]['products'][j].product);
                                            }
                                        }
                                    }
                                }
                                // Sabji
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '5') {
                                    _this.dm_sabji = ' ,Sabji';
                                }
                                // Rice
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '2') {
                                    _this.dm_rice = _this.prefernceTypArr[i]['products'][j - 1].product;
                                    _this.dm_rice = _this.dm_rice + ' Rice';
                                }
                                // Dal
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '7') {
                                    _this.dm_dal = '1';
                                }
                                // // Salad
                                if (_this.prefernceTypArr[i]['products'][j].category_id == '4') {
                                    _this.dm_salad = '1';
                                }
                            }
                            _this.ricecount = 0;
                            for (var din_prod = 0; din_prod < _this.dinner_products.length; din_prod++) {
                                _this.dinner_products[din_prod]['extra_qty'] = '0';
                                _this.dinner_products[din_prod]['extra_amount'] = '0';
                                if (_this.dinner_products[din_prod]['category_id'] == '2') {
                                    if (_this.dinner_products[din_prod]['selected'] == '1') {
                                        _this.ricecount = 1;
                                        _this.dinner_products[din_prod]['selected'] = '1';
                                    }
                                    else {
                                        if (_this.ricecount == 0) {
                                            _this.ricecount = 1;
                                            _this.dinner_products[din_prod]['selected'] = '1';
                                        }
                                        else {
                                            _this.dinner_products[din_prod]['selected'] = '0';
                                        }
                                    }
                                }
                                else if (_this.dinner_products[din_prod]['category_id'] == '1') {
                                    if (din_prod == 0) {
                                        _this.dinner_products[0]['selected'] = '1';
                                        if (localStorage.getItem('renewis') == '1') {
                                            _this.dinner_products[0]['extra_qty'] = localStorage.getItem('dmroticount');
                                        }
                                    }
                                    else {
                                        _this.dinner_products[din_prod]['selected'] = '0';
                                    }
                                }
                                else {
                                    _this.dinner_products[din_prod]['selected'] = '0';
                                }
                            }
                            if (_this.dm_dal == '1' && _this.dm_salad == '1') {
                                _this.preferenceProductsDinner = _this.dm_roti + _this.dm_sabji + ', Dal, ' + _this.dm_rice + ' and Salad';
                            }
                            else if (_this.dm_dal == '1' && _this.dm_salad == '') {
                                _this.preferenceProductsDinner = _this.dm_roti + _this.dm_sabji + ', Dal and ' + _this.dm_rice;
                            }
                            //this.preferenceProductsDinner = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
                            if (localStorage.getItem('renewrotistringdinner') == null) {
                                localStorage.setItem('renewrotistringdinner', '');
                            }
                            if (localStorage.getItem('renewrotistringdinner') != '') {
                                _this.dm_roti = localStorage.getItem('renewrotistringdinner');
                                if (_this.dm_roti != null) {
                                    if (_this.dm_rice != '') {
                                        _this.preferenceProductsDinner = _this.dm_roti + _this.dm_sabji + ', Dal, ' + _this.dm_rice + ' and Salad';
                                    }
                                    else {
                                        _this.preferenceProductsDinner = _this.dm_roti + _this.dm_sabji + ', Dal and Salad';
                                    }
                                }
                                else {
                                    _this.dm_roti = _this.dm_roti;
                                }
                            }
                            else {
                                _this.dm_roti = _this.dm_roti;
                            }
                            localStorage.setItem('dinner_products', JSON.stringify(_this.dinner_products));
                            localStorage.setItem('preferenceProductsDinner_default', _this.preferenceProductsDinner);
                            localStorage.setItem('preferenceProductsDinner', _this.preferenceProductsDinner);
                            localStorage.setItem('dm_roti', _this.dm_roti);
                            localStorage.setItem('dm_sabji', _this.dm_sabji);
                            localStorage.setItem('dm_rice', _this.dm_rice);
                            localStorage.setItem('dm_dal', _this.dm_dal);
                            localStorage.setItem('dm_salad', _this.dm_salad);
                        }
                    }
                }
            }
            else {
                _this.conmessage = res.message;
                _this.failedid = 1;
                console.log(_this.failedid);
                _this.showConfirmAlert();
            }
        }).catch(function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.failedid = 1;
            console.log(_this.failedid);
            _this.showConfirmAlert();
        });
    };
    ChoosePreferencePage.prototype.preferenceString = function (type, mealtype) {
        // Lunch Starts Here
        this.failedid = 0;
        if (mealtype == 'Lunch') {
            if (type == 'Lunch Meal') {
                //Lunch Meal string
                if (this.lm_dal == '1' && this.lm_salad == '1') {
                    if (this.lm_rice == '') {
                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal and Salad';
                    }
                    else {
                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal, ' + this.lm_rice + ' and Salad';
                    }
                }
                else if (this.lm_dal == '1' && this.lm_salad == '' && this.lm_rice != '') {
                    this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal and ' + this.lm_rice;
                }
                else if (this.lm_dal == '1' && this.lm_salad == '' && this.lm_rice == '') {
                    this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal';
                }
                localStorage.setItem('lm_roti', this.lm_roti);
                localStorage.setItem('lm_sabji', this.lm_sabji);
                localStorage.setItem('lm_rice', this.lm_rice);
                localStorage.setItem('lm_dal', this.lm_dal);
                localStorage.setItem('lm_salad', this.lm_salad);
                localStorage.setItem('preferenceProducts', this.preferenceProducts);
            }
        }
        // Lunch Ends here
        // Dinner Starts Here
        if (mealtype == 'Dinner') {
            if (type == 'Dinner Meal') {
                //Dinner Meal string
                if (this.dm_dal == '1' && this.dm_salad == '1') {
                    if (this.dm_rice == '') {
                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal and Salad';
                    }
                    else {
                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal, ' + this.dm_rice + ' and Salad';
                    }
                }
                else if (this.dm_dal == '1' && this.dm_salad == '' && this.dm_rice != '') {
                    this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal and ' + this.dm_rice;
                }
                else if (this.dm_dal == '1' && this.dm_salad == '' && this.dm_rice == '') {
                    this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal';
                }
                localStorage.setItem('dm_roti', this.dm_roti);
                localStorage.setItem('dm_sabji', this.dm_sabji);
                localStorage.setItem('dm_rice', this.dm_rice);
                localStorage.setItem('dm_dal', this.dm_dal);
                localStorage.setItem('dm_salad', this.dm_salad);
                localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);
            }
        }
        // Dinner Ends here
    };
    ChoosePreferencePage.prototype.close = function () {
        if (this.customise == true) {
            this.customise = false;
            this.model.dismiss();
        }
    };
    ChoosePreferencePage.prototype.onclickCustomize = function (type) {
        var _this = this;
        var cust_css = 'select-modal-rcm';
        var mealscount = 0;
        if (this.typeboth == "Both") {
            mealscount = parseFloat(localStorage.getItem('mealcount')) / 2;
        }
        else {
            mealscount = parseFloat(localStorage.getItem('mealcount'));
        }
        this.customise = true;
        var customise_data;
        var preference_string;
        this.cust_type = type;
        if (type == 'Lunch Meal') {
            customise_data = this.customise_lc_data;
            console.log(this.customise_lc_data);
        }
        if (type == 'Dinner Meal') {
            customise_data = this.customise_dm_data;
        }
        // code of opening preference-edit page in model
        this.model = this.modalCtrl.create('PreferenceEditPage', {
            type: type,
            myValue: this.prefernceTypArr,
            customise_data: customise_data
        }, { cssClass: cust_css, showBackdrop: true, enableBackdropDismiss: true });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.failedid = 1;
            // console.log(this.failedid);
            console.log(_this.cust_type);
            console.log(_this.customise_lc_data);
            console.log(_this.customise_dm_data);
            if (_this.cust_type == 'Lunch Meal') {
                _this.customise_lc_data = data;
                console.log(_this.lunch_products);
                console.log(_this.dinner_products);
                console.log(_this.customise_lc_data);
                if (_this.lunch_products) {
                    for (var lcp_index = 0; lcp_index < _this.lunch_products.length; lcp_index++) {
                        var selectedonce = 0;
                        if (_this.customise_lc_data) {
                            if (_this.lunch_products[lcp_index]['category'] == 'Bread') {
                                if (_this.customise_lc_data.product1 == _this.lunch_products[lcp_index]['product_id']) {
                                    if (_this.customise_lc_data.ricechek == false) {
                                        _this.lm_rice = '';
                                        _this.lm_roti = (parseFloat(_this.lunch_products[lcp_index]['quantity']) + parseFloat(_this.customise_lc_data.quantity)).toString() + ' ' + _this.lunch_products[lcp_index]['product'];
                                        localStorage.setItem('renewrotistringlunch', _this.lm_roti);
                                        localStorage.setItem('lmroticount', _this.customise_lc_data.quantity);
                                        _this.lunch_products[lcp_index]['extra_amount'] = ((parseFloat(_this.customise_lc_data.quantity) - 1) * parseFloat(_this.lunch_products[lcp_index]['price']));
                                        if (_this.customise_lc_data.quantity != '0') {
                                            _this.extraRoti_Lunch = (((parseFloat(_this.customise_lc_data.quantity) - 1) * parseFloat(_this.lunch_products[lcp_index]['price'])) * mealscount);
                                        }
                                        else {
                                            _this.extraRoti_Lunch = 0;
                                        }
                                        _this.lunch_products[lcp_index]['extra_qty'] = _this.customise_lc_data.quantity;
                                        _this.lunch_products[lcp_index]['selected'] = '1';
                                    }
                                    else {
                                        _this.lm_roti = (parseFloat(_this.lunch_products[lcp_index]['quantity']) + parseFloat(_this.customise_lc_data.quantity)).toString() + ' ' + _this.lunch_products[lcp_index]['product'];
                                        localStorage.setItem('renewrotistringlunch', _this.lm_roti);
                                        localStorage.setItem('lmroticount', _this.customise_lc_data.quantity);
                                        _this.lunch_products[lcp_index]['extra_amount'] = (parseFloat(data.quantity) * parseFloat(_this.lunch_products[lcp_index]['price']));
                                        _this.extraRoti_Lunch = ((parseFloat(_this.customise_lc_data.quantity) * parseFloat(_this.lunch_products[lcp_index]['price'])) * mealscount);
                                        _this.lunch_products[lcp_index]['extra_qty'] = data.quantity;
                                        _this.lunch_products[lcp_index]['selected'] = '1';
                                    }
                                }
                                else {
                                    _this.lunch_products[lcp_index]['selected'] = '0';
                                    _this.lunch_products[lcp_index]['extra_qty'] = '0';
                                    _this.lunch_products[lcp_index]['extra_amount'] = '0';
                                }
                            }
                            else if (data.product2 == _this.lunch_products[lcp_index]['product_id']) {
                                if (_this.customise_lc_data.ricechek == true) {
                                    selectedonce = 1;
                                    _this.lm_rice = _this.lunch_products[lcp_index]['product'];
                                    _this.lm_rice = _this.lm_rice + ' Rice';
                                    _this.lunch_products[lcp_index]['selected'] = '1';
                                }
                            }
                            else {
                                if (selectedonce == 0) {
                                    _this.lunch_products[lcp_index]['selected'] = '0';
                                    _this.lunch_products[lcp_index]['extra_qty'] = '0';
                                    _this.lunch_products[lcp_index]['extra_amount'] = '0';
                                }
                            }
                        }
                    }
                }
                _this.preferenceString(_this.cust_type, 'Lunch');
                localStorage.setItem('customise_lc_data', JSON.stringify(_this.customise_lc_data));
                // alert(this.lunch_products);
                localStorage.setItem('lunch_products', JSON.stringify(_this.lunch_products));
            }
            if (_this.cust_type == 'Dinner Meal') {
                _this.customise_dm_data = data;
                if (_this.dinner_products) {
                    for (var dmp_index = 0; dmp_index < _this.dinner_products.length; dmp_index++) {
                        var selectedonce = 0;
                        if (_this.customise_dm_data) {
                            if (_this.dinner_products[dmp_index]['category'] == 'Bread') {
                                if (_this.customise_dm_data.product1 == _this.dinner_products[dmp_index]['product_id']) {
                                    if (_this.customise_dm_data.ricechek == false) {
                                        _this.dm_rice = '';
                                        _this.dm_roti = (parseFloat(_this.dinner_products[dmp_index]['quantity']) + parseFloat(_this.customise_dm_data.quantity)).toString() + ' ' + _this.dinner_products[dmp_index]['product'];
                                        localStorage.setItem('renewrotistringdinner', _this.dm_roti);
                                        localStorage.setItem('dmroticount', _this.customise_dm_data.quantity);
                                        _this.dinner_products[dmp_index]['extra_amount'] = ((parseFloat(data.quantity) - 1) * parseFloat(_this.dinner_products[dmp_index]['price']));
                                        if (_this.customise_dm_data.quantity != '0') {
                                            _this.extraRoti_Dinner = (((parseFloat(_this.customise_dm_data.quantity) - 1) * parseFloat(_this.dinner_products[dmp_index]['price'])) * mealscount);
                                        }
                                        else {
                                            _this.extraRoti_Dinner = 0;
                                        }
                                        _this.dinner_products[dmp_index]['extra_qty'] = data.quantity;
                                        _this.dinner_products[dmp_index]['selected'] = '1';
                                    }
                                    else {
                                        _this.dm_roti = (parseFloat(_this.dinner_products[dmp_index]['quantity']) + parseFloat(_this.customise_dm_data.quantity)).toString() + ' ' + _this.dinner_products[dmp_index]['product'];
                                        localStorage.setItem('renewrotistringdinner', _this.dm_roti);
                                        localStorage.setItem('dmroticount', _this.customise_dm_data.quantity);
                                        _this.dinner_products[dmp_index]['extra_amount'] = (parseFloat(data.quantity) * parseFloat(_this.dinner_products[dmp_index]['price']));
                                        _this.extraRoti_Dinner = ((parseFloat(_this.customise_dm_data.quantity) * parseFloat(_this.dinner_products[dmp_index]['price'])) * mealscount);
                                        _this.dinner_products[dmp_index]['extra_qty'] = data.quantity;
                                        _this.dinner_products[dmp_index]['selected'] = '1';
                                    }
                                }
                                else {
                                    _this.dinner_products[dmp_index]['extra_qty'] = '0';
                                    _this.dinner_products[dmp_index]['extra_amount'] = '0';
                                    _this.dinner_products[dmp_index]['selected'] = '0';
                                }
                            }
                            else if (data.product2 == _this.dinner_products[dmp_index]['product_id']) {
                                if (_this.customise_dm_data.ricechek == true) {
                                    selectedonce = 1;
                                    _this.dm_rice = _this.dinner_products[dmp_index]['product'];
                                    _this.dm_rice = _this.dm_rice + ' Rice';
                                    _this.dinner_products[dmp_index]['selected'] = '1';
                                }
                            }
                            else {
                                if (selectedonce == 0) {
                                    _this.dinner_products[dmp_index]['extra_qty'] = '0';
                                    _this.dinner_products[dmp_index]['extra_amount'] = '0';
                                    _this.dinner_products[dmp_index]['selected'] = '0';
                                }
                            }
                        }
                    }
                }
                _this.preferenceString(_this.cust_type, 'Dinner');
                localStorage.setItem('customise_dm_data', JSON.stringify(_this.customise_dm_data));
                // alert(this.dinner_products);
                localStorage.setItem('dinner_products', JSON.stringify(_this.dinner_products));
            }
            _this.customise = false;
        });
    };
    ChoosePreferencePage.prototype.onSubmit = function () {
        console.log(this.failedid);
        if (this.failedid == 1 || this.failedid == 2) {
            console.log(this.failedid);
            this.nav.setRoot('ChoosePreferencePage');
        }
        else {
            console.log(this.lunch_products);
            console.log(this.dinner_products);
            if (this.lunch_products) {
                for (var i = 0; i < this.prefernceTypArr.length; i++) {
                    if (this.prefernceTypArr[i].meal == 'Lunch Meal') {
                        if (this.customise_lc_data == null) {
                            //this.lunch_products = [];    
                            this.lunch_products = this.prefernceTypArr[i]['products'];
                            for (var j = 0; j < this.prefernceTypArr[i]['products'].length; j++) {
                                // Roti or Phulaka
                                if (this.prefernceTypArr[i]['products'][j].category_id == '1') {
                                    if (j <= 1) {
                                        if (j == 0) {
                                            this.lm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                            //this.lm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                        }
                                        // if (j == 1) {
                                        //if (this.prefernceTypArr[i]['products'][j].quantity != this.prefernceTypArr[i]['products'][j - 1].quantity) {
                                        //  this.lm_roti = this.lm_roti + (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                        // } else {
                                        //  this.lm_roti = this.lm_roti + (this.prefernceTypArr[i]['products'][j].product);
                                        //}
                                        // }
                                    }
                                }
                                // Sabji
                                if (this.prefernceTypArr[i]['products'][j].category_id == '5') {
                                    this.lm_sabji = ' ,Sabji';
                                }
                                // Rice
                                if (this.prefernceTypArr[i]['products'][j].category_id == '2') {
                                    this.lm_rice = this.prefernceTypArr[i]['products'][j - 1].product;
                                    this.lm_rice = this.lm_rice + ' Rice';
                                }
                                // Dal
                                if (this.prefernceTypArr[i]['products'][j].category_id == '7') {
                                    this.lm_dal = '1';
                                }
                                // // Salad
                                if (this.prefernceTypArr[i]['products'][j].category_id == '4') {
                                    this.lm_salad = '1';
                                }
                            }
                            for (var asd = 0; asd < this.lunch_products.length; asd++) {
                                this.lunch_products[asd]['extra_qty'] = '0';
                                this.lunch_products[asd]['extra_amount'] = '0';
                                if (this.lunch_products[asd]['category_id'] == '2') {
                                    if (this.lunch_products[asd]['selected'] == '1') {
                                        this.lunch_products[asd]['selected'] = '1';
                                    }
                                    else {
                                        this.lunch_products[asd]['selected'] = '0';
                                    }
                                }
                                else if (this.lunch_products[asd]['category_id'] == '1') {
                                    if (asd == 0) {
                                        this.lunch_products[0]['selected'] = '1';
                                        if (localStorage.getItem('renewis') == '1') {
                                            this.lunch_products[0]['extra_qty'] = localStorage.getItem('lmroticount');
                                        }
                                    }
                                    else {
                                        this.lunch_products[asd]['selected'] = '0';
                                    }
                                }
                                else {
                                    this.lunch_products[asd]['selected'] = '0';
                                }
                            }
                            if (this.lm_dal == '1' && this.lm_salad == '1') {
                                this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal, ' + this.lm_rice + ' and Salad';
                            }
                            else if (this.lm_dal == '1' && this.lm_salad == '') {
                                this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal and ' + this.lm_rice;
                            }
                            //this.preferenceProducts = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
                            if (localStorage.getItem('renewrotistringlunch') != '') {
                                this.lm_roti = localStorage.getItem('renewrotistringlunch');
                                if (this.lm_roti != null) {
                                    if (this.lm_rice != '') {
                                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal, ' + this.lm_rice + ' and Salad';
                                    }
                                    else {
                                        this.preferenceProducts = this.lm_roti + this.lm_sabji + ', Dal and Salad';
                                    }
                                }
                                else {
                                    this.lm_roti = this.lm_roti;
                                }
                            }
                            else {
                                this.lm_roti = this.lm_roti;
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
                localStorage.setItem('lunch_products', JSON.stringify(this.lunch_products));
            }
            if (this.customise_lc_data) {
                localStorage.setItem('customise_lc_data', JSON.stringify(this.customise_lc_data));
            }
            if (this.dinner_products) {
                for (var i = 0; i < this.prefernceTypArr.length; i++) {
                    if (this.prefernceTypArr[i].meal == 'Dinner Meal') {
                        if (this.customise_dm_data == null) {
                            //this.dinner_products = [];
                            this.dinner_products = this.prefernceTypArr[i]['products'];
                            for (var j = 0; j < this.prefernceTypArr[i]['products'].length; j++) {
                                // Roti or Phulaka
                                if (this.prefernceTypArr[i]['products'][j].category_id == '1') {
                                    if (j <= 1) {
                                        if (j == 0) {
                                            this.dm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                            // this.dm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                        }
                                        //if (j == 1) {
                                        // if (this.prefernceTypArr[i]['products'][j].quantity != this.prefernceTypArr[i]['products'][j - 1].quantity) {
                                        // this.dm_roti = this.dm_roti + (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                                        //} else {
                                        //  this.dm_roti = this.dm_roti + (this.prefernceTypArr[i]['products'][j].product);
                                        //}
                                        //}
                                    }
                                }
                                // Sabji
                                if (this.prefernceTypArr[i]['products'][j].category_id == '5') {
                                    this.dm_sabji = ' ,Sabji ';
                                }
                                // Rice
                                if (this.prefernceTypArr[i]['products'][j].category_id == '2') {
                                    this.dm_rice = this.prefernceTypArr[i]['products'][j - 1].product;
                                    this.dm_rice = this.dm_rice + ' Rice';
                                }
                                // Dal
                                if (this.prefernceTypArr[i]['products'][j].category_id == '7') {
                                    this.dm_dal = '1';
                                }
                                // // Salad
                                if (this.prefernceTypArr[i]['products'][j].category_id == '4') {
                                    this.dm_salad = '1';
                                }
                            }
                            for (var din_prod = 0; din_prod < this.dinner_products.length; din_prod++) {
                                this.dinner_products[din_prod]['extra_qty'] = '0';
                                this.dinner_products[din_prod]['extra_amount'] = '0';
                                if (this.dinner_products[din_prod]['category_id'] == '2') {
                                    if (this.dinner_products[din_prod]['selected'] == '1') {
                                        this.dinner_products[din_prod]['selected'] = '1';
                                    }
                                    else {
                                        this.dinner_products[din_prod]['selected'] = '0';
                                    }
                                }
                                else if (this.dinner_products[din_prod]['category_id'] == '1') {
                                    if (din_prod == 0) {
                                        this.dinner_products[0]['selected'] = '1';
                                        if (localStorage.getItem('renewis') == '1') {
                                            this.dinner_products[0]['extra_qty'] = localStorage.getItem('dmroticount');
                                        }
                                    }
                                    else {
                                        this.dinner_products[din_prod]['selected'] = '0';
                                    }
                                }
                                else {
                                    this.dinner_products[din_prod]['selected'] = '0';
                                }
                            }
                            if (this.dm_dal == '1' && this.dm_salad == '1') {
                                this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal, ' + this.dm_rice + ' and Salad';
                            }
                            else if (this.dm_dal == '1' && this.dm_salad == '') {
                                this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal and ' + this.dm_rice;
                            }
                            //this.preferenceProductsDinner = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
                            if (localStorage.getItem('renewrotistringdinner') != '') {
                                this.dm_roti = localStorage.getItem('renewrotistringdinner');
                                if (this.dm_roti != null) {
                                    if (this.dm_rice != '') {
                                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal, ' + this.dm_rice + ' and Salad';
                                    }
                                    else {
                                        this.preferenceProductsDinner = this.dm_roti + this.dm_sabji + ', Dal and Salad';
                                    }
                                }
                                else {
                                    this.dm_roti = this.dm_roti;
                                }
                            }
                            else {
                                this.dm_roti = this.dm_roti;
                            }
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
                localStorage.setItem('dinner_products', JSON.stringify(this.dinner_products));
            }
            if (this.customise_dm_data) {
                localStorage.setItem('customise_dm_data', JSON.stringify(this.customise_dm_data));
            }
            localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
            localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
            localStorage.setItem('selectprefrence', '1');
            if (localStorage.getItem('renewis') == '1') {
                // if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
                //   this.extraRoti_Lunch = parseFloat(localStorage.getItem('extraRoti_Lunch'));
                // } else {
                //   this.extraRoti_Lunch = 0;
                //  // localStorage.setItem('extraRoti_Lunch','0');
                // }
                // if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
                //   this.extraRoti_Dinner = parseFloat(localStorage.getItem('extraRoti_Dinner'));
                // } else {
                //   this.extraRoti_Dinner = 0;
                //   //localStorage.setItem('extraRoti_Dinner','0');
                // }
                console.log(localStorage.getItem('extraRoti_Lunch'));
                // if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {          
                if (localStorage.getItem('lmroticount') != '0' && localStorage.getItem('lmroticount') != null && localStorage.getItem('lmroticount') != 'null' && localStorage.getItem('lmroticount') != 'undefined') {
                    var countday = localStorage.getItem('mealdays');
                    if (localStorage.getItem('lm_rice') != "") {
                        this.extraRoti_Lunch = parseFloat(localStorage.getItem('lmroticount')) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                    else {
                        this.subtract = parseFloat(localStorage.getItem('lmroticount')) - 1;
                        this.extraRoti_Lunch = parseFloat(this.subtract) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                }
                localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
                // }
                // if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
                //   if(localStorage.getItem('defaultprice')!='0')
                //   {
                if (localStorage.getItem('dmroticount') != '0' && localStorage.getItem('dmroticount') != 'null' && localStorage.getItem('dmroticount') != null && localStorage.getItem('dmroticount') != 'undefined') {
                    var countday = localStorage.getItem('mealdays');
                    if (localStorage.getItem('dm_rice') != "") {
                        this.extraRoti_Dinner = parseFloat(localStorage.getItem('dmroticount')) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                    else {
                        this.subtract = parseFloat(localStorage.getItem('dmroticount')) - 1;
                        this.extraRoti_Dinner = parseFloat(this.subtract) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
                    }
                }
                localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
                //   }
                // }
            }
            this.nav.setRoot('ChoosedeliverytimePage');
        }
    };
    ChoosePreferencePage.prototype.Back = function () {
        if (this.customise == true) {
            this.model.dismiss();
            // console.log('innnn');
            // this.nav.setRoot('ChoosePreferencePage');
        }
        else {
            var mealId = localStorage.getItem('mealId');
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
            this.nav.setRoot('MealtypePage', {
                mealId: mealId
            });
        }
    };
    ChoosePreferencePage.prototype.showConfirmAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
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
                                        // this.nav.setRoot('ChoosePreferencePage');
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
    ChoosePreferencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choose-preference',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/choose-preference/choose-preference.html"*/'<ion-header no-border class="dit-type-header" *ngIf="platformclose==true">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()" [disabled]="customise">\n        <img src="assets/imgicon/Group-white.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center (click)="close()" >STEP 2</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-header no-border class="dit-type-header" *ngIf="platformclose==false">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()" [disabled]="customise">\n        <img src="assets/imgicon/Group-white.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>STEP 2</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="main-content main-content-scroll">\n  <div class="screen-heading" (click)="close()" *ngIf="platformclose==true">\n    <span>Choose Your</span>\n    <h2>Preference</h2>\n  </div>\n  <div class="screen-heading" *ngIf="platformclose==false">\n    <span>Choose Your</span>\n    <h2>Preference</h2>\n  </div>\n  <div class="content-area">\n    <div class="choosepref">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 class="text-center" *ngFor="let preferences of prefernceTypArr; let i=index">\n            <div id={{preferences.meal}} class="meal-box">\n              <img id="img_rice_meal" *ngIf="preferences.meal==\'Lunch Meal\'" class="img2" src="{{lunchmeal_img}}">\n              <img id="img_roti_meal" *ngIf="preferences.meal==\'Dinner Meal\'" class="img3" src="{{dinnermeal_img}}">\n              <h4 *ngIf="preferences.meal==\'Lunch Meal\'">Lunch</h4>\n              <h4 *ngIf="preferences.meal==\'Dinner Meal\'">Dinner</h4>\n              <p *ngIf="preferences.meal==\'Lunch Meal\'" >{{preferenceProducts}}</p>\n              <p *ngIf="preferences.meal==\'Dinner Meal\'">{{preferenceProductsDinner}}</p>\n              <div>\n                <div class="customization" (click)="onclickCustomize(preferences.meal)"\n                  [style.background]="buttonColor">\n                  <div class="edit-customization">\n                    <img class="pencil" src="assets/choosePreference/edit-2_1_.svg">\n                    <p class="custo">Customize</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n       \n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n<ion-footer className="ion-no-border" class="footer-common">\n  <ion-toolbar>\n    <ion-row style="padding: 0; border-radius: 0.899vh; margin: 0 5.333vw;width: calc(100% - 5.997vh);">\n      <ion-col style="padding: 0;">\n        <div class="text-center">\n          <button class="button" style="font-size: 2.398vh;margin: 0;height: 8.245vh;" ion-button type="submit" id="input_submit"\n            [style.color]="subcolor" [style.background]="submitbuttonColor" block (click)="onSubmit()">\n            Continue\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n    </ion-footer>\n\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/choose-preference/choose-preference.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChoosePreferencePage);
    return ChoosePreferencePage;
}());

//# sourceMappingURL=choose-preference.js.map

/***/ })

});
//# sourceMappingURL=43.js.map