webpackJsonp([42],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosedeliveryaddressPageModule", function() { return ChoosedeliveryaddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choosedeliveryaddress__ = __webpack_require__(914);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChoosedeliveryaddressPageModule = (function () {
    function ChoosedeliveryaddressPageModule() {
    }
    ChoosedeliveryaddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choosedeliveryaddress__["a" /* ChoosedeliveryaddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choosedeliveryaddress__["a" /* ChoosedeliveryaddressPage */]),
            ],
        })
    ], ChoosedeliveryaddressPageModule);
    return ChoosedeliveryaddressPageModule;
}());

//# sourceMappingURL=choosedeliveryaddress.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosedeliveryaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
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
 * Generated class for the ChoosedeliveryaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoosedeliveryaddressPage = (function () {
    function ChoosedeliveryaddressPage(navCtrl, navParams, util, push, translate, storage, apiService, platform, viewCtrl, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.push = push;
        this.translate = translate;
        this.storage = storage;
        this.apiService = apiService;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.ionicApp = ionicApp;
        this.Hfalt = '';
        this.Hadd1 = '';
        this.Hadd2 = '';
        this.Hcity = '';
        this.Hstate = '';
        this.Haddtype = '';
        this.Hpincode = '';
        this.Wfalt = '';
        this.Wadd1 = '';
        this.Wadd2 = '';
        this.Wcity = '';
        this.Wstate = '';
        this.Waddtype = '';
        this.Wpincode = '';
        this.lunch = '';
        this.dinner = '';
        this.conbut1 = 'rgb(216,216,216)';
        this.pincode1 = '';
        this.pincode = '';
        this.activehome = false;
        this.activedinner = false;
        this.activehome1 = false;
        this.activedinner1 = false;
        this.pencilimghomelunch = "assets/imgicon/edit-black.svg";
        this.pencilimgworklunch = "assets/imgicon/edit-black.svg";
        this.pencilimghomedinner = "assets/imgicon/edit-black.svg";
        this.pencilimgworkdinner = "assets/imgicon/edit-black.svg";
        this.l1 = "0";
        this.l2 = "0";
        this.d1 = "0";
        this.d2 = "0";
        this.Lchecked1 = false;
        this.Lchecked2 = false;
        this.Dchecked1 = false;
        this.Dchecked2 = false;
        this.selectedhomelunch = navParams.get('selectforhomelunchis');
        this.selectedworklunch = navParams.get('selectorworklunchis');
        this.selectedhomedin = navParams.get('selectforhomedinis');
        this.selectedworkdin = navParams.get('selectorworkdinis');
        this.initializeBackButtonCustomHandler();
    }
    ChoosedeliveryaddressPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    ChoosedeliveryaddressPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    ChoosedeliveryaddressPage.prototype.ionViewDidLoad = function () {
    };
    ChoosedeliveryaddressPage.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
        this.mealtype = localStorage.getItem('mealType');
        this.Hfalt = localStorage.getItem('Hflatno');
        this.Hadd1 = localStorage.getItem('Haddline1');
        this.Hadd2 = localStorage.getItem('Haddline2');
        this.Hcity = localStorage.getItem('Hcity_id1');
        this.Hstate = localStorage.getItem('Hstate1');
        this.Haddtype = localStorage.getItem('Haddress_type1');
        this.Hpincode = localStorage.getItem('pincode');
        this.Wfalt = localStorage.getItem('Wflatno');
        this.Wadd1 = localStorage.getItem('Waddline1');
        this.Wadd2 = localStorage.getItem('Waddline2');
        this.Wcity = localStorage.getItem('Wcity_id1');
        this.Wstate = localStorage.getItem('Wstate1');
        this.Waddtype = localStorage.getItem('Waddress_type1');
        this.Wpincode = localStorage.getItem('workpincode');
        if (this.Hfalt == '' && this.Hadd1 == '' && this.Hadd2 == '') {
            this.homestring = '';
            this.disablebox = '0';
            localStorage.setItem('homeaddress_exist', this.disablebox);
        }
        else {
            this.homestring = this.Hfalt + ',' + this.Hadd1 + ',' + this.Hadd2 + ',' + this.Hcity + ',' + this.Hpincode;
            this.disablebox = '1';
            localStorage.setItem('homeaddress_exist', this.disablebox);
        }
        if (this.Wfalt == '' && this.Wadd1 == '' && this.Wadd2 == '') {
            this.workstring = '';
            this.disablebox2 = '0';
        }
        else {
            this.workstring = this.Wfalt + ',' + this.Wadd1 + ',' + this.Wadd2 + ',' + this.Wcity + ',' + this.Wpincode;
            this.disablebox2 = '1';
        }
        if (this.mealtype == "Both") {
            this.ActiveLunch = true;
            this.ActiveDinner = true;
        }
        else if (this.mealtype == "Lunch") {
            this.ActiveLunch = true;
            this.ActiveDinner = false;
        }
        else if (this.mealtype == "Dinner") {
            this.ActiveLunch = false;
            this.ActiveDinner = true;
        }
        //this.onLoadDeliveryAddessData();
        this.lunchhome = localStorage.getItem('Ladd');
        this.lunchwork = localStorage.getItem('Ladd');
        this.dinnerhome = localStorage.getItem('Dadd');
        this.dinnerwork = localStorage.getItem('Dadd');
        this.backfrmchkout = localStorage.getItem('backchooseaddress');
        this.lchk1 = localStorage.getItem('l1');
        this.lchk2 = localStorage.getItem('l2');
        this.dchk1 = localStorage.getItem('d1');
        this.dchk2 = localStorage.getItem('d2');
        if (this.mealtype == "Lunch") {
            if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null) {
                if (localStorage.getItem('backchooseaddress') != null) {
                    this.navCtrl.setRoot('CheckoutPage');
                    return;
                }
            }
        }
        if (this.mealtype == "Dinner") {
            if (localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
                if (localStorage.getItem('backchooseaddress') != null) {
                    this.navCtrl.setRoot('CheckoutPage');
                    return;
                }
            }
        }
        if (this.mealtype == "Both") {
            if ((localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null) && (localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null)) {
                if (localStorage.getItem('backchooseaddress') != null) {
                    this.navCtrl.setRoot('CheckoutPage');
                    return;
                }
            }
        }
        if (this.lunchhome == "Home Address") {
            this.Ldiv1 = "rgb(42, 194, 119)";
            this.Ldiv2 = "#ffffff";
            this.Ldiv11 = "activ2";
            this.Ldiv21 = "activ1";
            this.conbut1 = "rgb(242, 155, 17)";
            this.tl1 = "#fff";
            this.tl2 = "#000";
            //this.Activechk1 = true
            this.lunch = localStorage.getItem('homeid');
            this.th1 = "white";
            localStorage.removeItem('selworklun');
            localStorage.setItem('selhomelun', '1');
            //this.activehome = true
            this.activedinner = false;
            this.pencilimghomelunch = "assets/edit-2.png";
            this.Lchecked1 = false;
            this.Lchecked2 = false;
        }
        if (this.lunchwork == "Work Address") {
            this.Ldiv1 = "#ffffff";
            this.Ldiv2 = "rgb(42, 194, 119)";
            this.Ldiv11 = "activ1";
            this.Ldiv21 = "activ2";
            this.conbut1 = "rgb(242, 155, 17)";
            this.Activechk1 = true;
            this.lunch = localStorage.getItem('workid');
            this.tw1 = " white";
            this.tl1 = "#000";
            this.tl2 = "#fff";
            localStorage.removeItem('selhomelun');
            localStorage.setItem('selworklun', '2');
            this.activedinner = true;
            this.pencilimgworklunch = "assets/edit-2.png";
            if (this.lchk1 == "1") {
                this.Lchecked1 = true;
            }
            else {
                this.Lchecked1 = false;
            }
            if (this.lchk2 == "1") {
                this.Lchecked2 = true;
            }
            else {
                this.Lchecked2 = false;
            }
        }
        if (this.dinnerhome == "Home Address") {
            this.Ddiv1 = "rgb(42, 194, 119)";
            this.Ddiv2 = "#ffffff";
            this.Ddiv11 = "activ2";
            this.Ddiv21 = "activ1";
            this.conbut1 = "rgb(242, 155, 17)";
            this.dinner = localStorage.getItem('homeid');
            this.th2 = "white";
            this.td1 = "#fff";
            this.td2 = "#000";
            localStorage.removeItem('selworkdin');
            localStorage.setItem('selhomedin', '3');
            this.activedinner1 = false;
            this.pencilimghomedinner = "assets/edit-2.png";
            this.Dchecked1 = false;
            this.Dchecked2 = false;
        }
        if (this.dinnerwork == "Work Address") {
            this.Ddiv1 = "#ffffff";
            this.Ddiv2 = "rgb(42, 194, 119)";
            this.Ddiv11 = "activ1";
            this.Ddiv21 = "activ2";
            this.conbut1 = "rgb(242, 155, 17)";
            this.Activechk2 = true;
            this.dinner = localStorage.getItem('workid');
            this.tw2 = "white";
            this.td1 = "#000";
            this.td2 = "#fff";
            localStorage.removeItem('selhomedin');
            localStorage.setItem('selworkdin', '4');
            this.activedinner1 = true;
            this.pencilimgworkdinner = "assets/edit-2.png";
            if (this.dchk1 == "1") {
                this.Dchecked1 = true;
            }
            else {
                this.Dchecked1 = false;
            }
            if (this.dchk2 == "1") {
                this.Dchecked2 = true;
            }
            else {
                this.Dchecked2 = false;
            }
        }
        if (this.mealtype == 'Lunch' || this.mealtype == 'lunch') {
            if (this.lunchhome == null) {
                this.Ldiv11 = "activ1";
                this.Ldiv21 = "activ1";
            }
            if (this.lunchwork == null) {
                this.Ldiv11 = "activ1";
                this.Ldiv21 = "activ1";
            }
        }
        else if (this.mealtype == 'Dinner' || this.mealtype == 'dunch') {
            if (this.dinnerhome == null) {
                this.Ddiv11 = "activ1";
                this.Ddiv21 = "activ1";
            }
            if (this.dinnerwork == null) {
                this.Ddiv11 = "activ1";
                this.Ddiv21 = "activ1";
            }
        }
        else if (this.mealtype == 'Both' || this.mealtype == 'both') {
            if (this.lunchhome == null) {
                this.Ldiv11 = "activ1";
                this.Ldiv21 = "activ1";
            }
            if (this.lunchwork == null) {
                this.Ldiv11 = "activ1";
                this.Ldiv21 = "activ1";
            }
            if (this.dinnerhome == null) {
                this.Ddiv11 = "activ1";
                this.Ddiv21 = "activ1";
            }
            if (this.dinnerwork == null) {
                this.Ddiv11 = "activ1";
                this.Ddiv21 = "activ1";
            }
        }
        else {
            if (this.lunchhome == null) {
                this.Ldiv11 = "activ1";
                this.Ldiv21 = "activ1";
            }
            if (this.lunchwork == null) {
                this.Ldiv11 = "activ1";
                this.Ldiv21 = "activ1";
            }
            if (this.dinnerhome == null) {
                this.Ddiv11 = "activ1";
                this.Ddiv21 = "activ1";
            }
            if (this.dinnerwork == null) {
                this.Ddiv11 = "activ1";
                this.Ddiv21 = "activ1";
            }
        }
    };
    ChoosedeliveryaddressPage.prototype.onclicklunch1 = function () {
        this.Ldiv1 = "rgb(42, 194, 119)";
        this.Ldiv2 = "#ffffff";
        this.tl1 = "white";
        this.tl2 = "black";
        if (this.mealtype == 'Lunch') {
            this.conbut1 = "rgb(242, 155, 17)";
        }
        this.Activechk1 = false;
        this.th1 = "white";
        this.tw1 = "black";
        this.Ldiv11 = "activ2";
        this.Ldiv21 = "activ1";
        this.lunch = localStorage.getItem('homeid');
        this.pencilimghomelunch = "assets/edit-2.png";
        this.pencilimgworklunch = "assets/imgicon/edit-black.svg";
        localStorage.setItem('Ladd', 'Home Address');
        localStorage.removeItem('selworklun');
        localStorage.setItem('selhomelun', '1');
        this.activedinner = false;
        this.Lchecked1 = false;
        this.Lchecked2 = false;
        this.l1 = '';
        this.l1 = "0";
        localStorage.removeItem('l1');
        localStorage.setItem('l1', '0');
        this.l2 = '';
        this.l2 = "0";
        localStorage.removeItem('l2');
        localStorage.setItem('l2', '0');
        localStorage.setItem('addressforlunch', 'addressforlunch');
    };
    ChoosedeliveryaddressPage.prototype.onclicklunch2 = function () {
        this.Ldiv1 = "#ffffff";
        this.Ldiv2 = "rgb(42, 194, 119)";
        this.tl2 = "white";
        this.tl1 = "black";
        if (this.mealtype == 'Lunch') {
            this.conbut1 = "rgb(242, 155, 17)";
        }
        this.Activechk1 = true;
        this.th1 = "black";
        this.tw1 = " white";
        this.lunch = localStorage.getItem('workid');
        this.pencilimghomelunch = "assets/imgicon/edit-black.svg";
        this.pencilimgworklunch = "assets/edit-2.png";
        localStorage.setItem('Ladd', 'Work Address');
        localStorage.removeItem('selhomelun');
        localStorage.setItem('selworklun', '2');
        this.activedinner = true;
        localStorage.setItem('addressforlunch', 'addressforlunch');
        this.Ldiv11 = "activ1";
        this.Ldiv21 = "activ2";
    };
    ChoosedeliveryaddressPage.prototype.onclickdinner1 = function () {
        this.Ddiv1 = "rgb(42, 194, 119)";
        this.Ddiv2 = "#ffffff";
        this.td1 = "white";
        this.td2 = "black";
        if (this.mealtype == 'Dinner' || this.mealtype == 'Both') {
            this.conbut1 = "rgb(242, 155, 17)";
        }
        this.Activechk2 = false;
        this.dinner = localStorage.getItem('homeid');
        this.th2 = "white";
        this.tw2 = "black";
        this.pencilimghomedinner = "assets/edit-2.png";
        this.pencilimgworkdinner = "assets/imgicon/edit-black.svg";
        localStorage.setItem('Dadd', 'Home Address');
        localStorage.removeItem('selworkdin');
        localStorage.setItem('selhomedin', '3');
        this.activedinner1 = false;
        this.Dchecked1 = false;
        this.Dchecked2 = false;
        this.d1 = '';
        this.d1 = '0';
        localStorage.removeItem('d1');
        localStorage.setItem('d1', '0');
        this.d2 = '';
        this.d2 = '0';
        localStorage.removeItem('d2');
        localStorage.setItem('d2', '0');
        localStorage.setItem('addressfordinner', 'addressfordinner');
        this.Ddiv11 = "activ2";
        this.Ddiv21 = "activ1";
    };
    ChoosedeliveryaddressPage.prototype.onclickdinner2 = function () {
        this.Ddiv1 = "#ffffff";
        this.Ddiv2 = "rgb(42, 194, 119)";
        this.td2 = "white";
        this.td1 = "black";
        if (this.mealtype == 'Dinner' || this.mealtype == 'Both') {
            this.conbut1 = "rgb(242, 155, 17)";
        }
        this.Activechk2 = true;
        this.th2 = "black";
        this.tw2 = "white";
        this.dinner = localStorage.getItem('workid');
        this.pencilimghomedinner = "assets/imgicon/edit-black.svg";
        this.pencilimgworkdinner = "assets/edit-2.png";
        localStorage.setItem('Dadd', 'Work Address');
        localStorage.removeItem('selhomedin');
        localStorage.setItem('selworkdin', '4');
        //this.activehome1 = false
        this.activedinner1 = true;
        localStorage.setItem('addressfordinner', 'addressfordinner');
        this.Ddiv11 = "activ1";
        this.Ddiv21 = "activ2";
    };
    ChoosedeliveryaddressPage.prototype.LaddValue1 = function (e) {
        var isChecked = e.currentTarget.Lchecked1;
        this.existornot = localStorage.getItem('homeaddress_exist');
        if (this.existornot == '0') {
            var element = document.getElementById("checkedunchecked");
            element.classList.add("removeunchecked");
            this.rdDefaultdsat = false;
            this.l1 = "0";
            localStorage.setItem('l1', this.l1);
            this.util.alert(this.translate.instant('Home Address Not Entered'), '');
            return;
        }
        else {
            if (this.Lchecked1 == true) {
                this.l1 = "1";
                this.rdDefaultdsat = true;
                localStorage.setItem('l1', this.l1);
            }
            else {
                this.rdDefaultdsat = false;
                this.l1 = "0";
                localStorage.setItem('l1', this.l1);
            }
        }
    };
    ChoosedeliveryaddressPage.prototype.LaddValue2 = function (e) {
        var isChecked = e.currentTarget.Lchecked2;
        this.existornot = localStorage.getItem('homeaddress_exist');
        if (this.existornot == 0) {
            var element = document.getElementById("checkedunchecked");
            element.classList.add("removeunchecked");
            this.rdDefaultdsun = false;
            this.util.alert(this.translate.instant('Home Address Not Entered'), '');
            return;
        }
        else {
            if (this.Lchecked2 == true) {
                this.l2 = "1";
                this.rdDefaultdsun = true;
                localStorage.setItem('l2', this.l2);
            }
            else {
                this.l2 = "0";
                this.rdDefaultdsun = false;
                localStorage.setItem('l2', this.l2);
            }
        }
    };
    ChoosedeliveryaddressPage.prototype.DaddValue1 = function (e) {
        var isChecked = e.currentTarget.Dchecked1;
        this.existornot = localStorage.getItem('homeaddress_exist');
        if (this.existornot == 0) {
            var element = document.getElementById("checkeduncheckeds");
            element.classList.add("removeunchecked");
            this.rdDefaultdsatd = false;
            this.util.alert(this.translate.instant('Home Address Not Entered'), '');
            return;
        }
        else {
            if (this.Dchecked1 == true) {
                this.d1 = "1";
                this.rdDefaultdsatd = true;
                localStorage.setItem('d1', this.d1);
            }
            else {
                this.d1 = "0";
                this.rdDefaultdsatd = false;
                localStorage.setItem('d1', this.d1);
            }
        }
    };
    ChoosedeliveryaddressPage.prototype.DaddValue2 = function (e) {
        var isChecked = e.currentTarget.Dchecked2;
        this.existornot = localStorage.getItem('homeaddress_exist');
        if (this.existornot == 0) {
            var element = document.getElementById("checkeduncheckeds");
            element.classList.add("removeunchecked");
            this.rdDefaultdsund = false;
            this.util.alert(this.translate.instant('Home Address Not Entered'), '');
            return;
        }
        else {
            if (this.Dchecked2 == true) {
                this.d2 = "1";
                this.rdDefaultdsund = true;
                localStorage.setItem('d2', this.d2);
            }
            else {
                this.d2 = "0";
                this.rdDefaultdsund = false;
                localStorage.setItem('d2', this.d2);
            }
        }
    };
    ChoosedeliveryaddressPage.prototype.Back = function () {
        var selectedhomelunch = localStorage.getItem('selhomelun');
        var selectedworklunch = localStorage.getItem('selworklun');
        var selectedhomedin = localStorage.getItem('selhomedin');
        var selectedworkdin = localStorage.getItem('selworkdin');
        localStorage.removeItem('selhomelun');
        localStorage.removeItem('selworklun');
        localStorage.removeItem('selhomedin');
        localStorage.removeItem('selworkdin');
        this.navCtrl.setRoot('WhereToDeliverePage', {
            selectforhomelunchis: selectedhomelunch,
            selectorworklunchis: selectedworklunch,
            selectforhomedinis: selectedhomedin,
            selectorworkdinis: selectedworkdin
        });
    };
    ChoosedeliveryaddressPage.prototype.onclickAddress = function () {
        if (this.mealtype == "Both") {
            if (this.lunch == null || this.lunch == '') {
                this.util.alert(this.translate.instant('Select Lunch Address'), '');
                return;
            }
            if (this.dinner == null || this.dinner == '') {
                this.util.alert(this.translate.instant('Select Dinner Address'), '');
                return;
            }
        }
        else if (this.mealtype == "Lunch") {
            if (this.lunch == null || this.lunch == '') {
                this.util.alert(this.translate.instant('Select Lunch Address'), '');
                return;
            }
        }
        else if (this.mealtype == "Dinner") {
            if (this.dinner == null || this.dinner == '') {
                this.util.alert(this.translate.instant('Select Dinner Address'), '');
                return;
            }
        }
        if (this.selectedhomelunch != null || this.selectedworklunch != null) {
            localStorage.setItem('selectDelAdd', '1');
            localStorage.setItem('lunch_add', this.lunch);
            localStorage.setItem('dinner_add', this.dinner);
            this.navCtrl.setRoot('CheckoutPage');
            return;
        }
        else if (this.selectedhomedin != null || this.selectedworkdin != null) {
            localStorage.setItem('selectDelAdd', '1');
            localStorage.setItem('lunch_add', this.lunch);
            localStorage.setItem('dinner_add', this.dinner);
            this.navCtrl.setRoot('CheckoutPage');
            return;
        }
        else if (this.selectedhomelunch != null || this.selectedworklunch || this.selectedhomedin != null || this.selectedworkdin) {
            localStorage.setItem('selectDelAdd', '1');
            localStorage.setItem('lunch_add', this.lunch);
            localStorage.setItem('dinner_add', this.dinner);
            this.navCtrl.setRoot('CheckoutPage');
            return;
        }
        else {
            localStorage.setItem('selectDelAdd', '1');
            localStorage.setItem('lunch_add', this.lunch);
            localStorage.setItem('dinner_add', this.dinner);
            this.navCtrl.setRoot('CheckoutPage');
        }
        localStorage.setItem('selectDelAdd', '1');
        localStorage.setItem('lunch_add', this.lunch);
        localStorage.setItem('dinner_add', this.dinner);
    };
    ChoosedeliveryaddressPage.prototype.editaddress = function () {
        var selectedhomelunch = localStorage.getItem('selhomelun');
        var selectedworklunch = localStorage.getItem('selworklun');
        var selectedhomedin = localStorage.getItem('selhomedin');
        var selectedworkdin = localStorage.getItem('selworkdin');
        localStorage.removeItem('selhomelun');
        localStorage.removeItem('selworklun');
        localStorage.removeItem('selhomedin');
        localStorage.removeItem('selworkdin');
        this.navCtrl.setRoot('WhereToDeliverePage', {
            selectforhomelunchis: selectedhomelunch,
            selectorworklunchis: selectedworklunch,
            selectforhomedinis: selectedhomedin,
            selectorworkdinis: selectedworkdin
        });
    };
    ChoosedeliveryaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choosedeliveryaddress',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/choosedeliveryaddress/choosedeliveryaddress.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>STEP 4</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <div class="screen-heading">\n    <span>Choose Your</span>\n    <h2> Delivery Address</h2>\n  </div>\n\n  <div class="choose-delivery-time" style="padding-bottom: 14vh;">\n    <ion-grid>\n      <div class="select-lunch" *ngIf="ActiveLunch">\n        <ion-row>\n          <ion-col class="text-center">\n            <label *ngIf="ActiveLunch">\n              <h2>LUNCH</h2>\n            </label>\n          </ion-col>\n        </ion-row>\n\n        <div id="Lunchadd1" *ngIf="disablebox==\'1\'" [class]="Ldiv11" [style.background]="Ldiv1" class="onboard-click" block\n          (click)="onclicklunch1()" [style.color]="th1">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label [style.color]="th1">{{Haddtype}}</label>\n                <p [style.color]="tl1">\n                  {{homestring}}</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimghomelunch}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n         <div id="Lunchadd1" *ngIf="disablebox==\'0\'" [class]="Ldiv11" class="onboard-click" block style="background: rgb(255, 255, 255);    border: 0.149vh solid rgba(0, 0, 0, 0.7);">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label style="color: rgb(0, 0, 0);">{{Haddtype}}</label>\n                <p style="color:black  !important;padding: 0.45vh 0.30;">\n                  Address Not Entered</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimghomelunch}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <br>\n\n        <div id="Lunchadd2" [class]="Ldiv21" *ngIf="disablebox2==\'1\'" [style.background]="Ldiv2" class="onboard-click" block\n          (click)="onclicklunch2()" [style.color]="tw1">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label [style.color]="tw1">{{Waddtype}}</label>\n                <p [style.color]="tl2">\n                  {{workstring}}</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimgworklunch}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n         <div id="Lunchadd2" [class]="Ldiv21" *ngIf="disablebox2==\'0\'"  class="onboard-click" block style="background: rgb(255, 255, 255);    border: 0.149vh solid rgba(0, 0, 0, 0.7);">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label style="color: rgb(0, 0, 0);">{{Waddtype}}</label>\n                <p style="color: black;padding: 0.45vh 0.30;">Address Not Entered</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimgworklunch}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf="Activechk1">\n          <ion-row>\n            <ion-col col-12 text-center class="deliver_active">\n              <label *ngIf="activedinner">Deliver To Home Address on</label>\n            </ion-col>\n          </ion-row>\n          <ion-row class="delivery-rows" id="checkedunchecked">\n            <ion-col col-6 text-center class="address_mark address-space1">\n              <div class="checkmark" >\n                <ion-checkbox class="checkbox-square"  aria-checked="rdDefaultdsat" (click)="LaddValue1($event)" [(ngModel)]="Lchecked1" [checked]="rdDefaultdsat">\n                </ion-checkbox>\n              </div>\n              <div class="days">\n                <label>\n                  Saturday\n                </label>\n              </div>\n            </ion-col>\n            <ion-col col-6 text-center class="address_mark address-space2">\n              <div class="checkmark">\n                <ion-checkbox class="checkbox-square" (click)="LaddValue2($event)" [(ngModel)]="Lchecked2" [checked]="rdDefaultdsun">\n                </ion-checkbox>\n              </div>\n              <div class="days">\n                <label>\n                  Sunday\n                </label>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n     \n\n\n\n\n      <div class="select-lunch" *ngIf="ActiveDinner">\n        <ion-row>\n          <ion-col class="text-center">\n            <label *ngIf="ActiveDinner">\n              <h2>DINNER</h2>\n            </label>\n          </ion-col>\n        </ion-row>\n\n        <div id=\'Dinneradd1\' [class]="Ddiv11" *ngIf="disablebox==\'1\'" [style.background]="Ddiv1" class="onboard-click" block\n          (click)="onclickdinner1()" [style.color]="th2">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label [style.color]="th2">{{Haddtype}}</label>\n                <p [style.color]="td1">\n                  {{homestring}}</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimghomedinner}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div id=\'Dinneradd1\' [class]="Ddiv11" *ngIf="disablebox==\'0\'" class="onboard-click" block style="background: rgb(255, 255, 255);    border: 0.149vh solid rgba(0, 0, 0, 0.7);">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label style="color: rgb(0, 0, 0);">{{Haddtype}}</label>\n                <p style="color: black;padding: 0.45vh 0.30;">\n                  Address Not Entered</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimghomedinner}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <br>\n\n        <div id=\'Dinneradd2\' [class]="Ddiv21" *ngIf="disablebox2==\'1\'" [style.background]="Ddiv2" class="onboard-click" block\n          (click)="onclickdinner2()" [style.color]="tw2">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label [style.color]="tw2">{{Waddtype}}</label>\n                <p [style.color]="td2">\n                  {{workstring}}</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimgworkdinner}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n        <div id=\'Dinneradd2\' [class]="Ddiv21" *ngIf="disablebox2==\'0\'"  class="onboard-click" block style="background: rgb(255, 255, 255);    border: 0.149vh solid rgba(0, 0, 0, 0.7);">\n          <ion-row>\n            <ion-col col-10>\n              <div class="lunchArea">\n                <label style="color: rgb(0, 0, 0);">{{Waddtype}}</label>\n                <p style="color: black;padding: 0.45vh 0.30;">\n                 Address Not Entered</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 style="vertical-align: middle; margin:auto; text-align: right;">\n              <div>\n                <img src="{{pencilimgworkdinner}}" alt="Edit-address" (click)="editaddress()" class="EditSize">\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf="Activechk2">\n          <ion-row>\n            <ion-col col-12 text-center class="deliver_active">\n              <label *ngIf="activedinner1">Deliver To Home Address on</label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class="delivery-rows" id="checkeduncheckeds">\n            <ion-col col-6 text-center class="address_mark address-space1">\n              <div class="checkmark" >\n                <ion-checkbox class="checkbox-square" (click)="DaddValue1($event)" [(ngModel)]="Dchecked1" [checked]="rdDefaultdsatd">\n                </ion-checkbox>\n              </div>\n              <div class="days">\n                <label>\n                  Saturday\n                </label>\n              </div>\n            </ion-col>\n            <ion-col col-6 text-center class="address_mark address-space2">\n              <div>\n                <div class="checkmark">\n                  <ion-checkbox class="checkbox-square" (click)="DaddValue2($event)" [(ngModel)]="Dchecked2" [checked]="rdDefaultdsund">\n                  </ion-checkbox>\n                </div>\n                <div class="days">\n                  <label>\n                    Sunday\n                  </label>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <br>\n\n      \n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer className="ion-no-border" class="footer-common" style="background-color: #fff;">\n  <ion-toolbar>\n<ion-row>\n  <ion-col class="dileveryButton" style="padding:0vh 4vw;">\n    <button ion-button type="submit" id="input_submit" class="onboard-click" block [style.background]="conbut1"\n      (click)="onclickAddress()" style="margin: 0;">\n      Checkout\n    </button>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/choosedeliveryaddress/choosedeliveryaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], ChoosedeliveryaddressPage);
    return ChoosedeliveryaddressPage;
}());

//# sourceMappingURL=choosedeliveryaddress.js.map

/***/ })

});
//# sourceMappingURL=42.js.map