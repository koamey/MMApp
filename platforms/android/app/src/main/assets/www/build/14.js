webpackJsonp([14],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAreaPageModule", function() { return SelectAreaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_area__ = __webpack_require__(948);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectAreaPageModule = (function () {
    function SelectAreaPageModule() {
    }
    SelectAreaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_area__["a" /* SelectAreaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_area__["a" /* SelectAreaPage */]),
            ],
        })
    ], SelectAreaPageModule);
    return SelectAreaPageModule;
}());

//# sourceMappingURL=select-area.module.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_push_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_service__ = __webpack_require__(21);
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
 * Generated class for the SelectAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectAreaPage = (function () {
    function SelectAreaPage(navCtrl, apiService, nav, builder, util, push, storage, translate, viewctrl, platform, alertCtrl, modalCtrl, ionicApp) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.translate = translate;
        this.viewctrl = viewctrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.ionicApp = ionicApp;
        this.areaArray = [];
        this.areaArrayfilter = [];
        var fields = {
            area: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            pincode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            id: ['']
        };
        this.selectareaform = this.builder.group(fields);
        this.initializeBackButtonCustomHandler();
    }
    SelectAreaPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    SelectAreaPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    SelectAreaPage.prototype.onSelectChange = function (selectedValue) {
        this.labelFlag = '1';
    };
    SelectAreaPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('areacode')) {
            this.nav.setRoot('ModulePage');
        }
        this.loadzipcode();
    };
    SelectAreaPage.prototype.loadzipcode = function () {
        var _this = this;
        this.Active = false;
        this.displayarea = '';
        if (localStorage.getItem('area-pincode') != null) {
            this.displayarea = localStorage.getItem('area-pincode');
        }
        this.displayid = '';
        this.displaypincode = '';
        this.apiService.showselectarea().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.areaArray = response.data;
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
    SelectAreaPage.prototype.displayareacode = function () {
        this.checklength = localStorage.getItem('area-pincode');
        if (this.checklength == null || this.checklength == 0) {
            this.util.alert(this.translate.instant('Please Select Area'), '');
            return;
        }
        if (this.areaid == 0 || this.areaid == null) {
            if (this.checklength.length < 6) {
                this.util.alert(this.translate.instant('Please Select Area'), '');
                return;
            }
        }
        localStorage.setItem('areacode', this.areaid);
        this.util.showLoader();
        this.nav.setRoot('ModulePage');
        this.util.hideLoader();
    };
    SelectAreaPage.prototype.ionViewDidLoad = function () {
    };
    SelectAreaPage.prototype.onclickarea = function () {
        var _this = this;
        var cust_css;
        cust_css = 'select-modal-rtms';
        this.modelstatus = true;
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('AreaEditPage', {
            customise_data: true
        }, { cssClass: cust_css });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            _this.modelstatus = false;
            _this.displayarea = data.displayarea;
            if (_this.displayarea == '' || _this.displayarea == null) {
                if (localStorage.getItem('area-pincode') != null) {
                    _this.displayarea = localStorage.getItem('area-pincode');
                }
            }
        });
    };
    SelectAreaPage.prototype.Back = function () {
        if (localStorage.getItem('area-pincode') != null) {
            this.displayarea = localStorage.getItem('area-pincode');
        }
        if (this.modelstatus) {
            this.model.dismiss();
        }
        else {
            localStorage.removeItem('onboardshows');
            this.nav.setRoot('OnboardingPage');
        }
    };
    SelectAreaPage.prototype.showConfirmAlert = function () {
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
                                        _this.navCtrl.setRoot('SelectAreaPage');
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
    SelectAreaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-area',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/select-area/select-area.html"*/'<div class="welcome-area">\n  <ion-grid style="padding:0;    height: 100%;">\n    <ion-row>\n      <ion-col col-12 class="select-area">\n        <h3>Select Area</h3>\n        <p>Hey folks! Please select your preferred\n          location from below. We will be expanding soon! </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="text-center">\n        <img src="assets/SelectArea_ic.svg" class="location">\n      </ion-col>\n    </ion-row>\n\n  \n    <div class="selectAreaform">\n      <ion-row>\n        <ion-col class="text-center">\n           <label *ngIf="labelFlag==\'1\'" id="cars" class="form-control" style="float: left; color: #898C8E;font-weight:bold;">PIN CODE</label>\n          <ion-list>\n            <ion-item>\n               <ion-input style="border-bottom: solid 0.1vh rgb(244,164,37); font-family: Montserrat-SemiBold; font-size: 2.098vh;" class="select-full-width" value=\'{{displayarea}}\'  type="text" (click)="onclickarea()" placeholder="PIN CODE" [readonly]="true"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n     \n    </div>\n    \n  \n  </ion-grid>\n  <ion-footer className="ion-no-border">\n    <ion-toolbar>\n      <ion-row style="">\n        <ion-col>\n          <div class="text-center">\n            <button ion-button block class="start-button"\n              type="submit"  (click)="displayareacode()">\n              Proceed\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n      </ion-footer>\n</div>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/select-area/select-area.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]])
    ], SelectAreaPage);
    return SelectAreaPage;
}());

//# sourceMappingURL=select-area.js.map

/***/ })

});
//# sourceMappingURL=14.js.map