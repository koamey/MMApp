webpackJsonp([49],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
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
 * Tabs primary component
 */
var TabsPage = (function () {
    function TabsPage(cart, apiService) {
        var _this = this;
        this.cart = cart;
        this.apiService = apiService;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab0Root = 'NewsFeedPage';
        this.tab1Root = 'CategoriesPage';
        this.tab2Root = 'CartPage';
        this.tab3Root = 'OrdersHistoryPage';
        this.tab4Root = 'LoyaltyPage';
        this.count = 0;
        this.count = cart.getCartCount();
        if (this.apiService.getSettings().multiple_restaurants) {
            this.tab1Root = 'RestaurantsPage';
        }
        this.cart.itemsCount$.subscribe(function (v) {
            _this.count = v;
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n	<ion-tab [root]="tab0Root" tabTitle="{{ \'tabs.news\' | translate }} " tabIcon="paper"></ion-tab>\n	<ion-tab [root]="tab1Root" tabTitle="{{ \'tabs.menu\' | translate }} " tabIcon="cafe"></ion-tab>\n	<ion-tab [root]="tab2Root" tabTitle="{{ \'tabs.cart\' | translate }}" tabIcon="cart" tabBadge="{{ count > 0 ? count : \'\' }}"></ion-tab>\n	<ion-tab [root]="tab3Root" tabTitle="{{ \'tabs.orders_list\' | translate }}" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="{{ \'tabs.loyalty\' | translate }}" tabIcon="ribbon"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(95);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, util, nav, translate, apiService, push, alertCtrl, storage, app, platform, localNotifications, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.nav = nav;
        this.translate = translate;
        this.apiService = apiService;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.app = app;
        this.platform = platform;
        this.localNotifications = localNotifications;
        this.ionicApp = ionicApp;
        this.max = 20;
        this.stroke = 4;
        this.radius = 20;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = false;
        this.defaultveggies = false;
        this.clockwise = true;
        this.color = 'rgb(32, 60, 82)';
        this.background = '#eaeaea';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 0;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
        this.today1 = new Date().toISOString();
        this.cancelmealdate = [];
        this.mealtype = '';
        this.count = 0;
        this.initializeBackButtonCustomHandler();
    }
    DashboardPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    DashboardPage.prototype.customHandleBackButton = function () {
        var _this = this;
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            //this.Back();
            if (this.count == 0) {
                this.count++;
                setTimeout(function () { _this.count = 0; }, 2000);
            }
            else {
                this.presentToast();
            }
        }
    };
    DashboardPage.prototype.presentToast = function () {
        var _this = this;
        if (this.count == 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Close the App',
                message: 'Are you sure?',
                buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            _this.nav.setRoot('DashboardPage');
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
    DashboardPage.prototype.ionViewDidLoad = function () {
    };
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('logintimestamp', null);
        this.custstatus = true;
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
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
            localStorage.setItem('failedstatus', null);
        }
        else {
            console.log(this.type);
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
                                    localStorage.setItem('customer_payement_status', 'success');
                                    localStorage.setItem('failedstatus', null);
                                }
                                else {
                                    localStorage.setItem('failedstatus', null);
                                }
                            }).catch(function (err) {
                                localStorage.setItem('failedstatus', null);
                            });
                        }
                        else if (_this.type == "guest") {
                            _this.date = localStorage.getItem('date');
                            var payment_status = 'success';
                            _this.payment_id = localStorage.getItem('payment_id');
                            _this.Total = localStorage.getItem('guestmealtotal');
                            _this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
                            _this.apiService.guestmeal_payment(_this.customer_subscription_id, _this.custid, _this.payment_id, payment_status, _this.Total, _this.date).then(function (res) {
                                _this.util.hideLoader();
                                if (res['success']) {
                                    localStorage.removeItem('mynum1');
                                    localStorage.removeItem('mynum2');
                                    localStorage.removeItem('date');
                                    localStorage.setItem('customer_payement_status', 'success');
                                    localStorage.setItem('failedstatus', null);
                                }
                                else {
                                    localStorage.setItem('failedstatus', null);
                                }
                            }, function (response) {
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
        //this.util.showLoader();
        this.apiService.Dashboard(this.custid, this.custToken).then(function (response) {
            // this.util.hideLoader();
            if (response.success) {
                localStorage.setItem('failedstatus', null);
                _this.referrelAppied = response.data.referrelAppied;
                if (_this.referrelAppied == 1) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'congratulations !',
                        message: 'You have received free meals on referring a friend. Refer and win more meals.',
                        buttons: [{
                                text: 'ok',
                                handler: function () {
                                    _this.apiService.notificationdata_check(_this.custid).then(function (response) {
                                    });
                                }
                            }]
                    });
                    alert_2.present();
                    // this.util.alert(this.translate.instant('you have earn extra meals'),'congratulation !!');
                }
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                localStorage.setItem('subscription_id', response.data.subscription_id);
                _this.currentmealperiod = response.data.mealperiodcount;
                localStorage.setItem('referalcode', response.data.referalcode);
                localStorage.removeItem('mealId');
                localStorage.setItem('mealId', response.data.meal_id);
                localStorage.setItem('customer_subscription_id', response.data.customer_subscription_id);
                localStorage.setItem('guestmealdate', response.data.guestmealorder);
                localStorage.setItem('mealcount', response.data.mealcount);
                localStorage.setItem('mealdays', response.data.mealperiodcount);
                localStorage.setItem('CustomerName', response.data.customer_name);
                localStorage.setItem('CustomerLastName', response.data.customer_last_name);
                localStorage.setItem('StartDate', response.data.customer_start_date);
                localStorage.setItem('endDate', response.data.customer_end_date);
                localStorage.setItem('custStatus', response.data.customer_status);
                localStorage.setItem('mobilenumber', response.data.customer_mobile_number);
                localStorage.setItem('renew_before_ten', response.data.renew_before_ten);
                localStorage.setItem('renew_before_five', response.data.renew_before_five);
                localStorage.setItem('renew_before_two', response.data.renew_before_two);
                localStorage.setItem('defaultveggies_set', response.data.defaultorder);
                _this.dinnercancel = response.data.dinner_meal_date;
                if (response.data.defaultorder == '0') {
                    _this.defaultveggies = true;
                }
                else {
                    _this.defaultveggies = false;
                }
                _this.enddatess = localStorage.getItem('renew_before_two');
                _this.enddatesss = localStorage.getItem('renew_before_five');
                localStorage.setItem('delivery_status', response.data.delivery_status);
                localStorage.setItem('image', response.data.customer_image);
                _this.today = new Date();
                localStorage.setItem('today', _this.today);
                localStorage.setItem('setdate', _this.setdate);
                localStorage.setItem('actualmealcount', response.data.actualmealcount);
                localStorage.setItem('actualmealdays', response.data.actualmealperiodcount);
                localStorage.removeItem('mealType');
                localStorage.setItem('mealType', response.data.meal_type);
                _this.mealtype = response.data.meal_type;
                _this.current = parseInt(localStorage.getItem('mealcount'));
                _this.current1 = parseInt(localStorage.getItem('mealdays'));
                _this.startdate = localStorage.getItem('StartDate');
                // let lengths = this.today.getMonth() + 1;
                // let lengthsday = this.today.getDate() + 1;
                _this.setdate = new Date(_this.today.getFullYear(), _this.today.getMonth(), _this.today.getDate() + 2).toISOString().substring(0, 10);
                var fromat = _this.setdate + ' 00:00:00';
                localStorage.setItem('customerdate', fromat);
                _this.datecondition = localStorage.getItem('customerdate');
                _this.enddate = localStorage.getItem('endDate');
                _this.enddate = _this.enddate + ' 23:59:00';
                console.log(_this.enddate);
                console.log(_this.startdate);
                console.log(_this.datecondition);
                if (localStorage.getItem('custStatus') == 'active' && _this.datecondition >= _this.startdate) {
                    // && this.datecondition > this.startdate
                    if (_this.enddate <= _this.datecondition) {
                        _this.custstatus = false;
                        localStorage.setItem('referandearn', _this.custstatus);
                        localStorage.setItem('picktomorrowtab', _this.custstatus);
                        _this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
                        localStorage.setItem('switchaddressupgrade', _this.custstatus);
                        _this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
                        localStorage.setItem('meal_cancel_count_meal', _this.custstatus);
                        _this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
                        localStorage.setItem('cancelcount', response.data.cancelcount);
                        _this.cancelCount = localStorage.getItem('cancelcount');
                        localStorage.setItem('trial_subscriptionactive', _this.custstatus);
                        _this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
                    }
                    else {
                        _this.custstatus = true;
                        localStorage.setItem('referandearn', _this.custstatus);
                        localStorage.setItem('picktomorrowtab', response.data.menuplan);
                        _this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
                        localStorage.setItem('switchaddressupgrade', _this.custstatus);
                        _this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
                        localStorage.setItem('meal_cancel_count_meal', response.data.meal_cancel_count);
                        _this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
                        localStorage.setItem('cancelcount', response.data.cancelcount);
                        _this.cancelCount = localStorage.getItem('cancelcount');
                        _this.chectrilkstatus = response.data.trial_subscription;
                        if (_this.chectrilkstatus == false) {
                            _this.changestatus = true;
                            localStorage.setItem('trial_subscriptionactive', 'true');
                            _this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
                        }
                        else {
                            localStorage.setItem('trial_subscriptionactive', 'true');
                            _this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
                            _this.trial_subscriptionTabCheck = true;
                        }
                    }
                }
                else {
                    // if(localStorage.getItem('custStatus') == 'active' && this.datecondition <= this.startdate)
                    // {
                    //   console.log('iiiii');
                    //   this.custstatus = true;
                    //   localStorage.setItem('referandearn', this.custstatus);
                    //   localStorage.setItem('picktomorrowtab', response.data.menuplan);
                    //   this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
                    //   localStorage.setItem('switchaddressupgrade', this.custstatus);
                    //   this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
                    //   localStorage.setItem('meal_cancel_count_meal', response.data.meal_cancel_count)
                    //   this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
                    //   localStorage.setItem('cancelcount', response.data.cancelcount)
                    //   this.cancelCount = localStorage.getItem('cancelcount');
                    //   this.chectrilkstatus = response.data.trial_subscription;
                    //   if (this.chectrilkstatus == false) {
                    //     this.changestatus = true;
                    //     localStorage.setItem('trial_subscriptionactive', 'true');
                    //     this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
                    //   }
                    //   else {
                    //     localStorage.setItem('trial_subscriptionactive', 'true');
                    //     this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
                    //     this.trial_subscriptionTabCheck = true;
                    //   }
                    // }
                    // else{
                    _this.custstatus = false;
                    localStorage.setItem('referandearn', _this.custstatus);
                    localStorage.setItem('picktomorrowtab', _this.custstatus);
                    _this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
                    localStorage.setItem('switchaddressupgrade', _this.custstatus);
                    _this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
                    localStorage.setItem('meal_cancel_count_meal', _this.custstatus);
                    _this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
                    localStorage.setItem('cancelcount', response.data.cancelcount);
                    _this.cancelCount = localStorage.getItem('cancelcount');
                    localStorage.setItem('trial_subscriptionactive', _this.custstatus);
                    _this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
                    //}
                    //
                }
                _this.setdate = localStorage.getItem('setsetdatedate');
                _this.custname = localStorage.getItem('CustomerName');
                _this.custLname = localStorage.getItem('CustomerLastName');
                _this.mealtyp = localStorage.getItem('mealType');
                _this.actualmealcount = localStorage.getItem('actualmealcount');
                _this.actualmealdays = localStorage.getItem('actualmealdays');
                if (_this.mealtyp == "Both") {
                    _this.mealtyp = "Lunch & Dinner";
                }
                _this.cancelmealdate = response.data.cancel_meal_date;
                _this.notificationcall();
            }
            else {
                _this.conmessage = response.message;
                _this.showConfirmAlert();
            }
        }, function (response) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
        this.subid = localStorage.getItem('subscription_id');
        this.cust_sub_id = localStorage.getItem('customer_subscription_id');
        this.custname = localStorage.getItem('CustomerName');
        this.custLname = localStorage.getItem('CustomerLastName');
        this.mealtyp = localStorage.getItem('mealType');
        this.startdate = localStorage.getItem('StartDate');
        localStorage.removeItem('mynum1');
        localStorage.removeItem('mynum2');
        localStorage.removeItem('date');
        localStorage.removeItem('renewis');
        localStorage.removeItem('canceldinnerdate');
        localStorage.removeItem('canceldinnertype');
        localStorage.removeItem('cancelLunchdate');
        localStorage.removeItem('cancellunchtype');
        localStorage.removeItem('notcanceldinnerdate');
    };
    DashboardPage.prototype.scheduler = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        this.localNotifications.schedule({
            id: 1,
            title: "Choose your veggie for tomorrow",
            text: "Tell us what you'd like to eat.",
            trigger: { every: { hour: 9, minute: 1 }, count: 1 },
            led: 'FF0000',
            smallIcon: "res://mipmap-ldpi/ic_launcher.png",
            sound: null,
            foreground: true,
        });
        // let observable = this.localNotifications.on('click').subscribe(() => {
        //   this.navCtrl.setRoot('PicktmrwvegiesPage');
        //   observable.unsubscribe();
        // });
    };
    DashboardPage.prototype.schedulernight = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        this.localNotifications.schedule({
            id: 2,
            title: "Choose your veggie for tomorrow",
            text: "Tell us what you'd like to eat.",
            trigger: { every: { hour: 21, minute: 1 }, count: 1 },
            smallIcon: "res://mipmap-ldpi/ic_launcher.png",
            led: 'FF0000',
            sound: null,
            foreground: true,
        });
        // let observable = this.localNotifications.on('click').subscribe(() => {
        //   this.navCtrl.setRoot('PicktmrwvegiesPage');
        //   // Unsubscribe to OnClick event after push your page
        //   observable.unsubscribe();
        // });
    };
    DashboardPage.prototype.fivedaybeforeschedule = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        // this.localNotifications.schedule({
        //   id: 3,
        //   title: "Your subscription needs to be renewed",
        //   text: "We do not want you to skip your meals.",
        //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
        //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
        //   led: 'FF0000',
        //   sound: null,
        //   foreground: true,
        // });
    };
    DashboardPage.prototype.twodaybeforeschedule = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        // this.localNotifications.schedule({
        //   id: 4,
        //   title: "Your subscription needs to be renewed",
        //   text: "We do not want you to skip your meals, please renew your subscription.",
        //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
        //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
        //   led: 'FF0000',
        //   sound: null,
        //   foreground: true,
        // });
    };
    DashboardPage.prototype.tendaybeforeschedule = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        // this.localNotifications.schedule({
        //   id: 5,
        //   title: "Home-cooked food is right here, sign-up now",
        //   text: "Guess you've missed renewing your subscription, what are you waiting for?",
        //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
        //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
        //   led: 'FF0000',
        //   sound: null,
        //   foreground: true,
        // });
    };
    DashboardPage.prototype.tendaybeforeschedule1 = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        // this.localNotifications.schedule({
        //   id: 6,
        //   title: "Home-cooked food is right here, sign-up now",
        //   text: "We're here to treat you. Sign-up with us for home that you get back home.",
        //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
        //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
        //   led: 'FF0000',
        //   sound: null,
        //   foreground: true,
        // });
    };
    DashboardPage.prototype.picktmrwveggies = function () {
        this.today_dinner = new Date();
        var todayss = new Date(this.today_dinner.getFullYear(), this.today_dinner.getMonth(), this.today_dinner.getDate() + 2).toISOString();
        console.log(todayss);
        var dateFormats = todayss.split('T')[0];
        console.log(dateFormats);
        console.log(this.dinnercancel);
        for (var i = 0; i < this.dinnercancel.length; i++) {
            if ((dateFormats == this.dinnercancel[i]['meal_date']) && (this.dinnercancel[i]['meal_type'] == "dinner")) {
                localStorage.setItem('notcanceldinnerdate', this.dinnercancel[i]['meal_date']);
                localStorage.setItem('notcanceldinnertype', this.dinnercancel[i]['meal_type']);
            }
        }
        this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
        var today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
        console.log(today);
        var dateFormat = today.split('T');
        var dateFormat1 = this.today1.split('T');
        if (localStorage.getItem('referandearn') == 'false') {
            var todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
            this.startdate = localStorage.getItem('StartDate');
            if (todaydate <= this.startdate) {
                this.util.alert('You can choose a veggie only a day before the delivery', '');
                this.util.hideLoader(); // disable button
            }
            else {
                this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
                this.util.hideLoader();
            }
            //this.navCtrl.setRoot('PicktmrwvegiesPage');
        }
        else if (this.PickVeggiesTabCheck == 'false') {
            this.util.alert('You can choose a veggie only a day before the delivery', '');
            this.util.hideLoader(); // disable button
        }
        else if (this.PickVeggiesTabCheck != 'false') {
            if (dateFormat1[0] == this.enddate) {
                this.util.alert('This feature will be active once we start delivering', '');
                this.util.hideLoader();
            }
            else {
                for (var i = 0; i < this.cancelmealdate.length; i++) {
                    if ((dateFormat[0] == this.cancelmealdate[i]['meal_date']) && (this.cancelmealdate[i]['meal_type'] == "lunch")) {
                        localStorage.setItem('cancelLunchdate', this.cancelmealdate[i]['meal_date']);
                        localStorage.setItem('cancellunchtype', this.cancelmealdate[i]['meal_type']);
                    }
                    else if ((dateFormat[0] == this.cancelmealdate[i]['meal_date']) && (this.cancelmealdate[i]['meal_type'] == "dinner")) {
                        localStorage.setItem('canceldinnerdate', this.cancelmealdate[i]['meal_date']);
                        localStorage.setItem('canceldinnertype', this.cancelmealdate[i]['meal_type']);
                    }
                }
                if (localStorage.getItem('mealId') == '1') {
                    if (localStorage.getItem('cancellunchtype') == 'lunch') {
                        this.util.alert("You already Cancelled tomorrow's meal", "");
                        this.util.hideLoader();
                    }
                    else {
                        this.navCtrl.setRoot('PicktmrwvegiesPage');
                    }
                }
                else if (localStorage.getItem('mealId') == '2') {
                    if (localStorage.getItem('canceldinnertype') == 'dinner') {
                        this.util.alert("You already Cancelled tomorrow's meal", "");
                        this.util.hideLoader();
                    }
                    else {
                        this.navCtrl.setRoot('PicktmrwvegiesPage');
                    }
                }
                else if (localStorage.getItem('mealId') == '3') {
                    if (localStorage.getItem('cancellunchtype') == 'lunch' && localStorage.getItem('canceldinnertype') == 'dinner') {
                        this.util.alert("You already Cancelled tomorrow's meal", "");
                        this.util.hideLoader();
                    }
                    else {
                        this.navCtrl.setRoot('PicktmrwvegiesPage');
                    }
                }
            }
        }
    };
    DashboardPage.prototype.orderGUestMeal = function () {
        this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
        this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
        if (localStorage.getItem('referandearn') == 'false') {
            var todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
            this.startdate = localStorage.getItem('StartDate');
            if (todaydate <= this.startdate) {
                this.util.alert('You can choose a veggie only a day before the delivery', '');
                this.util.hideLoader(); // disable button
            }
            else {
                this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
                this.util.hideLoader();
            }
        }
        else if (this.trial_subscriptionTabCheck == 'false' || this.PickVeggiesTabCheck == 'false') {
            this.util.alert('This feature will be active once we start delivering', '');
            this.util.hideLoader();
        }
        else if (this.trial_subscriptionTabCheck != 'false' || this.PickVeggiesTabCheck != 'false') {
            if (this.today1 == this.enddate) {
                this.util.alert('This feature will be active once we start delivering', '');
                this.util.hideLoader();
            }
            else {
                this.navCtrl.setRoot('OrderGuestMealPage');
            }
        }
    };
    DashboardPage.prototype.cancelMeal = function () {
        this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
        this.cancelCount = localStorage.getItem('cancelcount');
        if (localStorage.getItem('referandearn') == 'false') {
            var todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
            this.startdate = localStorage.getItem('StartDate');
            if (todaydate <= this.startdate) {
                this.util.alert('This feature will be active once we start delivering.', '');
                this.util.hideLoader(); // disable button You can choose a veggie only a day before the delivery
            }
            else {
                this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
                this.util.hideLoader();
            }
        }
        else if (localStorage.getItem('subscription_id') == "1") {
            this.util.alert('This feature will be inactive for demo plan', '');
            this.util.hideLoader();
        }
        else if (this.cancelMealTabCheck == 'false') {
            this.util.alert('This feature will be active once we start delivering', '');
            this.util.hideLoader(); // disable button
        }
        else if (this.cancelCount == 0) {
            this.util.alert("You have no meal cancellations left", "");
            this.util.hideLoader();
        }
        else if (this.cancelMealTabCheck != 'false') {
            if (this.today1 == this.enddate) {
                this.util.alert('This feature will be active once we start delivering', '');
                this.util.hideLoader();
            }
            else {
                this.navCtrl.setRoot('CancelMealPage');
            }
        }
    };
    DashboardPage.prototype.switchAddressTime = function () {
        localStorage.setItem('switchaddressupgrade', this.custstatus);
        this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
        if (localStorage.getItem('referandearn') == 'false') {
            var todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
            this.startdate = localStorage.getItem('StartDate');
            if (todaydate <= this.startdate) {
                this.util.alert('You can choose a veggie only a day before the delivery', '');
                this.util.hideLoader(); // disable button
            }
            else {
                this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
                this.util.hideLoader();
            }
        }
        else if (this.switchaddresstime1 == 'false') {
            this.util.alert('This feature will be active once we start delivering', '');
            this.util.hideLoader(); // disable button
        }
        else if (this.switchaddresstime1 != 'false') {
            if (this.today1 == this.enddate) {
                this.util.alert('This feature will be active once we start delivering', '');
                this.util.hideLoader();
            }
            else {
                this.navCtrl.setRoot('SwitchAddressTimePage');
            }
        }
    };
    DashboardPage.prototype.changeupgrade = function () {
        localStorage.setItem('switchaddressupgrade', this.custstatus);
        this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
        if (this.switchaddresstime1 == 'false') {
            this.util.alert('Please wait until your current plan expires', '');
            this.util.hideLoader(); // disable button
        }
        else {
            //this.navCtrl.setRoot('UpgradeMealTypePage');
            this.util.alert('Please wait until your current plan expires', '');
            this.util.hideLoader(); //UpgradeMealTypePage
        }
    };
    DashboardPage.prototype.renewsubscription = function () {
        localStorage.removeItem('lm_roti');
        localStorage.removeItem('dm_roti');
        localStorage.removeItem('extraRoti_Lunch');
        localStorage.removeItem('extraRoti_Dinner');
        localStorage.removeItem('lunch_products');
        localStorage.removeItem('dinner_products');
        localStorage.removeItem('customise_lc_data');
        localStorage.removeItem('customise_dm_data');
        localStorage.removeItem('payemntfailedguest');
        this.todays = localStorage.getItem('guestmealdate');
        this.renewtoday = this.todays; //.toISOString();
        //this.renewtoday = this.renewtoday.getFullYear().toString() + '-' + (this.renewtoday.getMonth() + 1).toString() + '-' + (this.renewtoday.getDate() - 1).toString();
        console.log(this.renewtoday);
        this.renewsetdate = this.renewtoday;
        // let lengths = this.today.getMonth() + 1;
        // let lengthsday = this.today.getDate();
        // if (lengths > 9) {
        //   if (lengthsday > 9) {
        //     this.renewsetdate = this.renewtoday.getFullYear().toString() + '-' + (this.renewtoday.getMonth() + 1).toString() + '-' + (this.renewtoday.getDate()).toString();
        //   }
        //   else {
        //     let append = '0' + lengths;
        //     let appendday = '0' + lengthsday;
        //     this.renewsetdate = this.today.getFullYear().toString() + '-' + (append).toString() + '-' + (appendday).toString();
        //   }
        // }
        // else {
        //   let append = '0' + lengths;
        //   if (lengthsday > 9) {
        //     this.renewsetdate = this.renewtoday.getFullYear().toString() + '-' + (append).toString() + '-' + (this.renewtoday.getDate()).toString();
        //   }
        //   else {
        //     let append = '0' + lengths;
        //     let appendday = '0' + lengthsday;
        //     this.renewsetdate = this.today.getFullYear().toString() + '-' + (append).toString() + '-' + (appendday).toString();
        //   }
        // }
        this.enddates = localStorage.getItem('renew_before_ten');
        if (this.renewsetdate >= this.enddates) {
            this.navCtrl.setRoot('RenewsubscriptionPage');
        }
        else {
            this.util.alert('You can only  renew your subscription last 10 subscription days', '');
            this.util.hideLoader();
            //this.navCtrl.setRoot('RenewsubscriptionPage');
        }
    };
    DashboardPage.prototype.mycurrentplan = function () {
        localStorage.setItem('switchaddressupgrade', this.custstatus);
        this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
        if (localStorage.getItem('referandearn') == 'false') {
            var todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
            this.startdate = localStorage.getItem('StartDate');
            if (todaydate <= this.startdate) {
                this.util.alert('You can choose a veggie only a day before the delivery', '');
                this.util.hideLoader(); // disable button
            }
            else {
                this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
                this.util.hideLoader();
            }
        }
        else if (this.switchaddresstime1 == 'false') {
            this.util.alert('This feature will be active once we start delivering', '');
            this.util.hideLoader(); // disable button
        }
        else {
            this.navCtrl.setRoot('MycurrentplanPage');
        }
    };
    DashboardPage.prototype.Back = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    DashboardPage.prototype.singlenotificationfortrialremaintwomeal = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        // this.localNotifications.schedule({
        //   id: 3,
        //   title: "It's time you upgrade",
        //   text: 'Sign up for our daily subscription plans in just a min!',
        //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
        //   led: 'FF0000',
        //   sound: null,
        //   foreground: true,
        // });
    };
    DashboardPage.prototype.singlenotificationfortrialremainonemeals = function () {
        this.today = new Date();
        this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
        this.fulldate = this.setdate + " 14:45";
        // this.localNotifications.schedule({
        //   id: 4,
        //   title: "You might miss your next meal",
        //   text: 'Your subscription needs to be renewed, ASAP!',
        //   trigger: { every: { hour: 13, minute: 30 }, count: 1 },
        //   led: 'FF0000',
        //   sound: null,
        //   foreground: true,
        // });
    };
    DashboardPage.prototype.singlenotificationformealdispatch = function () {
        // this.localNotifications.schedule({
        //   id: 5,
        //   title: "Your food is on the way",
        //   text: 'Our delivery agent has left our kitchen.',
        //   foreground: true,
        //   trigger: { every: { hour: 14 }, count: 1 },
        // });
    };
    DashboardPage.prototype.singlenotificationformealdelivered = function () {
        // this.localNotifications.schedule({
        //   id: 6,
        //   title: "Your food is delivered",
        //   text: 'Please let us know how your meal was.',
        //   foreground: true,
        //   trigger: { every: { hour: 14, minute: 30 }, count: 1 },
        // });
    };
    DashboardPage.prototype.notificationcall = function () {
        var _this = this;
        this.localNotifications.requestPermission().then(function (permission) {
            var currentDate = new Date();
            var weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            _this.days = weekdays[currentDate.getDay()];
            if (localStorage.getItem('picktomorrowtab') == 'true' && localStorage.getItem('delivery_status') != "delivered" && localStorage.getItem('delivery_status') != "dispatched") {
                _this.scheduler();
                _this.schedulernight();
            }
            if (localStorage.getItem('delivery_status') == "delivered") {
                _this.singlenotificationformealdelivered();
            }
            if (localStorage.getItem('delivery_status') == "dispatched") {
                _this.singlenotificationformealdispatch();
            }
            if (localStorage.getItem('subscription_id') == "1") {
                if (localStorage.getItem('mealcount') == "2") {
                    if (localStorage.getItem('countitems') != '2') {
                        localStorage.setItem('countitems', '2');
                        _this.singlenotificationfortrialremaintwomeal();
                    }
                }
                else if (localStorage.getItem('mealcount') == "1") {
                    if (localStorage.getItem('countitems') != '1') {
                        localStorage.setItem('countitems', '1');
                        _this.singlenotificationfortrialremainonemeals();
                    }
                }
            }
            else {
                if (localStorage.getItem('mealcount') == "1") {
                    if (localStorage.getItem('countitemss') != '1') {
                        localStorage.setItem('countitemss', '1');
                        _this.singlenotificationfortrialremainonemeals();
                    }
                }
                _this.renewtoday = new Date();
                _this.today = new Date();
                var lengths = _this.today.getMonth() + 1;
                var lengthsday = _this.today.getDate();
                if (lengths > 9) {
                    if (lengthsday > 9) {
                        _this.renewsetdate = _this.renewtoday.getFullYear().toString() + '-' + (_this.renewtoday.getMonth() + 1).toString() + '-' + (_this.renewtoday.getDate()).toString();
                    }
                    else {
                        var append = '0' + lengths;
                        var appendday = '0' + lengthsday;
                        _this.renewsetdate = _this.today.getFullYear().toString() + '-' + (append).toString() + '-' + (appendday).toString();
                    }
                }
                else {
                    var append = '0' + lengths;
                    if (lengthsday > 9) {
                        _this.renewsetdate = _this.renewtoday.getFullYear().toString() + '-' + (append).toString() + '-' + (_this.renewtoday.getDate()).toString();
                    }
                    else {
                        var append_1 = '0' + lengths;
                        var appendday = '0' + lengthsday;
                        _this.renewsetdate = _this.today.getFullYear().toString() + '-' + (append_1).toString() + '-' + (appendday).toString();
                    }
                }
                _this.enddatess = localStorage.getItem('renew_before_two');
                _this.enddates = localStorage.getItem('renew_before_ten');
                _this.enddatesss = localStorage.getItem('renew_before_five');
                localStorage.setItem('alternatenoti', '0');
                if (_this.renewsetdate == _this.enddatess) {
                    if (_this.days == 'wednesday') {
                        if (localStorage.getItem('alternatenoti') == '0') {
                            _this.tendaybeforeschedule();
                            localStorage.setItem('alternatenoti', '1');
                        }
                        else {
                            _this.tendaybeforeschedule1();
                            localStorage.setItem('alternatenoti', '0');
                        }
                    }
                }
                if (_this.renewsetdate == _this.enddatess) {
                    if (localStorage.getItem('twovaldata') != "twoval") {
                        localStorage.setItem('twovaldata', 'twoval');
                        _this.twodaybeforeschedule();
                    }
                }
                if (_this.renewsetdate == _this.enddatesss) {
                    if (localStorage.getItem('twovaldata') != "fiveval") {
                        localStorage.setItem('twovaldata', 'fiveval');
                        _this.fivedaybeforeschedule();
                    }
                }
            }
        });
    };
    DashboardPage.prototype.showConfirmAlert = function () {
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
                                        _this.nav.setRoot('DashboardPage');
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
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/dashboard/dashboard.html"*/'<!-- \n<ion-header no-border class="dashboard-heading">\n  <ion-navbar class="dashboard-navbar text-center">\n    <button class="image-icon" ion-button menuToggle>\n      <img name="menu" src="assets/imgicon/Hamburger_menu.png" />\n    </button>\n    <p class="dshboard-title"><span>DASHBOARD</span></p>\n    <img class="image-icon2" src="assets/imgicon/Group 69.png" slot="secondary">\n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-header no-border class="dashboard-heading">\n  <ion-navbar class="dashboard-navbar">\n    <img class="image-icon backWhiteIcon" ion-button menuToggle name="menu" src="assets/imgicon/Hamburger_menu.svg"/>\n    <ion-title class="dshboard-title">DASHBOARD</ion-title>\n    <!-- <img class="image-icon2" src="assets/imgicon/Group 69.png" slot="secondary"> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="dashboard-content">\n  <div class="main-dashboard">\n    <div class="user-welcome">\n        <label >Welcome Back,</label><br>\n        <span class="label1">{{custname}}</span>\n    </div>\n    <!--  Lunch and dinner plan box start -->\n    <ion-grid>\n      <ion-row>\n        <ion-col class="main-column">\n          <div class="plan-name">\n            <ion-row>\n              <ion-col>\n                <h2 class="onboard-click firsth2" block>{{mealtyp}} Plan</h2>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class="round-off">\n              <ion-col col-6 text-center class="vl">\n                <ion-row>\n                    <ion-col col-5 style="vertical-align: middle; margin: auto;">\n                      <div class="inner-inline">\n                        <round-progress class="roundvalues" [current]="current" [max]="actualmealcount" [stroke]="stroke" [radius]="radius"\n                          [semicircle]="semicircle" [rounded]="rounded" [responsive]="responsive" [clockwise]="clockwise"\n                          [color]="gradient ? \'url(#gradient)\' : color" [background]="background" [duration]="duration"\n                          [animation]="animation" [animationDelay]="animationDelay"></round-progress>\n                      </div>\n                    </ion-col>\n                    <ion-col col-7 text-left style="padding-left: 0;">\n                      <div  class="onboard-click inner-inline2" block>\n                        <div style="display: block; text-align: left;">\n                          <h1 >{{current}}</h1>\n                        </div>\n                        <p > Meals left</p>\n                      </div>\n                    </ion-col>\n                </ion-row>\n                \n             \n              </ion-col>\n\n              <!-- <ion-col col-2 text-center class="left-round-off">\n                <div class="vl"></div>\n              </ion-col> -->\n              <ion-col col-1 text-center></ion-col>\n            \n              <ion-col col-5 text-center>\n                <ion-row>\n                  <ion-col col-5 style="vertical-align: middle; margin: auto;">\n                    <div class="inner-inline">\n                      <round-progress class="roundvalues" [current]="current1" [max]="actualmealdays" [stroke]="stroke" [radius]="radius"\n                        [semicircle]="semicircle" [rounded]="rounded" [responsive]="responsive" [clockwise]="clockwise"\n                        [color]="gradient ? \'url(#gradient)\' : color" [background]="background" [duration]="duration"\n                        [animation]="animation" [animationDelay]="animationDelay"></round-progress>\n                    </div>\n                  </ion-col>\n                  <ion-col col-7 text-left style=" padding-left: 1.985vw;">\n                    <div class="onboard-click inner-inline2" block>\n                      <div style="display: block; text-align: left;">\n                        <h1 >{{currentmealperiod}} </h1>\n                      </div>\n                      <p>Days left</p>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                \n              </ion-col>\n            </ion-row>\n\n           \n            <!-- Subscription Period start-->\n            <ion-row>\n              <ion-col>\n                <h2 class="onboard-click subscription-period" block>\n                  Subscription Period\n                </h2>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-6>\n                <div style="width: calc(100% - 5.333vw); float: left;margin-left: 5.333vw;">\n                  <label class="fromdate"> FROM </label>\n                  <h4 class="fromdateh4">\n                    {{(startdate)?.substring(0,10)|date:\'d MMM y\'}}</h4>\n                </div>\n              </ion-col>\n\n              <ion-col col-6>\n                <div style="width: calc(100% - 3.2vh); float: left; margin-left: 3.2vh;">\n                  <label class="fromdate">TO</label>\n                  <h4 class="fromdateh4">\n                    {{(enddate)?.substring(0,10)|date:\'d MMM y\'}} </h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <!-- Subscription Period End -->\n\n            <!-- Renew Subscription Start -->\n            <ion-row>\n              <ion-col>\n                <div class="renew-sub" (click)="renewsubscription()">\n                  <p > Renew Subscription</p>\n                </div>\n                <!-- <div class="renew-sub" >\n                  <p > Renew Subscription</p>\n                </div> -->\n              </ion-col>\n            </ion-row>\n            <!-- Renuw Subscription End disabled (click)="renewsubscription()" -->\n\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- (click)=\'picktmrwveggies()\' [disabled]="!custstatus || PickVeggiesTabCheck==\'false\'"   -->\n    <ion-grid class="bottomContaint">\n      <div class="tomorrow-main"  [style.background]="buttonColor1">\n        <ion-row>\n          <ion-col col-11>\n              <button [style.background]="buttonColor1" (click)="picktmrwveggies()" >\n              <label >Pick Tommorow\'s Veggies</label>\n              <p >Choose your choice of veggies for meals </p>\n            </button>\n          \n          </ion-col>\n\n          <ion-col col-1 text-right style="vertical-align: middle; margin: auto;">\n            <div class="">\n              <img src="assets/imgicon/Path 34.png" />\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style="padding: 0;">\n          <h1 class="manage-account">Manage Account</h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style="margin-bottom:2.998vh;">\n      <ion-row class="margin-row">\n        <ion-col col-6>\n          <div class="four-box">\n            <!--[disabled]="!custstatus || trial_subscriptionTabCheck==true" [style.background]="orderGuestButton"   -->\n            <button  class="user-selection" (click)="orderGUestMeal()">\n              <div class="col-12">\n                <img class="first-image" src="assets/GuestMeal_ic.svg">\n              </div>\n              <div class="col-12">\n                <h4 class="first-heading">Order Guest <br> Meal</h4>\n              </div>  \n            </button>\n          </div>    \n        </ion-col>\n        <ion-col col-6>\n          <div class="four-box">\n            <!-- [disabled]="!custstatus || cancelMealTabCheck==\'false\'" [style.background]="cancelTabButton"\n              [style.background]="allbutton" -->\n              <button class="user-selection" (click)="cancelMeal()">\n                <div class="col-12">\n                  <img class="second-image"src="assets/cancelMeal_ic.svg">\n                </div>\n                <div class="col-12">\n                  <h4 class="second-heading">Cancel <br> Meal</h4>\n                </div>\n              </button>\n          </div>        \n        </ion-col>\n      </ion-row>\n\n      <ion-row class="margin-row">\n        <ion-col col-6>\n          <div class="four-box">\n            <!--[disabled]="!custstatus" [style.background]="allbutton" [style.background]="switchaddresstime1"-->\n            <button class="user-selection" (click)="switchAddressTime()">\n              <div class="col-12">\n                <img class="third-image" src="assets/Sitch_ic.svg">\n              </div>\n              <div class="col-12">\n                <h4 class="third-heading">Switch Address <br> /Time</h4>\n              </div>\n            </button>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div class="four-box">\n            <!--[style.background]="allbutton" [style.background]="switchaddresstime1" [disabled]="!custstatus"(click)="changeupgrade()" -->\n            <button class="user-selection" (click)="changeupgrade()">\n              <div class="col-12">\n                <img class="four-image" src="assets/Upgrade-ic.svg">\n              </div>\n              <div class="col-12">\n                <h4 class="four-heading">Change/Upgrade <br> Meal Type</h4>\n              </div>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_6__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
 * Service for API access
 */
var APIService = (function () {
    function APIService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.headers = null;
        this.coundays = 1;
        this.loginStatus$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
        // this.rootUrl = 'http://68.183.87.209/public/api/v3/';  // Production
        // this.rootUrl = 'https://app.mummymeals.in/public/api/v4ios/';
        // this.rootUrl = 'https://app.mummymeals.in/public/api/v4/';  // Production
        // this.rootUrl = 'http://103.79.100.31:9007/api/v4/';  // Test
        this.rootUrl = 'http://103.79.100.31:9007/api/v4/'; // Development
        //this.rootUrl = 'http://159.89.167.186/public/api/v3/';  // Test
        this.categories = [];
        this.restaurants = [];
        this.delivery_areas = [];
        this.token = null;
        this.userData = {
            id: null,
            city_id: null,
            name: '',
            phone: ''
        };
    }
    APIService.prototype.getLoginStatus = function () {
        return this.loginStatus$;
    };
    APIService.prototype.reloadCategories = function (restaurant_id) {
        var _this = this;
        var url = this.rootUrl + "categories";
        if (restaurant_id) {
            url = url + "?restaurant_id=" + restaurant_id;
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(url).toPromise().then(function (response) {
                _this.categories = response.json();
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.deliveryaddress = function (token, id, lunchadd, dinneradd, Lsat, Lsun, Dsat, Dsun) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: token,
            subscription_customer_id: id,
            delivery_lunch_address: lunchadd,
            delivery_dinner_address: dinneradd,
            weekend_lunch_saturday: Lsat,
            weekend_lunch_sunday: Lsun,
            weekend_dinner_saturday: Dsat,
            weekend_dinner_sunday: Dsun,
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "addDeliveryAddress", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.reloadRestaurants = function (city_id) {
        var _this = this;
        var url = this.rootUrl + "restaurants";
        if (city_id) {
            url = url + "?city_id=" + city_id;
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(url).toPromise().then(function (response) {
                _this.restaurants = response.json();
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.loadDeliveryAreas = function (city_id) {
        var _this = this;
        var url = this.rootUrl + "delivery_areas";
        if (city_id) {
            url = url + "?city_id=" + city_id;
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(url).toPromise().then(function (response) {
                _this.delivery_areas = response.json();
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.getCategories = function () {
        return this.categories;
    };
    APIService.prototype.getRestaurants = function () {
        return this.restaurants;
    };
    APIService.prototype.getSettings = function () {
        return this.settings;
    };
    APIService.prototype.getDeliveryAreas = function () {
        return this.delivery_areas;
    };
    APIService.prototype.getCities = function () {
        return this.cities;
    };
    APIService.prototype.getToken = function () {
        return this.token;
    };
    APIService.prototype.getUserData = function () {
        return this.userData;
    };
    APIService.prototype.getProducts = function (category_id) {
        var url = this.rootUrl + ("products?category_id=" + category_id);
        return this.http.get(url).toPromise();
    };
    APIService.prototype.getNews = function (page, city_id) {
        var url = this.rootUrl + ("news?page=" + page);
        if (city_id) {
            url = url + "&city_id=" + city_id;
        }
        return this.http.get(url).toPromise();
    };
    APIService.prototype.createOrder = function (data) {
        return this.http.post(this.rootUrl + "order", data, {
            headers: this.headers
        }).toPromise();
    };
    APIService.prototype.validateDiscount = function (data) {
        return this.http.post(this.rootUrl + "promo_codes/validate", data).map(function (response) {
            return response.json();
        });
    };
    APIService.prototype.setToken = function (v) {
        this.token = v;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            token: this.token
        });
    };
    APIService.prototype.isLoggedIn = function () {
        return (this.token != null && (this.settings.signup_required == 1));
    };
    APIService.prototype.init = function () {
        var _this = this;
        var serverFetched = false;
        this.storage.get('data').then(function (v) {
            if (v && !serverFetched) {
                var data = JSON.parse(v);
                _this.categories = data.categories;
                _this.settings = data.settings;
            }
        });
        this.storage.get('token').then(function (v) {
            if (v) {
                _this.setToken(v);
            }
        });
        this.storage.get('userData').then(function (v) {
            if (v) {
                _this.userData = JSON.parse(v);
            }
        }, function (e) {
        });
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "settings").toPromise().then(function (response) {
                serverFetched = true;
                var data = response.json();
                _this.storage.set('data', JSON.stringify(data)).then(function () {
                }, function () {
                });
                _this.categories = data.categories;
                _this.settings = data.settings;
                if (data.delivery_areas) {
                    _this.delivery_areas = data.delivery_areas;
                }
                if (data.cities) {
                    _this.cities = data.cities;
                }
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.signup = function (data) {
        var _this = this;
        // let headers = new HttpHeaders({'Content-Type': 'application/json'});
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "customers", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.aboutyou = function (id, fname, email, lname, mobnum, token, profid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            id: id,
            name: fname,
            email: email,
            lastname: lname,
            contactNumber: mobnum,
            token: token,
            profession: profid
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "customers", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.selectstartdate = function (date, id, token, enddate) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            subscription_customer_id: id,
            start_date: date,
            token: token,
            end_date: enddate
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "addStartDate", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.login = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "sendOtp2", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.Verifyotp = function (mobnum, otp, time, token, id, newnum) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            number: mobnum,
            otp: otp,
            time: time,
            token: token,
            id: id,
            update_number: newnum
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "validateOtp", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.saveUserData = function (data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put(_this.rootUrl + "customers/1", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.success) {
                    var reload_1 = false;
                    if (_this.userData.city_id != response.customer.city_id) {
                        reload_1 = true;
                    }
                    _this.userData = response.customer;
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                        if (reload_1) {
                            window['location'].reload();
                        }
                    }, function () {
                    });
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.getOrders = function () {
        return this.http.get(this.rootUrl + "orders", {
            headers: this.headers
        }).map(function (response) {
            return response.json();
        });
    };
    APIService.prototype.showselectarea = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "getallAreaDetails").map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.displayonboarding = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "getallContent").map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.loadUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "me", {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                _this.storage.set('userData', JSON.stringify(response)).then(function () { }, function () { });
                _this.userData = response;
                resolve(response);
            }, function () {
                reject({});
            });
        });
    };
    APIService.prototype.orderTracker = function () {
        return this.http.get(this.rootUrl + "tracker", {
            headers: this.headers
        }).map(function (response) {
            return response.json();
        });
    };
    APIService.prototype.savePushToken = function (push_token) {
        return this.http.post(this.rootUrl + "push_token_cust", {
            push_token: push_token
        }, {
            headers: this.headers
        }).map(function (response) {
            return response.json();
        }).subscribe(function () {
        }, function () { });
    };
    APIService.prototype.showSubscription = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            var tokendata = localStorage.getItem('token');
            var data = { token: tokendata };
            _this.http.post(_this.rootUrl + "subscription_plan", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.subscription = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            var tokendata = localStorage.getItem('token');
            var customer_id = localStorage.getItem('id');
            var subscription_id = localStorage.getItem('subscription_id');
            var data = { token: tokendata, customer_id: customer_id, subscription_id: subscription_id };
            _this.http.post(_this.rootUrl + "add_subscription_plan", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.showMealType = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var tokendata = localStorage.getItem('token');
        var subscription_id = localStorage.getItem('subscription_id');
        var promise = new Promise(function (resolve, reject) {
            var tokendata = localStorage.getItem('token');
            var data = { token: tokendata, subscription_id: subscription_id };
            _this.http.post(_this.rootUrl + "mealType", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.mealType = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var tokendata = localStorage.getItem('token');
        var mealId = localStorage.getItem('mealId');
        var subscription_id = localStorage.getItem('subscription_id');
        var promise = new Promise(function (resolve, reject) {
            var data = { token: tokendata, subscription_id: subscription_id };
            _this.http.post(_this.rootUrl + "mealMenu", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.deliverytime = function (lunch1, dinner1, token, id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            delivery_lunch_timing: lunch1,
            delivery_dinner_timing: dinner1,
            token: token,
            subscription_customer_id: id
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "addDeliveryTime", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.choosepreference = function (id, fname, email, lname, mobnum, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            id: id,
            name: fname,
            email: email,
            lastname: lname,
            contactNumber: mobnum,
            token: token,
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "customers", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.preferenceType = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var tokendata = localStorage.getItem('token');
        var mealId = localStorage.getItem('mealId');
        var subscription_id = localStorage.getItem('subscription_id');
        var promise = new Promise(function (resolve, reject) {
            var data = { meal_type: mealId, token: tokendata, subscription_id: subscription_id };
            _this.http.post(_this.rootUrl + "mealMenu", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.preferenceupDateype = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            var tokendata = localStorage.getItem('token');
            var data = { token: tokendata };
            _this.http.post(_this.rootUrl + "addCustomizeProduct", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.addAddress = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "addAddress", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.showDeliveryAddress = function () {
        var _this = this;
        var tokendata = localStorage.getItem('token');
        var customer_id = localStorage.getItem('id');
        var data = { token: tokendata, customer_id: customer_id };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "getaddress", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.showsFAQ = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "getfaq").map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.displayCheckoutData = function (tokendata, customer_subscription_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = { customer_subscription_id: customer_subscription_id, token: tokendata };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "checkout", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.displayTermsAndPolicy = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "getterms").map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.Dashboard = function (id, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "dashboard", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.paymentDetails = function () {
        var _this = this;
        var tokendata = localStorage.getItem('token');
        var customer_id = localStorage.getItem('id');
        var subscription_id = localStorage.getItem('subscription_id');
        var payment_id = localStorage.getItem('payment_id');
        var customer_subscription_id = localStorage.getItem('customer_subscription_id');
        var Total = localStorage.getItem('Total');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: customer_id,
            subscription_id: subscription_id,
            customer_subscription_id: customer_subscription_id,
            payment_id: payment_id,
            amount: Total,
            payment_status: "success",
            token: tokendata
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "payementDetail", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.addsubscriptionPlan = function (data_product, cgst, igst, renew, reference_id, is_update) {
        var _this = this;
        // alert(data_product);
        var tokendata = localStorage.getItem('token');
        var customer_id = localStorage.getItem('id');
        var subscription_id = localStorage.getItem('subscription_id');
        var payment_id = localStorage.getItem('payment_id');
        var customer_subscription_id = localStorage.getItem('customer_subscription_id');
        var Total = localStorage.getItem('Total');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var weekend_lunch_saturday;
        var weekend_lunch_sunday;
        var weekend_dinner_saturday;
        var weekend_dinner_sunday;
        var dinnertime;
        var lunchtime;
        var deldinnertime;
        var dellunchtime;
        if (localStorage.getItem('l1')) {
            weekend_lunch_saturday = localStorage.getItem('l1');
        }
        else {
            weekend_lunch_saturday = '0';
        }
        if (localStorage.getItem('l2')) {
            weekend_lunch_sunday = localStorage.getItem('l2');
        }
        else {
            weekend_lunch_sunday = '0';
        }
        if (localStorage.getItem('d1')) {
            weekend_dinner_saturday = localStorage.getItem('d1');
        }
        else {
            weekend_dinner_saturday = '0';
        }
        if (localStorage.getItem('d2')) {
            weekend_dinner_sunday = localStorage.getItem('d2');
        }
        else {
            weekend_dinner_sunday = '0';
        }
        if (localStorage.getItem('dinner1') == '') {
            dinnertime = "0";
        }
        else {
            dinnertime = localStorage.getItem('dinner1');
        }
        if (localStorage.getItem('lunch1') == '') {
            lunchtime = "0";
        }
        else {
            lunchtime = localStorage.getItem('lunch1');
        }
        if (localStorage.getItem('lunch_add') == '') {
            dellunchtime = "0";
        }
        else {
            dellunchtime = localStorage.getItem('lunch_add');
        }
        if (localStorage.getItem('dinner_add') == '') {
            deldinnertime = "0";
        }
        else {
            deldinnertime = localStorage.getItem('dinner_add');
        }
        var data = {
            token: tokendata,
            customer_id: customer_id,
            reference_id: reference_id,
            subscription_id: subscription_id,
            start_date: localStorage.getItem('StartDate'),
            end_date: localStorage.getItem('endDate'),
            delivery_lunch_timing: lunchtime,
            delivery_dinner_timing: dinnertime,
            delivery_lunch_address: dellunchtime,
            delivery_dinner_address: deldinnertime,
            weekend_lunch_saturday: weekend_lunch_saturday,
            weekend_lunch_sunday: weekend_lunch_sunday,
            weekend_dinner_saturday: weekend_dinner_saturday,
            weekend_dinner_sunday: weekend_dinner_sunday,
            meal_type: localStorage.getItem('mealId'),
            payment_id: payment_id,
            amount: Total,
            payment_status: "success",
            lunch_meal_menu: localStorage.getItem('lunch_meal_menu'),
            dinner_meal_menu: localStorage.getItem('dinner_meal_menu'),
            subscription_period: localStorage.getItem('mealdays'),
            cancel_meal_count: localStorage.getItem('cancel_count'),
            monthly_cost: localStorage.getItem('price'),
            extra_roti: localStorage.getItem('extra_price'),
            extra_rice: '0',
            CGST_amount: cgst,
            IGST_amount: igst,
            renew: renew,
            data: data_product,
            is_update: is_update
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "addsubscriptionPayementPlan", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.pickurvegi = function (id, token, cust_sub_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token,
            customer_subscription_id: cust_sub_id
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "getmenuproduct", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.showGuestMeal = function (token) {
        var _this = this;
        var data = { token: token };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "listofmealtype", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.guestmeal = function (tokendata, customer_id, mynum1, mynum2, lunchmealtype, dinnermealtype, date) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: tokendata,
            customer_id: customer_id,
            lunchquantity: mynum1,
            dinnerquantity: mynum2,
            lunchmealtype: lunchmealtype,
            dinnermealtype: dinnermealtype,
            date: date
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "guestmeal", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.addCustomizeProduct = function (lunch_meal_menu, dinner_meal_menu, meal_type, product) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: localStorage.getItem('token'),
            customer_id: localStorage.getItem('id'),
            customer_subscription_id: localStorage.getItem('subscription_id'),
            lunch_meal_menu: lunch_meal_menu,
            dinner_meal_menu: dinner_meal_menu,
            meal_type: meal_type,
            product: product
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "addCustomizeProduct", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    //   checkoutdetail( tokendata, customer_id , date)
    // {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    // var data={token:tokendata,
    // customer_id:customer_id,
    // date:date
    // }
    // let promise = new Promise((resolve, reject) => {
    // this.http.post(`${this.rootUrl}checkoutdetail`, data, {
    // headers: this.headers
    // }).map(response => {
    // return response.json();
    // }).subscribe((res) => {
    // if (res.success) {
    // this.setToken(res.token);
    // this.storage.set('token', res.token).then(() => {
    // }, () => {
    // });
    // this.loginStatus$.next(true);
    // }
    // resolve(res);
    // }, () => {
    // reject({});
    // });
    // });
    // return promise;
    // }
    APIService.prototype.aboutus = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "getaboutus").map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.termnpri = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "getterms").map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.customerdetail = function (id, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "getAllCustomerDetail", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.checkoutdetail = function (tokendata, customer_id, date) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: tokendata,
            customer_id: customer_id,
            date: date
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "checkoutdetail", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.guestmeal_payment = function (customer_subscription_id, customer_id, payment_id, payment_status, amount, date) {
        var _this = this;
        var tokendata = localStorage.getItem('token');
        // var customer_id = localStorage.getItem('id');
        // var subscription_id = localStorage.getItem('subscription_id');
        // var payment_id = localStorage.getItem('payment_id');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: customer_id,
            payment_id: payment_id,
            payment_status: payment_status,
            amount: amount,
            token: tokendata,
            date: date,
            customer_subscription_id: customer_subscription_id
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "guestmeal_payment", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.showCountMeal = function (tokendata, customer_id, customer_subscription_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: customer_id,
            token: tokendata,
            customer_subscription_id: customer_subscription_id
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "meal_cancel_count", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.cancelmeal = function (customer_subscription_id, customer_id, meal_type, toDate, fromDate) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_subscription_id: customer_subscription_id,
            customer_id: customer_id,
            meal_type: meal_type,
            to_date: toDate,
            from_date: fromDate
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "cancelmeal", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.getexistingaddress_time = function (tokendata, customer_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: tokendata,
            customer_id: customer_id,
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "getexistingaddress_time", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.switch_address = function (tokendata, address_name, customer_subscription_id, l1, l2, fromDate, toDate, meal_type, customer_id1) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: tokendata,
            address_name: address_name,
            customer_subscription_id: customer_subscription_id,
            weekend_lunch_saturday: l1,
            weekend_lunch_sunday: l2,
            weekend_dinner_saturday: l1,
            weekend_dinner_sunday: l2,
            from_date: fromDate,
            todate: toDate,
            meal_type: meal_type,
            customer_id: customer_id1
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "switch_address", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    //   switch_time()
    //   {
    //      let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     var data = {
    //       token: tokendata,
    //       customer_id:
    //       address_name: address_name,
    //       customer_subscription_id: customer_subscription_id,
    //       weekend_saturday: l1,
    //       weekend_sunday: l2,
    //       from_date: fromDate,
    //       todate: toDate,
    //       meal_type: meal_type,
    //       customer_id1: customer_id1
    //  }
    //     let promise = new Promise((resolve, reject) => {
    //       this.http.post(`${this.rootUrl}switch_address`, data, {
    //         headers: this.headers
    //       }).map(response => {
    //         return response.json();
    //       }).subscribe((res) => {
    //         if (res.success) {
    //           this.setToken(res.token);
    //           this.storage.set('token', res.token).then(() => {
    //           }, () => {
    //           });
    //           this.loginStatus$.next(true);
    //         }
    //         resolve(res);
    //       }, () => {
    //         reject({});
    //       });
    //     });
    //     return promise;
    //   }
    APIService.prototype.orderhistory = function (id, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "subscriptionHistory", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.updatepersonalinfo = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "updatepersonalInfo", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.selectedlunchveggies = function (id, token, cust_sub_id, subid, custtype, lbid, lbqty, lsid, lsqty, mealtype, lunchorid, dinnerorid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (lbid == "") {
            var data = {
                token: token,
                subscription_id: subid,
                customer_id: id,
                customer_subscription_id: cust_sub_id,
                user_type: custtype,
                // is_guest_meal: "1",
                meal_type: mealtype,
                dinner_order_id: dinnerorid,
                lunch_order_id: lunchorid,
                data: {
                    submeal_type: [
                        {
                            id: lsid,
                            qty: lsqty
                        }
                    ]
                }
            };
        }
        else {
            var data = {
                token: token,
                subscription_id: subid,
                customer_id: id,
                customer_subscription_id: cust_sub_id,
                user_type: custtype,
                // is_guest_meal: "1",
                meal_type: mealtype,
                dinner_order_id: dinnerorid,
                lunch_order_id: lunchorid,
                data: {
                    submeal_type: [{
                            id: lbid,
                            qty: lbqty
                        }
                    ]
                }
            };
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "finalorder", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.selecteddatetime = function (tokendata, customer_id, fromDate, toDate, mealType) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: tokendata,
            customer_id: customer_id,
            startdate: fromDate,
            enddate: toDate,
            mealtype: mealType
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "selecteddatetime", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.selectedDinnerveggies = function (id, token, cust_sub_id, subid, custtype, dbid, dbqty, dsid, dsqty, mealtype, lunchorid, dinnerorid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (dbid == "") {
            var data = {
                token: token,
                subscription_id: subid,
                customer_id: id,
                customer_subscription_id: cust_sub_id,
                user_type: custtype,
                // is_guest_meal: "1",
                dinner_order_id: dinnerorid,
                lunch_order_id: lunchorid,
                meal_type: mealtype,
                data: {
                    submeal_type1: [
                        {
                            id: dsid,
                            qty: dsqty
                        }
                    ]
                }
            };
        }
        else {
            var data = {
                token: token,
                subscription_id: subid,
                customer_id: id,
                customer_subscription_id: cust_sub_id,
                user_type: custtype,
                // is_guest_meal: "1",
                dinner_order_id: dinnerorid,
                lunch_order_id: lunchorid,
                meal_type: mealtype,
                data: {
                    submeal_type1: [{
                            id: dbid,
                            qty: dbqty
                        }
                    ]
                }
            };
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "finalorder", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.selectedveggies = function (id, token, cust_sub_id, subid, custtype, lbid, lbqty, lsid, lsqty, dbid, dbqty, dsid, dsqty, mealtype, lunchorid, dinnerorid, cancelmealtype) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (cancelmealtype == 'lunch') {
            if (dbid == "" && dsid != "") {
                var datas = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type1: [
                            {
                                id: dsid,
                                qty: dsqty
                            }
                        ]
                    }
                };
            }
            else {
                var datas = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type1: [{
                                id: dbid,
                                qty: dbqty
                            }
                        ]
                    }
                };
            }
            var promise = new Promise(function (resolve, reject) {
                _this.http.post(_this.rootUrl + "finalorder", datas, options).map(function (response) {
                    return response.json();
                }).subscribe(function (success) {
                    if (success.token != '') {
                        _this.setToken(success.token);
                        _this.userData = success.customer;
                        _this.storage.set('token', success.token).then(function () {
                        });
                        _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                        });
                        _this.loginStatus$.next(true);
                    }
                    resolve(success);
                }, function () {
                    reject({});
                });
            });
            return promise;
        }
        else if (cancelmealtype == 'dinner') {
            if (lbid == "" && lsid != "") {
                var datass = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type: [
                            {
                                id: lsid,
                                qty: lsqty
                            }
                        ]
                    }
                };
            }
            else {
                var datass = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type: [{
                                id: lbid,
                                qty: lbqty
                            }
                        ]
                    }
                };
            }
            var promise = new Promise(function (resolve, reject) {
                _this.http.post(_this.rootUrl + "finalorder", datass, options).map(function (response) {
                    return response.json();
                }).subscribe(function (success) {
                    if (success.token != '') {
                        _this.setToken(success.token);
                        _this.userData = success.customer;
                        _this.storage.set('token', success.token).then(function () {
                        });
                        _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                        });
                        _this.loginStatus$.next(true);
                    }
                    resolve(success);
                }, function () {
                    reject({});
                });
            });
            return promise;
        }
        else {
            console.log(lbid);
            console.log(dbid);
            console.log(lsid);
            console.log(dsid);
            if (lbid == "" && dbid == "" && lsid != "" && dsid != "") {
                console.log('innn');
                var data = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    // is_guest_meal: "1",
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type: [
                            {
                                id: lsid,
                                qty: lsqty
                            }
                        ],
                        submeal_type1: [
                            {
                                id: dsid,
                                qty: dsqty
                            }
                        ]
                    }
                };
            }
            else if (lbid == "" && dbid != "" && lsid != "" && dsid == "") {
                var data = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    // is_guest_meal: "1",
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type: [
                            {
                                id: lsid,
                                qty: lsqty
                            }
                        ],
                        submeal_type1: [{
                                id: dbid,
                                qty: dbqty
                            }
                        ]
                    }
                };
            }
            else if (lbid != "" && dbid == "" && lsid == "" && dsid != "") {
                var data = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    // is_guest_meal: "1",
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type: [
                            {
                                id: lbid,
                                qty: lbqty
                            }
                        ],
                        submeal_type1: [
                            {
                                id: dsid,
                                qty: dsqty
                            }
                        ]
                    }
                };
            }
            else if (lbid != "" && dbid != "" && lsid == "" && dsid == "") {
                var data = {
                    token: token,
                    subscription_id: subid,
                    customer_id: id,
                    customer_subscription_id: cust_sub_id,
                    user_type: custtype,
                    // is_guest_meal: "1",
                    dinner_order_id: dinnerorid,
                    lunch_order_id: lunchorid,
                    meal_type: mealtype,
                    data: {
                        submeal_type: [
                            {
                                id: lbid,
                                qty: lbqty
                            }
                        ],
                        submeal_type1: [{
                                id: dbid,
                                qty: dbqty
                            }
                        ]
                    }
                };
            }
            var promise = new Promise(function (resolve, reject) {
                _this.http.post(_this.rootUrl + "finalorder", data, options).map(function (response) {
                    return response.json();
                }).subscribe(function (success) {
                    if (success.token != '') {
                        _this.setToken(success.token);
                        _this.userData = success.customer;
                        _this.storage.set('token', success.token).then(function () {
                        });
                        _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                        });
                        _this.loginStatus$.next(true);
                    }
                    resolve(success);
                }, function () {
                    reject({});
                });
            });
            return promise;
        }
    };
    APIService.prototype.switch_time = function (tokendata, customer_id, ChooseTime1, toDate1, fromDate1, meal_type, customer_subscription_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: tokendata,
            customer_id: customer_id,
            delivery_timing: ChooseTime1,
            todate: toDate1,
            from_date: fromDate1,
            meal_type: meal_type,
            customer_subscription_id: customer_subscription_id
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "switch_time", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.guestMealHistory = function (custToken, custid, history) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: custToken,
            customer_id: custid,
            history: history
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "guestMealHistory", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.getaContent = function (page_name) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            page_name: page_name
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "getaContent", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.UploadFile = function (customerid, custtoken, base64Image) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            token: custtoken,
            customer_id: customerid,
            image: base64Image
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "profileimage", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success == 'Successfully_Uploaded') {
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.renewsubscription = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "getsubscriptionPlan", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.referandearn = function (referCode, reference_id, tokendata) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            refer_code: referCode,
            reference_id: reference_id,
            token: tokendata,
            subscription_id: localStorage.getItem('subscription_id'),
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "referandearn", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.referexistornot = function (tokendata, referCode) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            refer_code: referCode,
            token: tokendata
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "referexistornot", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.showprofession = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "professionlisting").map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.notification = function (id, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "notificationdata", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.notificationdata_check = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "notificationdata_check", data, options).map(function (response) {
                // headers : headers
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '') {
                    _this.setToken(success.token);
                    _this.userData = success.customer;
                    _this.storage.set('token', success.token).then(function () {
                    });
                    _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(success);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.mealhistory_check = function (id, token, custsubid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token,
            customer_subscription_id: custsubid
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "mealhistory_check", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.getcurrentpaln = function (id, token, custsubid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token,
            customer_subscription_id: custsubid
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "getcurrentpaln", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.payementfail = function (id, type, token, payment_id, amount) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            type: type,
            token: token,
            customer_subscription_id: 0,
            amount: amount,
            payment_status: 'success',
            payment_id: payment_id
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "payementfail", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.checkpayementstatus = function (id, type, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            customer_id: id,
            token: token,
            type: type
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "checkpayementstatus", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (success) {
                if (success.token != '')
                    _this.setToken(success.token);
                _this.userData = success.customer;
                _this.storage.set('token', success.token).then(function () {
                });
                _this.storage.set('userData', JSON.stringify(success.customer)).then(function () {
                });
                _this.loginStatus$.next(true);
                resolve(success);
            });
        });
        return promise;
    };
    APIService.prototype.checkIfapifailed = function (total, mealtypes, date, type, lunchPreference, dinnerPreference, cgst, igst, renew, reference_id) {
        var _this = this;
        var tokendata = localStorage.getItem('token');
        var customer_id = localStorage.getItem('id');
        var subscription_id = localStorage.getItem('subscription_id');
        var payment_id = localStorage.getItem('payment_id');
        var customer_subscription_id = localStorage.getItem('customer_subscription_id');
        var Total = localStorage.getItem('Total');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var weekend_lunch_saturday;
        var weekend_lunch_sunday;
        var weekend_dinner_saturday;
        var weekend_dinner_sunday;
        var dinnertime;
        var lunchtime;
        var deldinnertime;
        var dellunchtime;
        if (localStorage.getItem('l1')) {
            weekend_lunch_saturday = localStorage.getItem('l1');
        }
        else {
            weekend_lunch_saturday = '0';
        }
        if (localStorage.getItem('l2')) {
            weekend_lunch_sunday = localStorage.getItem('l2');
        }
        else {
            weekend_lunch_sunday = '0';
        }
        if (localStorage.getItem('d1')) {
            weekend_dinner_saturday = localStorage.getItem('d1');
        }
        else {
            weekend_dinner_saturday = '0';
        }
        if (localStorage.getItem('d2')) {
            weekend_dinner_sunday = localStorage.getItem('d2');
        }
        else {
            weekend_dinner_sunday = '0';
        }
        if (localStorage.getItem('dinner1') == '') {
            dinnertime = "0";
        }
        else {
            dinnertime = localStorage.getItem('dinner1');
        }
        if (localStorage.getItem('lunch1') == '') {
            lunchtime = "0";
        }
        else {
            lunchtime = localStorage.getItem('lunch1');
        }
        if (localStorage.getItem('lunch_add') == '') {
            dellunchtime = "0";
        }
        else {
            dellunchtime = localStorage.getItem('lunch_add');
        }
        if (localStorage.getItem('dinner_add') == '') {
            deldinnertime = "0";
        }
        else {
            deldinnertime = localStorage.getItem('dinner_add');
        }
        var data = {
            token: tokendata,
            customer_id: customer_id,
            reference_id: reference_id,
            subscription_id: subscription_id,
            start_date: localStorage.getItem('StartDate'),
            end_date: localStorage.getItem('endDate'),
            delivery_lunch_timing: lunchtime,
            delivery_dinner_timing: dinnertime,
            delivery_lunch_address: dellunchtime,
            delivery_dinner_address: deldinnertime,
            weekend_lunch_saturday: weekend_lunch_saturday,
            weekend_lunch_sunday: weekend_lunch_sunday,
            weekend_dinner_saturday: weekend_dinner_saturday,
            weekend_dinner_sunday: weekend_dinner_sunday,
            meal_type: localStorage.getItem('mealId'),
            payment_id: payment_id,
            amount: Total,
            payment_status: "success",
            lunch_meal_menu: localStorage.getItem('lunch_meal_menu'),
            dinner_meal_menu: localStorage.getItem('dinner_meal_menu'),
            subscription_period: localStorage.getItem('mealdays'),
            cancel_meal_count: localStorage.getItem('cancel_count'),
            monthly_cost: localStorage.getItem('price'),
            extra_roti: localStorage.getItem('extra_price'),
            extra_rice: '0',
            CGST_amount: cgst,
            IGST_amount: igst,
            renew: renew,
            lunchPreference: lunchPreference,
            dinnerPreference: dinnerPreference,
            type: type,
            customer_subscription_id: customer_subscription_id,
            date: date,
            mealtypes: mealtypes,
            total: total
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "checkIfapifailed", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.statuscheck = function (order_id, payment_id, paymentstatus) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            order_id: order_id,
            payement_id: payment_id,
            payement_status: paymentstatus
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "chkRazorPayStatus", data, options).map(function (response) {
                return response.json();
            }).subscribe(function (res) {
                if (res.success) {
                    _this.setToken(res.token);
                    _this.storage.set('token', res.token).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(res);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], APIService);
    return APIService;
}());

//# sourceMappingURL=api_service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		319
	],
	"../pages/aboutyou/aboutyou.module": [
		730,
		48
	],
	"../pages/account/account.module": [
		321
	],
	"../pages/area-edit/area-edit.module": [
		731,
		47
	],
	"../pages/cancel-meal/cancel-meal.module": [
		732,
		4
	],
	"../pages/catalog/categories/categories.module": [
		733,
		46
	],
	"../pages/catalog/products/products.module": [
		734,
		6
	],
	"../pages/catalog/restaurants/restaurants.module": [
		735,
		45
	],
	"../pages/checkout/checkout.module": [
		736,
		44
	],
	"../pages/choose-preference/choose-preference.module": [
		737,
		43
	],
	"../pages/choosedeliveryaddress/choosedeliveryaddress.module": [
		738,
		42
	],
	"../pages/choosedeliverytime/choosedeliverytime.module": [
		739,
		41
	],
	"../pages/chooseplan/chooseplan.module": [
		741,
		40
	],
	"../pages/contact/contact.module": [
		740,
		39
	],
	"../pages/dashboard-checkout/dashboard-checkout.module": [
		742,
		38
	],
	"../pages/dashboard/dashboard.module": [
		325
	],
	"../pages/faq/faq.module": [
		743,
		37
	],
	"../pages/guest-payment-successful/guest-payment-successful.module": [
		745,
		36
	],
	"../pages/loadingsecond/loadingsecond.module": [
		744,
		35
	],
	"../pages/loginotp/loginotp.module": [
		746,
		34
	],
	"../pages/mealhistory/mealhistory.module": [
		748,
		33
	],
	"../pages/mealtype/mealtype.module": [
		747,
		32
	],
	"../pages/menu/menu.module": [
		749,
		31
	],
	"../pages/module/module.module": [
		750,
		30
	],
	"../pages/mycurrentplan/mycurrentplan.module": [
		751,
		29
	],
	"../pages/news/news_detail/news_detail.module": [
		752,
		3
	],
	"../pages/news/news_feed/news_feed.module": [
		753,
		2
	],
	"../pages/onboarding/onboarding.module": [
		327
	],
	"../pages/order-guest-meal/order-guest-meal.module": [
		754,
		28
	],
	"../pages/orderhistory/orderhistory.module": [
		329
	],
	"../pages/ordering/address_map/address_map.module": [
		755,
		5
	],
	"../pages/ordering/cart/cart.module": [
		756,
		27
	],
	"../pages/ordering/credit_card_input/credit_card_input.module": [
		758,
		26
	],
	"../pages/ordering/order/order.module": [
		757,
		7
	],
	"../pages/ourmenu/ourmenu.module": [
		759,
		25
	],
	"../pages/paymentfailed/paymentfailed.module": [
		331
	],
	"../pages/paymentsuccessful/paymentsuccessful.module": [
		760,
		24
	],
	"../pages/personal/login/login.module": [
		333
	],
	"../pages/personal/loyalty/loyalty.module": [
		761,
		23
	],
	"../pages/personal/order_view/order_view.module": [
		762,
		1
	],
	"../pages/personal/orders_history/orders_history.module": [
		764,
		0
	],
	"../pages/personal/profile/profile.module": [
		763,
		22
	],
	"../pages/personal/signup/signup.module": [
		765,
		21
	],
	"../pages/picktmrwvegies/picktmrwvegies.module": [
		777,
		20
	],
	"../pages/preference-edit/preference-edit.module": [
		766,
		19
	],
	"../pages/profession-edit/profession-edit.module": [
		767,
		18
	],
	"../pages/refer-and-earn/refer-and-earn.module": [
		768,
		17
	],
	"../pages/referand-earn-model/referand-earn-model.module": [
		769,
		16
	],
	"../pages/renewsubscription/renewsubscription.module": [
		770,
		15
	],
	"../pages/select-area/select-area.module": [
		771,
		14
	],
	"../pages/settings/settings.module": [
		773,
		13
	],
	"../pages/startdate/startdate.module": [
		772,
		12
	],
	"../pages/switch-address-time/switch-address-time.module": [
		775,
		11
	],
	"../pages/terms-and-privacy/terms-and-privacy.module": [
		335
	],
	"../pages/tracker/tracker.module": [
		774,
		10
	],
	"../pages/upgrade-meal-type/upgrade-meal-type.module": [
		776,
		9
	],
	"../pages/where-to-delivere/where-to-delivere.module": [
		778,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutusPageModule = (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */]),
            ],
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());

//# sourceMappingURL=aboutus.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(28);
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
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = (function () {
    function AboutusPage(navCtrl, navParams, apiService, nav, builder, util, push, atrCtrl, storage, translate, viewctrl, platform, sanitizer, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.atrCtrl = atrCtrl;
        this.storage = storage;
        this.translate = translate;
        this.viewctrl = viewctrl;
        this.platform = platform;
        this.sanitizer = sanitizer;
        this.ionicApp = ionicApp;
        this.aboutusArray = [];
        this.initializeBackButtonCustomHandler();
    }
    AboutusPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    AboutusPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage.prototype.ngOnInit = function () {
        this.loadaboutus();
    };
    AboutusPage.prototype.loadaboutus = function () {
        var _this = this;
        this.page_name = 'about';
        this.apiService.getaContent(this.page_name).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.aboutusArray = response.data;
                for (var i = 0; i < _this.aboutusArray.length; i++) {
                    _this.aboutusArray[i].page_name = _this.sanitizer.bypassSecurityTrustHtml(_this.aboutusArray[i].page_name);
                    _this.aboutusArray[i].page_description = _this.sanitizer.bypassSecurityTrustHtml(_this.aboutusArray[i].page_description);
                }
            }
            else {
                _this.conmessage = response.message;
                _this.showConfirmAlert();
            }
        }, function (data) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    AboutusPage.prototype.Back = function () {
        this.nav.setRoot('MenuPage');
    };
    AboutusPage.prototype.onclickterm = function () {
        this.nav.setRoot('TermsAndPrivacyPage');
    };
    AboutusPage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('AboutusPage');
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
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aboutus',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/aboutus/aboutus.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>ABOUT</ion-title>     \n  </ion-navbar>\n</ion-header>\n<ion-content class="aboutUser-main">\n  <div class="aboutUser-contain">\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col col-12 class="Terms-heading">\n          <h2>About Us</h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n\n    <ion-grid>\n      <ion-row  *ngFor="let abtus of aboutusArray; let i=index">\n        <ion-col col-12>\n          <div class="term-condition">\n            <span><b [innerHTML]="abtus.page_name"></b></span>\n            <p  class="desc-content" [innerHTML]="abtus.page_description"></p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- <div style="display: inline-block;">\n          <a href="javascript:void(0);" style="text-decoration: none;" (click)="onclickbak()">BACK\n          </a>\n        </div> -->\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/aboutus/aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(323);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, util, translate, apiService, builder, push, platform, nav, storage, modalCtrl, alertCtrl, ionicApp, keyboard, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.translate = translate;
        this.apiService = apiService;
        this.builder = builder;
        this.push = push;
        this.platform = platform;
        this.nav = nav;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.ionicApp = ionicApp;
        this.keyboard = keyboard;
        this.camera = camera;
        this.newmobis = '';
        this.faqscreen = '';
        this.profArray = [];
        this.areaArray = [];
        this.areaArray1 = [];
        this.Active2 = false;
        this.Active3 = false;
        this.newmobis = navParams.get('newmobilenumis');
        this.faqscreen = navParams.get('screenis');
        var fields = {
            fname: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].email]],
            lname: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            mobnum: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            prof: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]
        };
        this.accountForm = this.builder.group(fields);
        var fieldsadd = {
            Hflat: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            Hadd1: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
            Hadd2: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            mobnum: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            Hcity: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            Hstate: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            Wflat: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
            Wadd1: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            Wadd2: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            Wcity: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            Wstate: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]
        };
        this.addresssForm = this.builder.group(fieldsadd);
        this.initializeBackButtonCustomHandler();
    }
    AccountPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    AccountPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            if (this.Active1) {
                // if(this.modelstatus==true){
                //   this.model.dismiss();
                // }
                // else{
                this.onclickacountback();
                //}        
            }
            else if (this.Active2) {
                if (this.modelstatus == true) {
                    this.model.dismiss();
                }
                else {
                    this.onclickpersonalback();
                }
            }
            else if (this.Active3) {
                if (this.modelstatus == true) {
                    this.model.dismiss();
                }
                else {
                    this.onclickaddressback();
                }
            }
        }
    };
    AccountPage.prototype.ngOnInit = function () {
        this.imageheight = "14.94vh";
        this.imagewidth = "15.2vh";
        this.customise = '1';
        localStorage.setItem('hardwareback', this.customise);
        this.custid = localStorage.getItem('id');
        this.custtoken = localStorage.getItem('token');
        this.mealid = localStorage.getItem('mealId');
        this.custFname = localStorage.getItem('CustomerName');
        this.custLname = localStorage.getItem('CustomerLastName');
        this.custMnum = localStorage.getItem('mobilenumber');
        this.mtype = localStorage.getItem('mealType');
        this.base64Image = localStorage.getItem('image');
        if (this.mtype == "Both") {
            this.mtype = "Lunch & Dinner";
        }
        if (this.newmobis == "Active2") {
            this.loadprofession();
            this.onclickpersonal();
            this.Active2 = true;
            this.Active1 = false;
            return;
        }
        else {
            this.Active1 = true;
        }
        this.loadprofession();
    };
    AccountPage.prototype.onCamera = function () {
        var _this = this;
        this.camera.getPicture({
            targetWidth: 512,
            targetHeight: 512,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 30,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        }).then(function (imageData) {
            _this.base64Image = 'data:image/png;base64,' + imageData;
            _this.picture = imageData;
        }, function (err) {
        });
    };
    AccountPage.prototype.onGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 30,
        }).then(function (imageData) {
            // alert(imageData.length);
            _this.base64Images = 'data:image/png;base64,' + imageData;
            var stringLength = _this.base64Images.length;
            _this.base64Str = _this.base64Images.split(',');
            var padding, inBytes;
            inBytes = _this.base64Str[1];
            if (inBytes.endsWith("=="))
                padding = 2;
            else if (inBytes.endsWith("="))
                padding = 1;
            else
                padding = 0;
            var sizeInBytes = (3 * (stringLength / 4)) - padding;
            // alert(sizeInBytes);
            // if(sizeInBytes >=2000000)
            // {
            //   this.conmessage = "You can not upload more than 2 mb file";//'Network error: API stopped working.';
            //   this.showConfirmAlert();
            //   return 
            // }
            // else{
            _this.base64Image = 'data:image/png;base64,' + imageData;
            _this.picture = imageData;
            _this.util.showLoader();
            _this.apiService.UploadFile(_this.custid, _this.custtoken, _this.base64Image).then(function (res) {
                _this.util.hideLoader();
                if (res) {
                    console.log(res.data);
                    _this.base64Image = res.data;
                }
                else {
                    _this.conmessage = res.message;
                    _this.showConfirmAlert();
                }
            }, function (data) {
                _this.conmessage = "Something's wrong, let's try again?"; //'Network error: API stopped working.';
                _this.showConfirmAlert();
            });
            // }
        }, function (err) {
        });
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.onclickpersonal = function () {
        var _this = this;
        this.Active2 = true;
        this.Active1 = false;
        this.util.showLoader();
        this.apiService.customerdetail(this.custid, this.custtoken).then(function (res) {
            _this.util.hideLoader();
            if (res.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.fname = res.data.customer_name;
                _this.lname = res.data.customer_lname;
                _this.email = res.data.customer_email;
                _this.mobnum = res.data.customer_mobile;
                _this.profid = res.data.customer_profession;
                for (var i = 0; i < _this.profArray.length; i++) {
                    if (_this.profid == _this.profArray[i].id) {
                        _this.profname = _this.profArray[i].profession;
                        localStorage.setItem('profname', _this.profname);
                        localStorage.setItem('proflid', _this.profid);
                    }
                }
            }
            else {
                _this.conmessage = res.message;
                _this.showConfirmAlert();
                //this.util.alert(res.errors, '');
            }
        }, function (data) {
            _this.conmessage = "Something's wrong, let's try again?"; //'Network error: API stopped working.';
            _this.showConfirmAlert();
        });
    };
    AccountPage.prototype.onclickaddress = function () {
        var _this = this;
        this.Active3 = true;
        this.Active2 = false;
        this.Active1 = false;
        this.loadzipcode();
        this.loadzipcode1();
        this.util.showLoader();
        this.apiService.customerdetail(this.custid, this.custtoken).then(function (res) {
            _this.util.hideLoader();
            if (res.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.Hflat = res.data.home_address.flat_no;
                _this.Hadd1 = res.data.home_address.address1;
                _this.Hadd2 = res.data.home_address.address2;
                _this.Hcity = res.data.home_address.city;
                _this.Hstate = res.data.home_address.state;
                _this.homeid = res.data.home_address.address_id;
                _this.areaname_new = res.data.home_address.area;
                _this.abcde_new = res.data.home_address.pincode;
                localStorage.setItem('pincode', _this.abcde_new);
                localStorage.setItem('areaname', _this.areaname_new);
                _this.areaid = res.data.home_address.area_id;
                localStorage.setItem('getsecondpincodeid', _this.areaid);
                _this.Wflat = res.data.work_address.flat_no;
                _this.Wadd1 = res.data.work_address.address1;
                _this.Wadd2 = res.data.work_address.address2;
                _this.Wcity = res.data.work_address.city;
                _this.Wstate = res.data.work_address.state;
                _this.areaid2 = res.data.work_address.area;
                _this.areaid1 = res.data.work_address.pincode;
                localStorage.setItem('getsecondareapindata', _this.areaid1);
                localStorage.setItem('getfirstpincodearea', _this.areaid2);
                //this.areaid1 = res.data.work_address.area_id;
                localStorage.setItem('getfirstpincodeid', res.data.work_address.area_id);
                _this.workid = res.data.work_address.address_id;
                //getsecondpincodeid
                // getfirstpincodeid
                // this.conmessage = res.message;
                // this.showConfirmAlert2();
            }
            else {
                //this.util.alert(res.errors, '');
                _this.conmessage = res.message;
                _this.showConfirmAlert1();
            }
        }, function (data) {
            _this.conmessage = "Something's wrong, let's try again?"; //'Network error: API stopped working.';
            _this.showConfirmAlert1();
        });
    };
    AccountPage.prototype.onclickpersonalback = function () {
        console.log('The keyboard is open:', this.keyboard.isOpen());
        var element = document.getElementById("myDIV");
        if (element) {
            element.classList.remove("mystyle");
        }
        this.Active1 = true;
        this.Active2 = false;
    };
    AccountPage.prototype.onclickaddressback = function () {
        console.log('The keyboard is open:', this.keyboard.isOpen());
        var element = document.getElementById("myDIV");
        if (element) {
            element.classList.remove("mystyle");
        }
        this.Active1 = true;
        this.Active3 = false;
    };
    AccountPage.prototype.onclickacountback = function () {
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
            this.navCtrl.setRoot('MenuPage');
        }
    };
    AccountPage.prototype.loadzipcode = function () {
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
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert1();
        });
    };
    AccountPage.prototype.selectarea = function ($event) {
        this.areaid = $event;
        for (var i = 0; i < this.areaArray.length; i++) {
            if (this.areaid == this.areaArray[i].id) {
                this.areaname = this.areaArray[i].area;
                this.pincode = this.areaArray[i].pincode;
                localStorage.setItem('pincode', this.pincode);
                localStorage.setItem('areacode', this.areaid);
            }
        }
    };
    AccountPage.prototype.loadzipcode1 = function () {
        var _this = this;
        this.apiService.showselectarea().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.areaArray1 = response.data;
            }
            else {
                _this.conmessage = response.message;
                _this.showConfirmAlert1();
            }
        }, function (data) {
            _this.conmessage = "Something's wrong, let's try again?"; //'Network error: API stopped working';
            _this.showConfirmAlert1();
        });
    };
    AccountPage.prototype.selectarea1 = function ($event) {
        this.areaid1 = $event;
        for (var i = 0; i < this.areaArray1.length; i++) {
            if (this.areaid1 == this.areaArray1[i].id) {
                this.areaname = this.areaArray1[i].area;
                this.pincode1 = this.areaArray1[i].pincode;
                localStorage.setItem('workpincode', this.pincode1);
                localStorage.setItem('areaid1', this.areaid1);
            }
        }
    };
    AccountPage.prototype.loadprofession = function () {
        var _this = this;
        this.apiService.showprofession().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.profArray = response.data;
            }
            else {
                // this.util.alert(response.errors, '');
                _this.conmessage = response.message;
                _this.showConfirmAlert1();
            }
        }, function (data) {
            _this.conmessage = "Something's wrong, let's try again?"; //'Network error: API stopped working';
            _this.showConfirmAlert1();
        });
    };
    AccountPage.prototype.selectprof = function () {
        var _this = this;
        var cust_css;
        cust_css = 'select-modal-rtmsprof';
        this.modelstatus = true;
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('ProfessionEditPage', {
            customise_data: true
        }, { cssClass: cust_css });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.modelstatus = false;
            _this.profid = data.displayprofid;
            _this.profname = data.displayprof;
            if (_this.profid == '' || _this.profid == null) {
                localStorage.setItem('profname', '');
                localStorage.setItem('proflid', '');
            }
            else {
                localStorage.setItem('profname', _this.profname);
                localStorage.setItem('proflid', _this.profid);
            }
        });
    };
    AccountPage.prototype.onSubmit = function () {
        var _this = this;
        this.abcde_new = localStorage.getItem('pincode');
        this.areaname_new = localStorage.getItem('areaname');
        this.areaid1 = localStorage.getItem('getsecondareapindata');
        this.areaid2 = localStorage.getItem('getfirstpincodearea');
        if ((this.Hflat == '' && this.Hadd1 == '' && this.Hadd2 == '' && this.abcde_new == '' && this.areaname_new == '') && (this.Wflat == '' && this.Wadd1 == '' && this.Wadd2 == '' && this.areaid1 == '' && this.areaid2 == '')) {
            this.util.alert(this.translate.instant('Fill one or both address'), '');
            return;
        }
        console.log('oooo21212');
        console.log(this.Hflat);
        console.log(this.Hadd1);
        console.log(this.Hadd2);
        console.log(this.abcde_new);
        console.log(this.areaname_new);
        console.log('oooo21212');
        console.log(this.Wflat);
        console.log(this.Wadd1);
        console.log(this.Wadd2);
        console.log(this.areaid1);
        console.log(this.areaid2);
        if (this.Hflat == '' && this.Hadd1 == '' && this.Hadd2 == '' && this.abcde_new == '' && this.areaname_new == '') {
            console.log('oooo');
            if (this.Wflat == '' && this.Wadd1 == '' && this.Wadd2 == '' && this.areaid1 == '' && this.areaid2 == '') {
            }
            else {
                if ((this.areaid1 == null || this.areaid1 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Select  Work Pincode'), '');
                    return;
                }
                if ((this.areaid2 == null || this.areaid2 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Select  Work Area'), '');
                    return;
                }
                if ((this.Wflat == null || this.Wflat == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Flat number'), '');
                    return;
                }
                if ((this.Wadd1 == null || this.Wadd1 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((this.Wadd2 == null || this.Wadd2 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
                    this.util.hideLoader();
                    return;
                }
            }
        }
        else {
            console.log('oooo1');
            if (this.Hflat == '' && this.Hadd1 == '' && this.Hadd2 == '' && this.abcde_new == '' && this.areaname_new == '') {
            }
            else {
                console.log('iiiiiii');
                console.log(this.areaname_new);
                if ((this.abcde_new == null || this.abcde_new == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Select Home Pincode'), '');
                    return;
                }
                if ((this.areaname_new == null || this.areaname_new == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Select Home Area'), '');
                    return;
                }
                if ((this.Hflat == null || this.Hflat == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Home Flat number'), '');
                    return;
                }
                if ((this.Hadd1 == null || this.Hadd1 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Home Address Line 1'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((this.Hadd2 == null || this.Hadd2 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Home Address Line 2'), '');
                    this.util.hideLoader();
                    return;
                }
            }
            if (this.Wflat == '' && this.Wadd1 == '' && this.Wadd2 == '' && this.areaid1 == '' && this.areaid2 == '') {
            }
            else {
                if ((this.areaid1 == null || this.areaid1 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Select  Work Pincode'), '');
                    return;
                }
                if ((this.areaid2 == null || this.areaid2 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Select  Work Area'), '');
                    return;
                }
                if ((this.Wflat == null || this.Wflat == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Flat number'), '');
                    return;
                }
                if ((this.Wadd1 == null || this.Wadd1 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
                    this.util.hideLoader();
                    return;
                }
                if ((this.Wadd2 == null || this.Wadd2 == '')) {
                    this.util.hideLoader();
                    this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
                    this.util.hideLoader();
                    return;
                }
            }
        }
        var data1 = {
            token: this.custtoken,
            customer_id: this.custid,
            meal_type: this.mealid,
            address11: this.Hadd1,
            address21: this.Hadd2,
            area_id1: localStorage.getItem('getsecondpincodeid'),
            city1: this.Hcity,
            state1: this.Hstate,
            address_type1: 'home',
            flat_no1: this.Hflat,
            address12: this.Wadd1,
            address22: this.Wadd2,
            area_id2: localStorage.getItem('getfirstpincodeid'),
            city2: this.Wcity,
            state2: this.Wstate,
            address_type2: 'work',
            flat_no2: this.Wflat,
            homeid: this.homeid,
            workid: this.workid,
            renew: 0,
            ispayement: 1
        };
        this.apiService.addAddress(data1).then(function (res) {
            _this.util.showLoader();
            if (res.success) {
                _this.util.hideLoader();
                _this.Active1 = true;
                _this.Active3 = false;
                //this.nav.setRoot('ChoosedeliveryaddressPage');
                _this.conmessage = res.message;
                _this.showConfirmAlert2();
            }
            else {
                _this.conmessage = res.message;
                _this.showConfirmAlert();
            }
        }, function (data) {
            _this.conmessage = "Something's wrong, let's try again?"; //'Network error: API stopped working';
            _this.showConfirmAlert();
        });
    };
    AccountPage.prototype.updatepersonalinfo = function () {
        var _this = this;
        if (this.fname == '') {
            this.util.alert(this.translate.instant('Please enter first name'), '');
            this.util.hideLoader();
            return;
        }
        var regex = /^[a-zA-Z ]*$/;
        if (!regex.test(this.fname)) {
            this.util.hideLoader();
            this.util.alert("Please enter only alphabet in first name field", '');
            return;
        }
        if (this.lname == '') {
            this.util.alert(this.translate.instant('Please enter last name'), '');
            this.util.hideLoader();
            return;
        }
        if (!regex.test(this.lname)) {
            this.util.hideLoader();
            this.util.alert("Please enter only alphabet in last name field", '');
            return;
        }
        if (this.email == '') {
            this.util.hideLoader();
            this.util.alert("Please enter email id", '');
            return;
        }
        var patrn = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!patrn.test(this.email)) {
            this.util.hideLoader();
            this.util.alert("Please enter correct email id", '');
            return;
        }
        if (this.mobnum.length != 10) {
            this.util.alert(this.translate.instant('Please enter the valid mobile no:'), '');
            this.util.hideLoader();
            return;
        }
        if (this.mobnum != localStorage.getItem('num')) {
            this.newnum = this.mobnum;
        }
        else {
            this.newnum = '';
        }
        var data1 = {
            customer_id: this.custid,
            token: this.custtoken,
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            number: localStorage.getItem('num'),
            new_number: this.newnum,
            profession: this.profid
        };
        this.apiService.updatepersonalinfo(data1).then(function (res) {
            _this.util.showLoader();
            if (res.success) {
                _this.util.hideLoader();
                if (_this.mobnum != localStorage.getItem('num')) {
                    localStorage.setItem('newnum', _this.mobnum);
                    var chnum = "Active2";
                    _this.navCtrl.setRoot('LoginotpPage', {
                        newmobilenumis: chnum
                    });
                }
                else {
                    //this.util.hideLoader();
                    _this.Active1 = true;
                    _this.Active2 = false;
                    _this.conmessage = res.message;
                    _this.showConfirmAlert2();
                }
                //this.nav.setRoot('ChoosedeliveryaddressPage');
            }
            else {
                // this.util.hideLoader();
                // this.util.alert(this.translate.instant(res.message), '');
                //this.util.hideLoader();
                _this.conmessage = res.message;
                _this.showConfirmAlert();
            }
        }, function (data) {
            _this.conmessage = "Something's wrong, let's try again?"; //'Network error: API stopped working.';
            _this.showConfirmAlert();
        });
    };
    AccountPage.prototype.onclickhelp = function () {
        var faqscreen = "FAQScreen";
        this.navCtrl.setRoot('FaqPage', {
            screenis: faqscreen
        });
    };
    AccountPage.prototype.onClickReferAndEarn = function () {
        if (localStorage.getItem('subscription_id') == "1") {
            this.util.alert('This feature will be inactive for demo plan', '');
        }
        else {
            this.trial_subscriptionTabCheck = localStorage.getItem('referandearn');
            if (this.trial_subscriptionTabCheck == 'false') {
                this.util.alert('This feature will be active once you have subscription', '');
                this.util.hideLoader();
            }
            else {
                this.navCtrl.setRoot('ReferAndEarnPage');
            }
        }
    };
    //model
    AccountPage.prototype.onclickarea1 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        this.modelstatus = true;
        var cust_css;
        cust_css = 'select-modal-rtms';
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: true
        }, { cssClass: cust_css });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.modelstatus = false;
            _this.abcde_new = data.displayarea;
            _this.areaname_new = data.displayarea_area;
            if (_this.areaname_new == '' || _this.areaname_new == null) {
                if (localStorage.getItem('areaname') != null) {
                    _this.areaname_new = localStorage.getItem('areaname');
                }
            }
            if (_this.abcde_new == '' || _this.abcde_new == null) {
                if (localStorage.getItem('pincode') != null) {
                    _this.abcde_new = localStorage.getItem('pincode');
                }
            }
            _this.customise = '1';
            localStorage.setItem('hardwareback', _this.customise);
        });
    };
    AccountPage.prototype.onclickarea2 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        this.modelstatus = true;
        var cust_css;
        cust_css = 'select-modal-rtms';
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: false,
            customise_data2: true
        }, { cssClass: cust_css });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.modelstatus = false;
            _this.abcde_new = data.displayarea;
            _this.areaname_new = data.displayarea_area;
            if (_this.areaname_new == '' || _this.areaname_new == null) {
                if (localStorage.getItem('areaname') != null) {
                    _this.areaname_new = localStorage.getItem('areaname');
                }
            }
            if (_this.abcde_new == '' || _this.abcde_new == null) {
                if (localStorage.getItem('pincode') != null) {
                    _this.abcde_new = localStorage.getItem('pincode');
                }
            }
            _this.customise = '1';
            localStorage.setItem('hardwareback', _this.customise);
        });
    };
    AccountPage.prototype.onclickarea3 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        var cust_css;
        this.modelstatus = true;
        cust_css = 'select-modal-rtms';
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: false,
            customise_data2: false,
            customise_data3: true
        }, { cssClass: cust_css });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.modelstatus = false;
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
    AccountPage.prototype.onclickarea4 = function () {
        var _this = this;
        this.customise = '0';
        localStorage.setItem('hardwareback', this.customise);
        var cust_css;
        cust_css = 'select-modal-rtms';
        this.modelstatus = true;
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            myValue: '',
            customise_data: false,
            customise_data1: false,
            customise_data2: false,
            customise_data3: false,
            customise_data4: true
        }, { cssClass: cust_css });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.modelstatus = false;
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
    AccountPage.prototype.deleteicon1 = function () {
        this.areaid2 = localStorage.setItem('getfirstpincodearea', '');
        this.areaid1 = localStorage.setItem('getsecondareapindata', '');
        this.pincode_2 = localStorage.setItem('getfirstpincodeid', '');
    };
    AccountPage.prototype.deleteicon = function () {
        this.areaname_new = localStorage.setItem('areaname', '');
        this.abcde_new = localStorage.setItem('pincode', '');
        this.pincode_1 = localStorage.setItem('getsecondpincodeid', '');
    };
    AccountPage.prototype.showConfirmAlert = function () {
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
                                        _this.nav.setRoot('AccountPage');
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
    AccountPage.prototype.showConfirmAlert2 = function () {
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
                                    text: "ok",
                                    handler: function () {
                                        _this.nav.setRoot('AccountPage');
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
    AccountPage.prototype.showConfirmAlert1 = function () {
        return __awaiter(this, void 0, void 0, function () {
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
    AccountPage.prototype.classadded = function () {
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
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="dit-type-header accHeader" (click)="classadded()">\n  <ion-navbar>\n    <ion-buttons left *ngIf="Active1" (click)="onclickacountback()">\n      <button ion-button icon-only>\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center *ngIf="Active1">ACCOUNT</ion-title>\n\n    <ion-buttons left *ngIf="Active2" (click)="onclickpersonalback()">\n      <button ion-button icon-only>\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="Active2">PERSONAL</ion-title>\n\n    <ion-buttons left *ngIf="Active3" (click)="onclickaddressback()">\n      <button ion-button icon-only>\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="Active3">ADDRESSES</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="account-section" (click)="classadded()" id="myDIV">\n  <div class="account-profile-section1" *ngIf="Active1">\n    <div class="subheader" *ngIf="Active1">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <div class="profile-image" [ngStyle]="{\'background-image\': \'url(\' + base64Image + \')\'}">\n              <div class="edit-profile">\n                <img src="assets/Rectangle-34.png" (click)="onGallery()">\n              </div>\n            </div>\n          </ion-col>\n          <ion-col col-8>\n            <div class="userName">\n              <h2>{{custFname}}&nbsp;{{custLname}}</h2>\n              <p>{{custMnum}}</p>\n            </div>\n            <div class="planName">\n              <img src="assets/Plan_ic@2x.png" class="diamond">\n              <label> {{mtype}}</label>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="main-account-area">\n      <ion-grid>\n        <ion-row (click)="onclickpersonal()">\n          <ion-col col-2 style="vertical-align: middle; margin:auto;margin-right: 0;margin-left: 0;">\n            <div class="account-icon">\n              <img src="assets/Personal_ic.svg" style="max-height: 6.400vw;">\n            </div>\n          </ion-col>\n          <ion-col col-9>\n            <div class="person-row">\n              <label>Personal </label>\n              <p>First, Last name, Email, Phone No:\n                <p>\n            </div>\n          </ion-col>\n          <ion-col col-1 style="vertical-align: middle; margin: auto;">\n            <div class="right-arrow">\n              <ion-icon name="ios-arrow-forward" style="color: #b6bfc6;"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <hr class="row-line">\n        <ion-row (click)="onclickaddress()">\n          <ion-col col-2 style="vertical-align: middle; margin:auto;margin-right: 0;\n          margin-left: 0;">\n            <div class="account-icon">\n              <img class="" src="assets/Address_ic.svg" style="    max-height: 5.760vw;">\n            </div>\n          </ion-col>\n          <ion-col col-9>\n            <div class="person-row">\n              <label>Addresses</label>\n              <p>Home & Work Address</p>\n            </div>\n          </ion-col>\n          <ion-col col-1 style="vertical-align: middle; margin: auto;">\n            <div class="right-arrow">\n              <ion-icon name="ios-arrow-forward" style="color: #b6bfc6;"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- <hr class="row-line">\n        <ion-row (click)="onClickReferAndEarn()">\n          <ion-col col-1 style="vertical-align: middle; margin:auto;">\n            <div class="account-icon">\n              <img src="assets/Refer_ic.svg" style="width: 75%;">\n            </div>\n          </ion-col>\n          <ion-col col-10>\n            <div class="person-row">\n              <label>Refer & Earn</label>\n              <p>Refer your friends to earn rewards\n              </p>\n            </div>\n          </ion-col>\n          <ion-col col-1 style="vertical-align: middle; margin: auto;">\n            <div class="right-arrow">\n              <ion-icon name="ios-arrow-forward" style="color: #b6bfc6;"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row> -->\n        <hr class="row-line">\n        <ion-row>\n          <ion-col col-2 style="vertical-align: middle; margin:auto;margin-right: 0;\n          margin-left: 0;">\n            <div class="account-icon">\n              <img class="" src="assets/Help_ic.svg" style="max-height:6.667vw">\n            </div>\n          </ion-col>\n          <ion-col col-9>\n            <div class="person-row" (click)="onclickhelp()">\n              <label>Help </label>\n              <p>FAQ\'s and Links</p>\n            </div>\n          </ion-col>\n          <ion-col col-1 style="vertical-align: middle; margin: auto;">\n            <div class="right-arrow">\n              <ion-icon name="ios-arrow-forward" style="color: #b6bfc6;"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br />\n    </div>\n  </div>\n\n\n\n\n\n\n  <form *ngIf="Active2" novalidate [formGroup]="accountForm" style="width: 100%;height: 100%;float: left;position: relative;">\n    <div class="main-account-area2">\n\n      <ion-grid>\n        <ion-row>\n          <ion-item>\n            <ion-label floating class="person-lebel">FIRST NAME</ion-label>\n            <ion-input type="text" class="person_input" [formControl]="accountForm.controls.fname" [(ngModel)]="fname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating class="person-lebel">LAST NAME</ion-label>\n            <ion-input type="text" class="person_input" [formControl]="accountForm.controls.lname" [(ngModel)]="lname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating class="person-lebel">EMAIL ID</ion-label>\n            <ion-input type="text" class="person_input" [formControl]="accountForm.controls.email" [(ngModel)]="email">\n            </ion-input>\n          </ion-item>\n          <ion-item class="Aboutyoudropdown">\n            <ion-label floating class="person-lebel">PROFESSION</ion-label>\n            <!-- <ion-select id="cars" name="cars" interface="popover" class="work-input"\n              class="" (ionChange)="selectprof($event)" [(ngModel)]="profid" [formControl]="accountForm.controls.prof">\n              <ion-option *ngFor="let p of profArray" value="{{p.id}}">\n                {{p.profession}}\n              </ion-option>\n            </ion-select> -->\n            <ion-input style="font-family: Montserrat-SemiBold; font-size: 2.098vh;" class="select-full-width" value=\'{{profname}}\'  type="text" (click)="selectprof()" (keyup)="selectprof()" (keydown)="selectprof()"  [formControl]="accountForm.controls.prof"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating class="person-lebel">10 DIGIT MOBILE NUMBER</ion-label>\n            <ion-input type="tel" maxlength="10" class="person_input" [formControl]="accountForm.controls.mobnum" [(ngModel)]="mobnum"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        \n      </ion-grid>\n      <ion-footer className="ion-no-border" class="footer-common">\n        <ion-toolbar>\n      <ion-row style="width: calc(100% - 5.434vh);margin: 0 auto;">\n        <ion-col class="buttonFix" style="padding: 0;">\n          <button ion-button type="submit" id="input_submit" class="saveBUtton" block (click)="updatepersonalinfo()" style="margin: 0; padding: 0;">Save Changes\n          </button>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n      </ion-footer>\n\n      <!-- <ion-grid >\n       \n      </ion-grid> -->\n\n    </div>\n  </form>\n\n  <div *ngIf="Active3">\n    <form [formGroup]="addresssForm">\n    <div class="main-account-area3">\n      <ion-grid>\n        <ion-row>\n          <h2>HOME ADDRESS</h2>\n        </ion-row>\n        <ion-row class="home-address">\n          <ion-item>\n            <ion-label floating class="work-label">HOUSE/FLAT NO:</ion-label>\n            <ion-input type="text" [(ngModel)]="Hflat" [formControl]="addresssForm.controls.Hflat"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label floating class="work-label">ADDRESS LINE 1</ion-label>\n            <ion-input class="work-input" type="text" [(ngModel)]="Hadd1" [formControl]="addresssForm.controls.Hadd1"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label floating class="work-label">ADDRESS LINE 2</ion-label>\n            <ion-input class="work-input" type="text" [(ngModel)]="Hadd2" [formControl]="addresssForm.controls.Hadd2"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6 style="padding-left: 0;">\n            <ion-item>\n              <ion-label floating class="work-label">CITY</ion-label>\n            <ion-input class="work-input" type="text" [(ngModel)]="Hcity" [formControl]="addresssForm.controls.Hcity" [readonly]="true"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 style="padding-right:0;">\n            <ion-item>\n              <ion-label floating class="work-label">PINCODE</ion-label>\n              <ion-input id="cars" name="cars" class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class="" type="text"\n                (click)="onclickarea1()" (keyup)="onclickarea1()" (keydown)="onclickarea1()" value="{{abcde_new}}" [readonly]="true"></ion-input>\n\n              <!--  <ion-select id="cars" name="cars"  class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class=""\n                (ionChange)="selectarea($event)" [(ngModel)]="areaid">\n                <ion-option *ngFor="let a of areaArray" value="{{a.id}}">\n                  {{a.pincode}}\n                </ion-option>\n              </ion-select> -->\n            </ion-item>\n          </ion-col>\n          <!--  <ion-col col-1 class="deleteicon1">              \n             <div>\n              <img src="assets/imgicon/delete.png" (click)="deleteicon()">\n             </div>\n            </ion-col> -->\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6 style="padding-left: 0;">\n            <ion-item style="margin-bottom: 0 !important;">\n              <ion-label floating class="work-label">STATE</ion-label>\n              <ion-input type="text" class="work-input" [(ngModel)]="Hstate" [readonly]="true" [formControl]="addresssForm.controls.Hstate"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 style="padding-right: 0;">\n            <ion-item style="margin-bottom: 0 !important;">\n              <ion-label floating class="work-label">AREA</ion-label>\n\n              <ion-input type="text" id="cars" name="cars" class="work-input" value="{{areaname_new}}" style="border-bottom: solid 0.1vh rgb(244,164,37); "\n                class="" (click)="onclickarea2()" (keyup)="onclickarea2()" (keydown)="onclickarea2()" [readonly]="true" ></ion-input>\n\n              <!--      <ion-select id="cars" name="cars"  class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class=""\n                (ionChange)="selectarea($event)" [(ngModel)]="areaid">\n                <ion-option *ngFor="let a of areaArray" value="{{a.id}}">\n                  {{a.area}}\n                </ion-option>\n              </ion-select> -->\n\n            </ion-item>\n          </ion-col>\n\n          <!-- <ion-col col-1 class="deleteicon1">              \n              <div>\n                <img src="assets/imgicon/delete.png" (click)="deleteicon()">\n              </div>\n           </ion-col> -->\n\n        </ion-row>\n      </ion-grid>\n      <br>\n      <!--Work Address here start-->\n      <ion-grid>\n        <ion-row>\n          <h2>WORK ADDRESS</h2>\n        </ion-row>\n        <ion-row class="home-address">\n          <ion-item>\n            <ion-label floating class="work-label">COMPANY NAME WITH FLOOR NO:</ion-label>\n            <ion-input type="text" class="work-input" [(ngModel)]="Wflat" [formControl]="addresssForm.controls.Wflat"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label floating class="work-label">ADDRESS LINE 1 </ion-label>\n            <ion-input type="text" class="work-input" [(ngModel)]="Wadd1" [formControl]="addresssForm.controls.Wadd1"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label floating class="work-label">ADDRESS LINE 2</ion-label>\n            <ion-input type="text" class="work-input" [(ngModel)]="Wadd2" [formControl]="addresssForm.controls.Wadd2"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6 style="padding-left: 0;">\n            <ion-item>\n              <ion-label floating class="work-label">CITY</ion-label>\n              <ion-input type="text" class="work-input" [(ngModel)]="Wcity" [readonly]="true" [formControl]="addresssForm.controls.Wcity"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 style="padding-right: 0;">\n            <ion-item>\n\n              <ion-label floating class="work-label">PINCODE</ion-label>\n              <br />\n              <ion-input type="text" id="cars" name="cars" class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class=""\n                value="{{areaid1}}" (click)="onclickarea3()" (keyup)="onclickarea3()" (keydown)="onclickarea3()" [readonly]="true" ></ion-input>\n              <!--  <ion-select id="cars" name="cars"  class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class=""\n                (ionChange)="selectarea1($event)" [(ngModel)]="areaid1">\n                <ion-option *ngFor="let a of areaArray1" value="{{a.id}}">\n                  {{a.pincode}}\n                </ion-option>\n              </ion-select> -->\n            </ion-item>\n          </ion-col>\n          <!--    <ion-col col-1 class="deleteicon1">              \n              <div><img src="assets/imgicon/delete.png" (click)="deleteicon1()"></div>\n            </ion-col> -->\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6 style="padding-left: 0;">\n            <ion-item style="margin-bottom: 0 !important;">\n              <ion-label floating class="work-label">STATE</ion-label>\n              <ion-input type="text" class="work-input" [(ngModel)]="Wstate" [readonly]="true" [formControl]="addresssForm.controls.Wstate"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 style="padding-right: 0;">\n            <ion-item style="margin-bottom: 0 !important;">\n              <ion-label floating class="work-label">AREA</ion-label>\n\n              <ion-input type="text" id="cars" name="cars" class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class=""\n                value="{{areaid2}}" (click)="onclickarea4()" (keyup)="onclickarea4()" (keydown)="onclickarea4()" [readonly]="true"></ion-input>\n\n              <!-- <ion-select id="cars" name="cars" class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class=""\n                (ionChange)="selectarea1($event)" [(ngModel)]="areaid1">\n                <ion-option *ngFor="let a of areaArray1" value="{{a.id}}">\n                  {{a.area}}\n                </ion-option>\n              </ion-select> -->\n\n            </ion-item>\n          </ion-col>\n          <!--  <ion-col col-1 class="deleteicon1">  \n               <div>\n                <img src="assets/imgicon/delete.png" (click)="deleteicon1()">\n               </div>            \n            </ion-col> -->\n        </ion-row>\n\n      </ion-grid>\n      <!-- <br />\n      <button ion-button type="submit" class="address-button" id="input_submit" block (click)=" onSubmit()"> Update Address\n      </button> -->\n\n      <ion-row style="left: 0;width: 100%;bottom: 2.71739vh;right: 0;margin: 0 auto;">\n        <ion-col class="buttonFix">\n          <button ion-button type="submit" class="address-button" id="input_submit" block (click)=" onSubmit()" style="margin: 0;padding: 0;height: 7.4728260869565215vh;"> Update Address\n          </button>\n\n        </ion-col>\n      </ion-row>\n    </div>\n  </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnboardingPageModule = (function () {
    function OnboardingPageModule() {
    }
    OnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */]),
            ],
        })
    ], OnboardingPageModule);
    return OnboardingPageModule;
}());

