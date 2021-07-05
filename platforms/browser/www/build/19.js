webpackJsonp([19],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceEditPageModule", function() { return PreferenceEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preference_edit__ = __webpack_require__(943);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreferenceEditPageModule = (function () {
    function PreferenceEditPageModule() {
    }
    PreferenceEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preference_edit__["a" /* PreferenceEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preference_edit__["a" /* PreferenceEditPage */]),
            ],
        })
    ], PreferenceEditPageModule);
    return PreferenceEditPageModule;
}());

//# sourceMappingURL=preference-edit.module.js.map

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferenceEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(21);
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
 * Generated class for the PreferenceEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferenceEditPage = (function () {
    function PreferenceEditPage(nav, navParams, builder, apiService, modalCtrl, viewCtrl, platform, app) {
        this.nav = nav;
        this.navParams = navParams;
        this.builder = builder;
        this.apiService = apiService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.app = app;
        this.data = [];
        this.disablePlusButton = false;
        this.disablePlusButton1 = false;
        this.disableMinusButton1 = false;
        this.disableMinusButton = false;
        this.rdDefaultRice = false;
        this.rdDefaultRice1 = false;
        var fields = {
            radio1: [''],
            radio2: [''],
            radio3: [''],
            radio4: ['']
        };
        this.preferenceEditForm = this.builder.group(fields);
        // let backAction = platform.registerBackButtonAction(() => {
        //   this.viewCtrl.dismiss();
        //   backAction();
        // }, 2)
    }
    PreferenceEditPage.prototype.ngOnInit = function () {
        this.ricelabelcolor = '#000000';
        this.mealType = this.navParams.get('type');
        this.onLoadDisplayrData();
        if (this.customise_data) {
            if (this.customise_data.ricechek == false) {
                this.chkRemoveRice = false;
                this.rdDefaultRice = true;
                this.rdDefaultRice1 = false;
            }
            else {
                this.chkRemoveRice = true;
            }
        }
        else {
            this.chkRemoveRice = true;
        }
    };
    PreferenceEditPage.prototype.onLoadDisplayrData = function () {
        this.passingData = this.navParams.get('myValue');
        this.customise_data = this.navParams.get('customise_data');
        if (this.mealType == "Lunch Meal") {
            this.preferenceString = localStorage.getItem('preferenceProducts');
        }
        else if (this.mealType == "Dinner Meal") {
            this.preferenceString = localStorage.getItem('preferenceProductsDinner');
        }
        for (var i = 0; i < this.passingData.length; i++) {
            if (this.mealType == this.passingData[i].meal) {
                for (var j = 0; j < this.passingData[i]['products'].length; j++) {
                    this.passingData[i]['products'][j]['product'];
                    if ("Bread" == this.passingData[i]['products'][j]['category']) {
                        this.data.push(this.passingData[i]['products'][j]);
                    }
                    if ("Rice" == this.passingData[i]['products'][j]['category']) {
                        this.data.push(this.passingData[i]['products'][j]);
                    }
                } //end of j
            } //end of if      
        } //end of i
        for (var k = 0; k < this.data.length; k++) {
            if (k == 0) {
                if (this.customise_data) {
                    if (this.customise_data.product1 == this.data[k].product_id) {
                        this.rdDefaultRoti = true;
                        this.displayquantityChoice = parseFloat(this.data[k].quantity) + parseFloat(this.customise_data.quantity);
                        this.selected = 'choice1';
                        this.disablePlusButton = true;
                        this.disableMinusButton = true;
                        this.buttonColorplus = '#5C829D';
                        this.buttonColor1 = '#D1D1D1';
                        this.disableMinusButton1 = false;
                        this.buttonColorplus1 = '#D1D1D1';
                        this.disablePlusButton1 = false;
                        if (this.displayquantityChoice == this.data[k].quantity) {
                            this.buttonColor = '#D1D1D1';
                        }
                        else {
                            this.buttonColor = '#5C829D';
                        }
                        localStorage.setItem('choice_Bread', this.selected);
                        this.choiceset1 = localStorage.getItem('choice_Bread');
                        if (this.displayquantityChoice == this.data[k].max_quantity) {
                            this.buttonColorplus = '#D1D1D1';
                        }
                        // if (this.displayquantityChoice != this.myNumber) {
                        //   this.displayquantityChoice = this.myNumber;
                        //   this.buttonColor = '#D1D1D1';
                        // }
                    }
                    else {
                        this.displayquantityChoice = this.data[k].quantity;
                    }
                }
                else {
                    this.rdDefaultRoti = true;
                    this.selected = 'choice1';
                    localStorage.setItem('choice_Bread', this.selected);
                    this.choiceset1 = localStorage.getItem('choice_Bread');
                    this.displayquantityChoice = this.data[k].quantity;
                    this.disableMinusButton = true;
                    this.buttonColor = '#D1D1D1';
                    this.buttonColorplus = '#5C829D';
                    this.disablePlusButton = true;
                }
                this.currentprod_qty = this.data[k].quantity;
                this.myNumber = this.data[k].quantity;
                localStorage.setItem('category', this.data[k]['category']);
                this.category = localStorage.getItem('category');
                this.product_id = this.data[k].product_id;
                this.displayProductChoice = this.data[k].product;
                this.displayPrizeChoice = this.data[k].price;
                this.maxQuantity = this.data[k].max_quantity;
                localStorage.setItem('defaultprice', this.displayPrizeChoice);
            }
            if (k == 1) {
                localStorage.setItem('category', this.data[k]['category']);
                this.category = localStorage.getItem('category');
                this.product_id1 = this.data[k].product_id;
                this.displayProductChoice1 = this.data[k].product;
                if (this.customise_data) {
                    if (this.customise_data.product1 == this.data[k].product_id) {
                        this.rdDefaultRoti1 = true;
                        this.displayquantityChoice1 = parseFloat(this.data[k].quantity) + parseFloat(this.customise_data.quantity);
                        this.selected = 'choice2';
                        this.disablePlusButton1 = true;
                        this.disableMinusButton1 = true;
                        if (this.displayquantityChoice1 == this.data[k].quantity) {
                            this.buttonColor1 = '#D1D1D1';
                        }
                        else {
                            this.buttonColor1 = '#5C829D';
                        }
                        this.buttonColorplus1 = '#5C829D';
                        this.buttonColor = '#D1D1D1';
                        this.disableMinusButton = false;
                        this.buttonColorplus = '#D1D1D1';
                        this.disablePlusButton = false;
                        localStorage.setItem('choice_Bread', this.selected);
                        this.choiceset1 = localStorage.getItem('choice_Bread');
                        if (this.displayquantityChoice1 == this.data[k].max_quantity) {
                            this.buttonColorplus1 = '#D1D1D1';
                        }
                        // if (this.displayquantityChoice1 != this.myNumber1) {
                        //   this.displayquantityChoice1 = this.myNumber1;
                        //   this.buttonColor1 = '#D1D1D1';
                        // }
                    }
                    else {
                        this.displayquantityChoice1 = this.data[k].quantity;
                    }
                }
                else {
                    this.displayquantityChoice1 = this.data[k].quantity;
                    this.buttonColor1 = '#D1D1D1';
                    this.disableMinusButton1 = false;
                    this.buttonColorplus1 = '#D1D1D1';
                    this.disablePlusButton1 = false;
                }
                this.currentprod1_qty = this.data[k].quantity;
                this.myNumber1 = this.data[k].quantity;
                this.displayPrizeChoice1 = this.data[k].price;
                this.maxQuantity1 = this.data[k].max_quantity;
            }
            if (k == 2) {
                if (this.customise_data) {
                    if (this.customise_data.product2 == this.data[k].product_id) {
                        this.rdDefaultRice = true;
                        this.rdDefaultRice1 = false;
                        this.selected1 = 'rice1';
                    }
                    else if (this.customise_data.product2 == null) {
                        this.rdDefaultRice = true;
                        this.rdDefaultRice1 = false;
                        this.selected1 = 'rice1';
                        localStorage.setItem('choice_Rice', this.selected1);
                        this.choiceset2 = localStorage.getItem('choice_Rice');
                    }
                }
                else {
                    this.rdDefaultRice = true;
                    this.rdDefaultRice1 = false;
                    this.selected1 = 'rice1';
                    localStorage.setItem('choice_Rice', this.selected1);
                    this.choiceset2 = localStorage.getItem('choice_Rice');
                }
                localStorage.setItem('category1', this.data[k]['category']);
                this.category1 = localStorage.getItem('category1');
                this.product_id2 = this.data[k].product_id;
                this.displayProductChoice2 = this.data[k].product;
                this.displayquantityChoice2 = this.data[k].quantity;
                this.currentprod2_qty = this.data[k].quantity;
            }
            if (k == 3) {
                if (this.customise_data) {
                    if (this.customise_data.product2 == this.data[k].product_id) {
                        this.rdDefaultRice1 = true;
                        this.rdDefaultRice = false;
                        this.selected1 = 'rice2';
                        localStorage.setItem('choice_Rice', this.selected1);
                        this.choiceset2 = localStorage.getItem('choice_Rice');
                    }
                    else if (this.customise_data.product2 == null) {
                        this.rdDefaultRice1 = true;
                        this.rdDefaultRice = false;
                        this.selected1 = 'rice1';
                        localStorage.setItem('choice_Rice', this.selected1);
                        this.choiceset2 = localStorage.getItem('choice_Rice');
                    }
                }
                localStorage.setItem('category1', this.data[k]['category']);
                this.category1 = localStorage.getItem('category1');
                this.product_id3 = this.data[k].product_id;
                this.displayProductChoice3 = this.data[k].product;
                this.displayquantityChoice3 = this.data[k].quantity;
                this.currentprod3_qty = this.data[k].quantity;
            }
        }
    };
    PreferenceEditPage.prototype.ionViewDidLoad = function () {
    };
    PreferenceEditPage.prototype.removeRice = function () {
        if (this.chkRemoveRice) {
            localStorage.setItem('choice_Rice', this.selected1);
            this.ricelabelcolor = '#000000';
            if (this.choiceset1 == 'choice1') {
                if (this.displayquantityChoice != this.myNumber) {
                    this.displayquantityChoice -= 1;
                    if (this.displayquantityChoice != this.myNumber) {
                        this.buttonColorplus = '#5C829D';
                    }
                }
                if (this.displayquantityChoice == this.myNumber) {
                    this.buttonColor = '#D1D1D1'; //disable color
                }
                else {
                }
            }
            else if (this.choiceset1 == 'choice2') {
                if (this.displayquantityChoice1 != this.myNumber1) {
                    this.displayquantityChoice1 -= 1;
                    if (this.displayquantityChoice1 != this.myNumber1) {
                        this.buttonColorplus1 = '#5C829D';
                    }
                }
                if (this.displayquantityChoice1 == this.myNumber1) {
                    this.buttonColor1 = '#D1D1D1'; //disable color
                }
            }
        }
        else {
            localStorage.removeItem('choice_Rice');
            this.ricelabelcolor = '#D1D1D1';
            if (this.choiceset1 == 'choice1') {
                if (this.displayquantityChoice == this.maxQuantity) {
                    this.buttonColorplus = '#D1D1D1';
                }
                else {
                    this.displayquantityChoice += 1;
                    this.buttonColor = '#5C829D';
                    if (this.displayquantityChoice == this.maxQuantity) {
                        this.buttonColorplus = '#D1D1D1';
                    }
                }
            }
            else if (this.choiceset1 == 'choice2') {
                if (this.displayquantityChoice1 == this.maxQuantity1) {
                    this.buttonColorplus1 = '#D1D1D1';
                }
                else {
                    this.displayquantityChoice1 += 1;
                    this.buttonColor1 = '#5C829D';
                    if (this.displayquantityChoice1 == this.maxQuantity1) {
                        this.buttonColorplus1 = '#D1D1D1';
                    }
                }
            }
        }
    };
    PreferenceEditPage.prototype.radioGroupChange = function (event) {
        if (event == 'choice1') {
            this.rdDefaultRoti1 = false;
            this.rdDefaultRoti = true;
            this.disablePlusButton = true;
            this.disablePlusButton1 = false;
            this.disableMinusButton1 = false;
            this.disableMinusButton = true;
            this.selected = event;
            this.buttonColorplus = '#5C829D';
            this.buttonColorplus1 = '#D1D1D1';
            localStorage.setItem('choice_Bread', this.selected);
            this.choiceset1 = localStorage.getItem('choice_Bread');
            if (this.chkRemoveRice == false) {
                this.displayquantityChoice += 1;
                this.buttonColor = '#5C829D';
            }
            if (this.displayquantityChoice1 != this.myNumber1) {
                this.displayquantityChoice1 = this.myNumber1;
                this.buttonColor1 = '#D1D1D1';
            }
        }
        if (event == 'choice2') {
            this.rdDefaultRoti1 = true;
            this.rdDefaultRoti = false;
            this.disableMinusButton1 = true;
            this.disableMinusButton = false;
            this.disablePlusButton1 = true;
            this.disablePlusButton = false;
            this.selected = event;
            this.buttonColorplus1 = '#5C829D';
            this.buttonColorplus = '#D1D1D1';
            localStorage.setItem('choice_Bread', this.selected);
            this.choiceset1 = localStorage.getItem('choice_Bread');
            if (this.chkRemoveRice == false) {
                this.displayquantityChoice1 += 1;
                this.buttonColor1 = '#5C829D';
            }
            if (this.displayquantityChoice != this.myNumber) {
                this.displayquantityChoice = this.myNumber;
                this.buttonColor = '#D1D1D1';
            }
        }
    };
    PreferenceEditPage.prototype.radioGroupChange1 = function (event) {
        if (event == 'rice1') {
            this.rdDefaultRice = true;
            this.rdDefaultRice1 = false;
            this.selected1 = event;
            localStorage.setItem('choice_Rice', this.selected1);
            this.choiceset2 = localStorage.getItem('choice_Rice');
        }
        if (event == 'rice2') {
            this.rdDefaultRice = false;
            this.rdDefaultRice1 = true;
            this.selected1 = event;
            localStorage.setItem('choice_Rice', this.selected1);
            this.choiceset2 = localStorage.getItem('choice_Rice');
        }
    };
    PreferenceEditPage.prototype.ricelabelclick = function (type) {
        if (this.chkRemoveRice) {
            if (type == 0) {
                this.rdDefaultRice = true;
                this.rdDefaultRice1 = false;
                this.selected1 = event;
                localStorage.setItem('choice_Rice', this.selected1);
                this.choiceset2 = localStorage.getItem('choice_Rice');
            }
            else if (type == 1) {
                this.rdDefaultRice1 = true;
                this.rdDefaultRice = false;
                this.selected1 = event;
                localStorage.setItem('choice_Rice', this.selected1);
                this.choiceset2 = localStorage.getItem('choice_Rice');
            }
        }
    };
    //-----------// 
    PreferenceEditPage.prototype.onclickaddChapati = function () {
        this.displayquantityChoice += 1;
        this.disableMinusButton = true;
        this.buttonColor = '#5C829D';
        if (this.displayquantityChoice == this.maxQuantity) {
            this.buttonColorplus = '#D1D1D1';
        }
    };
    PreferenceEditPage.prototype.onclickMinusChapati = function () {
        this.displayquantityChoice -= 1;
        this.buttonColorplus = '#5C829D';
        if (this.displayquantityChoice == this.myNumber) {
            this.buttonColor = '#D1D1D1'; //disable color
        }
    };
    // --------------//
    PreferenceEditPage.prototype.onclickaddPhulka = function () {
        this.displayquantityChoice1 += 1;
        this.disableMinusButton1 = true;
        this.buttonColor1 = '#5C829D'; //navy blue color
        if (this.displayquantityChoice1 == this.maxQuantity1) {
            this.buttonColorplus1 = '#D1D1D1';
        }
    };
    PreferenceEditPage.prototype.onclickMinusPhulka = function () {
        this.displayquantityChoice1 -= 1;
        this.buttonColorplus1 = '#5C829D';
        if (this.displayquantityChoice1 == this.myNumber1) {
            this.buttonColor1 = '#D1D1D1';
        }
    };
    PreferenceEditPage.prototype.onSubmit = function () {
        if (localStorage.getItem('choice_Bread') == 'choice1') {
            this.selected_roti_product = this.product_id;
            this.quantity = parseFloat(this.displayquantityChoice) - parseFloat(this.currentprod_qty);
        }
        else if (localStorage.getItem('choice_Bread') == 'choice2') {
            this.selected_roti_product = this.product_id1;
            this.quantity = parseFloat(this.displayquantityChoice1) - parseFloat(this.currentprod1_qty);
        }
        if (localStorage.getItem('choice_Rice') == 'rice1') {
            this.selected_rice_product = this.product_id2;
            this.quantity1 = '1';
        }
        else if (localStorage.getItem('choice_Rice') == 'rice2') {
            this.selected_rice_product = this.product_id3;
            this.quantity1 = '1';
        }
        localStorage.setItem('defaultquantity', this.quantity);
        this.viewCtrl.dismiss({
            ricechek: this.chkRemoveRice,
            product1: this.selected_roti_product,
            quantity: this.quantity,
            product2: this.selected_rice_product,
            quantity1: this.quantity1
        });
    };
    PreferenceEditPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PreferenceEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-preference-edit',template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/preference-edit/preference-edit.html"*/'<ion-content class="main-edit-preference">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="text-left" defualt>\n        <div class="heading-title-box">\n          <h6>{{mealType}}</h6>\n          <p>{{preferenceString}}</p>\n        </div>\n      </ion-col>\n      <ion-col col-12 class="text-left" defualt>\n        <div class="heading-note">\n          <p><sup style="color: red; font-size: 1.4vh; top:0em !important;">*</sup> Addition of bread/rice can be done\n            only once per subscription and cannot be reverted till expiry.</p>\n        </div>\n      </ion-col>\n      <ion-col>\n        <form [formGroup]="preferenceEditForm" class="update-menu">\n          <ion-grid>\n            <div class="cust-meal-type-color">\n              <ion-row>\n                <ion-col col-12 class="text-left">\n                  <div>\n                    <h5>Choice of {{category}}</h5>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-list radio-group >\n              <ion-row style="margin-top: 1.994vh;">\n                <ion-col col-7 style="vertical-align: middle;">\n                  <ion-radio [checked]="rdDefaultRoti" class="radio" type="radio" mode="md" value="choice1"\n                      style="vertical-align: middle;" (click)="radioGroupChange(\'choice1\')">\n                    </ion-radio>\n                  <label\n                    class=\'meal-pref-label\' (click)="radioGroupChange(\'choice1\')">{{displayProductChoice}}<span>&#x20B9;{{displayPrizeChoice}}</span></label>\n                </ion-col>\n                <ion-col col-5 text-right>\n                  <button defualt class="meal-sel-button" [style.background]="buttonColor"\n                    [disabled]="displayquantityChoice==myNumber || disableMinusButton==false"\n                    (click)="onclickMinusChapati()"> - </button>\n                  <label style="margin-left: 1.799vh;width: 2.248vh;font-size:3.733vw;font-family:Montserrat-SemiBold;">{{displayquantityChoice}}</label>\n                  <button defualt class="meal-sel-button"\n                    [disabled]="disablePlusButton==false || maxQuantity==displayquantityChoice"\n                    [style.background]="buttonColorplus" (click)="onclickaddChapati()"> + </button>\n                </ion-col>\n              </ion-row>\n\n              <ion-row style="margin-top: 1.994vh;">\n                <ion-col col-7 style="vertical-align: middle;">\n                  <ion-radio [checked]="rdDefaultRoti1" class="radio" type="radio" mode="md" value="choice2"\n                      style="vertical-align: middle;" (click)="radioGroupChange(\'choice2\')">\n                    </ion-radio>\n                  <label class=\'meal-pref-label\' (click)="radioGroupChange(\'choice2\')">{{displayProductChoice1}}\n                    <span>&#x20B9;{{displayPrizeChoice1}}</span></label>\n                </ion-col>\n\n                <ion-col col-5 text-right>\n                  <button defualt class="meal-sel-button" [style.background]="buttonColor1"\n                    [disabled]="displayquantityChoice1==myNumber1 || disableMinusButton1==false "\n                    (click)="onclickMinusPhulka()"> - </button>\n                  <label style="margin-left: 1.799vh;width: 2.248vh;font-size:3.733vw;font-family: Montserrat-SemiBold;">{{displayquantityChoice1}}</label>\n                  <button defualt class="meal-sel-button"\n                    [disabled]="disablePlusButton1==false || maxQuantity1==displayquantityChoice1"\n                    [style.background]="buttonColorplus1" (click)="onclickaddPhulka()"> + </button>\n                </ion-col>\n              </ion-row>\n              </ion-list>\n            </div>\n            <div>\n              <ion-row>\n                <ion-col col-6 text-left style="vertical-align: middle; margin:auto;">\n                    <label class="heading">Choice of {{category1}}</label>\n                </ion-col>\n                <ion-col col-6 text-right>\n                  <ion-checkbox [checked]="chkRemoveRice" [(ngModel)]="chkRemoveRice"  [ngModelOptions]="{standalone: true}" (ionChange)="removeRice()" style="vertical-align: middle;" ></ion-checkbox>\n                </ion-col>\n              </ion-row>              \n              <ion-list radio-group  class="cust-meal-type-color">\n                <ion-row style="margin-top: 1.994vh;">\n                  <ion-col col-7 style="vertical-align: middle;">\n                      <ion-radio [checked]="rdDefaultRice" [disabled]="!chkRemoveRice" type="radio" mode="md" value="rice1" style="vertical-align: middle;" (click)="radioGroupChange1(\'rice1\')"></ion-radio>\n                      <label [style.color]="ricelabelcolor" class=\'meal-pref-label\' *ngIf="chkRemoveRice==true"  (click)="radioGroupChange1(\'rice1\')" >{{displayProductChoice2}}</label> \n                      <label style="color:rgb(209, 209, 209);" class=\'meal-pref-label\' *ngIf="chkRemoveRice==false">{{displayProductChoice2}}</label>                    \n                  </ion-col>\n                </ion-row>\n                <ion-row style="margin-top: 1.994vh;">\n                  <ion-col col-7 style="vertical-align: middle;">\n                    <ion-radio [checked]="rdDefaultRice1" [disabled]="!chkRemoveRice"  type="radio" mode="md" value="rice2" style="vertical-align: middle;" (click)="radioGroupChange1(\'rice2\')"></ion-radio>\n                    <label  [style.color]="ricelabelcolor" class=\'meal-pref-label\'  *ngIf="chkRemoveRice==true" (click)="radioGroupChange1(\'rice2\')" >{{displayProductChoice3}}</label>\n                    <label  style="color:rgb(209, 209, 209);" class=\'meal-pref-label\' *ngIf="chkRemoveRice==false">{{displayProductChoice3}}</label>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </div>\n          </ion-grid>\n        </form>\n      </ion-col>\n      \n    </ion-row>\n \n  </ion-grid>\n</ion-content>\n\n<ion-footer className="ion-no-border" class="footer-common">\n  <ion-toolbar>\n    <ion-col col-12 style="position: absolute; width: 100%; bottom: 0; padding:0 2.923vh; ">        \n      <div>\n        <button ion-button type="submit" id="input_submit" block (click)="onSubmit()" style="margin: 0;">\n          Update Cart\n        </button>\n      </div>\n    </ion-col>\n    </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/preference-edit/preference-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], PreferenceEditPage);
    return PreferenceEditPage;
}());

//# sourceMappingURL=preference-edit.js.map

/***/ })

});
//# sourceMappingURL=19.js.map