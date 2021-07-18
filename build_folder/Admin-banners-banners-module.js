(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-banners-banners-module"],{

/***/ "/fOZ":
/*!*************************************************************************!*\
  !*** ./src/app/manage/Admin/banners/mobilehome/mobilehome.component.ts ***!
  \*************************************************************************/
/*! exports provided: MobilehomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilehomeComponent", function() { return MobilehomeComponent; });
/* harmony import */ var _raw_loader_mobilehome_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./mobilehome.component.html */ "jxcq");
/* harmony import */ var _mobilehome_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobilehome.component.css */ "Uftw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banners_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banners.service */ "jQDX");
/* harmony import */ var _webhome_webhome_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webhome/webhome.model */ "kHPN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MobilehomeComponent = /** @class */ (function () {
    function MobilehomeComponent(bannersServie) {
        this.bannersServie = bannersServie;
        this.isAddShow = true;
        this.isActive = false;
        this.positiion = [];
        this.WebbannersModel = new _webhome_webhome_model__WEBPACK_IMPORTED_MODULE_4__["Webbanners"];
        this.webImage = [];
        this.positiion = [
            {
                name: 'Top'
            },
            {
                name: 'Middle',
            },
            {
                name: 'End',
            },
            {
                name: 'Offer'
            }
        ];
        this.getBanners();
    }
    MobilehomeComponent.prototype.ngOnInit = function () {
    };
    MobilehomeComponent.prototype.addNewImages = function () {
        this.isAddShow = false;
    };
    MobilehomeComponent.prototype.cancelAddImage = function () {
        this.isAddShow = true;
    };
    MobilehomeComponent.prototype.selectPosition = function (name) {
        var _this = this;
        this.positiion.forEach(function (element) {
            if (element.name == name) {
                _this.selectedPosition = element.name;
            }
        });
    };
    MobilehomeComponent.prototype.select = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var formdata = new FormData();
            formdata.append('file', file);
            this.bannersServie.uploadMobileBannersImage(formdata).subscribe(function (response) {
                _this.image = response;
                console.log(response);
            });
        }
    };
    MobilehomeComponent.prototype.saveBannersImage = function () {
        var _this = this;
        this.WebbannersModel.bannersimage = this.image;
        this.WebbannersModel.name = this.selectedPosition;
        this.WebbannersModel.status = true;
        this.bannersServie.saveMobileBannersImage(this.WebbannersModel).subscribe(function (response) {
            _this.isAddShow = true;
            _this.getBanners();
        });
    };
    MobilehomeComponent.prototype.getBanners = function () {
        var _this = this;
        this.bannersServie.getMobileBanners().subscribe(function (data) {
            _this.webImage = data;
        });
    };
    MobilehomeComponent.prototype.removeBannersImage = function (id) {
        var _this = this;
        this.bannersServie.removeMobileBanners(id).subscribe(function (req) {
            _this.getBanners();
        });
    };
    MobilehomeComponent.prototype.activeBanners = function (id) {
        this.webImage[id].status = true;
        this.bannersServie.activeDeavctiveBanners(this.webImage[id]).subscribe(function (req) {
        });
    };
    MobilehomeComponent.prototype.deactiveBanners = function (id) {
        this.webImage[id].status = false;
        this.bannersServie.activeDeavctiveBanners(this.webImage[id]).subscribe(function (req) {
        });
    };
    MobilehomeComponent.ctorParameters = function () { return [
        { type: _banners_service__WEBPACK_IMPORTED_MODULE_3__["BannersService"] }
    ]; };
    MobilehomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-mobilehome',
            template: _raw_loader_mobilehome_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_mobilehome_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_banners_service__WEBPACK_IMPORTED_MODULE_3__["BannersService"]])
    ], MobilehomeComponent);
    return MobilehomeComponent;
}());



/***/ }),

/***/ "2fEc":
/*!*********************************************************!*\
  !*** ./src/app/manage/Admin/banners/banners.routing.ts ***!
  \*********************************************************/