//# sourceMappingURL=onboarding.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(28);
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
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnboardingPage = (function () {
    function OnboardingPage(navCtrl, apiService, nav, builder, util, push, statusBar, storage, translate, viewctrl, platform, app, alertCtrl, navParams, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.statusBar = statusBar;
        this.storage = storage;
        this.translate = translate;
        this.viewctrl = viewctrl;
        this.platform = platform;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.screenis = '';
        this.count = 0;
        this.active1 = true;
        this.active2 = false;
        this.active3 = false;
        this.screenis = navParams.get('screenis');
        var backAction = platform.registerBackButtonAction(function () {
            // Catches the active view
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name == 'OnboardingPage') {
                if (_this.count == 0) {
                    _this.count++;
                    if (nav.canGoBack()) {
                        nav.pop();
                    }
                    else {
                        _this.presentToast();
                    }
                }
            }
        }, 2);
    }
    OnboardingPage.prototype.presentToast = function () {
        var _this = this;
        if (this.count == 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Close the App',
                message: 'Are you sure?',
                buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            if (_this.active1 == true) {
                                var firstpage = "firstpage";
                                _this.nav.setRoot('OnboardingPage', {
                                    selecscreenis: firstpage
                                });
                            }
                            else if (_this.active2 == true) {
                                var secondpage = "secondpage";
                                _this.nav.setRoot('OnboardingPage', {
                                    selecscreenis: secondpage
                                });
                            }
                            else if (_this.active3 == true) {
                                var thirdpage = "thirdpage";
                                _this.nav.setRoot('OnboardingPage', {
                                    selecscreenis: thirdpage
                                });
                            }
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
    OnboardingPage.prototype.ngOnInit = function () {
        if (this.platform.is('ios')) {
            this.statusBar.backgroundColorByHexString('f3a01c');
        }
        if (localStorage.getItem('onboardshows') == '1') {
            this.nav.setRoot('SelectAreaPage');
            return;
        }
        if (this.screenis == "firstpage") {
            this.active1 = true;
            this.active2 = false;
            this.active3 = false;
        }
        else if (this.screenis == "secondpage") {
            this.active1 = false;
            this.active2 = true;
            this.active3 = false;
        }
        else if (this.screenis == "thirdpage") {
            this.active1 = false;
            this.active2 = false;
            this.active3 = true;
        }
        this.loadcontent();
    };
    OnboardingPage.prototype.onboardingFirst = function () {
        this.nav.setRoot('SelectAreaPage');
        localStorage.setItem('onboardshows', '1');
    };
    OnboardingPage.prototype.onboardingSecond = function () {
        this.nav.setRoot('SelectAreaPage');
    };
    OnboardingPage.prototype.onboardingThird = function () {
        this.nav.setRoot('SelectAreaPage');
    };
    OnboardingPage.prototype.firstnext = function (index) {
        if (index == 0) {
            this.active1 = true;
            this.active2 = false;
            this.active3 = false;
            localStorage.setItem('frston', '1');
            localStorage.setItem('secondon', '0');
            localStorage.setItem('thirdon', '0');
        }
        else if (index == 1) {
            this.active1 = false;
            this.active2 = true;
            this.active3 = false;
            localStorage.setItem('frston', '0');
            localStorage.setItem('secondon', '1');
            localStorage.setItem('thirdon', '0');
        }
        else if (index == 2) {
            this.active1 = false;
            this.active2 = false;
            this.active3 = true;
            localStorage.setItem('frston', '0');
            localStorage.setItem('secondon', '0');
            localStorage.setItem('thirdon', '1');
        }
        else if (index == 3) {
            this.active1 = false;
            this.active2 = false;
            this.active3 = false;
            localStorage.setItem('frston', '0');
            localStorage.setItem('secondon', '0');
            localStorage.setItem('thirdon', '1');
            this.nav.setRoot('SelectAreaPage');
            localStorage.setItem('onboardshows', '1');
        }
    };
    OnboardingPage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('ios')) {
            this.statusBar.backgroundColorByHexString('f3a01c');
        }
    };
    OnboardingPage.prototype.loadcontent = function () {
        var _this = this;
        this.page_name = 'home';
        this.apiService.getaContent(this.page_name).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.contents = response.data;
                _this.page_name1 = _this.sanitizer.bypassSecurityTrustHtml(_this.contents[0]['page_name']);
                _this.page_desc1 = _this.sanitizer.bypassSecurityTrustHtml(_this.contents[0]['page_description']);
                _this.page_name2 = _this.sanitizer.bypassSecurityTrustHtml(_this.contents[1]['page_name']);
                _this.page_desc2 = _this.sanitizer.bypassSecurityTrustHtml(_this.contents[1]['page_description']);
                _this.page_name3 = _this.sanitizer.bypassSecurityTrustHtml(_this.contents[2]['page_name']);
                _this.page_desc3 = _this.sanitizer.bypassSecurityTrustHtml(_this.contents[2]['page_description']);
            }
            else {
                _this.conmessage = response.message;
                _this.showConfirmAlert();
            }
        }, function (response) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        }); //FaqPage
    };
    OnboardingPage.prototype.faq = function () {
        if (this.active1 == true) {
            var firstpage = "firstpage";
            this.nav.setRoot('FaqPage', {
                selecscreenis: firstpage
            });
        }
        else if (this.active2 == true) {
            var secondpage = "secondpage";
            this.nav.setRoot('FaqPage', {
                selecscreenis: secondpage
            });
        }
        else if (this.active3 == true) {
            var thirdpage = "thirdpage";
            this.nav.setRoot('FaqPage', {
                selecscreenis: thirdpage
            });
        }
    };
    OnboardingPage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('OnboardingPage');
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
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-onboarding',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/onboarding/onboarding.html"*/'<!-- <div *ngFor="let a of contents; let i=index"> -->\n    <ion-content class="onboard-screen">\n        <ion-grid>\n            <ion-row>\n                <div style="width: 100%; float: left;">\n                    <div class="onboarding-screen" *ngIf="active1">\n                        <img src="assets/onbard-image1.png" class="onboardimg">\n                        <div class="text-center bulletsHeight">\n                            <div class="text-center bullets" (click)="firstnext(0)">\n                            </div>\n                            <div class="text-center defaultbullet" (click)="firstnext(1)">\n                            </div>\n                            <div class="text-center defaultbullet" (click)="firstnext(2)">\n                            </div>\n                        </div>\n                        <div class="text-center" style="margin-bottom: 2.8vh;">\n                            <div class="onboard-text">\n                                <h5 [innerHTML]="page_name1"></h5>\n                                <p class="pageDesc" [innerHTML]="page_desc1">\n                                </p>\n                            </div>\n                        </div>\n                        <div class="text-center onboard-content">\n                            <button ion-button class="start-button" (click)="firstnext(1)">\n                                Next\n                            </button>\n                        </div>\n                    </div>\n                    <div class="onboarding-screen" *ngIf="active2">\n                        <img src="assets/onbard-image2.png" class="onboardimg">\n                        <div class="text-center bulletsHeight">\n                            <div class="text-center defaultbullet" (click)="firstnext(0)">\n                            </div>\n                            <div class="text-center bullets" (click)="firstnext(1)">\n                            </div>\n                            <div class="text-center defaultbullet" (click)="firstnext(2)">\n                            </div>\n                        </div>\n                        <p class="text-center">\n                            <span class="onboard-text">\n                                <h5 [innerHTML]="page_name2"></h5>\n                                <p class="pageDesc" [innerHTML]="page_desc2"></p>\n                            </span>\n                        </p>\n                        <div class="text-center onboard-content">\n                            <button ion-button class="start-button" (click)="firstnext(2)">\n                               Next\n                            </button>\n                        </div>\n                    </div>\n                    <div class="onboarding-screen" *ngIf="active3">\n                        <img src="assets/onbard-image3.png" class="onboardimg">\n                        <div class="text-center bulletsHeight">\n                            <div class="text-center defaultbullet" (click)="firstnext(0)">\n                            </div>\n                            <div class="text-center defaultbullet" (click)="firstnext(1)">\n                            </div>\n                            <div class="text-center bullets" (click)="firstnext(2)">\n                            </div>\n                        </div>\n                        <p class="text-center">\n                            <span class="onboard-text">\n                                <h5 [innerHTML]="page_name3"> </h5>\n                                <p class="pageDesc" [innerHTML]="page_desc3"></p>\n                            </span>\n                        </p>\n                        <div class="text-center onboard-content">\n                            <button ion-button class="start-button" (click)="firstnext(3)">\n                                Next\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            \n            </ion-row>\n        </ion-grid>\n    </ion-content>\n    <ion-footer className="ion-no-border" class="onboarding-footer">\n        <ion-toolbar>\n                    <div class="text-center" style="    padding: 0 5.997001499250374vh;">\n                        <!-- <button style="font-size: 2.398vh; width:50%;display: inline;" ion-button type="submit" id="input_submit" block>\n                            Continue\n                        </button>\n                        <button style="font-size: 2.398vh; width:50%;display: inline" ion-button type="submit" id="input_submit" block>\n                            Continue\n                        </button> -->\n                        <div class="faq" (click)="faq()" style="float: left;font-size: 4vw;\n                        color: rgba(32, 60, 32, 1);font-family: Montserrat-Medium;">FAQ</div>\n    \n                        <div class="skip" style="float: right;font-size: 4vw;\n                        color: rgba(32, 60, 32, 1);font-family: Montserrat-Medium;">\n                            <a href="javascript:void(0);" (click)="onboardingFirst()" style="font-size:4vw;\n                            color: rgba(32, 60, 32, 1);text-decoration: none;font-family: Montserrat-Medium;">Skip\n                                 <span style="line-height: 19px; display: inline-block; vertical-align: middle;">\n                                    <ion-icon name="ios-arrow-forward"></ion-icon>\n                                    <ion-icon name="ios-arrow-forward"></ion-icon>\n                                </span>\n                            </a>\n                        </div>\n                    </div>\n        </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/onboarding/onboarding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["DomSanitizer"]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageModule", function() { return OrderhistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderhistory__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderhistoryPageModule = (function () {
    function OrderhistoryPageModule() {
    }
    OrderhistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderhistory__["a" /* OrderhistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderhistory__["a" /* OrderhistoryPage */]),
            ],
        })
    ], OrderhistoryPageModule);
    return OrderhistoryPageModule;
}());

