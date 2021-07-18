(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-inventory-inventory-module"],{

/***/ "/hrT":
/*!************************************************************!*\
  !*** ./src/app/manage/Admin/inventory/inventory.module.ts ***!
  \************************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component */ "yE14");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'inventory',
                        component: _inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"]
                    }
                ])
            ]
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "gCf5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/inventory/inventory.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Search</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <label class=\"col-md-1 col-form-label\">Select Main Category</label>\n                <div class=\"col-md-3\">\n                    <div class=\"dropdown form-group\">\n                        <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                            name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedCat}}\n\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                            <div class=\"dropdown-header\">Select Main Category</div>\n                            <div *ngFor=\"let c of category\">\n                                <a class=\"dropdown-item\" (click)=\"cateMain(c.id)\">{{c.name}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <label class=\"col-md-1 col-form-label\">Select Category</label>\n                <div class=\"col-md-3\">\n                    <div class=\"dropdown form-group\">\n                        <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                            name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedSubCat}}\n\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                            <div class=\"dropdown-header\">Select Category</div>\n                            <div *ngFor=\"let ca of subcategory\">\n                                <a class=\"dropdown-item\" (click)=\"cateCategory(ca.id)\">{{ca.name}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <label class=\"col-md-1 col-form-label\">Select Sub Category</label>\n                <div class=\"col-md-3\">\n                    <div class=\"dropdown form-group\">\n                        <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                            name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedSubProCat}}\n\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                            <div class=\"dropdown-header\">Select sub Category</div>\n                            <div *ngFor=\"let s of subprodcat\">\n                                <a class=\"dropdown-item\" (click)=\"subProCategory(s.id)\">{{s.name}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <br>\n            <div class=\"row\">\n                <label class=\"col-md-1 col-form-label\">Select Product Type\n                </label>\n                <div class=\"col-md-3\">\n                    <div class=\"dropdown form-group\">\n                        <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                            name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedCategory}}\n\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                            <div class=\"dropdown-header\">Select Filter</div>\n                            <div *ngFor=\"let s of productCategory\">\n                                <a class=\"dropdown-item\" (click)=\"selectProductCategory(s.name)\">{{s.name}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <label class=\"col-md-1 col-form-label\">Select Date</label>\n                <div class=\"col-md-3\">\n                    <!-- <p class=\"card-title\">Select Date</p> -->\n                    <input class=\"form-control\" placeholder=\"{{model}}\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\"\n                        (click)=\"d.toggle()\">\n                    <!-- <input type=\"text\" class=\"form-control datepicker\" value=\"10/05/2018\"> -->\n                </div>\n                <!-- <label class=\"col-md-1 col-form-label\">Tracking number</label>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Tracking number\">\n                    </div>\n                </div> -->\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-outline-primary btn-round\" style=\"margin-top: -3px;\">\n                        <i class=\"nc-icon nc-zoom-split\" title=\"Search\"> Search</i>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h4 class=\"card-title\">Inventory Managment</h4>\n                </div>\n                <div class=\"col-md-6\" *ngIf=\"!Chagesproduct.length >0\"></div>\n                \n                <div class=\"col-md-1\" *ngIf=\"Chagesproduct.length >0\">\n                    <!-- <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"AddToNewArrival()\">New\n                        Arrivals</button> -->\n                        <label for=\"arrival\">Arrivals</label>\n                        <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\" [ngClass]=\"status ? 'success' : 'danger'\"\n                                    id=\"AddToNewArrival\" name=\"AddToNewArrival\" (click)=\"AddToNewArrival()\" [(ngModel)]=\"addnewarrival\">\n                                </bSwitch>\n                </div>\n                <div class=\"col-md-1\" *ngIf=\"Chagesproduct.length >0\">\n                    <!-- <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"AddToBestProduct()\">Best\n                        Product</button> -->\n                        <label for=\"best\">Add Best</label>\n                        <br>\n                        <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\"\n                        id=\"AddToBestProduct\" name=\"AddToBestProduct\" (click)=\"AddToBestProduct()\" [(ngModel)]=\"addbestprdt\">\n                    </bSwitch>\n                </div>\n                <div class=\"col-md-1\" *ngIf=\"Chagesproduct.length >0\">\n                    <!-- <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"AddToHotProduct()\">Hot\n                        Product</button> -->\n                        <label for=\"hot\">Add Hot</label>\n                        <br>\n                        <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\"\n                        id=\"AddToHotProduct\" name=\"AddToHotProduct\" (click)=\"AddToHotProduct()\" [(ngModel)]=\"addhotprdt\">\n                    </bSwitch>\n                </div>\n                <div class=\"col-md-1\" *ngIf=\"Chagesproduct.length >0\">\n                    <!-- <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"AddToSale()\" data-toggle=\"modal\"\n                        data-target=\"#saleModal\">Sale on Product</button> -->\n                        <label for=\"sale\">Add Sale</label>\n                        <br>\n                        <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\"\n                        id=\"AddToSale\" name=\"AddToSale\" (click)=\"AddToSale()\" [(ngModel)]=\"addsale\">\n                    </bSwitch>\n                </div>\n                <div class=\"col-md-1\" *ngIf=\"Chagesproduct.length >0\">\n                    <button type=\"submit\" class=\"btn btn-danger btn-round\" (click)=\"removeProduct()\">Delete\n                        Product</button>\n                </div>\n                <div class=\"col-md-1\" *ngIf=\"Chagesproduct.length >0 && Chagesproduct.length <=1\">\n                    <button type=\"submit\" class=\"btn btn-warning btn-round\" (click)=\"editproduct()\">edit Product</button>\n                </div>\n                <div class=\"col-md-1\">\n                    <button type=\"submit\" class=\"btn btn-info btn-round\" routerLink=\"/manage/category\">Add Product</button>\n                </div>\n            </div   >\n        </div>\n        <div class=\"modal fade\" id=\"saleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-notice\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                            <i class=\"nc-icon nc-simple-remove\"></i>\n                        </button>\n                        <h5 class=\"modal-title\" id=\"myModalLabel\">Sale On Product</h5>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"instruction\">\n                            <form class=\"form-horizontal\" name=\"editProductForm\" #editProductForm=\"ngForm\">\n                                <div class=\"row\">\n                                    <label class=\"col-sm-6 col-form-label\">Sale Percentage</label>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" id=\"percentage\" name=\"percentage\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer justify-content-center\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Save\n                                    Percentage</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"toolbar\">\n                <!--        Here you can write extra buttons/actions for the toolbar-->\n            </div>\n            <!-- <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n                <thead>\n                    <tr>\n                        <th>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"selectedCheck\"\n                                        (click)=\"selectAll(selectedCheck)\">\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n                        </th>\n                        <th style=\"width: 10%\">\n                            <mfDefaultSorter>#</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Merchent Name</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Product ID</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Product Image</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Product Name</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Product Quantity</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Product Price</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Type</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Date Of Last Stock With Quantity</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter>Action</mfDefaultSorter>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let p of product;let i=index\">\n                        <td>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"p.selectedCheck\"\n                                        (click)=\"onChanges(p.selectedCheck,p,i)\">\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n                        </td>\n                        <td>{{i+1}}</td>\n                        <td>{{p.manufacturerName}}</td>\n                        <td>{{p.productSRNumber}}</td>\n                        <td>\n                            <div class=\"img-container\">\n                                <img src=\"http://localhost:8090{{p.productMainImage}}\">\n                            </div>\n                        </td>\n                        <td>{{p.productName}}</td>\n                        <td>500pcs</td>\n                        <td>{{p.productPrice}} <i class=\"fa fa-inr\" aria-hidden=\"true\"></i></td>\n                        <td>Low Inventory</td>\n                        <td>{{p.stockdate | date}}\n                            <br> 150pcs\n                        </td>\n                        <td>\n                            <button type=\"button\" title=\"View\" data-toggle=\"modal\" data-target=\"#noticeModal\"\n                                class=\"btn btn-info\" (click)=\"restokProduct(p,i)\">Restock</button>\n                        </td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan=\"12\">\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50]\"></mfBootstrapPaginator>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table> -->\n\n\n\n            <table id=\"datatable\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                <thead>\n                    <tr>\n                        <th>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"selectedCheck\"\n                                        (click)=\"selectAll(selectedCheck)\">\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n                        </th>\n                        <th class=\"text-center\">#</th>\n                        <!-- <th>Merchent Name</th> -->\n                        <!-- <th>Product ID</th> -->\n                        <th>Product Name</th>\n                        <th class=\"text-center\">Product Image</th>\n                        <th class=\"text-center\">Product Category</th>\n                        <th class=\"text-center\">Size with Quantity</th>\n                        <th class=\"text-center\">Product Price</th>\n                        <!-- <th>Sold Product</th> -->\n                        <th class=\"text-center\">Action</th>\n\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let p of product;let i=index\">\n                        <td>\n                            <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"p.selectedCheck\"\n                                        (click)=\"onChanges(p.selectedCheck,p,i)\">\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n                        </td>\n                        <td class=\"text-center\">{{i+1}}</td>\n                        <!-- <td>{{p.manufacturerName}}</td> -->\n                        <!-- <td>{{p.productSRNumber}}</td> -->\n                        <td>{{p.productName}}</td>\n\n                        <td class=\"text-center\">\n                            <div class=\"img-container\">\n                                <img src=\"http://localhost:8090{{p.productMainImage}}\">\n                            </div>\n                        </td>\n                        <td class=\"text-center\">\n                            {{p.subCategory}}\n                        </td>\n                        <!-- <td>\n                            <div *ngFor=\"let s of p.sizeList\">\n                                <span style=\"font-size: 0.8rem;\"> {{s.size}} - {{s.quantity}} pcs</span>\n                            </div>\n                        </td> -->\n                        <td class=\"text-center\">\n                            <table id=\"datatable\" cellspacing=\"0\" width=\"30%\">\n                                <thead>\n                                    <tr >\n                                        <th class=\"text-center\" *ngIf=\"p.sizeList.length >=1\">{{p.sizeList[0].size}}</th>\n                                        <th class=\"text-center\"  *ngIf=\"p.sizeList.length >=2\">{{p.sizeList[1].size}}</th>\n                                        <th class=\"text-center\"  *ngIf=\"p.sizeList.length >=3\">{{p.sizeList[2].size}}</th>\n                                        <th class=\"text-center\"  *ngIf=\"p.sizeList.length >=4\">{{p.sizeList[3].size}}</th>\n                                        <th class=\"text-center\"  *ngIf=\"p.sizeList.length >=5\">{{p.sizeList[4].size}}</th>\n                                        <th class=\"text-center\"  *ngIf=\"p.sizeList.length >=6\">{{p.sizeList[5].size}}</th>\n                                        <th class=\"text-center\"  *ngIf=\"p.sizeList.length >=7\">{{p.sizeList[6].size}}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td  *ngIf=\"p.sizeList.length >=1\">{{p.sizeList[0].quantity}}</td>\n                                        <td  *ngIf=\"p.sizeList.length >=2\">{{p.sizeList[1].quantity}}</td>\n                                        <td  *ngIf=\"p.sizeList.length >=3\">{{p.sizeList[2].quantity}}</td>\n                                        <td  *ngIf=\"p.sizeList.length >=4\">{{p.sizeList[3].quantity}}</td>\n                                        <td  *ngIf=\"p.sizeList.length >=5\">{{p.sizeList[4].quantity}}</td>\n                                        <td  *ngIf=\"p.sizeList.length >=6\">{{p.sizeList[5].quantity}}</td>\n                                        <td  *ngIf=\"p.sizeList.length >=7\">{{p.sizeList[6].quantity}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                        <td class=\"text-center\">{{p.productPrice}} <i class=\"fa fa-inr\" aria-hidden=\"true\"></i></td>\n\n                        <!-- <td>\n                            <div *ngFor=\"let s of p.sizeList\">\n                                <span style=\"font-size: 0.8rem;\"> {{s.size}} - {{s.soldquantity}} pcs</span>\n                            </div>\n                        </td> -->\n                        <td class=\"text-center\">\n                            <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\" \n                            data-toggle=\"modal\" data-target=\"#noticeModal\" >\n                                    <i class=\"fa fa-edit\" (click)=\"restokProduct(p,i)\"></i>\n                                </button>\n                            <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\n                            (click)=\"removeProduct(p,i)\">\n                                <i class=\"fa fa-times\"></i>\n                            </button>\n                            <!-- <button type=\"button\" title=\"View\" data-toggle=\"modal\" data-target=\"#noticeModal\"\n                                class=\"btn btn-info\" (click)=\"restokProduct(p,i)\">Restock</button> -->\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-notice\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                    </button>\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Restock Product</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"instruction\">\n                        <form class=\"form-horizontal\" name=\"editProductForm\" #editProductForm=\"ngForm\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-1 col-form-label\">#</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" id=\"index\" name=\"index\"\n                                            [(ngModel)]=\"restock.index\" disabled>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-1 col-form-label\">Merchant Name</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"restock.manufacturerName\"\n                                            id=\"manufacturerName\" name=\"manufacturerName\" disabled>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-1 col-form-label\">Product ID</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"restock.productSRNumber\"\n                                            id=\"productSRNumber\" name=\"productSRNumber\" disabled>\n                                    </div>\n                                </div>\n                            </div>\n                            <br>\n                            <div class=\"row\">\n                                <label class=\"col-sm-1 col-form-label\">Product Image</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"img-container\" style=\"max-width: 90% !important;\">\n                                        <img src=\"http://localhost:8090{{restock.productMainImage}}\">\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-1 col-form-label\">Product Name</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"restock.productName\"\n                                            id=\"productName\" name=\"productName\">\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-1 col-form-label\">Product Price</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"restock.productPrice\"\n                                            id=\"productPrice\" name=\"productPrice\">\n                                    </div>\n                                </div>\n                                <!-- <label class=\"col-sm-1 col-form-label\">Available Quantity</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" disabled>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <br>\n                            <div class=\"row\">\n\n                                <!-- <label class=\"col-sm-1 col-form-label\">Type</label>\n                                <div class=\"col-sm-3\">\n                               \n                                </div>\n                                <label class=\"col-sm-1 col-form-label\">Last Restock</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"restock.stockdate\"\n                                            disabled>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <br>\n                            <div *ngIf=\"isdef\">\n                                <div class=\"row\" *ngFor=\"let i of addSelectFields;let ind=index\">\n                                    <label class=\"col-md-1 col-form-label\">Select Size</label>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"dropdown form-group\">\n                                            <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\"\n                                                type=\"button\" name=\"dropdownMenuButton\" id=\"dropdownMenuButton\"\n                                                data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                aria-expanded=\"false\">{{i.size}}\n\n                                            </button>\n                                            <div class=\"dropdown-menu dropdown-menu-right\"\n                                                aria-labelledby=\"dropdownMenuButton\">\n                                                <div class=\"dropdown-header\">Select Product Size</div>\n                                                <div *ngFor=\"let cs of clothsize\">\n                                                    <a class=\"dropdown-item\"\n                                                        (click)=\"submitClothSize(cs.id , ind)\">{{cs.size}}</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <label class=\"col-md-1 col-form-label\">Quantity</label>\n                                    <div class=\"col-md-3\" style=\"margin-top: 6px!important;\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" id=\"productQuantity\"\n                                                name=\"productQuantity\" [(ngModel)]=\"i.quantity\"\n                                                placeholder=\" Enter Quantity\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-1\">\n                                        <i class=\"fa fa-plus-circle\" aria-hidden=\"true\" (click)=\"addSelectSize(ind)\"\n                                            style=\"font-size: 35px !important;margin-top:9%!important;\"></i>\n                                    </div>\n                                    <div class=\"col-md-1\" *ngIf=\"ind>0\">\n                                        <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"\n                                            (click)=\"removeSelectSize(ind)\"\n                                            style=\"font-size: 35px !important;margin-top:9%!important;margin-left: -76%!important;\"></i>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div *ngIf=\"isntdef\">\n                                <div class=\"row\" *ngFor=\"let i of addSelectFields;let ind=index\">\n                                    <label class=\"col-md-1 col-form-label\">Select Size</label>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"dropdown form-group\">\n                                            <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\"\n                                                type=\"button\" name=\"dropdownMenuButton\" id=\"dropdownMenuButton\"\n                                                data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                aria-expanded=\"false\">{{i.size}}\n\n                                            </button>\n                                            <div class=\"dropdown-menu dropdown-menu-right\"\n                                                aria-labelledby=\"dropdownMenuButton\">\n                                                <div class=\"dropdown-header\">Select Product Size</div>\n                                                <div *ngFor=\"let cs of clothsize\">\n                                                    <a class=\"dropdown-item\"\n                                                        (click)=\"submitClothSize(cs.id , ind)\">{{cs.size}}</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <label class=\"col-md-1 col-form-label\">Quantity</label>\n                                    <div class=\"col-md-3\" style=\"margin-top: 6px!important;\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" id=\"productQuantity\"\n                                                name=\"productQuantity\" [(ngModel)]=\"i.quantity\"\n                                                placeholder=\" Enter Quantity\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-1\">\n                                        <i class=\"fa fa-plus-circle\" aria-hidden=\"true\" (click)=\"addSelectSize(ind)\"\n                                            style=\"font-size: 35px !important;margin-top:9%!important;\"></i>\n                                    </div>\n                                    <div class=\"col-md-1\" *ngIf=\"ind>0\">\n                                        <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"\n                                            (click)=\"removeSelectSize(ind)\"\n                                            style=\"font-size: 35px !important;margin-top:9%!important;margin-left: -76%!important;\"></i>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"modal-footer justify-content-center\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Save\n                                Stock</button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "ut/6":
/*!*****************************************************************!*\
  !*** ./src/app/manage/Admin/inventory/inventory.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-dialog {\n  max-width: 1200px !important;\n  margin: 1.75rem auto;\n}\n\nimg {\n  width: 20% !important;\n  height: 20% !important;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlL0FkbWluL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0U7RUFFRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcbiAgfVxuICBpbWcge1xuICAgIC8vIG1heC13aWR0aDogMjAlO1xuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn0iXX0= */");

