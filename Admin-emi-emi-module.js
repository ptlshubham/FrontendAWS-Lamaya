(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-emi-emi-module"],{

/***/ "2pyz":
/*!***************************************************!*\
  !*** ./src/app/manage/Admin/emi/emi.component.ts ***!
  \***************************************************/
/*! exports provided: EmiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiComponent", function() { return EmiComponent; });
/* harmony import */ var _raw_loader_emi_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./emi.component.html */ "bzLR");
/* harmony import */ var _emi_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emi.component.css */ "69b6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _emi_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emi.model */ "r3yj");
/* harmony import */ var _emi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emi.service */ "zJq1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmiComponent = /** @class */ (function () {
    function EmiComponent(emiService) {
        this.emiService = emiService;
        this.EmiModel = new _emi_model__WEBPACK_IMPORTED_MODULE_3__["Emi"];
        this.addEmiFields = [];
        this.val = 0;
        this.EMI = [];
        this.bank = [];
        this.rateOfIntrest = [];
        this.roi = [];
        this.isBankShow = true;
        this.getBankList();
        this.getROIList();
    }
    EmiComponent.prototype.bankOpen = function () {
        this.isBankShow = false;
    };
    EmiComponent.prototype.ngOnInit = function () {
        this.addEmiFields = [{ name: this.val }];
        this.val++;
    };
    EmiComponent.prototype.addEmiMonths = function () {
        this.val++;
        this.addEmiFields.push({ name: this.val });
    };
    EmiComponent.prototype.removeEmiMonths = function (val) {
        this.addEmiFields.splice(val, 1);
    };
    EmiComponent.prototype.addBankList = function () {
        this.emiService.saveBankList(this.EmiModel).subscribe(function (response) {
            console.log(response);
        });
    };
    EmiComponent.prototype.getBankList = function () {
        var _this = this;
        this.emiService.getBankList().subscribe(function (data) {
            _this.EMI = data;
        });
    };
    EmiComponent.prototype.selectBankList = function (id) {
        var _this = this;
        this.bankid = id;
        this.EMI.forEach(function (element) {
            if (element.id == id) {
                _this.selectedBank = element.bankname;
            }
        });
    };
    EmiComponent.prototype.saveROIntrest = function (data) {
        var _this = this;
        this.addEmiFields.forEach(function (element) {
            element.bankid = _this.bankid;
        });
        this.emiService.addEmiOption(this.addEmiFields).subscribe(function (data) {
            alert("succfull");
            _this.getROIList();
        });
    };
    EmiComponent.prototype.getROIList = function () {
        var _this = this;
        this.emiService.getRateOfIntrest().subscribe(function (data) {
            _this.roi = data;
        });
    };
    EmiComponent.prototype.removeEmi = function (id) {
        var _this = this;
        this.emiService.removeROIList(id).subscribe(function (req) {
            _this.getROIList();
        });
    };
    EmiComponent.prototype.closeAddBank = function () {
        this.isBankShow = true;
    };
    EmiComponent.ctorParameters = function () { return [
        { type: _emi_service__WEBPACK_IMPORTED_MODULE_4__["EmiService"] }
    ]; };
    EmiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-emi',
            template: _raw_loader_emi_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_emi_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_emi_service__WEBPACK_IMPORTED_MODULE_4__["EmiService"]])
    ], EmiComponent);
    return EmiComponent;
}());



/***/ }),

/***/ "4uwC":
/*!************************************************!*\
  !*** ./src/app/manage/Admin/emi/emi.module.ts ***!
  \************************************************/
/*! exports provided: EmiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiModule", function() { return EmiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _emi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emi.service */ "zJq1");
/* harmony import */ var _emi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emi.component */ "2pyz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmiModule = /** @class */ (function () {
    function EmiModule() {
    }
    EmiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_emi_component__WEBPACK_IMPORTED_MODULE_5__["EmiComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'emi',
                        component: _emi_component__WEBPACK_IMPORTED_MODULE_5__["EmiComponent"]
                    }
                ])
            ],
            providers: [
                _emi_service__WEBPACK_IMPORTED_MODULE_4__["EmiService"]
            ],
        })
    ], EmiModule);
    return EmiModule;
}());



/***/ }),

