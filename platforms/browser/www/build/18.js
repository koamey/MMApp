webpackJsonp([18],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionEditPageModule", function() { return ProfessionEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profession_edit__ = __webpack_require__(944);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfessionEditPageModule = (function () {
    function ProfessionEditPageModule() {
    }
    ProfessionEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profession_edit__["a" /* ProfessionEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profession_edit__["a" /* ProfessionEditPage */]),
            ],
        })
    ], ProfessionEditPageModule);
    return ProfessionEditPageModule;
}());

//# sourceMappingURL=profession-edit.module.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_service__ = __webpack_require__(35);
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
 * Generated class for the ProfessionEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfessionEditPage = (function () {
    function ProfessionEditPage(nav, navParams, builder, apiService, modalCtrl, util, push, translate, storage, atrCtrl, platform, viewCtrl) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.builder = builder;
        this.apiService = apiService;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.push = push;
        this.translate = translate;
        this.storage = storage;
        this.atrCtrl = atrCtrl;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.profArray = [];
        this.profArrays = [];
        var backAction = platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss({});
        }, 2);
    }
    ProfessionEditPage.prototype.ngOnInit = function () {
        this.onLoadDisplayrData();
        this.customise_data = this.navParams.get('customise_data');
        this.Fieldactive = this.navParams.get('customise_data');
        console.log(localStorage.getItem('profname'));
        this.loadzipcode();
        if (localStorage.getItem('profname') != null) {
            if (localStorage.getItem('profname') == null || localStorage.getItem('profname') == 'null') {
                localStorage.setItem('profname', '');
                this.displayarea = localStorage.getItem('profname');
            }
            else {
                this.displayarea = localStorage.getItem('profname');
            }
        }
        else if (localStorage.getItem('profname') == '') {
            console.log('in1');
            this.displayarea = localStorage.getItem('profname');
        }
        else if (localStorage.getItem('profname') != 'null') {
            if (localStorage.getItem('profname') == null || localStorage.getItem('profname') == 'null') {
                localStorage.setItem('profname', '');
                this.displayarea = localStorage.getItem('profname');
            }
            else {
                this.displayarea = localStorage.getItem('profname');
            }
        }
        else {
            localStorage.setItem('profname', '');
            this.displayarea = localStorage.getItem('profname');
        }
    };
    ProfessionEditPage.prototype.onLoadDisplayrData = function () {
        this.customise_data = this.navParams.get('customise_data');
    };
    ProfessionEditPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AreaEditPage');
        // this.util.hideLoader();
        //  setTimeout(() => {
        //   this.myInput.setFocus();
        // }, 800);
    };
    ProfessionEditPage.prototype.loadzipcode = function () {
        var _this = this;
        this.apiService.showprofession().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.profArray = response.data;
                if (_this.Fieldactive == true) {
                    _this.profArrays = [];
                    var j = 0;
                    for (var i = 0; i < _this.profArray.length; i++) {
                        _this.Active = true;
                        if (_this.profArray[i].profession != '') {
                            _this.profArrays[j] = _this.profArray[i].profession;
                            j++;
                        }
                    }
                }
            }
            else {
                _this.conmessage = response.message;
            }
        }, function (response) {
            _this.util.alert(_this.translate.instant("Something's wrong, let's try again?"), '');
            _this.util.hideLoader();
            _this.viewCtrl.dismiss({
                displayprofid: '',
                displayprof: '',
            });
        });
    };
    ProfessionEditPage.prototype.selectprofesssion = function ($a) {
        this.areaid = $a;
        this.convertprof = this.areaid.toLowerCase();
        this.profArrays = [];
        var j = 0;
        for (var i = 0; i < this.profArray.length; i++) {
            this.datavaluesid = this.profArray[i].profession.toLowerCase();
            this.checkarea = this.datavaluesid.includes(this.convertprof);
            if (this.checkarea == true) {
                this.Active = true;
                if (this.profArray[i].profession != '') {
                    this.profArrays[j] = this.profArray[i].profession;
                    j++;
                }
            }
        }
    };
    ProfessionEditPage.prototype.setselectarea = function ($event, a) {
        this.areaid = $event;
        console.log(this.areaid);
        this.Active = false;
        for (var i = 0; i < this.profArray.length; i++) {
            if (this.areaid == this.profArray[i].profession) {
                localStorage.setItem('proflid', this.profArray[i].id);
                localStorage.setItem('profname', this.profArray[i].profession);
            }
        }
        this.viewCtrl.dismiss({
            displayprofid: localStorage.getItem('proflid'),
            displayprof: localStorage.getItem('profname'),
        });
    };
    ProfessionEditPage.prototype.closemodel = function () {
        this.viewCtrl.dismiss({
            displayprofid: localStorage.getItem('proflid'),
            displayprof: localStorage.getItem('profname'),
        });
    };
    ProfessionEditPage.prototype.showConfirmAlert = function () {
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
                                        _this.nav.setRoot('AboutyouPage');
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
    ProfessionEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profession-edit',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/profession-edit/profession-edit.html"*/'<ion-content class="main-edit-preference areamodel">\n  <ion-grid>\n    <div class="heading-title-box">\n      <ion-row>\n        <ion-col col-9 class="text-left" defualt>\n            <h6>Profession</h6>\n        </ion-col>\n        <ion-col col-3 style="margin-top: 0.6vh;text-align: right;">\n          <img src="assets/signs.png" style="width: 2.99vh;border-radius: 50%;margin-top: 0.6vh;" (click)="closemodel()">\n        </ion-col>\n      </ion-row>\n   </div>\n\n      <ion-row style="width: 100%;">\n      <ion-col *ngIf="Fieldactive">\n          <!-- <ion-list>\n            <ion-item>\n               <ion-input style="font-weight:bold ; " class="select-full-width" type="text" value=\'{{displayarea}}\' (input)="selectprofesssion($event.target.value)" placeholder="Profession"></ion-input>\n            </ion-item>\n          </ion-list>\n        -->\n      </ion-col>\n    </ion-row>\n    <ion-row style="width: 100%;" class="model-area-margin">\n        <ion-col class="text-center" *ngIf="Active">\n          <ion-list>\n             <ion-item>\n              <div style=" width: 100%;max-height: 30vh;;overflow-y: scroll;">\n              <p style="font-size: 1.4rem;padding-top: 1vh;overflow: hidden;" *ngFor="let a of profArrays" (click)="setselectarea(a)">{{a}}</p>\n            </div>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n   \n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/profession-edit/profession-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ProfessionEditPage);
    return ProfessionEditPage;
}());

//# sourceMappingURL=profession-edit.js.map

/***/ })

});
//# sourceMappingURL=18.js.map