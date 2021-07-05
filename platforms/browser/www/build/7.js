webpackJsonp([7],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_ecurrency_module__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { PayPal } from '@ionic-native/paypal';

var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
                __WEBPACK_IMPORTED_MODULE_5__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */],
            ]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stripe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Stripe
 * @description
 * A plugin that allows you to use Stripe's Native SDKs for Android and iOS.
 *
 * @usage
 * ```typescript
 * import { Stripe } from '@ionic-native/stripe';
 *
 * constructor(private stripe: Stripe) { }
 *
 * ...
 *
 * this.stripe.setPublishableKey('my_publishable_key');
 *
 * let card = {
 *  number: '4242424242424242',
 *  expMonth: 12,
 *  expYear: 2020,
 *  cvc: '220'
 * };
 *
 * this.stripe.createCardToken(card)
 *    .then(token => console.log(token.id))
 *    .catch(error => console.error(error));
 *
 * ```
 *
 * @interfaces
 * StripeCardTokenParams
 */
var Stripe = (function (_super) {
    __extends(Stripe, _super);
    function Stripe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set publishable key
     * @param publishableKey {string} Publishable key
     * @return {Promise<void>}
     */
    Stripe.prototype.setPublishableKey = function (publishableKey) { return; };
    /**
     * Create Credit Card Token
     * @param params {StripeCardTokenParams} Credit card information
     * @return {Promise<StripeCardTokenRes>} returns a promise that resolves with the token object, or rejects with an error
     */
    Stripe.prototype.createCardToken = function (params) { return; };
    /**
     * Create a bank account token
     * @param params {StripeBankAccountParams} Bank account information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    Stripe.prototype.createBankAccountToken = function (params) { return; };
    /**
     * Validates a credit card number
     * @param cardNumber {string} Credit card number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCardNumber = function (cardNumber) { return; };
    /**
     * Validates a CVC number
     * @param cvc {string} CVC number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCVC = function (cvc) { return; };
    /**
     * Validates an expiry date
     * @param expMonth {string} expiry month
     * @param expYear {string} expiry year
     * @return {Promise<any>} returns a promise that resolves if the date is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateExpiryDate = function (expMonth, expYear) { return; };
    /**
     * Get a card type from card number
     * @param cardNumber {string} Card number
     * @return {Promise<string>} returns a promise that resolves with the credit card type
     */
    Stripe.prototype.getCardType = function (cardNumber) { return; };
    Stripe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Stripe.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "setPublishableKey", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "createCardToken", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "createBankAccountToken", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "validateCardNumber", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "validateCVC", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "validateExpiryDate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "getCardType", null);
    Stripe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Stripe',
            plugin: 'cordova-plugin-stripe',
            pluginRef: 'cordova.plugins.stripe',
            repo: 'https://github.com/zyramedia/cordova-plugin-stripe',
            platforms: ['Android', 'Browser', 'iOS']
        })
    ], Stripe);
    return Stripe;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_history_service__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_stripe__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_util_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import {PayPal, PayPalPayment, PayPalConfiguration} from '@ionic-native/paypal';


/**
 * Make an order page component
 */