//# sourceMappingURL=orderhistory.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderhistoryPage; });
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
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderhistoryPage = (function () {
    function OrderhistoryPage(navCtrl, navParams, nav, util, translate, apiService, builder, push, alertCtrl, storage, platform, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.util = util;
        this.translate = translate;
        this.apiService = apiService;
        this.builder = builder;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.Mysub1 = "htabdesign";
        this.Mysub2 = "white";
        this.guestordr1 = "white";
        this.guestordr2 = "gray";
        this.orderArray = [];
        this.ActiveSubcription = true;
        this.ActiveGuestMeal = false;
        this.initializeBackButtonCustomHandler();
    }
    OrderhistoryPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    OrderhistoryPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    OrderhistoryPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad OrderhistoryPage');
    };
    OrderhistoryPage.prototype.ngOnInit = function () {
        this.custid = localStorage.getItem('id');
        this.custToken = localStorage.getItem('token');
        this.ActiveSubcription = true;
        this.orderhistory();
        this.ActiveGuestMeal = false;
    };
    OrderhistoryPage.prototype.orderhistory = function () {
        var _this = this;
        this.util.showLoader();
        this.apiService.orderhistory(this.custid, this.custToken).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.orderArray = response.data;
                if (_this.orderArray.length > 0) {
                    for (var i = 0; i < _this.orderArray.length; i++) {
                        _this.orderno = response.data.subscription_order_number;
                        _this.mealtype = response.data.meal_type;
                        _this.startdate = response.data.start_date;
                        _this.enddate = response.data.end_date;
                        _this.price = response.data.price;
                        _this.showData = false;
                    }
                }
                else {
                    _this.showData = true;
                }
            }
            else {
                _this.conmessage = response.message;
                _this.showConfirmAlert();
            }
        }, function (response) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    OrderhistoryPage.prototype.Back = function () {
        if (this.ActiveGuestMeal == true) {
            this.ActiveSubcription = true;
            this.Mysub2 = 'white';
            this.ActiveGuestMeal = false;
            if (this.showData == true) {
                this.showData = true;
            }
            else {
                this.showData = false;
            }
        }
        else {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    OrderhistoryPage.prototype.onClickMySubcription = function () {
        this.guestordr1 = "white";
        this.guestordr2 = "gray";
        this.Mysub2 = "white";
        this.ActiveSubcription = true;
        this.ActiveGuestMeal = false;
        this.orderhistory();
        var y = document.getElementById('idscripts');
        if (y) {
            y.classList.remove("idscript");
        }
    };
    OrderhistoryPage.prototype.onClickGuestMeal = function () {
        var _this = this;
        this.Mysub2 = "gray";
        var history = '1';
        var y = document.getElementById('idscripts');
        if (y) {
            y.classList.add("idscript");
        }
        this.apiService.guestMealHistory(this.custToken, this.custid, history).then(function (res) {
            if (res) {
                _this.guestMealArray = res['data'];
                console.log(_this.guestMealArray.length);
                if (_this.guestMealArray.length == '0') {
                    _this.showData1 = true;
                }
                else {
                    _this.showData1 = false;
                }
            }
            else {
                //this.conmessage = res.message;
                // this.showConfirmAlert();
            }
        }).catch(function (res) {
            _this.conmessage = res.message;
            _this.showConfirmAlert();
        });
        this.ActiveSubcription = false;
        this.ActiveGuestMeal = true;
    };
    OrderhistoryPage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('OrderhistoryPage');
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
    OrderhistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orderhistory',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/orderhistory/orderhistory.html"*/'\n<ion-header no-border class="dit-type-header order-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title  text-center>ORDER HISTORY</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="orderhistory-vaggies">\n  <div class="historyTabDiv">\n  <ion-grid style="padding: 5px 5.333vw;">\n    <ion-row class="heading-pickvaggies-label">\n      <ion-col text-center>\n        <!-- [style.color]="ActiveSubcription ? Mysub1:Mysub2" -->\n        <div  (click)="onClickMySubcription()" [style.color]="Mysub2">\n          <label >My Subscriptions</label>\n        </div>\n      </ion-col>\n      <ion-col text-center>\n        <div [style.color]="ActiveGuestMeal ? guestordr1:guestordr2" (click)="onClickGuestMeal()">\n          <label >Guest Orders</label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="order-history text-center">\n    <div *ngIf="ActiveSubcription" style="width: 100%;padding: 0 5.333vw;float: left;">\n      <ion-grid style="padding: 0;">\n        <ion-row>\n          <ion-col text-center style="padding: 0;"><p [class]="ActiveSubcription ? Mysub1:Mysub2"></p></ion-col>\n          <ion-col text-center style="padding: 0;"><p></p></ion-col>\n        </ion-row>\n      </ion-grid>\n   \n\n      <ion-grid>\n        <div *ngFor="let order of orderArray; let i=index">\n          <ion-row>\n            <h4 class="order-number">ORDER - {{order.subscription_order_number}}</h4>\n          </ion-row>\n          <ion-row class="mealtype-margin">\n            <h4 class="order-mealtype">{{order.meal_type}}</h4>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-row class="order-on">ORDERED ON</ion-row>\n              <h4 class="order-date-time">{{order.start_date|date:\'d MMM y\'}}</h4>\n            </ion-col>\n            <ion-col>\n              <ion-row class="order-on"> EXPIRED ON</ion-row>\n              <h4 class="order-date-time">{{order.end_date?.substring(0,10)|date:\'d MMM y\'}}</h4>\n              \n            </ion-col>\n            <ion-row><h4 class="total-order-price"> &#8377; {{order.price}}</h4></ion-row>\n          </ion-row>\n         <hr/>\n        </div>\n        <div *ngIf="showData==true" style="padding-top: 25.5vh;">\n          No Records to Display\n        </div>\n      </ion-grid>\n    </div>\n    <div *ngIf="ActiveGuestMeal" id="idscripts">    \n      \n      <ion-grid style="padding: 0;">\n      <ion-row class="orderhistory-guestmeal" style="    padding: 0 5.333vw;">\n        <ion-col text-center style="padding: 0;"><p ></p></ion-col>\n        <ion-col text-center style="padding: 0;"><p [class]="ActiveGuestMeal ? Mysub1:Mysub2"></p></ion-col>\n      </ion-row>\n    </ion-grid>\n\n      <ion-grid class="guestOrder">\n        <!-- <ion-row class="order-guesthistory"><ion-col style="float:right;"></ion-col><ion-col><img src="assets/CancelOrder@3x.png"></ion-col></ion-row> -->\n        <div *ngFor="let mealTypes of guestMealArray; let i=index">\n              <ion-row>              \n                <h4 class="order-number">ORDER - {{mealTypes.order_id}}</h4>\n              </ion-row>\n              <ion-row class="mealtype-margin-guest">\n                <h4 class="order-mealtype">{{mealTypes.meal_type}}</h4>\n              </ion-row>\n            \n          <ion-row>\n            <ion-col>\n              <ion-row class="order-on">ORDERED ON</ion-row>\n              <h4 class="order-date-time">{{mealTypes.date}}</h4>\n            </ion-col>\n            <ion-col>\n              <ion-row class="order-on"> QUANTITY</ion-row>\n              <h4 class="order-date-time">{{mealTypes.quantity}}</h4>              \n            </ion-col>            \n            <ion-row><h4 class="total-order-price"> &#8377; {{mealTypes.total_amount}}</h4></ion-row>\n          </ion-row>\n          <hr/>\n        </div>\n      </ion-grid>\n      <div *ngIf="showData1==true" style="padding-top: 30vh;">\n        No Records to Display\n      </div>\n    </div>\n    \n  </div>\n\n</div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/orderhistory/orderhistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], OrderhistoryPage);
    return OrderhistoryPage;
}());

