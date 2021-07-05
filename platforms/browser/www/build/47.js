webpackJsonp([47],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaEditPageModule", function() { return AreaEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_edit__ = __webpack_require__(906);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AreaEditPageModule = (function () {
    function AreaEditPageModule() {
    }
    AreaEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__area_edit__["a" /* AreaEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__area_edit__["a" /* AreaEditPage */]),
            ],
        })
    ], AreaEditPageModule);
    return AreaEditPageModule;
}());

//# sourceMappingURL=area-edit.module.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(25);
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
 * Generated class for the AreaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AreaEditPage = (function () {
    function AreaEditPage(nav, navParams, builder, apiService, modalCtrl, util, push, translate, storage, atrCtrl, platform, viewCtrl) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.builder = builder;
        this.apiService = apiService;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.push = push;
        this.translate = translate;
        this.storage = storage;
        this.atrCtrl = atrCtrl;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.showFirstDiv = false;
        this.showSecondDiv = false;
        this.areaArray = [];
        this.areaArrayfilter = [];
        this.areaArrayfilters = [];
        this.areaArrayfilters2 = [];
        this.areaArrayfilters_sec = [];
        var backAction = platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss({
                displayarea_sec: '',
                displayarea_area_sec: '',
            });
            _this.displayarea = '';
            _this.areaname_new = '';
            _this.abcde_new = '';
            _this.areaid2 = '';
            _this.areaid1 = '';
            if (localStorage.getItem('area-pincode') != null) {
                _this.displayarea = localStorage.getItem('area-pincode');
            }
            if (localStorage.getItem('areaname') != null) {
                if (localStorage.getItem('areaname') == 'null') {
                    _this.areaname_new = '';
                }
                else {
                    _this.areaname_new = localStorage.getItem('areaname');
                }
            }
            if (localStorage.getItem('pincode') != null) {
                if (localStorage.getItem('pincode') == 'null') {
                    _this.abcde_new = '';
                }
                else {
                    _this.abcde_new = localStorage.getItem('pincode');
                }
            }
            if (localStorage.getItem('getfirstpincodearea') != null) {
                _this.areaid2 = localStorage.getItem('getfirstpincodearea');
            }
            if (localStorage.getItem('getsecondareapindata') != null) {
                _this.areaid1 = localStorage.getItem('getsecondareapindata');
            }
            backAction();
        }, 2);
    }
    AreaEditPage.prototype.ngOnInit = function () {
        this.loadzipcode();
        this.onLoadDisplayrData();
        this.customise_data = this.navParams.get('customise_data');
        this.Fieldactive = this.navParams.get('customise_data');
        this.customise_data1 = this.navParams.get('customise_data1');
        this.Fieldactive1 = this.navParams.get('customise_data1');
        this.customise_data2 = this.navParams.get('customise_data2');
        this.Fieldactive2 = this.navParams.get('customise_data2');
        this.customise_data3 = this.navParams.get('customise_data3');
        this.Fieldactive3 = this.navParams.get('customise_data3');
        this.customise_data4 = this.navParams.get('customise_data4');
        this.Fieldactive4 = this.navParams.get('customise_data4');
        if (localStorage.getItem('area-pincode') != null) {
            this.displayarea = localStorage.getItem('area-pincode');
        }
        else {
            this.displayarea = '';
        }
        if (localStorage.getItem('areaname') != null) {
            if (localStorage.getItem('areaname') == 'null') {
                this.areaname_new = '';
            }
            else {
                this.areaname_new = localStorage.getItem('areaname');
            }
        }
        else {
            if (localStorage.getItem('areaname') == 'null') {
                this.areaname_new = '';
            }
            else {
                this.areaname_new = '';
            }
        }
        if (localStorage.getItem('pincode') != null) {
            if (localStorage.getItem('pincode') == 'null') {
                this.abcde_new = '';
            }
            else {
                this.abcde_new = localStorage.getItem('pincode');
            }
        }
        else {
            if (localStorage.getItem('pincode') == 'null') {
                this.abcde_new = '';
            }
            else {
                this.abcde_new = '';
            }
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
    };
    AreaEditPage.prototype.onLoadDisplayrData = function () {
        this.customise_data = this.navParams.get('customise_data');
    };
    AreaEditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AreaEditPage');
        this.util.hideLoader();
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 800);
    };
    AreaEditPage.prototype.loadzipcode = function () {
        var _this = this;
        this.apiService.showselectarea().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.areaArray = response.data;
                // for first
                if (_this.Fieldactive == true) {
                    _this.areaArrayfilter = [];
                    var j = 0;
                    for (var i = 0; i < _this.areaArray.length; i++) {
                        _this.Active = true;
                        if (_this.areaArray[i].area != '') {
                            _this.areaArrayfilter[j] = '<span>' + _this.areaArray[i].pincode + '</span><span>-</span><span>' + _this.areaArray[i].area + '</span>';
                            j++;
                        }
                    }
                }
                ///   for second
                if (_this.Fieldactive1 == true) {
                    _this.areaArrayfilter = [];
                    var j = 0;
                    for (var i = 0; i < _this.areaArray.length; i++) {
                        _this.Actives = true;
                        if (_this.areaArrayfilter.indexOf(_this.areaArray[i].pincode) == -1) {
                            _this.areaArrayfilter.push(_this.areaArray[i].pincode);
                            // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                        }
                        // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                        // j++;
                    }
                }
                // for third
                if (_this.Fieldactive2 == true) {
                    _this.areaArrayfilters = [];
                    var j = 0;
                    for (var i = 0; i < _this.areaArray.length; i++) {
                        _this.Actives_one = true;
                        _this.matched = localStorage.getItem('pincode');
                        if (_this.matched == _this.areaArray[i].pincode) {
                            _this.areaArrayfilters[j] = _this.areaArray[i].area;
                            j++;
                        }
                        else {
                            if (_this.matched == "null" || _this.matched == "undefined" || _this.matched == null || _this.matched == '0' || _this.matched == "") {
                                _this.areaArrayfilters[j] = _this.areaArray[i].area;
                                j++;
                            }
                        }
                    }
                }
                if (_this.Fieldactive3 == true) {
                    _this.areaArrayfilters_sec = [];
                    var j = 0;
                    for (var i = 0; i < _this.areaArray.length; i++) {
                        _this.Actives_second = true;
                        if (_this.areaArrayfilters_sec.indexOf(_this.areaArray[i].pincode) == -1) {
                            _this.areaArrayfilters_sec.push(_this.areaArray[i].pincode);
                            // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                        }
                        // this.areaArrayfilters_sec[j]=this.areaArray[i].pincode;
                        // j++;
                    }
                }
                if (_this.Fieldactive4 == true) {
                    _this.areaArrayfilters2 = [];
                    var j = 0;
                    for (var i = 0; i < _this.areaArray.length; i++) {
                        _this.Actives_second1 = true;
                        _this.matched2 = localStorage.getItem('getsecondareapindata');
                        if (_this.matched2 == _this.areaArray[i].pincode) {
                            _this.areaArrayfilters2[j] = _this.areaArray[i].area;
                            j++;
                        }
                        else {
                            if (_this.matched2 == "null" || _this.matched2 == "undefined" || _this.matched2 == null || _this.matched2 == '0' || _this.matched2 == "") {
                                _this.areaArrayfilters2[j] = _this.areaArray[i].area;
                                j++;
                            }
                        }
                    }
                }
            }
            else {
                _this.conmessage = response.message;
                _this.viewCtrl.dismiss({
                    displayarea: '',
                    displayarea_area: '',
                });
                _this.showConfirmAlert();
            }
        }, function (data) {
            _this.util.hideLoader();
            _this.conmessage = "Something's wrong, let's try again?";
            _this.viewCtrl.dismiss({
                displayarea: '',
                displayarea_area: '',
                displayarea_sec: '',
                displayarea_area_sec: '',
            });
            _this.showConfirmAlert();
        });
    };
    AreaEditPage.prototype.selectarea = function ($a) {
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase();
        this.areaArrayfilter = [];
        var j = 0;
        for (var i = 0; i < this.areaArray.length; i++) {
            this.datavaluesid = this.areaArray[i].pincode.toLowerCase();
            this.datavalues = this.areaArray[i].area.toLowerCase();
            this.areaArray[i].pincode = this.areaArray[i].pincode;
            this.checkarea = this.datavaluesid.includes(this.convertarea);
            this.checkareaid = this.datavalues.includes(this.convertarea);
            if (this.checkarea == true || this.checkareaid == true) {
                console.log(this.convertarea);
                this.Active = true;
                if (this.areaArray[i].area != '') {
                    this.areaArrayfilter[j] = '<span>' + this.areaArray[i].pincode + '</span><span>-</span><span>' + this.areaArray[i].area + '</span>';
                    //this.areaArray[i].pincode + ' - ' + this.areaArray[i].area;
                    j++;
                }
            }
        }
    };
    AreaEditPage.prototype.setselectarea = function ($event, a) {
        this.areaid = $event;
        console.log(this.areaid);
        //localStorage.setItem('area-pincode', this.areaid);
        // this.displayarea=this.areaid;
        this.Active = false;
        for (var i = 0; i < this.areaArray.length; i++) {
            this.stringmatch = '<span>' + this.areaArray[i].pincode + '</span><span>-</span><span>' + this.areaArray[i].area + '</span>';
            if (this.areaid == this.stringmatch) {
                console.log('innn');
                this.stringmatch = this.areaArray[i].pincode + '-' + this.areaArray[i].area;
                console.log(this.stringmatch);
                this.displayarea = this.stringmatch;
                localStorage.setItem('area-pincode', this.stringmatch);
                this.areaname = this.areaArray[i].area;
                this.ids = this.areaArray[i].id;
                this.pincode = this.areaArray[i].pincode;
                localStorage.setItem('areaid', this.areaArray[i].id);
                localStorage.setItem('thisdataid', this.ids);
            }
        }
        this.viewCtrl.dismiss({
            displayarea: localStorage.getItem('area-pincode'),
            displayarea_area: localStorage.getItem('area-area'),
        });
    };
    /// for where to delivery
    AreaEditPage.prototype.selectarea1 = function ($a) {
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase();
        this.areaArrayfilter = [];
        var j = 0;
        for (var i = 0; i < this.areaArray.length; i++) {
            this.datavaluesid = this.areaArray[i].pincode.toLowerCase();
            this.datavalues = this.areaArray[i].area.toLowerCase();
            this.areaArray[i].pincode = this.areaArray[i].pincode;
            this.checkarea = this.datavaluesid.includes(this.convertarea);
            this.checkareaid = this.datavalues.includes(this.convertarea);
            if (this.checkarea == true || this.checkareaid == true) {
                if (this.areaArray[i].pincode != '') {
                    this.Actives = true;
                    if (this.areaArrayfilter.indexOf(this.areaArray[i].pincode) == -1) {
                        this.areaArrayfilter.push(this.areaArray[i].pincode);
                        // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                    }
                    // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                    // j++;
                }
            }
        }
    };
    AreaEditPage.prototype.setselectarea1 = function ($event) {
        this.areaid = $event;
        for (var i = 0; i < this.areaArray.length; i++) {
            if (this.areaid == this.areaArray[i].pincode) {
                this.Actives = false;
                this.abcde_new = this.areaid;
                this.areaname = this.areaArray[i].area;
                //this.areaname_new= this.areaname;
                localStorage.setItem('area-pincode', this.abcde_new);
                localStorage.setItem('area-area', '');
                this.pincode = this.areaArray[i].pincode;
                localStorage.setItem('pincode', this.pincode);
                localStorage.setItem('areacode', this.areaid);
                this.id = this.areaArray[i].id;
                localStorage.setItem('getsecondpincodeid', this.id);
                localStorage.setItem('thisdataid', this.id);
                localStorage.setItem('areaname', '');
            }
        }
        this.viewCtrl.dismiss({
            displayarea: localStorage.getItem('area-pincode'),
            displayarea_area: localStorage.getItem('area-area'),
        });
    };
    // first end
    AreaEditPage.prototype.selectarea_one1 = function ($a) {
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase();
        this.areaArrayfilters = [];
        var j = 0;
        for (var i = 0; i < this.areaArray.length; i++) {
            this.datavaluesid = this.areaArray[i].pincode.toLowerCase();
            this.datavalues = this.areaArray[i].area.toLowerCase();
            this.areaArray[i].pincode = this.areaArray[i].pincode;
            this.checkarea = this.datavaluesid.includes(this.convertarea);
            this.checkareaid = this.datavalues.includes(this.convertarea);
            if (this.checkareaid == true) {
                if (this.areaArray[i].area != '') {
                    this.Actives_one = true;
                    this.areaArrayfilters[j] = this.areaArray[i].area;
                    j++;
                }
            }
        }
    };
    AreaEditPage.prototype.setselectarea_one1 = function ($event) {
        this.areaid = $event;
        for (var i = 0; i < this.areaArray.length; i++) {
            if (this.areaid == this.areaArray[i].area) {
                this.Actives_one = false;
                this.areaname = this.areaArray[i].area;
                this.abcde_new = this.areaArray[i].pincode;
                this.areaname_new = this.areaArray[i].area;
                localStorage.setItem('area-pincode', this.abcde_new);
                localStorage.setItem('area-area', this.areaname_new);
                localStorage.setItem('areaname', this.areaname_new);
                this.pincode = this.areaArray[i].pincode;
                localStorage.setItem('pincode', this.pincode);
                localStorage.setItem('areacode', this.areaid);
                this.id = this.areaArray[i].id;
                localStorage.setItem('getsecondpincodeid', this.id);
                localStorage.setItem('thisdataid', this.id);
            }
        }
        this.viewCtrl.dismiss({
            displayarea: localStorage.getItem('area-pincode'),
            displayarea_area: localStorage.getItem('area-area'),
        });
    };
    // second end
    AreaEditPage.prototype.selectarea12 = function ($a) {
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase();
        this.areaArrayfilters_sec = [];
        var j = 0;
        for (var i = 0; i < this.areaArray.length; i++) {
            this.datavaluesid = this.areaArray[i].pincode.toLowerCase();
            this.datavalues = this.areaArray[i].area.toLowerCase();
            this.areaArray[i].pincode = this.areaArray[i].pincode;
            this.checkarea = this.datavaluesid.includes(this.convertarea);
            this.checkareaid = this.datavalues.includes(this.convertarea);
            if (this.checkarea == true) {
                if (this.areaArray[i].pincode != '') {
                    this.Actives_second = true;
                    if (this.areaArrayfilters_sec.indexOf(this.areaArray[i].pincode) == -1) {
                        this.areaArrayfilters_sec.push(this.areaArray[i].pincode);
                        // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                    }
                    // this.areaArrayfilters_sec[j]=this.areaArray[i].pincode;
                    // j++;
                }
            }
        }
    };
    AreaEditPage.prototype.setselectarea1_one1 = function ($event) {
        this.areaid = $event;
        for (var i = 0; i < this.areaArray.length; i++) {
            if (this.areaid == this.areaArray[i].pincode) {
                this.Actives_second = false;
                //this.areaname = this.areaArray[i].area;
                this.pincode1 = this.areaArray[i].pincode;
                localStorage.setItem('workpincode', this.pincode1);
                //this.areaid2 = this.areaname;
                this.areaid1 = this.pincode1;
                this.id = this.areaArray[i].id;
                localStorage.setItem('getfirstpincodeid', this.id);
                localStorage.setItem('getfirstpincodearea', '');
                localStorage.setItem('getsecondareapindata', this.pincode1);
            }
        }
        console.log('inn');
        this.viewCtrl.dismiss({
            displayarea_sec: localStorage.getItem('getsecondareapindata'),
            displayarea_area_sec: '',
        });
    };
    // thrird end
    AreaEditPage.prototype.selectarea1_sec = function ($a) {
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase();
        this.areaArrayfilters2 = [];
        var j = 0;
        for (var i = 0; i < this.areaArray.length; i++) {
            this.datavaluesid = this.areaArray[i].pincode.toLowerCase();
            this.datavalues = this.areaArray[i].area.toLowerCase();
            this.areaArray[i].pincode = this.areaArray[i].pincode;
            this.checkarea = this.datavaluesid.includes(this.convertarea);
            this.checkareaid = this.datavalues.includes(this.convertarea);
            if (this.checkareaid == true) {
                if (this.areaArray[i].area != '') {
                    this.Actives_second1 = true;
                    this.areaArrayfilters2[j] = this.areaArray[i].area;
                    j++;
                }
            }
        }
    };
    AreaEditPage.prototype.setselectarea1_sec1 = function ($event) {
        this.areaid = $event;
        for (var i = 0; i < this.areaArray.length; i++) {
            if (this.areaid == this.areaArray[i].area) {
                this.Actives_second1 = false;
                this.areaname = this.areaArray[i].area;
                this.pincode1 = this.areaArray[i].pincode;
                localStorage.setItem('workpincode', this.pincode1);
                this.areaid2 = this.areaname;
                this.areaid1 = this.pincode1;
                this.id = this.areaArray[i].id;
                localStorage.setItem('getfirstpincodeid', this.id);
                localStorage.setItem('getfirstpincodearea', this.areaname);
                localStorage.setItem('getsecondareapindata', this.pincode1);
            }
        }
        this.viewCtrl.dismiss({
            displayarea_sec: localStorage.getItem('getsecondareapindata'),
            displayarea_area_sec: localStorage.getItem('getfirstpincodearea'),
        });
    };
    AreaEditPage.prototype.closemodel = function () {
        var a = localStorage.getItem('getsecondareapindata');
        var b = localStorage.getItem('getfirstpincodearea');
        var c = localStorage.getItem('pincode');
        var d = localStorage.getItem('areacode');
        var e = localStorage.getItem('area-pincode');
        var f = localStorage.getItem('area-area');
        if (a == null) {
            localStorage.setItem('getsecondareapindata', '');
        }
        else if (a == 'null') {
            localStorage.setItem('getsecondareapindata', '');
        }
        if (b == null) {
            localStorage.setItem('getfirstpincodearea', '');
        }
        else if (b == 'null') {
            localStorage.setItem('getfirstpincodearea', '');
        }
        if (c == null) {
            localStorage.setItem('pincode', '');
        }
        else if (c == 'null') {
            localStorage.setItem('pincode', '');
        }
        else if (c == 'undefined') {
            localStorage.setItem('pincode', '');
        }
        if (d == null) {
            localStorage.setItem('areacode', '');
        }
        else if (d == 'null') {
            localStorage.setItem('areacode', '');
        }
        else if (d == 'undefined') {
            localStorage.setItem('areacode', '');
        }
        if (e == null) {
            localStorage.setItem('area-pincode', '');
        }
        else if (e == 'null') {
            localStorage.setItem('area-pincode', '');
        }
        else if (e == 'undefined') {
            localStorage.setItem('area-pincode', '');
        }
        if (f == null) {
            localStorage.setItem('area-area', '');
        }
        else if (f == 'null') {
            localStorage.setItem('area-area', '');
        }
        else if (f == 'undefined') {
            localStorage.setItem('area-area', '');
        }
        this.viewCtrl.dismiss({
            displayarea_sec: localStorage.getItem('getsecondareapindata'),
            displayarea_area_sec: localStorage.getItem('getfirstpincodearea'),
            displayarea: localStorage.getItem('area-pincode'),
            displayarea_area: localStorage.getItem('area-area'),
        });
    };
    AreaEditPage.prototype.showConfirmAlert = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], AreaEditPage.prototype, "myInput", void 0);
    AreaEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-area-edit',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/area-edit/area-edit.html"*/'<ion-content class="main-edit-preference areamodel">\n  <ion-grid>\n    <div class="heading-title-box">\n      <ion-row>\n        <ion-col col-9 class="text-left" defualt>\n            <h6 *ngIf="Fieldactive">Select Area</h6>\n            <h6 *ngIf="Fieldactive1">Select Pincode</h6>\n            <h6 *ngIf="Fieldactive2">Select Area</h6>\n            <h6 *ngIf="Fieldactive3">Select Pincode</h6>\n            <h6 *ngIf="Fieldactive4">Select Area</h6>  \n        </ion-col>\n        <ion-col col-3 style="margin-top: 0.6vh;text-align: right;">\n          <img src="assets/signs.png" style="width: 2.99vh;border-radius: 50%;margin-top: 0.6vh;" (click)="closemodel()">\n        </ion-col>\n      </ion-row>\n   </div>\n\n      <ion-row style="width: 100%;">\n      <ion-col *ngIf="Fieldactive">\n          <ion-list>\n            <ion-item style="padding-left: 5.333vw;   height: 6.896551724137931vh;">\n               <ion-input style="font-weight:bold ; " class="select-full-width" type="text" value=\'{{displayarea}}\' (input)="selectarea($event.target.value)" placeholder="PIN CODE"  #input></ion-input>\n            </ion-item>\n          </ion-list>\n       \n      </ion-col>\n      <ion-col *ngIf="Fieldactive1">\n          <ion-list>\n            <ion-item style="padding-left: 5.333vw;    height: 6.896551724137931vh;">\n                <ion-input id="cars" placeholder="PINCODE" name="cars"\n                   class="select-full-width"\n                  (input)="selectarea1($event.target.value)" type="text" value="{{abcde_new}}" #input></ion-input>\n            </ion-item>\n          </ion-list>\n       \n      </ion-col>\n      <ion-col *ngIf="Fieldactive2">\n          <ion-list>\n            <ion-item style="padding-left: 5.333vw;    height: 6.896551724137931vh;">\n               <ion-input type="text" id="cars" placeholder="AREA" name="cars"\n                   class="select-full-width"\n                  (input)="selectarea_one1($event.target.value)" \n                  value="{{areaname_new}}" #input></ion-input>\n            </ion-item>\n          </ion-list>\n       \n      </ion-col>\n      <ion-col *ngIf="Fieldactive3">\n          <ion-list>\n            <ion-item style="padding-left:5.333vw;    height: 6.896551724137931vh;">\n              <ion-input type="text"id="cars" name="cars" class="select-full-width" (input)="selectarea12($event.target.value)" placeholder="PINCODE" value="{{areaid1}}" #input></ion-input>\n            </ion-item>\n          </ion-list>\n       \n      </ion-col>\n       <ion-col *ngIf="Fieldactive4">\n          <ion-list>\n            <ion-item style="padding-left: 5.333vw;    height: 6.896551724137931vh;">\n              <ion-input type="text" id="cars" name="cars" class="select-full-width" (input)="selectarea1_sec($event.target.value)" placeholder="AREA" value="{{areaid2}}" #input></ion-input>\n            </ion-item>\n          </ion-list>\n       \n      </ion-col>\n    </ion-row>\n    <ion-row style="width: 100%;" class="model-area-margin">\n        <ion-col class="text-center" *ngIf="Active">\n          <ion-list>\n             <ion-item style="padding-left: 5.333vw;">\n              <div style=" width: 100%;height: 49vh;overflow-y: scroll;">\n              <p style="padding-top: 0.05vh;overflow: hidden;" *ngFor="let a of areaArrayfilter" (click)="setselectarea(a)" [innerHTML]="a"></p>\n            </div>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n         <ion-col class="text-center" *ngIf="Actives">\n            <ion-list>\n              <ion-item>\n              <div style="  width: 100%;height: 49vh;overflow-y: scroll;">\n                <p  *ngFor="let a of areaArrayfilter" (click)="setselectarea1(a)" style="overflow: hidden;">{{a}}</p>\n              </div>\n              </ion-item>\n            </ion-list>\n        </ion-col>\n         <ion-col class="text-center" *ngIf="Actives_one">\n                     \n                      <ion-list>\n                         <ion-item>\n                          <div style="  width: 100%;height:49vh;overflow: scroll;">\n                          <p *ngFor="let a of areaArrayfilters" (click)="setselectarea_one1(a)">{{a}}</p>\n                        </div>\n                        </ion-item>\n                      </ion-list>\n          </ion-col>\n\n           <ion-col class="text-center" *ngIf="Actives_second">\n                     \n                      <ion-list>\n                         <ion-item>\n                          <div style="  width: 100%;height: 49vh;overflow-y: scroll;">\n                          <p *ngFor="let a of areaArrayfilters_sec" (click)="setselectarea1_one1(a)" style="overflow: hidden;">{{a}}</p>\n                        </div>\n                        </ion-item>\n                      </ion-list>\n          </ion-col>\n\n           <ion-col class="text-center" *ngIf="Actives_second1">\n                     \n                      <ion-list>\n                         <ion-item>\n                          <div style="  width: 100%;height: 49vh;overflow-y: scroll;">\n                          <p *ngFor="let a of areaArrayfilters2" (click)="setselectarea1_sec1(a)" style="overflow: hidden;">{{a}}</p>\n                        </div>\n                        </ion-item>\n                      </ion-list>\n          </ion-col>\n\n      </ion-row>\n     <!--  <ion-col col-12 style="position: absolute; width: 100%; bottom: 0; padding:2.923vh; ">\n        <div>\n          <button ion-button type="submit" id="input_submit" block (click)="onSubmit()">\n            Update Area\n          </button>\n        </div>\n      </ion-col> -->\n   \n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/area-edit/area-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], AreaEditPage);
    return AreaEditPage;
}());

//# sourceMappingURL=area-edit.js.map

/***/ })

});
//# sourceMappingURL=47.js.map