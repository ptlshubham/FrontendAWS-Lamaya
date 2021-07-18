(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-category-category-module"],{

/***/ "3YAb":
/*!*********************************************************!*\
  !*** ./src/app/manage/Admin/category/quantity.model.ts ***!
  \*********************************************************/
/*! exports provided: QuantityWithSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityWithSize", function() { return QuantityWithSize; });
var QuantityWithSize = /** @class */ (function () {
    function QuantityWithSize(id, productid, quantity, size, color, addSelectFields, soldquantity, stockdate) {
        this.id = id;
        this.productid = productid;
        this.quantity = quantity;
        this.size = size;
        this.color = color;
        this.addSelectFields = addSelectFields;
        this.soldquantity = soldquantity;
        this.stockdate = stockdate;
    }
    return QuantityWithSize;
}());



/***/ }),

/***/ "9fnm":
/*!*************************************************************!*\
  !*** ./src/app/manage/Admin/category/category.component.ts ***!
  \*************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./category.component.html */ "cQUD");
/* harmony import */ var _category_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component.css */ "9mWE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/api.service */ "yTNM");
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.model */ "L0oE");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.service */ "zvQp");
/* harmony import */ var _clothsize_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clothsize.model */ "oD//");
/* harmony import */ var _images_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images.model */ "ewGS");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product.model */ "I45a");
/* harmony import */ var _quantity_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quantity.model */ "3YAb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, fm, apiservice, router, activatedRoutes) {
        var _this = this;
        this.categoryService = categoryService;
        this.fm = fm;
        this.apiservice = apiservice;
        this.router = router;
        this.activatedRoutes = activatedRoutes;
        this.submitted = false;
        this.startRating = false;
        this.avibilityStatus = false;
        this.emiOptiions = false;
        this.relatedProduct = false;
        this.isShow = false;
        this.isshowsub = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
        this.isSubCatData = false;
        this.CategoryModel = new _category_model__WEBPACK_IMPORTED_MODULE_6__["Category"];
        this.ProductModel = new _product_model__WEBPACK_IMPORTED_MODULE_10__["Product"];
        this.ImagesModel = new _images_model__WEBPACK_IMPORTED_MODULE_9__["Images"];
        this.ClothSizeModel = new _clothsize_model__WEBPACK_IMPORTED_MODULE_8__["ClothSize"];
        this.QuantityWithSizeModel = new _quantity_model__WEBPACK_IMPORTED_MODULE_11__["QuantityWithSize"];
        this.quantitysize = [];
        this.images = [];
        this.clothsize = [];
        this.product = [];
        this.category = [];
        this.subcategory = [];
        this.subprodcat = [];
        this.editMain = {};
        this.editCat = {};
        this.addingprdtimg = [];
        this.val = 0;
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.multi = [];
        this.files = [];
        this.addSelectFields = [];
        this.value = 0;
        this.multiplefile = [];
        this.isImageSaved = true;
        this.isEdit = false;
        this.mainNavCategory();
        this.getMainCategory(0).then();
        this.ProductModel.startRating = false;
        this.ProductModel.avibilityStatus = false;
        this.ProductModel.emiOptiions = false;
        this.ProductModel.relatedProduct = false;
        this.ProductModel.discountPrice = 0;
        this.activatedRoutes.queryParams.subscribe(function (res) {
            if (res) {
                var data = JSON.parse(res.value);
                _this.ProductModel = data[0];
                _this.isEdit = true;
                _this.isProduct = true;
                _this.isShow = false;
                _this.isshowsub = false;
                _this.isCatData = false;
                _this.isMainShow = false;
                _this.isMainCatData = false;
                _this.isSubCatData = false;
                _this.addSelectFields = _this.ProductModel.sizeList;
                _this.getdetailImages(_this.ProductModel.id);
                _this.cateMain(_this.ProductModel.mainCategory);
                _this.cateCategory(_this.ProductModel.category);
                if (_this.ProductModel.subCategory != null || _this, _this.ProductModel.subCategory != undefined) {
                    _this.subProCategory(_this.ProductModel.subCategory);
                }
                _this.getClothSize();
            }
        });
    }
    CategoryComponent.prototype.onSubmit = function () { this.submitted = true; };
    CategoryComponent.prototype.ngOnInit = function () {
        this.addSelectFields = [{ selsize: '',
                quantity: 0,
                color: '#ffffff' }];
        this.value++;
        this.mainCateRegForm = this.fm.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name,],
        });
        this.cateRegForm = this.fm.group({
            subname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name,],
        });
        this.subCateRegForm = this.fm.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name,],
        });
        this.productRegForm = this.fm.group({
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name,],
            brandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name,],
            manufacturerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name,],
            productCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name],
            productPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name],
            productSRNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name],
            discountPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name],
        });
    };
    CategoryComponent.prototype.enteredquant = function (ind) {
        debugger;
    };
    CategoryComponent.prototype.mainNavCategory = function () {
        this.isMainShow = true;
        this.isshowsub = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isShow = false;
        this.isSubCatData = false;
    };
    CategoryComponent.prototype.mainCategory = function () {
        this.isShow = true;
        this.isshowsub = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
        this.isSubCatData = false;
    };
    CategoryComponent.prototype.subCategory = function () {
        this.isshowsub = true;
        this.isShow = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
    };
    CategoryComponent.prototype.addProduct = function () {
        this.isProduct = true;
        this.ProductModel = {};
        this.isEdit = false;
        this.isShow = false;
        this.isshowsub = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
        this.isSubCatData = false;
        this.getClothSize();
    };
    CategoryComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    CategoryComponent.prototype.onEventLog = function (ev, color, i) {
        debugger;
        if (ev == 'colorPickerClose') {
            this.addSelectFields[i].color = color.color;
        }
    };
    CategoryComponent.prototype.submitMainCategory = function () {
        var _this = this;
        this.CategoryModel.parent = 0;
        this.CategoryModel.isactive = 1;
        this.categoryService.saveMainCat(this.CategoryModel).subscribe(function (response) {
            _this.apiservice.showNotification('top', 'right', 'Main Category added Successfully.', 'success');
            // this.router.navigate(['/', 'labourlist']);
            _this.getMainCategory(0);
        });
    };
    CategoryComponent.prototype.onEvent = function (val, ev) {
    };
    CategoryComponent.prototype.getdetailImages = function (id) {
        var _this = this;
        this.categoryService.getProductDetailImages(id).subscribe(function (res) {
            _this.addingprdtimg = res;
        });
    };
    CategoryComponent.prototype.getMainCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.categoryService.getMainCat(id).subscribe(function (data) {
                    _this.category = data;
                    if (_this.isEdit == true) {
                        _this.cateMain(_this.ProductModel.mainCategory);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    CategoryComponent.prototype.mainCatEdit = function (data) {
        this.editMain = data;
    };
    CategoryComponent.prototype.updateMainCate = function (data) {
        var _this = this;
        this.CategoryModel.isactive = 1;
        this.categoryService.updateMainCategory(data).subscribe(function (req) {
            _this.apiservice.showNotification('top', 'right', 'Updated Main Category Successfully.', 'success');
            _this.getMainCategory(0);
        });
    };
    CategoryComponent.prototype.mainCatRemove = function (id) {
        var _this = this;
        this.categoryService.removeMainCatList(id).subscribe(function (req) {
            _this.apiservice.showNotification('top', 'right', 'Main Category removed Successfully.', 'success');
            _this.getMainCategory(0);
            _this.getProductSubCategory(_this.selectedSubCatid);
            _this.getSubCategory(_this.subToSubCat);
        });
    };
    CategoryComponent.prototype.editCategory = function (Data) {
        this.editCat = Data;
    };
    CategoryComponent.prototype.updatemaincatddl = function (parent, name) {
        this.editCat.parent = parent;
        this.selectedCat = name;
    };
    CategoryComponent.prototype.EditedSaveCategory = function (data) {
        var _this = this;
        data.bannerimage = this.categoryimage;
        this.categoryService.updateMainCat(data).subscribe(function (req) {
            console.log(req);
            _this.apiservice.showNotification('top', 'right', 'Successfully updated.', 'success');
            _this.getSubCategory(_this.subToSubCat);
        });
    };
    CategoryComponent.prototype.cateMain = function (id) {
        var _this = this;
        this.ImagesModel.mainCategoryId = id;
        this.ProductModel.mainCategory = id;
        this.category.forEach(function (element) {
            if (element.id == id) {
                _this.selectedCat = element.name;
            }
        });
        this.getSubCategory(id);
    };
    CategoryComponent.prototype.submitCategory = function () {
        var _this = this;
        this.category.forEach(function (element) {
            if (element.name == _this.selectedCat) {
                _this.CategoryModel.parent = element.id;
                _this.CategoryModel.isactive = 1;
                _this.CategoryModel.bannersimage = _this.categoryimage;
            }
        });
        this.categoryService.saveCat(this.CategoryModel).subscribe(function (response) {
            console.log(response);
            _this.apiservice.showNotification('top', 'right', 'Category successfully added.', 'success');
            _this.getSubCategory(_this.subToSubCat);
        });
    };
    CategoryComponent.prototype.cateCategory = function (id) {
        var _this = this;
        this.ProductModel.category = id;
        this.ImagesModel.categoryId = id;
        this.selectedSubCatid = id;
        this.subcategory.forEach(function (element) {
            if (element.id == id) {
                _this.selectedSubCat = element.name;
            }
        });
        this.getProductSubCategory(id);
    };
    CategoryComponent.prototype.getSubCategory = function (id) {
        var _this = this;
        this.subToSubCat = id;
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.subcategory = data;
            if (_this.isEdit == true) {
                _this.cateCategory(_this.ProductModel.category);
            }
        });
    };
    CategoryComponent.prototype.submitSubCategory = function () {
        var _this = this;
        this.subcategory.forEach(function (element) {
            if (element.name == _this.selectedSubCat) {
                _this.CategoryModel.parent = element.id;
                _this.CategoryModel.isactive = 1;
            }
        });
        this.categoryService.saveCat(this.CategoryModel).subscribe(function (response) {
            _this.apiservice.showNotification('top', 'right', 'Sub Category successfully added.', 'success');
            _this.getProductSubCategory(_this.CategoryModel.parent);
        });
        this.isSubCatData = true;
    };
    CategoryComponent.prototype.getProductSubCategory = function (id) {
        var _this = this;
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.subprodcat = data;
            if (_this.isEdit == true) {
                if (_this.ProductModel.subCategory != null || _this, _this.ProductModel.subCategory != undefined) {
                    _this.subProCategory(_this.ProductModel.subCategory);
                }
            }
        });
    };
    CategoryComponent.prototype.subProCategory = function (id) {
        var _this = this;
        this.ImagesModel.subCategoryId = id;
        this.ProductModel.subCategory = id;
        this.subprodcat.forEach(function (element) {
            if (element.id == id) {
                _this.selectedSubProCat = element.name;
            }
        });
    };
    CategoryComponent.prototype.addImageUploader = function () {
        this.val++;
        this.addingprdtimg.push({ name: this.val });
    };
    CategoryComponent.prototype.removeImageUploader = function (val) {
        this.addingprdtimg.splice(val, 1);
    };
    CategoryComponent.prototype.select = function (event) {
        var _this = this;
        var max_height;
        var max_width;
        if (event.target.files && event.target.files[0]) {
            var file_1 = event.target.files[0];
            var max_size = 20971520;
            var allowed_types = ['image/png', 'image/jpeg'];
            max_height = 800;
            max_width = 600;
            if (event.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
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
                        _this.categoryService.selectUploadImage(formdata).subscribe(function (response) {
                            _this.image = response;
                            console.log(response);
                        });
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    // Multiple Image Uploader
    CategoryComponent.prototype.onSelect = function (event) {
        var _this = this;
        var max_height;
        var max_width;
        if (event.target.files && event.target.files[0]) {
            var file_2 = event.target.files[0];
            var max_size = 20971520;
            var allowed_types = ['image/png', 'image/jpeg'];
            max_height = 800;
            max_width = 600;
            if (event.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
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
                        formdata.append('file', file_2);
                        formdata.append('catid', _this.ImagesModel.mainCategoryId);
                        formdata.append('subcatid', _this.ImagesModel.categoryId);
                        formdata.append('grandchild', _this.ImagesModel.subCategoryId);
                        _this.categoryService.selectMultiUploadImage(formdata).subscribe(function (response) {
                            _this.multi.push(response);
                            console.log(response);
                        });
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CategoryComponent.prototype.addSelectSize = function () {
        this.value++;
        var data = {
            selsize: '',
            quantity: 0,
            color: '#ffffff'
        };
        this.addSelectFields.push(data);
    };
    CategoryComponent.prototype.removeSelectSize = function (value) {
        this.addSelectFields.splice(value, 1);
    };
    CategoryComponent.prototype.getClothSize = function () {
        var _this = this;
        this.categoryService.getCloth().subscribe(function (data) {
            _this.clothsize = data;
        });
    };
    CategoryComponent.prototype.selectClothsSize = function (id) {
        var _this = this;
        this.clothsize.forEach(function (element) {
            if (element.id == id) {
                _this.selectClothSize = element.size;
            }
        });
    };
    CategoryComponent.prototype.submitClothSize = function (id, index) {
        var _this = this;
        if (index != undefined) {
            this.clothsize.forEach(function (element) {
                if (element.id == id) {
                    _this.addSelectFields[index].selsize = element.size;
                    _this.addSelectFields[index].soldquantity = 0;
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
    CategoryComponent.prototype.submitAddProduct = function () {
        var _this = this;
        this.ProductModel.isActive = 0;
        this.ProductModel.productMainImage = this.image;
        this.ProductModel.selectedSize = this.addSelectFields;
        this.ProductModel.multi = this.multi;
        if (this.ProductModel.subCategory == undefined) {
            this.ProductModel.subCategory = null;
        }
        // this.ImagesModel.
        // this.QuantityWithSizeModel.addSelectFields = this.addSelectFields;
        this.categoryService.saveAddProduct(this.ProductModel).subscribe(function (response) {
            _this.apiservice.showNotification('top', 'right', 'Product successfully added.', 'success');
            // this.router.navigate(['/inventory']);
        });
    };
    // removeOrChangedImage() {
    //    
    //   this.categoryService.removeOrChanged().subscribe((req) => {
    //   })
    // }
    CategoryComponent.prototype.selectBanners = function (event) {
        var _this = this;
        var max_height;
        var max_width;
        if (event.target.files && event.target.files[0]) {
            var file_3 = event.target.files[0];
            // Size Filter Bytes
            var max_size = 20971520;
            max_height = 380;
            max_width = 1930;
            var allowed_types = ['image/png', 'image/jpeg'];
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
                        formdata.append('file', file_3);
                        _this.categoryService.uploadCategoryBannersImage(formdata).subscribe(function (response) {
                            _this.categoryimage = response;
                            console.log(response);
                        });
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-category',
            template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_category_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "9mWE":
/*!**************************************************************!*\
  !*** ./src/app/manage/Admin/category/category.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "GWaj":
/*!**********************************************************!*\
  !*** ./src/app/manage/Admin/category/category.module.ts ***!
  \**********************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.component */ "9fnm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category.service */ "zvQp");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'category',
                        component: _category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]
                    }
                ])
            ],
            providers: [
                _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]
            ],
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "L0oE":
/*!*********************************************************!*\
  !*** ./src/app/manage/Admin/category/category.model.ts ***!
  \*********************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, name, parent, bannersimage, createddate, updateddate, isactive) {
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.bannersimage = bannersimage;
        this.createddate = createddate;
        this.updateddate = updateddate;
        this.isactive = isactive;
    }
    return Category;
}());



/***/ }),

/***/ "cQUD":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/category/category.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n\n    <!-- Add Buttons Start -->\n    <div class=\"card\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"card-body text-center\">\n                    <button class=\"btn btn-primary btn-md\" (click)=\"mainNavCategory()\">\n                        <i class=\"nc-icon nc-simple-add\"></i>Main Category</button>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"card-body text-center\">\n                    <button class=\"btn btn-primary btn-md\" (click)=\"mainCategory()\">\n                        <i class=\"nc-icon nc-simple-add\"></i>Add Category</button>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"card-body text-center\">\n                    <button class=\"btn btn-primary btn-md\" (click)=\"subCategory()\">\n                        <i class=\"nc-icon nc-simple-add\"></i>Add Sub Category</button>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"card-body text-center\">\n                    <button class=\"btn btn-primary btn-md\" (click)=\"addProduct()\">\n                        <i class=\"nc-icon nc-simple-add\"></i>Add Product</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add buttons End -->\n\n    <!-- Add Main Navbar Category Start -->\n    <div class=\"row\" *ngIf=\"isMainShow\">\n        <div class=\"col-md-12\">\n            <div class=\"card \">\n                <div class=\"card-header \">\n                    <h4 class=\"card-title\">Main Category</h4>\n                </div>\n                <div class=\"card-body \">\n\n                    <form class=\"form-horizontal\" name=\"mainCateRegForm\" #mainCateRegForm=\"ngForm\"\n                        (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"row\">\n                            <label class=\"col-sm-3 col-form-label\">Main Category</label>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                    <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter Main Category Name\"\n                                        class=\"form-control\" [(ngModel)]=\"CategoryModel.name\" required value=\"\"\n                                        pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" (focus)=\"focus=true\"\n                                        (blur)=\"focus=false\" #name=\"ngModel\">\n                                </div>\n                            </div>\n                            <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"name.errors.required\">Category Name is required</div>\n                                <div [hidden]=\"!name.errors('pattern')\">Enter Only Characters.\n                                    <!-- <small><b>Mens Wear</b></small> -->\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer \">\n                    <div class=\"row\">\n                        <div class=\"col-md-10\"></div>\n                        <div class=\"col-md-1\">\n                            <button type=\"submit\" class=\"btn btn-info btn-round\" id=\"main-submit\"\n                                [disabled]=\"!mainCateRegForm.form.valid\" (click)=\"submitMainCategory()\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add Main Navbar Category End -->\n\n    <!-- Add Category Start -->\n    <div class=\"row\" *ngIf=\"isShow\">\n        <div class=\"col-md-12\">\n            <div class=\"card \">\n                <div class=\"card-header \">\n                    <h4 class=\"card-title\">Add Category</h4>\n                </div>\n                <div class=\"card-body \">\n                    <form class=\"form-horizontal\" name=\"cateRegForm\" #cateRegForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"row\">\n                            <label class=\"col-sm-1 col-form-label\">Select Main Category</label>\n                            <div class=\"col-sm-3\">\n                                <div class=\"dropdown form-group\">\n                                    <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedCat}}\n\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                        <div class=\"dropdown-header\">Select Main Category</div>\n                                        <div *ngFor=\"let c of category\">\n                                            <a class=\"dropdown-item\" (click)=\"cateMain(c.id)\">{{c.name}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-sm-1 col-form-label\">Add Category</label>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                    <input type=\"text\" class=\"form-control\" id=\"subname\" name=\"subname\"\n                                        placeholder=\"Enter Category Name\" [(ngModel)]=\"CategoryModel.name\" required\n                                        value=\"\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" (focus)=\"focus=true\"\n                                        (blur)=\"focus=false\" #subname=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"subname.errors && (subname.dirty || subname.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf=\"subname.errors.required\">Category Name is required</div>\n                                    <div [hidden]=\"!subname.errors('pattern')\">Enter Only Name\n                                        <!-- <small><b>Mens Wear</b></small> -->\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-sm-1 col-form-label\">Select Image</label>\n                            <div class=\"col-sm-3\">\n                                <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"fileinput-new thumbnail\">\n                                        <img src=\"./assets/manage/assets/img/image_placeholder.jpg\" alt=\"...\">\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                    <div>\n                                        <span class=\"btn btn-rose btn-round btn-file\">\n                                            <span class=\"fileinput-new\">Select Image</span>\n                                            <span class=\"fileinput-exists\">Change</span>\n                                            <input type=\"file\" id=\"BannersImage\" name=\"BannersImage\"\n                                                (change)=\"selectBanners($event)\" />\n                                        </span>\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round fileinput-exists\"\n                                            data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i>Remove</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer \">\n                    <div class=\"row\">\n                        <div class=\"col-md-10\"></div>\n                        <div class=\"col-md-1\">\n                            <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!cateRegForm.form.valid\"\n                                id=\"sub-submit\" (click)=\"submitCategory()\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add Category End -->\n\n    <!-- Add Sub Category Start -->\n    <div class=\"row\" *ngIf=\"isshowsub\">\n        <div class=\"col-md-12\">\n            <div class=\"card \">\n                <div class=\"card-header \">\n                    <h4 class=\"card-title\">Add Sub Category</h4>\n                </div>\n                <div class=\"card-body\">\n                    <form class=\"form-horizontal\" name=\"subCateRegForm\" #subCateRegForm=\"ngForm\"\n                        (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"row\">\n                            <label class=\"col-sm-1 col-form-label\">Select Main Category</label>\n                            <div class=\"col-sm-3\">\n                                <div class=\"dropdown form-group\">\n                                    <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedCat}}\n\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                        <div class=\"dropdown-header\">Select Main Category</div>\n                                        <div *ngFor=\"let c of category\">\n                                            <a class=\"dropdown-item\" (click)=\"cateMain(c.id)\">{{c.name}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-sm-1 col-form-label\">Select Category</label>\n                            <div class=\"col-sm-3\">\n                                <div class=\"dropdown form-group\">\n                                    <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedSubCat}}\n\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                        <div class=\"dropdown-header\">Select Category</div>\n                                        <div *ngFor=\"let ca of subcategory\">\n                                            <a class=\"dropdown-item\" (click)=\"cateCategory(ca.id)\">{{ca.name}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-sm-1 col-form-label\">Add Sub Category</label>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\n                                        placeholder=\"Enter Category Name\" [(ngModel)]=\"CategoryModel.name\" required\n                                        value=\"\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" (focus)=\"focus=true\"\n                                        (blur)=\"focus=false\" #name=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                    <div *ngIf=\"name.errors.required\">Category Name is required</div>\n                                    <div [hidden]=\"!name.errors('pattern')\">Enter Only Characters.</div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer \">\n                    <div class=\"row\">\n                        <div class=\"col-md-10\"></div>\n                        <div class=\"col-md-1\">\n                            <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!subCateRegForm.form.valid\"\n                                id=\"sub-submit\" (click)=\"submitSubCategory()\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add Sub Category end -->\n\n    <!-- Add Product Start -->\n    <div class=\"row\" *ngIf=\"isProduct\">\n        <div class=\"col-md-12\">\n            <div class=\"card \">\n                <div class=\"card-header \">\n                    <h4 class=\"card-title\">Add Products</h4>\n                </div>\n                <div class=\"card-body \">\n                    <form class=\"form-horizontal\" name=\"productRegForm\" #productRegForm=\"ngForm\"\n                        (ngSubmit)=\"onSubmit()\">\n                        <div class=\"row\">\n                            <label class=\"col-md-1 col-form-label\">Select Main Category</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"dropdown form-group\">\n                                    <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedCat}}\n\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                        <div class=\"dropdown-header\">Select Main Category</div>\n                                        <div *ngFor=\"let c of category\">\n                                            <a class=\"dropdown-item\" (click)=\"cateMain(c.id)\">{{c.name}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Select Category</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"dropdown form-group\">\n                                    <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedSubCat}}\n\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                        <div class=\"dropdown-header\">Select Category</div>\n                                        <div *ngFor=\"let ca of subcategory\">\n                                            <a class=\"dropdown-item\" (click)=\"cateCategory(ca.id)\">{{ca.name}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Select Sub Category</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"dropdown form-group\">\n                                    <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedSubProCat}}\n\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                        <div class=\"dropdown-header\">Select sub Category</div>\n                                        <div *ngFor=\"let s of subprodcat\">\n                                            <a class=\"dropdown-item\" (click)=\"subProCategory(s.id)\">{{s.name}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <br><br><br>\n                        <div class=\"row\">\n                            <!-- <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\n                            placeholder=\"Enter Main Category Name\" [(ngModel)]=\"CategoryModel.name\"\n                            #name=\"ngModel\"> -->\n                            <!-- <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\n                                    placeholder=\"Enter Category Name\" [(ngModel)]=\"CategoryModel.name\"\n                                    #name=\"ngModel\">\n                            </div> -->\n                            <label class=\"col-md-1 col-form-label\">Product Name</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                    <input type=\"text\" class=\"form-control\" id=\"productName\" name=\"productName\"\n                                        [(ngModel)]=\"ProductModel.productName\" placeholder=\" Enter Product Name\"\n                                        required value=\"\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\n                                        (focus)=\"focus=true\" #productName=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"productName.errors && (productName.dirty || productName.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf=\"productName.errors.required\">Product Name is required</div>\n                                    <div [hidden]=\"!productName.errors('pattern')\">Enter Only Characters.</div>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Brand Name</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                    <input type=\"text\" class=\"form-control\" id=\"brandName\" name=\"brandName\"\n                                        [(ngModel)]=\"ProductModel.brandName\" placeholder=\" Enter Brand Name\" required\n                                        value=\"\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" (focus)=\"focus=true\"\n                                        #brandName=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"brandName.errors && (brandName.dirty || brandName.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf=\"brandName.errors.required\">Brand Name is required</div>\n                                    <div [hidden]=\"!brandName.errors('pattern')\">Enter Only Characters.</div>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Manufacturer Name</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                    <input type=\"text\" class=\"form-control\" id=\"manufacturerName\"\n                                        name=\"manufacturerName\" [(ngModel)]=\"ProductModel.manufacturerName\"\n                                        placeholder=\"Enter Manufacturer Name\" required value=\"\"\n                                        pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" (focus)=\"focus=true\"\n                                        #manufacturerName=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"manufacturerName.errors && (manufacturerName.dirty || manufacturerName.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf=\"manufacturerName.errors.required\">Manufacturer name is required\n                                    </div>\n                                    <div [hidden]=\"!manufacturerName.errors('pattern')\">Enter Only Characters.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <label class=\"col-md-1 col-form-label\">Product Code</label>\n                            <div class=\"col-md-3\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"productCode\" name=\"productCode\"\n                                        [(ngModel)]=\"ProductModel.productCode\" placeholder=\"Enter Product Code\" required\n                                        value=\"\" pattern=\"^[a-zA-Z0-9]+$\" (focus)=\"focus=true\" #productCode=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"productCode.errors && (productCode.dirty || productCode.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf=\"productCode.errors.required\">Product Code is required.\n                                    </div>\n                                    <div [hidden]=\"!productCode.errors('pattern')\">Enter Only Characters and Numbers.\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Start Rating</label>\n                            <div class=\"col-md-3\">\n                                <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\" id=\"startRating\"\n                                    name=\"startRating\" [(ngModel)]=\"ProductModel.startRating\">\n                                </bSwitch>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Product Price</label>\n                            <div class=\"col-md-3\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"productPrice\" name=\"productPrice\"\n                                        [(ngModel)]=\"ProductModel.productPrice\" placeholder=\"Enter Product Price\"\n                                        required value=\"\" pattern=\"^[0-9]*$\" (focus)=\"focus=true\"\n                                        #productPrice=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"productPrice.errors && (productPrice.dirty || productPrice.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf=\"productPrice.errors.required\">Product Price is required.</div>\n                                    <div [hidden]=\"!productPrice.errors('pattern')\">Enter Only Numbers.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <label class=\"col-md-1 col-form-label\">Discount Price</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"discountPrice\" name=\"discountPrice\"\n                                        [(ngModel)]=\"ProductModel.discountPrice\" #discountPrice=\"ngModel\" required\n                                        value=\"\" pattern=\"^[0-9]*$\" (focus)=\"focus=true\"\n                                        placeholder=\"Enter Discount Price\">\n                                </div>\n                                <div *ngIf=\"discountPrice.errors && (discountPrice.dirty || discountPrice.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div [hidden]=\"!discountPrice.errors('pattern')\">Enter Only Numbers.</div>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">EMI Options</label>\n                            <div class=\"col-md-3\">\n                                <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\" id=\"emiOptiions\"\n                                    name=\"emiOptiions\" [(ngModel)]=\"ProductModel.emiOptiions\">\n                                </bSwitch>\n                            </div>\n\n                            <label class=\"col-md-1 col-form-label\">Avibilaty Status</label>\n                            <div class=\"col-md-3\">\n                                <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\"\n                                    id=\"avibilityStatus\" name=\"avibilityStatus\"\n                                    [(ngModel)]=\"ProductModel.avibilityStatus\">\n                                </bSwitch>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <!-- <label class=\"col-md-1 col-form-label\">Total Product Quantity</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"productQuantity\" name=\"productQuantity\"\n                                        [(ngModel)]=\"ProductModel.productQuantity\"\n                                        placeholder=\" Enter Total Product Quantity\">\n                                </div>\n                            </div> -->\n                            <label class=\"col-md-1 col-form-label\">Descripition With Bullet</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <textarea rows=\"4\" cols=\"80\" class=\"form-control textarea\" id=\"descripition\"\n                                        name=\"descripition\" [(ngModel)]=\"ProductModel.descripition\"\n                                        placeholder=\"Write Discripition and Seperated by ',' commaa for Bullet\"></textarea>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Related Product</label>\n                            <div class=\"col-md-3\">\n                                <bSwitch [switch-on-color]=\"'primary'\" [switch-off-color]=\"'primary'\"\n                                    id=\"relatedProduct\" name=\"relatedProduct\" [(ngModel)]=\"ProductModel.relatedProduct\">\n                                </bSwitch>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Product Model Number</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"productSRNumber\" name=\"productSRNumber\"\n                                        [(ngModel)]=\"ProductModel.productSRNumber\" placeholder=\" Enter Model Number\"\n                                        required value=\"\" pattern=\"^[a-zA-Z0-9]+$\" (focus)=\"focus=true\"\n                                        #productSRNumber=\"ngModel\">\n                                </div>\n                                <div *ngIf=\"productSRNumber.errors && (productSRNumber.dirty || productSRNumber.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf=\"productSRNumber.errors.required\">Product Price is required.\n                                    </div>\n                                    <div [hidden]=\"!productSRNumber.errors('pattern')\">Enter Only Numbers.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n\n                        <div class=\"row\">\n                            <label class=\"col-md-1 col-form-label\">Product Size</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"productSize\" name=\"productSize\"\n                                        [(ngModel)]=\"ProductModel.productSize\" placeholder=\"Enter Product Dimension\">\n                                </div>\n                            </div>\n\n                            <label class=\"col-md-1 col-form-label\">Item Weight</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"itemWeight\" name=\"itemWeight\"\n                                        [(ngModel)]=\"ProductModel.itemWeight\" placeholder=\" Enter Item Weight\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-2\" style=\"margin-top: 6px!important;\">\n                                <input [style.background]=\"color1\"\n                                [(ngModel)]=\"ProductModel.color\"\n                                 [(colorPicker)]=\"color1\" \n                                 (colorPickerOpen)=\"onEventLog('colorPickerOpen', $event)\" \n                                 (colorPickerClose)=\"onEventLog('colorPickerClose', $event)\" \n                                 (cpInputChange)=\"onEventLog('cpInputChange', $event)\" \n                                 (cpSliderDragStart)=\"onEventLog('cpSliderDragStart', $event)\" \n                                 (cpSliderDragEnd)=\"onEventLog('cpSliderDragEnd', $event,ind)\"/>\n                              </div>\n                        </div>\n                        <br>\n                        <div class=\"row\" *ngFor=\"let i of addSelectFields;let ind=index\">\n                            <label class=\"col-md-1 col-form-label\">Select Size</label>\n                            <div class=\"col-md-3\">\n                                <div class=\"dropdown form-group\">\n                                    <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\" type=\"button\"\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">{{i.selsize}}\n\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                        <div class=\"dropdown-header\">Select Product Size</div>\n                                        <div *ngFor=\"let cs of clothsize\">\n                                            <a class=\"dropdown-item\"\n                                                (click)=\"submitClothSize(cs.id , ind)\">{{cs.size}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-md-1 col-form-label\">Quantity</label>\n                            <div class=\"col-md-3\" style=\"margin-top: 6px!important;\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"productQuantity\" name=\"productQuantity\"\n                                        [(ngModel)]=\"i.quantity\" placeholder=\" Enter Quantity\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-2\" style=\"margin-top: 6px!important;\">\n                                <input [style.background]=\"color1\"\n                                [(ngModel)]=\"i.color\"\n                                 [(colorPicker)]=\"color1\" \n                                 (colorPickerOpen)=\"onEventLog('colorPickerOpen', $event)\" \n                                 (colorPickerClose)=\"onEventLog('colorPickerClose', $event)\" \n                                 (cpInputChange)=\"onEventLog('cpInputChange', $event)\" \n                                 (cpSliderDragStart)=\"onEventLog('cpSliderDragStart', $event)\" \n                                 (cpSliderDragEnd)=\"onEventLog('cpSliderDragEnd', $event,ind)\"/>\n                              </div>\n                            <div class=\"col-md-1\">\n                                <i class=\"fa fa-plus-circle\" aria-hidden=\"true\" (click)=\"addSelectSize()\"\n                                    style=\"font-size: 35px !important;margin-top:9%!important;\"></i>\n                            </div>\n                            <div class=\"col-md-1\" *ngIf=\"ind>0\">\n                                <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\" (click)=\"removeSelectSize(ind)\"\n                                    style=\"font-size: 35px !important;margin-top:9%!important;margin-left: -76%!important;\"></i>\n                            </div>\n\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <p class=\"card-title\">Select Product Image</p>\n                                <span style=\"color: red;\">*Image size must be 800X600</span>\n                                <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"fileinput-new thumbnail\">\n                                        <img src=\"./assets/manage/assets/img/image_placeholder.jpg\" alt=\"...\" *ngIf=\"!isEdit\">\n                                        <img src=\"http://localhost:8090{{this.ProductModel.productMainImage}}\" alt=\"...\" *ngIf=\"isEdit\">\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                    <div>\n                                        <span class=\"btn btn-rose btn-round btn-file\">\n                                            <span class=\"fileinput-new\">Select Product image</span>\n                                            <span class=\"fileinput-exists\">Change</span>\n                                            <input type=\"file\" id=\"productMainImage\" name=\"productMainImage\"\n                                                [(ngModel)]=\"ProductModel.productMainImage\" (change)=\"select($event)\" />\n                                        </span>\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round fileinput-exists\"\n                                            data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\" *ngIf=\"!isEdit\">\n                                <p class=\"card-title\">Select Product Detail Image</p>\n                                <span style=\"color: red;\">*Image size must be 800X600</span>\n                                <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"fileinput-new thumbnail\">\n                                        <img src=\"./assets/manage/assets/img/image_placeholder.jpg\" alt=\"...\">\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                    <div>\n                                        <span class=\"btn btn-rose btn-round btn-file\">\n                                            <span class=\"fileinput-new\">Select Detail Image</span>\n                                            <span class=\"fileinput-exists\">Change</span>\n                                            <input type=\"file\" id=\"productListImage\" name=\"productListImage\"\n                                                [(ngModel)]=\"ImagesModel.productListImage\"\n                                                (change)=\"onSelect($event)\" />\n                                        </span>\n                                        <a href=\"javascript:void(0)\" (click)=\"removeOrChangedImage()\"\n                                            class=\"btn btn-danger btn-round fileinput-exists\"\n                                            data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\" *ngFor=\"let i of addingprdtimg;let ind=index\">\n                                <p class=\"card-title\">Select Product Detail Image</p>\n                                <span style=\"color: red;\">*Image size must be 800X600</span>\n                                <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n\n                                    <div class=\"fileinput-new thumbnail\">\n\n                                        <img src=\"./assets/img/image_placeholder.jpg\" alt=\"...\" *ngIf=\"!isEdit\">\n                                        <img src=\"http://localhost:8090{{i.productListImage}}\" alt=\"...\" *ngIf=\"isEdit\">\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                    <div>\n                                        <span class=\"btn btn-rose btn-round btn-file\">\n                                            <span class=\"fileinput-new\">Select Detail Image</span>\n                                            <span class=\"fileinput-exists\">Change</span>\n                                            <input type=\"file\" id=\"productListImage\" name=\"productListImage\"\n                                                [(ngModel)]=\"ImagesModel.productListImage\" value={}\n                                                (change)=\"onSelect($event)\" />\n                                        </span>\n                                        <a class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"\n                                            (click)=\"removeOrChangedImage(id)\"><i class=\"fa fa-times\"></i> Remove</a>\n\n                                        <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"\n                                            (click)=\"removeImageUploader(ind)\"\n                                            style=\"font-size:25px!important;padding-left:9px!important\"></i>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-md-1\">\n                                <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"\n                                    style=\"font-size: 50px !important;margin-top:130%!important;\"\n                                    (click)=\"addImageUploader()\"></i>\n                                <!-- <i class=\"nc-icon nc-simple-add\" style=\"font-size: 50px !important;\n                                    color: aqua;\"></i> -->\n\n                            </div>\n                        </div>\n                        <br>\n                    </form>\n                </div>\n                <div class=\"card-footer \">\n                    <div class=\"row\">\n                        <div class=\"col-md-10\"></div>\n                        <div class=\"col-md-1\">\n                            <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!productRegForm.form.valid\"\n                                id=\"product-submit\" (click)=\"submitAddProduct()\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add Product End-->\n\n    <!--  All Data Table Start    -->\n\n    <!--Main Categoray Data Table  Start -->\n    <div class=\"card\" *ngIf=\"isMainShow\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Main Category List</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead class=\"text-primary\">\n                        <th class=\"text-center\">\n                            #\n                        </th>\n                        <th>\n                            Category Name\n                        </th>\n                        <th>\n                            Parent Id\n                        </th>\n                        <th>\n                            Created Date\n                        </th>\n                        <th>\n                            Updated Date\n                        </th>\n                        <th class=\"text-right\">\n                            Actions\n                        </th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let cat of category;let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>{{cat.name}}</td>\n                            <td>{{cat.parent}}</td>\n                            <td>{{cat.createddate | date}}</td>\n                            <td>{{cat.updateddate | date}}</td>\n                            <!-- <td class=\"text-right\">{{cat.id}}</td> -->\n\n                            <td class=\"text-right\">\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\"\n                                    data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"mainCatEdit(cat)\">\n                                    <i class=\"fa fa-edit\"></i>\n                                </button>\n                                <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm \" >\n                                    <i class=\"fa fa-edit\"></i>\n                                </button> -->\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm \"\n                                    (click)=\"mainCatRemove(cat.id)\">\n                                    <i class=\"fa fa-times\"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <!--Categoray Data Table end -->\n\n    <!-- Edit Main Category Popup menu start -->\n    <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-notice\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                    </button>\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Update Main Category</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"instruction\">\n                        <form class=\"form-horizontal\" name=\"mainCateRegForm\" #mainCateRegForm=\"ngForm\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-4 col-form-label\">Main Category</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\n                                            placeholder=\"Update Category Name\" [(ngModel)]=\"editMain.name\">\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"modal-footer justify-content-center\">\n                    <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\n                        (click)=\"updateMainCate(editMain)\">Update Main Category</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Edit Main Category Popup menu end -->\n\n    <!--Categoray Data Table  Start -->\n    <div class=\"card\" *ngIf=\"isShow\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\"> Category List</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead class=\"text-primary\">\n                        <th class=\"text-center\">\n                            #\n                        </th>\n                        <th>\n                            Main Category Name\n                        </th>\n                        <th>\n                            Parent Id\n                        </th>\n                        <th>\n                            Category Banners\n                        </th>\n                        <th>\n                            Created Date\n                        </th>\n                        <th>\n                            Updated Date\n                        </th>\n                        <th class=\"text-right\">\n                            Actions\n                        </th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let subcat of subcategory;let i=index\">\n                            <td class=\"text-center\">{{i+1}}</td>\n                            <td>{{subcat.name}}</td>\n                            <td>{{subcat.parent}}</td>\n                            <td class=\"text-center\">\n                                <div class=\"img-container\">\n                                    <img src=\"http://localhost:8090{{subcat.bannersimage}}\">\n                                </div>\n                            </td>\n                            <td>{{subcat.createddate | date}}</td>\n                            <td>{{subcat.updateddate | date}}</td>\n                            <td class=\"text-right\">\n                                <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm \">\n                                    <i class=\"fa fa-user\"></i>\n                                </button> -->\n                                <button type=\"button\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#noticeModal1\"\n                                    class=\"btn btn-success btn-icon btn-sm\" (click)=\"editCategory(subcat)\">\n                                    <i class=\"fa fa-edit\"></i>\n                                </button>\n                                <button type=\"button\" rel=\"tooltip\" (click)=\"mainCatRemove(subcat.id)\"\n                                    class=\"btn btn-danger btn-icon btn-sm \">\n                                    <i class=\"fa fa-times\"></i>\n                                </button>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <!--Categoray Data Table end -->\n\n    <!-- Edit Category Poupu Menu Start -->\n    <div class=\"modal fade\" id=\"noticeModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-notice\" style=\"max-width: 1200px !important;margin: 1.75rem auto;\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                    </button>\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Update Category</h5>\n                </div>\n\n                <div class=\"modal-body\">\n                    <div class=\"instruction\">\n                        <form class=\"form-horizontal\" name=\"mainCateRegForm\" #mainCateRegForm=\"ngForm\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Select Main Category</label>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"dropdown form-group\">\n                                        <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\"\n                                            type=\"button\" name=\"dropdownMenuButton\" id=\"dropdownMenuButton\"\n                                            data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                            aria-expanded=\"false\">{{selectedCat}}\n\n                                        </button>\n                                        <div class=\"dropdown-menu dropdown-menu-right\"\n                                            aria-labelledby=\"dropdownMenuButton\">\n                                            <div class=\"dropdown-header\">Select Main Category</div>\n                                            <div *ngFor=\"let c of category\">\n                                                <a class=\"dropdown-item\"\n                                                    (click)=\"updatemaincatddl(c.id,c.name)\">{{c.name}}</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-2 col-form-label\">Category</label>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\n                                            placeholder=\"Update Category Name\" [(ngModel)]=\"editCat.name\">\n                                    </div>\n                                </div>\n                            </div>\n                            <label class=\"col-sm-2 col-form-label\">Categoty Banners</label>\n                            <div class=\"col-sm-4\">\n                                <span style=\"color: red;\">*Image size must be 800X600</span>\n                                <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"fileinput-new thumbnail\">\n                                        <img src=\"http://localhost:8090{{editCat.bannersimage}}\" alt=\"...\">\n\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                    <div>\n                                        <span class=\"btn btn-rose btn-round btn-file\">\n                                            <span class=\"fileinput-new\">Select Image</span>\n                                            <span class=\"fileinput-exists\">Change</span>\n                                            <input type=\"file\" id=\"BannersImage\" name=\"BannersImage\"\n                                                (change)=\"selectBanners($event)\" />\n                                        </span>\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round fileinput-exists\"\n                                            data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n               \n                <div class=\"modal-footer justify-content-center\">\n                    <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\n                        (click)=\"EditedSaveCategory(editCat)\">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Edit Category Poupu Menu end -->\n\n    <!--Sub Categoray Data Table  Start -->\n    <div class=\"card\" *ngIf=\"isshowsub\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\"> Category List</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead class=\"text-primary\">\n                        <th class=\"text-center\">\n                            #\n                        </th>\n                        <th>\n                            Parent ID\n                        </th>\n                        <th>\n                            Sub Category Name\n                        </th>\n                        <th>\n                            Created Date\n                        </th>\n                        <th>\n                            Updated Date\n                        </th>\n                        <th class=\"text-right\">\n                            Actions\n                        </th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let cat of subprodcat;let i=index\">\n                            <td class=\"text-center\">{{i+1}}</td>\n                            <td>{{cat.parent}}</td>\n                            <td>{{cat.name}}</td>\n                            <td>{{cat.createddate | date}}</td>\n                            <td>{{cat.updateddate | date}}</td>\n                            <td class=\"text-right\">\n                                <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm \">\n                                    <i class=\"fa fa-user\"></i>\n                                </button> -->\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\"\n                                    data-toggle=\"modal\" data-target=\"#noticeModal2\">\n                                    <i class=\"fa fa-edit\"></i>\n                                </button>\n                                <button type=\"button\" rel=\"tooltip\" (click)=\"mainCatRemove(cat.id)\"\n                                    class=\"btn btn-danger btn-icon btn-sm \">\n                                    <i class=\"fa fa-times\"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <!--Sub Categoray Data Table end -->\n\n    <!-- edit sub category start -->\n    <div class=\"modal fade\" id=\"noticeModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-notice\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                    </button>\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Update Category</h5>\n                </div>\n\n                <div class=\"modal-body\">\n                    <div class=\"instruction\">\n                        <form class=\"form-horizontal\" name=\"mainCateRegForm\" #mainCateRegForm=\"ngForm\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-4 col-form-label\">Select Main Category</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"dropdown form-group\">\n                                        <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\"\n                                            type=\"button\" name=\"dropdownMenuButton\" id=\"dropdownMenuButton\"\n                                            data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                            aria-expanded=\"false\">{{selectedCat}}\n\n                                        </button>\n                                        <div class=\"dropdown-menu dropdown-menu-right\"\n                                            aria-labelledby=\"dropdownMenuButton\">\n                                            <div class=\"dropdown-header\">Select Main Category</div>\n                                            <div *ngFor=\"let c of category\">\n                                                <a class=\"dropdown-item\" (click)=\"cateMain(c.id)\">{{c.name}}</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-4 col-form-label\">Select Category</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"dropdown form-group\">\n                                        <button class=\"dropdown-toggle btn btn-primary btn-round btn-block\"\n                                            type=\"button\" name=\"dropdownMenuButton\" id=\"dropdownMenuButton\"\n                                            data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                            aria-expanded=\"false\">{{selectedSubCat}}\n\n                                        </button>\n                                        <div class=\"dropdown-menu dropdown-menu-right\"\n                                            aria-labelledby=\"dropdownMenuButton\">\n                                            <div class=\"dropdown-header\">Select Category</div>\n                                            <div *ngFor=\"let ca of subcategory\">\n                                                <a class=\"dropdown-item\" (click)=\"cateCategory(ca.id)\">{{ca.name}}</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-4 col-form-label\">Add Sub Category</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"form-group\" [ngClass]=\"{'form-group-focus':focus===true}\">\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\n                                            placeholder=\"Enter Category Name\" [(ngModel)]=\"CategoryModel.name\" required\n                                            value=\"\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\n                                            (focus)=\"focus=true\" (blur)=\"focus=false\" #name=\"ngModel\">\n                                    </div>\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"name.errors.required\">Category Name is required</div>\n                                        <div [hidden]=\"!name.errors('pattern')\">Enter Only Characters.</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"modal-footer justify-content-center\">\n                    <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\n                        (click)=\"EditedSavesubCategory(editCat)\">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- edit sub category end -->\n\n    <!-- All Data Table End  -->\n\n</div>");

/***/ }),

/***/ "ewGS":
/*!*******************************************************!*\
  !*** ./src/app/manage/Admin/category/images.model.ts ***!
  \*******************************************************/
/*! exports provided: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
var Images = /** @class */ (function () {
    function Images(productid, mainCategoryId, categoryId, subCategoryId, productListImage, multi) {
        this.productid = productid;
        this.mainCategoryId = mainCategoryId;
        this.categoryId = categoryId;
        this.subCategoryId = subCategoryId;
        this.productListImage = productListImage;
        this.multi = multi;
    }
    return Images;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-category-category-module.js.map