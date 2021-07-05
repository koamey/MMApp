webpackJsonp([21],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
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





//import { TabsPage } from "../../tabs/tabs";



/**
 * Signup page component
 */
var SignupPage = (function () {
    function SignupPage(apiService, nav, builder, util, push, storage, translate) {
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.translate = translate;
        this.multipleCities = false;
        this.cities = [];
        this.active = true;
        var fields = {
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            contactNumber: [''],
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email]],
            //password: [''],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            home_address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            work_address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            subscription_type: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            plan_start_date: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            plan_end_date: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        };
        this.multipleCities = (this.apiService.getSettings().multiple_cities == 1);
        if (this.multipleCities) {
            fields['city_id'] = [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required];
            this.cities = this.apiService.getCities();
        }
        this.loginForm = this.builder.group(fields);
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        this.util.showLoader();
        var data = JSON.parse(JSON.stringify(this.loginForm.value));
        this.apiService.signup(data).then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.nav.setRoot('SelectAreaPage');
            }
            else {
                _this.util.alert(response.errors, '');
            }
        }, function (data) {
            _this.util.hideLoader();
            _this.util.alert(_this.translate.instant('signup.error'), '');
        });
    };
    SignupPage.prototype.login = function () {
        this.nav.setRoot('SelectAreaPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/personal/signup/signup.html"*/'<ion-content class="signup-page">\n	<div padding class="wrap">\n		<div class="icon">\n			<img src="assets/icon.png" alt="">\n		</div>\n		<form (ngSubmit)="doSignup()" *ngIf="active" novalidate [formGroup]="loginForm" class="signup-form">\n			<ion-item>\n				<ion-input placeholder="{{ \'signup.name\' | translate }}" type="text" [formControl]="loginForm.controls.name">\n				</ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-input placeholder="{{ \'signup.lastname\' | translate }}" type="text" [formControl]="loginForm.controls.lastname">\n				</ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-input placeholder="{{ \'signup.contactNumber\' | translate }}" type="text" [formControl]="loginForm.controls.contactNumber">\n				</ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-input placeholder="{{ \'signup.email\' | translate }}" type="text" [formControl]="loginForm.controls.email">\n				</ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-textarea placeholder="{{ \'signup.home_address\' | translate }}" type="text" [formControl]="loginForm.controls.home_address"></ion-textarea>\n			</ion-item>\n			<ion-item>\n				<ion-textarea placeholder="{{ \'signup.work_address\' | translate }}" type="text" [formControl]="loginForm.controls.work_address"></ion-textarea>\n			</ion-item>\n			<ion-item>\n				<ion-select placeholder="{{ \'signup.subscription_type\' | translate }}" [formControl]="loginForm.controls.subscription_type">\n					<ion-option value="DemoMeal">Demo Meal</ion-option>\n					<ion-option value="SubscriptionMeal">Subscription Meal</ion-option>\n				</ion-select>\n			</ion-item>\n			<ion-item>\n				<ion-datetime displayFormat="DD/MMM/YYYY" [formControl]="loginForm.controls.plan_start_date"  placeholder="{{ \'signup.plan_start_date\' | translate }}" [min]="minDate"></ion-datetime>\n			</ion-item>\n			<ion-item>\n				<ion-datetime displayFormat="DD/MMM/YYYY" [formControl]="loginForm.controls.plan_end_date" placeholder="{{ \'signup.plan_end_date\' | translate }}"></ion-datetime>\n			</ion-item>\n			<!-- <ion-item *ngIf="multipleCities">\n				<ion-select placeholder="{{ \'signup.city\' | translate }}" [formControl]="loginForm.controls.city_id">\n					<ion-option *ngFor="let city of cities" value="{{ city.id }}">{{ city.name }}</ion-option>\n				</ion-select>\n			</ion-item> -->\n			<!-- <ion-item class="iconed-input">\n				<ion-input placeholder="{{ \'signup.password\' | translate }}" type="password" [formControl]="loginForm.controls.password">\n				</ion-input>\n			</ion-item> -->\n			<button ion-button type="submit" block color="primary" [disabled]="loginForm.invalid">\n				{{ \'signup.button\' | translate }}\n			</button>\n			<div class="login-links">\n				<a (click)="login()">{{ \'signup.login\' | translate }}</a>\n			</div>\n		</form>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/personal/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=21.js.map