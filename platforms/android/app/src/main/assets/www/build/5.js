webpackJsonp([5],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressMapModule", function() { return AddressMapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_map__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address_completion_address_completion__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddressMapModule = (function () {
    function AddressMapModule() {
    }
    AddressMapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address_map__["a" /* AddressMap */],
                __WEBPACK_IMPORTED_MODULE_3__address_completion_address_completion__["a" /* AddressCompletion */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__address_completion_address_completion__["a" /* AddressCompletion */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address_map__["a" /* AddressMap */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddressMapModule);
    return AddressMapModule;
}());

//# sourceMappingURL=address_map.module.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
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
 * Component for address selection using Google map
 */
var AddressMap = (function () {
    function AddressMap(viewCtrl, zone, apiService, util, translate) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.apiService = apiService;
        this.util = util;
        this.translate = translate;
        this.service = new google.maps.places.AutocompleteService();
        this.mapMode = true;
        this.address = '';
        this.lat = 0;
        this.lng = 0;
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AddressMap.prototype.ionViewWillEnter = function () {
        this.mapMode = true;
    };
    AddressMap.prototype.ionViewDidLoad = function () {
        var _this = this;
        // load delivery areas for current city in case we have more than 1 city
        if (this.apiService.getSettings().multiple_restaurants) {
            this.apiService.loadDeliveryAreas(this.apiService.getUserData().city_id).then(function () {
                _this.loadMap();
            });
        }
        else {
            this.loadMap();
        }
    };
    AddressMap.prototype.geocodeCoords = function () {
        var _this = this;
        this.geocoder.geocode({
            location: new google.maps.LatLng(this.lat, this.lng)
        }, function (results, status) {
            if (status == 'OK') {
                _this.zone.run(function () {
                    _this.address = results[0].formatted_address;
                });
            }
        });
    };
    AddressMap.prototype.loadMap = function () {
        var _this = this;
        this.util.showLoader();
        var latLng = new google.maps.LatLng(55.7469492, 37.62548345);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
            position: latLng,
            map: this.map
        });
        var delivery_areas = this.apiService.getDeliveryAreas();
        delivery_areas.forEach(function (area) {
            var poly = new google.maps.Polygon({
                path: JSON.parse(area.coords),
                strokeColor: '#00FF00',
                strokeOpacity: 0.7,
                fillColor: '#00FF00',
                fillOpacity: 0.4,
                strokeWeight: 4
            });
            poly.setMap(_this.map);
        });
        this.map.addListener('dragend', function () {
            var _this = this;
            this.zone.run(function () {
                _this.lat = _this.map.getCenter().lat();
                _this.lng = _this.map.getCenter().lng();
                _this.marker.setPosition({ lat: _this.lat, lng: _this.lng });
                _this.geocodeCoords();
            });
        }.bind(this));
        this.map.addListener('drag', function () {
            this.lat = this.map.getCenter().lat();
            this.lng = this.map.getCenter().lng();
            this.marker.setPosition({ lat: this.lat, lng: this.lng });
        }.bind(this));
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            var ll = { lat: _this.lat, lng: _this.lng };
            _this.map.setCenter(ll);
            _this.marker.setPosition(ll);
            _this.geocodeCoords();
            _this.util.hideLoader();
        }, function () {
            _this.util.hideLoader();
        }, {
            timeout: 30000,
            maximumAge: 600000,
            enableHighAccuracy: true
        });
    };
    AddressMap.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddressMap.prototype.setAddress = function () {
        var delivery_areas = this.apiService.getDeliveryAreas(), in_service_area = false, service_area = null, latLng = new google.maps.LatLng(this.lat, this.lng);
        delivery_areas.forEach(function (area) {
            var poly = new google.maps.Polygon({ paths: JSON.parse(area.coords) });
            if (google.maps.geometry.poly.containsLocation(latLng, poly)) {
                in_service_area = true;
                service_area = area;
            }
        });
        if (in_service_area) {
            this.viewCtrl.dismiss({
                address: this.address,
                lat: this.lat,
                lng: this.lng,
                service_area: service_area
            });
        }
        else {
            this.util.alert(this.translate.instant('map.no_service'), '');
        }
    };
    AddressMap.prototype.showAddressCompletionWindow = function () {
        this.mapMode = false;
    };
    AddressMap.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query
            // uncomment to apply restrictions
            // componentRestrictions: {
            //     country: 'TH'
            // }
        }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    me.autocompleteItems.push(prediction.description);
                });
            });
        });
    };
    AddressMap.prototype.chooseItem = function (item) {
        var _this = this;
        var me = this;
        this.geocoder.geocode({
            address: item
        }, function (results, status) {
            if (status == 'OK') {
                _this.address = item;
                _this.lat = results[0].geometry.location.lat();
                _this.lng = results[0].geometry.location.lng();
                var ll = { lat: _this.lat, lng: _this.lng };
                _this.map.setCenter(ll);
                _this.marker.setPosition(ll);
                _this.setAddress();
                me.zone.run(function () {
                    _this.mapMode = true;
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddressMap.prototype, "mapElement", void 0);
    AddressMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/address_map/address_map.html"*/'<div class="map-holder">\n    <div #map class="address-map">\n    </div>\n    <div class="address-input-holder">\n        <ion-item tappable (click)="showAddressCompletionWindow()">\n            <ion-input disabled [(ngModel)]="address"></ion-input>\n        </ion-item>\n    </div>\n    <div class="address-input-buttons">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <button ion-button block outline class="address-input-cancel" (click)="closeModal()">{{ \'map.cancel\' | translate }}</button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button block (click)="setAddress()">{{ \'map.select\' | translate }}</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</div>\n<div class="map-autocomplete-holder" [ngClass]="{ \'-visible\': !mapMode }">\n    <ion-header>\n        <ion-toolbar class="address-toolbar">\n            <ion-title>&nbsp;</ion-title>\n            <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="closeModal()"></ion-searchbar>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list class="address-variants">\n            <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n                {{ item }}\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</div>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/address_map/address_map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], AddressMap);
    return AddressMap;
}());

//# sourceMappingURL=address_map.js.map

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressCompletion; });
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
 * Address autocomplete with google suggestions component
 */
var AddressCompletion = (function () {
    function AddressCompletion(viewCtrl, zone) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AddressCompletion.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddressCompletion.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query //,
            // componentRestrictions: {
            //     country: 'TH'
            // }
        }, function (predictions, status) {
            me.autocompleteItems = [];
            if (predictions) {
                me.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                });
            }
        });
    };
    AddressCompletion.prototype.chooseItem = function (item) {
        var _this = this;
        this.geocoder.geocode({
            address: item
        }, function (results, status) {
            if (status == 'OK') {
                _this.viewCtrl.dismiss({
                    address: item,
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                });
            }
        });
    };
    AddressCompletion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/address_completion/address_completion.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()"\n                   (ionCancel)="closeModal()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/harish/Documents/Development/Mummymeals/git/mummymeals_app/src/pages/ordering/address_completion/address_completion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AddressCompletion);
    return AddressCompletion;
}());

//# sourceMappingURL=address_completion.js.map

/***/ })

});
//# sourceMappingURL=5.js.map