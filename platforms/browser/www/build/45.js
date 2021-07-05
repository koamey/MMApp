webpackJsonp([45],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPageModule", function() { return RestaurantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurants__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RestaurantsPageModule = (function () {
    function RestaurantsPageModule() {
    }
    RestaurantsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restaurants__["a" /* RestaurantsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurants__["a" /* RestaurantsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], RestaurantsPageModule);
    return RestaurantsPageModule;
}());

//# sourceMappingURL=restaurants.module.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
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
 * Restaurants list page component
 */
var RestaurantsPage = (function () {
    function RestaurantsPage(nav, apiService) {
        this.nav = nav;
        this.apiService = apiService;
        this.loggedIn = false;
        this.items = this.apiService.getRestaurants();
        this.loggedIn = this.apiService.isLoggedIn();
    }
    RestaurantsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.apiService.reloadRestaurants(this.apiService.getUserData().city_id).then(function () {
            _this.items = _this.apiService.getRestaurants();
        });
    };
    RestaurantsPage.prototype.showDetails = function (restaurant) {
        this.nav.setRoot('CategoriesPage', { restaurant_id: restaurant.id });
    };
    RestaurantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/catalog/restaurants/restaurants.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle *ngIf="loggedIn">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span *ngIf="rootCategory">{{ rootCategory.name }}</span>\n            <span *ngIf="!rootCategory">{{ \'restaurants.title\' | translate }}</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor="let item of items; let i = index;" (click)="showDetails(item)" tappable>\n        <img [src]="item.image_url">\n        <ion-card-content>\n            <ion-card-title>{{ item.name }}</ion-card-title>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/catalog/restaurants/restaurants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */]])
    ], RestaurantsPage);
    return RestaurantsPage;
}());

//# sourceMappingURL=restaurants.js.map

/***/ })

});
//# sourceMappingURL=45.js.map