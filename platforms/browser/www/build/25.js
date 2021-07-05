webpackJsonp([25],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurmenuPageModule", function() { return OurmenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ourmenu__ = __webpack_require__(936);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OurmenuPageModule = (function () {
    function OurmenuPageModule() {
    }
    OurmenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ourmenu__["a" /* OurmenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ourmenu__["a" /* OurmenuPage */]),
            ],
        })
    ], OurmenuPageModule);
    return OurmenuPageModule;
}());

//# sourceMappingURL=ourmenu.module.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurmenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_util_service__ = __webpack_require__(35);
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
 * Generated class for the OurmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OurmenuPage = (function () {
    function OurmenuPage(navCtrl, navParams, apiService, push, alertCtrl, storage, ionicApp, platform, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.ionicApp = ionicApp;
        this.platform = platform;
        this.util = util;
        this.shownGroup = null;
        this.screenis = 'thirdpage';
        this.ourmenuArray = [];
        this.initializeBackButtonCustomHandler();
    }
    OurmenuPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    OurmenuPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    OurmenuPage.prototype.ngOnInit = function () {
        this.questions = "questions";
        this.answer = "ANSWER";
        // this.custid = localStorage.getItem('id');
        // this.custToken = localStorage.getItem('token');
        // this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
        // this.apiService.getcurrentpaln(this.custid, this.custToken,this.customer_subscription_id).then(response => {
        //   this.util.hideLoader();
        //   if (response) {
        //     this.push.init(this.apiService.getSettings().pushwoosh_id);
        //     this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        //     console.log(response.deliverytiming);
        //     this.preferenceProducts = response.product;
        //     this.preferenceProductsDinner=response.dinnerproduct;   
        //     this.preferenceProductstime=response.deliverytiming;   
        //     this.preferenceProductsDinnertime=response.dinnerdeliverytiming;   
        //     this.mealType = localStorage.getItem('mealType');
        //   }
        //   else{
        //     console.log('out');
        //     this.conmessage = 'Something Went Wrong';
        // 	  this.showConfirmAlert();
        //   }
        // }, (data) => {
        //   // this.util.hideLoader();
        //   // this.util.alert(this.translate.instant(''), data[0]);
        //   this.conmessage = '';
        // 	this.showConfirmAlert();
        // });
    };
    OurmenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OurmenuPage');
    };
    OurmenuPage.prototype.Back = function () {
        if (this.screenis == "thirdpage") {
            var thirdpage = "thirdpage";
            this.navCtrl.setRoot('OnboardingPage', {
                screenis: thirdpage
            });
        }
    };
    OurmenuPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    OurmenuPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    OurmenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ourmenu',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ourmenu/ourmenu.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>OUR MENU</ion-title>\n  </ion-navbar>\n</ion-header>\n<!-- <ion-content class="main-content"> \n  <div class="content-area ourmenuplan">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 class="Terms-heading">\n          <h2>Our Menu</h2>\n          <span>Check out what we Offer</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content> -->\n<ion-content class="main-faq ourmenuplan">\n  <div class="faq-content">\n    <h1>Our Menu</h1>\n    <h2>Check out what we Offer!</h2>    \n    <div class="row faqstart">\n      <div class="col-12" style="width: 100%; float: left;">\n        <ion-list>\n          <!-- *ngFor="let a of ourmenuArray; let i = index;"  -->\n          <ion-item text-wrap (click)="toggleGroup(i)" *ngFor="let a of ourmenuArray; let i = index;"\n            [ngClass]="{active: isGroupShown(i)}">\n            <h3>\n              <label class="myfistclass myfistclass_data" data-toggle="collapse" [innerHTML]="questions"></label>\n              <ion-icon color="success" item-right [name]="isGroupShown(1) ? \'arrow-dropdown\' : \'arrow-dropright\'" style="display: none !important;">\n              </ion-icon>\n            </h3>\n            <div *ngIf="isGroupShown(i)">\n              <h2 class="mysecondclass" [innerHTML]="answer"></h2>\n              <p class="mysecondclass" [innerHTML]="answer"></p>\n            </div>\n          </ion-item>\n        </ion-list>    \n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ourmenu/ourmenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__services_util_service__["a" /* UtilService */]])
    ], OurmenuPage);
    return OurmenuPage;
}());

//# sourceMappingURL=ourmenu.js.map

/***/ })

});
//# sourceMappingURL=25.js.map