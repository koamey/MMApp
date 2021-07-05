webpackJsonp([31],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(925);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, nav, util, translate, apiService, builder, push, storage, app, alertCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.util = util;
        this.translate = translate;
        this.apiService = apiService;
        this.builder = builder;
        this.push = push;
        this.storage = storage;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.count = 0;
        this.appPages = [
            //{ title: 'Dashboard', component: DashboardPage, index: 0, icon: 'home' },
            { title: 'Order History', component: 'OrderhistoryPage', index: 0, icon: '' },
            { title: 'Account', component: 'AccountPage', index: 1, icon: '' },
            { title: 'Refer & Earn', component: 'ReferAndEarnPage', index: 2, icon: '' },
            { title: 'About Us', component: 'AboutusPage', index: 3, icon: '' },
            { title: 'Terms & Privacy', component: 'TermsAndPrivacyPage', index: 4, icon: '' },
            { title: 'Customer Care', component: 'ContactPage', index: 5, icon: '' },
            { title: 'Meal History', component: 'MealhistoryPage', index: 6, icon: '' },
            { title: 'Logout', component: 'LoginPage', index: 7, icon: '' }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        platform.registerBackButtonAction(function () {
            // Catches the active view
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name == 'MenuPage') {
                if (_this.count == 0) {
                    _this.count++;
                    setTimeout(function () { _this.count = 0; }, 2000);
                }
                else if (_this.count == 2) {
                    if (nav.canGoBack()) {
                        nav.pop();
                    }
                    else {
                        _this.presentToast();
                    }
                }
            }
        }, 0);
    }
    MenuPage.prototype.presentToast = function () {
        var _this = this;
        //alert(this.count)
        if (this.count == 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert !!!',
                message: 'Do you want to Exit?',
                buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            _this.nav.setRoot('Menupage');
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            _this.platform.exitApp();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
        this.imageheight = "14.94vh";
        this.imagewidth = "15.2vh";
        this.base64Image = localStorage.getItem('image');
        if (this.base64Image == null || this.base64Image == 'null') {
            this.base64Image = 'assets/Mask Group 2@2x.png';
        }
        //
        //for check the data entered properly 
        this.type = localStorage.getItem('failedstatus');
        console.log(this.type);
        if (this.type == null) {
            this.type = "null";
            console.log(this.type);
        }
        else if (this.type == "null") {
            this.type = "null";
            console.log(this.type);
        }
        if (this.type == "null") {
            console.log(this.type);
        }
        else {
            this.util.showLoader();
            this.apiService.checkpayementstatus(this.custid, this.type, this.custToken).then(function (response) {
                _this.util.hideLoader();
                if (response.success) {
                    console.log(response.message);
                    if (response.message == "false") {
                        console.log(response.message);
                        // calculation
                        _this.subscription_price = localStorage.getItem('price');
                        if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
                            _this.extra_roti_lunch_price = localStorage.getItem('extraRoti_Lunch');
                        }
                        else {
                            _this.extra_roti_lunch_price = '0';
                        }
                        if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
                            _this.extra_roti_dinner_price = localStorage.getItem('extraRoti_Dinner');
                        }
                        else {
                            _this.extra_roti_dinner_price = '0';
                        }
                        var basic;
                        var basicString = _this.subscription_price.replace(',', '');
                        basic = parseFloat(basicString) + parseFloat(_this.extra_roti_lunch_price) + parseFloat(_this.extra_roti_dinner_price);
                        _this.extra_price = parseFloat(_this.extra_roti_lunch_price) + parseFloat(_this.extra_roti_dinner_price);
                        localStorage.setItem('extra_price', _this.extra_price);
                        _this.respcgst = localStorage.getItem('respcgst');
                        _this.respigst = localStorage.getItem('respigst');
                        _this.CGST = (parseFloat(basic) * _this.respcgst / 100).toFixed(2);
                        _this.IGST = (parseFloat(basic) * _this.respigst / 100).toFixed(2);
                        _this.Tax = (parseFloat(_this.CGST) + parseFloat(_this.IGST)).toFixed(2);
                        _this.Total = (parseFloat(basic) + parseFloat(_this.Tax)).toFixed(2);
                        localStorage.setItem('Total', _this.Total);
                        _this.amount = String(_this.Total);
                        _this.amount = _this.amount.replace('.', '');
                        if (localStorage.getItem('payment_id') == null) {
                            localStorage.setItem('payment_id', '0');
                        }
                        // end
                        _this.reference_id = localStorage.getItem('reference_id');
                        var lunch_products = JSON.parse(localStorage.getItem('lunch_products'));
                        var dinner_products = JSON.parse(localStorage.getItem('dinner_products'));
                        var data = [];
                        if (lunch_products) {
                            data.push(lunch_products);
                        }
                        if (dinner_products) {
                            data.push(dinner_products);
                        }
                        if (_this.type == "regular" || _this.type == "renew") {
                            if (localStorage.getItem('updated_sub') == '1') {
                                _this.is_update = '1';
                            }
                            else {
                                _this.is_update = '0';
                            }
                            _this.apiService.addsubscriptionPlan(data, _this.CGST, _this.IGST, _this.renew, _this.reference_id, _this.is_update).then(function (res) {
                                if (res['success']) {
                                    localStorage.setItem('failedstatus', null);
                                    localStorage.setItem('customer_payement_status', 'success');
                                }
                                else {
                                    localStorage.setItem('failedstatus', null);
                                }
                            }).catch(function (err) {
                                localStorage.setItem('failedstatus', null);
                            });
                        }
                    }
                }
            }, function (response) {
                localStorage.setItem('failedstatus', null);
            });
        }
        //end
        //
        //this.util.showLoader();
        this.apiService.Dashboard(this.custid, this.custToken).then(function (response) {
            //this.util.hideLoader();
            if (response.success) {
                localStorage.setItem('failedstatus', null);
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                localStorage.setItem('CustomerName', response.data.customer_name);
                localStorage.setItem('CustomerLastName', response.data.customer_last_name);
                localStorage.setItem('mealType', response.data.meal_type);
                _this.custFname = localStorage.getItem('CustomerName');
                _this.custLname = localStorage.getItem('CustomerLastName');
                _this.mtype = localStorage.getItem('mealType');
                localStorage.setItem('image', response.data.customer_image);
                localStorage.setItem('renew_before_five', response.data.renew_before_five);
                localStorage.setItem('renew_before_two', response.data.renew_before_two);
                _this.base64Image = localStorage.getItem('image');
                if (_this.base64Image == null || _this.base64Image == "" || _this.base64Image == "undefined" || _this.base64Image == "null") {
                    _this.base64Image = 'assets/Mask Group 2@2x.png';
                }
                if (_this.mtype == "Both") {
                    _this.mtype = "Lunch & Dinner";
                }
            }
            else {
            }
        }, function (data) {
        });
        this.custFname = localStorage.getItem('CustomerName');
        this.custLname = localStorage.getItem('CustomerLastName');
        this.mtype = localStorage.getItem('mealType');
        if (this.mtype == "Both") {
            this.mtype = "Lunch & Dinner";
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    MenuPage.prototype.openPage = function (p) {
        if (p.title != "Logout") {
            this.nav.setRoot(p.component);
        }
        else {
            localStorage.setItem('areacode', null);
            localStorage.setItem('pincode', null);
            localStorage.setItem('areaname', null);
            localStorage.setItem('skipdisable', '1');
            this.nav.setRoot('LoginPage', {
                Logout: true
            });
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/menu/menu.html"*/'<ion-menu [content]="mycontent" class="appMainmenu">\n	<ion-content>\n		<ion-list class="list-menu-bar">\n			<div class="profile-list-header">\n				<ion-item>\n					<ion-avatar item-start>\n						<div class="profile">\n							<img [src]="base64Image" *ngIf="base64Image" class="profile-picture">\n						</div>\n					</ion-avatar>\n					<h2>{{custFname}}<br>{{custLname}}</h2>\n					<p>{{mtype}} Plan</p>\n				</ion-item>	\n			</div>\n			<div class="menuOption">\n				<button class="number-menu" ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n					<ion-icon item-start [name]="p.icon" ></ion-icon>\n					{{p.title}}\n				</button>\n			</div>\n		</ion-list>\n	</ion-content>\n</ion-menu>\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_7__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=31.js.map