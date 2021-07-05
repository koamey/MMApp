webpackJsonp([8],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhereToDeliverePageModule", function() { return WhereToDeliverePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__where_to_delivere__ = __webpack_require__(955);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WhereToDeliverePageModule = (function () {
    function WhereToDeliverePageModule() {
    }
    WhereToDeliverePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__where_to_delivere__["a" /* WhereToDeliverePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__where_to_delivere__["a" /* WhereToDeliverePage */]),
            ],
        })
    ], WhereToDeliverePageModule);
    return WhereToDeliverePageModule;
}());

//# sourceMappingURL=where-to-delivere.module.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhereToDeliverePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(23);
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
 * Generated class for the WhereToDeliverePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhereToDeliverePage = (function () {
    function WhereToDeliverePage(apiService, nav, builder, util, push, storage, translate, navParams, loadingCtrl, atrCtrl, platform, modalCtrl, viewCtrl, ionicApp, keyboard) {
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.translate = translate;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.atrCtrl = atrCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.ionicApp = ionicApp;
        this.keyboard = keyboard;
        this.Hcity = "Pune";
        this.HState = "Maharashtra";
        this.WCity = "Pune";
        this.WState = "Maharashtra";
        this.areaArray = [];
        this.areaArrayfilter = [];
        this.areaArrayfilters = [];
        this.areaArrayfilters_sec = [];
        this.areaArrayfilters2 = [];
        this.areaArray1 = [];
        this.nearbyItems = new Array();
        this.active = true;
        var fields = {
            flat_no1: [localStorage.getItem('Hflatno'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address11: [localStorage.getItem('Haddline1'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address21: [localStorage.getItem('Haddline2'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            city1: [''],
            area_id1: [localStorage.getItem('areacode')],
            area_id12: [localStorage.getItem('areacode'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            state1: [''],
            pinCode: [''],
            flate_no2: [localStorage.getItem('Wflatno'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address12: [localStorage.getItem('Waddline1'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address22: [localStorage.getItem('Waddline2'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            city2: [''],
            area_id2: [localStorage.getItem('areaid1')],
            area_id22: [localStorage.getItem('areaid1'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            state2: [''],
            pinCode2: [''],
            homeid: [parseInt(localStorage.getItem('homeid'))],
            workid: [parseInt(localStorage.getItem('workid'))]
        };
        this.deliveryAddressForm = this.builder.group(fields);
        this.selectedlunch1 = navParams.get('selectforhomelunchis');
        this.selectedlunch2 = navParams.get('selectorworklunchis');
        this.selecteddin1 = navParams.get('selectforhomedinis');
        this.selecteddin2 = navParams.get('selectorworkdinis');
        this.initializeBackButtonCustomHandler();
    }
    WhereToDeliverePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    WhereToDeliverePage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    WhereToDeliverePage.prototype.ionViewLoaded = function () {
    };
    WhereToDeliverePage.prototype.ionViewWillEnter = function () {
    };
    WhereToDeliverePage.prototype.ngOnInit = function () {
        this.customise = '1';
        localStorage.setItem('hardwareback', this.customise);
        this.Actives = false;
        this.Actives_one = false;
        this.Actives_second = false;
        this.Actives_second1 = false;
        this.token = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.mealId = localStorage.getItem('mealId');
        this.areaname = localStorage.getItem('areaname');
        if (localStorage.getItem('areaname') != null) {
            if (localStorage.getItem('areaname') != 'null') {
                this.areaname_new = localStorage.getItem('areaname');
            }
            else {
                this.areaname_new = '';
            }
        }
        else {
            if (localStorage.getItem('areaname') != 'null') {
                this.areaname_new = localStorage.getItem('areaname');
            }
            else {
                this.areaname_new = '';
            }
        }
        this.pincode = localStorage.getItem('pincode');
        if (localStorage.getItem('pincode') != null) {
            this.abcde_new = localStorage.getItem('pincode');
            if (this.abcde_new.length == '1' || this.abcde_new.length == '2' || this.abcde_new.length == '3' || this.abcde_new.length == '4' || this.abcde_new.length == '5' || this.abcde_new.length == '0') {
                this.abcde_new = '';
            }
        }
        else {
            this.abcde_new = '';
        }
        this.localhostset = localStorage.getItem('thisdataid');
        localStorage.setItem('getsecondpincodeid', this.localhostset);
        this.areaid = localStorage.getItem('areacode');
        if (localStorage.getItem('Wareaid') != null) {
            this.areaid1 = localStorage.getItem('Wareaid');
        }
        if (localStorage.getItem('getfirstpincodearea') != null) {
            this.areaid2 = localStorage.getItem('getfirstpincodearea');
        }
        else {
            this.areaid2 = '';
        }
        if (localStorage.getItem('getsecondareapindata') != null) {
            this.areaid1 = localStorage.getItem('getsecondareapindata');
        }
        else {
            this.areaid1 = '';
        }
        this.loadzipcode();
        this.loadzipcode1();
        this.homelunchadd = localStorage.getItem('selhomelun');
        this.worklunchadd = localStorage.getItem('selworklun');
        this.workdinneradd = localStorage.getItem('selworkdin');
        this.homedinneradd = localStorage.getItem('selhomedin');
        if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
            return;
        }
    };
    WhereToDeliverePage.prototype.ionViewDidLoad = function () {
    };
    WhereToDeliverePage.prototype.onSubmit = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.deliveryAddressForm.value));
        if ((data.flat_no1 == null || data.flat_no1 == '') && (data.address11 == null || data.address11 == '') && (data.address21 == null || data.address21 == '') && (data.area_id1 == null || data.area_id1 == '') && (data.flate_no2 == null || data.flate_no2 == '') && (data.address12 == null || data.address12 == '') && (data.address22 == null || data.address22 == '') && (data.area_id2 == null || data.area_id2 == '')) {
            this.util.hideLoader();
            setTimeout(function () {
                _this.flatno1input.setFocus();
            }, 150);
            this.util.alert(this.translate.instant('Fill one or both address'), '');
            return;
        }
        if ((data.flat_no1 == null || data.flat_no1 == '') && (data.address11 == null || data.address11 == '') && (data.address21 == null || data.address21 == '') && (data.area_id1 == null || data.area_id1 == '')) {
            if ((data.flate_no2 == null || data.flate_no2 == '') && (data.address12 == null || data.address12 == '') && (data.address22 == null || data.address22 == '') && (data.area_id2 == null || data.area_id2 == '')) {
            }
            else {
                if ((data.flate_no2 == null || data.flate_no2 == '')) {
                    this.util.hideLoader();
                    setTimeout(function () {
                        _this.flatno1input.setFocus();
                    }, 150);
                    this.util.alert(this.translate.instant('Please Enter Work Address'), '');
                    return;
                }
                if ((data.address12 == null || data.address12 == '')) {
                    this.util.hideLoader();
                    setTimeout(function () {
                        _this.address11input.setFocus();
                    }, 150);
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((data.address22 == null || data.address22 == '')) {
                    this.util.hideLoader();
                    setTimeout(function () {
                        _this.address21input.setFocus();
                    }, 150);
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((data.area_id2 == null || data.area_id2 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Pincode'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((data.area_id22 == null || data.area_id22 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Area'), '');
                    this.util.hideLoader();
                    return;
                }
            }
        }
        else {
            if ((data.flat_no1 == null || data.flat_no1 == '')) {
                this.util.hideLoader();
                setTimeout(function () {
                    _this.flatno1input.setFocus();
                }, 150);
                this.util.alert(this.translate.instant('Please Enter Home Address'), '');
                return;
            }
            if ((data.address11 == null || data.address11 == '')) {
                this.util.hideLoader();
                setTimeout(function () {
                    _this.address11input.setFocus();
                }, 150);
                this.util.alert(this.translate.instant('Please Enter Home Address Line 1'), '');
                this.util.hideLoader();
                return;
            }
            if ((data.address21 == null || data.address21 == '')) {
                this.util.hideLoader();
                setTimeout(function () {
                    _this.address21input.setFocus();
                }, 150);
                this.util.alert(this.translate.instant('Please Enter Home Address Line 2'), '');
                this.util.hideLoader();
                return;
            }
            console.log(+'9999' + data.area_id1 + '9999');
            if ((data.area_id1 == null || data.area_id1 == '')) {
                this.util.hideLoader();
                this.util.alert(this.translate.instant('Please Enter Pincode'), '');
                this.util.hideLoader();
                return;
            }
            if ((data.area_id12 == null || data.area_id12 == '')) {
                this.util.hideLoader();
                this.util.alert(this.translate.instant('Please Enter Area'), '');
                this.util.hideLoader();
                return;
            }
            if ((data.flate_no2 == null || data.flate_no2 == '') && (data.address12 == null || data.address12 == '') && (data.address22 == null || data.address22 == '') && (data.area_id2 == null || data.area_id2 == '')) {
            }
            else {
                if ((data.flate_no2 == null || data.flate_no2 == '')) {
                    this.util.hideLoader();
                    setTimeout(function () {
                        _this.flatno1input.setFocus();
                    }, 150);
                    this.util.alert(this.translate.instant('Please Enter Work Address'), '');
                    return;
                }
                if ((data.address12 == null || data.address12 == '')) {
                    this.util.hideLoader();
                    setTimeout(function () {
                        _this.address11input.setFocus();
                    }, 150);
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((data.address22 == null || data.address22 == '')) {
                    this.util.hideLoader();
                    setTimeout(function () {
                        _this.address21input.setFocus();
                    }, 150);
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((data.area_id2 == null || data.area_id2 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Pincode'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((data.area_id22 == null || data.area_id22 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Area'), '');
                    this.util.hideLoader();
                    return;
                }
            }
        }
        if (data.address12 == null) {
            this.address_2 = '';
        }
        else {
            this.address_2 = data.address12;
        }
        if (data.address11 == null) {
            this.address_1 = '';
        }
        else {
            this.address_1 = data.address11;
        }
        if (data.address22 == null) {
            this.address_22 = '';
        }
        else {
            this.address_22 = data.address22;
        }
        if (data.address21 == null) {
            this.address_12 = '';
        }
        else {
            this.address_12 = data.address21;
        }
        if (data.flate_no2 == null) {
            this.flat_2 = '';
        }
        else {
            this.flat_2 = data.flate_no2;
        }
        if (data.flat_no1 == null) {
            this.flat_1 = '';
        }
        else {
            this.flat_1 = data.flat_no1;
        }
        this.pincode_1 = localStorage.getItem('getsecondpincodeid');
        this.pincode_2 = localStorage.getItem('getfirstpincodeid');
        if (localStorage.getItem('getsecondareapindata') == null) {
            localStorage.setItem('getsecondareapindata', '');
        }
        else {
            localStorage.setItem('getsecondareapindata', localStorage.getItem('getsecondareapindata'));
        }
        if (localStorage.getItem('getfirstpincodearea') == null) {
            localStorage.setItem('getfirstpincodearea', '');
        }
        else {
            localStorage.setItem('getfirstpincodearea', localStorage.getItem('getfirstpincodearea'));
        }
        localStorage.setItem('workpincode', localStorage.getItem('getsecondareapindata'));
        console.log(data.homeid);
        console.log(data.workid);
        if (localStorage.getItem('renewis') == '1') {
            this.renew = 1;
            this.ispayement = 1;
        }
        else {
            this.renew = 0;
            this.ispayement = 0;
        }
        var data1 = {
            token: this.token,
            customer_id: this.customer_id,
            meal_type: this.mealId,
            address11: this.address_1,
            address21: this.address_12,
            area_id1: this.pincode_1,
            city1: data.city1,
            state1: data.state1,
            address_type1: 'home',
            flat_no1: this.flat_1,
            address12: this.address_2,
            address22: this.address_22,
            area_id2: this.pincode_2,
            city2: data.city2,
            state2: data.state2,
            address_type2: 'work',
            flat_no2: this.flat_2,
            homeid: data.homeid,
            workid: data.workid,
            renew: this.renew,
            ispayement: this.ispayement
        };
        this.apiService.addAddress(data1).then(function (res) {
            _this.util.showLoader();
            if (res.success) {
                localStorage.setItem('Hflatno', data1.flat_no1);
                localStorage.setItem('Haddline1', data1.address11);
                localStorage.setItem('Haddline2', data1.address21);
                localStorage.setItem('Hcity_id1', data1.city1);
                localStorage.setItem('Hstate1', data1.state1);
                localStorage.setItem('Haddress_type1', data1.address_type1);
                localStorage.setItem('Hareaid', data.area_id1);
                localStorage.setItem('Wflatno', data1.flat_no2);
                localStorage.setItem('Waddline1', data1.address12);
                localStorage.setItem('Waddline2', data1.address22);
                localStorage.setItem('Wcity_id1', data1.city2);
                localStorage.setItem('Wstate1', data1.state2);
                localStorage.setItem('Waddress_type1', data1.address_type2);
                localStorage.setItem('Wareaid', data.area_id2);
                _this.homeid = parseInt(res.data[0]['homeid']);
                _this.workid = parseInt(res.data[0]['workid']);
                localStorage.setItem('respcgst', res.data[0]['CGST']);
                localStorage.setItem('respigst', res.data[0]['IGST']);
                localStorage.setItem('homeid', _this.homeid);
                localStorage.setItem('workid', _this.workid);
                _this.util.hideLoader();
                var selectedhomelunch = localStorage.getItem('selhomelun');
                var selectedworklunch = localStorage.getItem('selworklun');
                var selectedhomedin = localStorage.getItem('selhomedin');
                var selectedworkdin = localStorage.getItem('selworkdin');
                localStorage.removeItem('selhomelun');
                localStorage.removeItem('selworklun');
                localStorage.removeItem('selhomedin');
                localStorage.removeItem('selworkdin');
                localStorage.setItem('selectWhereAddress', '1');
                _this.nav.setRoot('ChoosedeliveryaddressPage', {
                    selectforhomelunchis: selectedhomelunch,
                    selectorworklunchis: selectedworklunch,
                    selectforhomedinis: selectedhomedin,
                    selectorworkdinis: selectedworkdin
                });
            }
            else {
                _this.conmessage = res.message;
                _this.showConfirmAlert1();
            }
        }).catch(function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert1();
        });
    };
    WhereToDeliverePage.prototype.Back = function () {
        console.log('The keyboard is open:', this.keyboard.isOpen());
        var element = document.getElementById("myDIV");
        if (element) {
            element.classList.remove("mystyle");
        }
        this.customise = localStorage.getItem('hardwareback');
        if (this.customise == '0') {
            this.model.dismiss();
        }
        else {
            var backfromwheretodel = "backfromwheretodel";
            localStorage.removeItem('selectDelTime');
            this.nav.setRoot('ChoosedeliverytimePage', {
                back: backfromwheretodel
            });
        }
    };
    WhereToDeliverePage.prototype.loadzipcode = function () {
        var _this = this;
        this.apiService.showselectarea().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.areaArray = response.data;
            }
            else {
                // this.util.alert(response.errors, '');
                _this.conmessage = response.message;
                _this.showConfirmAlert1();
            }
        }, function (response) {
            _this.conmessage = response.message;
            _this.showConfirmAlert1();
        });
    };
    WhereToDeliverePage.prototype.onclickarea1 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        var cust_css;
        cust_css = 'select-modal-rtms';
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: true
        }, { cssClass: cust_css, enableBackdropDismiss: false });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.abcde_new = data.displayarea;
            _this.areaname_new = data.displayarea_area;
            if (_this.areaname_new == '' || _this.areaname_new == null) {
                if (localStorage.getItem('areaname') != null) {
                    _this.areaname_new = localStorage.getItem('areaname');
                }
                if (localStorage.getItem('areaname') == 'null') {
                    localStorage.setItem('areaname', '');
                    _this.areaname_new = localStorage.getItem('areaname');
                }
                else {
                    _this.areaname_new = localStorage.getItem('areaname');
                }
            }
            else {
                if (_this.areaname_new == 'null') {
                    localStorage.setItem('areaname', '');
                    _this.areaname_new = localStorage.getItem('areaname');
                }
                else {
                    _this.areaname_new = localStorage.getItem('areaname');
                }
            }
            if (_this.abcde_new == '' || _this.abcde_new == null) {
                if (localStorage.getItem('pincode') != null) {
                    _this.abcde_new = localStorage.getItem('pincode');
                }
                else {
                    if (localStorage.getItem('pincode') == 'null') {
                        localStorage.setItem('pincode', '');
                        _this.abcde_new = localStorage.getItem('pincode');
                    }
                    else {
                        _this.abcde_new = localStorage.getItem('pincode');
                    }
                }
            }
            else {
                if (_this.abcde_new == 'null') {
                    localStorage.setItem('pincode', '');
                    _this.abcde_new = localStorage.getItem('pincode');
                }
                else {
                    _this.abcde_new = localStorage.getItem('pincode');
                }
            }
            _this.customise = '1';
            localStorage.setItem('hardwareback', _this.customise);
        });
    };
    WhereToDeliverePage.prototype.onclickarea2 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        var cust_css;
        cust_css = 'select-modal-rtms';
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: false,
            customise_data2: true
        }, { cssClass: cust_css, enableBackdropDismiss: false });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.abcde_new = data.displayarea;
            _this.areaname_new = data.displayarea_area;
            if (_this.areaname_new == '' || _this.areaname_new == null) {
                if (localStorage.getItem('areaname') != null) {
                    if (localStorage.getItem('areaname') == 'null') {
                        localStorage.setItem('areaname', '');
                        _this.areaname_new = localStorage.getItem('areaname');
                    }
                    else {
                        _this.areaname_new = localStorage.getItem('areaname');
                    }
                }
                else {
                    if (localStorage.getItem('areaname') == 'null') {
                        localStorage.setItem('areaname', '');
                        _this.areaname_new = localStorage.getItem('areaname');
                    }
                    else {
                        _this.areaname_new = localStorage.getItem('areaname');
                    }
                }
            }
            else {
                if (_this.areaname_new == 'null') {
                    localStorage.setItem('areaname', '');
                    _this.areaname_new = localStorage.getItem('areaname');
                }
                else {
                    _this.areaname_new = localStorage.getItem('areaname');
                }
            }
            if (_this.abcde_new == '' || _this.abcde_new == null) {
                if (localStorage.getItem('pincode') != null) {
                    if (localStorage.getItem('pincode') == 'null') {
                        localStorage.setItem('pincode', '');
                        _this.abcde_new = localStorage.getItem('pincode');
                    }
                    else {
                        _this.abcde_new = localStorage.getItem('pincode');
                    }
                }
                else {
                    if (localStorage.getItem('pincode') == 'null') {
                        localStorage.setItem('pincode', '');
                        _this.abcde_new = localStorage.getItem('pincode');
                    }
                    else {
                        _this.abcde_new = localStorage.getItem('pincode');
                    }
                }
            }
            else {
                if (_this.abcde_new == 'null') {
                    localStorage.setItem('pincode', '');
                    _this.abcde_new = localStorage.getItem('pincode');
                }
                else {
                    _this.abcde_new = localStorage.getItem('pincode');
                }
            }
            _this.customise = '1';
            localStorage.setItem('hardwareback', _this.customise);
        });
    };
    WhereToDeliverePage.prototype.onclickarea3 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        var cust_css;
        cust_css = 'select-modal-rtms';
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: false,
            customise_data2: false,
            customise_data3: true
        }, { cssClass: cust_css, enableBackdropDismiss: false });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.areaid2 = data.displayarea_area_sec;
            _this.areaid1 = data.displayarea_sec;
            if (_this.areaid2 == '' || _this.areaid2 == null) {
                if (localStorage.getItem('getfirstpincodearea') != null) {
                    _this.areaid2 = localStorage.getItem('getfirstpincodearea');
                }
            }
            if (_this.areaid1 == '' || _this.areaid1 == null) {
                if (localStorage.getItem('getsecondareapindata') != null) {
                    _this.areaid1 = localStorage.getItem('getsecondareapindata');
                }
            }
            _this.customise = '1';
            localStorage.setItem('hardwareback', _this.customise);
        });
    };
    WhereToDeliverePage.prototype.onclickarea4 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        var cust_css;
        cust_css = 'select-modal-rtms';
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: false,
            customise_data2: false,
            customise_data3: false,
            customise_data4: true
        }, { cssClass: cust_css, enableBackdropDismiss: false });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.areaid2 = data.displayarea_area_sec;
            _this.areaid1 = data.displayarea_sec;
            if (_this.areaid2 == '' || _this.areaid2 == null) {
                if (localStorage.getItem('getfirstpincodearea') != null) {
                    _this.areaid2 = localStorage.getItem('getfirstpincodearea');
                }
            }
            if (_this.areaid1 == '' || _this.areaid1 == null) {
                if (localStorage.getItem('getsecondareapindata') != null) {
                    _this.areaid1 = localStorage.getItem('getsecondareapindata');
                }
            }
            _this.customise = '1';
            localStorage.setItem('hardwareback', _this.customise);
        });
    };
    WhereToDeliverePage.prototype.deleteicon1 = function () {
        this.areaid2 = localStorage.setItem('getfirstpincodearea', '');
        this.areaid1 = localStorage.setItem('getsecondareapindata', '');
        this.pincode_2 = localStorage.setItem('getfirstpincodeid', '');
    };
    WhereToDeliverePage.prototype.deleteicon = function () {
        this.areaname_new = localStorage.setItem('areaname', '');
        this.abcde_new = localStorage.setItem('pincode', '');
        this.pincode_1 = localStorage.setItem('getsecondpincodeid', '');
    };
    WhereToDeliverePage.prototype.loadzipcode1 = function () {
        var _this = this;
        this.apiService.showselectarea().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.areaArray1 = response.data;
            }
            else {
                // this.util.alert(response.errors, '');
                _this.conmessage = response.message;
                _this.showConfirmAlert1();
            }
        }, function (response) {
            _this.conmessage = response.message;
            _this.showConfirmAlert1();
        });
    };
    WhereToDeliverePage.prototype.showConfirmAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alertConfirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alertConfirm = this.atrCtrl.create({
                            //header: 'Download Successfully',
                            message: 'Please enter home address',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        setTimeout(function () {
                                            _this.flatno1input.setFocus();
                                        }, 150);
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
    WhereToDeliverePage.prototype.showConfirmAlert1 = function () {
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
                                        _this.nav.setRoot('WhereToDeliverePage');
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
    WhereToDeliverePage.prototype.classadded = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('flatno1'),
        __metadata("design:type", Object)
    ], WhereToDeliverePage.prototype, "flatno1input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('address11'),
        __metadata("design:type", Object)
    ], WhereToDeliverePage.prototype, "address11input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('address21'),
        __metadata("design:type", Object)
    ], WhereToDeliverePage.prototype, "address21input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('flateno2'),
        __metadata("design:type", Object)
    ], WhereToDeliverePage.prototype, "flateno2Input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('address12'),
        __metadata("design:type", Object)
    ], WhereToDeliverePage.prototype, "address12input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('address22'),
        __metadata("design:type", Object)
    ], WhereToDeliverePage.prototype, "address22input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('areaidselect'),
        __metadata("design:type", Object)
    ], WhereToDeliverePage.prototype, "areaidinput", void 0);
    WhereToDeliverePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-where-to-delivere',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/where-to-delivere/where-to-delivere.html"*/'<ion-header no-border class="dit-type-header wheretodel" (click)="classadded()">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon ">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>WHERE TO DELIVER?</ion-title>     \n  </ion-navbar>\n</ion-header>\n<ion-content class="main-content" (click)="classadded()" id="myDIV">\n  <div class="content-area-address">\n    <div class="delivery-signup">\n      <ion-grid>\n        <form *ngIf="active" novalidate [formGroup]="deliveryAddressForm" class="delivery-address" style="margin-bottom: 4vh;">\n          <ion-row>\n            <ion-col>\n              <h4>HOME ADDRESS</h4>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>HOUSE/FLAT NO:</ion-label>\n                <ion-input type="text" autocomplete="off"  [formControl]="deliveryAddressForm.controls.flat_no1" #flatno1></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>ADDRESS LINE 1</ion-label>\n                <ion-input autocomplete="off"  [formControl]="deliveryAddressForm.controls.address11" #address11 id="googlePlaces" required>\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>ADDRESS LINE 2</ion-label>\n                <ion-input autocomplete="off"  type="text" [formControl]="deliveryAddressForm.controls.address21" #address21></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>CITY</ion-label>\n                <ion-input type="text" [formControl]="deliveryAddressForm.controls.city1" [(ngModel)]="Hcity"  [readonly]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>PINCODE</ion-label>\n                <ion-input id="cars" name="cars" autocomplete="off" \n                   class="select-full-width"type="text" [formControl]="deliveryAddressForm.controls.area_id1"  (keyup)="onclickarea1()"  (keydown)="onclickarea1()" (click)="onclickarea1()" value="{{abcde_new}}" [readonly]="true"></ion-input>\n                   \n              \n              </ion-item>\n            </ion-col>\n           <!--  <ion-col col-1 class="deleteicon">              \n              <div style="padding: 0.449vh; margin-top:1vh;">\n                <img src="assets/imgicon/delete.png" (click)="deleteicon()">\n              </div>\n            </ion-col> -->\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>STATE</ion-label>\n                <ion-input type="text" [formControl]="deliveryAddressForm.controls.state1" [(ngModel)]="HState"  [readonly]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5>\n              <ion-item style="padding-left: 0rem !important;">\n                 <ion-label floating>AREA</ion-label>\n                <ion-input type="text" id="cars" name="cars" autocomplete="off" \n                   class="select-full-width" [formControl]="deliveryAddressForm.controls.area_id12"\n                  value="{{areaname_new}}" (keyup)="onclickarea2()" (keydown)="onclickarea2()" (click)="onclickarea2()" [readonly]="true"></ion-input>\n              </ion-item>\n             \n\n            </ion-col>\n            <ion-col col-1 class="deleteicon">       \n              <div style="padding: 0.449vh;"><img src="assets/imgicon/droparea.svg" (keyup)="onclickarea2()" (keydown)="onclickarea2()" (click)="onclickarea2()" style="width:2.398vh; opacity: 0.6;"></div>\n           </ion-col>\n          \n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <h4>WORK ADDRESS</h4>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>COMPANY NAME WITH FLOOR NO.</ion-label>\n                <ion-input type="text" autocomplete="off"  [formControl]="deliveryAddressForm.controls.flate_no2" #flateno2></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>ADDRESS LINE 1</ion-label>\n                <ion-input type="text" autocomplete="off"  [formControl]="deliveryAddressForm.controls.address12" #address12></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>ADDRESS LINE 2</ion-label>\n                <ion-input type="text" autocomplete="off"  [formControl]="deliveryAddressForm.controls.address22" #address22></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>CITY</ion-label>\n                <ion-input type="text" [formControl]="deliveryAddressForm.controls.city2" [(ngModel)]="WCity"  [readonly]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item style="padding-left: 0rem !important;">\n                  <ion-label floating>PINCODE</ion-label>\n                <ion-input type="text"id="cars" name="cars" class="select-full-width" autocomplete="off"  \n                  [formControl]="deliveryAddressForm.controls.area_id2" value="{{areaid1}}"  (keyup)="onclickarea3()"  (keydown)="onclickarea3()" (click)="onclickarea3()" [readonly]="true"></ion-input>\n              </ion-item>\n            </ion-col>\n         <!--    <ion-col col-1 class="deleteicon">              \n              <div style="padding: 0.449vh; margin-top:1vh;"><img src="assets/imgicon/delete.png" (click)="deleteicon1()"></div>\n            </ion-col> -->\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6>\n              <ion-item style="padding-left: 0rem !important;">\n                <ion-label floating>STATE</ion-label>\n                <ion-input type="text" [formControl]="deliveryAddressForm.controls.state2" [(ngModel)]="WState"  [readonly]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5>\n              <ion-item style="padding-left: 0rem !important;">\n                 <ion-label floating>AREA</ion-label>\n                <ion-input type="text" id="cars" name="cars" class="select-full-width"  autocomplete="off"  \n                  [formControl]="deliveryAddressForm.controls.area_id22" value="{{areaid2}}" (keyup)="onclickarea4()" (keydown)="onclickarea4()" (click)="onclickarea4()" [readonly]="true"></ion-input>\n              </ion-item>\n            </ion-col>    \n            <ion-col col-1 class="deleteicon">       \n              <div style="padding: 0.449vh;"><img src="assets/imgicon/droparea.svg" (keyup)="onclickarea4()" (keydown)="onclickarea4()" (click)="onclickarea4()" style="width:2.398vh; opacity: 0.6;"></div>\n           </ion-col>   \n             \n            \n          </ion-row>\n        </form>\n      </ion-grid>\n      <ion-col style="width: 100%;border-radius: 0.5rem;float: left;padding: 0 0 4vh 0; ">\n        <div class="text-center">\n          <button ion-button type="submit" id="input_submit" style="border-radius: 0.28vh; margin: 0;height: 14.667vw !important;" (click)="onSubmit()" block>\n            Continue\n          </button>\n        </div>\n      </ion-col>\n    </div>\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/where-to-delivere/where-to-delivere.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */]])
    ], WhereToDeliverePage);
    return WhereToDeliverePage;
}());

//# sourceMappingURL=where-to-delivere.js.map

/***/ })

});
//# sourceMappingURL=8.js.map