webpackJsonp([27],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_ecurrency_module__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
                __WEBPACK_IMPORTED_MODULE_4__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(94);
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
 * Cart page component
 */
var CartPage = (function () {
    function CartPage(cart, navCtrl, apiService) {
        var _this = this;
        this.cart = cart;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.loggedIn = false;
        this.items = cart.getItems();
        cart.itemsCount$.subscribe(function (v) {
            _this.items == cart.getItems();
        });
        this.loggedIn = this.apiService.isLoggedIn();
    }
    CartPage.prototype.ionViewWillEnter = function () {
        this.items = this.cart.getItems();
    };
    CartPage.prototype.increaseCart = function (item) {
        this.cart.setItemCount(item.product, item.count + 1);
    };
    CartPage.prototype.decreaseCart = function (item) {
        if (item.count == 1) {
            this.cart.removeItem(item);
        }
        else {
            this.cart.setItemCount(item.product, item.count - 1);
        }
    };
    CartPage.prototype.showOrderModal = function () {
        this.navCtrl.setRoot('OrderPage');
    };
    CartPage.prototype.cartPrice = function () {
        var result = 0;
        this.items.forEach(function (item) {
            result = result + item.product.price * item.count;
        });
        return result;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/cart/cart.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle *ngIf="loggedIn">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{ \'cart.title\' | translate }}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="products-content">\n    <div *ngIf="items.length == 0" class="text-center">\n        <br>\n        <br>\n        <br>\n        {{ \'cart.empty\' | translate }}\n    </div>\n    <div class="product" *ngFor="let item of items">\n        <div *ngIf="item.product.images.length > 0" class="product-images">\n            <img [src]="item.product.images[0]">\n        </div>\n        <div padding class="product-info">\n            <h2>{{ item.product.name }}</h2>\n            <p class="product-descr">{{ item.product.description }}</p>\n            <div class="product-price">\n                <span *ngIf="item.product.price_old && (item.product.price_old > 0)"><s>{{ item.product.price_old }}</s></span>\n                <span>{{ item.product.price  | ecurrency }} x {{item.count }} = {{ item.product.price * item.count | ecurrency }}</span>\n            </div>\n            <ion-row no-padding>\n                <ion-col>\n                    <button ion-button block outline color="light" icon-left (click)="decreaseCart(item)">\n                        -\n                    </button>\n                </ion-col>\n                <ion-col class="text-center product-count">\n                    {{ item.count }}\n                </ion-col>\n                <ion-col>\n                    <button ion-button block outline color="light" icon-left (click)="increaseCart(item)">\n                        +\n                    </button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n</ion-content>\n<ion-footer [hidden]="items.length == 0">\n    <div class="cart-total">{{ \'cart.total\' | translate }}: {{ cartPrice() | ecurrency }}</div>\n    <button type="button" ion-button block (click)="showOrderModal()" class="place-order-button">\n        {{ \'cart.order\' | translate }}\n    </button>\n</ion-footer>'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=27.js.map