//# sourceMappingURL=orderhistory.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentfailedPageModule", function() { return PaymentfailedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentfailed__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentfailedPageModule = (function () {
    function PaymentfailedPageModule() {
    }
    PaymentfailedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paymentfailed__["a" /* PaymentfailedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paymentfailed__["a" /* PaymentfailedPage */]),
            ],
        })
    ], PaymentfailedPageModule);
    return PaymentfailedPageModule;
}());

//# sourceMappingURL=paymentfailed.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentfailedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the PaymentfailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentfailedPage = (function () {
    function PaymentfailedPage(navCtrl, ionicApp, platform, navParams) {
        this.navCtrl = navCtrl;
        this.ionicApp = ionicApp;
        this.platform = platform;
        this.navParams = navParams;
        this.initializeBackButtonCustomHandler();
    }
    PaymentfailedPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    PaymentfailedPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            //this.Back();
        }
    };
    PaymentfailedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentfailedPage');
    };
    PaymentfailedPage.prototype.Dashboardclick = function () {
        if (localStorage.getItem('payemntfailedguest') == '1') {
            this.navCtrl.setRoot('DashboardCheckoutPage');
        }
        else {
            this.navCtrl.setRoot('CheckoutPage');
        }
    };
    PaymentfailedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymentfailed',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/paymentfailed/paymentfailed.html"*/'<!--\n  Generated template for the PaymentsuccessfulPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="paymentFailed-content">\n  <div class="pym-failed">\n    <ion-grid>\n      <ion-row>\n        <ion-col text-center>\n          <img src="assets/Failed_ic.svg" alt="TrueMark" class="failedImage">\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Payment Failed</h2>\n          <P>Oops! Somethings went wrong.Your last<br>transaction was failed.How about we<br> give it another try?</P>\n        </ion-col>\n      </ion-row>\n      <br/>\n     \n    </ion-grid>\n    \n  </div>\n\n</ion-content>\n<ion-footer className="ion-no-border" class="footer-common" style="background-color: #fff;">\n  <ion-toolbar>\n<ion-row class="button-bottom-payment">\n  <ion-col style="padding:0vh 3.14vh;">\n    <button ion-button type="submit" id="input_submit"  block (click)="Dashboardclick()" style="    background: #203c52;">\n      <img src="assets/TryAgain_ic.png" alt="food-image" style="width:3.598vh; height: 3.298vh;">  Try Again\n    </button>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/paymentfailed/paymentfailed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PaymentfailedPage);
    return PaymentfailedPage;
}());