var OrderPage = (function () {
    function OrderPage(cart, apiService, builder, alertCtrl, viewCtrl, modalCtrl, loadingCtrl, historyService, stripe, 
        //private payPal: PayPal,
        util, translate) {
        this.cart = cart;
        this.apiService = apiService;
        this.builder = builder;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.historyService = historyService;
        this.stripe = stripe;
        this.util = util;
        this.translate = translate;
        this.cTotalPrice = 0;
        this.cTaxPrice = 0;
        this.cPriceWithTax = 0;
        this.cFullPrice = 0;
        this.cLoyaltyUsed = 0;
        this.userData = {};
        this.userData = this.apiService.getUserData();
        this.stripe.setPublishableKey(this.apiService.getSettings().stripe_publishable);
        this.deliveryPrice = 0;
        this.orderData = {
            products: cart.getItems()
        };
        this.orderForm = this.builder.group({
            name: ["" + this.userData.name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            phone: ["" + this.userData.phone, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            promo_code: [''],
            loyalty: [0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].max(this.userData.loyalty_reward)],
            payment_method: ['cash'],
            comment: ''
        });
        this.formReady = true;
        this.discountPrice = null;
    }
    OrderPage.prototype.showAddressWindow = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AddressMap');
        modal.onDidDismiss(function (data) {
            if (data && data.address) {
                _this.orderForm.controls['address'].setValue(data.address);
                _this.orderData.lat = data.lat;
                _this.orderData.lng = data.lng;
                _this.deliveryPrice = data.service_area.price;
                _this.orderData.delivery_area_id = data.service_area.id;
                _this.calculatePrices();
            }
        });
        modal.present();
    };
    OrderPage.prototype.calculatePrices = function () {
        this.cFullPrice = this.getFullPrice();
        this.discountPrice = this.cFullPrice;
        this.cTotalPrice = this.cartPrice();
        this.cTaxPrice = this.cartTax();
        this.cPriceWithTax = this.cartWithTax();
    };
    OrderPage.prototype.ionViewWillEnter = function () {
        this.validatePromo(true);
        this.calculatePrices();
    };
    OrderPage.prototype.validatePromo = function (supressAlert) {
        var _this = this;
        if (!this.orderForm.value.promo_code || (this.orderForm.value.promo_code == '')) {
            return;
        }
        var data = {
            code: this.orderForm.value.promo_code,
            products: this.cart.getItems()
        };
        this.apiService.validateDiscount(data).subscribe(function (data) {
            if (!data.success) {
                _this.discountPrice = null;
                if (!supressAlert) {
                    var msg = _this.translate.instant('order.promo_not_found');
                    if (data.code == 400) {
                        msg = _this.translate.instant('order.promo_invalid');
                    }
                    _this.util.alert(msg, _this.translate.instant('order.error_title'));
                }
            }
            else {
                if (!supressAlert) {
                    _this.util.alert(_this.translate.instant('order.promo_applied'), _this.translate.instant('order.success'));
                }
                _this.discountPrice = data.new_price;
                _this.cPriceWithTax = data.new_price_tax;
                _this.cTaxPrice = _this.cPriceWithTax - _this.discountPrice;
            }
        });
    };
    /**
     * Actual submission of order data to server
     */
    OrderPage.prototype.realPlaceOrder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.apiService.createOrder(this.orderData).then(function (response) {
            var data = response.json(), alert = null, title = _this.translate.instant('order.error_title'), message = '';
            if (data.success) {
                title = _this.translate.instant('order.success');
                message = _this.translate.instant('order.order_placed');
                _this.historyService.add(data.order);
            }
            else {
                message = data.errors.join("<br/>");
            }
            alert = _this.alertCtrl.create({
                title: title,
                subTitle: message,
                buttons: [{
                        text: 'OK',
                        handler: (function () {
                            if (data.success) {
                                _this.cart.clear();
                                _this.viewCtrl.dismiss();
                            }
                        }).bind(_this)
                    }]
            });
            loading.dismiss();
            alert.present();
        }, function () {
            _this.util.alert(_this.translate.instant('order.general_error'), '');
            loading.dismiss();
        });
    };
    /**
     * Call PayPal dialog, create a transaction than place an order
     */
    OrderPage.prototype.payPayPal = function () {
        // const showPayPalError = () => {
        //   this.util.alert(this.translate.instant('order.paypal_error'), '');
        // }
        // this.payPal.init({
        //   PayPalEnvironmentProduction: this.apiService.getSettings().paypal_client_id,
        //   PayPalEnvironmentSandbox: this.apiService.getSettings().paypal_client_id
        // }).then(() => {
        //   // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        //   // change environment here to start payments processing
        //   let env = 'PayPalEnvironmentSandbox';
        //   if (this.apiService.getSettings().paypal_production) {
        //     env = 'PayPalEnvironmentProduction';
        //   }
        //   this.payPal.prepareToRender(env, new PayPalConfiguration({
        //     // Only needed if you get an "Internal Service Error" after PayPal login!
        //     //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        //   })).then(() => {
        //     let payment = new PayPalPayment(`${this.cartPrice() + this.deliveryPrice}`, this.apiService.getSettings().paypal_currency, 'Order', 'sale');
        //     this.payPal.renderSinglePaymentUI(payment).then(data => {
        //       if (data.response && data.response.state == 'approved') {
        //         this.orderData.paypal_id = data.response.id;
        //         this.realPlaceOrder();
        //       }
        //       else {
        //         showPayPalError();
        //       }
        //     }, showPayPalError);
        //   }, showPayPalError);
        // }, showPayPalError);
    };
    /**
     * Call PayPal dialog, get the card token than place an order
     */
    OrderPage.prototype.payStripe = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CreditCardInput');
        modal.onDidDismiss(function (data) {
            if (data && data.number) {
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.stripe.createCardToken(data)
                    .then(function (token) {
                    loading_1.dismiss();
                    _this.orderData.stripe_token = token.id;
                    _this.realPlaceOrder();
                })
                    .catch(function (error) {
                    loading_1.dismiss();
                    _this.util.alert(_this.translate.instant('order.payment_error'), '');
                });
            }
        });
        modal.present();
    };
    /**
     * Basic order form submission handler
     * will call corresponding payment method handler
     */
    OrderPage.prototype.placeOrder = function () {
        this.orderData.name = this.orderForm.value.name;
        this.orderData.phone = this.orderForm.value.phone;
        this.orderData.address = this.orderForm.value.address;
        this.orderData.loyalty = this.orderForm.value.loyalty;
        this.orderData.code = this.orderForm.value.promo_code;
        this.orderData.payment_method = this.orderForm.value.payment_method;
        this.orderData.city_id = this.apiService.getUserData().city_id;
        this.orderData.customer_id = this.apiService.getUserData().id;
        this.orderData.restaurant_id = this.cart.getItems()[0].product.restaurant_id;
        this.orderData.comment = this.orderForm.value.comment;
        if (this.orderData.payment_method == 'cash') {
            this.realPlaceOrder();
        }
        if (this.orderData.payment_method == 'stripe') {
            this.payStripe();
        }
        if (this.orderData.payment_method == 'paypal') {
            this.payPayPal();
        }
    };
    OrderPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    OrderPage.prototype.getFullPrice = function () {
        var result = 0;
        this.cart.getItems().forEach(function (item) {
            result = result + item.product.price * item.count;
        });
        return result;
    };
    OrderPage.prototype.cartPrice = function () {
        if (this.discountPrice) {
            return this.discountPrice;
        }
        return this.getFullPrice();
    };
    OrderPage.prototype.cartTax = function () {
        var result = 0;
        this.cart.getItems().forEach(function (item) {
            result = result + item.product.price * item.product.tax_value / 100 * item.count;
        });
        return result;
    };
    OrderPage.prototype.cartWithTax = function () {
        if (this.apiService.getSettings().tax_included) {
            return this.cartPrice() + this.deliveryPrice;
        }
        else {
            return this.cartTax() + this.cartPrice() + this.deliveryPrice;
        }
    };
    OrderPage.prototype.useReward = function () {
        this.cLoyaltyUsed = this.orderForm.controls['loyalty'].value;
        if (this.cLoyaltyUsed > this.cTotalPrice) {
            this.cLoyaltyUsed = this.cTotalPrice;
            this.orderForm.controls['loyalty'].setValue(this.cLoyaltyUsed);
        }
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/order/order.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'order.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form *ngIf="formReady" [formGroup]="orderForm" (ngSubmit)="placeOrder(orderForm.value)" novalidate>\n    <ion-item>\n      <ion-label fixed>{{ \'order.name\' | translate }}</ion-label>\n      <ion-input placeholder="{{ \'order.click_to_write\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>{{ \'order.phone\' | translate }}</ion-label>\n      <ion-input placeholder="{{ \'order.click_to_write\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.phone"></ion-input>\n    </ion-item>\n    <button type="button" ion-item detail-none (click)="showAddressWindow()">\n      <ion-label fixed>{{ \'order.address\' | translate }}</ion-label>\n      <ion-input disabled placeholder="{{ \'order.click_to_write\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.address"></ion-input>\n    </button>\n    <ion-item>\n      <ion-label fixed>{{ \'order.promo_code\' | translate }}</ion-label>\n      <ion-input placeholder="{{ \'order.optional\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.promo_code"></ion-input>\n      <button ion-button item-right type="button" (click)="validatePromo()">{{ \'order.check_promo\' | translate }}\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>{{ \'order.comment\' | translate }}</ion-label>\n      <ion-textarea [formControl]="orderForm.controls.comment"\n                    placeholder="{{ \'order.optional\' | translate }}"></ion-textarea>\n    </ion-item>\n    <ion-list radio-group [formControl]="orderForm.controls.payment_method">\n      <ion-item>\n        <ion-label>{{ \'order.cash_on_delivery\' | translate }}</ion-label>\n        <ion-radio name="payment_method" value="cash"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'order.stripe\' | translate }}</ion-label>\n        <ion-radio name="payment_method" value="stripe"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'order.paypal\' | translate }}</ion-label>\n        <ion-radio name="payment_method" value="paypal"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="userData.loyalty_reward > 0">\n      <ion-item>\n        <ion-label stacked>{{ \'order.use_reward\' | translate:{amount: userData.loyalty_reward | ecurrency} }}</ion-label>\n        <ion-input [formControl]="orderForm.controls.loyalty" type="number" max="userData.loyalty_reward"></ion-input>\n        <button ion-button item-right type="button" (click)="useReward()">{{ \'order.use\' | translate }}</button>\n      </ion-item>\n    </ion-list>\n    <div class="cart-total -nob">\n      <div>{{ \'order.price\' | translate }} {{ cTotalPrice | ecurrency }}</div>\n      <div>{{ \'order.delivery_price\' | translate }} {{ deliveryPrice | ecurrency }}</div>\n      <div>{{ \'order.total\' | translate }} {{ cTotalPrice + deliveryPrice | ecurrency }}</div>\n      <div *ngIf="cLoyaltyUsed > 0">{{ \'order.loyalty_used\' | translate:{amount: cLoyaltyUsed | ecurrency} }}</div>\n      <div *ngIf="discountPrice">{{ \'order.coupon_discount\' | translate }} {{ cFullPrice - discountPrice | ecurrency\n        }}</div>\n      <div *ngIf="discountPrice > 0 || cLoyaltyUsed > 0">Total with discount {{ discountPrice - cLoyaltyUsed + deliveryPrice | ecurrency }}</div>\n      <div *ngIf="cTaxPrice > 0">\n        <div>{{ \'order.tax\' | translate }} {{ cTaxPrice | ecurrency }}</div>\n        <div>{{ \'order.total_with_tax\' | translate }} {{ cPriceWithTax | ecurrency }}</div>\n      </div>\n    </div>\n    <button type="submit" [disabled]="!orderForm.valid" ion-button block class="place-order-button">{{\n      \'order.place_order\' | translate }}\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/order/order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_order_history_service__["a" /* OrderHistoryService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_stripe__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_8__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=7.js.map