/***/ }),

/***/ "yE14":
/*!***************************************************************!*\
  !*** ./src/app/manage/Admin/inventory/inventory.component.ts ***!
  \***************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _raw_loader_inventory_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./inventory.component.html */ "gCf5");
/* harmony import */ var _inventory_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.component.scss */ "ut/6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_manage_Admin_category_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/manage/Admin/category/product.model */ "I45a");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category/category.service */ "zvQp");
/* harmony import */ var _category_clothsize_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category/clothsize.model */ "oD//");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory.service */ "yKc8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(categoryService, inventoryService, router) {
        this.categoryService = categoryService;
        this.inventoryService = inventoryService;
        this.router = router;
        this.ProductModel = new app_manage_Admin_category_product_model__WEBPACK_IMPORTED_MODULE_4__["Product"];
        this.product = [];
        this.Chagesproduct = [];
        this.ClothSizeModel = new _category_clothsize_model__WEBPACK_IMPORTED_MODULE_6__["ClothSize"];
        this.clothsize = [];
        this.restock = {};
        this.selectedCheck = false;
        this.popularProduct = true;
        this.addSelectFields = [];
        this.value = 0;
        this.isdef = true;
        this.isntdef = false;
        this.addnewarrival = false;
        this.addbestprdt = false;
        this.addhotprdt = false;
        this.addsale = false;
        this.category = [];
        this.subcategory = [];
        this.subprodcat = [];
        this.productCategory = [];
        this.productCategory = [
            {
                name: 'Hot Product'
            },
            {
                name: 'Sale Product',
            },
            {
                name: 'New Arrivals',
            },
            {
                name: 'Best Product'
            }
        ];
        this.getProductList();
        this.getMainCategory(0);
    }
    InventoryComponent.prototype.ngOnInit = function () {
        this.addSelectFields = [{ name: this.value }];
        this.value++;
        this.model = new Date();
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "nc-icon",
                tickIcon: "nc-check-2"
            });
        }
    };
    InventoryComponent.prototype.selectProductCategory = function (name) {
        var _this = this;
        this.selectedCategory = name;
        if (name == 'Hot Product') {
            var data = {
                filter: 'hot'
            };
            this.inventoryService.getFilterProduct(data).subscribe(function (data) {
                _this.product = data;
                _this.product.forEach(function (element) {
                    _this.inventoryService.getSize(element.id).subscribe(function (data) {
                        element.sizeList = data;
                    });
                });
            });
        }
        else if (name == 'Best Product') {
            var data = {
                filter: 'best'
            };
            this.inventoryService.getFilterProduct(data).subscribe(function (data) {
                _this.product = data;
                _this.product.forEach(function (element) {
                    _this.inventoryService.getSize(element.id).subscribe(function (data) {
                        element.sizeList = data;
                    });
                });
            });
        }
        else if (name == 'Sale Product') {
            var data = {
                filter: 'sale'
            };
            this.inventoryService.getFilterProduct(data).subscribe(function (data) {
                _this.product = data;
                _this.product.forEach(function (element) {
                    _this.inventoryService.getSize(element.id).subscribe(function (data) {
                        element.sizeList = data;
                    });
                });
            });
        }
        else {
            var data = {
                filter: 'new'
            };
            this.inventoryService.getFilterProduct(data).subscribe(function (data) {
                _this.product = data;
                _this.product.forEach(function (element) {
                    _this.inventoryService.getSize(element.id).subscribe(function (data) {
                        element.sizeList = data;
                    });
                });
            });
        }
        // this.productCategory.forEach(element => {
        //   if (element.name == name) {
        //     this.selectedCategory = element.name;
        //   }
        // })
    };
    InventoryComponent.prototype.ngAfterViewInit = function () {
        $('#datatable').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('#datatable').DataTable();
    };
    InventoryComponent.prototype.getMainCategory = function (id) {
        var _this = this;
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.category = data;
        });
    };
    InventoryComponent.prototype.editproduct = function () {
        this.router.navigate(['manage/category'], {
            queryParams: {
                value: JSON.stringify(this.Chagesproduct)
            },
        });
    };
    InventoryComponent.prototype.cateMain = function (id) {
        var _this = this;
        this.maincatid = null;
        this.subcatid = null;
        this.subToSubCat = null;
        this.maincatid = id;
        var data = {
            maincatid: this.maincatid,
            catid: null,
            subid: null
        };
        this.categoryService.GetFilterProduct(data).subscribe(function (data) {
            _this.product = data;
            _this.product.forEach(function (element) {
                _this.inventoryService.getSize(element.id).subscribe(function (data) {
                    element.sizeList = data;
                });
            });
        });
        this.category.forEach(function (element) {
            if (element.id == id) {
                _this.selectedCat = element.name;
            }
        });
        this.getSubCategory(id);
    };
    InventoryComponent.prototype.getSubCategory = function (id) {
        var _this = this;
        this.subToSubCat = id;
        var data = {
            maincatid: this.maincatid,
            catid: this.subcatid,
            subid: this.subToSubCat
        };
        this.categoryService.GetFilterProduct(data).subscribe(function (data) {
            _this.product = data;
            _this.product.forEach(function (element) {
                _this.inventoryService.getSize(element.id).subscribe(function (data) {
                    element.sizeList = data;
                });
            });
        });
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.subcategory = data;
        });
    };
    InventoryComponent.prototype.cateCategory = function (id) {
        var _this = this;
        this.subcatid = id;
        var data = {
            maincatid: this.maincatid,
            catid: this.subcatid,
            subid: null
        };
        this.categoryService.GetFilterProduct(data).subscribe(function (data) {
            _this.product = data;
            _this.product.forEach(function (element) {
                _this.inventoryService.getSize(element.id).subscribe(function (data) {
                    element.sizeList = data;
                });
            });
        });
        this.subcategory.forEach(function (element) {
            if (element.id == id) {
                _this.selectedSubCat = element.name;
            }
        });
        this.getProductSubCategory(id);
    };
    InventoryComponent.prototype.getProductSubCategory = function (id) {
        var _this = this;
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.subprodcat = data;
        });
    };
    InventoryComponent.prototype.subProCategory = function (id) {
        var _this = this;
        this.subToSubCat = id;
        this.subToSubCat = id;
        var data = {
            maincatid: this.maincatid,
            catid: this.subcatid,
            subid: this.subToSubCat
        };
        this.categoryService.GetFilterProduct(data).subscribe(function (data) {
            _this.product = data;
            _this.product.forEach(function (element) {
                _this.inventoryService.getSize(element.id).subscribe(function (data) {
                    element.sizeList = data;
                });
            });
        });
        this.ProductModel.subCategory = id;
        this.subprodcat.forEach(function (element) {
            if (element.id == id) {
                _this.selectedSubProCat = element.name;
            }
        });
    };
    InventoryComponent.prototype.addSelectSize = function (i) {
        var data = {
            productid: this.restock.id,
            size: '',
            quantity: '0',
            soldquantity: 0
        };
        this.addSelectFields = [];
        if (this.isntdef == false) {
            this.isntdef = true;
            this.isdef = false;
            // this.restock.sizeList=data;
            this.addSelectFields = this.restock.sizeList;
            this.addSelectFields.push(data);
        }
        else {
            this.isntdef = false;
            this.isdef = true;
            this.addSelectFields = this.restock.sizeList;
            this.addSelectFields.push(data);
        }
    };
    InventoryComponent.prototype.removeSelectSize = function (value) {
        this.addSelectFields.splice(value, 1);
    };
    InventoryComponent.prototype.getProductList = function () {
        var _this = this;
        this.inventoryService.getProduct().subscribe(function (data) {
            _this.product = data;
            _this.product.forEach(function (element) {
                _this.inventoryService.getSize(element.id).subscribe(function (data) {
                    element.sizeList = data;
                });
            });
            _this.product.forEach(function (element) {
                element.selectedCheck = false;
            });
        });
    };
    InventoryComponent.prototype.removeProduct = function () {
        var _this = this;
        this.product.forEach(function (element) {
            if (element.selectedCheck == true) {
                _this.inventoryService.removeProduct(element.id).subscribe(function (req) {
                    _this.getProductList();
                });
            }
        });
    };
    InventoryComponent.prototype.selectAll = function (event) {
        var _this = this;
        if (event == true) {
            this.selectedCheck = false;
            this.inventoryService.getProduct().subscribe(function (data) {
                _this.product = data;
                _this.product.forEach(function (element) {
                    element.selectedCheck = false;
                    _this.inventoryService.getSize(element.id).subscribe(function (data) {
                        element.sizeList = data;
                    });
                });
                _this.Chagesproduct = [];
            });
        }
        else {
            this.selectedCheck = true;
            this.inventoryService.getProduct().subscribe(function (data) {
                _this.product = data;
                _this.product.forEach(function (element) {
                    element.selectedCheck = true;
                    _this.inventoryService.getSize(element.id).subscribe(function (data) {
                        element.sizeList = data;
                    });
                });
                _this.Chagesproduct = _this.product;
            });
        }
    };
    InventoryComponent.prototype.onChanges = function (sel, data, idx) {
        if (sel == false) {
            this.product[idx].selectedCheck = true;
            this.Chagesproduct.push(data);
        }
        else {
            this.product[idx].selectedCheck = false;
            for (var i = 0; i < this.Chagesproduct.length; i++) {
                if (this.Chagesproduct[i].id == data.id) {
                    this.Chagesproduct.splice(i, 1);
                }
            }
        }
    };
    InventoryComponent.prototype.restokProduct = function (data, ind) {
        this.restock = data;
        this.restock.index = ind + 1;
        this.getClothSize();
        this.addSelectFields = this.restock.sizeList;
    };
    InventoryComponent.prototype.submitClothSize = function (id, index) {
        var _this = this;
        if (index != undefined) {
            this.clothsize.forEach(function (element) {
                if (element.id == id) {
                    _this.addSelectFields[index].size = element.size;
                    // this.addSelectFields[index].soldquantity =0;
                }
            });
        }
        else {
            this.clothsize.forEach(function (element) {
                if (element.id == id) {
                    _this.selectClothSize = element.size;
                }
            });
        }
    };
    InventoryComponent.prototype.getClothSize = function () {
        var _this = this;
        this.categoryService.getCloth().subscribe(function (data) {
            _this.clothsize = data;
        });
    };
    //filter code from here
    InventoryComponent.prototype.AddToNewArrival = function () {
        if (this.addnewarrival == false) {
            this.addnewarrival = true;
            this.addbestprdt = false;
            this.addsale = false;
            this.addhotprdt = false;
            this.inventoryService.addToNewArrivals(this.Chagesproduct).subscribe(function (data) {
                alert("added");
            });
        }
        else {
            this.addnewarrival = false;
            ;
        }
    };
    InventoryComponent.prototype.AddToBestProduct = function () {
        if (this.addbestprdt == false) {
            this.addnewarrival = false;
            this.addbestprdt = true;
            this.addsale = false;
            this.addhotprdt = false;
            this.inventoryService.addToBestProduct(this.Chagesproduct).subscribe(function (data) {
                alert("added");
            });
        }
        else {
            this.addbestprdt = false;
        }
    };
    InventoryComponent.prototype.AddToHotProduct = function () {
        if (this.addhotprdt == false) {
            this.addnewarrival = false;
            this.addbestprdt = false;
            this.addsale = false;
            this.addhotprdt = true;
            this.inventoryService.addTohotProduct(this.Chagesproduct).subscribe(function (data) {
                alert("added");
            });
        }
        else {
            this.addhotprdt = false;
        }
    };
    InventoryComponent.prototype.AddToSale = function () {
        if (this.addsale == false) {
            this.addnewarrival = false;
            this.addbestprdt = false;
            this.addsale = true;
            this.addhotprdt = false;
            this.inventoryService.addToSale(this.Chagesproduct).subscribe(function (data) {
                alert("added");
            });
        }
        else {
            this.addsale = false;
        }
    };
    InventoryComponent.ctorParameters = function () { return [
        { type: _category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
        { type: _inventory_service__WEBPACK_IMPORTED_MODULE_7__["InventoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-inventory',
            template: _raw_loader_inventory_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_inventory_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_7__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-inventory-inventory-module.js.map