//# sourceMappingURL=paymentfailed.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(37);
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
 * Login page component
 */
var LoginPage = (function () {
    function LoginPage(apiService, nav, builder, util, translate, push, storage, 
        //public fb: Facebook,
        datePipe, navParams, keyboard, alertCtrl, app, platform, ionicApp) {
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.translate = translate;
        this.push = push;
        this.storage = storage;
        this.datePipe = datePipe;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.skipfornow = "1";
        this.count = 0;
        this.Logout = false;
        this.skipdisable = true;
        this.keyboard.hasFocusedTextInput();
        this.active = true;
        var fields = {
            number: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            customer_type: "Single"
        };
        this.loginForm = this.builder.group(fields);
        this.device_id = localStorage.getItem('deviceid');
        if (this.device_id == null) {
            this.device_id = this.makeid(10);
            localStorage.setItem("deviceid", this.device_id);
        }
        this.Logout = navParams.get('Logout');
        // let backAction = platform.registerBackButtonAction(() => {
        // 	// Catches the active view
        // 	console.log(this.app.getActiveNavs())
        // 	let nav = this.app.getActiveNavs()[0];
        // 	let activeView = nav.getActive();
        // 	// Checks if can go back before show up the alert
        // 	if (activeView.name == 'LoginPage') {
        // 		if (this.count == 0) {
        // 			this.count++;
        // 			setTimeout(() => { this.count = 0 }, 2000)
        // 		}
        // 		else {
        // 			this.presentToast();
        // 		}
        // 		// } else if (this.count < 2) {
        // 		// 	if (nav.canGoBack()) {
        // 		// 		nav.pop();
        // 		// 	} else {
        // 		// 		this.presentToast();
        // 		// 	}
        // 		// }
        // 	}
        // }, 2)let backAction = platform.registerBackButtonAction(() => {
        // 	// Catches the active view
        // 	console.log(this.app.getActiveNavs())
        // 	let nav = this.app.getActiveNavs()[0];
        // 	let activeView = nav.getActive();
        // 	// Checks if can go back before show up the alert
        // 	if (activeView.name == 'LoginPage') {
        // 		if (this.count == 0) {
        // 			this.count++;
        // 			setTimeout(() => { this.count = 0 }, 2000)
        // 		}
        // 		else {
        // 			this.presentToast();
        // 		}
        // 		// } else if (this.count < 2) {
        // 		// 	if (nav.canGoBack()) {
        // 		// 		nav.pop();
        // 		// 	} else {
        // 		// 		this.presentToast();
        // 		// 	}
        // 		// }
        // 	}
        // }, 2)
        this.initializeBackButtonCustomHandler();
    }
    LoginPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    LoginPage.prototype.customHandleBackButton = function () {
        var _this = this;
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            //this.Back();
            if (this.count == 0) {
                this.count++;
                setTimeout(function () { _this.count = 0; }, 2000);
            }
            else {
                this.presentToast();
            }
        }
    };
    LoginPage.prototype.presentToast = function () {
        var _this = this;
        if (this.count == 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Close the App',
                message: 'Are you sure?',
                buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            _this.nav.setRoot('LoginPage');
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
    LoginPage.prototype.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    LoginPage.prototype.getIMEI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.skip = function () {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(function () { }, function () { });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.ngOnInit = function () {
        if (this.Logout == true) {
            localStorage.setItem('skiploginskip', '');
            var onboardshows = localStorage.getItem('onboardshows');
            var areaname = localStorage.getItem('areaname');
            var pincode = localStorage.getItem('pincode');
            var areacode = localStorage.getItem('areacode');
            var module = localStorage.getItem('module');
            if (module == '1') {
                this.logindiv = true;
                this.logindiv1 = false;
            }
            else {
                this.logindiv = false;
                this.logindiv1 = true;
            }
            var device_id = localStorage.getItem('deviceid');
            var skipdisable = localStorage.getItem('skipdisable');
            window.localStorage.clear();
            localStorage.setItem('onboardshows', onboardshows);
            localStorage.setItem('areaname', areaname);
            localStorage.setItem('areacode', areacode);
            localStorage.setItem('module', module);
            localStorage.setItem("deviceid", device_id);
            localStorage.setItem('skipdisable', skipdisable);
            if (localStorage.getItem('skipdisable') == '1') {
                this.skipdisable = true;
            }
        }
        else {
            if (localStorage.getItem('skiploginskip') == '1') {
                this.disableskip = true;
            }
            var module = localStorage.getItem('module');
            if (module == '1') {
                this.logindiv = true;
                this.logindiv1 = false;
            }
            else {
                this.logindiv = false;
                this.logindiv1 = true;
            }
            if (localStorage.getItem('custstatus') == "registered") {
                this.nav.setRoot('ChooseplanPage');
            }
            if (localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                this.nav.setRoot('ChooseplanPage');
            }
            if (localStorage.getItem('skipdisable') == '1') {
                this.skipdisable = false;
            }
        }
    };
    LoginPage.prototype.doLogin = function (skip_value) {
        var _this = this;
        this.util.showLoader();
        var data = JSON.parse(JSON.stringify(this.loginForm.value));
        data.imei_number = this.device_id;
        localStorage.setItem('num', data.number);
        if (skip_value == 'skip') {
            data.number = 'skip';
        }
        else if (skip_value == 'login') {
            var mobnum = localStorage.getItem('num');
            if (mobnum.length != 10) {
                this.util.alert(this.translate.instant('Please enter the valid mobile no.'), '');
                this.util.hideLoader();
                return;
            }
            else {
                this.numberint = parseInt(data.number);
                if (this.numberint != data.number) {
                    localStorage.setItem('num', '');
                    this.util.alert(this.translate.instant('Please enter Valid mobile no.'), '');
                    this.util.hideLoader();
                    return;
                }
            }
        }
        this.apiService.login(data).then(function (res) {
            _this.util.hideLoader();
            if (res.success) {
                _this.dateTime = new Date().toISOString();
                localStorage.setItem('logintimestamp', _this.dateTime);
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('custstatus', res.data.custmerstatus);
                localStorage.setItem('id', res.data.customer);
                localStorage.setItem('IMEI', _this.device_id);
                localStorage.setItem('custType', data.customer_type);
                localStorage.setItem('otp', res.data.otp);
                _this.currDate = _this.datePipe.transform(new Date(), "HH:mm:ss");
                localStorage.setItem('currDate', _this.currDate);
                localStorage.setItem('isLogin', skip_value);
                if (skip_value == 'login') {
                    if (res.data.custmerstatus == 'registered') {
                        localStorage.setItem('mobile_number', data.number);
                    }
                    localStorage.setItem('customer_payement_status', res.data.customer_payement_status);
                    localStorage.setItem('ShowOTP', '1');
                    localStorage.removeItem('fromDeliveryTime');
                    _this.nav.setRoot('LoginotpPage');
                }
                else {
                    if (res.data.custmerstatus == 'registered') {
                        localStorage.setItem('mobile_number', res.data.mobile_number);
                        localStorage.setItem('customer_payement_status', res.data.customer_payement_status);
                        localStorage.setItem('ShowOTP', '1');
                        _this.nav.setRoot('LoginotpPage');
                    }
                    else {
                        _this.nav.setRoot('ChooseplanPage');
                    }
                }
            }
            else {
                _this.conmessage = res.message;
                _this.showConfirmAlert();
            }
        }, function (res) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    LoginPage.prototype.signup = function () {
        this.nav.setRoot('SignupPage');
    };
    LoginPage.prototype.Choosemodule = function () {
        localStorage.removeItem('module');
        this.nav.setRoot('ModulePage');
    };
    LoginPage.prototype.skipfornowclcik = function () {
        localStorage.setItem('skipfornow', this.skipfornow);
        this.nav.setRoot('ChooseplanPage');
    };
    LoginPage.prototype.showConfirmAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alertConfirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alertConfirm = this.alertCtrl.create({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputToFocus'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "inputToFocus", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/personal/login/login.html"*/'<ion-content class="login-scroll" style="background: url(\'assets/loginFood.jpg\') center center no-repeat; width:100%; height:100%; background-size: cover;">\n	<div class="loginpage" *ngIf="logindiv==true">\n		<div padding class="wrap">\n			<form *ngIf="active" novalidate [formGroup]="loginForm" class="signup-form">\n				<div class="login-detail">\n					<h2>Login</h2>\n					<p>Enter your phone number to proceed</p>\n					<!-- <br> -->\n				</div>\n\n				<ion-item class="inputForm">\n					<ion-label class="contactNumber" floating>10 DIGIT MOBILE NUMBER</ion-label>\n					<ion-input type="tel" class="loginInput" maxlength="10" [formControl]="loginForm.controls.number" >\n					</ion-input>\n				</ion-item>\n				<br>\n				<button ion-button type="submit" id="input_submit" block class="loginbutton" (click)="doLogin(\'login\')">\n					Continue\n				</button>\n<!-- *ngIf=\'skipdisable==true\'  -->\n				<ion-grid class="scb">\n					<ion-row class="social-button">\n						<ion-col text-center>\n							<div class="skiplinks" *ngIf=\'disableskip!=true\'>\n								<a href="javascript:void(0);" class="skip" (click)="doLogin(\'skip\')">Skip for Now</a>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n\n				<ion-grid class="scc">\n					<ion-row class="social-button">\n						<ion-col text-center>\n							<div class="changemodule">\n								Want to change Module?\n								<a href="javascript:void(0);" (click)="Choosemodule()"> Choose Module</a>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</form>\n		</div>\n	</div>\n\n	<div class="loginpage" *ngIf="logindiv1==true">\n		<div padding class="wrap">\n			<form *ngIf="active" novalidate [formGroup]="loginForm" class="signup-form">\n				<div class="login-detail">\n					<h2>Login</h2>\n					<p>Enter your phone number to proceed</p>\n				</div>\n\n				<ion-item>\n					<ion-label class="contactNumber" floating>10 DIGIT MOBILE NUMBER</ion-label>\n					<ion-input type="tel" class="loginInput" maxlength="10" [formControl]="loginForm.controls.number" >\n					</ion-input>\n				</ion-item>\n				<button ion-button type="submit" id="input_submit" block class="loginbutton" (click)="doLogin(\'login\')">\n					Continue\n				</button>\n\n				<ion-grid class="scb">\n					<ion-row class="social-button">\n						<ion-col text-center>\n							<div *ngIf=\'skipdisable==true\' class="skiplinks">\n								<a href="javascript:void(0);" class="skip" (click)="doLogin(\'skip\')">Skip for Now</a>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n\n				<ion-grid class="scc">\n					<ion-row class="social-button">\n						<ion-col text-center>\n							<div class="changemodule">\n								Want to change Module?\n								<a href="javascript:void(0);" (click)="Choosemodule()"> Choose Module</a>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</form>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/personal/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndPrivacyPageModule", function() { return TermsAndPrivacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_and_privacy__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsAndPrivacyPageModule = (function () {
    function TermsAndPrivacyPageModule() {
    }
    TermsAndPrivacyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms_and_privacy__["a" /* TermsAndPrivacyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_and_privacy__["a" /* TermsAndPrivacyPage */]),
            ],
        })
    ], TermsAndPrivacyPageModule);
    return TermsAndPrivacyPageModule;
}());

