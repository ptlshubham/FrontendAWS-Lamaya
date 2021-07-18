(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-customers-customers-module"],{

/***/ "/DCc":
/*!*******************************************************************************!*\
  !*** ./src/app/manage/Admin/customers/customerlist/customerlist.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerlistComponent", function() { return CustomerlistComponent; });
/* harmony import */ var _raw_loader_customerlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./customerlist.component.html */ "2xiN");
/* harmony import */ var _customerlist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerlist.component.css */ "76Kw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customerlist_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerlist.model */ "w2pD");
/* harmony import */ var _customerlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerlist.service */ "fMEp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerlistComponent = /** @class */ (function () {
    function CustomerlistComponent(customerListService) {
        this.customerListService = customerListService;
        this.CustomerListModel = new _customerlist_model__WEBPACK_IMPORTED_MODULE_3__["CustomerList"];
        this.customerlist = [];
        this.getCustomerList();
    }
    CustomerlistComponent.prototype.ngOnInit = function () {
    };
    CustomerlistComponent.prototype.getCustomerList = function () {
        var _this = this;
        this.customerListService.getCustomer().subscribe(function (data) {
            _this.customerlist = data;
        });
    };
    CustomerlistComponent.ctorParameters = function () { return [
        { type: _customerlist_service__WEBPACK_IMPORTED_MODULE_4__["CustomerListService"] }
    ]; };
    CustomerlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-customerlist',
            template: _raw_loader_customerlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_customerlist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_customerlist_service__WEBPACK_IMPORTED_MODULE_4__["CustomerListService"]])
    ], CustomerlistComponent);
    return CustomerlistComponent;
}());



/***/ }),

/***/ "2xiN":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/customers/customerlist/customerlist.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Search</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <label class=\"col-md-1 col-form-label\">Select Date</label>\n                <div class=\"col-md-3\">\n                    <!-- <p class=\"card-title\">Select Date</p> -->\n                    <input class=\"form-control\" placeholder=\"{{model}}\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\"\n                        (click)=\"d.toggle()\">\n                    <!-- <input type=\"text\" class=\"form-control datepicker\" value=\"10/05/2018\"> -->\n                </div>\n                <label class=\"col-md-1 col-form-label\">User Name</label>\n                <div class=\"col-md-3\">\n                    <!-- <p class=\"card-title\">Tracking number</p> -->\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\">\n                    </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-outline-primary btn-round\" style=\"margin-top: -3px;\">\n                        <i class=\"nc-icon nc-zoom-split\" title=\"Search\">Search</i>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Customer Review List</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-shopping\">\n                    <thead class=\"\">\n                        <tr>\n                            <th>#</th>\n                            <th>\n                                User Name\n                            </th>\n                            <th>User Email\n                            </th>\n                            <th>\n                                Date Of Birth\n                            </th>\n                            <th>\n                                Contact No\n                            </th>\n                            <!-- <th class=\"text-right\">\n                                Action\n                            </th> -->\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let cl of customerlist;let i=index\">\n                        <tr  >\n                            <td> {{i+1}}</td>\n                            <td>{{cl.firstname}} {{cl.lastname}}</td>\n                            <td>{{cl.email}}</td>\n                            <td>\n                               {{cl.dateofbirth}} \n                            </td>\n                            <td>\n                              {{cl.contactnumber}}\n                            </td>\n\n                            <!-- <td class=\"text-right\">\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\"\n                                    data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editReview(r)\">\n                                    <i class=\"fa fa-edit\"></i>\n                                </button>\n                                <button type=\"button\" rel=\"tooltip\" (click)=\"removeReview(r.id)\" class=\"btn btn-danger btn-icon btn-sm \">\n                                    <i class=\"fa fa-times\"></i>\n                                </button>\n                            </td> -->\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "76Kw":
/*!********************************************************************************!*\
  !*** ./src/app/manage/Admin/customers/customerlist/customerlist.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi9jdXN0b21lcnMvY3VzdG9tZXJsaXN0L2N1c3RvbWVybGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "G/Cz":
/*!*************************************************************!*\
  !*** ./src/app/manage/Admin/customers/customers.routing.ts ***!
  \*************************************************************/
/*! exports provided: CustomersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutes", function() { return CustomersRoutes; });
/* harmony import */ var _customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customerlist/customerlist.component */ "/DCc");

var CustomersRoutes = [{
        path: '',
        children: [{
                path: 'customerlist',
                component: _customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_0__["CustomerlistComponent"]
            }]
    },
];


/***/ }),

/***/ "ZpNz":
/*!************************************************************!*\
  !*** ./src/app/manage/Admin/customers/customers.module.ts ***!
  \************************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customerlist/customerlist.component */ "/DCc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _customers_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers.routing */ "G/Cz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customerlist_customerlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customerlist/customerlist.service */ "fMEp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_2__["CustomerlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_customers_routing__WEBPACK_IMPORTED_MODULE_5__["CustomersRoutes"]),
            ],
            providers: [
                _customerlist_customerlist_service__WEBPACK_IMPORTED_MODULE_7__["CustomerListService"]
            ],
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "w2pD":
/*!***************************************************************************!*\
  !*** ./src/app/manage/Admin/customers/customerlist/customerlist.model.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerList", function() { return CustomerList; });
var CustomerList = /** @class */ (function () {
    function CustomerList(id, firstname, middlename, lastname, email, password, dateofbirth, contactnumber, isactive) {
        this.id = id;
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.dateofbirth = dateofbirth;
        this.contactnumber = contactnumber;
        this.isactive = isactive;
    }
    return CustomerList;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-customers-customers-module.js.map