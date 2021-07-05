webpackJsonp([12],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartdatePageModule", function() { return StartdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startdate__ = __webpack_require__(949);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartdatePageModule = (function () {
    function StartdatePageModule() {
    }
    StartdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__startdate__["a" /* StartdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__startdate__["a" /* StartdatePage */]),
            ],
        })
    ], StartdatePageModule);
    return StartdatePageModule;
}());

//# sourceMappingURL=startdate.module.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartdatePage; });
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








/**
 * Generated class for the StartdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartdatePage = (function () {
    function StartdatePage(navCtrl, navParams, util, translate, apiService, builder, push, storage, platform, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.translate = translate;
        this.apiService = apiService;
        this.builder = builder;
        this.push = push;
        this.storage = storage;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.today = new Date();
        this.minDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 3).toISOString().valueOf();
        this.coundays = 1;
        this.selecteddateis = navParams.get('selectdateis');
        var backAction = platform.registerBackButtonAction(function () {
            //localStorage.removeItem('subscription_id')
            //this.navCtrl.pop();
            _this.Back();
            backAction();
        }, 2);
    }
    StartdatePage.prototype.ionViewDidLoad = function () {
    };
    StartdatePage.prototype.ngOnInit = function () {
        this.Active = false;
        //  this.disableSubmitButton = true;
        this.conbut = "#d4d3d1";
        this.dtcolor = "rgb(153,153,153)";
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
        this.selecteddate = localStorage.getItem('StartDate');
        console.log(this.selecteddate);
        this.days = parseInt(localStorage.getItem('mealdays'));
        this.total = this.days - this.coundays;
        var curr = new Date(this.selecteddate); // get current date
        var first = curr.getDate(); // First day is the day of the month - the day of the week
        var last = first + parseInt(this.total); // last day is the first day + 6
        this.firstDay = new Date(curr.setDate(first)).toISOString(),
            this.lastDay = new Date(curr.setDate(last)).toISOString();
        localStorage.setItem('endDate', this.lastDay);
        if (this.selecteddate != null) {
            this.days = parseInt(localStorage.getItem('mealdays'));
            this.Active = true;
            this.conbut = "rgb(242, 155, 17)";
            this.coloropacity = 'datetime-text coloropacity';
        }
        else {
            this.coloropacity = 'datetime-text coloropacity1';
        }
        if (localStorage.getItem('statdatescreen') != null) {
            this.navCtrl.setRoot('ChoosedeliverytimePage');
        }
    };
    StartdatePage.prototype.continueclick = function () {
        this.completedate = localStorage.getItem('endDate');
        if (this.selecteddate == '' || this.selecteddate == null) {
            this.util.alert(this.translate.instant('Please Select Date'), '');
            return;
        }
        else {
            // this.util.showLoader();
            localStorage.setItem('statdatescreen', 'yes');
            if (this.selecteddateis != null) {
                this.navCtrl.setRoot('CheckoutPage');
                return;
            }
            else {
                this.navCtrl.setRoot('ChoosedeliverytimePage');
            }
            // let data = JSON.parse(JSON.stringify(this.selecteddate, this.id, this.token));
            // this.apiService.selectstartdate(this.selecteddate, this.id, this.token, this.completedate).then(res => {
            //   this.util.hideLoader();
            //   if (res.success) {
            //     this.push.init(this.apiService.getSettings().pushwoosh_id);
            //     this.storage.set('welcomeShown', '1').then(() => { }, () => { });
            //   }
            //   else {
            //     this.util.alert(res.errors, '');
            //   }
            // }, (data) => {
            //   this.util.alert(this.translate.instant('Network error: API stopped working'), '');
            //   this.util.hideLoader();
            // });
            // this.navCtrl.setRoot('ChoosedeliverytimePage');
        }
    };
    StartdatePage.prototype.selectdate = function () {
        this.coloropacity = 'datetime-text coloropacity';
        this.disableSubmitButton = false;
        this.Active = true;
        this.dtcolor = 'rgb(49, 74, 93)';
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
        //this.completedate=((this.lastDay).substring(0,10))
        // console.log(this.completedate)
    };
    StartdatePage.prototype.Back = function () {
        localStorage.removeItem('selectprefrence');
        //this.viewCtrl.dismiss();
        this.navCtrl.setRoot('ChoosePreferencePage', {});
    };
    StartdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-startdate',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/startdate/startdate.html"*/'<ion-header no-border class="dit-type-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <div class="screen-heading">\n    <span>Choose Your</span>\n    <h2> Start Date</h2>\n  </div>\n\n  <div class="content-area">\n    <div class="startdate">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 class="text-center">\n            <ion-item>\n              <ion-datetime  [style.opacity]="opacity" [class]="coloropacity"\n                style="margin-top: 24.287vh;text-align: center; padding-left: 7.646vh;padding-right: 7.646vh;" displayFormat="DD-MMMM-YYYY" [min]="minDate"\n                [(ngModel)]="selecteddate" (ngModelChange)="selectdate()">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <div style="text-align: center; font-size: 1.90vh; line-height: 2.8vh; bottom: 9vh; width: 100%; color: rgb(153, 153, 153);"  *ngIf="Active">\n          Subscription or Trial will only start after <br> <b style="color: red; font-family: Montserrat-SemiBold;">48 hours</b> from the payment date.<br> Your Subscription will expire after <br>\n              <b style="color: red; font-family: Montserrat-SemiBold;"> {{days}} days </b> from the start date\n            </div>\n          </ion-col>\n          <ion-col style="position: absolute; width: 100%; bottom: 0; padding:2.923vh; border-radius: 0.899vh; ">\n            <div class="text-center">\n              <button style="font-size: 2.398vh;" [style.color]="subcolor" ion-button type="submit" id="input_submit" block (click)="continueclick()"\n                [style.background]="conbut">\n                Continue\n              </button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/startdate/startdate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], StartdatePage);
    return StartdatePage;
}());

//# sourceMappingURL=startdate.js.map

/***/ })

});
//# sourceMappingURL=12.js.map