(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "fMEp":
/*!*****************************************************************************!*\
  !*** ./src/app/manage/Admin/customers/customerlist/customerlist.service.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListService", function() { return CustomerListService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api.service */ "yTNM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerListService = /** @class */ (function () {
    function CustomerListService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    CustomerListService.prototype.getCustomer = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getCustomerListURL);
    };
    //   updateRating(): Observable<any>{
    //      
    //     return this.httpClient.post<any>(ApiService.updatereviewsURL, admin);
    //   }
    CustomerListService.prototype.removeRating = function (id) {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeReviewsURL + id);
    };
    CustomerListService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    CustomerListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CustomerListService);
    return CustomerListService;
}());



/***/ }),

/***/ "k1F4":
/*!*******************************************************!*\
  !*** ./src/app/manage/Admin/orders/orders.service.ts ***!
  \*******************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api.service */ "yTNM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersService = /** @class */ (function () {
    function OrdersService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    OrdersService.prototype.saveStatus = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].updateOrdersStatusURL, admin);
    };
    OrdersService.prototype.getOrders = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getOrdersListURL, data);
    };
    OrdersService.prototype.acceptOrder = function (id) {
        var data = {
            id: id
        };
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].acceptUserOrderURL, data);
    };
    OrdersService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "yKc8":
/*!*************************************************************!*\
  !*** ./src/app/manage/Admin/inventory/inventory.service.ts ***!
  \*************************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api.service */ "yTNM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryService = /** @class */ (function () {
    function InventoryService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    InventoryService.prototype.getProduct = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getAdminProductListURL);
    };
    InventoryService.prototype.getSize = function (id) {
        var data = {
            id: id
        };
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].GetSizeListURL, data);
    };
    InventoryService.prototype.getFilterProduct = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].GetFilterProductsURL, data);
    };
    InventoryService.prototype.removeProduct = function (id) {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeProductListItemURL + id);
    };
    InventoryService.prototype.addToNewArrivals = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].addToNewArrivalsURL, data);
    };
    InventoryService.prototype.addToBestProduct = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].addToBestProductURL, data);
    };
    InventoryService.prototype.addTohotProduct = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].addToHotProductURL, data);
    };
    InventoryService.prototype.addToSale = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].addToOnSaleURL, data);
    };
    InventoryService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map