//# sourceMappingURL=terms-and-privacy.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndPrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(28);
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
 * Generated class for the TermsAndPrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndPrivacyPage = (function () {
    function TermsAndPrivacyPage(navCtrl, navParams, apiService, nav, builder, util, push, storage, translate, alertCtrl, viewctrl, platform, sanitizer, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.viewctrl = viewctrl;
        this.platform = platform;
        this.sanitizer = sanitizer;
        this.ionicApp = ionicApp;
        this.termArray = [];
        this.fromonmodule = navParams.get('screenis');
        this.initializeBackButtonCustomHandler();
    }
    TermsAndPrivacyPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    TermsAndPrivacyPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    TermsAndPrivacyPage.prototype.ngOnInit = function () {
        this.loadaterms();
    };
    TermsAndPrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndPrivacyPage');
        // this.termsHight = 'auto';
        var height = document.getElementById("terms").clientHeight;
        console.log(height);
    };
    TermsAndPrivacyPage.prototype.loadaterms = function () {
        var _this = this;
        this.page_name = 'terms';
        this.apiService.getaContent(this.page_name).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.termArray = response.data;
                for (var i = 0; i < _this.termArray.length; i++) {
                    _this.termArray[i].page_name = _this.sanitizer.bypassSecurityTrustHtml(_this.termArray[i].page_name);
                    _this.termArray[i].page_description = _this.sanitizer.bypassSecurityTrustHtml(_this.termArray[i].page_description);
                }
            }
            else {
                _this.conmessage = response.message;
                _this.showConfirmAlert();
            }
        }, function (response) {
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    TermsAndPrivacyPage.prototype.Back = function () {
        if (this.fromonmodule == "ommoduleterm") {
            this.nav.setRoot('ModulePage');
            return;
        }
        else {
            // window['location'].reload();
            // this.util.showLoader();
            this.nav.setRoot('MenuPage');
        }
    };
    TermsAndPrivacyPage.prototype.showConfirmAlert = function () {
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
                                    text: "try again",
                                    handler: function () {
                                        _this.navCtrl.setRoot('TermsAndPrivacyPage');
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
    TermsAndPrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-and-privacy',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/terms-and-privacy/terms-and-privacy.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>TERMS & PRIVACY</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="main-terms-privacy">\n  <div id="terms" class="terms-privacy-contain" [style.height]=\'termsHight\'>\n    <div class="TermsArea">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 class="Terms-heading">\n            <h2>Terms and Privacy</h2>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let term of termArray; let i=index">\n          <ion-col col-12 class="">\n            <div class="term-condition1">\n              <p class="desc-content" [innerHTML]="term.page_description"></p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/terms-and-privacy/terms-and-privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], TermsAndPrivacyPage);
    return TermsAndPrivacyPage;
}());

//# sourceMappingURL=terms-and-privacy.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
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
 * Service with auxiliary utilities
 * such as loading backdrop and quick alert calls
 */
var UtilService = (function () {
    function UtilService(loadingCtrl, alertCtrl, translate) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.loader = null;
    }
    UtilService.prototype.alert = function (text, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                this.translate.instant('buttons.ok')
            ]
        });
        alert.present();
    };
    UtilService.prototype.showLoader = function () {
        if (this.loader != null) {
            return;
        }
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    UtilService.prototype.hideLoader = function () {
        if (this.loader != null) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], UtilService);
    return UtilService;
}());