/*! exports provided: BannersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersRoutes", function() { return BannersRoutes; });
/* harmony import */ var _mobilehome_mobilehome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobilehome/mobilehome.component */ "/fOZ");
/* harmony import */ var _webhome_webhome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webhome/webhome.component */ "ETOM");


var BannersRoutes = [{
        path: '',
        children: [{
                path: 'mobilehome',
                component: _mobilehome_mobilehome_component__WEBPACK_IMPORTED_MODULE_0__["MobilehomeComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'webhome',
                component: _webhome_webhome_component__WEBPACK_IMPORTED_MODULE_1__["WebhomeComponent"]
            }]
    },
];


/***/ }),

/***/ "ETOM":
/*!*******************************************************************!*\
  !*** ./src/app/manage/Admin/banners/webhome/webhome.component.ts ***!
  \*******************************************************************/
/*! exports provided: WebhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebhomeComponent", function() { return WebhomeComponent; });
/* harmony import */ var _raw_loader_webhome_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./webhome.component.html */ "YYEd");
/* harmony import */ var _webhome_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webhome.component.css */ "OnTs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banners_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banners.service */ "jQDX");
/* harmony import */ var _webhome_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webhome.model */ "kHPN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebhomeComponent = /** @class */ (function () {
    function WebhomeComponent(bannersServie) {
        this.bannersServie = bannersServie;
        this.isAddShow = true;
        this.positiion = [];
        this.isImageSaved = true;
        this.WebbannersModel = new _webhome_model__WEBPACK_IMPORTED_MODULE_4__["Webbanners"];
        this.webImage = [];
        this.positiion = [
            {
                name: 'Top'
            },
            {
                name: 'Middle',
            },
            {
                name: 'End',
            },
            {
                name: 'Deal of the Day',
            },
            {
                name: 'Deal of the Day Center',
            }
        ];
        this.getBanners();
    }
    WebhomeComponent.prototype.ngOnInit = function () {
    };
    WebhomeComponent.prototype.addNewImages = function () {
        this.isAddShow = false;
    };
    WebhomeComponent.prototype.cancelAddImage = function () {
        this.isAddShow = true;
    };
    WebhomeComponent.prototype.selectPosition = function (name) {
        var _this = this;
        this.positiion.forEach(function (element) {
            if (element.name == name) {
                _this.selectedPosition = element.name;
            }
        });
    };
    WebhomeComponent.prototype.select = function (event) {
        var _this = this;
        var max_height;
        var max_width;
        if (event.target.files && event.target.files[0]) {
            var file_1 = event.target.files[0];
            // Size Filter Bytes
            var max_size = 20971520;
            var allowed_types = ['image/png', 'image/jpeg'];
            if (this.selectedPosition == 'Top') {
                max_height = 400;
                max_width = 1200;
            }
            else if (this.selectedPosition == 'Middle') {
                max_height = 400;
                max_width = 1200;
            }
            else if (this.selectedPosition == 'End') {
                max_height = 400;
                max_width = 1200;
            }
            else if (this.selectedPosition == 'Deal of the Day') {
                max_height = 800;
                max_width = 600;
            }
            else if (this.selectedPosition == 'Deal of the Day Center') {
                max_height = 570;
                max_width = 390;
            }
            if (event.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
            // if (!_.includes(allowed_types, event.target.files[0].type)) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            var reader = new FileReader();
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function (rs) {
                    var img_height = rs.currentTarget['height'];
                    var img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    if (img_height > max_height && img_width > max_width) {
                        alert("image must be " + max_height + "*" + max_width);
                        _this.isImageSaved = false;
                        _this.imageError =
                            'Maximum dimentions allowed ' +
                                max_height +
                                '*' +
                                max_width +
                                'px';
                        return false;
                    }
                    else {
                        var imgBase64Path = e.target.result;
                        _this.cardImageBase64 = imgBase64Path;
                        var formdata = new FormData();
                        formdata.append('file', file_1);
                        _this.bannersServie.uploadImage(formdata).subscribe(function (response) {
                            _this.image = response;
                            console.log(response);
                            _this.isImageSaved = true;
                        });
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    WebhomeComponent.prototype.saveBannersImage = function () {
        var _this = this;
        this.WebbannersModel.bannersimage = this.image;
        this.WebbannersModel.name = this.selectedPosition;
        this.WebbannersModel.status = true;
        this.bannersServie.saveWebBannersImage(this.WebbannersModel).subscribe(function (response) {
            _this.getBanners();
            _this.isAddShow = true;
        });
    };
    WebhomeComponent.prototype.getBanners = function () {
        var _this = this;
        this.bannersServie.getWebBanners().subscribe(function (data) {
            _this.webImage = data;
        });
    };
    WebhomeComponent.prototype.removeBannersImage = function (id) {
        var _this = this;
        this.bannersServie.removeWebBanners(id).subscribe(function (req) {
            _this.getBanners();
        });
    };
    WebhomeComponent.prototype.activeBanners = function (id) {
        this.webImage[id].status = true;
        this.bannersServie.activeDeavctiveWebBanners(this.webImage[id]).subscribe(function (req) {
        });
    };
    WebhomeComponent.prototype.deactiveBanners = function (id) {
        this.webImage[id].status = false;
        this.bannersServie.activeDeavctiveWebBanners(this.webImage[id]).subscribe(function (req) {
        });
    };
    WebhomeComponent.ctorParameters = function () { return [
        { type: _banners_service__WEBPACK_IMPORTED_MODULE_3__["BannersService"] }
    ]; };
    WebhomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-webhome',
            template: _raw_loader_webhome_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_webhome_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_banners_service__WEBPACK_IMPORTED_MODULE_3__["BannersService"]])
    ], WebhomeComponent);
    return WebhomeComponent;
}());



