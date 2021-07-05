webpackJsonp([37],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(919);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaqPageModule = (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
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
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = (function () {
    function FaqPage(navCtrl, navParams, apiService, nav, builder, util, push, storage, translate, viewctrl, platform, atrCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.translate = translate;
        this.viewctrl = viewctrl;
        this.platform = platform;
        this.atrCtrl = atrCtrl;
        this.sanitizer = sanitizer;
        this.faqArray = [];
        this.shownGroup = null;
        this.faqscreen = '';
        this.screenis = '';
        this.isClicked = false;
        this.faqscreen = navParams.get('screenis');
        this.screenis = navParams.get('selecscreenis');
        var backAction = platform.registerBackButtonAction(function () {
            _this.Back();
            backAction();
        }, 2);
    }
    FaqPage.prototype.ionViewDidLoad = function () {
    };
    FaqPage.prototype.Back = function () {
        if (this.faqscreen == "FAQScreen") {
            var faq = "FAQScreen";
            this.nav.setRoot('AccountPage', {
                screenis: faq
            });
        }
        else if (this.screenis == "firstpage") {
            var firstpage = "firstpage";
            this.nav.setRoot('OnboardingPage', {
                screenis: firstpage
            });
        }
        else if (this.screenis == "secondpage") {
            var secondpage = "secondpage";
            this.nav.setRoot('OnboardingPage', {
                screenis: secondpage
            });
        }
        else if (this.screenis == "thirdpage") {
            var thirdpage = "thirdpage";
            this.nav.setRoot('OnboardingPage', {
                screenis: thirdpage
            });
        }
    };
    FaqPage.prototype.ngOnInit = function () {
        this.loadfaq();
    };
    FaqPage.prototype.loadfaq = function () {
        var _this = this;
        this.apiService.showsFAQ().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.faqArray = response.data;
                for (var i = 0; i < _this.faqArray.length; i++) {
                    _this.faqArray[i].questions = _this.sanitizer.bypassSecurityTrustHtml(_this.faqArray[i].questions);
                    _this.faqArray[i].answer = _this.sanitizer.bypassSecurityTrustHtml(_this.faqArray[i].answer);
                }
            }
            else {
                _this.conmessage = response.message;
                if (localStorage.getItem('custstatus') == 'new') {
                    _this.showConfirmAlert1();
                }
                else if (localStorage.getItem('custstatus') == 'registered') {
                    _this.showConfirmAlert1();
                }
                else {
                    _this.showConfirmAlert();
                }
            }
        }, function (response) {
            _this.conmessage = "Something's wrong, let's try again?";
            if (localStorage.getItem('custstatus') == 'new') {
                _this.showConfirmAlert1();
            }
            else if (localStorage.getItem('custstatus') == 'registered') {
                _this.showConfirmAlert1();
            }
            else {
                _this.showConfirmAlert();
            }
        });
    };
    FaqPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    FaqPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    FaqPage.prototype.showConfirmAlert = function () {
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
                                        _this.nav.setRoot('OnboardingPage');
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
    FaqPage.prototype.showConfirmAlert1 = function () {
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
                                        _this.nav.setRoot('MenuPage');
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
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/faq/faq.html"*/'<ion-header no-border class="dit-type-header faqHead">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="Back()">\n        <img src="assets/imgicon/Group_51.svg" class="backWhiteIcon">\n      </button>\n    </ion-buttons>\n    <ion-title text-center>HELP</ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-faq">\n  <div class="faq-content">\n    <h1>FAQ</h1>\n    <h2>Frequently Asked Question</h2>    \n    <div class="row faqstart">\n      <div class="" style="width: 100%; float: left;">\n        <ion-list>\n          <ion-item *ngFor="let a of faqArray; let i = index;" text-wrap (click)="toggleGroup(i)"\n            [ngClass]="{active: isGroupShown(i)}">\n            <h3>\n              <label class="myfistclass" data-toggle="collapse" [innerHTML]="a.questions"></label>\n              <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'" style="display: none !important;">\n              </ion-icon>\n            </h3>\n            <div *ngIf="isGroupShown(i)"><label class="mysecondclass" [innerHTML]="a.answer"></label></div>\n          </ion-item>\n        </ion-list>    \n      </div>\n\n      <!-- <div class="col-12 static-text">\n        <ion-list>\n          <ion-item  text-wrap>\n            <label class="mysecondclass3"> You can contact us directly via the phone numbers mentioned on our site. You can also WhatsApp us for any query or suggestion.</label>\n          </ion-item>\n        </ion-list>  \n      </div>   -->\n      \n    </div>\n    <!-- <div style="width: 100%;">\n      <div class="row">\n        <div class="col">\n          <button ion-button type="submit" class="faq-button" id="input_submit" block>VISIT WEBSITE</button>\n        </div>\n        <div class="col">\n          <button ion-button type="submit" class="faq-button" id="input_submit" block>WHATSAPP</button>\n        </div>\n      </div>\n    </div> -->\n  </div>\n</ion-content>\n\n <!-- <ion-item>\n            <label>You can contact us directly via the phone numbers mentioned on our site. You can also WhatsApp us for any query or suggestion.</label>\n          </ion-item> -->'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ })

});
//# sourceMappingURL=37.js.map