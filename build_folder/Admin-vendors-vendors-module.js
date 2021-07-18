(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-vendors-vendors-module"],{

/***/ "Bcb9":
/*!********************************************************!*\
  !*** ./src/app/manage/Admin/vendors/vendors.module.ts ***!
  \********************************************************/
/*! exports provided: VendorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsModule", function() { return VendorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vendors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendors.component */ "QdqX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VendorsModule = /** @class */ (function () {
    function VendorsModule() {
    }
    VendorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_vendors_component__WEBPACK_IMPORTED_MODULE_2__["VendorsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'vendors',
                        component: _vendors_component__WEBPACK_IMPORTED_MODULE_2__["VendorsComponent"]
                    }
                ])
            ]
        })
    ], VendorsModule);
    return VendorsModule;
}());



/***/ }),

/***/ "Dge8":
/*!************************************************************!*\
  !*** ./src/app/manage/Admin/vendors/vendors.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi92ZW5kb3JzL3ZlbmRvcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "G5Dq":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/vendors/vendors.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Search</h4>\n            <div class=\"row\">\n                <div class=\"col-md-2 ml-auto\" style=\"margin-top: -57px;\" >\n                    <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"addVendors()\">\n                        <i class=\"nc-icon nc-simple-add\" ></i> Add Vendors</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <label class=\"col-md-1 col-form-label\">Select Date</label>\n                <div class=\"col-md-3\">\n                    <!-- <p class=\"card-title\">Select Date</p> -->\n                    <input class=\"form-control\" placeholder=\"{{model}}\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\"\n                        (click)=\"d.toggle()\">\n                    <!-- <input type=\"text\" class=\"form-control datepicker\" value=\"10/05/2018\"> -->\n                </div>\n                <!-- <label class=\"col-md-1 col-form-label\">Tracking number</label>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Tracking number\">\n                    </div>\n                </div> -->\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-outline-primary btn-round\" style=\"margin-top: -3px;\">\n                        <i class=\"nc-icon nc-zoom-split\" title=\"Search\"> Search</i>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\" *ngIf=\"isAdd\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Add Vendors</h4>\n        </div>\n        <div class=\"card-body\">\n            <form class=\"form-horizontal\">\n                <div class=\"row\">\n                    <label class=\"col-md-1 col-form-label\">Name</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter Name\">\n                        </div>\n                    </div>\n                    <label class=\"col-md-1 col-form-label\">Email</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter Email\">\n                        </div>\n                    </div>\n                    <label class=\"col-md-1 col-form-label\">Contact Number</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter Contact Number\">\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <label class=\"col-md-1 col-form-label\">Company Name</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter Comapny Name\">\n                        </div>\n                    </div>\n                    <label class=\"col-md-1 col-form-label\">Company Address</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter Company Address\">\n                        </div>\n                    </div>\n                    <label class=\"col-md-1 col-form-label\">Manufacturer Name</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manufacturer Name\">\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <label class=\"col-md-1 col-form-label\">TIN Number</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter TIN Number\">\n                        </div>\n                    </div>\n                    <label class=\"col-md-1 col-form-label\">GST Number</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter GST Number\">\n                        </div>\n                    </div>\n                    <!-- <label class=\"col-md-1 col-form-label\">Manufacturer Name</label>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manufacturer Name\">\n                        </div>\n                    </div> -->\n                </div>\n                <br>\n            </form>\n        </div>\n        <div class=\"card-footer\">\n            <div class=\"row\">\n                <div class=\"col-md-1 ml-auto\">\n                    <button type=\"submit\" class=\"btn btn-info btn-round\" \n                    (click)=\"saveVendor()\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Vendor List</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-shopping\">\n                    <thead class=\"\">\n                        <tr>\n                            <th>\n                                <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\">\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n                        </th>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>\n                                Email\n                            </th>\n\n                            <th class=\"text-center\">Contact Number</th>\n\n                            <th>\n                                Comapny Name\n                            </th>\n                            <th>\n                                Company Address\n                            </th>\n                            <th>\n                                Manufacturer Name\n                            </th>\n                            <th>\n                                TIN Number\n                            </th>\n                            <th>\n                                GST Number\n                            </th>\n                            <th>\n                                Action\n                            </th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                    </label>\n                                </div>\n                            </td>\n                            <td>1</td>\n                            <td>Pranav</td>\n                            <td>\n                                pranavgoswami38@gmail.com\n                            </td>\n                            <td>\n                                8141952604\n                            </td>\n\n                            <td>\n                                Xyz \n                            </td>\n                            <td>Anand</td>\n                            <td>\n                                920 <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                            </td>\n                            <td>\n                                Innovate Club\n                            </td>\n                            <td>\n                             TN1456S6\n                            </td>\n                            <td>\n                                ST558T45\n                            </td>\n\n                            <td>\n                                <button type=\"button\" title=\"View\" data-toggle=\"modal\" data-target=\"#noticeModal\"\n                                    class=\"btn btn-info\">Restock</button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "QdqX":
/*!***********************************************************!*\
  !*** ./src/app/manage/Admin/vendors/vendors.component.ts ***!
  \***********************************************************/
/*! exports provided: VendorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsComponent", function() { return VendorsComponent; });
/* harmony import */ var _raw_loader_vendors_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./vendors.component.html */ "G5Dq");
/* harmony import */ var _vendors_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors.component.css */ "Dge8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendorsComponent = /** @class */ (function () {
    function VendorsComponent() {
        this.isAdd = false;
    }
    VendorsComponent.prototype.ngOnInit = function () {
    };
    VendorsComponent.prototype.addVendors = function () {
        this.isAdd = true;
    };
    VendorsComponent.prototype.saveVendor = function () {
        this.isAdd = false;
    };
    VendorsComponent.ctorParameters = function () { return []; };
    VendorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-vendors',
            template: _raw_loader_vendors_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_vendors_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], VendorsComponent);
    return VendorsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-vendors-vendors-module.js.map