/***/ }),

/***/ "OnTs":
/*!********************************************************************!*\
  !*** ./src/app/manage/Admin/banners/webhome/webhome.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi9iYW5uZXJzL3dlYmhvbWUvd2ViaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "PPci":
/*!********************************************************!*\
  !*** ./src/app/manage/Admin/banners/banners.module.ts ***!
  \********************************************************/
/*! exports provided: BannersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersModule", function() { return BannersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _webhome_webhome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webhome/webhome.component */ "ETOM");
/* harmony import */ var _mobilehome_mobilehome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobilehome/mobilehome.component */ "/fOZ");
/* harmony import */ var _banners_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banners.routing */ "2fEc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _banners_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banners.service */ "jQDX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BannersModule = /** @class */ (function () {
    function BannersModule() {
    }
    BannersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_webhome_webhome_component__WEBPACK_IMPORTED_MODULE_2__["WebhomeComponent"], _mobilehome_mobilehome_component__WEBPACK_IMPORTED_MODULE_3__["MobilehomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_banners_routing__WEBPACK_IMPORTED_MODULE_4__["BannersRoutes"]),
            ],
            providers: [
                _banners_service__WEBPACK_IMPORTED_MODULE_8__["BannersService"]
            ],
        })
    ], BannersModule);
    return BannersModule;
}());



/***/ }),