//# sourceMappingURL=util_service.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(21);
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
 * Service to init device to receive push notifications
 */
var PushService = (function () {
    function PushService(apiService) {
        this.apiService = apiService;
    }
    PushService.prototype.init = function (id) {
        var notificationOpenedCallback = function (jsonData) {
        };
        if (window['plugins'] && window['plugins'].OneSignal) {
            window['plugins'].OneSignal.startInit(id)
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
            var me_1 = this;
            window['plugins'].OneSignal.getIds(function (ids) {
                me_1.apiService.savePushToken(ids.userId);
            });
        }
    };
    PushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* APIService */]])
    ], PushService);
    return PushService;
}());

//# sourceMappingURL=push_service.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var NetworkProvider = (function () {
    function NetworkProvider(alertCtrl, eventCtrl) {
        this.alertCtrl = alertCtrl;
        this.eventCtrl = eventCtrl;
        console.log('Hello NetworkProvider Provider');
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the MyNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MyNotificationProvider = (function () {
    function MyNotificationProvider(http, storage, localNotifications, platform
        //private backgroundMode: BackgroundMode
    ) {
        this.http = http;
        this.storage = storage;
        this.localNotifications = localNotifications;
        this.platform = platform;
        console.log('Hello MyNotificationProvider Provider');
        this.http = http;
        this.data = null;
        // this.load();
        //this.backgroundMode.enable();
    }
    MyNotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */]
            //private backgroundMode: BackgroundMode
        ])
    ], MyNotificationProvider);
    return MyNotificationProvider;
}());

//# sourceMappingURL=my-notification.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcurrencyPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ecurrency__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EcurrencyPipeModule = (function () {
    function EcurrencyPipeModule() {
    }
    EcurrencyPipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__ecurrency__["a" /* ECurrencyPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__ecurrency__["a" /* ECurrencyPipe */]
            ]
        })
    ], EcurrencyPipeModule);
    return EcurrencyPipeModule;
}());

//# sourceMappingURL=ecurrency.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(21);
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
 * Service to handle orders history
 * Using server if we have user signup
 * Otherwise stores everything locally
 */
var OrderHistoryService = (function () {
    function OrderHistoryService(storage, apiService) {
        this.storage = storage;
        this.apiService = apiService;
        this.items = [];
    }
    OrderHistoryService.prototype.getItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.apiService.getSettings().signup_required == 1) {
                _this.apiService.getOrders().subscribe(function (v) {
                    _this.items = v;
                    resolve(_this.items);
                }, function () {
                    reject();
                });
            }
            else {
                _this.storage.get('ordersHistory').then(function (v) {
                    if (v) {
                        _this.items = JSON.parse(v);
                        resolve(_this.items);
                    }
                    else {
                        reject();
                    }
                }, function () {
                    reject();
                });
            }
        });
    };
    OrderHistoryService.prototype.add = function (order) {
        var _this = this;
        var addOrder = function (order) {
            _this.items.unshift(order);
            _this.storage.set('ordersHistory', JSON.stringify(_this.items)).then(function () { }, function () { });
        };
        if (this.apiService.getSettings().signup_required != 1) {
            if (this.items.length) {
                addOrder(order);
            }
            else {
                this.storage.get('ordersHistory').then(function (v) {
                    if (v) {
                        _this.items = JSON.parse(v);
                    }
                    addOrder(order);
                }, function () { });
            }
        }
    };
    OrderHistoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* APIService */]])
    ], OrderHistoryService);
    return OrderHistoryService;
}());

//# sourceMappingURL=order_history_service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_loading_loading__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_cart_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_order_history_service__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_ecurrency_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_onboarding_onboarding_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_onboarding_onboarding__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_uid__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_android_permissions__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_unique_device_id__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_network_network__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_dashboard_dashboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_dashboard_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_aboutus_aboutus__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_aboutus_aboutus_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_terms_and_privacy_terms_and_privacy__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_terms_and_privacy_terms_and_privacy_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_account_account__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_account_account_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_personal_login_login__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_personal_login_login_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_orderhistory_orderhistory__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_orderhistory_orderhistory_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_paymentfailed_paymentfailed__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_paymentfailed_paymentfailed_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_local_notifications__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__directives_directives_phonenumber_directives_phonenumber__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ion_datepicker__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_social_sharing__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_my_notification_my_notification__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























//import { Facebook } from '@ionic-native/facebook';

//import {CalendarModule} from 'ionic3-calendar';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';



















// Pro.init('5d523476', {
//   appVersion: '1.2.1'
// });