/***/ "69b6":
/*!****************************************************!*\
  !*** ./src/app/manage/Admin/emi/emi.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi9lbWkvZW1pLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "bzLR":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/emi/emi.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"card\"  *ngIf=\"!isBankShow\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Add Bank</h4>\n        </div>\n        <div class=\"card-body\">\n            <form class=\"form-horizontal\" name=\"bankRegForm\" #bankRegForm=\"ngForm\">\n                <div class=\"row\">\n                    <label class=\"col-md-2 col-form-label\">Enter Bank Name</label>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"bankname\" name=\"bankname\"\n                                [(ngModel)]=\"EmiModel.bankname\" placeholder=\"Enter Bank Name\">\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"card-footer \">\n            <div class=\"row\">\n                <div class=\"col-md-10\"></div>\n                <div class=\"col-md-1\">\n                    <button type=\"cancel\" class=\"btn btn-round\" (click)=\"closeAddBank()\" >Cancel</button>\n                </div>\n                <div class=\"col-md-1\">\n                    <button type=\"submit\" (click)=\"addBankList()\" class=\"btn btn-info btn-round\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header \">\n            <div class=\"row\">\n                <div class=\"col-md-10\">\n                <h4 class=\"card-title\">Add EMI</h4></div>\n                <div class=\"col-md-2\">\n                    <button type=\"submit\"  class=\"btn btn-info btn-round\" *ngIf=\"isBankShow\" (click)=\"bankOpen()\">Add new bank</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <form class=\"form-horizontal\" name=\"ROIForm\" #ROIForm=\"ngForm\">\n                <div class=\"row\">\n                    <label class=\"col-sm-1 col-form-label\">Select Bank</label>\n                    <div class=\"col-sm-3\">\n                        <div class=\"dropdown form-group\">\n                            <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedBank}}\n\n                            </button>\n                            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                <div class=\"dropdown-header\">Select Bank</div>\n                                <div *ngFor=\"let b of EMI\">\n                                    <a class=\"dropdown-item\" (click)=\"selectBankList(b.id)\">{{b.bankname}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" *ngFor=\"let add of addEmiFields;let ind=index\">\n                    <div class=\"col-md-4\"></div>\n                    <div class=\"col-md-3\">\n                        <p class=\"card-title\">EMI Month</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"months\" name=\"months\" [(ngModel)]=\"add.months\"\n                                placeholder=\" Enter Months\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <p class=\"card-title\">Enter Rate Of Intrest</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"intrest\" name=\"intrest\"\n                                [(ngModel)]=\"add.intrest\" placeholder=\"Enter Rate Of Intrest\">\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-1\">\n                        <i class=\"fa fa-plus-circle\" aria-hidden=\"true\" (click)=\"addEmiMonths()\"\n                            style=\"font-size: 33px !important;margin-top:40%!important;\"></i>\n                    </div>\n                    <div class=\"col-md-1\" *ngIf=\"ind>0\">\n                        <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\" (click)=\"removeEmiMonths(ind)\"\n                            style=\"font-size: 33px !important;margin-top:40%!important;margin-left: -80px !important;\"></i>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"card-footer\">\n            <div class=\"row\">\n               <div class=\"col-md-11\"></div>\n                <div class=\"col-md-1\">\n                    <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"saveROIntrest(add)\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Bank with Rate Of Interest Table</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead class=\"text-primary\">\n                        <th class=\"text-center\">\n                            #\n                        </th>\n                        <th class=\"text-center\">\n                            Bank Name\n                        </th>\n                        <th class=\"text-center\">\n                            EMI Month\n                        </th>\n                        <th class=\"text-center\">\n                            Rate Of Interest\n                        </th>\n                        <!-- <th class=\"text-right\">\n                            Salary\n                        </th> -->\n                        <th class=\"text-right\">\n                            Actions\n                        </th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let r of roi;let i=index\">\n                            <td class=\"text-center\">{{i+1}}</td>\n                            <td class=\"text-center\">{{r.bankname}}</td>\n                            <td class=\"text-center\">{{r.months}} Months</td>\n                            <td class=\"text-center\">{{r.intrest}} %</td>\n                            <td class=\"text-right\">\n                                <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\">\n                                    <i class=\"fa fa-edit\"></i>\n                                </button> -->\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\" (click)=\"removeEmi(r.id)\">\n                                    <i class=\"fa fa-times\"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "r3yj":
/*!***********************************************!*\
  !*** ./src/app/manage/Admin/emi/emi.model.ts ***!
  \***********************************************/
/*! exports provided: Emi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emi", function() { return Emi; });
var Emi = /** @class */ (function () {
    function Emi(id, bankname) {
        this.id = id;
        this.bankname = bankname;
    }
    return Emi;
}());



/***/ }),

/***/ "zJq1":
/*!*************************************************!*\
  !*** ./src/app/manage/Admin/emi/emi.service.ts ***!
  \*************************************************/
/*! exports provided: EmiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiService", function() { return EmiService; });
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




var EmiService = /** @class */ (function () {
    function EmiService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    EmiService.prototype.saveBankList = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].saveBankListURL, admin);
    };
    EmiService.prototype.getBankList = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getBankListURL);
    };
    EmiService.prototype.addEmiOption = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].saveEmioptionURL, data);
    };
    EmiService.prototype.getRateOfIntrest = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getROIListURL);
    };
    EmiService.prototype.removeROIList = function (id) {
        var data = {
            id: id
        };
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeROIListURL, data);
    };
    EmiService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    EmiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], EmiService);
    return EmiService;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-emi-emi-module.js.map