/***/ "Uftw":
/*!**************************************************************************!*\
  !*** ./src/app/manage/Admin/banners/mobilehome/mobilehome.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi9iYW5uZXJzL21vYmlsZWhvbWUvbW9iaWxlaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "YYEd":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/banners/webhome/webhome.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"card\" *ngIf=\"!isAddShow\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Add New Images</h4>\n\n        </div>\n        <div class=\"card-body\">\n            <div class=\"card-body \">\n                <form class=\"form-horizontal\" name=\"productRegForm\" #productRegForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"row\">\n                        <label class=\"col-md-2 col-form-label\">Select Position</label>\n                        <div class=\"col-md-2\">\n                            <div class=\"dropdown form-group\">\n                                <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                    name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedPosition}}\n\n                                </button>\n                                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                    <div class=\"dropdown-header\">Select Position</div>\n                                    <div *ngFor=\"let pos of positiion\">\n                                        <a class=\"dropdown-item\" (click)=\"selectPosition(pos.name)\">{{pos.name}}</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <label class=\"col-md-2 col-form-label\">Select Image</label>\n                        <div class=\"col-md-3\">\n                            <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                <div class=\"fileinput-new thumbnail\">\n                                    <img src=\"./assets/manage/assets/img/image_placeholder.jpg\" alt=\"...\">\n                                </div>\n                                <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                <div>\n                                    <span class=\"btn btn-rose btn-round btn-file\">\n                                        <span class=\"fileinput-new\">Select Image</span>\n                                        <span class=\"fileinput-exists\">Change</span>\n                                        <input type=\"file\" id=\"BannersImage\" name=\"BannersImage\"\n                                            (change)=\"select($event)\" />\n                                    </span>\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round fileinput-exists\"\n                                        data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"row\">\n                    <div class=\"col-md-9\"></div>\n                    <div class=\"col-md-1\">\n                        <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!productRegForm.form.valid\"\n                            id=\"product-submit\" (click)=\"saveBannersImage()\">Submit</button> &nbsp;\n                     \n                    </div>\n                    <div class=\"col-md-1\">\n                        <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"cancelAddImage()\">Cancel</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\" *ngIf=\"isAddShow\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Banners List</h4>\n            <div class=\"col-md-2 ml-auto\">\n                <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"addNewImages()\">Add New</button>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-shopping\">\n                        <thead class=\"\">\n                            <tr>\n                                <th></th>\n                                <th>#</th>\n                                <th>\n                                    Images List\n                                </th>\n                                <th>\n                                    Position\n                                </th>\n                                <th class=\"text-center\">Image</th>\n                                <th>Status</th>\n                                <th class=\"text-right\">\n                                    Action\n                                </th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let web of webImage;let i=index\">\n                                <td></td>\n                                <td>{{i+1}}</td>\n                                <td>Slider</td>\n                                <td>\n                                    {{web.name}}\n                                </td>\n                                <td class=\"text-center\">\n                                    <div class=\"img-container\">\n                                        <img src=\"http://localhost:8090{{web.bannersimage}}\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <button class=\"btn btn-success\" *ngIf=\"web.status\"\n                                        (click)=\"deactiveBanners(i)\">Active</button>\n                                    <button class=\"btn btn-danger\" *ngIf=!web.status\n                                        (click)=\"activeBanners(i)\">Deactive</button>\n                                </td>\n                                <td class=\"text-right\">\n                                    <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\"\n                                        data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                        <i class=\"fa fa-edit\"></i>\n                                    </button> -->\n                                    <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm \"\n                                        (click)=\"removeBannersImage(web.id)\">\n                                        <i class=\"fa fa-times\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "jQDX":
/*!*********************************************************!*\
  !*** ./src/app/manage/Admin/banners/banners.service.ts ***!
  \*********************************************************/
/*! exports provided: BannersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersService", function() { return BannersService; });
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




var BannersService = /** @class */ (function () {
    function BannersService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    BannersService.prototype.uploadImage = function (img) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].uploadBannersImageURL, img);
    };
    BannersService.prototype.saveWebBannersImage = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].saveWebBannersURL, admin);
    };
    BannersService.prototype.getWebBanners = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getWebBannersURL);
    };
    BannersService.prototype.removeWebBanners = function (id) {
        var bnr = {
            id: id
        };
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeWebBannersURL, bnr);
    };
    BannersService.prototype.saveMobileBannersImage = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].saveMobileBannersURL, admin);
    };
    BannersService.prototype.getMobileBanners = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getMobileBannersURL);
    };
    BannersService.prototype.removeMobileBanners = function (id) {
        var bnr = {
            id: id
        };
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeMobileBannersURL, bnr);
    };
    BannersService.prototype.uploadMobileBannersImage = function (img) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].uploadMobileImageURL, img);
    };
    BannersService.prototype.activeDeavctiveBanners = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].updateActiveStatusURL, admin);
    };
    BannersService.prototype.activeDeavctiveWebBanners = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].updateActiveWebStatusURL, admin);
    };
    BannersService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    BannersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BannersService);
    return BannersService;
}());



