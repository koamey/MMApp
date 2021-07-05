webpackJsonp([20],{

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicktmrwvegiesPageModule", function() { return PicktmrwvegiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picktmrwvegies__ = __webpack_require__(954);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PicktmrwvegiesPageModule = (function () {
    function PicktmrwvegiesPageModule() {
    }
    PicktmrwvegiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__picktmrwvegies__["a" /* PicktmrwvegiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__picktmrwvegies__["a" /* PicktmrwvegiesPage */]),
            ],
        })
    ], PicktmrwvegiesPageModule);
    return PicktmrwvegiesPageModule;
}());

//# sourceMappingURL=picktmrwvegies.module.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicktmrwvegiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(18);
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
 * Generated class for the PicktmrwvegiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PicktmrwvegiesPage = (function () {
    function PicktmrwvegiesPage(navCtrl, navParams, util, translate, apiService, builder, push, storage, atrCtrl, platform, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.translate = translate;
        this.apiService = apiService;
        this.builder = builder;
        this.push = push;
        this.storage = storage;
        this.atrCtrl = atrCtrl;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.Activelunch = false;
        this.Activedinner = false;
        this.mymeal1 = "white";
        this.mymeal2 = "gray";
        this.guestmeal1 = "white";
        this.guestmeal2 = "gray";
        this.selectlunchbread1 = '';
        this.selectlunchbread2 = '';
        this.selectlunchsabji1 = '';
        this.selectlunchsabji2 = '';
        this.selectdinnerbread1 = '';
        this.selectdinnerbread2 = '';
        this.selectdinnersabji1 = '';
        this.selectdinnersabji2 = '';
        this.lb1 = '';
        this.lb2 = '';
        this.ls1 = '';
        this.ls2 = '';
        this.db1 = '';
        this.db2 = '';
        this.ds1 = '';
        this.ds2 = '';
        this.displayProducts = 'false';
        this.activeMyMeal = true;
        this.guestMeal = false;
        this.activeGuestMeal = false;
        this.lunchdisable = '';
        this.dinnerdisable = '';
        this.lunchinfobool = false;
        this.dinnerinfobool = false;
        this.butconfirm = false;
        this.butcont = true;
        this.initializeBackButtonCustomHandler();
    }
    PicktmrwvegiesPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    PicktmrwvegiesPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    PicktmrwvegiesPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PicktmrwvegiesPage');
    };
    PicktmrwvegiesPage.prototype.ngOnInit = function () {
        this.divdisplays = 0;
        this.divdisplays1 = 0;
        localStorage.removeItem('displayProducts');
        this.mealid = localStorage.getItem('mealId');
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
        this.cust_sub_id = localStorage.getItem('customer_subscription_id');
        this.subid = localStorage.getItem('subscription_id');
        this.custtype = localStorage.getItem('custType');
        if (this.mealid == 1) {
            this.Activelunch = true;
            this.Activedinner = false;
        }
        if (this.mealid == 2) {
            this.Activelunch = false;
            this.Activedinner = true;
        }
        if (this.mealid == 3) {
            this.Activelunch = true;
            this.Activedinner = true;
        }
        this.pickvegiclick();
        if (this.mealid == 3) {
            if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
                this.lunchdisable = "notnull";
            }
            else if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
                this.lunchdisable = "notnull";
            }
        }
        //mealId
    };
    PicktmrwvegiesPage.prototype.pickvegiclick = function () {
        var _this = this;
        this.util.showLoader();
        this.apiService.pickurvegi(this.custid, this.custToken, this.cust_sub_id).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                if (_this.mealid == 1) {
                    if (localStorage.getItem('displayProducts') == null || localStorage.getItem('displayProducts') == null) {
                        if (response.data[2]['default'] == 'on') {
                            _this.LBdiv1 = "rgb(255, 255, 255)";
                            _this.Lborder3 = '1px solid #000';
                            _this.Lborder4 = '1px solid #000';
                            _this.tlb1 = "black";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.lbid = ""; //response.data[2]['product_id'];
                            _this.lbqty = ""; //response.data[2]['product_quantity'];
                            _this.Disablecontinue = false;
                            _this.lunchdes = response.data[2]['description'];
                            _this.lunchinfo = response.data[2]['information'];
                            if (_this.lunchinfo == "") {
                                _this.lunchinfobool = true;
                            }
                        }
                        // if (response.data[1]['default'] == 'on') {
                        //   this.LBdiv2 = "rgb(42, 194, 119)";
                        //   this.Lborder4 = '1px solid #60cd66';
                        //   this.Lborder3 = '1px solid #000';
                        //   this.tlb2 = "white";
                        //   this.conbut1 = "rgb(242, 155, 17)";
                        //   this.lbid = response.data[1]['product_id'];
                        //   this.lbqty = response.data[1]['product_quantity'];
                        //   this.Disablecontinue = false;
                        // }
                        if (response.data[0]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.LSdiv1 = "rgb(42, 194, 119)";
                            _this.Lborder1 = '1px solid #60cd66';
                            _this.Lborder2 = '1px solid #000';
                            _this.tls1 = "white";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.lsid = response.data[0]['product_id'];
                            _this.lsqty = response.data[0]['product_quantity'];
                            _this.lunchdes1 = response.data[0]['description'];
                        }
                        if (response.data[1]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.LSdiv2 = "rgb(42, 194, 119)";
                            _this.Lborder2 = '1px solid #60cd66';
                            _this.Lborder1 = '1px solid #000';
                            _this.tls2 = "white";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.lsid = response.data[1]['product_id'];
                            _this.lsqty = response.data[1]['product_quantity'];
                            _this.lunchdes2 = response.data[1]['description'];
                        }
                    }
                    _this.lunchinfo = response.data[2]['information'];
                    if (_this.lunchinfo == "") {
                        _this.lunchinfobool = true;
                    }
                    _this.lunchdes = response.data[2]['description'];
                    //this.lunchbread2 = response.data[1]['product_name'];
                    _this.lunchdes1 = response.data[0]['description'];
                    _this.lunchdes2 = response.data[1]['description'];
                    _this.lunchbread1 = response.data[2]['product_name'];
                    //this.lunchbread2 = response.data[1]['product_name'];
                    _this.lunchsabji1 = response.data[0]['product_name'];
                    _this.lunchsabji2 = response.data[1]['product_name'];
                    _this.lbid1 = response.data[2]['product_id'];
                    //this.lbid2 = response.data[1]['product_id'];
                    _this.lsid1 = response.data[0]['product_id'];
                    _this.lsid2 = response.data[1]['product_id'];
                    _this.lbqty1 = response.data[2]['product_quantity'];
                    // this.lbqty2 = response.data[1]['product_quantity'];
                    _this.lsqty1 = response.data[0]['product_quantity'];
                    _this.lsqty2 = response.data[1]['product_quantity'];
                    _this.lunchorderid = response.data[3]['lunchh_order_id'];
                    _this.dinnerorderid = response.data[3]['dinner_order_id'];
                    if (response.data[2]['product_id'] == response.data[2]['selected']) {
                        _this.Disablecontinue = false;
                        _this.LBdiv1 = "rgb(42, 194, 119)";
                        _this.LBdiv2 = "#ffffff";
                        _this.Lborder3 = '1px solid #60cd66';
                        _this.Lborder4 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tlb1 = "white";
                        _this.tlb2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.lbid = '';
                        _this.lbid = _this.lbid1;
                        _this.lbqty = '';
                        _this.lbqty = _this.lbqty1;
                        _this.LSdiv1 = "#ffffff";
                        _this.LSdiv2 = "#ffffff";
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tls1 = "black";
                        _this.tls2 = "black";
                        _this.lsid = '';
                        _this.lsqty = '';
                        _this.Lborder1 = '1px solid #000';
                        _this.Lborder2 = '1px solid #000';
                    }
                    // if (response.data[1]['product_id'] == response.data[1]['selected']) {
                    //   this.Disablecontinue = false;
                    //   this.LBdiv1 = "#ffffff";
                    //   this.LBdiv2 = "rgb(42, 194, 119)";
                    //   this.Lborder4 = '1px solid #60cd66';
                    //   this.Lborder3 = '1px solid #000';
                    //   this.conbut1 = "rgb(242, 155, 17)"
                    //   this.tlb1 = "black";
                    //   this.tlb2 = "white";
                    //   this.butconfirm = true;
                    //   this.butcont = false;
                    //   this.lbid = '';
                    //   this.lbid = this.lbid2;
                    //   this.lbqty = '';
                    //   this.lbqty = this.lbqty2;
                    // }
                    if (response.data[0]['product_id'] == response.data[0]['selected']) {
                        _this.Disablecontinue = false;
                        _this.LSdiv1 = "rgb(42, 194, 119)";
                        _this.LSdiv2 = "#ffffff";
                        _this.Lborder1 = '1px solid #60cd66';
                        _this.Lborder2 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tls1 = "white";
                        _this.tls2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.lsid = '';
                        _this.lsid = _this.lsid1;
                        _this.lsqty = '';
                        _this.lsqty = _this.lsqty1;
                        _this.lbid = "";
                        _this.lbqty = "";
                    }
                    if (response.data[1]['product_id'] == response.data[1]['selected']) {
                        _this.Disablecontinue = false;
                        _this.LSdiv1 = "#ffffff";
                        _this.LSdiv2 = "rgb(42, 194, 119)";
                        _this.Lborder2 = '1px solid #60cd66';
                        _this.Lborder1 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tls1 = "black";
                        _this.tls2 = "white";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.lsid = '';
                        _this.lsid = _this.lsid2;
                        _this.lsqty = '';
                        _this.lsqty = _this.lsqty2;
                        _this.lbid = "";
                        _this.lbqty = "";
                    }
                }
                else if (_this.mealid == 2) {
                    if (localStorage.getItem('displayProducts') == null || localStorage.getItem('displayProducts') == null) {
                        _this.tlb1 = "black";
                        if (response.data[2]['default'] == 'on') {
                            _this.DBdiv1 = "rgb(255, 255, 255)";
                            _this.Dborder3 = '1px solid #000';
                            _this.Dborder4 = '1px solid #000';
                            _this.tDb1 = "black";
                            _this.tDb2 = "black";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.dbid = ""; // response.data[2]['product_id'];
                            _this.dbqty = ""; //response.data[2]['product_quantity'];
                            _this.Disablecontinue = false;
                            _this.dinnerdes = response.data[2]['description'];
                            _this.dinnerinfo = response.data[2]['information'];
                            if (_this.dinnerinfo == "") {
                                _this.dinnerinfobool = true;
                            }
                            console.log(_this.dinnerdes);
                        }
                        // if (response.data[1]['default'] == 'on') {
                        //   this.DBdiv2 = "rgb(42, 194, 119)";
                        //   this.Dborder4 = '1px solid #60cd66';
                        //   this.Dborder3 = '1px solid #000';
                        //   this.tDb1 = "black";
                        //   this.tDb2 = "white";
                        //   this.conbut1 = "rgb(242, 155, 17)";
                        //   this.dbid = response.data[1]['product_id'];
                        //   this.dbqty = response.data[1]['product_quantity'];
                        //   this.Disablecontinue = false;
                        // }
                        if (response.data[0]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.DSdiv1 = "rgb(42, 194, 119)";
                            _this.Dborder1 = '1px solid #60cd66';
                            _this.Dborder2 = '1px solid #000';
                            _this.tDs1 = "white";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.dsid = response.data[0]['product_id'];
                            _this.dsqty = response.data[0]['product_quantity'];
                            _this.dinnerdes1 = response.data[0]['description'];
                        }
                        if (response.data[1]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.DSdiv2 = "rgb(42, 194, 119)";
                            _this.Dborder2 = '1px solid #60cd66';
                            _this.Dborder1 = '1px solid #000';
                            _this.tDs2 = "white";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.dsid = response.data[1]['product_id'];
                            _this.dsqty = response.data[1]['product_quantity'];
                            _this.dinnerdes2 = response.data[1]['description'];
                        }
                    }
                    _this.dinnerinfo = response.data[2]['information'];
                    if (_this.dinnerinfo == "") {
                        _this.dinnerinfobool = true;
                    }
                    _this.dinnerdes = response.data[2]['description'];
                    //this.lunchbread2 = response.data[1]['product_name'];
                    _this.dinnerdes1 = response.data[0]['description'];
                    _this.dinnerdes2 = response.data[1]['description'];
                    _this.dinnerbread1 = response.data[2]['product_name'];
                    // this.dinnerbread2 = response.data[1]['product_name'];
                    _this.dinnersabji1 = response.data[0]['product_name'];
                    _this.dinnersabji2 = response.data[1]['product_name'];
                    _this.dbid1 = response.data[2]['product_id'];
                    // this.dbid2 = response.data[1]['product_id'];
                    _this.dsid1 = response.data[0]['product_id'];
                    _this.dsid2 = response.data[1]['product_id'];
                    _this.dbqty1 = response.data[2]['product_quantity'];
                    // this.dbqty2 = response.data[1]['product_quantity'];
                    _this.dsqty1 = response.data[0]['product_quantity'];
                    _this.dsqty2 = response.data[1]['product_quantity'];
                    _this.lunchorderid = response.data[3]['lunchh_order_id'];
                    _this.dinnerorderid = response.data[3]['dinner_order_id'];
                    if (response.data[2]['product_id'] == response.data[2]['selected']) {
                        _this.Disablecontinue = false;
                        _this.DBdiv1 = "rgb(42, 194, 119)";
                        _this.DBdiv2 = "#ffffff";
                        _this.Dborder3 = '1px solid #60cd66';
                        _this.Dborder4 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDb1 = "white";
                        _this.tDb2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.dbid = '';
                        _this.dbid = _this.dbid1;
                        _this.dbqty = '';
                        _this.dbqty = _this.dbqty1;
                        _this.DSdiv1 = "#ffffff";
                        _this.DSdiv2 = "#ffffff";
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDs1 = "black";
                        _this.tDs2 = "black";
                        _this.dsid = '';
                        _this.dsqty = '';
                        _this.Dborder2 = '1px solid #000';
                        _this.Dborder1 = '1px solid #000';
                    }
                    // if (response.data[1]['product_id'] == response.data[1]['selected']) {
                    //   this.Disablecontinue = false
                    //   this.DBdiv1 = "#ffffff"
                    //   this.DBdiv2 = "rgb(42, 194, 119)"
                    //   this.Dborder4 = '1px solid #60cd66';
                    //   this.Dborder3 = '1px solid #000';
                    //   this.conbut1 = "rgb(242, 155, 17)"
                    //   this.tDb1 = "black"
                    //   this.tDb2 = "white";
                    //   this.butconfirm = true
                    //   this.butcont = false;
                    //   this.dbid = ''
                    //   this.dbid = this.dbid2
                    //   this.dbqty = ''
                    //   this.dbqty = this.dbqty2
                    // }
                    if (response.data[0]['product_id'] == response.data[0]['selected']) {
                        _this.Disablecontinue = false;
                        _this.DSdiv1 = "rgb(42, 194, 119)";
                        _this.DSdiv2 = "#ffffff";
                        _this.Dborder1 = '1px solid #60cd66';
                        _this.Dborder2 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDs1 = "white";
                        _this.tDs2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.dsid = '';
                        _this.dsid = _this.dsid1;
                        _this.dsqty = '';
                        _this.dsqty = _this.dsqty1;
                        _this.dbid = '';
                        _this.dbqty = '';
                    }
                    if (response.data[1]['product_id'] == response.data[1]['selected']) {
                        _this.Disablecontinue = false;
                        _this.DSdiv1 = "#ffffff";
                        _this.DSdiv2 = "rgb(42, 194, 119)";
                        _this.Dborder2 = '1px solid #60cd66';
                        _this.Dborder1 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDs1 = "black";
                        _this.tDs2 = "white";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.dsid = '';
                        _this.dsid = _this.dsid2;
                        _this.dsqty = '';
                        _this.dsqty = _this.dsqty2;
                        _this.dbid = '';
                        _this.dbqty = '';
                    }
                }
                else {
                    if (localStorage.getItem('displayProducts') == null || localStorage.getItem('displayProducts') == null) {
                        if (response.data[2]['default'] == 'on') {
                            _this.LBdiv1 = "rgb(255, 255, 255)";
                            _this.Lborder3 = '1px solid #000';
                            _this.Lborder4 = '1px solid #000';
                            _this.tlb1 = "black";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.lbid = ""; //response.data[2]['product_id']
                            _this.lbqty = ""; //response.data[2]['product_quantity']
                            _this.Disablecontinue = false;
                            _this.lunchdes = response.data[2]['description'];
                            _this.lunchinfo = response.data[2]['information'];
                            if (_this.lunchinfo == "") {
                                _this.lunchinfobool = true;
                            }
                        }
                        // if (response.data[1]['default'] == 'on') {
                        //   this.LBdiv2 = "rgb(42, 194, 119)"
                        //   this.Lborder4 = '1px solid #60cd66';
                        //   this.Lborder3 = '1px solid #000';
                        //   this.tlb2 = "white";
                        //   this.conbut1 = "rgb(242, 155, 17)"
                        //   this.lbid = response.data[1]['product_id']
                        //   this.lbqty = response.data[1]['product_quantity']
                        //   this.Disablecontinue = false;
                        // }
                        if (response.data[0]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.LSdiv1 = "rgb(42, 194, 119)";
                            _this.Lborder1 = '1px solid #60cd66';
                            _this.Lborder2 = '1px solid #000';
                            _this.tls1 = "white";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.lsid = response.data[0]['product_id'];
                            _this.lsqty = response.data[0]['product_quantity'];
                            _this.lunchdes1 = response.data[0]['description'];
                        }
                        if (response.data[1]['default'] == 'on') {
                            _this.Lborder2 = '1px solid #60cd66';
                            _this.Lborder1 = '1px solid #000';
                            _this.Disablecontinue = false;
                            _this.LSdiv2 = "rgb(42, 194, 119)";
                            _this.tls2 = "white";
                            _this.conbut1 = "rgb(242, 155, 17)";
                            _this.lsid = response.data[1]['product_id'];
                            _this.lsqty = response.data[1]['product_quantity'];
                            _this.lunchdes2 = response.data[1]['description'];
                        }
                        if (response.data[5]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.DBdiv1 = "rgb(255, 255, 255)";
                            _this.Dborder3 = '1px solid #000';
                            _this.Dborder4 = '1px solid #000';
                            _this.tDb1 = "black";
                            _this.dbid = ""; //response.data[5]['product_id']
                            _this.dbqty = ""; //response.data[5]['product_quantity']
                            _this.dinnerdes = response.data[5]['description'];
                            _this.dinnerinfo = response.data[5]['information'];
                            if (_this.dinnerinfo == "") {
                                _this.dinnerinfobool = true;
                            }
                        }
                        // if (response.data[1]['default'] == 'on') {
                        //   this.Disablecontinue = false
                        //   this.DBdiv2 = "rgb(42, 194, 119)"
                        //   this.Dborder4 = '1px solid #60cd66';
                        //   this.Dborder3 = '1px solid #000';
                        //   this.tDb1 = "black";
                        //   this.tDb2 = "white";
                        //   this.dbid = response.data[1]['product_id']
                        //   this.dbqty = response.data[1]['product_quantity']
                        // }
                        if (response.data[3]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.DSdiv1 = "rgb(42, 194, 119)";
                            _this.Dborder1 = '1px solid #60cd66';
                            _this.Dborder2 = '1px solid #000';
                            _this.tDs1 = "white";
                            _this.dsid = response.data[3]['product_id'];
                            _this.dsqty = response.data[3]['product_quantity'];
                            _this.dinnerdes1 = response.data[3]['description'];
                        }
                        if (response.data[4]['default'] == 'on') {
                            _this.Disablecontinue = false;
                            _this.DSdiv2 = "rgb(42, 194, 119)";
                            _this.Dborder2 = '1px solid #60cd66';
                            _this.Dborder1 = '1px solid #000';
                            _this.tDs2 = "white";
                            _this.dsid = response.data[4]['product_id'];
                            _this.dsqty = response.data[4]['product_quantity'];
                            _this.dinnerdes2 = response.data[4]['description'];
                        }
                    }
                    _this.dinnerinfo = response.data[5]['information'];
                    if (_this.dinnerinfo == "") {
                        _this.dinnerinfobool = true;
                    }
                    _this.lunchinfo = response.data[2]['information'];
                    if (_this.lunchinfo == "") {
                        _this.lunchinfobool = true;
                    }
                    _this.lunchdes = response.data[2]['description'];
                    //this.lunchbread2 = response.data[1]['product_name'];
                    _this.lunchdes1 = response.data[0]['description'];
                    _this.lunchdes2 = response.data[1]['description'];
                    _this.dinnerdes = response.data[5]['description'];
                    //this.lunchbread2 = response.data[1]['product_name'];
                    _this.dinnerdes1 = response.data[3]['description'];
                    _this.dinnerdes2 = response.data[4]['description'];
                    _this.lunchbread1 = response.data[2]['product_name'];
                    // this.lunchbread2 = response.data[1]['product_name']
                    _this.lunchsabji1 = response.data[0]['product_name'];
                    _this.lunchsabji2 = response.data[1]['product_name'];
                    _this.dinnerbread1 = response.data[5]['product_name'];
                    // this.dinnerbread2 = response.data[1]['product_name']
                    _this.dinnersabji1 = response.data[3]['product_name'];
                    _this.dinnersabji2 = response.data[4]['product_name'];
                    _this.lbid1 = response.data[2]['product_id'];
                    // this.lbid2 = response.data[1]['product_id']
                    _this.lsid1 = response.data[0]['product_id'];
                    _this.lsid2 = response.data[1]['product_id'];
                    _this.dbid1 = response.data[5]['product_id'];
                    // this.dbid2 = response.data[1]['product_id']
                    _this.dsid1 = response.data[3]['product_id'];
                    _this.dsid2 = response.data[4]['product_id'];
                    _this.lbqty1 = response.data[2]['product_quantity'];
                    // this.lbqty2 = response.data[1]['product_quantity']
                    _this.lsqty1 = response.data[0]['product_quantity'];
                    _this.lsqty2 = response.data[1]['product_quantity'];
                    _this.dbqty1 = response.data[5]['product_quantity'];
                    // this.dbqty2 = response.data[1]['product_quantity']
                    _this.dsqty1 = response.data[3]['product_quantity'];
                    _this.dsqty2 = response.data[4]['product_quantity'];
                    _this.lunchorderid = response.data[6]['lunchh_order_id'];
                    _this.dinnerorderid = response.data[6]['dinner_order_id'];
                    if (response.data[2]['product_id'] == response.data[2]['selected']) {
                        _this.Disablecontinue = false;
                        _this.LBdiv1 = "rgb(42, 194, 119)";
                        _this.LBdiv2 = "#ffffff";
                        _this.Lborder3 = '1px solid #60cd66';
                        _this.Lborder4 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tlb1 = "white";
                        _this.tlb2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.lbid = '';
                        _this.lbid = _this.lbid1;
                        _this.lbqty = '';
                        _this.lbqty = _this.lbqty1;
                        _this.LSdiv1 = "#ffffff";
                        _this.LSdiv2 = "#ffffff";
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tls1 = "black";
                        _this.tls2 = "black";
                        _this.Lborder1 = '1px solid #000';
                        _this.Lborder2 = '1px solid #000';
                        console.log('1');
                        _this.lsid = '';
                        _this.lsqty = '';
                    }
                    // if (response.data[1]['product_id'] == response.data[1]['lunchselected']) {
                    //   this.Disablecontinue = false
                    //   this.LBdiv1 = "#ffffff"
                    //   this.LBdiv2 = "rgb(42, 194, 119)"
                    //   this.Lborder4 = '1px solid #60cd66';
                    //   this.Lborder3 = '1px solid #000';
                    //   this.conbut1 = "rgb(242, 155, 17)"
                    //   this.tlb1 = "black"
                    //   this.tlb2 = "white";
                    //   this.butconfirm = true
                    //   this.butcont = false;
                    //   this.lbid = ''
                    //   this.lbid = this.lbid2
                    //   this.lbqty = ''
                    //   this.lbqty = this.lbqty2
                    // }
                    if (response.data[0]['product_id'] == response.data[0]['selected']) {
                        _this.Disablecontinue = false;
                        _this.LSdiv1 = "rgb(42, 194, 119)";
                        _this.LSdiv2 = "#ffffff";
                        _this.Lborder1 = '1px solid #60cd66';
                        _this.Lborder2 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tls1 = "white";
                        _this.tls2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.lsid = '';
                        _this.lsid = _this.lsid1;
                        _this.lsqty = '';
                        _this.lsqty = _this.lsqty1;
                        _this.lbid = '';
                        _this.lbqty = '';
                        console.log('2');
                    }
                    if (response.data[1]['product_id'] == response.data[1]['selected']) {
                        _this.Disablecontinue = false;
                        _this.LSdiv1 = "#ffffff";
                        _this.LSdiv2 = "rgb(42, 194, 119)";
                        _this.Lborder2 = '1px solid #60cd66';
                        _this.Lborder1 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tls1 = "black";
                        _this.tls2 = "white";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.lsid = '';
                        _this.lsid = _this.lsid2;
                        _this.lsqty = '';
                        _this.lsqty = _this.lsqty2;
                        console.log('3');
                        _this.lbid = '';
                        _this.lbqty = '';
                    }
                    if (response.data[5]['product_id'] == response.data[5]['selected']) {
                        _this.Disablecontinue = false;
                        _this.DBdiv1 = "rgb(42, 194, 119)";
                        _this.DBdiv2 = "#ffffff";
                        _this.Dborder3 = '1px solid #60cd66';
                        _this.Dborder4 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDb1 = "white";
                        _this.tDb2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.dbid = '';
                        _this.dbid = _this.dbid1;
                        _this.dbqty = '';
                        _this.dbqty = _this.dbqty1;
                        _this.DSdiv1 = "#ffffff";
                        _this.DSdiv2 = "#ffffff";
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDs1 = "black";
                        _this.tDs2 = "black";
                        _this.Dborder2 = '1px solid #000';
                        _this.Dborder1 = '1px solid #000';
                        console.log('4');
                        _this.dsid = '';
                        _this.dsqty = '';
                    }
                    // if (response.data[1]['product_id'] == response.data[1]['dinnerselected']) {
                    //   this.Disablecontinue = false;
                    //   this.DBdiv1 = "#ffffff"
                    //   this.DBdiv2 = "rgb(42, 194, 119)"
                    //   this.Dborder4 = '1px solid #60cd66';
                    //   this.Dborder3 = '1px solid #000';
                    //   this.conbut1 = "rgb(242, 155, 17)"
                    //   this.tDb1 = "black"
                    //   this.tDb2 = "white";
                    //   this.butconfirm = true
                    //   this.butcont = false;
                    //   this.dbid = ''
                    //   this.dbid = this.dbid2
                    //   this.dbqty = ''
                    //   this.dbqty = this.dbqty2
                    // }
                    if (response.data[3]['product_id'] == response.data[3]['selected']) {
                        _this.Disablecontinue = false;
                        _this.DSdiv1 = "rgb(42, 194, 119)";
                        _this.DSdiv2 = "#ffffff";
                        _this.Dborder1 = '1px solid #60cd66';
                        _this.Dborder2 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDs1 = "white";
                        _this.tDs2 = "black";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.dsid = '';
                        _this.dsid = _this.dsid1;
                        _this.dsqty = '';
                        _this.dsqty = _this.dsqty1;
                        console.log('5');
                        _this.dbid = '';
                        _this.dbqty = '';
                    }
                    if (response.data[4]['product_id'] == response.data[4]['selected']) {
                        _this.Disablecontinue = false;
                        _this.DSdiv1 = "#ffffff";
                        _this.DSdiv2 = "rgb(42, 194, 119)";
                        _this.Dborder2 = '1px solid #60cd66';
                        _this.Dborder1 = '1px solid #000';
                        _this.conbut1 = "rgb(242, 155, 17)";
                        _this.tDs1 = "black";
                        _this.tDs2 = "white";
                        _this.butconfirm = true;
                        _this.butcont = false;
                        _this.dsid = '';
                        _this.dsid = _this.dsid2;
                        _this.dsqty = '';
                        _this.dsqty = _this.dsqty2;
                        console.log('6');
                        _this.dbid = '';
                        _this.dbqty = '';
                    }
                }
            }
            else {
                _this.util.alert(_this.translate.instant(response.message), '');
                _this.navCtrl.setRoot('DashboardPage');
            }
        }, function (response) {
            _this.conmessage = response.message;
            _this.showConfirmAlert2();
            _this.util.hideLoader();
        });
    };
    PicktmrwvegiesPage.prototype.onclicklunchbread1 = function () {
        if (this.mealid == 3 || this.mealid == 1) {
            if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you."), '');
                return;
            }
        }
        this.LBdiv1 = "rgb(42, 194, 119)";
        this.LBdiv2 = "#ffffff";
        this.Disablecontinue = false;
        this.conbut1 = "rgb(242, 155, 17)";
        this.tlb1 = "white";
        this.tlb2 = "black";
        this.lbid = '';
        this.lbid = this.lbid1;
        this.lbqty = '';
        this.lbqty = this.lbqty1;
        this.butconfirm = false;
        this.butcont = true;
        this.lsid = "";
        this.lsid = "";
        this.LSdiv1 = "#ffffff";
        this.LSdiv2 = "#ffffff";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tls1 = "black";
        this.tls2 = "black";
        this.Lborder1 = '1px solid #000';
        this.Lborder2 = '1px solid #000';
        localStorage.setItem('secondbread', 'out');
        localStorage.setItem('firstbread', 'in');
        if (this.mealid == 1) {
            var x = document.getElementById('lunchbread1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('lunchbread1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        if (this.mealid == 1) {
            var x = document.getElementById('lunchsabji1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('lunchsabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('lunchsabji1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('lunchsabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclicklunchbread2 = function () {
        if (this.mealid == 3 || this.mealid == 1) {
            if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you."), '');
                return;
            }
        }
        this.Disablecontinue = false;
        this.LBdiv1 = "#ffffff";
        this.LBdiv2 = "rgb(42, 194, 119)";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tlb1 = "black";
        this.tlb2 = "white";
        this.lbid = '';
        this.lbid = this.lbid2;
        this.lbqty = '';
        this.lbqty = this.lbqty2;
        this.butconfirm = false;
        this.butcont = true;
        localStorage.setItem('secondbread', 'in');
        localStorage.setItem('firstbread', 'out');
        if (this.mealid == 1) {
            var x = document.getElementById('lunchbread2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchbread1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('lunchbread2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchbread1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclicklunchsabji1 = function () {
        if (this.mealid == 3 || this.mealid == 1) {
            if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you."), '');
                return;
            }
        }
        this.Disablecontinue = false;
        localStorage.setItem('secondsabji', 'out');
        localStorage.setItem('firstsabju', 'in');
        this.LSdiv1 = "rgb(42, 194, 119)";
        this.LSdiv2 = "#ffffff";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tls1 = "white";
        this.tls2 = "black";
        this.lsid = '';
        this.lsid = this.lsid1;
        this.lsqty = '';
        this.lsqty = this.lsqty1;
        this.butconfirm = false;
        this.butcont = true;
        this.lbid = "";
        this.lbqty = "";
        this.LBdiv1 = "rgb(255, 255, 255)";
        this.Lborder3 = '1px solid #000';
        this.Lborder4 = '1px solid #000';
        this.tlb1 = "black";
        this.conbut1 = "rgb(242, 155, 17)";
        if (this.mealid == 1) {
            var x = document.getElementById('lunchsabji1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchsabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('lunchsabji1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchsabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        if (this.mealid == 1) {
            var x = document.getElementById('lunchbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('lunchbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('lunchbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('lunchbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclicklunchsabji2 = function () {
        if (this.mealid == 3 || this.mealid == 1) {
            if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you."), '');
                return;
            }
        }
        this.LSdiv1 = "#ffffff";
        this.Disablecontinue = false;
        localStorage.setItem('secondsabji', 'in');
        localStorage.setItem('firstsabju', 'out');
        this.LSdiv2 = "rgb(42, 194, 119)";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tls1 = "black";
        this.tls2 = "white";
        this.lsid = '';
        this.lsid = this.lsid2;
        this.lsqty = '';
        this.lsqty = this.lsqty2;
        this.butconfirm = false;
        this.butcont = true;
        this.lbid = "";
        this.lbqty = "";
        this.LBdiv1 = "rgb(255, 255, 255)";
        this.Lborder3 = '1px solid #000';
        this.Lborder4 = '1px solid #000';
        this.tlb1 = "black";
        this.conbut1 = "rgb(242, 155, 17)";
        if (this.mealid == 1) {
            var x = document.getElementById('lunchsabji2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchsabji1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('lunchsabji2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('lunchsabji1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        if (this.mealid == 1) {
            var x = document.getElementById('lunchbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('lunchbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('lunchbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('lunchbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclickdinnerbread1 = function () {
        if (this.mealid == 3 || this.mealid == 2) {
            if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you"), '');
                return;
            }
            else {
                if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                    this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                    return;
                }
            }
        }
        else {
            // alert('in');
            // alert(localStorage.getItem('notcanceldinnerdate'));
            if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                return;
            }
        }
        this.Disablecontinue = false;
        localStorage.setItem('secondbread1', 'out');
        localStorage.setItem('firstbread1', 'in');
        this.DBdiv1 = "rgb(42, 194, 119)";
        this.DBdiv2 = "#ffffff";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tDb1 = "white";
        this.tDb2 = "black";
        this.dbid = '';
        this.dbid = this.dbid1;
        this.dbqty = '';
        this.dbqty = this.dbqty1;
        this.butconfirm = false;
        this.butcont = true;
        this.dsid = "";
        this.dsqty = "";
        this.DSdiv1 = "#ffffff";
        this.DSdiv2 = "#ffffff";
        this.Dborder2 = '1px solid #000';
        this.Dborder1 = '1px solid #000';
        this.conbut1 = "rgb(242, 155, 17)";
        this.tDs1 = "black";
        this.tDs2 = "black";
        if (this.mealid == 2) {
            var x = document.getElementById('dinnerbread1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnerbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('dinnerbread1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnerbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        if (this.mealid == 2) {
            var x = document.getElementById('dinnersabji1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('dinnersabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('dinnersabji1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('dinnersabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclickdinnerbread2 = function () {
        if (this.mealid == 3 || this.mealid == 2) {
            if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you"), '');
                return;
            }
            else {
                if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                    this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                    return;
                }
            }
        }
        else {
            if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                return;
            }
        }
        this.Disablecontinue = false;
        localStorage.setItem('secondbread1', 'in');
        localStorage.setItem('firstbread1', 'out');
        this.DBdiv1 = "#ffffff";
        this.DBdiv2 = "rgb(42, 194, 119)";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tDb1 = "black";
        this.tDb2 = "white";
        this.dbid = '';
        this.dbid = this.dbid2;
        this.dbqty = '';
        this.dbqty = this.dbqty2;
        this.butconfirm = false;
        this.butcont = true;
        if (this.mealid == 2) {
            var x = document.getElementById('dinnerbread2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnerbread1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('dinnerbread2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnerbread1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclickdinnersabji1 = function () {
        if (this.mealid == 3 || this.mealid == 2) {
            if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you"), '');
                return;
            }
            else {
                if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                    this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                    return;
                }
            }
        }
        else {
            if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                return;
            }
        }
        this.Disablecontinue = false;
        localStorage.setItem('secondsabji1', 'out');
        localStorage.setItem('firstsabju1', 'in');
        this.DSdiv1 = "rgb(42, 194, 119)";
        this.DSdiv2 = "#ffffff";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tDs1 = "white";
        this.tDs2 = "black";
        this.dsid = '';
        this.dsid = this.dsid1;
        this.dsqty = '';
        this.dsqty = this.dsqty1;
        this.butconfirm = false;
        this.butcont = true;
        this.dbid = "";
        this.dbqty = "";
        this.DBdiv1 = "rgb(255, 255, 255)";
        this.Dborder3 = '1px solid #000';
        this.Dborder4 = '1px solid #000';
        this.tDb1 = "black";
        if (this.mealid == 2) {
            var x = document.getElementById('dinnersabji1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnersabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('dinnersabji1');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnersabji2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        if (this.mealid == 2) {
            var x = document.getElementById('dinnerbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('dinnerbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('dinnerbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('dinnerbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclickdinnersabji2 = function () {
        if (this.mealid == 3 || this.mealid == 2) {
            if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
                this.util.alert(this.translate.instant("This meal is cancelled by you"), '');
                return;
            }
            else {
                if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                    this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                    return;
                }
            }
        }
        else {
            if (localStorage.getItem('notcanceldinnerdate') != null && localStorage.getItem('notcanceldinnerdate') != null) {
                this.util.alert(this.translate.instant("Sorry, You have no extra meals left. Please renew your plan."), '');
                return;
            }
        }
        this.Disablecontinue = false;
        localStorage.setItem('secondsabji1', 'in');
        localStorage.setItem('firstsabju1', 'out');
        this.DSdiv1 = "#ffffff";
        this.DSdiv2 = "rgb(42, 194, 119)";
        this.conbut1 = "rgb(242, 155, 17)";
        this.tDs1 = "black";
        this.tDs2 = "white";
        this.dsid = '';
        this.dsid = this.dsid2;
        this.dsqty = '';
        this.dsqty = this.dsqty2;
        this.butconfirm = false;
        this.butcont = true;
        this.dbid = "";
        this.dbqty = "";
        this.DBdiv1 = "rgb(255, 255, 255)";
        this.Dborder3 = '1px solid #000';
        this.Dborder4 = '1px solid #000';
        this.tDb1 = "black";
        if (this.mealid == 2) {
            var x = document.getElementById('dinnersabji2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnersabji1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('dinnersabji2');
            if (x) {
                x.style.border = '1px solid #60cd66';
            }
            var y = document.getElementById('dinnersabji1');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        if (this.mealid == 2) {
            var x = document.getElementById('dinnerbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('dinnerbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
        else if (this.mealid == 3) {
            var x = document.getElementById('dinnerbread1');
            if (x) {
                x.style.border = '1px solid #000';
            }
            var y = document.getElementById('dinnerbread2');
            if (y) {
                y.style.border = '1px solid #000';
            }
        }
    };
    PicktmrwvegiesPage.prototype.onclickcontinue = function () {
        var _this = this;
        if (this.mealid == 1) {
            this.apiService.selectedlunchveggies(this.custid, this.custToken, this.cust_sub_id, this.subid, this.custtype, this.lbid, this.lbqty, this.lsid, this.lsqty, this.mealid, this.lunchorderid, this.dinnerorderid).then(function (res) {
                if (res.success) {
                    _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                    _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                    _this.conmessage = res.message;
                    localStorage.setItem('canceldinnertype', '');
                    localStorage.setItem('cancellunchtype', '');
                    _this.showConfirmAlert();
                    if (_this.conmessage != "order not valid for that date.") {
                        _this.displayProducts = 'true';
                        localStorage.removeItem('displayProducts');
                        localStorage.setItem('displayProducts', _this.displayProducts);
                    }
                }
                else {
                    _this.util.alert(res.message, '');
                }
            }, function (res) {
                _this.conmessage = res.message;
                _this.showConfirmAlert2();
            });
        }
        if (this.mealid == 2) {
            this.apiService.selectedDinnerveggies(this.custid, this.custToken, this.cust_sub_id, this.subid, this.custtype, this.dbid, this.dbqty, this.dsid, this.dsqty, this.mealid, this.lunchorderid, this.dinnerorderid).then(function (res) {
                if (res.success) {
                    _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                    _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                    _this.conmessage = res.message;
                    localStorage.setItem('canceldinnertype', '');
                    localStorage.setItem('cancellunchtype', '');
                    _this.showConfirmAlert();
                    if (_this.conmessage != "order not valid for that date.") {
                        _this.displayProducts = 'true';
                        localStorage.removeItem('displayProducts');
                        localStorage.setItem('displayProducts', _this.displayProducts);
                    }
                }
                else {
                    _this.conmessage = res.message;
                    _this.showConfirmAlert2();
                }
            }, function (res) {
                _this.conmessage = res.message;
                _this.showConfirmAlert2();
            });
        }
        if (this.mealid == 3) {
            this.cancelmealtype = localStorage.getItem('cancellunchtype');
            this.cancelmealtype2 = localStorage.getItem('notcanceldinnertype');
            console.log(this.cancelmealtype);
            console.log(this.cancelmealtype2);
            if (this.cancelmealtype == '' || this.cancelmealtype == 'null' || this.cancelmealtype == null || this.cancelmealtype == 'undefined') {
                this.cancelmealtype = localStorage.getItem('canceldinnertype');
            }
            if (this.cancelmealtype2 != '' && this.cancelmealtype2 != 'null' && this.cancelmealtype2 != null && this.cancelmealtype2 != 'undefined') {
                this.cancelmealtype = localStorage.getItem('notcanceldinnertype');
            }
            console.log(this.cancelmealtype);
            this.apiService.selectedveggies(this.custid, this.custToken, this.cust_sub_id, this.subid, this.custtype, this.lbid, this.lbqty, this.lsid, this.lsqty, this.dbid, this.dbqty, this.dsid, this.dsqty, this.mealid, this.lunchorderid, this.dinnerorderid, this.cancelmealtype).then(function (res) {
                if (res.success) {
                    _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                    _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                    _this.conmessage = res.message;
                    _this.showConfirmAlert();
                    localStorage.setItem('canceldinnertype', '');
                    localStorage.setItem('cancellunchtype', '');
                    if (_this.conmessage != "order not valid for that date.") {
                        _this.displayProducts = 'true';
                        localStorage.removeItem('displayProducts');
                        localStorage.setItem('displayProducts', _this.displayProducts);
                    }
                }
                else {
                    _this.conmessage = res.message;
                    _this.showConfirmAlert2();
                }
            }, function (res) {
                _this.conmessage = res.message;
                _this.showConfirmAlert2();
            });
        }
    };
    PicktmrwvegiesPage.prototype.Back = function () {
        if (this.activeGuestMeal == true) {
            var y = document.getElementById('idscripts');
            if (y) {
                y.classList.remove("idscript");
            }
            this.activeMyMeal = true;
            this.activeGuestMeal = false;
            this.pickvegiclick();
        }
        else {
            localStorage.setItem('firstbread', '');
            localStorage.setItem('secondbread', '');
            localStorage.setItem('firstbread1', '');
            localStorage.setItem('secondbread1', '');
            localStorage.setItem('firstsabju', '');
            localStorage.setItem('secondsabji', '');
            localStorage.setItem('firstsabju1', '');
            localStorage.setItem('secondsabji1', '');
            this.navCtrl.setRoot('DashboardPage');
        }
    };
    PicktmrwvegiesPage.prototype.onClickMyMeal = function () {
        this.activeMyMeal = true;
        this.activeGuestMeal = false;
        var y = document.getElementById('idscripts');
        if (y) {
            y.classList.remove("idscript");
        }
        this.pickvegiclick();
        // if(localStorage.getItem('firstbread')=='in')
        // {
        //     this.Lborder3= '1px solid #60cd66';
        //     this.LBdiv1='rgb(42, 194, 119)';
        //     this.tlb1='white';
        // }
        // else if(localStorage.getItem('firstbread')=='out'){
        //     this.Lborder3= '1px solid #000';
        //     this.LBdiv1='#fff';
        //     this.tlb1='#000';
        // }
        // if(localStorage.getItem('secondbread')=='in')
        // {
        //  this.Lborder4= '1px solid #60cd66';
        //   this.LBdiv2='rgb(42, 194, 119)';
        //   this.tlb2 ="white";
        // }
        // else if(localStorage.getItem('secondbread')=='out'){
        //   this.Lborder4= '1px solid #000';
        //   this.LBdiv2='#fff';
        //   this.tlb2 ="#000";
        // }
        // if(localStorage.getItem('firstbread1')=='in')
        // {
        //     this.Dborder3= '1px solid #60cd66';
        //     this.DBdiv1='rgb(42, 194, 119)';
        //     this.tDb1='white';
        // }
        // else if(localStorage.getItem('firstbread1')=='out'){
        //     this.Dborder3= '1px solid #000';
        //     this.DBdiv1='#fff';
        //     this.tDb1='#000';
        // }
        // if(localStorage.getItem('secondbread1')=='in')
        // {
        //  this.Dborder4= '1px solid #60cd66';
        //   this.DBdiv2='rgb(42, 194, 119)';
        //   this.tDb2 ="white";
        // }
        // else if(localStorage.getItem('secondbread1')=='out'){
        //   this.Dborder4= '1px solid #000';
        //   this.DBdiv2='#fff';
        //   this.tDb2 ="#000";
        // }
        // if(localStorage.getItem('firstsabju')=='in')
        // {
        //     this.Lborder1= '1px solid #60cd66';
        //     this.LSdiv1='rgb(42, 194, 119)';
        //     this.tls1='white';
        // }
        // else if(localStorage.getItem('firstsabju')=='out'){
        //     this.Lborder1= '1px solid #000';
        //     this.LSdiv1='#fff';
        //     this.tls1='#000';
        // }
        // if(localStorage.getItem('secondsabji')=='in')
        // {
        //  this.Lborder2= '1px solid #60cd66';
        //   this.LSdiv2='rgb(42, 194, 119)';
        //   this.tls2 ="white";
        // }
        // else if(localStorage.getItem('secondsabji')=='out'){
        //   this.Lborder2= '1px solid #000';
        //   this.LSdiv2='#fff';
        //   this.tls2 ="#000";
        // }
        // if(localStorage.getItem('firstsabju1')=='in')
        // {
        //     this.Dborder1= '1px solid #60cd66';
        //     this.DSdiv1='rgb(42, 194, 119)';
        //     this.tDs1='white';
        // }
        // else if(localStorage.getItem('firstsabju1')=='out'){
        //     this.Dborder1= '1px solid #000';
        //     this.DSdiv1='#fff';
        //     this.tDs1='#000';
        // }
        // if(localStorage.getItem('secondsabji1')=='in')
        // {
        //  this.Dborder2= '1px solid #60cd66';
        //   this.DSdiv2='rgb(42, 194, 119)';
        //   this.tDs2 ="white";
        // }
        // else if(localStorage.getItem('secondsabji1')=='out'){
        //   this.Dborder2= '1px solid #000';
        //   this.DSdiv2='#fff';
        //   this.tDs2 ="#000";
        // }
    };
    PicktmrwvegiesPage.prototype.onClickGuestMeal = function () {
        var _this = this;
        this.guestmeal1 = "white";
        this.guestmeal2 = "gray";
        this.activeMyMeal = false;
        this.activeGuestMeal = true;
        var history = '0';
        var y = document.getElementById('idscripts');
        if (y) {
            y.classList.add("idscript");
        }
        this.apiService.guestMealHistory(this.custToken, this.custid, history).then(function (res) {
            _this.guestMealArray = res['data'];
            if (_this.guestMealArray == '' || _this.guestMealArray == null) {
                _this.showData = true;
            }
            else {
                _this.showData = false;
            }
        }).catch(function (res) {
            _this.conmessage = res.message;
            _this.showConfirmAlert2();
        });
    };
    PicktmrwvegiesPage.prototype.onclickQuestMeal = function () {
        this.navCtrl.setRoot('OrderGuestMealPage');
    };
    PicktmrwvegiesPage.prototype.showConfirmAlert = function () {
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
                                    text: 'Ok',
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
    PicktmrwvegiesPage.prototype.showConfirmAlert2 = function () {
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
                                    text: 'Ok',
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
    PicktmrwvegiesPage.prototype.divdisplay = function () {
        // if(this.divdisplays==0)
        // {
        this.divdisplays = 1;
        if (this.lunchinfo == null || this.lunchinfo == "") {
            this.lunchinfo = "No data";
        }
        this.util.alert(this.translate.instant(this.lunchinfo), '');
        // }
        // else{
        //   this.divdisplays=0;
        // }
    };
    PicktmrwvegiesPage.prototype.divdisplay1 = function () {
        // if(this.divdisplays1==0)
        // {
        this.divdisplays1 = 1;
        console.log(this.dinnerinfo);
        if (this.dinnerinfo == null || this.dinnerinfo == "") {
            this.dinnerinfo = "No data";
        }
        this.util.alert(this.translate.instant(this.dinnerinfo), '');
        // }
        // else{
        //   this.divdisplays1=0;
        // }
    };
    PicktmrwvegiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-picktmrwvegies',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/picktmrwvegies/picktmrwvegies.html"*/'<ion-header no-border class="dit-type-header pickheader">\n  <ion-navbar class="picknav">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>TOMMOROW\'S MEAL</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-vaggies">\n  <ion-grid class="main-vaggies-first-grid">\n    <ion-row>\n      <div class="heading-pickvaggies">\n        <p>Choose your choice of</p>\n        <h2>Veggies</h2>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <div class="mainDiv">\n    <ion-row class="heading-pickvaggies-label" style="padding: 0 1.4vh 0vh 1.4vh">\n      <ion-col text-center>\n        <div [style.color]="activeMyMeal ? mymeal1:mymeal2" (click)="onClickMyMeal()">\n          <label>My Meal</label>\n        </div>\n      </ion-col>\n      <ion-col text-center>\n        <div [style.color]="activeGuestMeal ? guestmeal1:guestmeal2" (click)="onClickGuestMeal()">\n          <label>Guest Meal\n          </label>\n        </div>\n      </ion-col>\n    </ion-row>\n \n  <div class="pick-vagies-containt text-center" *ngIf="activeMyMeal">\n    \n      <ion-row class="fix-pick-vegie">\n        <ion-col style="padding: 0;" text-center>\n          <p [class]="activeMyMeal ? mymeal1:mymeal2"></p>\n        </ion-col>\n        <ion-col style="padding: 0;" text-center>\n          <p style="padding: 0;"></p>\n        </ion-col>\n      </ion-row>\n    \n      <div *ngIf="Activelunch" style="    margin: 0 4vw;">\n        <ion-grid style="padding: 0;">\n          <ion-row>\n            <ion-col style="padding:0;">\n              <label>\n                <h5 class="lunch-heading" style="margin-top: 5.247376311844078vh;margin-bottom: 1.4992503748125936vh;">LUNCH</h5>\n              </label>\n            </ion-col>\n          </ion-row>\n\n        <ion-row>\n          <ion-col style="padding: 0;">\n            <label class="lunch-label">Choose your veggie</label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div id="lunchsabji1" class="meal-list" block [style.border]="Lborder1"  [style.background]="LSdiv1" [style.color]="tls1"\n              (click)=" onclicklunchsabji1()">\n              <p>{{lunchsabji1}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div id="lunchsabji2" class="meal-list" block [style.border]="Lborder2"  [style.background]="LSdiv2" [style.color]="tls2"\n              (click)=" onclicklunchsabji2()">\n              <p>{{lunchsabji2}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col>\n            <label class="lunch-label" style="position: relative;">Choose your Special Dish<ion-col *ngIf="lunchinfobool==false" (click)="divdisplay()" style="    padding: 0;margin-left: 5px;position: absolute;right: -9vw;top: -1vw;width: 7vw;"><img src="assets/imgicon/907141.jpg" style="max-width: 100%;"></ion-col></label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div id="lunchbread1" class="onboard-click meal-list2" [style.border]="Lborder3" block [style.background]="LBdiv1"\n              [style.color]="tlb1" (click)=" onclicklunchbread1()">\n              <p>{{lunchbread1}}</p>\n            </div>\n          </ion-col>\n          <ion-col col-12 class="special-text">\n            {{lunchdes}}\n          </ion-col>\n          <!-- <ion-col col-12 (click)="divdisplay()"><img src="assets/imgicon/907141.jpg" style="width: 4vh;"></ion-col> -->\n          <!-- <ion-col col-12 *ngIf="divdisplays==\'1\'">\n            <div id="lunchbread2" class="onboard-click meal-list2" style="border:1px solid #000;color:black;" block>\n              <p>{{lunchdes}}</p>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div style="margin: 3vh 4vw 0 4vw;" *ngIf="Activedinner">\n      <ion-grid style="padding: 0;">\n        <ion-row>\n          <ion-col>\n            <label>\n              <h5 class="lunch-heading">DINNER</h5>\n            </label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="padding-top: 0;">\n            <label class="lunch-label">Choose your veggie</label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <div id="dinnersabji1" class="onboard-click meal-list" [style.border]="Dborder1" block [style.background]="DSdiv1"\n              [style.color]="tDs1" (click)=" onclickdinnersabji1()">\n              <p>{{dinnersabji1}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div id="dinnersabji2" class="onboard-click meal-list" [style.border]="Dborder2" block [style.background]="DSdiv2"\n              [style.color]="tDs2" (click)=" onclickdinnersabji2()">\n              <p>{{dinnersabji2}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <label class="lunch-label" style="position: relative;">Choose your Special Dish <ion-col *ngIf="dinnerinfobool==false" (click)="divdisplay1()" style="    padding: 0;margin-left: 5px;position: absolute;right: -9vw;top: -1vw;width: 7vw;"><img src="assets/imgicon/907141.jpg" style="max-width: 100%;"></ion-col></label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div id="dinnerbread1" class="onboard-click meal-list2" [style.border]="Dborder3" block [style.background]="DBdiv1"\n              [style.color]="tDb1" (click)=" onclickdinnerbread1()">\n              <p>{{dinnerbread1}}</p>\n            </div> \n          </ion-col>\n          <ion-col col-12 class="special-text">\n            {{dinnerdes}}\n          </ion-col>\n          <!-- <ion-col col-12 (click)="divdisplay1()"><img src="assets/imgicon/907141.jpg" style="width: 4vh;"></ion-col> -->\n          <!-- <ion-col col-12 *ngIf="divdisplays1==\'1\'">\n            <div id="dinnerbread2" class="onboard-click meal-list2" block style="border:1px solid #000;color:black;" >\n              <p>{{dinnerdes}}</p>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-grid style="padding: 0;">\n      <ion-row>\n        <ion-col style="padding: 0;">\n          <button class="button-class" ion-button *ngIf="butcont" type="submit" id="input_submit" block\n            [style.background]="conbut1" [disabled]="Disablecontinue==true" (click)="onclickcontinue()" style="margin: 4.076086956521739vh 2.717391304347826vh 2.717391304347826vh; width: calc(100% - 5.4347vh);padding:0;">\n            Continue\n          </button>\n          <button *ngIf="butconfirm" ion-button type="submit" id="input_submit" [disabled]="Disablecontinue==true" block [style.background]="conbut1"\n            (click)="onclickcontinue()" style="    margin: 4.07609vh 5.333333333333333vw 2.71739vh;width: calc(100% - 5.4347vh); padding: 0px;background: rgb(242, 155, 17);">\n            Confirm\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="pick-vagies-containt guest-meal-area text-center" *ngIf="activeGuestMeal">\n    <ion-row class="fix-pick-vegie">\n      <ion-col style="padding: 0;" text-center>\n        <p style="padding: 0;"></p>\n      </ion-col>\n      <ion-col style="padding: 0;" text-center>\n        <p class="border-bold" style="padding: 0;"></p>\n      </ion-col>\n    </ion-row>\n    <div class="Guest-meal" *ngIf="showData==true" id="idscripts">\n\n      <ion-row>\n        <ion-col text-center>\n          <img src="assets/GuestNotOrdered.svg" alt="TrueMark" style="width: 27.66304347826087vh;height: 19.293478260869566vh;">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1>Guest Meal Not Ordered</h1>\n          <P>You have not ordered any guest meal for tomorrow\'s date. Order a guest meal soon!</P>\n        </ion-col>\n      </ion-row>\n\n      <ion-footer className="ion-no-border" class="footer-common">\n        <ion-toolbar>\n            <ion-row class="guestButton">\n              <ion-col>\n                <button class="orderclick" ion-button type="submit" block (click)="onclickQuestMeal()">\n                  Order Guest Meal\n                </button>\n              </ion-col>\n            </ion-row>\n            </ion-toolbar>\n            </ion-footer>\n    </div>\n\n    <ion-grid  *ngIf="showData==false" class="main-vaggies-second-grid">\n      <!-- <ion-row class="order-guesthistory">\n        <ion-col style="float:right;"></ion-col>\n        <ion-col><img src="assets/CancelOrder@3x.png"></ion-col>\n      </ion-row> -->\n      <div *ngFor="let mealTypes of guestMealArray; let i=index">\n        <ion-row>\n          <h4 class="order-number">ORDER - {{mealTypes.order_id}}</h4>\n        </ion-row>\n        <ion-row class="mealtype-margin-guest">\n          <h4 class="order-mealtype" style="text-transform: capitalize;">{{mealTypes.meal_type}}</h4>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-row class="order-on">ORDERED ON</ion-row>\n            <h4 class="order-date-time">{{mealTypes.date|date:\'dd-MM-yyyy\'}}</h4>\n          </ion-col>\n          <ion-col>\n            <ion-row class="order-on"> QUANTITY</ion-row>\n            <h4 class="order-date-time">{{mealTypes.quantity}}</h4>\n          </ion-col>\n          <ion-row>\n            <h4 class="total-order-price"> &#8377; {{mealTypes.total_amount}}</h4>\n          </ion-row>\n        </ion-row>\n        <hr /> \n      </div>\n      <ion-row class="guestButton" style="margin-bottom: 15px;">\n        <ion-col>\n          <button class="orderclick"  style="background-color:rgb(242, 155, 17);" ion-button type="submit" block  (click)="onclickQuestMeal()">\n            Order Guest Meal\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n  </div>\n\n</div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/picktmrwvegies/picktmrwvegies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], PicktmrwvegiesPage);
    return PicktmrwvegiesPage;
}());

//# sourceMappingURL=picktmrwvegies.js.map

/***/ })

});
//# sourceMappingURL=20.js.map