var MyErrorHandler = (function () {
    function MyErrorHandler(injector, platform) {
        this.platform = platform;
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */]);
        }
        catch (e) {
        }
    }
    MyErrorHandler.prototype.handleError = function (err) {
        if (this.platform.is('browser')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].monitoring.handleNewError(err);
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_8__pages_loading_loading__["a" /* Loading */],
                __WEBPACK_IMPORTED_MODULE_45__directives_directives_phonenumber_directives_phonenumber__["a" /* DirectivesPhonenumberDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/aboutyou/aboutyou.module#AboutyouPageModule', name: 'AboutyouPage', segment: 'aboutyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/area-edit/area-edit.module#AreaEditPageModule', name: 'AreaEditPage', segment: 'area-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancel-meal/cancel-meal.module#CancelMealPageModule', name: 'CancelMealPage', segment: 'cancel-meal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalog/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalog/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalog/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-preference/choose-preference.module#ChoosePreferencePageModule', name: 'ChoosePreferencePage', segment: 'choose-preference', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choosedeliveryaddress/choosedeliveryaddress.module#ChoosedeliveryaddressPageModule', name: 'ChoosedeliveryaddressPage', segment: 'choosedeliveryaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choosedeliverytime/choosedeliverytime.module#ChoosedeliverytimePageModule', name: 'ChoosedeliverytimePage', segment: 'choosedeliverytime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chooseplan/chooseplan.module#ChooseplanPageModule', name: 'ChooseplanPage', segment: 'chooseplan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard-checkout/dashboard-checkout.module#DashboardCheckoutPageModule', name: 'DashboardCheckoutPage', segment: 'dashboard-checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loadingsecond/loadingsecond.module#LoadingsecondPageModule', name: 'LoadingsecondPage', segment: 'loadingsecond', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guest-payment-successful/guest-payment-successful.module#GuestPaymentSuccessfulPageModule', name: 'GuestPaymentSuccessfulPage', segment: 'guest-payment-successful', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginotp/loginotp.module#LoginotpPageModule', name: 'LoginotpPage', segment: 'loginotp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mealtype/mealtype.module#MealtypePageModule', name: 'MealtypePage', segment: 'mealtype', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mealhistory/mealhistory.module#MealhistoryPageModule', name: 'MealhistoryPage', segment: 'mealhistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/module/module.module#ModulePageModule', name: 'ModulePage', segment: 'module', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mycurrentplan/mycurrentplan.module#MycurrentplanPageModule', name: 'MycurrentplanPage', segment: 'mycurrentplan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news_detail/news_detail.module#NewsDetailPageModule', name: 'NewsDetailPage', segment: 'news_detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news_feed/news_feed.module#NewsFeedPageModule', name: 'NewsFeedPage', segment: 'news_feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-guest-meal/order-guest-meal.module#OrderGuestMealPageModule', name: 'OrderGuestMealPage', segment: 'order-guest-meal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#OnboardingPageModule', name: 'OnboardingPage', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderhistory/orderhistory.module#OrderhistoryPageModule', name: 'OrderhistoryPage', segment: 'orderhistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/address_map/address_map.module#AddressMapModule', name: 'AddressMap', segment: 'address_map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/credit_card_input/credit_card_input.module#CreditCardInputModule', name: 'CreditCardInput', segment: 'credit_card_input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ourmenu/ourmenu.module#OurmenuPageModule', name: 'OurmenuPage', segment: 'ourmenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentfailed/paymentfailed.module#PaymentfailedPageModule', name: 'PaymentfailedPage', segment: 'paymentfailed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentsuccessful/paymentsuccessful.module#PaymentsuccessfulPageModule', name: 'PaymentsuccessfulPage', segment: 'paymentsuccessful', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/loyalty/loyalty.module#LoyaltyPageModule', name: 'LoyaltyPage', segment: 'loyalty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/order_view/order_view.module#OrdersHistoryPageModule', name: 'OrderViewPage', segment: 'order_view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/orders_history/orders_history.module#OrdersHistoryPageModule', name: 'OrdersHistoryPage', segment: 'orders_history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preference-edit/preference-edit.module#PreferenceEditPageModule', name: 'PreferenceEditPage', segment: 'preference-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profession-edit/profession-edit.module#ProfessionEditPageModule', name: 'ProfessionEditPage', segment: 'profession-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/refer-and-earn/refer-and-earn.module#ReferAndEarnPageModule', name: 'ReferAndEarnPage', segment: 'refer-and-earn', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/referand-earn-model/referand-earn-model.module#ReferandEarnModelPageModule', name: 'ReferandEarnModelPage', segment: 'referand-earn-model', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renewsubscription/renewsubscription.module#RenewsubscriptionPageModule', name: 'RenewsubscriptionPage', segment: 'renewsubscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-area/select-area.module#SelectAreaPageModule', name: 'SelectAreaPage', segment: 'select-area', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/startdate/startdate.module#StartdatePageModule', name: 'StartdatePage', segment: 'startdate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-privacy/terms-and-privacy.module#TermsAndPrivacyPageModule', name: 'TermsAndPrivacyPage', segment: 'terms-and-privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracker/tracker.module#HomePageModule', name: 'Tracker', segment: 'tracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/switch-address-time/switch-address-time.module#SwitchAddressTimePageModule', name: 'SwitchAddressTimePage', segment: 'switch-address-time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upgrade-meal-type/upgrade-meal-type.module#UpgradeMealTypePageModule', name: 'UpgradeMealTypePage', segment: 'upgrade-meal-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picktmrwvegies/picktmrwvegies.module#PicktmrwvegiesPageModule', name: 'PicktmrwvegiesPage', segment: 'picktmrwvegies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/where-to-delivere/where-to-delivere.module#WhereToDeliverePageModule', name: 'WhereToDeliverePage', segment: 'where-to-delivere', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */],
                __WEBPACK_IMPORTED_MODULE_22__pages_onboarding_onboarding_module__["OnboardingPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_aboutus_aboutus_module__["AboutusPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_terms_and_privacy_terms_and_privacy_module__["TermsAndPrivacyPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_account_account_module__["AccountPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_personal_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_orderhistory_orderhistory_module__["OrderhistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_paymentfailed_paymentfailed_module__["PaymentfailedPageModule"],
                __WEBPACK_IMPORTED_MODULE_46_ion_datepicker__["a" /* DatePickerModule */]
                //CalendarModule 
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_23__pages_onboarding_onboarding__["a" /* OnboardingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_loading_loading__["a" /* Loading */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_terms_and_privacy_terms_and_privacy__["a" /* TermsAndPrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_personal_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_orderhistory_orderhistory__["a" /* OrderhistoryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_paymentfailed_paymentfailed__["a" /* PaymentfailedPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_api_service__["a" /* APIService */],
                __WEBPACK_IMPORTED_MODULE_14__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_15__services_push_service__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_16__services_util_service__["a" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_17__services_order_history_service__["a" /* OrderHistoryService */],
                //Facebook,
                __WEBPACK_IMPORTED_MODULE_24__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_uid__["a" /* Uid */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_social_sharing__["a" /* SocialSharing */],
                //Network
                //Device,
                //AndroidPermissions,
                // Comment these lines to disable ionic monitoring
                // IonicErrorHandler,
                // {provide: ErrorHandler, useClass: MyErrorHandler}
                // Uncomment this line to disable ionic monitoring
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_48__providers_my_notification_my_notification__["a" /* MyNotificationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ECurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(21);
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
 * Ecurrency pipe for displaying money values
 */
var ECurrencyPipe = (function () {
    function ECurrencyPipe(apiService) {
        this.apiService = apiService;
    }
    ECurrencyPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return this.apiService.getSettings().currency_format.
            replace(':value', parseFloat(value).toFixed(2));
    };
    ECurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ecurrency' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */]])
    ], ECurrencyPipe);
    return ECurrencyPipe;
}());

//# sourceMappingURL=ecurrency.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cart_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_network__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_my_notification_my_notification__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { LocalNotifications } from '@ionic-native/local-notifications';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, cart, api, translate, util, alertCtrl, app, events, networkProvider, 
        // private localNotifications: LocalNotifications,
        myNotificationprovider, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.cart = cart;
        this.api = api;
        this.translate = translate;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.events = events;
        this.networkProvider = networkProvider;
        this.myNotificationprovider = myNotificationprovider;
        this.toastCtrl = toastCtrl;
        //rootPage: any = DashboardPage;
        this.counter = 0;
        this.loggedIn = false;
        this.util.showLoader();
        this.initializeApp();
        this.util.hideLoader();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        //Subscribe on pause i.e. background or lock phone
        this.platform.pause.subscribe(function () {
            // this.load();
        });
        //Subscribe on pause i.e. background or unlock phone
        this.platform.resume.subscribe(function () {
            // this.load();
        });
        this.translate.setDefaultLang('en');
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.networkProvider.initializeNetworkEvents();
            // Offline event
            // this.events.subscribe('network:offline', () => {
            //     alert('network:offline ==> ' + this.network.type);
            // });
            // // Online event
            // this.events.subscribe('network:online', () => {
            //     alert('network:online ==> ' + this.network.type);
            // });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('android')) {
                //this.statusBar.backgroundColorByHexString('#fff');
            }
            _this.storage.ready().then(function () {
                _this.cart.init();
                _this.dateTime1 = new Date().toISOString();
                _this.dateTime = localStorage.getItem('logintimestamp');
                console.log(_this.dateTime);
                if (_this.dateTime != null) {
                    var difference = new Date(_this.dateTime1).getTime() - new Date(_this.dateTime).getTime();
                    console.log(difference);
                    var differenceInminute = difference / 3600000; //3600000;//60000
                    console.log(differenceInminute);
                    if (differenceInminute >= 6) {
                        _this.deviceid = localStorage.getItem('deviceid');
                        window.localStorage.clear();
                        console.log('distroyuuuuuuuuu');
                        localStorage.setItem('areacode', null);
                        localStorage.setItem('pincode', null);
                        localStorage.setItem('areaname', null);
                        localStorage.setItem('skipdisable', '1');
                        localStorage.setItem('onboardshows', '1');
                        localStorage.setItem('deviceid', _this.deviceid);
                        localStorage.setItem('module', '1');
                        _this.nav.setRoot('LoginPage');
                    }
                }
                _this.api.getLoginStatus().subscribe(function () {
                    _this.loggedIn = true;
                });
                _this.storage.get('welcomeShown').then(function (v) {
                    if (v) {
                        var settings = _this.api.getSettings();
                        if (settings && settings.signup_required == 1) {
                            _this.loggedIn = true;
                        }
                        _this.api.init().then(function () {
                            _this.loggedIn = _this.api.isLoggedIn();
                            if (localStorage.getItem('onboardshows') == '1') {
                                if (localStorage.getItem('areacode')) {
                                    if (localStorage.getItem('module')) {
                                        if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                                            if (localStorage.getItem('isLogin') != null && localStorage.getItem('ShowOTP') == "1") {
                                                localStorage.removeItem('ShowOTP');
                                                localStorage.removeItem('custstatus');
                                                localStorage.removeItem('isLogin');
                                                _this.nav.setRoot('LoginPage');
                                            }
                                            else {
                                                if (localStorage.getItem('customer_payement_status') == 'success') {
                                                    if (localStorage.getItem('ShowOTP') == '1') {
                                                        _this.nav.setRoot('LoginotpPage');
                                                    }
                                                    else {
                                                        _this.nav.setRoot('MenuPage');
                                                    }
                                                }
                                                else {
                                                    if (localStorage.getItem('ShowOTP') == '1') {
                                                        _this.nav.setRoot('LoginotpPage');
                                                    }
                                                    else {
                                                        if (localStorage.getItem('ShowAbout') == '1') {
                                                            _this.nav.setRoot('AboutyouPage');
                                                        }
                                                        else {
                                                            if (localStorage.getItem('subscription_id') != null) {
                                                                if (localStorage.getItem('mealType') != null) {
                                                                    if (localStorage.getItem('selectprefrence') == '1') {
                                                                        //if (localStorage.getItem('statdatescreen') != null) {
                                                                        if (localStorage.getItem('selectDelTime') == '1') {
                                                                            if (localStorage.getItem('selectWhereAddress') == '1') {
                                                                                if (localStorage.getItem('selectDelAdd') == '1') {
                                                                                    if (localStorage.getItem('payment_id') != '0') {
                                                                                        _this.nav.setRoot('MenuPage');
                                                                                    }
                                                                                    else {
                                                                                        _this.nav.setRoot('CheckoutPage');
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    _this.nav.setRoot('ChoosedeliveryaddressPage');
                                                                                }
                                                                            }
                                                                            else {
                                                                                _this.nav.setRoot('WhereToDeliverePage');
                                                                            }
                                                                        }
                                                                        else {
                                                                            _this.nav.setRoot('ChoosedeliverytimePage');
                                                                        }
                                                                        // } else {
                                                                        //     this.nav.setRoot('StartdatePage');
                                                                        // }
                                                                    }
                                                                    else {
                                                                        localStorage.removeItem('renewrotistringlunch');
                                                                        localStorage.removeItem('renewrotistringdinner');
                                                                        localStorage.setItem('extraRoti_Dinner', '0');
                                                                        localStorage.setItem('extraRoti_Lunch', '0');
                                                                        console.log('innnnnnn component');
                                                                        localStorage.removeItem('preferenceProducts');
                                                                        localStorage.removeItem('preferenceProductsDinner');
                                                                        localStorage.removeItem('customise_lc_data');
                                                                        localStorage.removeItem('customise_dm_data');
                                                                        _this.nav.setRoot('ChoosePreferencePage');
                                                                    }
                                                                }
                                                                else {
                                                                    _this.nav.setRoot('MealtypePage');
                                                                }
                                                            }
                                                            else {
                                                                _this.nav.setRoot('ChooseplanPage');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else {
                                            _this.nav.setRoot('LoginPage');
                                        }
                                    }
                                    else {
                                        _this.nav.setRoot('ModulePage');
                                    }
                                }
                                else {
                                    _this.nav.setRoot('SelectAreaPage');
                                }
                            }
                            else {
                                _this.nav.setRoot('OnboardingPage');
                            }
                            _this.splashScreen.hide();
                        });
                    }
                    else {
                        _this.api.init().then(function () {
                            _this.loggedIn = _this.api.isLoggedIn();
                            if (localStorage.getItem('onboardshows') == '1') {
                                if (localStorage.getItem('areacode')) {
                                    if (localStorage.getItem('module')) {
                                        if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                                            if (localStorage.getItem('customer_payement_status') == 'success') {
                                                _this.nav.setRoot('MenuPage');
                                            }
                                            else {
                                                if (localStorage.getItem('ShowOTP') == '1') {
                                                    _this.nav.setRoot('LoginotpPage');
                                                }
                                                else {
                                                    if (localStorage.getItem('ShowAbout') == '1') {
                                                        _this.nav.setRoot('AboutyouPage');
                                                    }
                                                    else {
                                                        if (localStorage.getItem('subscription_id') != null) {
                                                            if (localStorage.getItem('mealType') != null) {
                                                                if (localStorage.getItem('selectprefrence') == '1') {
                                                                    //if (localStorage.getItem('statdatescreen') != null) {
                                                                    if (localStorage.getItem('selectDelTime') == '1') {
                                                                        if (localStorage.getItem('selectWhereAddress') == '1') {
                                                                            if (localStorage.getItem('selectDelAdd') == '1') {
                                                                                if (localStorage.getItem('payment_id') != '0') {
                                                                                    _this.nav.setRoot('MenuPage');
                                                                                }
                                                                                else {
                                                                                    _this.nav.setRoot('CheckoutPage');
                                                                                }
                                                                            }
                                                                            else {
                                                                                _this.nav.setRoot('ChoosedeliveryaddressPage');
                                                                            }
                                                                        }
                                                                        else {
                                                                            _this.nav.setRoot('WhereToDeliverePage');
                                                                        }
                                                                    }
                                                                    else {
                                                                        _this.nav.setRoot('ChoosedeliverytimePage');
                                                                    }
                                                                    // } else {
                                                                    //     this.nav.setRoot('StartdatePage');
                                                                    // }
                                                                }
                                                                else {
                                                                    console.log('innnnnnn component');
                                                                    localStorage.removeItem('renewrotistringlunch');
                                                                    localStorage.removeItem('renewrotistringdinner');
                                                                    localStorage.setItem('extraRoti_Dinner', '0');
                                                                    localStorage.setItem('extraRoti_Lunch', '0');
                                                                    localStorage.removeItem('preferenceProducts');
                                                                    localStorage.removeItem('preferenceProductsDinner');
                                                                    localStorage.removeItem('customise_lc_data');
                                                                    localStorage.removeItem('customise_dm_data');
                                                                    _this.nav.setRoot('ChoosePreferencePage');
                                                                }
                                                            }
                                                            else {
                                                                _this.nav.setRoot('MealtypePage');
                                                            }
                                                        }
                                                        else {
                                                            _this.nav.setRoot('ChooseplanPage');
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else {
                                            _this.nav.setRoot('LoginPage');
                                        }
                                    }
                                    else {
                                        _this.nav.setRoot('ModulePage');
                                    }
                                }
                                else {
                                    _this.nav.setRoot('SelectAreaPage');
                                }
                            }
                            else {
                                _this.nav.setRoot('OnboardingPage');
                            }
                            _this.splashScreen.hide();
                        }, function () {
                            window['location'].reload();
                        });
                    }
                }, function () {
                    _this.api.init().then(function () {
                        _this.loggedIn = _this.api.isLoggedIn();
                        if (localStorage.getItem('onboardshows') == '1') {
                            if (localStorage.getItem('areacode')) {
                                if (localStorage.getItem('module')) {
                                    if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                                        if (localStorage.getItem('customer_payement_status') == 'success') {
                                            _this.nav.setRoot('MenuPage');
                                        }
                                        else {
                                            if (localStorage.getItem('ShowOTP') == '1') {
                                                _this.nav.setRoot('LoginotpPage');
                                            }
                                            else {
                                                if (localStorage.getItem('ShowAbout') == '1') {
                                                    _this.nav.setRoot('AboutyouPage');
                                                }
                                                else {
                                                    if (localStorage.getItem('subscription_id') != null) {
                                                        if (localStorage.getItem('mealType') != null) {
                                                            if (localStorage.getItem('selectprefrence') == '1') {
                                                                // if (localStorage.getItem('statdatescreen') != null) {
                                                                if (localStorage.getItem('selectDelTime') == '1') {
                                                                    if (localStorage.getItem('selectWhereAddress') == '1') {
                                                                        if (localStorage.getItem('selectDelAdd') == '1') {
                                                                            if (localStorage.getItem('payment_id') != '0') {
                                                                                _this.nav.setRoot('MenuPage');
                                                                            }
                                                                            else {
                                                                                _this.nav.setRoot('CheckoutPage');
                                                                            }
                                                                        }
                                                                        else {
                                                                            _this.nav.setRoot('ChoosedeliveryaddressPage');
                                                                        }
                                                                    }
                                                                    else {
                                                                        _this.nav.setRoot('WhereToDeliverePage');
                                                                    }
                                                                }
                                                                else {
                                                                    _this.nav.setRoot('ChoosedeliverytimePage');
                                                                }
                                                                // } else {
                                                                //     this.nav.setRoot('StartdatePage');
                                                                // }
                                                            }
                                                            else {
                                                                console.log('innnnnnn component');
                                                                localStorage.removeItem('renewrotistringlunch');
                                                                localStorage.removeItem('renewrotistringdinner');
                                                                localStorage.setItem('extraRoti_Dinner', '0');
                                                                localStorage.setItem('extraRoti_Lunch', '0');
                                                                localStorage.removeItem('preferenceProducts');
                                                                localStorage.removeItem('preferenceProductsDinner');
                                                                localStorage.removeItem('customise_lc_data');
                                                                localStorage.removeItem('customise_dm_data');
                                                                _this.nav.setRoot('ChoosePreferencePage');
                                                            }
                                                        }
                                                        else {
                                                            _this.nav.setRoot('MealtypePage');
                                                        }
                                                    }
                                                    else {
                                                        _this.nav.setRoot('ChooseplanPage');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        _this.nav.setRoot('LoginPage');
                                    }
                                }
                                else {
                                    _this.nav.setRoot('ModulePage');
                                }
                            }
                            else {
                                _this.nav.setRoot('SelectAreaPage');
                            }
                        }
                        else {
                            _this.nav.setRoot('OnboardingPage');
                        }
                        _this.splashScreen.hide();
                    }, function () {
                        window['location'].reload();
                    });
                });
            });
        });
    };
    MyApp.prototype.openPage = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (localStorage.getItem('onboardshows') == '1') {
            if (localStorage.getItem('areacode')) {
                if (localStorage.getItem('module')) {
                    if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                        if (localStorage.getItem('subscription_id') != null) {
                            if (localStorage.getItem('mealType') != null) {
                                console.log('innnnnnn component');
                                localStorage.removeItem('renewrotistringlunch');
                                localStorage.removeItem('renewrotistringdinner');
                                localStorage.removeItem('preferenceProducts');
                                localStorage.removeItem('preferenceProductsDinner');
                                localStorage.setItem('extraRoti_Dinner', '0');
                                localStorage.setItem('extraRoti_Lunch', '0');
                                localStorage.removeItem('customise_lc_data');
                                localStorage.removeItem('customise_dm_data');
                                this.nav.setRoot('ChoosePreferencePage');
                            }
                            else {
                                this.nav.setRoot('MealtypePage');
                            }
                        }
                        else {
                            this.nav.setRoot('ChooseplanPage');
                        }
                    }
                    else {
                        this.nav.setRoot('LoginPage');
                    }
                }
                else {
                    this.nav.setRoot('ModulePage');
                }
            }
            else {
                this.nav.setRoot('SelectAreaPage');
            }
        }
        else {
            this.nav.setRoot('OnboardingPage');
        }
    };
    MyApp.prototype.openProfile = function () {
        this.nav.setRoot('ProfilePage');
    };
    MyApp.prototype.openHistory = function () { };
    MyApp.prototype.logout = function () {
        this.util.showLoader();
        this.storage.clear().then(function () {
            window['location'].reload();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/app/app.html"*/'<!-- <ion-split-pane> -->\n	<ion-nav #myNav swipeBackEnabled="false" [root]="rootPage"></ion-nav>\n<!-- </ion-split-pane> -->'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_my_notification_my_notification__["a" /* MyNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Loading = (function () {
    function Loading() {
    }
    Loading = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/loading/loading.html"*/'<div class="loading">\n	<div class="loading-text">{{ \'loading\' | translate }}</div>\n</div>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/loading/loading.html"*/
        })
    ], Loading);
    return Loading;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(21);
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
 * WelcomePage component
 */
var Welcome = (function () {
    function Welcome(nav, storage, push, api) {
        this.nav = nav;
        this.storage = storage;
        this.push = push;
        this.api = api;
        this.signup = true;
        this.signup = (this.api.getSettings().signup_required == 1);
    }
    Welcome.prototype.goToSignup = function () {
        this.nav.setRoot('SignupPage');
    };
    Welcome.prototype.goToLogin = function () {
        this.nav.setRoot('LoginPage');
    };
    Welcome.prototype.startApp = function () {
        this.push.init(this.api.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(function () {
        }, function () {
        });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        // this.nav.setRoot(Onboarding1Page);
        // StatusBar.styleDefault();
        // StatusBar.overlaysWebView(false);
        // StatusBar.backgroundColorByHexString('F8F8F8');
        // StatusBar.show();
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/welcome/welcome.html"*/'<div class="welcome-screen">\n    <div class="welcome-group">\n        <p class="text-center">\n            <!--<span class="welcome-icon">-->\n              <!--<span class="inner"></span>-->\n            <!--</span>-->\n           \n            <span class="welcome-text">\n                {{ \'welcome.welcome\' | translate }}<br/>{{ \'welcome.app_name\' | translate }}\n            </span>\n        </p>\n    </div>\n    <!-- <div class="welcome-content" *ngIf="!signup">\n        <button ion-button block large class="start-button" (click)="startApp()">{{ \'welcome.start\' | translate }}</button>\n    </div> -->\n    <div class="welcome-content">\n        <button ion-button block large class="start-button" (click)="goToSignup()">{{ \'welcome.signup\' | translate }}</button>\n        <div class="text-center">\n          <br>\n          <a (click)="goToLogin()">{{ \'welcome.login\' | translate }}</a>\n          <br>\n          <br>\n          <!-- <a (click)="startApp()">{{ \'login.skip\' | translate }}</a> -->\n        </div>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesPhonenumberDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

/**
 * Generated class for the DirectivesPhonenumberDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var DirectivesPhonenumberDirective = (function () {
    function DirectivesPhonenumberDirective(pattern) {
        this.pattern = pattern;
    }
    DirectivesPhonenumberDirective.prototype.onInputChange = function (e) {
        try {
            var value = e.target.value, caret = e.target.selectionStart, pattern = this.pattern, reserve = pattern.replace(/\*/, 'g'), applied = '', ordinal = 0;
            if (e.keyCode === 8 || e.key === 'Backspace' || e.keyCode === 46 || e.key === 'Delete') {
                if (value.length) {
                    //remove all trailing formatting
                    while (value.length && pattern[value.length] && pattern[value.length] !== '*') {
                        value = value.substring(0, value.length - 1);
                    }
                    //remove all leading formatting to restore placeholder
                    if (pattern.substring(0, value.length).indexOf('*') < 0) {
                        value = value.substring(0, value.length - 1);
                    }
                }
            }
            //apply mask characters 
            for (var i = 0; i < value.length; i++) {
                //enforce pattern limit
                if (i < pattern.length) {
                    //match mask
                    if (value[i] === pattern[ordinal]) {
                        applied += value[i];
                        ordinal++;
                    }
                    else if (reserve.indexOf(value[i]) > -1) {
                        //skip other reserved characters
                    }
                    else {
                        //apply leading formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                        applied += value[i];
                        ordinal++;
                        //apply trailing formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                    }
                }
            }
            e.target.value = applied;
            if (caret < value.length) {
                e.target.setSelectionRange(caret, caret);
            }
        }
        catch (ex) {
            console.error(ex.message);
        }
    };
    DirectivesPhonenumberDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[phonenumber]',
            host: {
                '(keyup)': 'onInputChange($event)'
            } // Attribute selector
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('phonenumber')),
        __metadata("design:paramtypes", [String])
    ], DirectivesPhonenumberDirective);
    return DirectivesPhonenumberDirective;
}());

//# sourceMappingURL=directives-phonenumber.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__(21);
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
 * Service handling shopping cart operations
 */
var CartService = (function () {
    function CartService(storage, alertCtrl, translate, apiService) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.apiService = apiService;
        this.items = [];
        this._itemsCount$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    CartService.prototype.init = function () {
        var _this = this;
        this.storage.get('cart').then(function (v) {
            if (v) {
                _this.items = JSON.parse(v);
                _this._itemsCount$.next(_this.getCartCount());
            }
        });
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.clear = function () {
        this.items.splice(0, this.items.length);
        this.save();
    };
    CartService.prototype.getCartCount = function () {
        var count = 0;
        this.items.forEach(function (item) {
            count = count + item.count;
        });
        return count;
    };
    CartService.prototype.doAddItem = function (product, count) {
        var item = null;
        this.items.forEach(function (cart_item) {
            if (cart_item.product.id == product.id) {
                item = cart_item;
            }
        });
        if (item == null) {
            this.items.push({
                product: product,
                count: count
            });
        }
        else {
            item.count = item.count + count;
        }
        this.save();
    };
    CartService.prototype.hasItem = function (product) {
        var result = false;
        this.items.forEach(function (cart_item) {
            if (cart_item.product.id == product.id) {
                result = true;
            }
        });
        return result;
    };
    CartService.prototype.addItem = function (product, count) {
        var _this = this;
        if (this.items.length > 0 && this.apiService.getSettings().multiple_restaurants) {
            if (this.items[0].product.restaurant_id != product.restaurant_id) {
                var confirm_1 = this.alertCtrl.create({
                    title: this.translate.instant('cart.add_from_other_restaurant_title'),
                    message: this.translate.instant('cart.add_from_other_restaurant_text'),
                    buttons: [{
                            text: this.translate.instant('buttons.cancel')
                        }, {
                            text: this.translate.instant('buttons.ok'),
                            handler: function () {
                                _this.items = [];
                                _this.doAddItem(product, count);
                            }
                        }]
                });
                confirm_1.present();
            }
            else {
                this.doAddItem(product, count);
            }
        }
        else {
            this.doAddItem(product, count);
        }
    };
    CartService.prototype.decreaseCount = function (item) {
        var ind = this.items.indexOf(item);
        if (ind >= 0) {
            this.items[ind].count = this.items[ind].count - 1;
            if (this.items[ind].count == 0) {
                this.removeItem(item);
            }
            else {
                this.save();
            }
        }
    };
    CartService.prototype.setItemCount = function (product, count) {
        var item = null;
        this.items.forEach(function (cart_item) {
            if (cart_item.product.id == product.id) {
                item = cart_item;
            }
        });
        if (item == null) {
            this.items.push({
                product: product,
                count: count
            });
        }
        else {
            item.count = count;
        }
        this.save();
    };
    CartService.prototype.removeItem = function (item) {
        var ind = this.items.indexOf(item);
        if (ind >= 0) {
            this.items.splice(ind, 1);
            this.save();
        }
    };
    CartService.prototype.save = function () {
        this.storage.set('cart', JSON.stringify(this.items)).then(function () { });
        this._itemsCount$.next(this.getCartCount());
    };
    Object.defineProperty(CartService.prototype, "itemsCount$", {
        get: function () {
            return this._itemsCount$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* APIService */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart_service.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map