webpackJsonp([30],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePageModule", function() { return ModulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module__ = __webpack_require__(926);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModulePageModule = (function () {
    function ModulePageModule() {
    }
    ModulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__module__["a" /* ModulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__module__["a" /* ModulePage */]),
            ],
        })
    ], ModulePageModule);
    return ModulePageModule;
}());

//# sourceMappingURL=module.module.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulePage; });
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
 * Generated class for the ModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModulePage = (function () {
    function ModulePage(navCtrl, navParams, platform, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.initializeBackButtonCustomHandler();
    }
    ModulePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    ModulePage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    ModulePage.prototype.ngOnInit = function () {
        if (localStorage.getItem('module')) {
            this.navCtrl.setRoot('LoginPage');
        }
    };
    ModulePage.prototype.individual = function () {
        localStorage.setItem('module', '1');
        this.navCtrl.setRoot('LoginPage');
    };
    ModulePage.prototype.corporate = function () {
        localStorage.setItem('module', '2');
        this.navCtrl.setRoot('LoginPage');
    };
    ModulePage.prototype.ionViewDidLoad = function () {
    };
    ModulePage.prototype.onclickTermCondition = function () {
        var ommoduleterm = "ommoduleterm";
        this.navCtrl.setRoot('TermsAndPrivacyPage', {
            screenis: ommoduleterm
        });
    };
    ModulePage.prototype.Back = function () {
        localStorage.removeItem('areacode');
        this.navCtrl.setRoot('SelectAreaPage');
    };
    ModulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-module',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/module/module.html"*/'<ion-content class="module-main">\n    <div class="module-screen">\n        <div class="module-logo">\n        <ion-grid>\n            <ion-row>\n                <ion-col class="text-center">\n                    <img class="" src="assets/logo.svg" class="main-logo">\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        </div>\n        <ion-grid>\n            <ion-row>\n                <div class="module-content">\n                    <h2>Choose Your Module</h2>\n                    <p class="module-text">Please select what kind of user\n                        you are\n                    </p>\n                    <div class="module-area">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col style="">\n                                    <div class="individual" (click)="individual()">\n                                        <div class="ind_user_img">\n                                            <img class="" src="assets/imgicon/user (1).svg" style="width:2.39vh; height: 2.69vh;">\n                                        </div>\n        \n                                        <div class="ind_user">\n                                            Individual User\n                                        </div>\n                                        <div class="ind_icon">\n                                            <ion-icon name="ios-arrow-forward"></ion-icon>\n                                        </div>\n                                    </div>\n                                    <!-- (click)="corporate()" -->\n                                    <div class="corporate" >\n                                        <div class="cor_user_img">\n                                            <img class="" src="assets/imgicon/Group_4.svg" style="width:4.79vh; height: 2.39vh;">\n                                        </div>\n                                        <div class="cor_user">\n                                            Corporate User\n                                        </div>\n                                        <div class="cor_icon">\n                                            <ion-icon name="ios-arrow-forward"></ion-icon>\n                                        </div>\n                                    </div>\n        \n                                    <div class="donate">\n                                        <div class="don_user_img">\n                                            <img class="" src="assets/imgicon/heart (1).svg" style="width:2.84vh; height: 2.54vh;">\n                                        </div>\n                                        <div class="don_user">\n                                            Donate Food\n                                        </div>\n                                        <div class="don_icon">\n                                            <ion-icon name="ios-arrow-forward"></ion-icon>\n                                        </div>\n                                    </div>\n                                    \n                                </ion-col>\n                            </ion-row>\n                           \n                        </ion-grid>\n                    </div>\n                    <ion-footer className="ion-no-border" class="main-module-footer">\n                        <ion-toolbar>\n                    <div class="module-area module-footer">\n                        <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <p class="term-condition">By continuing you\n                                agree to our <a href="javascript:void(0);" (click)="onclickTermCondition()"\n                                    style="color: #fff; text-decoration: none ;">Terms</a> & <a\n                                    href="javascript:void(0);" (click)="onclickTermCondition()"\n                                    style="color: #fff;text-decoration: none">Privacy Policy</a></p>\n\n                        </ion-col>\n                    </ion-row>\n                    </ion-grid>\n                    </div>\n                    </ion-toolbar>\n                    </ion-footer>\n\n                </div>\n            </ion-row>\n        </ion-grid>\n\n        \n    </div>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/module/module.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], ModulePage);
    return ModulePage;
}());

//# sourceMappingURL=module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map