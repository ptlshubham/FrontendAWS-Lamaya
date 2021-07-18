(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-reviews-reviews-module"],{

/***/ "97N2":
/*!********************************************************!*\
  !*** ./src/app/manage/Admin/reviews/reviews.module.ts ***!
  \********************************************************/
/*! exports provided: ReviewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsModule", function() { return ReviewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reviews_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.component */ "S7Zo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _reviews_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews.service */ "Qg1u");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ReviewsModule = /** @class */ (function () {
    function ReviewsModule() {
    }
    ReviewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_reviews_component__WEBPACK_IMPORTED_MODULE_2__["ReviewsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'reviews',
                        component: _reviews_component__WEBPACK_IMPORTED_MODULE_2__["ReviewsComponent"]
                    }
                ])
            ],
            providers: [
                _reviews_service__WEBPACK_IMPORTED_MODULE_6__["ReviewsService"]
            ],
        })
    ], ReviewsModule);
    return ReviewsModule;
}());



/***/ }),

/***/ "KBPl":
/*!************************************************************!*\
  !*** ./src/app/manage/Admin/reviews/reviews.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9BZG1pbi9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "PB9a":
/*!*******************************************************!*\
  !*** ./src/app/manage/Admin/reviews/reviews.model.ts ***!
  \*******************************************************/
/*! exports provided: Reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
var Reviews = /** @class */ (function () {
    function Reviews(id, username, userid, rating, comment) {
        this.id = id;
        this.username = username;
        this.userid = userid;
        this.rating = rating;
        this.comment = comment;
    }
    return Reviews;
}());



/***/ }),

/***/ "Qg1u":
/*!*********************************************************!*\
  !*** ./src/app/manage/Admin/reviews/reviews.service.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsService", function() { return ReviewsService; });
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




var ReviewsService = /** @class */ (function () {
    function ReviewsService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    ReviewsService.prototype.getReview = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getReviewsListURL);
    };
    ReviewsService.prototype.updateRating = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].updatereviewsURL, admin);
    };
    ReviewsService.prototype.removeRating = function (id) {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeReviewsURL + id);
    };
    ReviewsService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    ReviewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ReviewsService);
    return ReviewsService;
}());



/***/ }),

/***/ "S7Zo":
/*!***********************************************************!*\
  !*** ./src/app/manage/Admin/reviews/reviews.component.ts ***!
  \***********************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _raw_loader_reviews_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reviews.component.html */ "l5Bt");
/* harmony import */ var _reviews_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.component.css */ "KBPl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api.service */ "yTNM");
/* harmony import */ var _reviews_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviews.model */ "PB9a");
/* harmony import */ var _reviews_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews.service */ "Qg1u");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(reviewsService, apiservice) {
        this.reviewsService = reviewsService;
        this.apiservice = apiservice;
        this.ReviewsModel = new _reviews_model__WEBPACK_IMPORTED_MODULE_4__["Reviews"];
        this.rating = [];
        this.editrating = [];
        this.getReviewList();
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.model = new Date();
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "nc-icon",
                tickIcon: "nc-check-2"
            });
        }
    };
    ReviewsComponent.prototype.getReviewList = function () {
        var _this = this;
        this.reviewsService.getReview().subscribe(function (data) {
            _this.rating = data;
        });
    };
    ReviewsComponent.prototype.editReview = function (data) {
        this.editrating = data;
    };
    ReviewsComponent.prototype.updateRatings = function (data) {
        this.reviewsService.updateRating(data).subscribe(function (req) {
        });
    };
    ReviewsComponent.prototype.removeReview = function (id) {
        var _this = this;
        this.reviewsService.removeRating(id).subscribe(function (req) {
            _this.getReviewList();
        });
    };
    ReviewsComponent.ctorParameters = function () { return [
        { type: _reviews_service__WEBPACK_IMPORTED_MODULE_5__["ReviewsService"] },
        { type: app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-reviews',
            template: _raw_loader_reviews_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reviews_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_reviews_service__WEBPACK_IMPORTED_MODULE_5__["ReviewsService"],
            app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "l5Bt":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/Admin/reviews/reviews.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Search</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <label class=\"col-md-1 col-form-label\">Select Date</label>\n                <div class=\"col-md-3\">\n                    <!-- <p class=\"card-title\">Select Date</p> -->\n                    <input class=\"form-control\" placeholder=\"{{model}}\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\"\n                        (click)=\"d.toggle()\">\n                    <!-- <input type=\"text\" class=\"form-control datepicker\" value=\"10/05/2018\"> -->\n                </div>\n                <label class=\"col-md-1 col-form-label\">User Name</label>\n                <div class=\"col-md-3\">\n                    <!-- <p class=\"card-title\">Tracking number</p> -->\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\">\n                    </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-outline-primary btn-round\" style=\"margin-top: -3px;\">\n                        <i class=\"nc-icon nc-zoom-split\" title=\"Search\">Search</i>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Customer Review List</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-shopping\">\n                    <thead class=\"\">\n                        <tr>\n                            <th>#</th>\n                            <th>\n                                User Name\n                            </th>\n                            <th>User Id\n                            </th>\n                            <th>\n                                Rating\n                            </th>\n                            <th>\n                                Comment\n                            </th>\n                            <th class=\"text-right\">\n                                Action\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let r of rating;let i=index\">\n                        <tr  >\n                            <td> {{i+1}}</td>\n                            <td>{{r.username}}</td>\n                            <td>{{r.userid}}</td>\n                            <td>\n                               {{r.rating}} <i class=\"fa fa-star\" title=\"Search\"></i>\n                            </td>\n                            <td>\n                              {{r.comment}}\n                            </td>\n\n                            <td class=\"text-right\">\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\"\n                                    data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editReview(r)\">\n                                    <i class=\"fa fa-edit\"></i>\n                                </button>\n                                <button type=\"button\" rel=\"tooltip\" (click)=\"removeReview(r.id)\" class=\"btn btn-danger btn-icon btn-sm \">\n                                    <i class=\"fa fa-times\"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-notice\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                    </button>\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Update Customer Reviews</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"instruction\">\n                        <form class=\"form-horizontal\" name=\"mainCateRegForm\" #mainCateRegForm=\"ngForm\">\n                            <div class=\"row\">\n                                \n                                <label class=\"col-sm-4 col-form-label\">User Name</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\"  id=\"username\" name=\"username\"\n                                        [(ngModel)]=\"editrating.username\" disabled>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-4 col-form-label\">User ID</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\"  id=\"userid\" name=\"userid\"\n                                         [(ngModel)]=\"editrating.userid\" disabled>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-4 col-form-label\">Rating</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" id=\"rating\" name=\"rating\"\n                                         [(ngModel)]=\"editrating.rating\">\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-4 col-form-label\">Commment</label>\n                                <div class=\"col-sm-8\">\n                                    <textarea rows=\"4\" cols=\"80\" class=\"form-control textarea\"\n                                    id=\"comment\" name=\"comment\"  [(ngModel)]=\"editrating.comment\"></textarea>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"modal-footer justify-content-center\">\n                    <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\n                        (click)=\"updateRatings(editrating)\">Update Rating</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=Admin-reviews-reviews-module.js.map