/***/ }),

/***/ "jxcq":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/banners/mobilehome/mobilehome.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"card\" *ngIf=\"!isAddShow\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Add New Images</h4>\n\n        </div>\n        <div class=\"card-body\">\n            <div class=\"card-body \">\n                <form class=\"form-horizontal\" name=\"productRegForm\" #productRegForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"row\">\n                        <label class=\"col-md-2 col-form-label\">Select Position</label>\n                        <div class=\"col-md-2\">\n                            <div class=\"dropdown form-group\">\n                                <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                    name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedPosition}}\n\n                                </button>\n                                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                    <div class=\"dropdown-header\">Select Position</div>\n                                    <div *ngFor=\"let pos of positiion\">\n                                        <a class=\"dropdown-item\" (click)=\"selectPosition(pos.name)\">{{pos.name}}</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <label class=\"col-md-2 col-form-label\">Select Image</label>\n                        <div class=\"col-md-3\">\n                            <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                <div class=\"fileinput-new thumbnail\">\n                                    <img src=\"./assets/manage/assets/img/image_placeholder.jpg\" alt=\"...\">\n                                </div>\n                                <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                <div>\n                                    <span class=\"btn btn-rose btn-round btn-file\">\n                                        <span class=\"fileinput-new\">Select Image</span>\n                                        <span class=\"fileinput-exists\">Change</span>\n                                        <input type=\"file\" id=\"BannersImage\" name=\"BannersImage\"\n                                            (change)=\"select($event)\" />\n                                    </span>\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round fileinput-exists\"\n                                        data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"row\">\n\n                    <div class=\"col-md-3 ml-auto\">\n                        <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!productRegForm.form.valid\"\n                            id=\"product-submit\" (click)=\"saveBannersImage()\">Submit</button> &nbsp;\n                        <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"cancelAddImage()\">Cancel</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\" *ngIf=\"isAddShow\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Banners List</h4>\n            <div class=\"col-md-2 ml-auto\">\n                <button type=\"submit\" style=\"margin-top: -75px;\" class=\"btn btn-info btn-round\"\n                    (click)=\"addNewImages()\">Add New</button>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-shopping\">\n                        <thead class=\"\">\n                            <tr>\n                                <th></th>\n                                <th>#</th>\n                                <th>\n                                    Images List\n                                </th>\n                                <th>\n                                    Position\n                                </th>\n                                <th class=\"text-center\">Image</th>\n                                <th>Status</th>\n                                <th class=\"text-right\">\n                                    Action\n                                </th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let web of webImage;let i=index\">\n                                <td></td>\n                                <td>{{i+1}}</td>\n                                <td>Slider</td>\n                                <td>\n                                    {{web.name}}\n                                </td>\n                                <td class=\"text-center\">\n                                    <div class=\"img-container\">\n                                        <img src=\"http://localhost:8090{{web.bannersimage}}\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <button class=\"btn btn-success\" *ngIf=\"web.status\" (click)=\"deactiveBanners(i)\">Active</button>\n                                    <button class=\"btn btn-danger\" *ngIf=!web.status (click)=\"activeBanners(i)\">Deactive</button>\n                                </td>\n                                <td class=\"text-right\">\n                                    <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\"\n                                        data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                        <i class=\"fa fa-edit\"></i>\n                                    </button> -->\n                                    <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm \"\n                                        (click)=\"removeBannersImage(web.id)\">\n                                        <i class=\"fa fa-times\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "kHPN":
/*!***************************************************************!*\
  !*** ./src/app/manage/Admin/banners/webhome/webhome.model.ts ***!
  \***************************************************************/
/*! exports provided: Webbanners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Webbanners", function() { return Webbanners; });
var Webbanners = /** @class */ (function () {
    function Webbanners(id, name, bannersimage, status) {
        this.id = id;
        this.name = name;
        this.bannersimage = bannersimage;
        this.status = status;
    }
    return Webbanners;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-banners-banners-module.js.map