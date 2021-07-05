webpackJsonp([46],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoriesPageModule = (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({ declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());

//# sourceMappingURL=categories.module.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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
 * Categories list page component
 */
var CategoriesPage = (function () {
    function CategoriesPage(nav, apiService, params) {
        this.nav = nav;
        this.apiService = apiService;
        this.params = params;
        this.loggedIn = false;
        this.layout = 0;
        this.layout = this.apiService.getSettings().categories_layout;
        this.categories = this.getCategories();
        this.sectionId = params.get('id');
        this.restaurantId = params.get('restaurant_id');
        this.rootCategory = params.get('root');
        this.loggedIn = this.apiService.isLoggedIn();
    }
    CategoriesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.apiService.reloadCategories(this.restaurantId).then(function () {
            _this.categories = _this.getCategories();
        });
    };
    CategoriesPage.prototype.getCategories = function () {
        var _this = this;
        var result = [];
        this.apiService.getCategories().forEach(function (c) {
            if (c.parent_id == _this.sectionId) {
                result.push(c);
            }
        });
        return result;
    };
    CategoriesPage.prototype.showDetails = function (category) {
        if (category.has_children > 0) {
            this.nav.setRoot('CategoriesPage', { id: category.id, root: category });
        }
        else {
            this.nav.setRoot('ProductsPage', { category: category });
        }
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/catalog/categories/categories.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle *ngIf="loggedIn">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span *ngIf="rootCategory">{{ rootCategory.name }}</span>\n            <span *ngIf="!rootCategory">{{ \'catalog.title\' | translate }}</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="layout == 0">\n    <div *ngFor="let category of categories; let i = index;" (click)="showDetails(category)" tappable class="category-item" [ngStyle]="{\'background-image\': \'url(\' + category.image_url + \')\'}">\n      <div class="title">{{ category.name }}</div>\n    </div>\n  </div>\n  <div *ngIf="layout == 1">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 *ngFor="let category of categories; let i = index;">\n          <div (click)="showDetails(category)" tappable class="category-item" [ngStyle]="{\'background-image\': \'url(\' + category.image_url + \')\'}">\n            <div class="title">{{ category.name }}</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/catalog/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ })

});
//# sourceMappingURL=46.js.map