webpackJsonp([48],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutyouPageModule", function() { return AboutyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutyou__ = __webpack_require__(905);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutyouPageModule = (function () {
    function AboutyouPageModule() {
    }
    AboutyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutyou__["a" /* AboutyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutyou__["a" /* AboutyouPage */]),
            ],
        })
    ], AboutyouPageModule);
    return AboutyouPageModule;
}());

//# sourceMappingURL=aboutyou.module.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_push_service__ = __webpack_require__(36);
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
 * Generated class for the AboutyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutyouPage = (function () {
    function AboutyouPage(apiService, nav, builder, util, push, storage, translate, navParams, platform, ionicApp, modalCtrl, atrCtrl, keyboard) {
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.translate = translate;
        this.navParams = navParams;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.modalCtrl = modalCtrl;
        this.atrCtrl = atrCtrl;
        this.keyboard = keyboard;
        this.profArray = [];
        this.active = true;
        var fields = {
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            prof: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        };
        this.aboutForm = this.builder.group(fields);
        this.initializeBackButtonCustomHandler();
    }
    AboutyouPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    AboutyouPage.prototype.customHandleBackButton = function () {
        var overlayView = this.ionicApp._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // it will close the modals, alerts
        }
        else {
            this.Back();
        }
    };
    AboutyouPage.prototype.ionViewDidLoad = function () {
    };
    AboutyouPage.prototype.ngOnInit = function () {
        localStorage.setItem('areacode', 'undefined');
        localStorage.setItem('thisdataid', '');
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
        this.mobnum = localStorage.getItem('num');
        this.fname = localStorage.getItem('firstname');
        this.lname = localStorage.getItem('lastname');
        this.Emailid = localStorage.getItem('Emailid');
        this.profid = localStorage.getItem('proflid');
        this.profname = localStorage.getItem('profname');
        this.loadprofession();
    };
    AboutyouPage.prototype.doSignup = function () {
        var _this = this;
        this.util.showLoader();
        var data = JSON.parse(JSON.stringify(this.aboutForm.value));
        this.fname = data.name;
        this.lname = data.lastname;
        this.Emailid = data.email;
        this.profid = localStorage.getItem('proflid'); //data.prof;
        if (data.name == '' || data.name == null) {
            this.util.hideLoader();
            this.util.alert("Please enter first name", '');
            return;
        }
        var regex = /^[a-zA-Z ]*$/;
        if (!regex.test(data.name)) {
            this.util.hideLoader();
            this.util.alert("Please enter only alphabet in first name field", '');
            return;
        }
        if (data.lastname == '' || data.lastname == null) {
            this.util.hideLoader();
            this.util.alert("Please enter last name", '');
            return;
        }
        if (!regex.test(data.lastname)) {
            this.util.hideLoader();
            this.util.alert("Please enter only alphabet in last name field", '');
            return;
        }
        if (data.email == '' || data.email == null) {
            this.util.hideLoader();
            this.util.alert("Please enter email id", '');
            return;
        }
        var patrn = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!patrn.test(data.email)) {
            this.util.hideLoader();
            this.util.alert("Please enter correct email id", '');
            return;
        }
        if (data.prof == 0 || data.prof == null) {
            this.util.hideLoader();
            this.util.alert("Please select profession", '');
            return;
        }
        this.apiService.aboutyou(this.id, this.fname, this.Emailid, this.lname, this.mobnum, this.token, this.profid).then(function (res) {
            _this.util.hideLoader();
            if (res.success) {
                console.log('innnn4444');
                localStorage.setItem('firstname', _this.fname);
                localStorage.setItem('lastname', _this.lname);
                localStorage.setItem('Emailid', _this.Emailid);
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                localStorage.setItem('ShowAbout', '0');
                localStorage.setItem('email', _this.Emailid);
                localStorage.setItem('customer_name', _this.fname + ' ' + _this.lname);
                if (localStorage.getItem('skipdisable') == '1') {
                    if (localStorage.getItem('subscription_id') != null) {
                        if (localStorage.getItem('mealType') != null) {
                            if (localStorage.getItem('lunch_products') != null || localStorage.getItem('dinner_products') != null) {
                                if (localStorage.getItem('statdatescreen') != null) {
                                    if (localStorage.getItem('selectlunchtime') != null || localStorage.getItem('selectdinnertime') != null) {
                                        if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
                                            if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
                                                if (localStorage.getItem('payment_id') != null) {
                                                    _this.nav.setRoot('DashboardPage');
                                                }
                                                else {
                                                    _this.nav.setRoot('CheckoutPage');
                                                }
                                            }
                                            _this.nav.setRoot('ChoosedeliveryaddressPage');
                                        }
                                        else {
                                            _this.nav.setRoot('WhereToDeliverePage');
                                        }
                                    }
                                    else {
                                        _this.nav.setRoot('ChoosedeliverytimePage');
                                    }
                                }
                                else {
                                    _this.nav.setRoot('StartdatePage');
                                }
                            }
                            else {
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
                    localStorage.setItem('CustomerName', _this.fname);
                }
                else {
                    _this.nav.setRoot('ChooseplanPage');
                }
            }
            else {
                //this.util.alert(res.data, '');
                console.log('innnn');
                _this.conmessage = res.message;
                _this.showConfirmAlert();
            }
        }, function (data) {
            console.log('innnn222');
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    AboutyouPage.prototype.Back = function () {
        // console.log('The keyboard is open:', this.keyboard.isOpen());
        // if(this.keyboard.isOpen()==true){
        // 	var element = document.getElementById("myDIV");
        // 	if(element)
        // 	{
        // 		element.classList.add("mystyle");
        // 	}
        // }
        // else{
        console.log('The keyboard is open:', this.keyboard.isOpen());
        var element = document.getElementById("myDIV");
        if (element) {
            element.classList.remove("mystyle");
        }
        //}	
        if (this.modelstatus == true) {
            this.model.dismiss();
        }
        else {
            localStorage.removeItem('custstatus');
            localStorage.removeItem('isLogin');
            localStorage.removeItem('ShowOTP');
            localStorage.removeItem('profname');
            localStorage.removeItem('proflid');
            this.nav.setRoot('LoginPage');
        }
    };
    AboutyouPage.prototype.loadprofession = function () {
        var _this = this;
        this.apiService.showprofession().then(function (response) {
            _this.util.hideLoader();
            if (response.success) {
                _this.push.init(_this.apiService.getSettings().pushwoosh_id);
                _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
                _this.profArray = response.data;
                _this.profid = localStorage.getItem('proflid');
                for (var i = 0; i < _this.profArray.length; i++) {
                    if (_this.profid == _this.profArray[i].id) {
                        _this.profname = _this.profArray[i].profession;
                        localStorage.setItem('profname', _this.profname);
                        localStorage.setItem('proflid', _this.profid);
                    }
                }
            }
            else {
                console.log('iiiiii888999');
                _this.conmessage = response.message;
                _this.showConfirmAlert();
            }
        }, function (data) {
            console.log('iiiiii888');
            _this.conmessage = "Something's wrong, let's try again?";
            _this.showConfirmAlert();
        });
    };
    AboutyouPage.prototype.selectprof = function () {
        var _this = this;
        if (this.profArray.length == 0) {
            console.log('iiiiii');
            this.showConfirmAlert();
        }
        var cust_css;
        cust_css = 'select-modal-rtmsprof';
        this.modelstatus = true;
        // code of opening area-edit page in model
        this.model = this.modalCtrl.create('ProfessionEditPage', {
            customise_data: true
        }, { cssClass: cust_css });
        this.model.present();
        this.model.onDidDismiss(function (data) {
            var element = document.getElementById("myDIV");
            if (element) {
                element.classList.remove("mystyle");
            }
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
    AboutyouPage.prototype.showConfirmAlert = function () {
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
    AboutyouPage.prototype.classadded = function () {
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
    AboutyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aboutyou',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/aboutyou/aboutyou.html"*/'\n\n<ion-header no-border class="dit-type-header otp-headeer" (click)="classadded()">\n	<ion-navbar>\n	  <ion-buttons left>\n		<button ion-button icon-only (click)="Back()">\n		  <img src="assets/imgicon/Group 51.svg" class="backIcon" >\n    </button>\n	  </ion-buttons>\n	</ion-navbar>\n  </ion-header>\n\n\n<ion-content class="about-content" id="myDIV" (click)="classadded()">\n  <div class="aboutyou">\n    <ion-grid style="padding: 0;">\n      <!-- <ion-row>\n        <ion-col class="text-left">\n          <div class="back-icon">\n            <img src="assets/imgicon/Group 51.svg" class="backIcon" (click)="Back()">\n          </div>\n        </ion-col>\n      </ion-row> -->\n      <ion-row >\n        <ion-col class="text-left">\n          <div class="about-headings">\n            <h1>About You</h1>\n            <p>Please help us get to know you better </p>\n          </div>\n        </ion-col>\n      </ion-row >\n      <ion-row > \n        <ion-col class="text-left">\n          <div class="user_info">\n              <h3>BASIC INFO</h3>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <form *ngIf="active" novalidate [formGroup]="aboutForm" style="margin-top: 1.4992503748125936vh;">\n        <ion-row>\n        \n            <ion-item style="margin-bottom:2vh">\n              <ion-label class="user_field" style="margin-bottom: 0.9295352323838081vh;" floating>FIRST NAME</ion-label>\n              <ion-input type="text" [formControl]="aboutForm.controls.name" maxlength="20" [(ngModel)]="fname" ></ion-input>\n            </ion-item>\n            <ion-item style="margin-bottom:2vh">\n              <ion-label class="user_field" style="margin-bottom: 0.9295352323838081vh;" floating>LAST NAME</ion-label>\n              <ion-input type="text" [formControl]="aboutForm.controls.lastname" maxlength="20" [(ngModel)]="lname"></ion-input>\n            </ion-item>\n            <ion-item style="margin-bottom:2vh">\n              <ion-label class="user_field" style="margin-bottom: 0.9295352323838081vh;" floating>EMAIL ADDRESS</ion-label>\n              <ion-input type="email" name="email"\n                pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"\n                [formControl]="aboutForm.controls.email" [(ngModel)]="Emailid"></ion-input>\n            </ion-item>\n            <ion-item class="Aboutyoudropdown" style="margin-bottom:0">\n              <ion-label floating class="user_field" style="margin-bottom: 0.9295352323838081vh;">PROFESSION</ion-label>\n              <!-- <ion-select id="cars" name="cars" interface="popover" class="work-input" style="border-bottom: solid 0.1vh rgb(244,164,37); " class="" (ionChange)="selectprof($event)" [(ngModel)]="profid"  [formControl]="aboutForm.controls.prof">\n                <ion-option *ngFor="let p of profArray" value="{{p.id}}">\n                  {{p.profession}}\n                </ion-option>\n              </ion-select> -->\n              <ion-input style="font-family: Montserrat-SemiBold; font-size: 2.098vh;" class="select-full-width" value=\'{{profname}}\'  type="text"  (keyup)="selectprof()" (keydown)="selectprof()" (click)="selectprof()"  [formControl]="aboutForm.controls.prof" [readonly]="true"></ion-input>\n            </ion-item>\n      \n        </ion-row>\n\n       \n      </form>\n    </ion-grid>\n\n    <ion-footer  className="ion-no-border" class="common-footer" style="background: #fff;" >\n      <ion-toolbar>\n    <ion-row class="bottomButton">\n      <ion-col style="padding: 0 5.333vw; width: 100%; float: left;" >\n          <button ion-button type="submit" class="" id="input_submit" block (click)="doSignup()" style="width: 100%; float: left; color: #fff; font-size: 4.266666666666667vw;">\n            Submit\n          </button>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n    </ion-footer>\n  </div>\n</ion-content>\n\n<!-- <ion-footer className="ion-no-border" class="common-footer" style="background: #fff;" (click)="removedclass()">\n	<ion-toolbar>\n<ion-row class="bottomButton">\n  <ion-col style="padding: 0 5.333vw;" >\n      <button ion-button type="submit" class="aboutButton" id="input_submit" block (click)="doSignup()">\n        Submit\n      </button>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/aboutyou/aboutyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_7__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */]])
    ], AboutyouPage);
    return AboutyouPage;
}());

//# sourceMappingURL=aboutyou.js.map

/***/ })

});
//# sourceMappingURL=48.js.map